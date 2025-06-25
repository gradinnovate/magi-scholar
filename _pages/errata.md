---
layout: page
permalink: /errata/
title: errata
description: Corrections and updates to published works
nav: true
nav_order: 6
---

<div class="errata-container">
  <!-- Header Section -->
  <div class="errata-header">
    <h1 class="errata-title">
      <i class="fas fa-exclamation-triangle"></i>
      Publication Errata
    </h1>
    <p class="errata-subtitle">
      Corrections and clarifications for published research papers
    </p>
  </div>

  <!-- Notice Section -->
  <div class="notice-section">
    <div class="alert alert-info">
      <strong>Notice:</strong> This page lists corrections to published papers. All errata are provided in good faith to maintain the accuracy of the scientific record.
    </div>
  </div>

  <!-- Errata Entries -->
  <div class="errata-entries">
    
    ## 2024

    ### A hypergraph partitioner utilizing a novel graph generative model

    **Publication Details:**
    - Authors: M. Chen and T.C. Wang
    - Venue: Proceedings of International Conference on Computer-Aided Design (ICCAD) 2024
    - DOI: [Link to paper]

    **Errata Summary:**
    - Figure 3 caption correction (minor typographical error)
    - Algorithm 2 implementation detail clarification
    - Reference formatting update

    **Impact:** No changes to experimental results or conclusions.

    <a href="{{ '/assets/pdf/errata/chen2024hypergraph_errata.pdf' | relative_url }}" class="btn btn-sm btn-outline-danger">
      <i class="fas fa-file-pdf"></i> View Detailed Errata
    </a>

    ---

    <!-- Add more errata entries here as needed -->

  </div>
  
  <!-- Contact Section -->
  <div class="contact-section">
    <h3>Report an Error</h3>
    <p>
      If you have found an error in any of our publications, please contact us at 
      <a href="mailto:magi.chen@example.com">magi.chen@example.com</a>. 
      We appreciate your help in maintaining the accuracy of our research.
    </p>
  </div>
</div>

<style>
  .errata-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem;
  }

  .errata-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .errata-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--global-theme-color);
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .errata-title i {
    color: #dc3545;
  }

  .errata-subtitle {
    font-size: 1.1rem;
    color: var(--global-text-color-light);
    max-width: 600px;
    margin: 0 auto;
  }

  .notice-section {
    margin-bottom: 3rem;
  }

  .errata-entries {
    margin-bottom: 3rem;
  }

  .errata-entries h2 {
    border-bottom: 2px solid var(--global-theme-color);
    padding-bottom: 0.5rem;
    margin-bottom: 2rem;
  }

  .errata-entries h3 {
    color: var(--global-theme-color);
    margin-bottom: 1rem;
  }

  .contact-section {
    background: var(--global-card-bg-color);
    padding: 2rem;
    border-radius: 1rem;
    border-left: 4px solid #dc3545;
    box-shadow: var(--global-card-shadow);
  }

  .contact-section h3 {
    color: var(--global-theme-color);
    margin-bottom: 1rem;
  }

  .btn-outline-danger {
    color: #dc3545;
    border-color: #dc3545;
  }

  .btn-outline-danger:hover {
    background-color: #dc3545;
    color: white;
  }
</style>
