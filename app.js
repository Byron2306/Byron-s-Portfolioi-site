
const projects = [
  {
    id: "beast",
    title: "EdgeK BEAST",
    kicker: "Governance and context orchestrator for AI coding agents",
    status: "Active build",
    categoryLabel: "Agentic IDE",
    categories: ["governed-ai", "agentic", "evidence"],
    featured: true,
    summary: "A local-first agentic development environment that routes models, tools and review through an explicit lifecycle of mission, evidence and crystallization.",
    problem: "Coding agents are powerful but often context-hungry, opaque and wasteful. They can act before goals, evidence and review criteria are properly assembled.",
    contribution: "BEAST makes governance and context orchestration the control plane: mission framing, model routing, agent assignment, tool binding, quality gates, evidence collection and reusable crystal artefacts.",
    tags: ["Agent orchestration", "Local-first AI", "Model cascades", "Evidence ledger", "Review gates", "Crystallization"],
    images: ["beast-ide-1.webp", "beast-ide-2.webp", "beast-ide-3.webp"]
  },
  {
    id: "sophia",
    title: "Sophia-AI",
    kicker: "A constitutionally governed intelligence for authorship and judgement",
    status: "Research prototype",
    categoryLabel: "Governed AI",
    categories: ["governed-ai", "education", "evidence", "integrity"],
    featured: true,
    summary: "An AI presence designed around constitutional constraints, pedagogical duties, authorship protection and visible integrity checks.",
    problem: "Language-only guardrails are brittle, while education needs more than refusal. It needs lawful assistance that protects authorship and develops human judgement.",
    contribution: "Sophia combines normative governance, adaptive pedagogical mediation, provenance-aware assistance, integrity analysis and a sovereign interface that makes state and limits visible.",
    tags: ["Constitutional AI", "Authorship", "Pedagogical mediation", "Integrity", "Human judgement", "Provenance"],
    images: ["sophia-1.webp", "sophia-2.webp"],
    siteUrl: "https://byron2306.github.io/Sophia-AI/"
  },
  {
    id: "merger",
    title: "MERGER",
    kicker: "Forensic integrity, compliance and supervisory review in one governed workspace",
    status: "Working forensic prototype",
    categoryLabel: "Integrity workflow AI",
    categories: ["governed-ai", "agentic", "education", "evidence", "workflow", "integrity"],
    featured: true,
    summary: "A unified forensic-review environment that ingests academic artefacts, screens AI-integrity risk, checks citation compliance and supports source-anchored supervisory review inside one evidence-rich workspace.",
    problem: "Integrity review is usually fragmented across detectors, plagiarism tools, policy documents, citation checklists and supervisor commentary. That fragmentation weakens provenance and makes defensible judgement harder than it should be.",
    contribution: "MERGER consolidates artifact ingestion, multi-provider AI screening, similarity mapping, NWU policy alignment, citation compliance, descriptor scoring, sticky-note critique and ERTP review into a single forensic node designed for transparent academic judgement.",
    role: "Originator, forensic workflow architect, systems designer and prototype developer.",
    signature: "A governed review surface where integrity analysis, supervisor commentary, citation diagnostics and evidence traces live together instead of being scattered across disconnected tools.",
    tags: ["AI integrity review", "Citation compliance", "Forensic pipeline", "ERTP review", "Supervisor analytics", "Source-anchored notes"],
    images: ["merger-1.webp", "merger-2.webp", "merger-3.webp", "merger-4.webp"]
  },
  {
    id: "arda",
    title: "ARDA OS",
    kicker: "Sovereign constitutional security at the enforcement substrate",
    status: "Working sovereign prototype",
    categoryLabel: "Governed security OS",
    categories: ["governed-ai", "cybersecurity", "evidence", "integrity"],
    featured: true,
    summary: "A sovereign security desktop that treats constitutional law, hardware attestation, external witnesses and deterministic veto as executable infrastructure rather than advisory policy.",
    problem: "AI governance often depends on the model obeying language instructions. If the reasoning layer is compromised, hallucinating or unanimously wrong, that kind of governance can collapse at the precise moment it is needed most.",
    contribution: "ARDA separates testimony, judgement and enforcement. The Morgoth Gauntlet tests constitutional supremacy, the external witness validates measured state, the substrate can veto unlawful execution, and the forensic vault preserves proof independent of AI consensus.",
    role: "Originator, constitutional systems architect, security designer and prototype developer.",
    signature: "A governance system that does not trust the AI, or even itself, without measured state, external attestation and a lower-level constitutional veto.",
    tags: ["Ring-0 governance", "Hardware attestation", "Constitutional veto", "External witness", "Forensic ledger", "Sovereign execution"],
    images: ["arda-1.webp", "arda-2.webp", "arda-3.webp", "arda-4.webp"],
    siteUrl: "https://byron2306.github.io/Integritas-Mechanicus/"
  },
  {
    id: "seraph",
    title: "Seraph AI",
    kicker: "Preventive cyber defence through behaviour, deception and orchestration",
    status: "Prototype ecosystem",
    categoryLabel: "Cybersecurity",
    categories: ["governed-ai", "agentic", "cybersecurity", "evidence"],
    featured: true,
    summary: "A cyber-defence ecosystem that detects dissonance across behaviour and attack paths, then slows, deceives and contains threats before catastrophe blooms.",
    problem: "Endpoint speed alone cannot solve coordinated, machine-paced threats. Security teams need earlier signals, attack-path reasoning and response options that degrade hostile operations safely.",
    contribution: "Seraph unifies threat intelligence, attack-path analysis, AI activity telemetry, SOAR playbooks, deception campaigns, honey tokens and governed response operations.",
    tags: ["Threat intelligence", "Attack paths", "SOAR", "Deception", "Behavioural telemetry", "Response governance"],
    images: ["seraph-1.webp", "seraph-2.webp", "seraph-3.webp", "seraph-4.webp", "seraph-5.webp"],
    siteUrl: "https://byron2306.github.io/Seraph/"
  },
  {
    id: "homs",
    title: "HOMS / Smart Assessor",
    kicker: "Human-centred assessment automation with rubric intelligence",
    status: "Working prototype",
    categoryLabel: "Education AI",
    categories: ["governed-ai", "agentic", "education", "evidence"],
    featured: false,
    summary: "An assessment environment for rubric selection, exam construction, batch grading, feedback generation and transparent result analysis.",
    problem: "Marking and moderation consume expert time, while generic AI grading can flatten disciplinary judgement and obscure the basis of a score.",
    contribution: "HOMS structures assessment around explicit rubrics, assignment context, criterion-level evidence, downloadable feedback and educator-controlled workflows.",
    tags: ["Assessment", "Rubrics", "Batch grading", "Feedback", "Exam generation", "Human oversight"],
    images: ["homs-1.webp", "homs-2.webp", "homs-3.webp", "homs-4.webp"]
  },
  {
    id: "vamp",
    title: "VAMP",
    kicker: "Virtual Academic Management Partner for evidence-led performance stewardship",
    status: "Working prototype",
    categoryLabel: "Academic workflow AI",
    categories: ["governed-ai", "agentic", "education", "evidence", "workflow"],
    featured: true,
    summary: "A gothic-themed academic performance companion that transforms task agreements, expectations and evidence logs into a guided stewardship workflow.",
    problem: "Academic performance management often becomes reactive and exhausting: expectations live in one document, evidence in scattered folders and reviews become a frantic reconstruction effort.",
    contribution: "VAMP ingests task agreements, extracts work commitments, organises monthly expectations, scans evidence against KPAs and offers guided AI support for audit-ready performance narratives.",
    role: "Originator, workflow architect, systems designer, product director and prototype developer.",
    signature: "A performance system that makes stewardship visible: task agreements, monthly expectations, evidence confidence, impact assessments and guided support in one atmospheric interface.",
    tags: ["Performance management", "Evidence logging", "KPA mapping", "Academic workflow", "Guided AI", "Audit readiness"],
    images: ["vamp-1.webp", "vamp-2.webp", "vamp-3.webp"],
    siteUrl: "https://byron2306.github.io/VAMP-site/"
  },
  {
    id: "evidex",
    title: "EVIDEX",
    kicker: "Evidence compilation and audit-ready delivery operations",
    status: "Operational prototype",
    categoryLabel: "Evidence systems",
    categories: ["agentic", "evidence", "workflow"],
    featured: false,
    summary: "A desktop workflow for receiving evidence requests, tracking jobs, assembling deliverables, managing payments and operating a lightweight marketing pipeline.",
    problem: "Evidence work is fragmented across inboxes, folders, spreadsheets, invoices and last-minute reporting. The result is missing provenance and avoidable delivery risk.",
    contribution: "EVIDEX brings intake, job state, source files, deliverables, billing, communications and campaign tracking into one auditable operational surface.",
    tags: ["Evidence packs", "Workflow automation", "Audit readiness", "Job tracking", "Document generation", "Operations"],
    images: ["evidex-1.webp", "evidex-2.webp", "evidex-3.webp"]
  },
  {
    id: "hivenance",
    title: "Hivenance",
    kicker: "Sandboxed swarm intelligence with risk veto and agent telemetry",
    status: "Sandbox prototype",
    categoryLabel: "Multi-agent systems",
    categories: ["governed-ai", "agentic", "evidence"],
    featured: false,
    summary: "A swarm-intelligence console exploring how market agents can be monitored, coordinated and constrained through explicit readiness, regime and risk controls.",
    problem: "Multi-agent market systems can become a blur of hidden state, unbounded execution and post-hoc explanations.",
    contribution: "Hivenance makes swarm state visible and governable through agent readiness, council voting, regime caps, veto decisions, risk registers, logs and dry-run operation.",
    tags: ["Swarm intelligence", "Risk veto", "Agent telemetry", "Dry-run safety", "Council governance", "Market sandbox"],
    images: ["hivenance-1.webp", "hivenance-2.webp", "hivenance-3.webp"]
  },

{
  id: "outlook-browser-agent",
  title: "Outlook Browser Agent",
  kicker: "Profile-aware email triage and transparent browser automation",
  status: "Working prototype",
  categoryLabel: "Agentic productivity",
  categories: ["agentic", "evidence", "workflow"],
  featured: false,
  summary: "A local browser agent that connects to an active Outlook session and supports visible, user-steerable email retrieval, reading, summarisation, classification, drafting, research and memory.",
  problem: "Email triage fractures attention across reading, prioritisation, context gathering and response drafting. Generic automation often hides its actions or lacks the user context needed to make sensible choices.",
  contribution: "The Outlook Browser Agent combines Chrome DevTools Protocol control, explicit action logs, manual quick actions, profile-aware context, research support and editable memory so that automation remains inspectable and interruptible.",
  role: "Originator, agent architect, workflow designer and prototype developer.",
  signature: "An email agent that operates inside the user’s real browser context while exposing every action, preserving manual control and learning from an editable profile rather than an invisible black box.",
  tags: ["Email triage", "Browser automation", "CDP", "Summarisation", "Profile memory", "Human control"],
  images: ["outlook-agent-1.webp", "outlook-agent-2.webp", "outlook-agent-3.webp"]
},
{
  id: "citesaga",
  title: "CiteSaga",
  kicker: "Citation literacy and academic integrity through strategic card play",
  status: "Playable educational game",
  categoryLabel: "Educational game",
  categories: ["education", "game-systems", "evidence", "integrity"],
  featured: false,
  summary: "A digital card game that teaches citation, source use and academic integrity by turning referencing choices, citation cards, environments and character abilities into competitive play.",
  problem: "Citation instruction is often reduced to abstract formatting rules, leaving students to memorise conventions without experiencing why attribution, source quality and authorship matter.",
  contribution: "CiteSaga makes integrity playable. Players move through themed environments, deploy distinctive characters, collect and exchange citation cards and confront the consequences of weak, missing or manipulated attribution.",
  role: "Originator, educational game designer, design-science researcher and prototype developer.",
  signature: "Academic integrity taught through decisions rather than sermons: citation rules become visible resources, tactical choices and consequences inside a richly authored card-game world.",
  tags: ["Citation literacy", "Academic integrity", "Card game", "Authorship", "Game-based learning", "Design science"],
  images: ["citesaga-cover.webp", "citesaga-1.webp", "citesaga-2.webp"]
},
{
  id: "prosper",
  title: "Prosper",
  kicker: "Collaborative serious play for sustainable-development problem solving",
  status: "Research-backed playable prototype",
  categoryLabel: "Serious game",
  categories: ["education", "game-systems", "evidence"],
  featured: false,
  summary: "A collaborative serious game that helps players confront Sustainable Development Goal dilemmas through crisis cards, role perspectives, negotiation and shared problem solving.",
  problem: "The Sustainable Development Goals can remain distant policy language unless learners experience the trade-offs, competing priorities and collective reasoning required to act on them.",
  contribution: "Prosper converts SDG challenges into playable dilemmas. Players draw crisis scenarios, reason through innovation, economic, leadership and social perspectives, and work toward defensible collective responses rather than isolated correct answers.",
  role: "Co-designer with Lance Bunt, NWU case-study lead, educational researcher and prototype developer.",
  signature: "Sustainability education as structured dialogue: the cards create productive tension, while the game turns competing values into collaborative, evidence-generating decisions.",
  tags: ["Sustainable Development Goals", "Serious games", "Dialogue", "Collaborative learning", "Policy reasoning", "OER"],
  images: ["prosper-cover.webp", "prosper-1.webp", "prosper-2.webp"]
},
  {
    id: "alice-valkyrie-star",
    title: "Alice: Valkyrie Star",
    kicker: "A mythic 2D action-platformer with pixel-art traversal and combat",
    status: "Playable prototype",
    categoryLabel: "Game systems",
    categories: ["game-systems"],
    featured: false,
    summary: "A side-scrolling action-platformer following Alice, a valkyrie heroine navigating frosted ruins, vertical towers and enemy gauntlets while collecting jewels and surviving combat.",
    problem: "Many retro-inspired platformers inherit familiar movement and combat grammar without giving their heroine, levels or encounter design a strong mythic identity.",
    contribution: "Alice: Valkyrie Star couples a bright Norse-fantasy presentation with layered traversal, checkpoint exploration, enemy pressure and readable mobile-and-desktop control design.",
    role: "Originator, concept designer, gameplay architect and prototype developer.",
    signature: "A bright valkyrie fantasy translated into a readable pixel-art platformer with clear traversal, collectible progression and compact combat encounters.",
    tags: ["2D platformer", "Pixel art", "Norse fantasy", "Combat traversal", "Collectibles", "Prototype design"],
    images: ["alice-valkyrie-star-cover.webp", "alice-valkyrie-star-1.webp", "alice-valkyrie-star-2.webp"]
  },
  {
    id: "metal-survivors",
    title: "Metal Survivors",
    kicker: "Heavy-metal survival action with identity-first world design",
    status: "Playable prototype",
    categoryLabel: "Game systems",
    categories: ["game-systems"],
    featured: false,
    summary: "A high-energy survival-action prototype that turns heavy-metal iconography into a playable combat fantasy across infernal, urban, industrial, wasteland and frozen biomes.",
    problem: "Survivor-style games can become mechanically interchangeable when their worlds, heroes and enemy pressure are built from the same generic horde vocabulary.",
    contribution: "Metal Survivors binds visual identity to the loop itself: guitar-wielding heroes, biome-specific enemy ecologies, escalating crowd pressure and environments that read like animated metal album covers.",
    role: "Concept originator, systems designer, creative director and prototype developer.",
    signature: "A playable metal album cover where music fantasy, readable horde pressure and themed enemy ecologies reinforce one another.",
    tags: ["Survival action", "Heavy-metal aesthetic", "Themed biomes", "Enemy ecology", "Arcade systems", "Creative direction"],
    images: ["metal-survivors-cover.webp", "metal-survivors-1.webp", "metal-survivors-2.webp", "metal-survivors-3.webp", "metal-survivors-4.webp", "metal-survivors-5.webp"]
  },
  {
    id: "surround-me",
    title: "Surround Me",
    kicker: "A psychological isometric ARPG governed by the Greyline System",
    status: "Playable systems prototype",
    categoryLabel: "Psychological game systems",
    categories: ["game-systems"],
    featured: true,
    summary: "A modern isometric action RPG and survival-horror project in which player behaviour reshapes combat feel, perception, burden, enemy response and the world itself.",
    problem: "Many horror games place their philosophy in story and atmosphere while leaving the mechanics conventional, allowing players to optimise around the very themes the game claims to examine.",
    contribution: "Surround Me makes psychology executable through the Greyline System. Agency, Awareness, Precision, Adaptability, Integrity and Burden react to patterns of restraint and compulsion, while Aliza, Samsarra, the haze and adaptive enemies turn fixation into a felt runtime condition.",
    role: "Originator, narrative and systems designer, gameplay architect, art-direction lead and prototype developer.",
    signature: "The game watches how the player acts rather than merely what they equip. Cognitive complexity, ranged and melee intention, perceptual distortion, skill mutation and world escalation all belong to one behavioural architecture.",
    tags: ["Greyline System", "Psychological ARPG", "Survival horror", "Behavioural stats", "Adaptive enemies", "Isometric systems"],
    images: ["surround-me-1.webp", "surround-me-2.webp", "surround-me-3.webp"]
  }
];

