"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[471],{5734:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=i(5893),s=i(1151);const a={sidebar_position:4},r="Supplementary pipeline explanation",o={id:"ChromOptimise/Supplementary-pipeline-explanation",title:"Supplementary pipeline explanation",description:"There are additional scripts that are given with ChromOptimise that are not directly a part of the main pipeline. However, these scripts proved useful in constructing the pipeline and so were elected to be included in this repository.",source:"@site/docs/ChromOptimise/Supplementary-pipeline-explanation.md",sourceDirName:"ChromOptimise",slug:"/ChromOptimise/Supplementary-pipeline-explanation",permalink:"/ChromOptimise/ChromOptimise/Supplementary-pipeline-explanation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"documentationSidebar",previous:{title:"Pipeline explanation",permalink:"/ChromOptimise/ChromOptimise/Pipeline-Explanation"},next:{title:"Factors that affect the output",permalink:"/ChromOptimise/ChromOptimise/Factors-that-affect-the-output"}},l={},d=[{value:"CompareModels.sh",id:"comparemodelssh",level:2},{value:"Redundandancy_Threshold_Optimisation",id:"redundandancy_threshold_optimisation",level:2},{value:"Generate_Big_Model.sh",id:"generate_big_modelsh",level:3},{value:"Generate_Redundancy_Metrics_Plots.sh",id:"generate_redundancy_metrics_plotssh",level:3}];function h(e){const t={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"supplementary-pipeline-explanation",children:"Supplementary pipeline explanation"}),"\n",(0,n.jsxs)(t.p,{children:["There are ",(0,n.jsx)(t.a,{href:"https://github.com/sof202/ChromOptimise/tree/main/supplementary",children:"additional scripts"})," that are given with ChromOptimise that are not directly a part of the main pipeline. However, these scripts proved useful in constructing the pipeline and so were elected to be included in this repository."]}),"\n",(0,n.jsx)(t.h2,{id:"comparemodelssh",children:"CompareModels.sh"}),"\n",(0,n.jsxs)(t.p,{children:["This uses ChromHMM's ",(0,n.jsx)(t.code,{children:"CompareModels"})," command to generate comparisons between the models produced in the model learning step of the main pipeline."]}),"\n",(0,n.jsx)(t.p,{children:"This script will compare each model with all of the models that are less complex than it (so a model with 8 states will be compared against only those models that have fewer than 8 states)."}),"\n",(0,n.jsx)(t.p,{children:"This script is useful in assessing which states are described well in less complex models and which are lost when reducing model complexity."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),": ",(0,n.jsx)(t.code,{children:"CompareModels"})," only looks at the emission parameters for each state in the models inputted. Therefore, this doesn't capture redundant states."]}),"\n",(0,n.jsx)(t.p,{children:"Example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"# Compares all models in ${MODEL_DIR} to one another\nsbatch CompareModels.sh\n"})}),"\n",(0,n.jsx)(t.h2,{id:"redundandancy_threshold_optimisation",children:"Redundandancy_Threshold_Optimisation"}),"\n",(0,n.jsxs)(t.p,{children:["In ",(0,n.jsx)(t.a,{href:"/ChromOptimise/ChromOptimise/Configuration-Files-Setup#configr",children:"config.R"}),", the user needs to decide upon the threshold parameters used in identifying redundant states in models. It is tempting to pick an arbitrary small number here. However, this small pipeline aids the user in choosing more informed values for these parameters."]}),"\n",(0,n.jsxs)(t.p,{children:["For a visual representation of the pipeline, please consult this ",(0,n.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:i(1828).Z+"",children:"schematic representation"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"generate_big_modelsh",children:"Generate_Big_Model.sh"}),"\n",(0,n.jsxs)(t.p,{children:["This uses the binarized data produced by ",(0,n.jsx)(t.a,{href:"/ChromOptimise/ChromOptimise/Pipeline-Explanation#4_binarizefilessh",children:"4_BinarizeBamFiles.sh"})," to produce a single very complex model with a high number of user specified states.\nThe model produced will use a random initialisation of emission/transition parameters so that an arbitrary number of states can be used in the model (the default 'information' initialisation method does not allow for this)."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),": ChromHMM uses the Baum-Welch algorithm to train the model. This algorithm finds a ",(0,n.jsx)(t.strong,{children:"local"})," maximum of the ",(0,n.jsx)(t.a,{href:"/ChromOptimise/ChromOptimise/ChromHMM-overview#estimated-log-likelihood",children:"estimated log likelihood"}),", ",(0,n.jsx)(t.strong,{children:"not"})," the ",(0,n.jsx)(t.strong,{children:"global"})," maximum.\nTherefore, because the initialisation is random, the models produced by this script can take very different lengths of time to train and may be highly innacurate (despite their complexity)."]}),"\n",(0,n.jsx)(t.p,{children:"Example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"# Generates a model with 50 states using a random seed of 1 using assembly \n# hg19 for the binary data with bin size 200 and sample size 75%\nsbatch Generate_Big_Model.sh 50 1 200 75 hg19\n"})}),"\n",(0,n.jsx)(t.h3,{id:"generate_redundancy_metrics_plotssh",children:"Generate_Redundancy_Metrics_Plots.sh"}),"\n",(0,n.jsx)(t.p,{children:"This runs two R scripts on a specified model (recommended to be a very complex model) so that the user can make informed decisions on the thresholds used in determining redundant states in 6_OptimalNumberOfStates.sh."}),"\n",(0,n.jsx)(t.p,{children:"HistogramPlotForEuclideanDistances.R -> Creates a histogram for the Euclidean distances between pairs of states in the model provided."}),"\n",(0,n.jsx)(t.p,{children:"ScatterPlotForTransitionMaxima.R -> Creates a scatter plot for the maximum transition probability towards each state in the model provided."}),"\n",(0,n.jsx)(t.p,{children:"The user should input a very complex model as this will result in the two plots possessing two obvious groups, redundant states and useful states. The gaps between the obvious groups will provide a the user with a good idea of where to draw the line between 'useful state' and 'redundant state'."}),"\n",(0,n.jsxs)(t.p,{children:["For Euclidean distances -> Redundant state pairs have very low Euclidean distance, whilst non-redundant state paris will have a noticeably higher Euclidean distance\n",(0,n.jsx)(t.br,{}),"\n","For Transition probabilities -> Redundant state candidates score very low whilst useful state candidates score closer to 1 (with a noticeable gap between these groups)."]}),"\n",(0,n.jsx)(t.p,{children:"This script is only optional as the user is free to set their own redundancy determining thresholds if they have a good idea for the values from other sources."}),"\n",(0,n.jsx)(t.p,{children:"Example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"# Generates redundancy metrics plots for the model with 50 states that used\n# a random seed of 1 in its initialisation\nsbatch Generate_Redundancy_Metrics_Plots.sh 50 1\n"})})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1828:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/files/Supplementary_Pipeline-67633f8b6bc11c5141edd52a9e908bb5.pdf"},1151:(e,t,i)=>{i.d(t,{Z:()=>o,a:()=>r});var n=i(7294);const s={},a=n.createContext(s);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);