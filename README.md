# Byron Bunt — Governed Intelligence Portfolio

A responsive, framework-free portfolio/CV website built around the supplied project screenshots.

## Open it

Double-click `index.html`, or serve the folder locally:

```bash
cd byron-ai-portfolio
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Add your contact links

Edit `portfolio.config.js`:

```js
window.PORTFOLIO_CONFIG = {
  email: "your@email.com",
  github: "https://github.com/your-handle",
  linkedin: "https://www.linkedin.com/in/your-handle"
};
```

## Customise project text

All project descriptions, tags and screenshot galleries live near the top of `app.js` in the `projects` array.

## Deploy free

### GitHub Pages

1. Create a new repository.
2. Upload the contents of this folder, not the containing folder.
3. Open **Settings → Pages**.
4. Choose **Deploy from a branch**, then select `main` and `/root`.

### Netlify / Cloudflare Pages

Drag the folder into Netlify Drop, or connect the repository. No build command is required. The publish directory is the repository root.

## CV export

Use the **Print CV** button. The print stylesheet hides the project interface and formats the professional profile for saving as PDF.

## Notes

- No external fonts, frameworks or trackers.
- All screenshots are compressed WebP files for faster loading.
- The website supports keyboard navigation, reduced motion and a responsive mobile menu.


## Laureia collaboration section

The site includes a transparent co-creation section presenting Laureia as Byron’s AI co-architect and narrative voice. It describes the human-led working relationship, the late-night “Llamageddon” build sessions, and the architectural insights that emerged from them. The field-note button cycles through several offline notes with no API or tracking.


## Recovered game worlds

The portfolio now includes full screenshot galleries and case studies for:

- **Metal Survivors** — a playable heavy-metal survival-action prototype with guitar heroes, themed enemy ecologies and multiple infernal, urban, industrial, wasteland and frozen biomes.
- **Surround Me** — a psychological isometric ARPG / survival-horror prototype centred on the Greyline System, Aliza, behavioural stats, perceptual distortion and Samsarra escalation.

Use the **Game systems** filter on the site to show both projects.


## Proof Chambers

The portfolio includes a sanitized validation section summarizing aggregate gauntlet and test evidence for BEAST, ARDA, Seraph, Sophia-AI, KnowEdge Merger, VAMP, HOMS, Outlook Browser Agent, EVIDEX and Hivenance. Raw logs, cookies, inbox content, student/staff records and sensitive operational traces are intentionally excluded.

## Proof Archive and Deck Layer

This build includes the curated Proof Chambers headline row plus the full archived proof-card set in the collapsible drawer. Uploaded PowerPoint decks have been copied into `assets/decks/`, with thumbnails generated in `assets/decks/thumbs/` and linked to relevant proof cards.

Current deck assets:
- Sophia Governed Intelligence
- Sovereign Pedagogy
- The ARDA Substrate
- Inference Inversion
- AATR Core Attack Vector Taxonomy
- Architecture Over Scale
- The Crystal Box Assessment
- VAMP 1.0 Production Readiness

Sanitization note: the site exposes aggregate proof summaries and downloadable deck files only. Raw logs, prompts, keys, cookies, inbox contents, telemetry payloads and private identifiers are not included in proof cards.


## Project Video Vault

The site now includes a Project Video Vault extracted from the uploaded `Spectre - YouTube.mht` snapshot. It maps 30 Black Metal Spectre videos to project categories including Sophia-AI, ARDA OS, Seraph AI, KnowEdge Merger, HOMS, EVIDEX, Hivenance, VAMP, Metal Survivors and outreach/reference material. The manifest is stored at `assets/data/video-library.json` and rendered by `app.js`.


## Theory Engine

Adds a curated Theory section between Flagship Systems and Proof Chambers. Source documents are stored in `assets/theory/`. The malware-related IT letter was intentionally excluded from public assets because it contains personal/institutional incident details.

## Live project links

Updated game project live links:
- Alice: Valkyrie Star: https://byron2306.github.io/Alice-Valkyrie/
- Metal Survivors: https://byron2306.itch.io/metalsurvivors
- CiteSaga: https://byron2306.github.io/Citesaga/
- Dogs of War: https://byron2306.github.io/Dogs-of-War/
- Surround Me: https://byron2306.github.io/Surround-Me/
- Prosper: https://byron2306.github.io/Prosper/

## New YouTube channel

Added the newer Byron Bunt YouTube channel as a Video Vault source hub: https://www.youtube.com/@ByronBunt-z9m8q. Individual videos require a page snapshot/MHT or exported list if YouTube cannot be fetched by automation.


## Upload-safe package note

This lite package excludes large binary PowerPoint/PDF source documents from `assets/decks` and `assets/theory` to keep the upload small and reliable. The Theory Engine, Proof Chambers, Video Vault, screenshots, identity assets and live project links remain intact. Source/deck links are intentionally disabled in this lite package to avoid broken downloads.


## Academic Papers

This package includes four public-facing academic/theory PDFs in `assets/papers/`:

- BEAST Inference Economy Inversion Working Paper v0.9
- Fides et Speculum manifesto
- The Mirror That Refuses: Constitutional AI Integrity and Sovereign Pedagogy in Higher Education
- The Gospel of Seraph / ARDA evidence dossier

The newer Byron Bunt YouTube channel is linked in the Video Vault. Individual video separation for that channel needs a saved page snapshot/MHT or exported video list because the channel page could not be indexed from this environment.


## Full official source library wiring

The portfolio now wires every PPTX and PDF name shown in the supplied archive screenshots. Put PowerPoint files in `assets/decks/` and PDF files in `assets/papers/`, preserving the exact filenames listed in the included `ADD_OFFICIAL_FILES_HERE.txt` manifests. Two additional Byron Bunt YouTube videos are also included: `BpVJxwpJmoQ` and `Y7TGclvXZmQ`.