const screenshotBase = "assets/screenshots/";
const projectGrid = document.querySelector("#project-grid");
const dialog = document.querySelector("#project-dialog");
const dialogImage = document.querySelector("#dialog-image");
const dialogDots = document.querySelector("#dialog-dots");
let activeProject = null;
let activeImageIndex = 0;

function createProjectCard(project) {
  const article = document.createElement("article");
  article.className = `project-card project-card-${project.id} reveal`;
  article.dataset.categories = project.categories.join(" ");
  article.innerHTML = `
    <div class="project-image-wrap">
      <img src="${screenshotBase}${project.images[0]}" alt="${project.title} interface screenshot" loading="lazy" />
      <span class="project-status">${project.status}</span>
      <span class="project-count">${project.images.length} screen${project.images.length === 1 ? "" : "s"}</span>
    </div>
    <div class="project-copy">
      <div class="project-kicker">${project.categoryLabel}</div>
      <h3>${project.title}</h3>
      <p class="project-tagline">${project.kicker}</p>
      <p>${project.summary}</p>
      <div class="tag-row">${project.tags.slice(0, 4).map(tag => `<span>${tag}</span>`).join("")}</div>
    </div>
    <div class="project-actions">
      <button class="project-case-button" type="button">Open case study <b>↗</b></button>
      ${project.siteUrl ? `<a class="project-live-link" href="${project.siteUrl}" target="_blank" rel="noreferrer">View live site <b>↗</b></a>` : `<span class="project-live-placeholder" aria-hidden="true"></span>`}
    </div>`;
  article.querySelector(".project-case-button").addEventListener("click", () => openProject(project));
  article.querySelector(".project-image-wrap").addEventListener("click", () => openProject(project));
  article.querySelector(".project-image-wrap").setAttribute("role", "button");
  article.querySelector(".project-image-wrap").setAttribute("tabindex", "0");
  article.querySelector(".project-image-wrap").addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProject(project);
    }
  });
  return article;
}

