/*
  Add your real public contact details here.
  Leave a value blank to keep that contact button inactive.
*/
window.PORTFOLIO_CONFIG = {
  email: "",
  github: "",
  linkedin: ""
};

/*
  Portfolio extension layer.
  This file loads before app.js, so it can safely add late-discovered projects
  without rewriting the larger application bundle.
*/
window.PORTFOLIO_EXTRA_PROJECTS = [
  {
    id: "dogs-of-war",
    title: "Dogs of War",
    kicker: "A historically grounded World War II trading-card game built around faction philosophy",
    status: "Published digital serious game",
    categoryLabel: "Educational game",
    categories: ["game-systems", "education", "evidence"],
    featured: false,
    summary: "A digital adaptation of the historically themed serious trading-card game that translates World War II national roles, motivations and strategic behaviours into emergent faction mechanics.",
    problem: "History games often reduce complex national motivations to generic combat bonuses, making the lesson decorative rather than systemic.",
    contribution: "Dogs of War encodes six faction philosophies, a three-lane battlefield and a combat triangle into the rules themselves, turning interpretation of historical behaviour into strategic play.",
    role: "Co-originator, game-system designer, historical framework architect and digital adaptation lead.",
    signature: "Historical interpretation is not delivered after the match. It is embedded in faction goals, lane pressure, combat relationships and the route to defeating the opposing General.",
    tags: ["World War II", "Trading-card game", "Faction systems", "Historical interpretation", "Serious games", "Published framework"],
    images: [
      "https://raw.githubusercontent.com/Byron2306/Dogs-of-War/main/dow%203.png",
      "https://raw.githubusercontent.com/Byron2306/Dogs-of-War/main/fig%207.png",
      "https://raw.githubusercontent.com/Byron2306/Dogs-of-War/main/fig%208.png"
    ],
    siteUrl: "https://byron2306.github.io/Dogs-of-War/"
  },
  {
    id: "drenched",
    title: "Drenched",
    kicker: "A browser-based retro raycasting game prototype with textured first-person exploration",
    status: "Playable web prototype",
    categoryLabel: "Game systems",
    categories: ["game-systems"],
    featured: false,
    summary: "A compact first-person browser prototype built around a custom raycasting renderer, keyboard movement and textured environments.",
    problem: "Modern web games often depend on large engines even when the design question is fundamentally about rendering, movement and spatial feel.",
    contribution: "Drenched demonstrates a deliberately lean approach: a browser canvas, custom raycasting logic, direct controls and hand-mapped textures used to prove a first-person interaction loop without a heavyweight engine.",
    role: "Originator, renderer experimenter, gameplay programmer and prototype developer.",
    signature: "A small technical game laboratory where the core illusion of 3D space is built directly from code rather than delegated to a full engine.",
    tags: ["Raycasting", "Browser game", "First-person prototype", "Canvas rendering", "Retro systems", "Custom engine"],
    images: ["https://raw.githubusercontent.com/Byron2306/Drenched/main/title.png"],
    siteUrl: "https://byron2306.github.io/Drenched/"
  }
];

(() => {
  const nativeFilter = Array.prototype.filter;
  function isPortfolioProjectArray(value) {
    return Array.isArray(value)
      && value.some(item => item && item.id === "beast")
      && value.some(item => item && item.id === "arda");
  }
  function extendProjects(value) {
    const extras = window.PORTFOLIO_EXTRA_PROJECTS || [];
    const existing = new Set(value.map(item => item && item.id));
    const missing = extras.filter(item => !existing.has(item.id));
    return missing.length ? value.concat(missing) : value;
  }
  Array.prototype.filter = function patchedPortfolioFilter(...args) {
    if (isPortfolioProjectArray(this)) {
      return nativeFilter.apply(extendProjects(Array.from(this)), args);
    }
    return nativeFilter.apply(this, args);
  };
  window.addEventListener("DOMContentLoaded", () => {
    const updateCount = () => {
      document.querySelectorAll(".hero-proof strong").forEach(node => {
        if (/^\d+$/.test(node.textContent.trim()) && node.nextElementSibling?.textContent?.includes("flagship platforms")) {
          node.textContent = "17";
        }
      });
    };
    updateCount();
    setTimeout(updateCount, 300);
    setTimeout(updateCount, 1200);
  });
})();
