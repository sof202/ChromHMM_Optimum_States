#!/bin/bash
# Export all environment variables to the batch job
#SBATCH --export=ALL 
# Submit to the mrc queue for faster queue times
#SBATCH -p mrcq 
# This can be a lengthy process for particularly large models
# Consult information/Processing_Times.md for expected time
#SBATCH --time=40:00:00 
#SBATCH -A Research_Project-MRC190311
#SBATCH --nodes=1
#SBATCH --ntasks-per-node=16
# Possible large memory consumption for big models, difficult to give good estimates
#SBATCH --mem=32G 
#SBATCH --mail-type=END # Send an email after the job is done
# Temporary log file, later to be removed
#SBATCH --output=temp%j.log
# Temporary error file, later to be removed
#SBATCH --error=temp%j.err
#SBATCH --job-name=Big_Model

## =================================================================================##
##                                                                                  ||
##                                     PREAMBLE                                     ||
##                                                                                  ||
## =================================================================================##
## PURPOSE:                                                                         ||
## Generate a very large model using the binarized data generated in                ||
## 4_BinarizeBamFiles.sh with a random initialisation of parameters                 ||
## (with a set seed).                                                               ||
## =================================================================================##
## AUTHOR: Sam Fletcher                                                             ||
## CONTACT: s.o.fletcher@exeter.ac.uk                                               ||
## CREATED: November 2023                                                           ||
## =================================================================================##
## PREREQUISITES: Run 4_BinarizeBamFiles.sh                                         ||
## =================================================================================##
## DEPENDENCIES: Java, ChromHMM                                                     ||
## =================================================================================##
## INPUTS:                                                                          ||
## $1 -> Size of model (default: 20)                                                ||
## $2 -> Random seed (default: 1)                                                   ||
## =================================================================================##
## OUTPUTS:                                                                         ||
## The emission parameter matrix of the model (.png,.txt,.svg)                      ||
## The transition parameter matrix of the model (.png,.txt,.svg)                    ||
## Full model file                                                                  ||
## The overlap and fold enrichment files for existing genomic annotations           ||
## The log files produced by ChromHMM.jar                                           ||
## The maximum achieved estimated log likelihood achieved by the model              ||
## =================================================================================##

## ======================== ##
##    HELP FUNCTIONALITY    ##
## ======================== ##

if [[ "$1" == "--help" || "$1" == "-h" ]]; then
    echo "================================================================"
    echo "Purpose: Generates a model unrestricted by ChromHMM LearnModel's"
    echo "default size limits by using random initialisation."
    echo "Author: Sam Fletcher"
    echo "Contact: s.o.fletcher@exeter.ac.uk"
    echo "Dependencies: Java, ChromHMM"
    echo "Inputs:"
    echo "\$1 -> Size of model (default: 20)"
    echo "\$2 -> Random seed (default: 1)"
    echo "================================================================"
    exit 0
fi

## ============ ##
##    SET UP    ##
## ============ ##

# CHANGE THESE TO YOUR OWN CONFIG FILES
source "/lustre/projects/Research_Project-MRC190311/scripts/integrative\
/ChromHMM_OptimumStates/configuration/FilePaths.txt"
source "/lustre/projects/Research_Project-MRC190311/scripts/integrative\
/ChromHMM_OptimumStates/configuration/LogFileManagement.sh"

# Output and error files renamed to:
# ModelSize-[model size]~[job id]~[date]-[time]

ln "${SLURM_SUBMIT_DIR}/temp${SLURM_JOB_ID}.log" \
"${LOG_FILE_PATH}/ModelSize-$1~${SLURM_JOB_ID}~${timestamp:=}.log"
ln "${SLURM_SUBMIT_DIR}/temp${SLURM_JOB_ID}.err" \
"${LOG_FILE_PATH}/ModelSize-$1~${SLURM_JOB_ID}~$timestamp.err"

## ============== ##
##    VARIABLES   ##
## ============== ##

model_size=$1
seed=$2

## ====== DEFAULTS ====================================================================
if ! [[ "${model_size}" =~ ^[0-9]+$ ]]; then
    model_size=20
    echo "Model size given is invalid, using default value of: ${model_size}."
fi

if ! [[ "$seed" =~ ^[0-9]+$ ]]; then
    seed=1
    echo "Random seed given is invalid, using defualt value of: ${seed}." 
fi
# =====================================================================================

## ================== ##
##   FILE EXISTANCE   ##
## ================== ##

cd "${BINARY_DIR}" || { >&2 echo "ERROR: \${BINARY_DIR} - ${BINARY_DIR} doesn't exist, \
make sure config.txt is pointing to the correct directory"; finishing_statement 1; }
if [[ -z "$(ls -A)" ]]; then
    { >&2 echo -e "ERROR: \${BINARY_DIR} - ${BINARY_DIR} is empty.\n"\
    "Ensure that 4_BinarizeBamFiles.sh has been ran before this script."
    finishing_statement 1; }
fi

## ========== ##
##    MAIN    ##
## ========== ##

echo "Learning a model with: ${model_size} states and with random seed: ${seed}..."

module purge
module load Java

cd "${BIG_MODELS_DIR}" || { >&2 echo "ERROR: \${BIG_MODELS_DIR} - ${BIG_MODELS_DIR} \
doesn't exist, make sure config.txt is pointing to the correct directory"
finishing_statement 1; }

java -mx30G \
-jar "${CHROMHMM_MAIN_DIR}/ChromHMM.jar" LearnModel \
-noautoopen \
-nobed \
-init random \
-s "${seed}" \
"${BINARY_DIR}" "${BIG_MODELS_DIR}" "${model_size}" hg19 > \
"ChromHMM.Output.ModelSize.${model_size}.txt"

echo "Writing estimated log likelihood to: likelihood.ModelSize.${model_size}.txt..."
# grep removes the terminal logs associated with writing to files.
# The tail and awk locate the final estimated log likelihood
grep "       " "ChromHMM.Output.ModelSize.${model_size}.txt" | \
tail -1 | \
awk '{print $2}' >> \
"likelihood.ModelSize.${model_size}.txt" 

finishing_statement 0