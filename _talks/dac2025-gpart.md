---
layout: talk
title: "GPart: A GNN-Enabled Multilevel Graph Partitioner"
date: 2025-06-25
type: "conference"
venue: "Design Automation Conference"
location: "Moscone Center West, San Francisco, CA USA"
duration: "20 minutes"
abstract: "This paper presents GPart, a novel GNN-enabled multilevel graph partitioner designed to overcome the limitations of existing methods, particularly concerning scalability and memory efficiency while maintaining high cut quality. Traditional multilevel partitioners are fast but can compromise cut quality, while existing GNN-based methods offer good accuracy but suffer from poor scalability and high memory demands."
audience: "Graduate students and faculty in Electrical Engineering and Computer Science"
key_topics:
  - "Graph Neural Networks"
  - "Graph Partitioning"
 
materials:
  - name: "Presentation Slides"
    file: "/assets/pdf/talks/dac-gpart.pdf"
    type: "pdf"
    description: 
---

## Talk Overview

1. **Problem Formulation:** Define the graph partitioning problem, including input (graph $G(V,E)$ with vertex and edge weights), objective (minimize cut size), and constraint (balance factor $\epsilon$).
2. **Overview of Existing Works:** Discuss the characteristics and limitations of current graph partitioning methods, including multilevel partitioners (e.g., METIS, G-kway) and GNN-based partitioners (e.g., GAP, GenPart).
3. **Our Contributions:** Highlight the key contributions of GPart: a GNN-enabled multilevel framework, centroid-guided refinement, improved scalability and memory efficiency, and superior cut size results.
4.  **Framework Overview - Training (Slide 5):** Explain the training process of GPart, emphasizing the learning of better embeddings to guide the coarsening module. Detail the components involved during training, such as Embedding Layers, Coarsening Module, Bottleneck Layers, Projection Module, and QR Factorization.
5.  **Details of Components:** Provide a more in-depth explanation of the Embedding Layers (GraphSAGE, input/output features), Coarsening Module (heavy edge matching, sigmoid distance-based similarity, graph size reduction), and Bottleneck and Projection layers (linear layers, unpooling).
6.  **Coarsening Module - Learning-Guided Coarsening:** Illustrate the learning-guided coarsening process, from the original graph and its embeddings to updating edge weights for coarsening guidance, GPU-accelerated greedy matching, and forming coarsened graphs with super node embeddings.
7.  **Loss Functions (Slide 8):** Describe the two main loss functions used in GPart: $L_{consistency}$ (Spectral Consistency Loss for preserving spectral properties) and $L_{Rayleigh}$ (Rayleigh Quotient Alignment Loss for capturing higher-frequency spectral components).
8.  **Framework Overview - Evaluation:** Explain the evaluation process, focusing on how the trained embeddings are used in a multilevel flow with iterative coarsening, initial partitioning (using METIS on the coarsest graph), and iterative projection and refinement.
9.  **Centroid-Guided, Gain-Based Refinement:** Detail the refinement strategy, which involves detecting "candidate" nodes in the spectral (embedding) domain based on proximity to partition centroids and performing gain calculation and FM-based refinement in the graph (structural) domain.
10. **Memory Usage Comparison (Slide 11):** Present a table comparing the memory usage of GPart with GAP and GenPart on Titan23 benchmarks, highlighting GPart's significant memory efficiency.
11. **Cut Size Results (Titan23):** Show the experimental results for cut size on Titan23 benchmarks, comparing GPart's performance against METIS for $k=2$ and $k=3$ with different balance factors.
12. **Cut Size Results (DIMACS):** Present the experimental results for cut size on DIMACS benchmarks, comparing GPart's performance against G-kway for $k=2$ and $\epsilon=3\%$.
