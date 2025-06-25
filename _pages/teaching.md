---
layout: page
permalink: /teaching/
title: teaching
description:
nav: true
nav_order: 4
custom_title: true
---

<!-- Enhanced Teaching Page -->
<div class="teaching-container">
  <!-- Header Section -->
  <div class="teaching-header">
    <div class="header-content">
      <h1 class="teaching-title">
        <i class="fas fa-chalkboard-teacher"></i>
        Teaching
      </h1>
      <p class="teaching-subtitle">
        Educational materials and course resources
      </p>
    </div>
  </div>

  <!-- Courses Section -->
  <div class="courses-section">
    <h2 class="section-title">
      <i class="fas fa-graduation-cap"></i>
      Courses
    </h2>
    
    <div class="courses-grid">
      {% assign sorted_courses = site.courses | sort: 'year' | reverse %}
      {% for course in sorted_courses %}
      <div class="course-card">
        <div class="course-header">
          <h3 class="course-title">
            <a href="{{ course.url | relative_url }}">{{ course.title }}</a>
          </h3>
          <div class="course-meta">
            {% if course.semester %}
              <span class="course-semester">{{ course.semester }}</span>
            {% endif %}
            {% if course.year %}
              <span class="course-year">{{ course.year }}</span>
            {% endif %}
            {% if course.course_code %}
              <span class="course-code">{{ course.course_code }}</span>
            {% endif %}
          </div>
        </div>
        
        <div class="course-description">
          {{ course.content | strip_html | truncatewords: 30 }}
        </div>
        
        {% if course.materials %}
        <div class="course-materials-preview">
          <div class="materials-count">
            <i class="fas fa-file-pdf"></i>
            <span>{{ course.materials.size }} materials available</span>
          </div>
        </div>
        {% endif %}
        
        <div class="course-actions">
          <a href="{{ course.url | relative_url }}" class="course-link">
            View Course <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>

  <!-- Quick Access Section -->
  <div class="quick-access-section">
    <h2 class="section-title">
      <i class="fas fa-download"></i>
      Quick Access
    </h2>
    <div class="quick-access-grid">
      <div class="access-card">
        <div class="access-icon">
          <i class="fas fa-book"></i>
        </div>
        <h3>All Syllabi</h3>
        <p>Complete collection of course syllabi</p>
        <a href="#" class="access-btn">Download All</a>
      </div>
      <div class="access-card">
        <div class="access-icon">
          <i class="fas fa-sticky-note"></i>
        </div>
        <h3>Lecture Notes</h3>
        <p>Comprehensive lecture materials</p>
        <a href="#" class="access-btn">Browse Notes</a>
      </div>
      <div class="access-card">
        <div class="access-icon">
          <i class="fas fa-tasks"></i>
        </div>
        <h3>Assignments</h3>
        <p>Problem sets and projects</p>
        <a href="#" class="access-btn">View Tasks</a>
      </div>
    </div>
  </div>
</div>

<style>
  /* Teaching Container */
  .teaching-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
  }

  /* Header Section */
  .teaching-header {
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
  }

  .teaching-header::before {
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

  .teaching-title {
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

  .teaching-subtitle {
    font-size: 1.2rem;
    color: var(--global-text-color-light);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
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

  /* Courses Section */
  .courses-section {
    margin-bottom: 4rem;
  }

  .courses-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .course-card {
    background: var(--global-card-bg-color);
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: var(--global-card-shadow);
    border: 1px solid var(--global-divider-color);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  .course-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, var(--global-theme-color), var(--global-hover-color));
  }

  .course-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--global-card-hover-shadow);
  }

  .course-header {
    margin-bottom: 1rem;
  }

  .course-title a {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--global-text-color);
    text-decoration: none;
    margin: 0;
  }

  .course-title a:hover {
    color: var(--global-theme-color);
  }

  .course-meta {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-top: 0.75rem;
  }

  .course-semester,
  .course-year,
  .course-code {
    background: var(--global-theme-color);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 2rem;
    font-size: 0.75rem;
    font-weight: 500;
  }

  .course-description {
    color: var(--global-text-color-light);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .course-materials-preview {
    margin-bottom: 1.5rem;
  }

  .materials-count {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--global-theme-color);
    font-size: 0.9rem;
    font-weight: 500;
  }

  .course-actions {
    margin-top: auto;
  }

  .course-link {
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
  }

  .course-link:hover {
    background: var(--global-theme-color);
    color: white;
    transform: translateX(3px);
  }

  /* Quick Access Section */
  .quick-access-section {
    margin-bottom: 3rem;
  }

  .quick-access-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  .access-card {
    background: var(--global-card-bg-color);
    border-radius: 1rem;
    padding: 2rem;
    text-align: center;
    box-shadow: var(--global-card-shadow);
    border: 1px solid var(--global-divider-color);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .access-card:hover {
    transform: translateY(-3px);
    box-shadow: var(--global-card-hover-shadow);
  }

  .access-icon {
    width: 4rem;
    height: 4rem;
    margin: 0 auto 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--global-theme-color), var(--global-hover-color));
    border-radius: 50%;
    color: white;
    font-size: 1.5rem;
  }

  .access-card h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--global-text-color);
    margin-bottom: 0.75rem;
  }

  .access-card p {
    color: var(--global-text-color-light);
    margin-bottom: 1.5rem;
    line-height: 1.5;
  }

  .access-btn {
    background: var(--global-theme-color);
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    display: inline-block;
  }

  .access-btn:hover {
    background: var(--global-hover-color);
    color: white;
    transform: translateY(-2px);
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .teaching-container {
      padding: 1rem;
    }

    .teaching-title {
      font-size: 2rem;
      flex-direction: column;
      gap: 0.5rem;
    }

    .teaching-subtitle {
      font-size: 1rem;
    }

    .courses-grid {
      grid-template-columns: 1fr;
    }

    .quick-access-grid {
      grid-template-columns: 1fr;
    }
  }

  /* Dark Mode Adjustments */
  [data-theme="dark"] .course-card {
    background: var(--global-card-bg-color-dark);
  }

  [data-theme="dark"] .access-card {
    background: var(--global-card-bg-color-dark);
  }
</style>
