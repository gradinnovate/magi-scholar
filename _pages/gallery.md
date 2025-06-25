---
layout: page
permalink: /gallery/
title: Gallery
description: A visual journey through research, collaboration, and academic life
nav: false
nav_order: 8
---

<div class="gallery-container">
  <div class="gallery-header text-center mb-5">
    <h1 class="gallery-title">Visual Journey</h1>
    <p class="gallery-subtitle">Behind the scenes of work and academic life</p>
  </div>

  <div class="photo-grid">
    {% assign all_photos = site.data.gallery.photos | sort: "order" %}
    {% for photo in all_photos %}
      <div class="photo-item {{ photo.layout_class | default: 'normal' }}">
        <img src="{{ site.data.gallery.settings.default_image_path | append: photo.image | relative_url }}" alt="{{ photo.alt }}">
        <div class="photo-info">
          <h3>{{ photo.title }}</h3>
          <p>{{ photo.caption }}</p>
        </div>
      </div>
    {% endfor %}
  </div>
</div>

<style>
  .gallery-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  .gallery-header {
    margin-bottom: 4rem;
  }

  .gallery-title {
    font-size: 3rem;
    font-weight: 700;
    background: linear-gradient(135deg, var(--global-theme-color), var(--global-hover-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
  }

  .gallery-subtitle {
    font-size: 1.2rem;
    color: var(--global-text-color-light);
    max-width: 600px;
    margin: 0 auto;
  }

  .photo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: 250px;
    gap: 1.5rem;
  }

  .photo-item {
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    background: var(--global-card-bg-color);
    box-shadow: var(--global-card-shadow);
  }

  .photo-item:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 50px rgba(0,0,0,0.2);
  }

  .photo-item.large {
    grid-column: span 2;
    grid-row: span 2;
  }

  .photo-item.wide {
    grid-column: span 2;
  }

  .photo-item.tall {
    grid-row: span 2;
  }

  .photo-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .photo-item:hover img {
    transform: scale(1.05);
  }

  .photo-info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0,0,0,0.8));
    color: white;
    padding: 2rem 1.5rem 1.5rem;
    transform: translateY(100%);
    transition: transform 0.3s ease;
  }

  .photo-item:hover .photo-info {
    transform: translateY(0);
  }

  .photo-info h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.2rem;
    font-weight: 600;
  }

  .photo-info p {
    margin: 0;
    font-size: 0.9rem;
    opacity: 0.9;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .gallery-container {
      padding: 1rem;
    }

    .gallery-title {
      font-size: 2rem;
    }

    .photo-grid {
      grid-template-columns: 1fr;
      grid-auto-rows: 200px;
      gap: 1rem;
    }

    .photo-item.large,
    .photo-item.wide,
    .photo-item.tall {
      grid-column: span 1;
      grid-row: span 1;
    }

    .photo-info {
      padding: 1.5rem 1rem 1rem;
    }
  }

  /* Light/Dark mode adjustments */
  [data-theme="dark"] .photo-item {
    background: var(--global-card-bg-color-dark);
  }
</style>