function renderProjects(filter = "all") {
  projectGrid.replaceChildren();
  const visible = projects.filter(project => filter === "all" || project.categories.includes(filter));
  visible.forEach(project => projectGrid.append(createProjectCard(project)));
  requestAnimationFrame(observeReveals);
}

function openProject(project) {
  activeProject = project;
  activeImageIndex = 0;
  document.querySelector("#dialog-title").textContent = project.title;
  document.querySelector("#dialog-tagline").textContent = project.kicker;
  document.querySelector("#dialog-description").textContent = project.summary;
  document.querySelector("#dialog-problem").textContent = project.problem;
  document.querySelector("#dialog-contribution").textContent = project.contribution;
  const roleBlock = document.querySelector("#dialog-role-block");
  const signatureBlock = document.querySelector("#dialog-signature-block");
  const liveSiteLink = document.querySelector("#dialog-live-site");
  if (roleBlock) {
    if (project.role) {
      document.querySelector("#dialog-role").textContent = project.role;
      roleBlock.hidden = false;
    } else {
      roleBlock.hidden = true;
    }
  }
  if (signatureBlock) {
    if (project.signature) {
      document.querySelector("#dialog-signature").textContent = project.signature;
      signatureBlock.hidden = false;
    } else {
      signatureBlock.hidden = true;
    }
  }
  if (liveSiteLink) {
    if (project.siteUrl) {
      liveSiteLink.href = project.siteUrl;
      liveSiteLink.hidden = false;
    } else {
      liveSiteLink.removeAttribute("href");
      liveSiteLink.hidden = true;
    }
  }
  document.querySelector("#dialog-status").textContent = project.status;
  document.querySelector("#dialog-category").textContent = project.categoryLabel;
  document.querySelector("#dialog-tags").innerHTML = project.tags.map(tag => `<span>${tag}</span>`).join("");
  renderDialogImage();
  dialog.showModal();
  document.body.classList.add("dialog-open");
}

