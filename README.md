# toddklinger.me

Personal portfolio site for Todd Klinger (https://toddklinger.me; the old toddthegod1.github.io address redirects there), built with [Jekyll](https://jekyllrb.com/) and deployed to GitHub Pages by the workflow in `.github/workflows/pages-deploy.yml`.

## Run locally

```bash
bundle install
bundle exec jekyll serve --livereload
```

Then open http://127.0.0.1:4000.

## Where things live

| What | Where |
| --- | --- |
| Home page (hero, about, experience, skills, contact) | `index.html` |
| Work experience | `_data/experience.yml` |
| Skills | `_data/skills.yml` |
| Projects (one file each) | `_projects/*.md` |
| Life story page | `my-life-story.md` |
| Layouts / header / footer | `_layouts/` |
| Styles and scripts | `assets/css/style.css`, `assets/js/main.js` |

### Adding a project

Create `_projects/my-project.md`:

```yaml
---
title: My Project
kind: Data analysis
year: 2026
order: 10            # position in the list
featured: true       # show on the home page
summary: One or two sentences shown on the card.
stack: [Python, pandas]
links:
  - { label: GitHub, url: "https://github.com/...", icon: github }   # icons: github, external, play
---

Longer write-up in Markdown.
```
