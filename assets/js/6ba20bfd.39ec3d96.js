"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2145],{155:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=t(5893),o=t(1151);const s={title:"5_ReferenceLDSCore",description:"Calculates the ldscores for annotation files.",sidebar_position:1},r="5_ReferenceLDSCore",a={id:"ChromOptimise/Pipeline-Explanation/LDSC/ReferenceLDSCore",title:"5_ReferenceLDSCore",description:"Calculates the ldscores for annotation files.",source:"@site/docs/ChromOptimise/Pipeline-Explanation/LDSC/5_ReferenceLDSCore.md",sourceDirName:"ChromOptimise/Pipeline-Explanation/LDSC",slug:"/ChromOptimise/Pipeline-Explanation/LDSC/ReferenceLDSCore",permalink:"/ChromOptimise/ChromOptimise/Pipeline-Explanation/LDSC/ReferenceLDSCore",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"5_ReferenceLDSCore",description:"Calculates the ldscores for annotation files.",sidebar_position:1},sidebar:"documentationSidebar",previous:{title:"LDSC integration",permalink:"/ChromOptimise/category/ldsc-integration"},next:{title:"SNPAssignment",permalink:"/ChromOptimise/ChromOptimise/Pipeline-Explanation/LDSC/SNPAssignment"}},l={},c=[{value:"Explanation",id:"explanation",level:2},{value:"Example usage",id:"example-usage",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"5_referenceldscore",children:"5_ReferenceLDSCore"}),"\n",(0,i.jsx)(n.h2,{id:"explanation",children:"Explanation"}),"\n",(0,i.jsxs)(n.p,{children:["This is a script that will run 2 R scripts and also\n",(0,i.jsx)(n.a,{href:"https://github.com/bulik/ldsc",children:"LDSC"}),", which outputs information useful for\ndetermining if a ChromHMM model has biologically relevant states (not just\nstatistically relevant)."]}),"\n",(0,i.jsx)(n.p,{children:"Note that you still need to input the bin size, sample size and the number of\nmodels learned here. The reason for this is because the file structure is\ndesigned such that multiple runs of the same dataset can be analysed\nconcurrently."}),"\n",(0,i.jsxs)(n.p,{children:["The script achieves this using\n",(0,i.jsx)(n.a,{href:"https://www.nature.com/articles/ng.3404",children:"partitioned heritability"})," and\nrequires reference files in order to work properly. These files can be\ndownloaded from ",(0,i.jsx)(n.a,{href:"https://zenodo.org/records/10515792",children:"this online repository"}),".\nThe reference files do not have to be from the 1000 genomes project (just any\nlarge collection of SNPs will do). The required files are:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"1000 genomes (or similar) PLINK files (for your genome build)"}),"\n",(0,i.jsx)(n.li,{children:"1000 genomes (or similar) weight files (built from ldsc, best to get these\nfrom the online repository)"}),"\n",(0,i.jsx)(n.li,{children:"Collection of GWAS traits in sumstats format (again, best to get these from\nthe online repository)"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example-usage",children:"Example usage"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'# Generates annotation and ldscore for each chromosome using the model with\n# 5 states in the model directory\nsbatch 5_ReferenceLDSCore.sh \\\n--config="path/to/configuration/directory" \\\n--state=5 \\\n--binsize=200 \\\n--samplesize=75 \\\n--nummodels=6 \\\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'# Generates annotation and ldscore for each chromosome using the model with\n# the optimum number of states (as decided by 4_OptimalNumberOfStates) \nsbatch 5_ReferenceLDSCore.sh \\\n--config="path/to/configuration/directory" \\\n--gwas="height" \\\n--binsize=200 \\\n--samplesize=75 \\\n--nummodels=6 \\\n'})})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var i=t(7294);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);