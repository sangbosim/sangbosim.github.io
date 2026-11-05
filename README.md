# Sang-Bo Sim · Research Portfolio

A bilingual (EN/KR) research portfolio for Sang-Bo Sim (심상보), featuring urban flood modeling, HC-SURF / KICT-UF, high-performance computing, journal publications, presentations, and patents.

**Technology:** HTML + CSS + vanilla JavaScript. No Node, no npm, no build step, no external fonts, no tracking scripts. Compatible with GitHub Pages.

## 1. Quick preview

Open `index.html` in a browser. All content and the language switch work locally, with no web server required. The DOI and external institutional links need internet access when clicked.

## 2. One-command Windows publishing (PowerShell + GitHub CLI)

Requirements: install [Git](https://git-scm.com/downloads) and [GitHub CLI](https://cli.github.com/). In PowerShell, sign in once:

```powershell
gh auth login
```

Open PowerShell inside the extracted project folder, review all text that will be public (especially the email), and run:

```powershell
.\publish-github.ps1 -RepoName sangbo-sim-website -ConfirmPublic
```

This creates a **new public** repository in the currently logged-in GitHub account, commits and pushes the files, and attempts to configure GitHub Pages. It intentionally stops if the repo name already exists, so it does not overwrite an existing project. If your PowerShell script execution policy blocks a downloaded local script, you can run the equivalent Git commands in section 4 instead of loosening your policy. You can also follow the GitHub web UI steps below without installing CLI tools.

## 3. Publish to GitHub Pages (웹 화면만 사용)

1. [GitHub 새 저장소 만들기](https://github.com/new)에서 `sangbo-sim-website`처럼 원하는 이름으로 **Public** 저장소를 생성합니다. **Add README**는 선택하지 않아도 됩니다.
2. 이 폴더의 파일/디렉터리 전체(`index.html`, `styles.css`, `script.js`, `assets/`, `publications.bib`, `.nojekyll` 등)를 저장소 최상위 경로에 업로드합니다. 압축파일 자체를 업로드하는 게 아니라 **압축을 푼 내용**을 업로드해야 합니다.
3. GitHub 저장소에서 **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: main → Folder: /(root) → Save**를 선택합니다.
4. 배포가 완료되면 `https://YOUR_GITHUB_ID.github.io/sangbo-sim-website/`에서 열립니다. `YOUR_GITHUB_ID`와 저장소 이름은 실제 값으로 바꿉니다.
5. 저장소를 자신의 GitHub 사용자명과 같은 `YOUR_GITHUB_ID.github.io`로 만들면 일반적으로 주소가 `https://YOUR_GITHUB_ID.github.io/`가 됩니다.

Refer to [GitHub's official Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## 4. Publish by Git commands (터미널 / Codex Desktop)

```bash
cd sangbo-sim-website
git init -b main
git add .
git commit -m "Initial research portfolio"
git remote add origin https://github.com/YOUR_GITHUB_ID/sangbo-sim-website.git
git push -u origin main
```

First, create the empty GitHub repository manually. You will need Git credential authentication to push. Then configure GitHub Pages as in section 3 above.

### Codex Desktop instructions

Open this unzipped folder as a workspace. You can request changes in natural language, for example:

> Update my research homepage: insert my education and previous career details, add my LinkedIn URL, and append newly published papers with DOI links. Keep both English and Korean translations synchronized. Keep the site compatible with GitHub Pages without a build step.

## 4. What to edit before publishing

- **Profile / employment:** The page uses the general title **Researcher at KICT** and does not invent employment dates or degrees. Add confirmed PhD, institutions, and appointment dates if you want a full CV.
- **Email:** `sangbo@kict.re.kr` appears in published academic records. Confirm you want this public.
- **LinkedIn:** No URL was provided, so no placeholder / broken LinkedIn button was added. Add the actual link once known.
- **GitHub affiliation:** The research-model link currently points to `https://github.com/WaterKICT/KICT-UF`, not a personal GitHub account. Verify its intended visibility and ownership.
- **Conference entries:** HIC 2026 and IAHR-APD 2026 have public evidence. The iEMSs 2026 description reflects prior research discussions; confirm the official program title before publishing if needed.
- **Performance claims:** A ~8-minute runtime applies to a specific 6-hour Sillim test in the 2025 Water comparison (485 seconds). A 35× GPU speedup is from the HIC 2026 abstract under its reported benchmark. These are **not** generic guarantees.
- **Further papers:** The bibliography contains 9 confirmed first-author works (2024–2026) and 1 confirmed collaborative journal paper. It is not an exhaustive career-long bibliography; append earlier papers after verifying author identity.
- **Privacy:** The site is entirely public on GitHub Pages. Do not add private project source code, personal addresses, or restricted research documents.

## 5. Content map

- `index.html`: Page structure, journal titles, journal links, research descriptions, patent, conference details.
- `styles.css`: Responsive styles, typography, colors, diagrams, animation.
- `script.js`: Korean translations, language toggle, publication filter, mobile navigation.
- `publications.bib`: Downloadable BibTeX citations.
- `assets/favicon.svg`: Custom favicon.
- `.nojekyll`: Prevents Jekyll from filtering static files.
- `publish-github.ps1`: Optional PowerShell publishing script for GitHub CLI.

## 6. Design / technical details

- Fully responsive desktop/mobile layout.
- Conceptual 1D–2D hydraulic illustration created as original SVG (not taken from a paper or institution).
- Respect for `prefers-reduced-motion`, visible keyboard focus, semantic sections, and accessible buttons.
- Publication years can be filtered without reloading.
- Language choice is stored only in your browser's local storage.
- No analytics, cookies, external images, or dependencies.

## 7. Selected supporting references

- [KICT research overview](https://www.kict.re.kr/researchResultWeb/getResearchResultView.es?id=383&mid=a10901050300)
- [HIC 2026 presentation abstract](https://www.iahr.org/library/infor?pid=40442)
- [Registered Korean patent](https://patents.google.com/patent/KR102868624B1/en)
- [2025 KICT-UF vs ICM / PC-SWMM](https://doi.org/10.3390/w17243575)
- [2026 GPU mixed-precision study](https://doi.org/10.3390/w18202555)
- All journal DOIs: see `publications.bib`.

Last assembled: 2026-11-05.