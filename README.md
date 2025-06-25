# Magi Scholar

<div align="center">

**🧙‍♂️ A Modern Academic Portfolio & Research Hub**

_Powered by Jekyll & al-folio theme_

---

[![Deploy](https://github.com/GradInnovate/magi-scholar/actions/workflows/deploy.yml/badge.svg)](https://github.com/GradInnovate/magi-scholar/actions/workflows/deploy.yml)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Jekyll](https://img.shields.io/badge/Jekyll-4.3+-red.svg)](https://jekyllrb.com/)
[![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)

</div>

## ✨ Overview

**Magi Scholar** is a modern, responsive academic portfolio website designed for researchers, academics, and scholars. Built on the robust al-folio Jekyll theme, it provides a comprehensive platform to showcase research, publications, talks, courses, and more.

### 🎯 Key Features

- **📚 Publications Management**: Automated bibliography from BibTeX files
- **🎤 Talk Archives**: Comprehensive talk and presentation management
- **📖 Course Collections**: Organized course materials and resources
- **📝 Blog System**: Academic blogging with math support
- **🌓 Dark/Light Mode**: Automatic theme switching
- **📱 Responsive Design**: Mobile-first, modern UI
- **🔍 Search Functionality**: Built-in search across all content
- **📊 Analytics Ready**: Google Analytics and other tracking support

## 🚀 Quick Start

### Prerequisites

- **Ruby** (>= 2.7.0)
- **Jekyll** (>= 4.3.0)
- **Bundler**
- **Node.js** & **npm** (for asset processing)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/GradInnovate/magi-scholar.git
   cd magi-scholar
   ```

2. **Install dependencies**

   ```bash
   bundle install
   npm install
   ```

3. **Configure the site**

   ```bash
   cp _config.yml.example _config.yml
   # Edit _config.yml with your information
   ```

4. **Run locally**

   ```bash
   bundle exec jekyll serve --livereload
   ```

5. **View your site**
   Open [http://localhost:4000/magi-scholar](http://localhost:4000/magi-scholar) in your browser

## 📁 Project Structure

```
magi-scholar/
├── _bibliography/          # BibTeX files for publications
├── _books/                 # Book reviews and reading lists
├── _courses/               # Course materials and syllabi
├── _data/                  # Site data (CV, repositories, etc.)
├── _includes/              # Reusable template components
├── _layouts/               # Page layouts
├── _news/                  # News and announcements
├── _pages/                 # Static pages
├── _posts/                 # Blog posts
├── _projects/              # Research projects
├── _sass/                  # Stylesheets
├── _talks/                 # Talk and presentation archives
├── assets/                 # Static assets (images, PDFs, etc.)
├── _config.yml             # Main configuration file
└── README.md              # This file
```

## 🎨 Customization

### Basic Configuration

Edit `_config.yml` to customize:

```yaml
title: "Your Name"
first_name: "Your"
last_name: "Name"
email: "your.email@domain.com"
description: "Your academic bio"
url: "https://yourusername.github.io"
baseurl: "/your-repo-name"
```

### Adding Content

#### Publications

Add your publications to `_bibliography/papers.bib`:

```bibtex
@article{your_paper_2024,
  title={Your Amazing Research},
  author={Your Name and Collaborator Name},
  journal={Top Venue},
  year={2024}
}
```

#### Talks

Create talk files in `_talks/`:

```yaml
---
layout: talk
title: "Your Talk Title"
type: "Conference"
venue: "Conference Name"
date: 2024-01-15
location: "City, Country"
---
Your talk description here.
```

#### Courses

Add courses to `_courses/`:

```yaml
---
layout: course
title: "Course Name"
description: "Course description"
term: "Fall 2024"
---
Course content here.
```

### Styling

- **Colors**: Edit `_sass/_variables.scss`
- **Themes**: Modify `_sass/_themes.scss`
- **Layout**: Customize `_sass/_layout.scss`

## 🔧 Development

### Code Quality

This project uses several tools to maintain code quality:

```bash
# Format code
npx prettier . --write

# Check formatting
npx prettier . --check

# Build for production
JEKYLL_ENV=production bundle exec jekyll build
```

### Docker Development

Use Docker for consistent development environment:

```bash
# Build and run
docker-compose up

# Slim development
docker-compose -f docker-compose-slim.yml up
```

## 📚 Collections

The site uses Jekyll collections to organize different types of content:

- **`news`**: Announcements and news items
- **`projects`**: Research projects and portfolio items
- **`courses`**: Teaching materials and course information
- **`talks`**: Conference talks and presentations
- **`books`**: Book reviews and reading recommendations

## 🌐 Deployment

### GitHub Pages

1. **Enable GitHub Pages** in your repository settings
2. **Set source** to "GitHub Actions"
3. **Push changes** to trigger automatic deployment

### Custom Domain

Add a `CNAME` file with your domain:

```
yourdomain.com
```

Update `_config.yml`:

```yaml
url: "https://yourdomain.com"
baseurl: ""
```

## 🤝 Contributing

We welcome contributions! Please:

1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes
4. **Test** thoroughly
5. **Submit** a pull request

### Code Style

- Follow [Prettier](https://prettier.io/) formatting
- Use semantic commit messages
- Include tests for new features

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[al-folio](https://github.com/alshedivat/al-folio)**: The amazing Jekyll theme this site is based on
- **[Jekyll](https://jekyllrb.com/)**: The static site generator powering this site
- **Contributors**: All the amazing people who have contributed to this project

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/GradInnovate/magi-scholar/issues)
- **Discussions**: [GitHub Discussions](https://github.com/GradInnovate/magi-scholar/discussions)
- **Email**: Contact the maintainers

---

<div align="center">

**Built with ❤️ by the academic community**

[🌟 Star this repo](https://github.com/GradInnovate/magi-scholar) if you find it useful!

</div>
