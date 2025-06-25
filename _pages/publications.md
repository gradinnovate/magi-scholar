---
layout: page
permalink: /publications/
title: publications
description:
nav: true
nav_order: 2
custom_title: true
---

<!-- Enhanced Publications Page -->
<div class="publications-container">
  <!-- Header Section -->
  <div class="publications-header">
    <div class="header-content">
      <h1 class="publications-title">
        <i class="fas fa-graduation-cap"></i>
        Publications
      </h1>
      <p class="publications-subtitle">
        Research contributions spanning multiple domains of computer science and engineering
      </p>
    </div>
  </div>

  <!-- Statistics Section -->
  <div class="stats-section">
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon">
          <i class="fas fa-book"></i>
        </div>
        <div class="stat-content">
          <div class="stat-number" id="journal-count">-</div>
          <div class="stat-label">Journal Articles</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">
          <i class="fas fa-users"></i>
        </div>
        <div class="stat-content">
          <div class="stat-number" id="conference-count">-</div>
          <div class="stat-label">Conference Papers</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">
          <i class="fas fa-star"></i>
        </div>
        <div class="stat-content">
          <div class="stat-number" id="accepted-count">-</div>
          <div class="stat-label">Recently Accepted</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">
          <i class="fas fa-calendar"></i>
        </div>
        <div class="stat-content">
          <div class="stat-number" id="year-span">-</div>
          <div class="stat-label">Publication Years</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Search Section -->
  <div class="search-section">
    <div class="search-container">
      <div class="search-wrapper">
        <i class="fas fa-search search-icon"></i>
        {% include bib_search.liquid %}
      </div>
      <div class="search-stats">
        <span id="total-publications">Loading publications...</span>
      </div>
    </div>
  </div>

  <!-- Publications List -->
  <div class="publications-content">
    <div class="publications">
      {% bibliography %}
    </div>
  </div>
</div>

