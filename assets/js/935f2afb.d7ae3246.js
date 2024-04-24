"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"documentationSidebar":[{"type":"link","label":"ChromHMM overview","href":"/ChromOptimise/ChromOptimise/ChromHMM-overview","docId":"ChromOptimise/ChromHMM-overview","unlisted":false},{"type":"link","label":"Configuration files setup","href":"/ChromOptimise/ChromOptimise/Configuration-Files-Setup","docId":"ChromOptimise/Configuration-Files-Setup","unlisted":false},{"type":"category","label":"Main Pipeline - Usage and Explanation","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overall explanation of pipeline","href":"/ChromOptimise/ChromOptimise/Pipeline-Explanation/Overall","docId":"ChromOptimise/Pipeline-Explanation/Overall","unlisted":false},{"type":"link","label":"1_SubsampleBamFiles","href":"/ChromOptimise/ChromOptimise/Pipeline-Explanation/SubsampleBamFiles","docId":"ChromOptimise/Pipeline-Explanation/SubsampleBamFiles","unlisted":false},{"type":"link","label":"2_BinarizeFiles","href":"/ChromOptimise/ChromOptimise/Pipeline-Explanation/BinarizeFiles","docId":"ChromOptimise/Pipeline-Explanation/BinarizeFiles","unlisted":false},{"type":"link","label":"3_batch_CreateIncrementalModels","href":"/ChromOptimise/ChromOptimise/Pipeline-Explanation/batch_CreateIncrementalModels","docId":"ChromOptimise/Pipeline-Explanation/batch_CreateIncrementalModels","unlisted":false},{"type":"category","label":"Optimal Number of States","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"4_OptimalNumberOfStates","href":"/ChromOptimise/ChromOptimise/Pipeline-Explanation/OptimalNumberOfStates/OptimalNumberOfStates","docId":"ChromOptimise/Pipeline-Explanation/OptimalNumberOfStates/OptimalNumberOfStates","unlisted":false},{"type":"link","label":"SimilarEmissions","href":"/ChromOptimise/ChromOptimise/Pipeline-Explanation/OptimalNumberOfStates/SimilarEmissions","docId":"ChromOptimise/Pipeline-Explanation/OptimalNumberOfStates/SimilarEmissions","unlisted":false},{"type":"link","label":"FlankingStates","href":"/ChromOptimise/ChromOptimise/Pipeline-Explanation/OptimalNumberOfStates/FlankingStates","docId":"ChromOptimise/Pipeline-Explanation/OptimalNumberOfStates/FlankingStates","unlisted":false},{"type":"link","label":"IsolationScores","href":"/ChromOptimise/ChromOptimise/Pipeline-Explanation/OptimalNumberOfStates/IsolationScores","docId":"ChromOptimise/Pipeline-Explanation/OptimalNumberOfStates/IsolationScores","unlisted":false},{"type":"link","label":"RedundantStateChecker","href":"/ChromOptimise/ChromOptimise/Pipeline-Explanation/OptimalNumberOfStates/RedundantStateChecker","docId":"ChromOptimise/Pipeline-Explanation/OptimalNumberOfStates/RedundantStateChecker","unlisted":false},{"type":"link","label":"CalculateBIC","href":"/ChromOptimise/ChromOptimise/Pipeline-Explanation/OptimalNumberOfStates/CalculateBIC","docId":"ChromOptimise/Pipeline-Explanation/OptimalNumberOfStates/CalculateBIC","unlisted":false},{"type":"link","label":"PlotLikelihoods","href":"/ChromOptimise/ChromOptimise/Pipeline-Explanation/OptimalNumberOfStates/PlotLikelihoods","docId":"ChromOptimise/Pipeline-Explanation/OptimalNumberOfStates/PlotLikelihoods","unlisted":false}],"href":"/ChromOptimise/category/optimal-number-of-states"},{"type":"category","label":"LDSC integration","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"5_ReferenceLDSCore","href":"/ChromOptimise/ChromOptimise/Pipeline-Explanation/LDSC/ReferenceLDSCore","docId":"ChromOptimise/Pipeline-Explanation/LDSC/ReferenceLDSCore","unlisted":false},{"type":"link","label":"SNPAssignment","href":"/ChromOptimise/ChromOptimise/Pipeline-Explanation/LDSC/SNPAssignment","docId":"ChromOptimise/Pipeline-Explanation/LDSC/SNPAssignment","unlisted":false},{"type":"link","label":"6_PartitionedHeritability","href":"/ChromOptimise/ChromOptimise/Pipeline-Explanation/LDSC/PartitionedHeritability","docId":"ChromOptimise/Pipeline-Explanation/LDSC/PartitionedHeritability","unlisted":false},{"type":"link","label":"HeritabilityPlots","href":"/ChromOptimise/ChromOptimise/Pipeline-Explanation/LDSC/HeritabilityPlots","docId":"ChromOptimise/Pipeline-Explanation/LDSC/HeritabilityPlots","unlisted":false}],"href":"/ChromOptimise/category/ldsc-integration"}],"href":"/ChromOptimise/category/main-pipeline---usage-and-explanation"},{"type":"category","label":"Supplementary Pipeline - Usage and Explanation","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overall Explanation","href":"/ChromOptimise/ChromOptimise/Supplementary-Pipeline-Explanation/Overall","docId":"ChromOptimise/Supplementary-Pipeline-Explanation/Overall","unlisted":false},{"type":"link","label":"Generate_Big_Model","href":"/ChromOptimise/ChromOptimise/Supplementary-Pipeline-Explanation/Generate_Big_Model","docId":"ChromOptimise/Supplementary-Pipeline-Explanation/Generate_Big_Model","unlisted":false},{"type":"link","label":"Execute_Redundancy_Metrics","href":"/ChromOptimise/ChromOptimise/Supplementary-Pipeline-Explanation/Execute_Redundancy_Metrics","docId":"ChromOptimise/Supplementary-Pipeline-Explanation/Execute_Redundancy_Metrics","unlisted":false}],"href":"/ChromOptimise/category/supplementary-pipeline---usage-and-explanation"},{"type":"link","label":"Factors that affect the output","href":"/ChromOptimise/ChromOptimise/Factors-that-affect-the-output","docId":"ChromOptimise/Factors-that-affect-the-output","unlisted":false},{"type":"link","label":"Processing times","href":"/ChromOptimise/ChromOptimise/Processing-Times","docId":"ChromOptimise/Processing-Times","unlisted":false},{"type":"link","label":"Memory profiling","href":"/ChromOptimise/ChromOptimise/Memory-Profiling","docId":"ChromOptimise/Memory-Profiling","unlisted":false},{"type":"link","label":"SLURM information","href":"/ChromOptimise/ChromOptimise/SLURM-Workload-Manager-Information","docId":"ChromOptimise/SLURM-Workload-Manager-Information","unlisted":false}]},"docs":{"ChromOptimise/ChromHMM-overview":{"id":"ChromOptimise/ChromHMM-overview","title":"ChromHMM overview","description":"ChromHMM is a tool created by Jason Ernst and Manolis Kellis. It uses the Baum-Welch algorithm to train a hidden Markov model to help characterise chromatin states for a genomic dataset (specifically one that can be peak called). This page covers what a hidden Markov model actually is and how the model is trained.","sidebar":"documentationSidebar"},"ChromOptimise/Configuration-Files-Setup":{"id":"ChromOptimise/Configuration-Files-Setup","title":"Configuration files setup","description":"You will need to create three configuration files for this pipeline to work:","sidebar":"documentationSidebar"},"ChromOptimise/Factors-that-affect-the-output":{"id":"ChromOptimise/Factors-that-affect-the-output","title":"Factors that affect the output","description":"The optimum number of states to use with your dataset will likely change depending on the quality of your data and the user inputs during the pipeline. Below are some examples of this.","sidebar":"documentationSidebar"},"ChromOptimise/Memory-Profiling":{"id":"ChromOptimise/Memory-Profiling","title":"Memory profiling","description":"To gain insights into the peak heap consumption of each script in the pipeline,","sidebar":"documentationSidebar"},"ChromOptimise/Pipeline-Explanation/batch_CreateIncrementalModels":{"id":"ChromOptimise/Pipeline-Explanation/batch_CreateIncrementalModels","title":"3_batch_CreateIncrementalModels","description":"The script used to create/learn models using ChromHMM.","sidebar":"documentationSidebar"},"ChromOptimise/Pipeline-Explanation/BinarizeFiles":{"id":"ChromOptimise/Pipeline-Explanation/BinarizeFiles","title":"2_BinarizeFiles","description":"The script used to binarize the dataset for ChromHMM.","sidebar":"documentationSidebar"},"ChromOptimise/Pipeline-Explanation/LDSC/HeritabilityPlots":{"id":"ChromOptimise/Pipeline-Explanation/LDSC/HeritabilityPlots","title":"HeritabilityPlots","description":"The script used to create plots of partitioned heritability.","sidebar":"documentationSidebar"},"ChromOptimise/Pipeline-Explanation/LDSC/PartitionedHeritability":{"id":"ChromOptimise/Pipeline-Explanation/LDSC/PartitionedHeritability","title":"6_PartitionedHeritability","description":"Visualises the partitioned heritability (enrichment)","sidebar":"documentationSidebar"},"ChromOptimise/Pipeline-Explanation/LDSC/ReferenceLDSCore":{"id":"ChromOptimise/Pipeline-Explanation/LDSC/ReferenceLDSCore","title":"5_ReferenceLDSCore","description":"Calculates the ldscores for annotation files.","sidebar":"documentationSidebar"},"ChromOptimise/Pipeline-Explanation/LDSC/SNPAssignment":{"id":"ChromOptimise/Pipeline-Explanation/LDSC/SNPAssignment","title":"SNPAssignment","description":"The script used to create .annot files for the data.","sidebar":"documentationSidebar"},"ChromOptimise/Pipeline-Explanation/OptimalNumberOfStates/CalculateBIC":{"id":"ChromOptimise/Pipeline-Explanation/OptimalNumberOfStates/CalculateBIC","title":"CalculateBIC","description":"The script used to plot the relative BICs of the models.","sidebar":"documentationSidebar"},"ChromOptimise/Pipeline-Explanation/OptimalNumberOfStates/FlankingStates":{"id":"ChromOptimise/Pipeline-Explanation/OptimalNumberOfStates/FlankingStates","title":"FlankingStates","description":"The script used to calculate the most likely flanks.","sidebar":"documentationSidebar"},"ChromOptimise/Pipeline-Explanation/OptimalNumberOfStates/IsolationScores":{"id":"ChromOptimise/Pipeline-Explanation/OptimalNumberOfStates/IsolationScores","title":"IsolationScores","description":"The script used to calculate the isolation scores for each state.","sidebar":"documentationSidebar"},"ChromOptimise/Pipeline-Explanation/OptimalNumberOfStates/OptimalNumberOfStates":{"id":"ChromOptimise/Pipeline-Explanation/OptimalNumberOfStates/OptimalNumberOfStates","title":"4_OptimalNumberOfStates","description":"The script used to determine the optimum number of states.","sidebar":"documentationSidebar"},"ChromOptimise/Pipeline-Explanation/OptimalNumberOfStates/PlotLikelihoods":{"id":"ChromOptimise/Pipeline-Explanation/OptimalNumberOfStates/PlotLikelihoods","title":"PlotLikelihoods","description":"The script used to plot the likelihoods of the models.","sidebar":"documentationSidebar"},"ChromOptimise/Pipeline-Explanation/OptimalNumberOfStates/RedundantStateChecker":{"id":"ChromOptimise/Pipeline-Explanation/OptimalNumberOfStates/RedundantStateChecker","title":"RedundantStateChecker","description":"The script used to determine the redundant states in a model.","sidebar":"documentationSidebar"},"ChromOptimise/Pipeline-Explanation/OptimalNumberOfStates/SimilarEmissions":{"id":"ChromOptimise/Pipeline-Explanation/OptimalNumberOfStates/SimilarEmissions","title":"SimilarEmissions","description":"The script used to calculate Euclidean distances.","sidebar":"documentationSidebar"},"ChromOptimise/Pipeline-Explanation/Overall":{"id":"ChromOptimise/Pipeline-Explanation/Overall","title":"Overall explanation of pipeline","description":"Read this first to gain more context","sidebar":"documentationSidebar"},"ChromOptimise/Pipeline-Explanation/SubsampleBamFiles":{"id":"ChromOptimise/Pipeline-Explanation/SubsampleBamFiles","title":"1_SubsampleBamFiles","description":"The script used to merge and subsample processed files.","sidebar":"documentationSidebar"},"ChromOptimise/Processing-Times":{"id":"ChromOptimise/Processing-Times","title":"Processing times","description":"SLURM workload manager has the feature of introducing a maximum wall time into","sidebar":"documentationSidebar"},"ChromOptimise/SLURM-Workload-Manager-Information":{"id":"ChromOptimise/SLURM-Workload-Manager-Information","title":"SLURM information","description":"The scripts included in this repository were designed to be used with SLURM workload manager. As such, many elements of the scripts will not work if one does not run them through SLURM\'s sbatch command.","sidebar":"documentationSidebar"},"ChromOptimise/Supplementary-Pipeline-Explanation/Execute_Redundancy_Metrics":{"id":"ChromOptimise/Supplementary-Pipeline-Explanation/Execute_Redundancy_Metrics","title":"Execute_Redundancy_Metrics","description":"The script that produces the redundancy metrics for a single model file.","sidebar":"documentationSidebar"},"ChromOptimise/Supplementary-Pipeline-Explanation/Generate_Big_Model":{"id":"ChromOptimise/Supplementary-Pipeline-Explanation/Generate_Big_Model","title":"Generate_Big_Model","description":"The script that produces a single large model file.","sidebar":"documentationSidebar"},"ChromOptimise/Supplementary-Pipeline-Explanation/Overall":{"id":"ChromOptimise/Supplementary-Pipeline-Explanation/Overall","title":"Overall Explanation","description":"The purpose of the supplementary pipeline.","sidebar":"documentationSidebar"},"intro":{"id":"intro","title":"Welcome to the ChromOptimise wiki!","description":"ChromOptimise is a pipeline that identifies the optimum number of states that should be used with ChromHMM\'s LearnModel command for a particular genomic dataset."}}}')}}]);