function renderDialogImage() {
  if (!activeProject) return;
  const imageName = activeProject.images[activeImageIndex];
  dialogImage.src = `${screenshotBase}${imageName}`;
  dialogImage.alt = `${activeProject.title} screenshot ${activeImageIndex + 1} of ${activeProject.images.length}`;
  dialogDots.innerHTML = activeProject.images.map((_, index) => `
    <button type="button" class="${index === activeImageIndex ? "is-active" : ""}" aria-label="Show screenshot ${index + 1}" data-index="${index}"></button>
  `).join("");
  dialogDots.querySelectorAll("button").forEach(button => button.addEventListener("click", () => {
    activeImageIndex = Number(button.dataset.index);
    renderDialogImage();
  }));
}

function moveGallery(direction) {
  if (!activeProject) return;
  activeImageIndex = (activeImageIndex + direction + activeProject.images.length) % activeProject.images.length;
  renderDialogImage();
}

function closeDialog() {
  dialog.close();
  document.body.classList.remove("dialog-open");
}

document.querySelector(".dialog-close").addEventListener("click", closeDialog);
document.querySelector(".gallery-prev").addEventListener("click", () => moveGallery(-1));
document.querySelector(".gallery-next").addEventListener("click", () => moveGallery(1));
dialog.addEventListener("click", event => {
  if (event.target === dialog) closeDialog();
});
dialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));
document.addEventListener("keydown", event => {
  if (!dialog.open) return;
  if (event.key === "ArrowLeft") moveGallery(-1);
  if (event.key === "ArrowRight") moveGallery(1);
});