<style>
  /* Publications Container */
  .publications-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
  }

  /* Header Section */
  .publications-header {
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
  }

  .publications-header::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(16, 185, 129, 0.1));
    border-radius: 50%;
    z-index: -1;
  }

  .publications-title {
    font-size: 3rem;
    font-weight: 700;
    background: linear-gradient(135deg, var(--global-theme-color), var(--global-hover-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .publications-subtitle {
    font-size: 1.2rem;
    color: var(--global-text-color-light);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  /* Statistics Section */
  .stats-section {
    margin-bottom: 3rem;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    max-width: 800px;
    margin: 0 auto;
  }

  .stat-card {
    background: var(--global-card-bg-color);
    border-radius: 1rem;
    padding: 1.5rem;
    box-shadow: var(--global-card-shadow);
    border: 1px solid var(--global-divider-color);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .stat-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(135deg, var(--global-theme-color), var(--global-hover-color));
  }

  .stat-card:hover {
    transform: translateY(-3px);
    box-shadow: var(--global-card-hover-shadow);
  }

  .stat-icon {
    font-size: 2rem;
    color: var(--global-theme-color);
    margin-bottom: 1rem;
  }

  .stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--global-text-color);
    margin-bottom: 0.5rem;
    background: linear-gradient(135deg, var(--global-theme-color), var(--global-hover-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .stat-label {
    font-size: 0.9rem;
    color: var(--global-text-color-light);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  /* Search Section */
  .search-section {
    background: var(--global-card-bg-color);
    border-radius: 1rem;
    padding: 2rem;
    margin-bottom: 3rem;
    box-shadow: var(--global-card-shadow);
    border: 1px solid var(--global-divider-color);
  }

  .search-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .search-wrapper {
    position: relative;
    max-width: 500px;
    margin: 0 auto;
    width: 100%;
  }

  .search-icon {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--global-text-color-light);
    z-index: 2;
  }

  #bibsearch {
    width: 100%;
    padding: 0.75rem 1rem 0.75rem 3rem !important;
    border: 2px solid var(--global-divider-color);
    border-radius: 0.75rem;
    background: var(--global-bg-color);
    color: var(--global-text-color);
    font-size: 1rem;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  }

  #bibsearch:focus {
    outline: none;
    border-color: var(--global-theme-color);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
    transform: translateY(-1px);
  }

  .search-stats {
    text-align: center;
    color: var(--global-text-color-light);
    font-size: 0.9rem;
  }

  /* Publications Content */
  .publications-content {
    position: relative;
  }

  /* Enhanced Publication Items */
  .publications .bibliography {
    list-style: none;
    padding: 0;
  }

  .publications .bibliography li {
    background: var(--global-card-bg-color);
    border-radius: 1rem;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: var(--global-card-shadow);
    border: 1px solid var(--global-divider-color);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  .publications .bibliography li::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(135deg, var(--global-theme-color), var(--global-hover-color));
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .publications .bibliography li:hover {
    transform: translateY(-3px);
    box-shadow: var(--global-card-hover-shadow);
  }

  .publications .bibliography li:hover::before {
    opacity: 1;
  }

  /* Publication Title */
  .publications .title {
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--global-text-color);
    margin-bottom: 0.75rem;
    line-height: 1.4;
  }

  .publications .title a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .publications .title a:hover {
    color: var(--global-theme-color);
  }

  /* Authors */
  .publications .author {
    color: var(--global-text-color-light);
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }

  .publications .author em {
    color: var(--global-theme-color);
    font-weight: 500;
    font-style: normal;
  }

  /* Venue */
  .publications .venue {
    color: var(--global-hover-color);
    font-style: italic;
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
  }

  /* Year Badge */
  .publications .year {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: linear-gradient(135deg, var(--global-theme-color), var(--global-hover-color));
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.8rem;
    font-weight: 500;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }

  /* Status Badge */
  .publications .bibliography li[data-status="accepted"]::after,
  .publications .bibliography li:has(.note:contains("Just Accepted"))::after {
    content: '✨ Just Accepted';
    position: absolute;
    top: 3.5rem;
    right: 1rem;
    background: linear-gradient(135deg, #10b981, #059669);
    color: white;
    padding: 0.3rem 0.8rem;
    border-radius: 1rem;
    font-size: 0.75rem;
    font-weight: 500;
    box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% { 
      box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
    }
    50% { 
      box-shadow: 0 4px 16px rgba(16, 185, 129, 0.5);
    }
  }

  /* Conference vs Journal styling */
  .publications .bibliography li[data-type="article"] {
    border-left: 4px solid #f59e0b;
  }

  .publications .bibliography li[data-type="inproceedings"] {
    border-left: 4px solid #8b5cf6;
  }

  /* Publication Type Icons */
  .publications .title::before {
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    margin-right: 0.5rem;
    opacity: 0.7;
  }

  .publications .bibliography li[data-type="article"] .title::before {
    content: "\f02d"; /* fa-book */
    color: #f59e0b;
  }

  .publications .bibliography li[data-type="inproceedings"] .title::before {
    content: "\f0c0"; /* fa-users */
    color: #8b5cf6;
  }

  /* Enhanced hover effects */
  .publications .bibliography li:hover {
    transform: translateY(-5px) scale(1.01);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  }

  /* Year Dividers */
  .publications .year-divider {
    display: flex;
    align-items: center;
    margin: 3rem 0 2rem;
    font-size: 2rem;
    font-weight: 700;
    color: var(--global-text-color-light);
  }

  .publications .year-divider::before,
  .publications .year-divider::after {
    content: '';
    flex: 1;
    height: 2px;
    background: linear-gradient(135deg, transparent, var(--global-divider-color), transparent);
  }

  .publications .year-divider span {
    margin: 0 2rem;
    background: var(--global-bg-color);
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    border: 2px solid var(--global-divider-color);
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .publications-container {
      padding: 1rem;
    }

    .publications-title {
      font-size: 2rem;
      flex-direction: column;
      gap: 0.5rem;
    }

    .publications-subtitle {
      font-size: 1rem;
    }

    .search-section {
      padding: 1.5rem;
    }

    .publications .bibliography li {
      padding: 1.5rem;
    }

    .publications .year {
      position: static;
      display: inline-block;
      margin-bottom: 0.5rem;
    }
  }

  /* Dark Mode Adjustments */
  [data-theme="dark"] .search-section {
    background: var(--global-card-bg-color-dark);
  }

  [data-theme="dark"] .publications .bibliography li {
    background: var(--global-card-bg-color-dark);
  }
</style>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Wait for bibliography to load
    setTimeout(() => {
      calculateStatistics();
      addYearDividers();
      setupSearch();
    }, 1000);
    
    // Also try again after a longer delay to ensure everything is loaded
    setTimeout(() => {
      calculateStatistics();
    }, 2000);
  });

  function calculateStatistics() {
    const pubItems = document.querySelectorAll('.publications .bibliography li');
    const totalElement = document.getElementById('total-publications');
    
    let journalCount = 0;
    let conferenceCount = 0;
    let acceptedCount = 0;
    let years = new Set();

    pubItems.forEach(item => {
      // Count by publication type - check venue text more comprehensively
      const itemText = item.textContent.toLowerCase();
      const venue = item.querySelector('.venue')?.textContent || '';
      
      // Debug log to see what we're working with
      console.log('Item text:', itemText);
      console.log('Venue:', venue);
      
      if (venue.includes('Transactions') || venue.includes('Journal') || 
          itemText.includes('transactions') || itemText.includes('journal')) {
        journalCount++;
        item.setAttribute('data-type', 'article');
      } else if (venue.includes('Proceedings') || venue.includes('Conference') ||
                 itemText.includes('proceedings') || itemText.includes('conference')) {
        conferenceCount++;
        item.setAttribute('data-type', 'inproceedings');
      } else {
        // If we can't determine type, assume it's a conference paper
        conferenceCount++;
        item.setAttribute('data-type', 'inproceedings');
      }

      // Count recently accepted
      if (itemText.includes('just accepted')) {
        acceptedCount++;
      }

      // Collect years
      const yearElement = item.querySelector('.year');
      if (yearElement) {
        years.add(yearElement.textContent.trim());
      }
    });

    console.log('Total items found:', pubItems.length);
    console.log('Journal count:', journalCount);
    console.log('Conference count:', conferenceCount);
    console.log('Accepted count:', acceptedCount);

    // Update statistics
    document.getElementById('journal-count').textContent = journalCount;
    document.getElementById('conference-count').textContent = conferenceCount;
    document.getElementById('accepted-count').textContent = acceptedCount;
    
    const yearArray = Array.from(years).sort();
    const yearSpan = yearArray.length > 1 ? 
      `${yearArray[0]}-${yearArray[yearArray.length - 1]}` : 
      yearArray[0] || '-';
    document.getElementById('year-span').textContent = yearSpan;

    if (totalElement) {
      totalElement.textContent = `${pubItems.length} publications found`;
    }
  }

  function setupSearch() {
    const searchInput = document.getElementById('bibsearch');
    const totalElement = document.getElementById('total-publications');
    
    if (searchInput) {
      searchInput.addEventListener('input', function() {
        const pubItems = document.querySelectorAll('.publications .bibliography li');
        const visiblePubs = document.querySelectorAll('.publications .bibliography li:not([style*="display: none"])');
        if (totalElement) {
          totalElement.textContent = `${visiblePubs.length} of ${pubItems.length} publications shown`;
        }
      });
    }
  }

  function addYearDividers() {
    const pubItems = document.querySelectorAll('.publications .bibliography li');
    let currentYear = null;
    
    pubItems.forEach((item, index) => {
      const yearElement = item.querySelector('.year');
      if (yearElement) {
        const year = yearElement.textContent.trim();
        if (year !== currentYear) {
          currentYear = year;
          const divider = document.createElement('div');
          divider.className = 'year-divider';
          divider.innerHTML = `<span>${year}</span>`;
          item.parentNode.insertBefore(divider, item);
        }
      }
    });
  }
</script>
