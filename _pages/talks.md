---
layout: page
permalink: /talks/
title: talks
description: 
nav: true
nav_order: 3
custom_title: true
---

<!-- Enhanced Talks Page -->
<div class="talks-container">
  <!-- Header Section -->
  <div class="talks-header">
    <div class="header-content">
      <h1 class="talks-title">
        <i class="fas fa-microphone"></i>
        Talks & Presentations
      </h1>
      <p class="talks-subtitle">
        Conference presentations, invited talks, and academic seminars
      </p>
    </div>
  </div>

  <!-- Statistics Section -->
  {% assign total_talks = site.talks.size %}
  {% assign conference_talks = site.talks | where: "type", "conference" | size %}
  {% assign invited_talks = site.talks | where: "type", "invited" | size %}
  {% assign workshop_talks = site.talks | where: "type", "workshop" | size %}
  
  {% if total_talks > 0 %}
  <div class="stats-section">
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon">
          <i class="fas fa-calendar-alt"></i>
        </div>
        <div class="stat-content">
          <div class="stat-number">{{ conference_talks }}</div>
          <div class="stat-label">Conference Talks</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">
          <i class="fas fa-university"></i>
        </div>
        <div class="stat-content">
          <div class="stat-number">{{ invited_talks }}</div>
          <div class="stat-label">Invited Seminars</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">
          <i class="fas fa-users"></i>
        </div>
        <div class="stat-content">
          <div class="stat-number">{{ workshop_talks }}</div>
          <div class="stat-label">Workshops</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">
          <i class="fas fa-microphone"></i>
        </div>
        <div class="stat-content">
          <div class="stat-number">{{ total_talks }}</div>
          <div class="stat-label">Total Talks</div>
        </div>
      </div>
    </div>
  </div>
  {% endif %}

  <!-- Talks Section -->
  <div class="talks-section">
    <h2 class="section-title">
      <i class="fas fa-presentation"></i>
      {% if total_talks > 0 %}Recent Talks{% else %}Talks{% endif %}
    </h2>
    
    {% if total_talks > 0 %}
    <div class="talks-timeline">
      {% assign sorted_talks = site.talks | sort: 'date' | reverse %}
      {% for talk in sorted_talks %}
      <div class="talk-item">
        <div class="talk-date">
          <span class="year">{{ talk.date | date: "%Y" }}</span>
          <span class="month">{{ talk.date | date: "%b" }}</span>
        </div>
        <div class="talk-content">
          <div class="talk-header">
            <h3 class="talk-title">
              <a href="{{ talk.url | relative_url }}">{{ talk.title }}</a>
            </h3>
            {% if talk.type %}
              <span class="talk-type {{ talk.type }}">{{ talk.type | capitalize }} Talk</span>
            {% endif %}
          </div>
          {% if talk.venue %}
          <div class="talk-venue">
            <i class="fas fa-map-marker-alt"></i>
            <span>{{ talk.venue }}</span>
          </div>
          {% endif %}
          {% if talk.location %}
          <div class="talk-location">
            <i class="fas fa-globe"></i>
            <span>{{ talk.location }}</span>
          </div>
          {% endif %}
          {% if talk.abstract %}
          <div class="talk-description">
            {{ talk.abstract }}
          </div>
          {% endif %}
          {% if talk.materials %}
          <div class="talk-materials">
            {% for material in talk.materials limit: 3 %}
              <a href="{% if material.file contains 'http' %}{{ material.file }}{% else %}{{ material.file | relative_url }}{% endif %}" class="material-link {% if material.type %}{{ material.type }}{% endif %}" target="_blank">
                {% case material.type %}
                  {% when 'video' %}
                    <i class="fas fa-video"></i>
                  {% when 'code' %}
                    <i class="fas fa-code"></i>
                  {% when 'demo' %}
                    <i class="fas fa-play-circle"></i>
                  {% else %}
                    <i class="fas fa-file-pdf"></i>
                {% endcase %}
                <span>{{ material.name }}</span>
              </a>
            {% endfor %}
            {% if talk.materials.size > 3 %}
              <a href="{{ talk.url | relative_url }}" class="material-link more">
                <i class="fas fa-ellipsis-h"></i>
                <span>+{{ talk.materials.size | minus: 3 }} more</span>
              </a>
            {% endif %}
          </div>
          {% endif %}
          <div class="talk-actions">
            <a href="{{ talk.url | relative_url }}" class="talk-link">
              View Details <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
              </div>
      {% endfor %}
    </div>
    {% else %}
    <div class="no-talks-message">
      <div class="empty-state">
        <i class="fas fa-microphone-slash"></i>
        <h3>No talks yet</h3>
        <p>Talks will appear here once you add Markdown files to the <code>_talks/</code> directory.</p>
        <div class="help-text">
          <p>To add a talk, create a new <code>.md</code> file in <code>_talks/</code> with the following format:</p>
          <pre><code>---
