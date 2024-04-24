"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7902],{8422:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=o(5893),n=o(1151);const s={title:"IsolationScores",description:"The script used to calculate the isolation scores for each state.",sidebar_position:4},a="IsolationScores",r={id:"ChromOptimise/Pipeline-Explanation/OptimalNumberOfStates/IsolationScores",title:"IsolationScores",description:"The script used to calculate the isolation scores for each state.",source:"@site/docs/ChromOptimise/Pipeline-Explanation/OptimalNumberOfStates/IsolationScores.md",sourceDirName:"ChromOptimise/Pipeline-Explanation/OptimalNumberOfStates",slug:"/ChromOptimise/Pipeline-Explanation/OptimalNumberOfStates/IsolationScores",permalink:"/ChromOptimise/ChromOptimise/Pipeline-Explanation/OptimalNumberOfStates/IsolationScores",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"IsolationScores",description:"The script used to calculate the isolation scores for each state.",sidebar_position:4},sidebar:"documentationSidebar",previous:{title:"FlankingStates",permalink:"/ChromOptimise/ChromOptimise/Pipeline-Explanation/OptimalNumberOfStates/FlankingStates"},next:{title:"RedundantStateChecker",permalink:"/ChromOptimise/ChromOptimise/Pipeline-Explanation/OptimalNumberOfStates/RedundantStateChecker"}},l={},c=[{value:"Motivation",id:"motivation",level:2},{value:"Explanation",id:"explanation",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"isolationscores",children:"IsolationScores"}),"\n",(0,i.jsx)(t.h2,{id:"motivation",children:"Motivation"}),"\n",(0,i.jsx)(t.p,{children:"In the pursuit of attempting to determine the states that are spatially\ninsignificant, it can be tempting to look at which states are exceedingly rare.\nHowever, this doesn't capture the whole picture. Transcriptional start sites\nare rare in the context of the human genome, but that doesn't make them\ninsignificant."}),"\n",(0,i.jsx)(t.p,{children:"Because of this problem, a different metric was created in the isolation score."}),"\n",(0,i.jsx)(t.h2,{id:"explanation",children:"Explanation"}),"\n",(0,i.jsx)(t.p,{children:"The isolation score for a given state is defined as:"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"The number of bins that separate two bins with the same state assignment on\naverage"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The isolation score is calculated for a model on a single user specified\nchromosome. The reason why we don't consider all chromosomes in this\ncalculation is that it is difficult to come up with a concrete way of tackling\nthe following scenario:"}),"\n",(0,i.jsx)(t.p,{children:"Suppose a state is highly clustered on one chromosome (very low isolation\nscore) but is not assigned at all on another chromosome."}),"\n",(0,i.jsx)(t.p,{children:"We have determined that it is best in this scenario to consider the two\noutcomes separately instead of trying to merge them into one single\nobservation."}),"\n",(0,i.jsx)(t.p,{children:"Another problem that comes with inspecting all chromosomes comes with the\nsmaller chromosomes. If a state is only assigned to two bins (that are\nadjacent) on a smaller chromosome, then the isolation score will be 0. This\ndoesn't really capture the essence behind the isolation score as the states are\nstill relatively isolated (but there happens to be two next to each other).\nInstead of increasing the complexity of the definition for isolation score, we\njust calculate the scores for the largest chromosome (chromosome 1)."}),"\n",(0,i.jsxs)(t.p,{children:["The user has the power to change the chromosome used in this analysis via the\n",(0,i.jsx)(t.code,{children:"--chromosome"})," flag used when calling\n",(0,i.jsx)(t.a,{href:"/ChromOptimise/ChromOptimise/Pipeline-Explanation/OptimalNumberOfStates/OptimalNumberOfStates",children:"4_OptimalNumberOfStates.sh"}),". This could prove\nuseful if a particular chromosome is of interest."]})]})}function m(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>r,a:()=>a});var i=o(7294);const n={},s=i.createContext(n);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);