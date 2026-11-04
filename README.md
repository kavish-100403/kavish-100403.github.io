# Kavish Rajpopat · Portfolio

Personal portfolio site. Plain HTML, CSS, and a few lines of JavaScript. No build step, no dependencies.

```
index.html          all page content
styles.css          warm editorial theme (light and dark follow the system setting)
script.js           mobile menu and active nav link (site works without it)
assets/
  Kavish_Rajpopat_Resume.pdf   SWE resume variant offered for download
  favicon.svg
```

## Run locally

Any static file server works. With Python:

```bash
python -m http.server 8080
```

Then open http://localhost:8080. (Opening `index.html` directly also works.)

## Update content

- Text lives in `index.html`. Every fact comes from `Portfolio_Content.md` in the Job_Applications workspace; keep it in sync with the resume and do not add anything that is not on the resume.
- To swap the resume, copy the new PDF over `assets/Kavish_Rajpopat_Resume.pdf` (keep the file name so links still work).

## Deploy

### GitHub Pages (free)

1. Create a GitHub repo. Naming it `kavish-100403.github.io` gives the site the URL https://kavish-100403.github.io; any other name serves it at `https://kavish-100403.github.io/<repo>/`.
2. Push this folder:

   ```bash
   git remote add origin https://github.com/kavish-100403/<repo>.git
   git push -u origin main
   ```

3. In the repo, go to Settings → Pages, set Source to "Deploy from a branch", pick `main` and `/ (root)`, and save. The site is live in a minute or two.

### Vercel (free)

1. Push the repo to GitHub as above.
2. On vercel.com, choose Add New → Project, import the repo, set Framework Preset to "Other", leave the build command empty, and deploy.

All asset paths are relative, so the site works at a domain root or under a sub path.
