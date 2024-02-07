#!/bin/bash
# Export all enviroment variables to the batch job
#SBATCH --export=ALL
# Submit to the mrcq for faster queue times
#SBATCH -p mrcq
# Downloading can take a long time if files are large/abundant
#SBATCH --time=150:00:00
#SBATCH -A Research_Project-MRC190311
#SBATCH --nodes=1
#SBATCH --ntasks-per-node=16
# Send email at job completion
#SBATCH --mail-type=END
# Temporary log file, later to be removed
#SBATCH --output=temp%j.log
# Temporary error file, later to be removed
#SBATCH --error=temp%j.err
#SBATCH --job-name=0_Download_Files

## =================================================================================##
##                                                                                  ||
##                                     PREAMBLE                                     ||
##                                                                                  ||
## =================================================================================##
## PURPOSE:                                                                         ||
## Downloads files from EGA using pyega3.                                           ||
## =================================================================================##
## AUTHOR: Sam Fletcher                                                             ||
## CONTACT: s.o.fletcher@exeter.ac.uk                                               ||
## CREATED: November 2023                                                           ||
## =================================================================================##
## PREREQUISITES:                                                                   ||
## Create a conda environement that has pyega3 installed in it                      ||
## Change source file in |MAIN| to be your personal etc/profile.d/conda.sh file     ||
## Create a .json file containing your EGA login credentials                        ||
## =================================================================================##
## DEPENDENCIES:                                                                    ||
## Miniconda/Conda/Anaconda                                                         ||
## Python                                                                           ||
## Pyega3                                                                           ||
## =================================================================================##
## INPUTS:                                                                          ||
## $1 -> Location of configuation file directory                                    ||
## $2 -> File of file names to download from EGA.                                   ||
## $3 -> Full file path to your conda environment for pyega3                        || 
## =================================================================================##
## OUTPUTS:                                                                         ||
## NONE                                                                             ||
## =================================================================================##

## ======================== ##
##    HELP FUNCTIONALITY    ##
## ======================== ##

if [[ "$1" == "--help" || "$1" == "-h" ]]; then
    echo "======================================================================="
    echo "Purpose: Downloads files from EGA using a list of file/directory names."
    echo "Author: Sam Fletcher"
    echo "Contact: s.o.fletcher@exeter.ac.uk"
    echo "Dependencies: Miniconda/Conda/Anaconda, EGA login credentials, Python"
    echo "Inputs:"
    echo "\$1 -> Location of configuration file directory"
    echo "\$2 -> File of file names to download from EGA."
    echo "======================================================================="
    exit 0
fi

## ============ ##
##    SET UP    ##
## ============ ##

echo "Job '${SLURM_JOB_NAME}' started at:"
date -u

start_time=$(date +%s)

# Configuration file is required for file paths

configuration_directory=$1

source "${configuration_directory}/FilePaths.txt" || \
{ echo "The configuration file does not exist in the specified location: \
${configuration_directory}"; exit 1; }


LOG_FILE_PATH="${LOG_DIR}/$SLURM_JOB_NAME/$USER"
mkdir -p "${LOG_FILE_PATH}"
timestamp=$(date -u +%Y.%m.%d-%H_%M)

# Output and error files renamed to:
# [file name]~[job id]~[date]-[time]

mv "${SLURM_SUBMIT_DIR}/temp${SLURM_JOB_ID}.log" \
"${LOG_FILE_PATH}/${SLURM_JOB_ID}~$timestamp.log"
mv "${SLURM_SUBMIT_DIR}/temp${SLURM_JOB_ID}.err" \
"${LOG_FILE_PATH}/${SLURM_JOB_ID}~$timestamp.err"

## =============== ##
##    VARIABLES    ##
## =============== ##

text_file_containing_inodes=$2
conda_environment=$3

## ========== ##
##    MAIN    ##
## ========== ##

module purge
module load Miniconda3

# Conda environments will not be activated until one uses `conda init bash`
# However, running this will result in a new shell being created.
# This means one cannot have their environment activatable and activate it
# Using the conda shell script in the [conda]/etc folder is a work around for this.
source /lustre/home/sof202/miniconda3/etc/profile.d/conda.sh 

conda activate "${conda_environment}"

# Read each line of text file
# [[ -n "$line" ]] handles the last line that has no newline character
while IFS= read -r line || [[ -n "$line" ]]; do
    # CHANGE "egaConfig.json" TO FILE WITH EGA LOGIN CREDENTIALS
    # -c 5 -> Failed downloads are retried 5 times before moving on to next file
    pyega3 -c 5 -cf ~/Tools/pyegaDownloading/egaConfig.json fetch \
    "$line" --output-dir "${DOWNLOAD_DIR}"
done < "${text_file_containing_inodes}"


## ======================= ##
##   FINISHING STATEMENT   ##
## ======================= ##

rm "${SLURM_SUBMIT_DIR}/pyega3_output.log"
echo "Job finished with exit code 0 at:"
date -u
end_time=$(date +%s)
time_taken=$((end_time-start_time))
echo "Job took a total of: ${time_taken} seconds to finish."
