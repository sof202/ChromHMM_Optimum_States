<p align="center">
  <img src="https://github.com/sof202/ChromOptimise/assets/147140110/86c917e0-87ce-4e1f-b52e-f8018dcbb436" />
</p>

</p>
<p align="center">
    <a href="https://www.codefactor.io/repository/github/sof202/chromoptimise" alt="CodeFactor">
        <img src="https://img.shields.io/codefactor/grade/github/sof202/ChromOptimise?style=for-the-badge&color=dark-green" /></a>
    <a href="https://github.com/sof202/ChromOptimise/commits/main/" alt="Commit activity">
        <img src="https://img.shields.io/github/commit-activity/m/sof202/ChromOptimise?style=for-the-badge&color=dark-green" /></a>
    <a href="https://github.com/sof202/ChromOptimise/blob/main/LICENSE" alt="License">
        <img src="https://img.shields.io/github/license/sof202/ChromOptimise?style=for-the-badge&color=dark-green" /></a>
</p>

ChromOptimise is a pipeline that identifies the optimum number of states that 
should be used with 
[ChromHMM](https://compbio.mit.edu/ChromHMM/#:~:text=ChromHMM%20is%20software%20for%20learning,and%20spatial%20patterns%20of%20marks.)'s
`LearnModel` command for a particular genomic dataset.

For more specific information, please head over to the 
[**wiki**](https://sof202.github.io/ChromOptimise/).

## Table of contents
- [About](#About)
- [Getting started](#getting-started)
- [Usage](#usage)
- [Software Requirements](#software-requirements)
- [Further information](#further-information)

## Motivation
When using 
[ChromHMM](https://compbio.mit.edu/ChromHMM/#:~:text=ChromHMM%20is%20software%20for%20learning,and%20spatial%20patterns%20of%20marks.)
to learn hidden Markov models for genomic data, it is often difficult to 
determine how many states to include:

- Including too many states will result in overfitting your data and 
introduces redundant states
- Including too few states will result in underfitting your data and thus 
results in lower model accuracy

This pipeline identifies the optimal number of states to use by finding a 
model that avoids the two above points. 

After using this pipeline, the user will have greater knowledge over their
dataset in the context of ChromHMM, which will allow them to make more informed
decisions as they continue to further downstream analysis.

## Getting started
1) Clone this repository
2) Ensure all [required software](#software-requirements) is installed
3) If using [LDSC](https://github.com/bulik/ldsc), download 1000 genomes files 
(or similar) from this [repository](https://zenodo.org/records/10515792)
4) Copy the configuration files to a memorable location (recommended: next to 
your data) and then fill them in using the templates provided. DO NOT CHANGE
THE NAMES OF THESE FILES.
    - If you are feeling lazy. You can just edit the files where they already
    are. The suggetsion to move them is to accomodate having mutliple configs
    for different projects.
5) Run the [`setup`](https://github.com/sof202/ChromOptimise/tree/main/Setup/setup) 
executable, providing the path to the directory with the config files in them
as the first argument:

```bash
./setup path/to/configuration/directory
```

## Usage
After completing ['getting started'](#getting-started), run the master script 
(ChromOptimise.sh) in the command line with:

```bash
bash ChromOptimise.sh path/to/your/configuration/directory
```

Alternatively, you can run each of the shell scripts in 
[JobSubmission](https://github.com/sof202/ChromOptimise/tree/main/JobSubmission)
sequentially. 

```bash
sbatch 1_BinarizeFiles.sh path/to/your/configuration/directory
```

For further information please see the
[pipeline explanation](https://sof202.github.io/ChromOptimise/category/main-pipeline---usage-and-explanation).

There also exists supplementary scripts for further information on your chosen
data set. Most importantly, thresholds used in redundancy analysis can be
inferred from the results of
[Redundancy_Threshold_Optimisation](https://github.com/sof202/ChromOptimise/tree/main/supplementary/Redundancy_Threshold_Optimisation).
Further details for these scripts can be found in the
[wiki](https://sof202.github.io/ChromOptimise/ChromOptimise/Supplementary-pipeline-explanation). 


## Software requirements
This pipeline requires a unix-flavoured OS with the following software installed:
- [Bash](https://www.gnu.org/software/bash/) (>=4.2.46(2))
- [SLURM Workload Manager](https://slurm.schedmd.com/overview.html) (>=20.02.3)
- [conda](https://www.biostars.org/p/160144/)(>=23.10.0)
- [ChromHMM](https://compbio.mit.edu/ChromHMM/#:~:text=ChromHMM%20is%20software%20for%20learning,and%20spatial%20patterns%20of%20marks.) (>=1.23)
- [sed](https://www.gnu.org/software/sed/) (>=4.2.2)
- [LDSC](https://github.com/bulik/ldsc) (>=aa33296)
- [gzip](https://www.gnu.org/software/gzip/) (>=1.5)
- [awk](https://www.gnu.org/software/gawk/) (>=4.0.2)

Additionally, conda environments are created for you to obtain:
- R v4.4.1
- java-jdk v8.0.112
- bedtools v2.27.1

## Further information
This study makes use of data generated by the Blueprint Consortium. A full list
of the investigators who contributed to the generation of the data is available
from www.blueprint-epigenome.eu. Funding for the project was provided by the
European Union's Seventh Framework Programme (FP7/2007-2013) under grant
agreement no 282510 – BLUEPRINT.

For any further enquiries, please open an issue or contact Sam Fletcher:
\
s.o.fletcher@exeter.ac.uk

  
