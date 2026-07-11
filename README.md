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