layout: talk
title: "Your Talk Title"
date: 2024-01-01
type: "conference"  # or "invited", "workshop"
venue: "Conference/University Name"
location: "City, Country"
---

Your talk description here...</code></pre>
        </div>
      </div>
    </div>
    {% endif %}
  </div>

  <!-- Upcoming Talks Section -->
  {% assign today = 'now' | date: '%Y-%m-%d' %}
  {% assign upcoming_talks = site.talks | where_exp: "talk", "talk.date" %}
  {% assign filtered_upcoming = '' | split: ',' %}
  {% for talk in upcoming_talks %}
    {% assign talk_date = talk.date | date: '%Y-%m-%d' %}
    {% if talk_date >= today %}
      {% assign filtered_upcoming = filtered_upcoming | push: talk %}
    {% endif %}
  {% endfor %}
  {% assign upcoming_talks = filtered_upcoming | sort: 'date' %}
  
  {% if upcoming_talks.size > 0 %}
  <div class="upcoming-section">
    <h2 class="section-title">
      <i class="fas fa-calendar-plus"></i>
      Upcoming Talks
    </h2>
    
    <div class="upcoming-grid">
      {% for talk in upcoming_talks limit: 3 %}
      <div class="upcoming-card">
        <div class="upcoming-date">
          <div class="date-number">{{ talk.date | date: "%-d" }}</div>
          <div class="date-month">{{ talk.date | date: "%b %Y" }}</div>
        </div>
        <div class="upcoming-info">
          <h3>
            <a href="{{ talk.url | relative_url }}">{{ talk.title }}</a>
          </h3>
          {% if talk.venue %}
          <p class="upcoming-venue">{{ talk.venue }}</p>
          {% endif %}
          {% if talk.location %}
          <p class="upcoming-location">{{ talk.location }}</p>
          {% endif %}
        </div>
        <div class="upcoming-status">
          <span class="status-badge {{ talk.type | default: 'upcoming' }}">
            {% if talk.type %}{{ talk.type | capitalize }}{% else %}Upcoming{% endif %}
          </span>
        </div>
      </div>
      {% endfor %}
      
      {% if upcoming_talks.size > 3 %}
      <div class="view-more-upcoming">
        <p>{{ upcoming_talks.size | minus: 3 }} more upcoming talks</p>
      </div>
      {% endif %}
    </div>
  </div>
  {% endif %}
</div>

