# ChromOptimise - Optimum states analysis for ChromHMM

ChromOptimise is a pipeline that identifies the optimum number of states that should be used with [ChromHMM](https://compbio.mit.edu/ChromHMM/#:~:text=ChromHMM%20is%20software%20for%20learning,and%20spatial%20patterns%20of%20marks.)'s `LearnModel` command for a particular genomic dataset.

## Table of contents
- [About](#About)
- [Getting started](#getting-started)
- [Usage](#usage)
- [Important notes](#important-notes)
- [Software Requirements](#software-requirements)
- [Further information](#further-information)

## About
When using [ChromHMM](https://compbio.mit.edu/ChromHMM/#:~:text=ChromHMM%20is%20software%20for%20learning,and%20spatial%20patterns%20of%20marks.) to learn hidden Markov models for genomic data, it is often difficult to detemine how many states to include:
- Including too many states will result in overfitting your data and introduces redundant states
- Including too few states will result in underfitting your data and thus results in lower model accuracy

This pipeline identifies the optimal number of states to use by finding a model that avoids the two above points. 

After using this pipeline, the user will have greater knowledge over their dataset in the context of ChromHMM, which will allow them to make more informed decisions as they continue to further downstream analysis.

## Getting started
1) Clone this repository
2) Ensure all [required software](#software-requirements) is installed
3) Generate the [file structure](https://github.com/sof202/ChromHMM_Optimum_States/blob/main/information/File_Structure_Schematic.pdf) 
4) Create the configuration files using the [templates](https://github.com/sof202/ChromHMM_Optimum_States/wiki/Configuration-Files-Setup) provided
5) Place configuration files in the [configuration](https://github.com/sof202/ChromHMM_Optimum_States/tree/main/configuration) directory
6) Run the [`setup`](https://github.com/sof202/ChromHMM_Optimum_States/blob/main/setup) executable


## Usage
After completing ['getting started'](#getting-started), run each of the shell scripts in [JobSubmission](https://github.com/sof202/ChromHMM_Optimum_States/tree/main/JobSubmission) sequentially. 
\
Depending on your chosen dataset, you may not need to run all scripts. For example:
- If you are not downloading data from EGA, the first two scripts are not necessary. 
- If your data is already processed (quality controlled), then start from the subsampling script.

There also exists supplementary scripts for further information on your chosen data set. Most importantly, thresholds used in redundancy analysis can be inferred from the results of [Redundancy_Threshold_Optimisation](https://github.com/sof202/ChromHMM_Optimum_States/tree/main/supplementary/Redundancy_Threshold_Optimisation). Further details for these scripts can be found in the [wiki](https://github.com/sof202/ChromHMM_Optimum_States/wiki/Pipeline-Explanation). 

## Important notes
### Note 1
This pipeline was designed with a very large dataset in mind (the dataset being blueprint obtained from EGA). This particular dataset includes a large quantity of ChIP-Seq data from mature neutrophils in blood samples. 

Some functionality of the main pipeline is designed with this dataset in mind, for example:
- The subsampling stage (the dataset has hundreds of files for each epigenetic mark)
- The assembly used with ChromHMM (hg19)

### Note 2
To display a short version of the preamble for each script in the command line, run the script with a `-h` or `--help` flag.

## Software requirements
This pipeline requires a unix-flavored OS with the following software installed:
- Bash (>=4.2.46(2))
- SLURM Workload Manager (>=20.02.3)
- SAMtools (>=1.9)
- R (>=4.3.1)
- Java (>= openjdk 13.0.2)
- ChromHMM (>=1.23)
- readlink (>= 8.22)
- sed (>=4.2.2)

## Further information
Further information on the following topics can be found in the [wiki](https://github.com/sof202/ChromHMM_Optimum_States/wiki):
- Specific information on how the pipeline works
- Templates for the configuration files sourced in each script
- The factors that are likely to effect the optimum number of states for the chosen dataset
- Estimated processing times for each script (subject to CPU performance) 
- Estimated peak heap memory consumption for each script
- Information on SLURM workload manager, which is used for job submission


For any further enquiries, please open an issue or contact Sam Fletcher:
\
s.o.fletcher@exeter.ac.uk

  
