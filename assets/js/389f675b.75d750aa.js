"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2938],{187:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=t(5893),o=t(1151);const s={title:"SNPAssignment",description:"The script used to create .annot files for the data.",sidebar_position:2},a="SNPAssignment",r={id:"ChromOptimise/Pipeline-Explanation/LDSC/SNPAssignment",title:"SNPAssignment",description:"The script used to create .annot files for the data.",source:"@site/docs/ChromOptimise/Pipeline-Explanation/LDSC/SNPAssignment.md",sourceDirName:"ChromOptimise/Pipeline-Explanation/LDSC",slug:"/ChromOptimise/Pipeline-Explanation/LDSC/SNPAssignment",permalink:"/ChromOptimise/ChromOptimise/Pipeline-Explanation/LDSC/SNPAssignment",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"SNPAssignment",description:"The script used to create .annot files for the data.",sidebar_position:2},sidebar:"documentationSidebar",previous:{title:"5_ReferenceLDSCore",permalink:"/ChromOptimise/ChromOptimise/Pipeline-Explanation/LDSC/ReferenceLDSCore"},next:{title:"6_PartitionedHeritability",permalink:"/ChromOptimise/ChromOptimise/Pipeline-Explanation/LDSC/PartitionedHeritability"}},l={},c=[{value:"Explanaiton",id:"explanaiton",level:2},{value:"Overlaps",id:"overlaps",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"snpassignment",children:"SNPAssignment"}),"\n",(0,i.jsx)(n.h2,{id:"explanaiton",children:"Explanaiton"}),"\n",(0,i.jsxs)(n.p,{children:["In order to use partitioned heritability with LDSC, an annotation file is required. An annotation file is just a classification of every SNP in the given PLINK files. So if a state spans the region 400-800 on chromosome 2, then all SNPs that lie in this genomic region are classified as being in that state. The output ",(0,i.jsx)(n.code,{children:".annot"})," file that comes out of this R script is effectively a ",(0,i.jsx)(n.code,{children:".bim"})," file with additional Boolean columns signifying which state each SNP belongs to."]}),"\n",(0,i.jsx)(n.h2,{id:"overlaps",children:"Overlaps"}),"\n",(0,i.jsx)(n.p,{children:"If one looks at the official documentation for LDSC, they will see information given for  overlapping annotations, frq files and a 'base' characterisation of SNPs. All of these are not actually required in the case of ChromOptimise, so they are ignored. The reason for this is due to the fact that our state assignments (extracted from ChromHMM) necessarily will not overlap. A genomic region can only be assigned exactly one state (never more, never less), as such there will be no overlapping regions and so the extra flags in the ldsc command are therefore not required."}),"\n",(0,i.jsxs)(n.p,{children:["This also has the added benefit of making our ",(0,i.jsx)(n.code,{children:".annot"})," files having no colinearity between annoation columns (so ldsc should never fail from colinearity errors)."]})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var i=t(7294);const o={},s=i.createContext(o);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);