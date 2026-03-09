# Pratyush Kumar Das — Tabbed Personal Research Website (GitHub Pages Ready)

This is a **single-page tabbed website** (non-scrolling structure) designed for a personal academic/research profile.

## Files
- `index.html` — main website page
- `assets/styles.css` — styles/theme
- `assets/script.js` — tab switching logic
- `assets/profile-photo.jpg` — **add your photo here** (not included yet)

---

## 1) Add your profile photo (Home tab)
Place your photo at:

`assets/profile-photo.jpg`

### Recommended image settings
- Square image preferred (e.g., `800 x 800 px`)
- JPG format
- Clear headshot / professional photo

If the file is missing, the site automatically shows a placeholder.

---

## 2) Make this your GitHub website (GitHub Pages)

### Option A (recommended): Use your existing GitHub Pages repo
If your website URL will be:

`https://YOURUSERNAME.github.io`

Then your repo name should be exactly:

`YOURUSERNAME.github.io`

#### Steps
1. Create a repository named **`YOURUSERNAME.github.io`** on GitHub (if it doesn’t exist).
2. Unzip this website zip on your computer.
3. Open the extracted folder (`akshay_site`).
4. Upload **all files inside `akshay_site`** to the root of the repo:
   - `index.html`
   - `assets/` folder
   - `README.md`
5. Commit changes.
6. Go to **Settings → Pages**.
7. Under **Build and deployment**, choose:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main` (or `master`) and folder `/ (root)`
8. Save.
9. Wait ~1–3 minutes, then open your site URL.

---

### Option B: Project website (if repo name is not `YOURUSERNAME.github.io`)
If repo is something like `my-website`, your URL becomes:

`https://YOURUSERNAME.github.io/my-website/`

This site works as-is because it uses relative paths.

---

## 3) Make this your **homepage** on GitHub
To make the **Home** tab the page users see first (default homepage), nothing extra is needed.
The `index.html` loads the **Home** tab by default.

You can also share direct tab links, for example:
- `https://YOURUSERNAME.github.io/#projects`
- `https://YOURUSERNAME.github.io/#publications`
- `https://YOURUSERNAME.github.io/#contact`

---

## 4) Things you should update before publishing
Search in `index.html` and update:
- `your.email@uq.edu.au`
- `github.com/yourusername`
- Google Scholar link
- ORCID link
- Final publication citations/DOIs
- Any project names/labels you want to rename

---

## 5) Optional next upgrades (easy)
- Add CV PDF button (`assets/Pratyush_CV.pdf`)
- Add a Publications tab with BibTeX entries or links
- Add a Gallery tab for figures/posters
- Add separate pages later (About / Projects / Publications) while keeping the same visual design

---

## 6) If GitHub Pages is not updating
Try these fixes:
- Hard refresh browser (`Ctrl+Shift+R` / `Cmd+Shift+R`)
- Check that `index.html` is in the repo root (not inside another nested folder)
- Confirm `assets/` folder uploaded correctly
- Re-check **Settings → Pages** branch/folder settings