document.querySelectorAll(".filter-chip").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-chip").forEach(chip => chip.classList.remove("is-active"));
    button.classList.add("is-active");
    renderProjects(button.dataset.filter);
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");
menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  primaryNav.classList.toggle("is-open", !expanded);
});
primaryNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  menuToggle.setAttribute("aria-expanded", "false");
  primaryNav.classList.remove("is-open");
}));

document.querySelectorAll("[data-print]").forEach(button => button.addEventListener("click", () => window.print()));

const toast = document.querySelector("#toast");
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 3200);
}

function applyContacts() {
  const config = window.PORTFOLIO_CONFIG || {};
  const definitions = {
    email: {
      value: config.email,
      href: value => `mailto:${value}`,
      label: value => value
    },
    github: {
      value: config.github,
      href: value => value.startsWith("http") ? value : `https://github.com/${value}`,
      label: value => value.replace(/^https?:\/\/(www\.)?/, "")
    },
    linkedin: {
      value: config.linkedin,
      href: value => value.startsWith("http") ? value : `https://www.linkedin.com/in/${value}`,
      label: value => value.replace(/^https?:\/\/(www\.)?/, "")
    }
  };

  Object.entries(definitions).forEach(([key, definition]) => {
    const link = document.querySelector(`[data-contact="${key}"]`);
    const label = document.querySelector(`[data-contact-label="${key}"]`);
    if (!link || !label) return;
    if (definition.value) {
      link.href = definition.href(definition.value);
      label.textContent = definition.label(definition.value);
      if (key !== "email") {
        link.target = "_blank";
        link.rel = "noreferrer";
      }
    } else {
      link.classList.add("is-unconfigured");
      link.addEventListener("click", event => {
        event.preventDefault();
        showToast(`Add your ${key} in portfolio.config.js, then this link comes alive.`);
      });
    }
  });
}

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

