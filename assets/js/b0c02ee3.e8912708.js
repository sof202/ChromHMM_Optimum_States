"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4943],{2599:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>h,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var n=i(5893),t=i(1151);const o={sidebar_position:6},r="Processing times",l={id:"ChromOptimise/Processing-Times",title:"Processing times",description:"SLURM workload manager has the feature of introducing a maximum wall time into each script. The default maximum wall time is set in the #SBATCH section of each script and can be overridden when setting the --time option when using sbatch. If the time of execution for a script exceeds this maximum wall time, it will terminate early. This is useful as it helps with workload management on HPCs that a large number of users have access to, and also reduces the effects of non-halting programs.",source:"@site/docs/ChromOptimise/Processing-Times.md",sourceDirName:"ChromOptimise",slug:"/ChromOptimise/Processing-Times",permalink:"/ChromOptimise/ChromOptimise/Processing-Times",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"documentationSidebar",previous:{title:"Factors that affect the output",permalink:"/ChromOptimise/ChromOptimise/Factors-that-affect-the-output"},next:{title:"Memory profiling",permalink:"/ChromOptimise/ChromOptimise/Memory-Profiling"}},h={},a=[{value:"General CPU information which testing was conducted on",id:"general-cpu-information-which-testing-was-conducted-on",level:2},{value:"0_DownloadBluePrint.sh",id:"0_downloadblueprintsh",level:2},{value:"1_MovingFilesToSingleDirectory.sh",id:"1_movingfilestosingledirectorysh",level:2},{value:"2_batch_ProcessBamFiles.sh",id:"2_batch_processbamfilessh",level:2},{value:"3_SubsampleBamFiles.sh",id:"3_subsamplebamfilessh",level:2},{value:"4_BinarizeBamFiles.sh",id:"4_binarizebamfilessh",level:2},{value:"5_batch_CreateIncrementalModels.sh",id:"5_batch_createincrementalmodelssh",level:2},{value:"6_OptimalNumberOfStates.sh",id:"6_optimalnumberofstatessh",level:2},{value:"7_ReferenceLDSCore.sh",id:"7_referenceldscoresh",level:2},{value:"8_PartitionedHeritability.sh",id:"8_partitionedheritabilitysh",level:2},{value:"Generate_Big_Model.sh",id:"generate_big_modelsh",level:2}];function d(e){const s={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"processing-times",children:"Processing times"}),"\n",(0,n.jsxs)(s.p,{children:["SLURM workload manager has the feature of introducing a maximum wall time into each script. The default maximum wall time is set in the ",(0,n.jsx)(s.code,{children:"#SBATCH"})," section of each script and can be overridden when setting the ",(0,n.jsx)(s.code,{children:"--time"})," option when using ",(0,n.jsx)(s.code,{children:"sbatch"}),". If the time of execution for a script exceeds this maximum wall time, it will terminate early. This is useful as it helps with workload management on HPCs that a large number of users have access to, and also reduces the effects of non-halting programs.\n",(0,n.jsx)(s.br,{}),"\n","Using bash builtins and time utilities, we were able to create estimates on how long each script is expected to take depending on the inputs and complexity of information."]}),"\n",(0,n.jsx)(s.h2,{id:"general-cpu-information-which-testing-was-conducted-on",children:"General CPU information which testing was conducted on"}),"\n",(0,n.jsx)(s.p,{children:"Note that processing times are likely to vary across systems, the scripts were tested on a high performance cluster (HPC) that is split into several compute nodes. Each script was ran on a compute node which have the following properties:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"CPUs -> 16"}),"\n",(0,n.jsx)(s.li,{children:"Sockets -> 2"}),"\n",(0,n.jsx)(s.li,{children:"Cores per socket -> 8"}),"\n",(0,n.jsx)(s.li,{children:"Threads per core -> 1"}),"\n",(0,n.jsx)(s.li,{children:"CPU clock speed -> 2.601 GHz (max)"}),"\n",(0,n.jsx)(s.li,{children:"CPU model -> Intel(R) Xeon(R) CPU E5-2640 v3"}),"\n",(0,n.jsxs)(s.li,{children:["Cache","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"L1i (information) -> 32K"}),"\n",(0,n.jsx)(s.li,{children:"L1d (data) -> 32K"}),"\n",(0,n.jsx)(s.li,{children:"L2 -> 256K"}),"\n",(0,n.jsx)(s.li,{children:"L3 -> 20 MB"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"0_downloadblueprintsh",children:"0_DownloadBluePrint.sh"}),"\n",(0,n.jsx)(s.p,{children:"The time taken to download files using pyega3 will of course depend on internet speed, size of files and number of files being downloaded. The former of these three makes it difficult to create well informed estimates for the run time of this script. In testing, the internet speed did not appear throttled and was consistent across file downloads."}),"\n",(0,n.jsx)(s.h2,{id:"1_movingfilestosingledirectorysh",children:"1_MovingFilesToSingleDirectory.sh"}),"\n",(0,n.jsxs)(s.p,{children:["Moving files on Linux systems is generally very fast even when files are large or abundant. The main souce of processing time in this script is the ",(0,n.jsx)(s.code,{children:"find"})," command. Depending on how many files exist in the main directory you are working with, the processing time for ",(0,n.jsx)(s.code,{children:"find"})," can vary as more files need to be checked.\n",(0,n.jsx)(s.br,{}),"\n","Regardless, in previous tests moving 130 files (each being 1-2 GB) amongst ~1000 total files took roughly one minute. It is unlikely that the processing time will ever exceed the default maximum wall time set in the ",(0,n.jsx)(s.code,{children:"#SBATCH"})," parameters at the top of this script."]}),"\n",(0,n.jsx)(s.h2,{id:"2_batch_processbamfilessh",children:"2_batch_ProcessBamFiles.sh"}),"\n",(0,n.jsxs)(s.p,{children:["The processing time for this script mainly depends on the sizes of the files that are being processed. In tests thus far, the main contributor to computational time comes from ",(0,n.jsx)(s.code,{children:"samtools sort"})," and appears to have a linear relationship with file size.\n",(0,n.jsx)(s.br,{}),"\n","In testing, the following was observed:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Processing a ~1.1 GB file took ~10 minutes"}),"\n",(0,n.jsx)(s.li,{children:"Processing a ~1.4 GB file took ~12 minutes"}),"\n",(0,n.jsx)(s.li,{children:"Processing a ~1.8 GB file took ~16 minutes"}),"\n",(0,n.jsx)(s.li,{children:"Processing a ~2.1 GB file took ~19 minutes"}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["The conclusion was made that one should expect that the processing time would be roughly:\n",(0,n.jsx)(s.br,{}),"\n","[9 * file size (in GB)] minutes.\n",(0,n.jsx)(s.br,{}),"\n","Additionally, it's important to note that this script is designed to be executed as an array through the SLURM workload manager. Therefore, the processing time is likely to vary depending on the number of cores assigned to each task in the array. Further note that if the size of the array is larger than the number of files being processed, all files will be processed by the highest indexed array element (causing slow down).\n",(0,n.jsx)(s.br,{}),"\n","When applying an array of size 4, the following was observed:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Processing ~272 GB of files took ~ 11 hours and 45 minutes"}),"\n",(0,n.jsx)(s.li,{children:"Processing ~228 GB of files took ~ 9 hours and 53 minutes"}),"\n",(0,n.jsx)(s.li,{children:"Processing ~263 GB of files took ~ 10 hours and 47 minutes"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"This to some extent supports the above claim for the processing time being linear. It is unlikely that using an array size of 4 will result in exactly 4 times faster processing time. Therefore, it is difficult to support the processing time equation previously given using these tests."}),"\n",(0,n.jsx)(s.h2,{id:"3_subsamplebamfilessh",children:"3_SubsampleBamFiles.sh"}),"\n",(0,n.jsxs)(s.p,{children:["This script's largest contributor to computational time is ",(0,n.jsx)(s.code,{children:"samtools merge"}),". Depending on the number of files and size of said files, the time taken can vary dramatically.\n",(0,n.jsx)(s.br,{}),"\n","In testing, the following was observed:"]}),"\n",(0,n.jsx)(s.p,{children:"Using a 50% sampling rate:"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Number of files"}),(0,n.jsx)(s.th,{children:"Average file size (GB)"}),(0,n.jsx)(s.th,{children:"time (minutes)"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"2"}),(0,n.jsx)(s.td,{children:"3.5"}),(0,n.jsx)(s.td,{children:"4"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"2"}),(0,n.jsx)(s.td,{children:"6.5"}),(0,n.jsx)(s.td,{children:"7"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"133"}),(0,n.jsx)(s.td,{children:"8.3"}),(0,n.jsx)(s.td,{children:"906"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"171"}),(0,n.jsx)(s.td,{children:"6.2"}),(0,n.jsx)(s.td,{children:"1010"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"176"}),(0,n.jsx)(s.td,{children:"7.6"}),(0,n.jsx)(s.td,{children:"1271"})]})]})]}),"\n",(0,n.jsx)(s.p,{children:"Using a 100% sampling rate:"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Number of files"}),(0,n.jsx)(s.th,{children:"Average file size (GB)"}),(0,n.jsx)(s.th,{children:"time (minutes)"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"133"}),(0,n.jsx)(s.td,{children:"8.3"}),(0,n.jsx)(s.td,{children:"909"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"171"}),(0,n.jsx)(s.td,{children:"6.2"}),(0,n.jsx)(s.td,{children:"1186"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"176"}),(0,n.jsx)(s.td,{children:"7.6"}),(0,n.jsx)(s.td,{children:"1366"})]})]})]}),"\n",(0,n.jsx)(s.p,{children:"Currently this shows a linear relationship with total file size. There is not enough information to determine the effect that the sampling rate has on the processing time (though it is likely to be minimal)."}),"\n",(0,n.jsx)(s.h2,{id:"4_binarizebamfilessh",children:"4_BinarizeBamFiles.sh"}),"\n",(0,n.jsxs)(s.p,{children:["The processing time for this script is of course mainly taken up by ChromHMM's ",(0,n.jsx)(s.code,{children:"BinarizeBam"})," command. This command will generally take up more time if more data is inputted and if a smaller bin size is used.\n",(0,n.jsx)(s.br,{}),"\n","In testing, the following was observed:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Using 17 GB of .bam files:","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Using a bin size of 200bp took ~4 minutes"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["Using 3730 GB of .bam files:","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Using a bin size of 200bp took 11 hours and 52 minutes"}),"\n",(0,n.jsx)(s.li,{children:"Using a bin size of 400bp took 11 hours and 47 minutes"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"5_batch_createincrementalmodelssh",children:"5_batch_CreateIncrementalModels.sh"}),"\n",(0,n.jsxs)(s.p,{children:["This script's largest contributor to computational time is ChromHMM's ",(0,n.jsx)(s.code,{children:"LearnModel"})," command. This command will take up more time if the bin size was chosen to be smaller in 4_BinarizeBamFiles.sh (leading to a larger total size of binary signal files) and if the number of states to be used in the model increases.\n",(0,n.jsx)(s.br,{}),"\n","From the ",(0,n.jsx)(s.a,{href:"https://compbio.mit.edu/ChromHMM/ChromHMM_manual.pdf",children:"user manual"})," and the ",(0,n.jsx)(s.a,{href:"https://github.com/jernst98/ChromHMM/blob/master/edu/mit/compbio/ChromHMM/ChromHMM.java",children:"source code"}),", it is clear that the model training is completed via the forward-backwards algorithm and the Baum-Welch algorithm. These algorithms are standard in hidden Markov model training and likely take up the majority of processing time.\n",(0,n.jsx)(s.br,{}),"\n","From a ",(0,n.jsx)(s.a,{href:"https://www.cs.ubc.ca/~murphyk/Bayes/rabiner.pdf",children:"resource"})," sent by one of the creators, Jason Ernst, these algorithms have a computational complexity of O(N",(0,n.jsx)("sup",{children:"2"}),"T). Where N is the number of states in the model and T is the total number of observations (proportional to sizes of binary files)."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Note"}),": Although the algorithms mentioned have computational complexity of O(N",(0,n.jsx)("sup",{children:"2"}),"T), this doesn't serve as the complete picture. By default, ChromHMM will terminate once the change in the likelihood function is below 001. The number of iterations it takes to reach this point can vary massively between models and datasets. The maximum number of iterations (by default) is 200. Keep this maximum iteration number into account when considering processing times.\n",(0,n.jsx)(s.br,{}),"\n","In testing, the following was observed:"]}),"\n",(0,n.jsx)(s.p,{children:"For 1.6 MB of binary data (400bp bins, 3 marks)"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Number of states"}),(0,n.jsx)(s.th,{children:"Average time per iteration (seconds)"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"2"}),(0,n.jsx)(s.td,{children:"1.27"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"3"}),(0,n.jsx)(s.td,{children:"1.31"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"4"}),(0,n.jsx)(s.td,{children:"1.71"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"5"}),(0,n.jsx)(s.td,{children:"2.17"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"6"}),(0,n.jsx)(s.td,{children:"2.66"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"7"}),(0,n.jsx)(s.td,{children:"3.49"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"8"}),(0,n.jsx)(s.td,{children:"4.76"})]})]})]}),"\n",(0,n.jsx)(s.p,{children:"It is important to note that this script is designed to be executed as an array through the SLURM workload manager. Therefore, the processing time is likely to vary depending on the number of cores assigned to each task in the array. Further note that if the size of the array is larger than the number of models to learn, all models will be learnt by the highest indexed array element (causing significant slow down)."}),"\n",(0,n.jsx)(s.h2,{id:"6_optimalnumberofstatessh",children:"6_OptimalNumberOfStates.sh"}),"\n",(0,n.jsxs)(s.p,{children:["This script makes use of an R script that is inside of a loop. However, the Rscript has very little computational complexity and so the script is usually very fast. In previous tests with 8 state models, the script took ~14 seconds. It is unlikely that this script will ever exceed the default wall time set in the ",(0,n.jsx)(s.code,{children:"#SBATCH"})," parameters at the top of the script."]}),"\n",(0,n.jsx)(s.h2,{id:"7_referenceldscoresh",children:"7_ReferenceLDSCore.sh"}),"\n",(0,n.jsx)(s.p,{children:"This script will take roughly the same amount of time regardless of the number\nof states in your model. In testing, the following times were found for the\nSNP assignment R script:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Chromosome 1 took: 964 seconds"}),"\n",(0,n.jsx)(s.li,{children:"Chromosome 2 took: 1163 seconds"}),"\n",(0,n.jsx)(s.li,{children:"Chromosome 3 took: 757 seconds"}),"\n",(0,n.jsx)(s.li,{children:"Chromosome 4 took: 804 seconds"}),"\n",(0,n.jsx)(s.li,{children:"Chromosome 5 took: 698 seconds"}),"\n",(0,n.jsx)(s.li,{children:"Chromosome 6 took: 733 seconds"}),"\n",(0,n.jsx)(s.li,{children:"Chromosome 7 took: 637 seconds"}),"\n",(0,n.jsx)(s.li,{children:"Chromosome 8 took: 597 seconds"}),"\n",(0,n.jsx)(s.li,{children:"Chromosome 9 took: 490 seconds"}),"\n",(0,n.jsx)(s.li,{children:"Chromosome 10 took: 562 seconds"}),"\n",(0,n.jsx)(s.li,{children:"Chromosome 11 took: 530 seconds"}),"\n",(0,n.jsx)(s.li,{children:"Chromosome 12 took: 504 seconds"}),"\n",(0,n.jsx)(s.li,{children:"Chromosome 13 took: 387 seconds"}),"\n",(0,n.jsx)(s.li,{children:"Chromosome 14 took: 354 seconds"}),"\n",(0,n.jsx)(s.li,{children:"Chromosome 15 took: 299 seconds"}),"\n",(0,n.jsx)(s.li,{children:"Chromosome 16 took: 345 seconds"}),"\n",(0,n.jsx)(s.li,{children:"Chromosome 17 took: 281 seconds"}),"\n",(0,n.jsx)(s.li,{children:"Chromosome 18 took: 313 seconds"}),"\n",(0,n.jsx)(s.li,{children:"Chromosome 19 took: 239 seconds"}),"\n",(0,n.jsx)(s.li,{children:"Chromosome 20 took: 223 seconds"}),"\n",(0,n.jsx)(s.li,{children:"Chromosome 21 took: 136 seconds"}),"\n",(0,n.jsx)(s.li,{children:"Chromosome 22 took: 138 seconds"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"For the calculation of LDscores:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Chromosome 1 took: 11 minutes"}),"\n",(0,n.jsx)(s.li,{children:"Chromosome 2 took: 13 minutes"}),"\n",(0,n.jsx)(s.li,{children:"Chromosome 3 took: 11 minutes"}),"\n",(0,n.jsx)(s.li,{children:"Chromosome 4 took: 11 minutes"}),"\n",(0,n.jsx)(s.li,{children:"Chromosome 5 took: 9 minutes"}),"\n",(0,n.jsx)(s.li,{children:"Chromosome 6 took: 10 minutes"}),"\n",(0,n.jsx)(s.li,{children:"Chromosome 7 took: 9 minutes"}),"\n",(0,n.jsx)(s.li,{children:"Chromosome 8 took: 9 minutes"}),"\n",(0,n.jsx)(s.li,{children:"Chromosome 9 took: 6 minutes"}),"\n",(0,n.jsx)(s.li,{children:"Chromosome 10 took: 7 minutes"}),"\n",(0,n.jsx)(s.li,{children:"Chromosome 11 took: 7 minutes"}),"\n",(0,n.jsx)(s.li,{children:"Chromosome 12 took: 7 minutes"}),"\n",(0,n.jsx)(s.li,{children:"Chromosome 13 took: 5 minutes"}),"\n",(0,n.jsx)(s.li,{children:"Chromosome 14 took: 5 minutes"}),"\n",(0,n.jsx)(s.li,{children:"Chromosome 15 took: 4 minutes"}),"\n",(0,n.jsx)(s.li,{children:"Chromosome 16 took: 5 minutes"}),"\n",(0,n.jsx)(s.li,{children:"Chromosome 17 took: 3 minutes"}),"\n",(0,n.jsx)(s.li,{children:"Chromosome 18 took: 4 minutes"}),"\n",(0,n.jsx)(s.li,{children:"Chromosome 19 took: 3 minutes"}),"\n",(0,n.jsx)(s.li,{children:"Chromosome 20 took: 3 minutes"}),"\n",(0,n.jsx)(s.li,{children:"Chromosome 21 took: 2 minutes"}),"\n",(0,n.jsx)(s.li,{children:"Chromosome 22 took: 2 minutes"}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"8_partitionedheritabilitysh",children:"8_PartitionedHeritability.sh"}),"\n",(0,n.jsxs)(s.p,{children:["This script will linearly increase in time with each additional gwas trait\nconsidered. The effect of having more annotations seems to be minimal however\n(more annotations only appears to increase\n",(0,n.jsx)(s.a,{href:"/ChromOptimise/ChromOptimise/Memory-Profiling",children:"memory requirements"}),"). In testing, for 58 annotations\n(8 state annotations), this script took on average 6 minutes and 30 seconds\nfor each gwas trait (with a high of 7.01 minutes and a low of 6.05 minutes)"]}),"\n",(0,n.jsx)(s.h2,{id:"generate_big_modelsh",children:"Generate_Big_Model.sh"}),"\n",(0,n.jsxs)(s.p,{children:["Computational time for this script follows the same logic as ",(0,n.jsx)(s.a,{href:"#5_batch_createincrementalmodelssh",children:"5_batch_CreateIncrementalModels.sh"}),". The main contributor to computational time is ChromHMM's ",(0,n.jsx)(s.code,{children:"LearnModel"})," command, only this time the models are likely to be much larger. As a result expect the processing time to be very long if a high number of states is to be used.\n",(0,n.jsx)(s.br,{}),"\n","In testing, the following was observed:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["For ~1 MB of binary data (200bp bins)","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"20 states took 1 hour 48 minutes"}),"\n",(0,n.jsx)(s.li,{children:"30 states took 3 hours 48 minutes"}),"\n",(0,n.jsx)(s.li,{children:"40 states took 7 hours 9 minutes"}),"\n",(0,n.jsx)(s.li,{children:"60 states took 14 hours 36 minutes"}),"\n",(0,n.jsx)(s.li,{children:"70 states took 19 hours 18 minutes"}),"\n",(0,n.jsx)(s.li,{children:"80 states took 25 hours 34 minutes"}),"\n"]}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,s,i)=>{i.d(s,{Z:()=>l,a:()=>r});var n=i(7294);const t={},o=n.createContext(t);function r(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);