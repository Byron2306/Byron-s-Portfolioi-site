window.PORTFOLIO_CONFIG = {
  email: "",
  github: "",
  linkedin: ""
};

window.addEventListener("DOMContentLoaded", () => {
  const project = {
    id: "queen-victoria-royal-tactical",
    tier: "game",
    title: "Queen Victoria: Royal Tactical",
    subtitle: "Real-time chess strategy",
    kicker: "Deterministic royal tactical RTS",
    status: "Playable browser strategy game",
    categoryLabel: "Strategy game",
    summary: "A browser-based real-time chess strategy game that turns classical piece geometry into a live tactical battlefield of sovereign control, hero abilities, territory and reinforcement pressure.",
    problem: "Traditional chess is turn-bound, while many RTS games abandon the legibility and positional discipline that make chess strategy compelling.",
    contribution: "Queen Victoria: Royal Tactical fuses chess movement geometry with deterministic real-time combat, sovereign rules, territory, economy, reinforcements, hero abilities and an opposing Shadow King force.",
    tags: ["Real-time chess", "RTS", "Deterministic simulation", "Tactical AI"],
    images: [
      "https://byron2306.github.io/Queen-Victoria-RTS/assets/title/title-screen.png",
      "https://byron2306.github.io/Queen-Victoria-RTS/assets/battlefield/palace-board.png"
    ],
    siteUrl: "https://byron2306.github.io/Queen-Victoria-RTS/",
    githubUrl: "https://github.com/Byron2306/Queen-Victoria-RTS",
    palette: ["#7d1020", "#d9ad58"],
    symbol: "♛"
  };

  const gamesGrid = document.querySelector("#games-grid");
  if (!gamesGrid || typeof createProjectCard !== "function") return;
  if (gamesGrid.querySelector(`[data-project-id="${project.id}"]`)) return;

  const card = createProjectCard(project);
  card.classList.add("visible");
  gamesGrid.append(card);
}, { once: true });
