# caferaydin.github.io

Cafer Aydın — personal brand site. Jekyll + GitHub Pages.

## Local preview

### Option A — Docker (recommended)

```bash
# One-shot build into _site/
docker run --rm -v "$(pwd):/srv/jekyll" jekyll/jekyll:4.2.2 jekyll build

# Then serve the static output
cd _site && python -m http.server 4000
# open http://127.0.0.1:4000/
```

### Option B — Local Ruby

```bash
bundle install
bundle exec jekyll serve
```

## Structure

- `_data/` — profile, experience, projects, skills, education
- `_includes/` — head, header, footer
- `_layouts/default.html` — base template
- `assets/css/site.css` — styles
- `assets/js/site.js` — mobile nav + scroll reveal
- `index.md`, `about.md`, `projects.md`, `expertise.md`, `contact.md` — TR
- `en/` — EN mirrors
