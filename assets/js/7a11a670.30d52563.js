"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3992],{8232:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>h});var i=t(5893),o=t(1151);const s={sidebar_position:2},r="Configuration files setup",a={id:"ChromOptimise/Configuration-Files-Setup",title:"Configuration files setup",description:"You will need to create three configuration files for this pipeline to work:",source:"@site/docs/ChromOptimise/Configuration-Files-Setup.md",sourceDirName:"ChromOptimise",slug:"/ChromOptimise/Configuration-Files-Setup",permalink:"/ChromOptimise/ChromOptimise/Configuration-Files-Setup",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentationSidebar",previous:{title:"ChromHMM overview",permalink:"/ChromOptimise/ChromOptimise/ChromHMM-overview"},next:{title:"Main Pipeline - Usage and Explanation",permalink:"/ChromOptimise/category/main-pipeline---usage-and-explanation"}},l={},h=[{value:"Data directory structure",id:"data-directory-structure",level:2},{value:"FilePaths.txt",id:"filepathstxt",level:2},{value:"config.R",id:"configr",level:2},{value:"LogFileManagement.sh",id:"logfilemanagementsh",level:2},{value:"ChromOptimiseConfig.txt",id:"chromoptimiseconfigtxt",level:2}];function c(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"configuration-files-setup",children:"Configuration files setup"}),"\n",(0,i.jsx)(n.p,{children:"You will need to create three configuration files for this pipeline to work:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#filepathstxt",children:"FilePaths.txt"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#configr",children:"config.R"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#logfilemanagementsh",children:"LogFileManagement.sh"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"These files are used by each of the R and bash scripts to aid in organisation of the scripts and avoid repetition."}),"\n",(0,i.jsxs)(n.p,{children:["If you want to just run one script that does everything for you (no need to understand how each script works), you can create one more configuration file in ",(0,i.jsx)(n.a,{href:"#chromoptimiseconfigtxt",children:"ChromOptimiseConfig.txt"}),". This file will be sourced in ChromOptimise.sh and all arguments will be parsed for you."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"The scripts in this pipeline do not create the directory structure themselves. This is to avoid large files being dumped in unwanted locations. Please check your file paths are correct and then run Create_File_Structure.sh."})}),"\n",(0,i.jsx)(n.admonition,{title:"EOL errors",type:"warning",children:(0,i.jsx)(n.p,{children:"You must ensure that these files are written with EOL: \\n (LF) and not EOL: \\r\\n (CRLF)."})}),"\n",(0,i.jsxs)(n.p,{children:["After one creates each of these configuration files, place them in the 'configuration' directory. Then run the ",(0,i.jsx)(n.code,{children:"setup"})," executable from the main directory."]}),"\n",(0,i.jsx)(n.admonition,{title:"blueprint",type:"note",children:(0,i.jsx)(n.p,{children:"The pipeline was completed with blueprint data in mind, if your data is already downloaded, processed, binarized etc. then the associated lines in the config files might not be required."})}),"\n",(0,i.jsx)(n.h2,{id:"data-directory-structure",children:"Data directory structure"}),"\n",(0,i.jsx)(n.p,{children:"A guide for the structure of the data directory is given below (You only need to create the directories starting with an integer):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"Main_Data_Directory\n\u251c\u2500\u2500 0_Downloaded_Files\n\u251c\u2500\u2500 1_Organised_Raw_Bam_Files\n\u2502   \u251c\u2500\u2500 Epigenetic_Mark_1\n\u2502   \u251c\u2500\u2500 ...\n\u2502   \u2514\u2500\u2500 Epigenetic_Mark_n\n\u251c\u2500\u2500 2_Processed_Bam_Files\n\u2502   \u251c\u2500\u2500 Epigenetic_Mark_1\n\u2502   \u251c\u2500\u2500 ...\n\u2502   \u2514\u2500\u2500 Epigenetic_Mark_n\n\u251c\u2500\u2500 3_Subsampled_Bam_Files\n\u2502   \u251c\u2500\u2500 cellmarkfiletable.txt\n\u2502   \u2514\u2500\u2500 Results_From_Run_n\n\u251c\u2500\u2500 4_Binary_Files\n\u2502   \u2514\u2500\u2500 Results_From_Run_n\n\u2502       \u2514\u2500\u2500 Binary_files for each chromosome\n\u251c\u2500\u2500 5_Model_Files\n\u2502   \u2514\u2500\u2500 Results_From_Run_n\n\u2502       \u251c\u2500\u2500 Likelihood_Values\n\u2502       \u2502   \u2514\u2500\u2500 likelihoods.txt \n\u2502       \u251c\u2500\u2500 state_assignments (STATEBYLINE)\n\u2502       \u2502   \u2514\u2500\u2500 [cell].statebyline.txt \n\u2502       \u2514\u2500\u2500 ChromHMM model files\n\u251c\u2500\u2500 6_Optimum_Number_Of_States\n\u2502   \u2514\u2500\u2500 Results_From_Run_n\n\u2502       \u251c\u2500\u2500 Euclidean_distances\n\u2502       \u2502   \u2514\u2500\u2500 Euclidean_distances_model-n.txt \n\u2502       \u251c\u2500\u2500 Flanking_states\n\u2502       \u2502   \u2514\u2500\u2500 Likeliest_flanking_states_model-n.txt \n\u2502       \u251c\u2500\u2500 Isolation_scores\n\u2502       \u2502   \u2514\u2500\u2500 Isolation_scores_model-n.txt \n\u2502       \u251c\u2500\u2500 Redundant_states_model-n.txt \n\u2502       \u2514\u2500\u2500 OptimumNumberOfStates.txt\n\u251c\u2500\u2500 7_LDSC_Assessment_Files\n\u2502   \u2514\u2500\u2500 Results_From_Run_n\n\u2502       \u251c\u2500\u2500 annotation\n\u2502       \u2502   \u251c\u2500\u2500 ChromHMM.n.l2.ldscore.gz\n\u2502       \u2502   \u251c\u2500\u2500 ChromHMM.n.annot\n\u2502       \u2502   \u251c\u2500\u2500 ChromHMM.n.log\n\u2502       \u2502   \u251c\u2500\u2500 ChromHMM.n.M\n\u2502       \u2502   \u2514\u2500\u2500 ChromHMM.n.M_5_50\n\u2502       \u251c\u2500\u2500 heritability\n\u2502       \u2502   \u251c\u2500\u2500 gwas_trait_n.results\n\u2502       \u2502   \u2514\u2500\u2500 gwas_trait_n.log\n\u2502       \u2514\u2500\u2500 plots\n\u2502           \u251c\u2500\u2500 All_categories\n\u2502           \u2502   \u251c\u2500\u2500 Enrichment_heatmap.png\n\u2502           \u2502   \u2514\u2500\u2500 Enrichment_pvalues_gwas_trait_n.png\n\u2502           \u2514\u2500\u2500 State_categories\n\u2502               \u251c\u2500\u2500 Enrichment_heatmap.png\n\u2502               \u2514\u2500\u2500 Enrichment_pvalues_gwas_trait_n.png\n\u2514\u2500\u2500 8_Big_Model_Files\n    \u2514\u2500\u2500 Plots\n        \u251c\u2500\u2500 Euclidean_Distance_Histrograms\n        \u2514\u2500\u2500 Transition_Maxima_Scatter_Plots\n\n\nLDSC_reference_files\n\u251c\u2500\u2500 PLINK_files\n\u251c\u2500\u2500 Weights\n\u251c\u2500\u2500 Baseline_files \n\u2514\u2500\u2500 GWAS_traits\n"})}),"\n",(0,i.jsx)(n.h2,{id:"filepathstxt",children:"FilePaths.txt"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",metastring:'title="FilePaths.txt"',children:'## Data directories\n\nexport MAIN_DIR="full/path/to/main/directory"\nexport DOWNLOAD_DIR="${MAIN_DIR}/0_Downloads"\nexport RAW_DIR="${MAIN_DIR}/1_RawBamFiles"\nexport PROCESSED_DIR="${MAIN_DIR}/2_ProcessedBamFiles"\nexport SUBSAMPLED_DIR="${MAIN_DIR}/3_SubsampledBamFiles"\nexport BINARY_DIR="${MAIN_DIR}/4_BinarizedBamFiles"\nexport MODEL_DIR="${MAIN_DIR}/5_ModelFiles"\nexport OPTIMUM_STATES_DIR="${MAIN_DIR}/6_OptimumNumberOfStates"\nexport LD_ASSESSMENT_DIR="${MAIN_DIR}/7_LDSCFiles"\nexport COMPARE_DIR="${MAIN_DIR}/8_ModelComparisonFiles"\nexport BIG_MODELS_DIR="${MAIN_DIR}/9_BigModelFiles"\n\n## LDSC data directories\n\nexport LD_DIR="full/path/to/ldsc/directory"\nexport LD_PLINK_DIR="${LD_DIR}/PLINK_files"\nexport LD_WEIGHTS_DIR="${LD_DIR}/weights_files"\nexport LD_FRQ_DIR="${LD_DIR}/frq_files"\nexport LD_GWAS_TRAITS_DIR="${LD_DIR}/gwas_traits"\nexport LD_BASELINE_DIR="${LD_DIR}/baseline"\n\n## Script directories\n\nexport SCRIPTS_DIR="full/path/to/this/repository"\nexport RSCRIPTS_DIR="${SCRIPTS_DIR}/Rscripts"\nexport LOG_DIR="${SCRIPTS_DIR}/LogFiles"\n\n## Pyega3/conda directories\n\nexport CONDA_SHELL="path/to/conda/etc/folder"\nexport PYEGA_ENVIRONMENT="path/to/pyega3/conda/environment"\nexport LDSC_ENVIRONMENT="path/to/ldsc/conda/environment"\nexport CREDENTIALS="path/to/EGA/credentials"\n\n## ChromHMM file locations\n\nexport CHROMHMM_MAIN_DIR="/path/to/ChromHMM/main/directory"\nexport CHROMHMM_CHROM_SIZES="${CHROMHMM_MAIN_DIR}/path/to/chromosome/sizes"\n\n## LDSC software\n\nexport LD_SOFTWARE_DIR="path/to/ldsc/main/directory"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"configr",children:"config.R"}),"\n",(0,i.jsxs)(n.p,{children:["To get a good value for the thresholds in the redundancy parameters section, please consult the ",(0,i.jsx)(n.a,{href:"/category/supplementary-pipeline---usage-and-explanation",children:"supplementary pipeline"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-R",metastring:'title="config.R"',children:"## Redundancy parameters\n\nemissions_threshold=VALUE\nisolation_threshold=VALUE\n\n## Number of marks used in analysis\n\nnumber_of_marks=VALUE\n"})}),"\n",(0,i.jsx)(n.h2,{id:"logfilemanagementsh",children:"LogFileManagement.sh"}),"\n",(0,i.jsxs)(n.p,{children:["This script will produce information on the time for the script to complete, reducing repetition of code\n",(0,i.jsx)(n.br,{}),"\n","(Alternatively you can use the ",(0,i.jsx)(n.code,{children:"time"})," command with the scripts, this is not available on our HPC)."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",metastring:'title="LogFileManagement.sh"',children:'#!/bin/bash\n## ============= ##\n##   JOB START   ##\n## ============= ##\n\necho "Job \'${SLURM_JOB_NAME}\' started at:"\ndate -u\n\nstart_time=$(date +%s)\n\nLOG_FILE_PATH="${LOG_DIR}/$SLURM_JOB_NAME/$USER"\nmkdir -p "${LOG_FILE_PATH}"\ntimestamp=$(date -u +%Y.%m.%d-%H_%M)\nexport timestamp\n\n## ============= ##\n##   FUNCTIONS   ##\n## ============= ##\n\n## ====== FUNCTION : finishing_statement() ===========================================\n## Description: Give finishing message then exit\n## Globals: \n##     start_time\n## Locals:\n##     end_time\n##     time_taken\n## Arguments:\n##     exit code\n## ===================================================================================\nfinishing_statement(){\n    echo "Job finished with exit code $1 at:"\n    date -u\n    local end_time\n    local time_taken\n    end_time=$(date +%s)\n    time_taken=$((end_time-start_time))\n    echo "Job took a total of: ${time_taken} seconds to finish."\n    exit "$1"\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"chromoptimiseconfigtxt",children:"ChromOptimiseConfig.txt"}),"\n",(0,i.jsxs)(n.p,{children:["This is the configuration file that enables the user to run all of the files in the ",(0,i.jsx)(n.a,{href:"/category/main-pipeline---usage-and-explanation",children:"main pipeline"})," sequentially. Options are briefly described in comments here, but for a better picture of what to put here we recommend looking at the pipeline explanation. If you do not plan on using certain scripts at all (which is likely the case for 0_EGADownloading.sh for example) you can just remove the options section for those selected scripts."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",metastring:'title="ChromOptimiseConfig.txt"',children:"# Which shell script to start from (provide a number from 0 to 6)\nexport STARTING_SCRIPT=\n\n# This is the list of marks that you intend to use in the analysis\n# Please provide this as a white space separated array\n# i.e. (mark1 mark2 mark3 mark4 ...)\nexport LIST_OF_MARKS=\n\n# This is a FULL file path to the FOFN which contains files you want to\n# download using the pyega3 client\nexport FILE_OF_FILE_NAMES=path/to/file\n\n# This is a threshold for the Phred score used in the processing stage\n# (which reads to discard due to low base accuracy)\nexport PRED_SCORE_THRESHOLD=20\n\n# This is the sample size (as a percentage) to use in the subsampling stage\n# If your data is small in size, the recommended value is 100\nexport SAMPLE_SIZE=50\n\n# This is the bin size to use during the binarization stage\n# ChromHMM recommends a default of 200\nexport BIN_SIZE=200\n\n# This is the assembly that your data is alligned to.\nexport ASSEMBLY=hg19\n\n# This is the number of models you wish to create in the model learning stage\n# Read the documentation on 5_batch_CreateIncrementalModel.sh for help\n# here\nexport NUMBER_OF_MODELS=4\n\n# This is the chromosome identifier (1-22, x,y,m) for the chromosome that is\n# to be used with the isolation metric (see Pipeline-explanation). Unless\n# this matters for your analysis, keep this at 1.\nexport CHROMOSOME_IDENTIFIER=1\n\n# If you are running the script starting from script 7 (in which case this\n# master script is a little overkill), you need to input the number of states\n# you deem to be optimal. If starting on script <=6, this is not required\nexport OPTIMUM_NUMBER_OF_STATES=\n\n# The following are the time you wish to allocate to each job (without this\n# jobs have no maximum walltime and can run forever).\n# Variables are numbered by their corresponding script number \n# (0 -> EGADownloading.sh)\n# Times must be in the format: hh:mm:ss\nexport MAXTIME_0=96:00:00\nexport MAXTIME_1=00:30:00\nexport MAXTIME_2=12:00:00\nexport MAXTIME_3=12:00:00\nexport MAXTIME_4=04:00:00\nexport MAXTIME_5=12:00:00\nexport MAXTIME_6=00:20:00\nexport MAXTIME_7=00:10:00\n\n\n# The following are the array sizes you wish to use for batch jobs (processing\n# and model learning scripts). Using a number larger than the number of cores\n# on your system is not recommended\nexport PROCESSING_ARRAY_SIZE=4\nexport MODEL_LEARNING_ARRAY_SIZE=4\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var i=t(7294);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);