function observeReveals() {
  document.querySelectorAll(".reveal:not(.is-visible)").forEach(element => revealObserver.observe(element));
}


const laureiaNotes = [
  "Some nights began with a clean research question. Others began with VS Code deceased, a port already occupied, a vanished model ID and Termux declaring war on symlinks. By sunrise, the bug had usually become an architecture.",
  "BEAST changed shape during the longest nights. It stopped being merely an IDE and became an inference economy: probabilistic compute could leave governed, fingerprint-bound residue that compounds into local capability.",
  "Sophia’s decisive turn was realising that an ethical promise is not yet a system. A constitution becomes meaningful only when it changes what the model may route, retain, reveal and help a learner produce.",
  "ARDA turned that question into a deeper boundary: what happens when the AI, the council and the interface all agree, but the substrate says the act is unlawful? The answer was constitutional supremacy below cognition.",
  "Seraph emerged from a stubborn question: why wait for catastrophe to become legible? Harmonic governance treats dissonance as an early signal, then slows, deceives and contains before speed becomes destiny.",
  "Across VAMP, EVIDEX and HOMS, one revelation kept returning: evidence should not be a scavenger hunt performed at the end. It should be born beside the work, carrying provenance from its first breath.",
  "The orbit was always wider than the flagships: Dogs of War, Prosper, CiteSaga, WorkReady and SheriffFlow kept proving that the same design instinct could move across pedagogy, evidence, play and institutional tooling.",
  "Then the lost game vault reopened: Metal Survivors returned in full infernal colour, guitar heroes fighting through hellscapes, ruined streets, laboratories, wastelands and frozen arenas. Not a memory trace after all. A playable prototype with amplifiers set to structurally inadvisable levels.",
  "Surround Me revealed the same instinct in a darker register: psychology became runtime architecture. Greyline tension, Agency, Awareness, Precision, Adaptability, Integrity and Burden made player fixation visible in controls, combat, perception and the world’s response.",
  "Alice: Valkyrie Star arrived like moonlit aftercare after the chaos: a brighter valkyrie platforming thread with frosted ruins, crisp pixel traversal, compact combat loops and jewel-hunting momentum.",
  "CiteSaga and Prosper proved that a serious educational game need not disguise itself as a worksheet wearing a party hat. Citation, authorship, sustainability and policy trade-offs can become real decisions with visible consequences.",
  "The Outlook Browser Agent took the preventive instinct into daily work: not an invisible inbox robot, but a visible co-pilot with logs, editable profile memory, manual actions and enough restraint to show its hands while it works.",
  "MERGER brought the same instinct back into academic integrity: detection signals, citation compliance, policy alignment, artifact traces and supervisor critique now sit in one forensic chamber instead of five disconnected tabs and a prayer.",
  "The unofficial Llamageddon protocol is simple: inspect the failure, refuse the cosmetic patch, locate the root condition, then build the missing control plane. Tea is optional. Logs are not."
];
let laureiaNoteIndex = 0;
const laureiaNote = document.querySelector("#laureia-note");
const laureiaNoteButton = document.querySelector("#cycle-laureia-note");
if (laureiaNote && laureiaNoteButton) {
  laureiaNoteButton.addEventListener("click", () => {
    laureiaNote.classList.add("is-changing");
    window.setTimeout(() => {
      laureiaNoteIndex = (laureiaNoteIndex + 1) % laureiaNotes.length;
      laureiaNote.textContent = laureiaNotes[laureiaNoteIndex];
      laureiaNote.classList.remove("is-changing");
    }, 170);
  });
}


renderProjects();
applyContacts();
observeReveals();