<style>
  /* Talks Container */
  .talks-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
  }

  /* Header Section */
  .talks-header {
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
  }

  .talks-header::before {
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

  .talks-title {
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

  .talks-subtitle {
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

  /* Section Titles */
  .section-title {
    font-size: 2rem;
    font-weight: 600;
    color: var(--global-text-color);
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .section-title i {
    color: var(--global-theme-color);
  }

  /* Talks Timeline */
  .talks-section {
    margin-bottom: 4rem;
  }

  .talks-timeline {
    position: relative;
  }

  .talks-timeline::before {
    content: '';
    position: absolute;
    left: 80px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, var(--global-theme-color), var(--global-hover-color));
  }

  .talk-item {
    display: flex;
    margin-bottom: 2rem;
    position: relative;
  }

  .talk-date {
    flex-shrink: 0;
    width: 100px;
    text-align: center;
    margin-right: 2rem;
    position: relative;
  }

  .talk-date::after {
    content: '';
    position: absolute;
    right: -17px;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    background: var(--global-theme-color);
    border-radius: 50%;
    border: 3px solid var(--global-bg-color);
    z-index: 1;
  }

  .talk-date .year {
    display: block;
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--global-text-color);
  }

  .talk-date .month {
    display: block;
    font-size: 0.9rem;
    color: var(--global-text-color-light);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .talk-content {
    flex: 1;
    background: var(--global-card-bg-color);
    border-radius: 1rem;
    padding: 1.5rem;
    box-shadow: var(--global-card-shadow);
    border: 1px solid var(--global-divider-color);
    transition: all 0.3s ease;
  }

  .talk-content:hover {
    transform: translateY(-3px);
    box-shadow: var(--global-card-hover-shadow);
  }

  .talk-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
    gap: 1rem;
  }

  .talk-title {
    font-size: 1.3rem;
    font-weight: 600;
    margin: 0;
    flex: 1;
  }

  .talk-title a {
    color: var(--global-text-color);
    text-decoration: none;
  }

  .talk-title a:hover {
    color: var(--global-theme-color);
  }

  .talk-actions {
    margin-top: 1rem;
  }

  .talk-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--global-theme-color);
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border: 1px solid var(--global-theme-color);
    border-radius: 0.5rem;
    transition: all 0.3s ease;
    font-size: 0.9rem;
  }

  .talk-link:hover {
    background: var(--global-theme-color);
    color: white;
    transform: translateX(3px);
  }

  .material-link.more {
    background: var(--global-divider-color);
    color: var(--global-text-color-light);
  }

  .material-link.more:hover {
    background: var(--global-theme-color);
    color: white;
  }

  .talk-type {
    padding: 0.25rem 0.75rem;
    border-radius: 2rem;
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    flex-shrink: 0;
  }

  .talk-type.conference {
    background: rgba(99, 102, 241, 0.1);
    color: var(--global-theme-color);
  }

  .talk-type.invited {
    background: rgba(16, 185, 129, 0.1);
    color: #10b981;
  }

  .talk-type.workshop {
    background: rgba(245, 158, 11, 0.1);
    color: #f59e0b;
  }

  .talk-venue,
  .talk-location {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    color: var(--global-text-color-light);
  }

  .talk-venue i,
  .talk-location i {
    color: var(--global-theme-color);
    width: 16px;
  }

  .talk-description {
    color: var(--global-text-color);
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .talk-materials {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  .material-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: var(--global-bg-color);
    border: 1px solid var(--global-divider-color);
    border-radius: 0.5rem;
    text-decoration: none;
    color: var(--global-text-color);
    font-size: 0.9rem;
    transition: all 0.3s ease;
  }

  .material-link:hover {
    background: var(--global-theme-color);
    color: white;
    border-color: var(--global-theme-color);
  }

  .material-link.video i {
    color: #dc3545;
  }

  .material-link.code i {
    color: #6f42c1;
  }

  /* Empty State */
  .no-talks-message {
    text-align: center;
    padding: 4rem 2rem;
  }

  .empty-state {
    max-width: 600px;
    margin: 0 auto;
  }

  .empty-state i {
    font-size: 4rem;
    color: var(--global-text-color-light);
    margin-bottom: 1.5rem;
    opacity: 0.5;
  }

  .empty-state h3 {
    font-size: 1.5rem;
    color: var(--global-text-color);
    margin-bottom: 1rem;
  }

  .empty-state p {
    color: var(--global-text-color-light);
    font-size: 1.1rem;
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  .help-text {
    background: var(--global-card-bg-color);
    border-radius: 1rem;
    padding: 2rem;
    border: 1px solid var(--global-divider-color);
    text-align: left;
  }

  .help-text p {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .help-text pre {
    background: var(--global-bg-color);
    border: 1px solid var(--global-divider-color);
    border-radius: 0.5rem;
    padding: 1rem;
    font-size: 0.9rem;
    overflow-x: auto;
  }

  .help-text code {
    color: var(--global-theme-color);
    font-family: 'JetBrains Mono', 'Courier New', monospace;
  }

  /* Upcoming Section */
  .upcoming-section {
    margin-bottom: 3rem;
  }

  .upcoming-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .upcoming-card {
    background: var(--global-card-bg-color);
    border-radius: 1rem;
    padding: 1.5rem;
    box-shadow: var(--global-card-shadow);
    border: 1px solid var(--global-divider-color);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .upcoming-card:hover {
    transform: translateY(-3px);
    box-shadow: var(--global-card-hover-shadow);
  }

  .upcoming-date {
    text-align: center;
    flex-shrink: 0;
  }

  .date-number {
    font-size: 2rem;
    font-weight: 700;
    color: var(--global-theme-color);
    line-height: 1;
  }

  .date-month {
    font-size: 0.8rem;
    color: var(--global-text-color-light);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .upcoming-info {
    flex: 1;
  }

  .upcoming-info h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--global-text-color);
    margin: 0 0 0.5rem 0;
  }

  .upcoming-info h3 a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .upcoming-info h3 a:hover {
    color: var(--global-theme-color);
  }

  .upcoming-venue,
  .upcoming-location {
    font-size: 0.9rem;
    color: var(--global-text-color-light);
    margin: 0.25rem 0;
  }

  .upcoming-status {
    flex-shrink: 0;
  }

  .status-badge {
    padding: 0.25rem 0.75rem;
    border-radius: 2rem;
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .status-badge.upcoming {
    background: rgba(245, 158, 11, 0.1);
    color: #f59e0b;
  }

  .status-badge.conference {
    background: rgba(99, 102, 241, 0.1);
    color: #6366f1;
  }

  .status-badge.invited {
    background: rgba(16, 185, 129, 0.1);
    color: #10b981;
  }

  .status-badge.workshop {
    background: rgba(139, 92, 246, 0.1);
    color: #8b5cf6;
  }

  .view-more-upcoming {
    grid-column: 1 / -1;
    text-align: center;
    padding: 1rem;
    margin-top: 1rem;
  }

  .view-more-upcoming p {
    color: var(--global-text-color-light);
    font-size: 0.9rem;
    margin: 0;
    padding: 0.5rem 1rem;
    background: var(--global-card-bg-color);
    border-radius: 2rem;
    border: 1px solid var(--global-divider-color);
    display: inline-block;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .talks-container {
      padding: 1rem;
    }

    .talks-title {
      font-size: 2rem;
      flex-direction: column;
      gap: 0.5rem;
    }

    .talks-subtitle {
      font-size: 1rem;
    }

    .stats-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .talks-timeline::before {
      display: none;
    }

    .talk-item {
      flex-direction: column;
    }

    .talk-date {
      width: auto;
      margin-right: 0;
      margin-bottom: 1rem;
      text-align: left;
    }

    .talk-date::after {
      display: none;
    }

    .talk-header {
      flex-direction: column;
      align-items: flex-start;
    }

    .upcoming-card {
      flex-direction: column;
      text-align: center;
    }
  }

  /* Dark Mode Adjustments */
  [data-theme="dark"] .stat-card,
  [data-theme="dark"] .talk-content,
  [data-theme="dark"] .upcoming-card {
    background: var(--global-card-bg-color-dark);
  }

  [data-theme="dark"] .material-link {
    background: var(--global-card-bg-color-dark);
  }
</style> 