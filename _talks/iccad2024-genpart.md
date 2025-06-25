---
layout: talk
title: "A Hypergraph Partitioner Utilizing 
a Novel Graph Generative Model"
date: 2024-10-28
type: "conference"
venue: "IEEE/ACM International Conference on Computer-Aided Design (ICCAD)"
location: "Newark, New Jersey, USA"
duration: "20 minutes"
abstract: "This presentation introduces GenPart, a novel hypergraph partitioner that leverages a graph generative model to significantly enhance partitioning performance. Addressing the limitations of traditional spectral and multi-level methods, which often suffer from information loss and compromise cut quality, GenPart integrates neural network methodologies with heuristic refinement techniques."
key_topics:
  - "Hypergraph Partitioning"
  - "Generative AI Models" 
  - "Electronic Design Automation"
  - "Graph Neural Networks"
materials:
  - name: "Presentation Slides"
    file: "/assets/pdf/talks/iccad2024-genpart.pdf"
    type: "pdf"
    description: "Complete slide deck with technical details and experimental results"
 
---


## Talk Overview

1.  **Introduction:** Briefly discuss the importance of hypergraph partitioning in VLSI design and highlight the limitations of traditional methods like spectral and multi-level partitioning. Introduce GenPart as a solution to these challenges.
2.  **Problem Formulation:** Define the k-way hypergraph partitioning problem, emphasizing the objectives of minimizing cut size and adhering to balance constraints, with the assumption of uniform weights.
3.  **GenPart Framework Overview:** Present a high-level overview of the GenPart framework, detailing its four primary components: Data Preprocessing, Generative Encoder, Partitioning Decoder, and Refinement and Optimization Engine. A visual representation of the framework will be used to illustrate the data flow.
4.  **Data Preprocessing & Model Structure:** Elaborate on the data preprocessing steps, including the transformation of hypergraphs into clique expansion graphs and the utilization of various node features (topological, node degree, pin count, and masked partition ID). Describe the architecture of the generative encoder and partitioning decoder.
5.  **Model Training & Loss Function Components:** Explain the unsupervised learning approach adopted for GenPart's training and detail the three components of the composite loss function: KL Divergence Loss, Normalized Cut Loss, and Balanced Size Loss.
6.  **Node Masking and Experimental Setup:** Discuss the node masking strategy employed during training and outline the experimental setup, including implementation details, hardware specifications, dataset, and training parameters.
7.  **Experimental Results on ISPD98 Benchmarks:** Present the performance evaluation of GenPart on the ISPD98 Circuit Benchmark Suite, comparing its cut size improvement against leading partitioners like hMETIS, SpecPart, K-SpecPart, and MedPart, for both 2% and 10% balance factors.
8.  **Experimental Results on Titan23 and ISPD2005 Benchmarks:** Further demonstrate GenPart's generalization capabilities by presenting results on the Titan23 and ISPD2005 benchmark suites, showcasing its performance on unseen data and designs with high-degree hyperedges.
9.  **Conclusion:** Summarize GenPart's significant advancements in hypergraph partitioning, attributing its enhanced performance to unsupervised learning, preservation of graph structure, and iterative refinement in the embedding space. Conclude by emphasizing GenPart's role in setting a new benchmark and stimulating future research.