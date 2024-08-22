"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5260],{6130:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var n=s(5893),i=s(1151);const a={title:"3_OptimalNumberOfStates",description:"The script used to determine the optimum number of states.",sidebar_position:1},o="3_OptimalNumberOfStates",r={id:"ChromOptimise/Pipeline-Explanation/OptimalNumberOfStates/OptimalNumberOfStates",title:"3_OptimalNumberOfStates",description:"The script used to determine the optimum number of states.",source:"@site/docs/ChromOptimise/Pipeline-Explanation/OptimalNumberOfStates/3_OptimalNumberOfStates.md",sourceDirName:"ChromOptimise/Pipeline-Explanation/OptimalNumberOfStates",slug:"/ChromOptimise/Pipeline-Explanation/OptimalNumberOfStates/OptimalNumberOfStates",permalink:"/ChromOptimise/ChromOptimise/Pipeline-Explanation/OptimalNumberOfStates/OptimalNumberOfStates",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"3_OptimalNumberOfStates",description:"The script used to determine the optimum number of states.",sidebar_position:1},sidebar:"documentationSidebar",previous:{title:"Optimal Number of States",permalink:"/ChromOptimise/category/optimal-number-of-states"},next:{title:"SimilarEmissions",permalink:"/ChromOptimise/ChromOptimise/Pipeline-Explanation/OptimalNumberOfStates/SimilarEmissions"}},l={},h=[{value:"Explanation",id:"explanation",level:2},{value:"Thresholds",id:"thresholds",level:2},{value:"The curse of dimensionality",id:"the-curse-of-dimensionality",level:3},{value:"Extra check",id:"extra-check",level:2},{value:"Output",id:"output",level:2}];function m(e){const t={a:"a",admonition:"admonition",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",math:"math",mfrac:"mfrac",mn:"mn",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"3_optimalnumberofstates",children:"3_OptimalNumberOfStates"}),"\n",(0,n.jsx)(t.h2,{id:"explanation",children:"Explanation"}),"\n",(0,n.jsx)(t.p,{children:"This is the wrapper script that will parse your arguments into mutliple R\nscripts in order to determine redundant states. It starts with the most\ncomplex model and works its way down until a model with no redundant states is\nfound. This model is classed as being optimal."}),"\n",(0,n.jsx)(t.admonition,{title:"Max model number",type:"note",children:(0,n.jsx)(t.p,{children:"There is a possible source of error in the above logic where the output will\nnot actually be the optimal number of states to use. Suppose the maximum\nnumber of states out of any model is only 3 (but the number of marks is much\nlarger than this), then it is likely that this model has no redundant states.\nThis doesn't actually suggests that the optimal number of states is 3, just\nthat it is 3 or greater. The additional information of a model with 4 states\nhaving redundant states is what confirms the model with 3 states is optimal."})}),"\n",(0,n.jsx)(t.h2,{id:"thresholds",children:"Thresholds"}),"\n",(0,n.jsxs)(t.p,{children:["The major factor that affects the output of this script lies in the thresholds\ndefined in the configuration file for R Config.R. It can be difficult to\ndetermine suitable values for these thresholds without prior knowledge. To help\nwith this, the supplementary pipeline was created. Running the supplementary\npipeline can help the user in identifying 'good' values for these thresholds\nbased off of the information gained from much larger models (that undoubtedly\nhave redundant states). To learn more about this pipeline, consult\n",(0,n.jsx)(t.a,{href:"/category/supplementary-pipeline---usage-and-explanation",children:"these pages"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"the-curse-of-dimensionality",children:"The curse of dimensionality"}),"\n",(0,n.jsxs)(t.p,{children:["The threshold for isolation scores is likely to be similar across datasets, but\nthe value for ",(0,n.jsx)(t.code,{children:"emissions_threshold"})," will not. This threshold determines when\ntwo states are 'too similar' in terms of their emission parameters (according\nto the Euclidean distance metric)."]}),"\n",(0,n.jsx)(t.p,{children:"Different datasets with differing numbers of marks will certainly require\ndifferent values for this threshold. The reason for this is as follows: The\nnumber of marks is the dimension of the emission parameter vectors (the number\nof columns in the emission files). As you add more dimensions to a vector\nspace, the distance between two random vectors is also expected to increase. It\nbecomes increasingly difficult for two random vectors to be 'very close' to one\nanother."}),"\n",(0,n.jsxs)(t.p,{children:["Consider a line of length 1 meter. Pick two random points on the line and at a\nmaximum they can be 1 meter from one another. The expected distance between the\npoints will be 0.5 meters (hopefully this is obvious). Now suppose you have a\nsquare with side lengths 1. When you place two points inside this square at\nrandom, then the expected distance between them is now ",(0,n.jsxs)(t.span,{className:"katex",children:[(0,n.jsx)(t.span,{className:"katex-mathml",children:(0,n.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(t.semantics,{children:[(0,n.jsx)(t.mrow,{children:(0,n.jsxs)(t.mfrac,{children:[(0,n.jsx)(t.mn,{children:"2"}),(0,n.jsx)(t.mn,{children:"3"})]})}),(0,n.jsx)(t.annotation,{encoding:"application/x-tex",children:"\\frac{2}{3}"})]})})}),(0,n.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(t.span,{className:"base",children:[(0,n.jsx)(t.span,{className:"strut",style:{height:"1.1901em",verticalAlign:"-0.345em"}}),(0,n.jsxs)(t.span,{className:"mord",children:[(0,n.jsx)(t.span,{className:"mopen nulldelimiter"}),(0,n.jsx)(t.span,{className:"mfrac",children:(0,n.jsxs)(t.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(t.span,{className:"vlist-r",children:[(0,n.jsxs)(t.span,{className:"vlist",style:{height:"0.8451em"},children:[(0,n.jsxs)(t.span,{style:{top:"-2.655em"},children:[(0,n.jsx)(t.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(t.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(t.span,{className:"mord mtight",children:(0,n.jsx)(t.span,{className:"mord mtight",children:"3"})})})]}),(0,n.jsxs)(t.span,{style:{top:"-3.23em"},children:[(0,n.jsx)(t.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(t.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,n.jsxs)(t.span,{style:{top:"-3.394em"},children:[(0,n.jsx)(t.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(t.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(t.span,{className:"mord mtight",children:(0,n.jsx)(t.span,{className:"mord mtight",children:"2"})})})]})]}),(0,n.jsx)(t.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(t.span,{className:"vlist-r",children:(0,n.jsx)(t.span,{className:"vlist",style:{height:"0.345em"},children:(0,n.jsx)(t.span,{})})})]})}),(0,n.jsx)(t.span,{className:"mclose nulldelimiter"})]})]})})]})," meters. In\nany one direction, the max distance is still 1 meter, but now there is a new\ndimension that the points can differ in, meaning the distance between them can\nbe even larger than in the 1 dimensional case. This continues as you think\nabout cubes and hyper cubes (",(0,n.jsx)(t.em,{children:"etc."}),")."]}),"\n",(0,n.jsxs)(t.p,{children:["As such, no value is given for the ",(0,n.jsx)(t.code,{children:"emission_threshold"}),", this value should be\nchanged depending on the number of marks you have included in your dataset."]}),"\n",(0,n.jsx)(t.h2,{id:"extra-check",children:"Extra check"}),"\n",(0,n.jsxs)(t.p,{children:["After checking that the 'optimal' model has no redundant states, one final\ncheck is carried out. That is, if the next smallest model has a state that is\nnot described by a state in the optimum model (here described means, 'similar\nspatially and in emission parameters'), then the optimum model is more complex\nand yet misses out on important information. This is unwanted of course and\nthe user is warned of this in OptimumNumberOfStates.txt. If this situation\nbefalls the user, they are encouraged to look at both models and decide if\ntheir thresholds are too tight (",(0,n.jsx)(t.em,{children:"i.e."})," is there a clear line up of states\nbetween the two models in question)."]}),"\n",(0,n.jsxs)(t.p,{children:["This part of the script finds the minimum Euclidean distance between states in\nthe smaller model and each state in the determined optimum model (this is for\nthe overlap files and the emission files). If any state in the smaller model\nhas no close neighbour in the larger file, then this is flagged. The thresholds\nused for this are ",(0,n.jsx)(t.code,{children:"emissions_threshold"})," (the same one used in the optimisation\nprocess) and ",(0,n.jsx)(t.code,{children:"overlap_threshold"}),". Choosing a value for ",(0,n.jsx)(t.code,{children:"overlap_threshold"})," is\nsubjective of course, some suggested values are given for ChromHMM's defaults.\nHowever, if the user decides to add more annotation bed files to the ",(0,n.jsx)(t.code,{children:"COORDS"}),"\ndirectory of ChromHMM, they are encouraged to change the value of\n",(0,n.jsx)(t.code,{children:"overlap_threshold"})," (much like they should upon changing the number of marks\nused in the analysis). See (#the-curse-of-dimensionality) for further\ninformation."]}),"\n",(0,n.jsx)(t.h2,{id:"output",children:"Output"}),"\n",(0,n.jsxs)(t.p,{children:["Upon completion, this script will copy the model with the optimum number of\nstates into the optimum states directory (for the bin size and number of\nmodels). This file will contain all of the emission and transition parameters.\nChromHMM is capable of regenerating all other associated files with a model\nfrom this file (",(0,n.jsx)(t.em,{children:"i.e."})," the html, state assignment, heatmaps ",(0,n.jsx)(t.em,{children:"etc."}),"). You can\ndo this with the following command:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"java \\\n-mx4G \\\n-jar path/to/ChromHMM.jar \\\nLearnModel \\\n-init load \\\n-m path/to/model/file\n"})})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>o});var n=s(7294);const i={},a=n.createContext(i);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);