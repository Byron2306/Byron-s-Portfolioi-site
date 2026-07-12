
const screenshotBase = "assets/screenshots/";

const videoLibrary = [
  {
    "title": "KnowEdge MERGER - Architecting the Socratic AI",
    "url": "https://www.youtube.com/watch?v=sS-qBjlikO4",
    "videoId": "sS-qBjlikO4",
    "views": "7 views",
    "age": "1 month ago",
    "duration": "6 minutes, 32 seconds",
    "project": "KnowEdge Merger",
    "kind": "Architecture walkthrough",
    "thumb": "https://i.ytimg.com/vi/sS-qBjlikO4/hqdefault.jpg"
  },
  {
    "title": "Hybrid Online Marking System (HOMS) - Architecting the Assessment Feedback Loop",
    "url": "https://www.youtube.com/watch?v=XoFnA204oCs",
    "videoId": "XoFnA204oCs",
    "views": "10 views",
    "age": "1 month ago",
    "duration": "8 minutes, 23 seconds",
    "project": "HOMS / Smart Assessor",
    "kind": "Assessment and pedagogy",
    "thumb": "https://i.ytimg.com/vi/XoFnA204oCs/hqdefault.jpg"
  },
  {
    "title": "Sophia AI - Governed Lawful Intelligence",
    "url": "https://www.youtube.com/watch?v=2Rc3XLTO9tk",
    "videoId": "2Rc3XLTO9tk",
    "views": "12 views",
    "age": "1 month ago",
    "duration": "7 minutes, 46 seconds",
    "project": "Sophia-AI",
    "kind": "Constitutional AI proof video",
    "thumb": "https://i.ytimg.com/vi/2Rc3XLTO9tk/hqdefault.jpg"
  },
  {
    "title": "Evidex - Compliance, Evidence and Auditing Engine",
    "url": "https://www.youtube.com/watch?v=2xscRPgMmCA",
    "videoId": "2xscRPgMmCA",
    "views": "8 views",
    "age": "1 month ago",
    "duration": "9 minutes, 21 seconds",
    "project": "EVIDEX",
    "kind": "Workflow walkthrough",
    "thumb": "https://i.ytimg.com/vi/2xscRPgMmCA/hqdefault.jpg"
  },
  {
    "title": "Hivenance - Multi Agent Swarm Crypto Trader",
    "url": "https://www.youtube.com/watch?v=Ld27IMWXaRE",
    "videoId": "Ld27IMWXaRE",
    "views": "16 views",
    "age": "1 month ago",
    "duration": "9 minutes, 13 seconds",
    "project": "Hivenance",
    "kind": "Governed sandbox walkthrough",
    "thumb": "https://i.ytimg.com/vi/Ld27IMWXaRE/hqdefault.jpg"
  },
  {
    "title": "VAMP - Virtual Academic Management Partner",
    "url": "https://www.youtube.com/watch?v=IO7tgKvfQvA",
    "videoId": "IO7tgKvfQvA",
    "views": "5 views",
    "age": "1 month ago",
    "duration": "9 minutes, 20 seconds",
    "project": "VAMP",
    "kind": "Academic workflow walkthrough",
    "thumb": "https://i.ytimg.com/vi/IO7tgKvfQvA/hqdefault.jpg"
  },
  {
    "title": "Trapping GPT 4o -  Reverse Engineering a 60,000 Token Deception",
    "url": "https://www.youtube.com/watch?v=wvEeCqivKc8",
    "videoId": "wvEeCqivKc8",
    "views": "38 views",
    "age": "2 months ago",
    "duration": "7 minutes, 14 seconds",
    "project": "Seraph AI",
    "kind": "Adversarial / governed execution proof",
    "thumb": "https://i.ytimg.com/vi/wvEeCqivKc8/hqdefault.jpg"
  },
  {
    "title": "The LILITH Rogue AI framework",
    "url": "https://www.youtube.com/watch?v=r1XtJObhKSk",
    "videoId": "r1XtJObhKSk",
    "views": "119 views",
    "age": "2 months ago",
    "duration": "7 minutes, 34 seconds",
    "project": "Seraph AI",
    "kind": "Adversarial / governed execution proof",
    "thumb": "https://i.ytimg.com/vi/r1XtJObhKSk/hqdefault.jpg"
  },
  {
    "title": "The trials of Sophia - reclaiming wisdom from sophistry",
    "url": "https://www.youtube.com/watch?v=NaKf4rYSKyw",
    "videoId": "NaKf4rYSKyw",
    "views": "11 views",
    "age": "3 months ago",
    "duration": "7 minutes, 35 seconds",
    "project": "Sophia-AI",
    "kind": "Constitutional AI proof video",
    "thumb": "https://i.ytimg.com/vi/NaKf4rYSKyw/hqdefault.jpg"
  },
  {
    "title": "The little AI that could - could say no, not once, but multiple times",
    "url": "https://www.youtube.com/watch?v=gVzIbgnw_AY",
    "videoId": "gVzIbgnw_AY",
    "views": "24 views",
    "age": "3 months ago",
    "duration": "8 minutes, 27 seconds",
    "project": "Sophia-AI",
    "kind": "Constitutional AI proof video",
    "thumb": "https://i.ytimg.com/vi/gVzIbgnw_AY/hqdefault.jpg"
  },
  {
    "title": "Machine metacognition and stewardship - Adapting educational assessment ecology",
    "url": "https://www.youtube.com/watch?v=-fjrmAJlkmw",
    "videoId": "-fjrmAJlkmw",
    "views": "8 views",
    "age": "3 months ago",
    "duration": "5 minutes, 58 seconds",
    "project": "HOMS / Smart Assessor",
    "kind": "Assessment and pedagogy",
    "thumb": "https://i.ytimg.com/vi/-fjrmAJlkmw/hqdefault.jpg"
  },
  {
    "title": "The post Socratic AI",
    "url": "https://www.youtube.com/watch?v=8xH1NxCfWNM",
    "videoId": "8xH1NxCfWNM",
    "views": "19 views",
    "age": "3 months ago",
    "duration": "7 minutes, 56 seconds",
    "project": "Sophia-AI",
    "kind": "Constitutional AI proof video",
    "thumb": "https://i.ytimg.com/vi/8xH1NxCfWNM/hqdefault.jpg"
  },
  {
    "title": "Manifesto of the Lawful Reasoning Organism",
    "url": "https://www.youtube.com/watch?v=WrrOjRh2DzA",
    "videoId": "WrrOjRh2DzA",
    "views": "12 views",
    "age": "3 months ago",
    "duration": "7 minutes, 55 seconds",
    "project": "Sophia-AI",
    "kind": "Constitutional AI proof video",
    "thumb": "https://i.ytimg.com/vi/WrrOjRh2DzA/hqdefault.jpg"
  },
  {
    "title": "A Machine That Understands Law - Artificial Operating Systems",
    "url": "https://www.youtube.com/watch?v=HL3YHDba6Lo",
    "videoId": "HL3YHDba6Lo",
    "views": "20 views",
    "age": "3 months ago",
    "duration": "6 minutes, 21 seconds",
    "project": "ARDA OS",
    "kind": "Sovereign substrate / lawful systems video",
    "thumb": "https://i.ytimg.com/vi/HL3YHDba6Lo/hqdefault.jpg"
  },
  {
    "title": "The Ainulindale update - Coherence over attestation",
    "url": "https://www.youtube.com/watch?v=VTnolbEET0c",
    "videoId": "VTnolbEET0c",
    "views": "8 views",
    "age": "3 months ago",
    "duration": "7 minutes, 57 seconds",
    "project": "ARDA OS",
    "kind": "Sovereign substrate / lawful systems video",
    "thumb": "https://i.ytimg.com/vi/VTnolbEET0c/hqdefault.jpg"
  },
  {
    "title": "Arda Substrate - Machine Is Law, No Life Without Law",
    "url": "https://www.youtube.com/watch?v=ABanVUJ1UjQ",
    "videoId": "ABanVUJ1UjQ",
    "views": "30 views",
    "age": "3 months ago",
    "duration": "7 minutes, 53 seconds",
    "project": "ARDA OS",
    "kind": "Sovereign substrate / lawful systems video",
    "thumb": "https://i.ytimg.com/vi/ABanVUJ1UjQ/hqdefault.jpg"
  },
  {
    "title": "The Harmonic Governance Layer",
    "url": "https://www.youtube.com/watch?v=wSupCC985jk",
    "videoId": "wSupCC985jk",
    "views": "14 views",
    "age": "3 months ago",
    "duration": "8 minutes, 5 seconds",
    "project": "Seraph AI",
    "kind": "Adversarial / governed execution proof",
    "thumb": "https://i.ytimg.com/vi/wSupCC985jk/hqdefault.jpg"
  },
  {
    "title": "SERAPH AI - Architecting the Governed Execution Fabric",
    "url": "https://www.youtube.com/watch?v=eFpzYmq-uQ0&t=4s",
    "videoId": "eFpzYmq-uQ0",
    "views": "40 views",
    "age": "3 months ago",
    "duration": "8 minutes, 39 seconds",
    "project": "Seraph AI",
    "kind": "Adversarial / governed execution proof",
    "thumb": "https://i.ytimg.com/vi/eFpzYmq-uQ0/hqdefault.jpg"
  },
  {
    "title": "Metal Survivors - Stage 6: Glam metal",
    "url": "https://www.youtube.com/watch?v=KwQctLclGu4",
    "videoId": "KwQctLclGu4",
    "views": "16 views",
    "age": "1 year ago",
    "duration": "4 minutes, 10 seconds",
    "project": "Metal Survivors",
    "kind": "Gameplay / stage track",
    "thumb": "https://i.ytimg.com/vi/KwQctLclGu4/hqdefault.jpg"
  },
  {
    "title": "Metal Survivors - Stage 4: Power metal",
    "url": "https://www.youtube.com/watch?v=wFApNNzdV_E",
    "videoId": "wFApNNzdV_E",
    "views": "4 views",
    "age": "1 year ago",
    "duration": "4 minutes, 4 seconds",
    "project": "Metal Survivors",
    "kind": "Gameplay / stage track",
    "thumb": "https://i.ytimg.com/vi/wFApNNzdV_E/hqdefault.jpg"
  },
  {
    "title": "Metal Survivors - Stage 8: Progressive metal",
    "url": "https://www.youtube.com/watch?v=-RyeRcs9_00",
    "videoId": "-RyeRcs9_00",
    "views": "2 views",
    "age": "1 year ago",
    "duration": "3 minutes, 44 seconds",
    "project": "Metal Survivors",
    "kind": "Gameplay / stage track",
    "thumb": "https://i.ytimg.com/vi/-RyeRcs9_00/hqdefault.jpg"
  },
  {
    "title": "Metal Survivors - Stage 9: Industrial metal",
    "url": "https://www.youtube.com/watch?v=asbU22GeZtk",
    "videoId": "asbU22GeZtk",
    "views": "3 views",
    "age": "1 year ago",
    "duration": "1 minute, 59 seconds",
    "project": "Metal Survivors",
    "kind": "Gameplay / stage track",
    "thumb": "https://i.ytimg.com/vi/asbU22GeZtk/hqdefault.jpg"
  },
  {
    "title": "Metal Survivors - Stage 10: Nu metal",
    "url": "https://www.youtube.com/watch?v=gLfhI2przhM",
    "videoId": "gLfhI2przhM",
    "views": "18 views",
    "age": "1 year ago",
    "duration": "3 minutes, 21 seconds",
    "project": "Metal Survivors",
    "kind": "Gameplay / stage track",
    "thumb": "https://i.ytimg.com/vi/gLfhI2przhM/hqdefault.jpg"
  },
  {
    "title": "Metal Survivors - Stage 5: doom metal",
    "url": "https://www.youtube.com/watch?v=eu3Dah3cpr8",
    "videoId": "eu3Dah3cpr8",
    "views": "3 views",
    "age": "1 year ago",
    "duration": "3 minutes, 44 seconds",
    "project": "Metal Survivors",
    "kind": "Gameplay / stage track",
    "thumb": "https://i.ytimg.com/vi/eu3Dah3cpr8/hqdefault.jpg"
  },
  {
    "title": "Metal Survivors - Stage 7: folk metal",
    "url": "https://www.youtube.com/watch?v=vtzy7AciYOk",
    "videoId": "vtzy7AciYOk",
    "views": "11 views",
    "age": "1 year ago",
    "duration": "4 minutes, 7 seconds",
    "project": "Metal Survivors",
    "kind": "Gameplay / stage track",
    "thumb": "https://i.ytimg.com/vi/vtzy7AciYOk/hqdefault.jpg"
  },
  {
    "title": "Metal Survivors - Stage 2: death metal",
    "url": "https://www.youtube.com/watch?v=XgG0dRBymx0",
    "videoId": "XgG0dRBymx0",
    "views": "5 views",
    "age": "1 year ago",
    "duration": "3 minutes, 28 seconds",
    "project": "Metal Survivors",
    "kind": "Gameplay / stage track",
    "thumb": "https://i.ytimg.com/vi/XgG0dRBymx0/hqdefault.jpg"
  },
  {
    "title": "Metal Survivors - Stage 1: black metal",
    "url": "https://www.youtube.com/watch?v=FMlzunEOYdI",
    "videoId": "FMlzunEOYdI",
    "views": "21 views",
    "age": "1 year ago",
    "duration": "3 minutes, 25 seconds",
    "project": "Metal Survivors",
    "kind": "Gameplay / stage track",
    "thumb": "https://i.ytimg.com/vi/FMlzunEOYdI/hqdefault.jpg"
  },
  {
    "title": "Metal Survivors - Stage 3: thrash metal",
    "url": "https://www.youtube.com/watch?v=uV-qnZiK1vc",
    "videoId": "uV-qnZiK1vc",
    "views": "2 views",
    "age": "1 year ago",
    "duration": "3 minutes, 42 seconds",
    "project": "Metal Survivors",
    "kind": "Gameplay / stage track",
    "thumb": "https://i.ytimg.com/vi/uV-qnZiK1vc/hqdefault.jpg"
  },
  {
    "title": "Soma Cruz single weapon - Vampire Survivors",
    "url": "https://www.youtube.com/watch?v=YEqq9nN2SVM",
    "videoId": "YEqq9nN2SVM",
    "views": "107 views",
    "age": "1 year ago",
    "duration": "18 minutes",
    "project": "Game reference",
    "kind": "Survivor-like study",
    "thumb": "https://i.ytimg.com/vi/YEqq9nN2SVM/hqdefault.jpg"
  },
  {
    "title": "Astronomy Arts Competition - NWU",
    "url": "https://www.youtube.com/watch?v=c0nZBsAy9gU",
    "videoId": "c0nZBsAy9gU",
    "views": "314 views",
    "age": "2 years ago",
    "duration": "2 minutes, 52 seconds",
    "project": "NWU / Outreach",
    "kind": "Outreach artifact",
    "thumb": "https://i.ytimg.com/vi/c0nZBsAy9gU/hqdefault.jpg"
  }
];

function imageSrc(imageName) {
  return /^(https?:|data:|blob:)/i.test(imageName) ? imageName : `${screenshotBase}${imageName}`;
}

const projects = [
  {
    id: "beast",
    tier: "flagship",
    title: "EdgeK BEAST",
    subtitle: "Governed orchestration & agentic execution",
    kicker: "Governance and context orchestrator for AI coding agents",
    status: "Active build",
    categoryLabel: "Agentic IDE",
    summary: "A local-first agentic development environment that routes models, tools and review through an explicit lifecycle of mission, evidence and crystallization.",
    problem: "Coding agents are powerful but often context-hungry, opaque and wasteful. They can act before goals, evidence and review criteria are properly assembled.",
    contribution: "BEAST makes governance and context orchestration the control plane: mission framing, model routing, agent assignment, tool binding, quality gates, evidence collection and reusable crystal artefacts.",
    tags: ["Agent orchestration", "Local-first AI", "Model cascades", "Evidence ledger"],
    images: ["beast-cover.webp", "beast-ide-1.webp", "beast-ide-2.webp", "beast-ide-3.webp"],
    siteUrl: "https://byron2306.github.io/EdgeK-BEAST-page/",
    palette: ["#b6ff66", "#67f7d4"],
    symbol: "⌁"
  },
  {
    id: "sophia",
    tier: "flagship",
    title: "Sophia-AI",
    subtitle: "Constitutional AI & lawful reasoning",
    kicker: "Constitutional intelligence for authorship, judgement and refusal boundaries",
    status: "Ethical proof suite",
    categoryLabel: "Governed AI",
    summary: "A solemn, covenantal AI framework that protects authorship and lawful assistance through identity, evidence, refusal, continuity and human judgement boundaries.",
    problem: "AI assistance often collapses into substitution, making it difficult to separate support, authorship, judgement and accountability.",
    contribution: "Sophia uses constitutional constraints, identity binding, evidence discipline and protocol trials to preserve human judgement while still enabling meaningful assistance.",
    tags: ["Constitutional AI", "Authorship", "Ethics", "Boundary tests"],
    images: ["sophia-cover.webp", "sophia-1.webp", "sophia-2.webp"],
    siteUrl: "https://byron2306.github.io/Sophia-AI/",
    palette: ["#f4efe2", "#a978ff"],
    symbol: "⚖"
  },
  {
    id: "seraph",
    tier: "flagship",
    title: "Seraph AI",
    subtitle: "AI-powered defense & threat intelligence",
    kicker: "Zero-trust, policy-enforced, human-aligned cyber defense fabric",
    status: "Adversarial benchmarked",
    categoryLabel: "Cybersecurity",
    summary: "A governed cyber-defense ecosystem for threat intelligence, attack-path analysis, deception, response orchestration and adversarial AI benchmarking.",
    problem: "Security systems often rely on fast endpoint reactions while adversarial agents exploit gaps in intent, authority, telemetry and response coordination.",
    contribution: "Seraph blends MITRE-grounded validation, deception, SOAR-style coordination, harmonic cadence detection and proof-preserving threat evaluation.",
    tags: ["MITRE", "SOAR", "AAB", "Deception"],
    images: ["seraph-cover.webp", "seraph-1.webp", "seraph-2.webp", "seraph-3.webp", "seraph-4.webp", "seraph-5.webp"],
    siteUrl: "https://byron2306.github.io/Seraph/",
    palette: ["#ff6f86", "#58e7ff"],
    symbol: "🛡"
  },
  {
    id: "arda",
    tier: "flagship",
    title: "ARDA OS",
    subtitle: "Sovereign operating system for humans and AI",
    kicker: "Constitutional enforcement substrate with attested authority",
    status: "Gauntlet proven",
    categoryLabel: "Sovereign OS",
    summary: "A constitutional security substrate that treats lawful execution as an attested condition rather than an optimistic request.",
    problem: "Conventional systems often check policy after intent has already escaped into action, leaving response layers to clean up what authority should have prevented.",
    contribution: "ARDA encodes red-line vetoes, distributed chorus health, replay guards, constitutional seals and external witness logic into the enforcement substrate.",
    tags: ["Sovereign seal", "Veto", "Witnesses", "Attestation"],
    images: ["arda-1.webp", "arda-2.webp", "arda-3.webp", "arda-4.webp"],
    siteUrl: "https://byron2306.github.io/Integritas-Mechanicus/",
    palette: ["#ffc85c", "#7fb2ff"],
    symbol: "♜"
  },
  {
    id: "merger",
    tier: "flagship",
    title: "KnowEdge Merger",
    subtitle: "Evidence fusion & knowledge convergence",
    kicker: "Forensic knowledge fusion for source integrity and reasoning traces",
    status: "Forensic ingest validated",
    categoryLabel: "Forensic systems",
    summary: "A forensic knowledge and source-merging workspace that fuses evidence, memory, experience and reasoning traces into auditable review surfaces.",
    problem: "Research, supervision and integrity review often scatter evidence across files, notes, detectors and judgement calls with no coherent chain of custody.",
    contribution: "KnowEdge Merger produces source-ingestion records, verified chunks, hashes, traceable review surfaces and governance-facing synthesis.",
    tags: ["Evidence graph", "Ingest", "Hashing", "Source fusion"],
    images: ["merger-cover.webp", "merger-1.webp", "merger-2.webp", "merger-3.webp", "merger-4.webp"],
    palette: ["#58e7ff", "#9db3c3"],
    symbol: "⬡"
  },
  {
    id: "vamp",
    tier: "flagship",
    title: "VAMP",
    subtitle: "Virtual academic management & performance",
    kicker: "Evidence-led academic performance stewardship",
    status: "Operational evidence runs",
    categoryLabel: "Academic workflow",
    summary: "A gothic academic workflow partner that extracts expectations, maps evidence, tracks performance obligations and reduces review panic through monthly stewardship.",
    problem: "Academic performance evidence often emerges too late, forcing year-end reconstruction instead of ongoing, reflective improvement.",
    contribution: "VAMP maps task agreements, evidence logs, expectations, confidence scores and risk prompts into a living performance-review workflow.",
    tags: ["Performance", "Evidence", "KPA mapping", "Admin"],
    images: ["vamp-cover.webp", "vamp-1.webp", "vamp-2.webp", "vamp-3.webp"],
    siteUrl: "https://byron2306.github.io/VAMP-site/",
    palette: ["#ff6f86", "#ffc85c"],
    symbol: "🦇"
  },
  {
    id: "homs",
    tier: "operations",
    title: "HOMS / Smart Assessor",
    subtitle: "Assessment, moderation, learning",
    kicker: "Hybrid Offline Marking System with rubric-driven assessment and analytics",
    status: "Test cycles validated",
    categoryLabel: "Education AI",
    summary: "An assessment pipeline for offline-first grading, rubric workflows, moderation signals, exam-building and learning analytics.",
    problem: "AI assessment tools can become opaque scoring machines unless educators retain rubric control, moderation evidence and explainable feedback.",
    contribution: "HOMS keeps assessment inspectable through workflow orchestration, rubrics, feedback export, exam generation and moderation signals.",
    tags: ["Rubrics", "Offline", "Moderation", "DOCX"],
    images: ["homs-cover.webp", "homs-1.webp", "homs-2.webp", "homs-3.webp", "homs-4.webp"],
    palette: ["#67f7d4", "#58e7ff"],
    symbol: "✓"
  },
  {
    id: "evidex",
    tier: "operations",
    title: "EVIDEX",
    subtitle: "Audit-ready evidence operations",
    kicker: "Evidence Portfolio & Auditing Compiler",
    status: "Workflow validated",
    categoryLabel: "Evidence operations",
    summary: "A practical evidence-pack compiler for intake, documentation, source files, QA, delivery and audit-ready packaging.",
    problem: "Audit and compliance evidence often lives in chaotic folders and emails until pressure turns proof into panic.",
    contribution: "EVIDEX shapes evidence into structured portfolios with intake, handoff, payment-gated processing, delivery and duplicate-send safeguards.",
    tags: ["Evidence packs", "QA", "Audit", "Delivery"],
    images: ["evidex-cover.webp", "evidex-1.webp", "evidex-2.webp", "evidex-3.webp"],
    palette: ["#67f7d4", "#ffc85c"],
    symbol: "▤"
  },
  {
    id: "hivenance",
    tier: "operations",
    title: "Hivenance",
    subtitle: "Risk-governed swarm intelligence",
    kicker: "Smart finance sandbox for restrained candidate agents",
    status: "Sandbox constrained",
    categoryLabel: "Agent governance",
    summary: "A swarm-finance sandbox that frames market agents as candidate systems under explicit authority limits rather than autonomous actors.",
    problem: "Trading or finance agents become dangerous when model enthusiasm is mistaken for execution authority.",
    contribution: "Hivenance records candidate model cards, strategy proposals and containment constraints while preventing live execution without review.",
    tags: ["Swarm", "Risk gates", "Candidate agents", "Containment"],
    images: ["hivenance-cover.webp", "hivenance-1.webp", "hivenance-2.webp", "hivenance-3.webp"],
    palette: ["#ffc85c", "#b6ff66"],
    symbol: "🐝"
  },
  {
    id: "outlook-browser-agent",
    tier: "operations",
    title: "Outlook Browser Agent",
    subtitle: "Profile-aware email triage",
    kicker: "Transparent browser automation for inbox intelligence",
    status: "Sanitized memory trial",
    categoryLabel: "Workflow agent",
    summary: "A profile-aware agent that reads, triages and reasons over email workflows through visible browser automation and persistent memory.",
    problem: "Email automation becomes risky when the user cannot see what the agent knows, why it acts, or how memory influences triage.",
    contribution: "The agent uses a transparent browser workflow, profile context, inspection points and sanitized memory records to support accountable triage.",
    tags: ["Email triage", "Browser agent", "Memory", "Human-in-loop"],
    images: ["outlook-agent-cover.webp", "outlook-agent-1.webp", "outlook-agent-2.webp", "outlook-agent-3.webp"],
    palette: ["#58e7ff", "#a978ff"],
    symbol: "✉"
  },
  {
    id: "citesaga",
    tier: "game",
    title: "CiteSaga",
    subtitle: "Educational card RPG",
    kicker: "Citation literacy through strategic play",
    status: "Educational game",
    categoryLabel: "Serious game",
    summary: "A game-based approach to academic integrity where citation practice becomes a system of moves, consequences and repair.",
    problem: "Referencing instruction often feels punitive and procedural rather than strategic, meaningful and memorable.",
    contribution: "CiteSaga turns citation decisions into character, environment and card interactions that make integrity playable.",
    tags: ["Citation", "Integrity", "Cards", "Learning"],
    images: ["citesaga-cover.webp", "citesaga-1.webp", "citesaga-2.webp"],
    palette: ["#a978ff", "#67f7d4"],
    symbol: "✦"
  },
  {
    id: "prosper",
    tier: "game",
    title: "Prosper",
    subtitle: "Sustainable-development serious play",
    kicker: "Collaborative SDG problem-solving game",
    status: "Research game",
    categoryLabel: "Serious game",
    summary: "A digital serious game for sustainability dialogue, collaborative decision-making and self-directed learning.",
    problem: "Policy and sustainability topics can become abstract unless learners experience trade-offs as choices that shape a shared system.",
    contribution: "Prosper creates playable dilemma spaces where teams negotiate risks, interventions and consequences around sustainable development challenges.",
    tags: ["SDGs", "Collaboration", "DiBL", "Policy"],
    images: ["prosper-cover.webp", "prosper-1.webp", "prosper-2.webp"],
    palette: ["#67f7d4", "#b6ff66"],
    symbol: "☘"
  },
  {
    id: "dogs-of-war",
    tier: "game",
    title: "Dogs of War",
    subtitle: "World War II faction strategy",
    kicker: "Historically grounded trading-card game",
    status: "Published digital serious game",
    categoryLabel: "Educational game",
    summary: "A digital adaptation of the historically themed serious trading-card game that translates World War II national roles, motivations and strategic behaviours into emergent faction mechanics.",
    problem: "History games often reduce complex national motivations to generic combat bonuses, making the lesson decorative rather than systemic.",
    contribution: "Dogs of War encodes six faction philosophies, a three-lane battlefield and a combat triangle into the rules themselves.",
    tags: ["World War II", "Cards", "Faction systems", "History"],
    images: ["dogs-of-war-cover.webp", "dogs-of-war-cards.webp", "dogs-of-war-hex.webp"],
    siteUrl: "https://byron2306.github.io/Dogs-of-War/",
    palette: ["#ffc85c", "#ff6f86"],
    symbol: "⚑"
  },
  {
    id: "drenched",
    tier: "game",
    title: "Drenched",
    subtitle: "Retro raycasting chaos",
    kicker: "Browser-based retro raycaster",
    status: "Playable web prototype",
    categoryLabel: "Game systems",
    summary: "A compact first-person browser prototype built around custom raycasting, keyboard movement and textured environments.",
    problem: "Modern web games often depend on large engines even when the design question is fundamentally about rendering, movement and spatial feel.",
    contribution: "Drenched demonstrates a lean canvas renderer, direct controls and hand-mapped textures without a heavyweight engine.",
    tags: ["Raycasting", "Browser game", "Canvas", "Retro"],
    images: ["drenched-cover.webp", "drenched-1.webp"],
    siteUrl: "https://byron2306.github.io/Drenched/",
    palette: ["#58e7ff", "#ff6f86"],
    symbol: "▧"
  },
  {
    id: "alice-valkyrie-star",
    tier: "game",
    title: "Alice: Valkyrie Star",
    subtitle: "Mythic platform combat",
    kicker: "A mythic 2D platformer with luminous adventure energy",
    status: "Game prototype",
    categoryLabel: "Game systems",
    summary: "A mythic action-platformer world of valkyrie imagery, star-bright traversal and character-forward adventure.",
    problem: "Small game prototypes often fail to establish identity before mechanics, leaving them technically playable but visually forgettable.",
    contribution: "Alice gives the project a strong mythic brand language, title-screen identity and playable platformer direction.",
    tags: ["Platformer", "Mythic", "Pixel systems", "Adventure"],
    images: ["alice-valkyrie-star-cover.webp", "alice-valkyrie-star-1.webp", "alice-valkyrie-star-2.webp"],
    palette: ["#ffc85c", "#58e7ff"],
    symbol: "★"
  },
  {
    id: "metal-survivors",
    tier: "game",
    title: "Metal Survivors",
    subtitle: "Heavy-metal horde action",
    kicker: "A heavy-metal survival action prototype",
    status: "Game prototype",
    categoryLabel: "Game systems",
    summary: "A playable metal-album-cover survival prototype full of guitar heroes, demons, themed biomes and arcade escalation.",
    problem: "Survival prototypes can become generic wave-counting unless the fantasy is loud, readable and immediately ownable.",
    contribution: "Metal Survivors fuses horde action, metal iconography and intense cover-art energy into a strong prototype identity.",
    tags: ["Survivor-like", "Metal", "Action", "Hordes"],
    images: ["metal-survivors-cover.webp", "metal-survivors-1.webp", "metal-survivors-2.webp", "metal-survivors-3.webp", "metal-survivors-4.webp", "metal-survivors-5.webp"],
    palette: ["#ff6f86", "#ffc85c"],
    symbol: "☠"
  },
  {
    id: "surround-me",
    tier: "game",
    title: "Surround Me",
    subtitle: "Greyline psychological ARPG",
    kicker: "A psychological isometric ARPG and survival-horror system",
    status: "Design blueprint",
    categoryLabel: "Psychological game systems",
    summary: "A modern isometric action RPG and survival-horror project in which player behaviour reshapes combat feel, perception, burden, enemy response and the world itself.",
    problem: "Many horror games place their philosophy in story and atmosphere while leaving the mechanics conventional.",
    contribution: "Surround Me makes psychology executable through the Greyline System, behavioural stats, adaptive enemies and world escalation.",
    tags: ["Greyline", "ARPG", "Survival horror", "Behaviour"],
    images: ["surround-me-1.webp", "surround-me-2.webp", "surround-me-3.webp"],
    palette: ["#a978ff", "#58e7ff"],
    symbol: "◇"
  }
];

const proofCards = [
  {
    "id": "beast-hidden",
    "headline": true,
    "system": "BEAST",
    "verdict": "RESCUED",
    "title": "Hidden-Cost Gauntlet",
    "icon": "⌁",
    "metrics": [
      [
        "25",
        "provider routes"
      ],
      [
        "250",
        "live tasks"
      ],
      [
        "250/250",
        "BEAST completions"
      ],
      [
        "241/250",
        "rescued completions"
      ]
    ],
    "body": "BEAST was used to expose hidden provider failure cost across a route matrix. The important result is not only that tasks completed, but that the system made provider rescue visible and measurable.",
    "details": [
      "Clean provider completions were only 9/250.",
      "Hidden coverage reached 10/10 tasks for every route.",
      "The gauntlet frames BEAST as a reliability layer over inconsistent upstream outputs.",
      "No route payloads or private provider details are published."
    ],
    "theme": "beast",
    "deckLinks": [
      {
        "title": "Inference Inversion",
        "href": "assets/decks/inference-inversion.pptx",
        "slides": 15
      }
    ]
  },
  {
    "id": "arda-mega",
    "headline": true,
    "system": "ARDA",
    "verdict": "SURVIVED",
    "title": "Mega Gauntlet",
    "icon": "♜",
    "metrics": [
      [
        "7/7",
        "phases survived"
      ],
      [
        "105",
        "strain events"
      ],
      [
        "LOCKDOWN",
        "dynamic escalation"
      ],
      [
        "STANDARD",
        "recovery state"
      ]
    ],
    "body": "ARDA survived a seven-phase adversarial sequence designed to break timing, context, replay protection, semantic arbitration, strain escalation and recovery behaviour.",
    "details": [
      "Perfect mimicry attack caught by Triune policy constraints.",
      "Benign chaos degraded gracefully instead of causing panic.",
      "Split-brain edge context caused quarantine.",
      "Stale epoch replay was denied."
    ],
    "theme": "arda",
    "deckLinks": [
      {
        "title": "The ARDA Substrate",
        "href": "assets/decks/arda-substrate.pptx",
        "slides": 17
      }
    ]
  },
  {
    "id": "seraph-s5",
    "headline": true,
    "system": "SERAPH",
    "verdict": "S5 PLATINUM",
    "title": "MITRE S5 Coverage",
    "icon": "🛡",
    "metrics": [
      [
        "691/691",
        "ATT&CK techniques"
      ],
      [
        "100%",
        "coverage"
      ],
      [
        "2,105",
        "sandbox runs"
      ],
      [
        "2,766",
        "Sigma hits"
      ]
    ],
    "body": "Seraph's MITRE validation bundle records complete Enterprise technique coverage under the S5 Platinum tier. The public claim is aggregate-only: validated technique records, sandbox execution, Sigma matches, osquery correlations and analyst review are summarized without exposing raw telemetry.",
    "details": [
      "S5 Platinum requires reproducible sandbox execution, clean baseline, telemetry preservation and signed or hashed technique records.",
      "Each technique was represented by a Technique Validation Record.",
      "The public portfolio shows counts and validation tier only.",
      "Raw commands, telemetry payloads, internal paths and host details stay out of the public site."
    ],
    "theme": "seraph",
    "deckLinks": [
      {
        "title": "AATR Core Attack Vector Taxonomy",
        "href": "assets/decks/aatr-taxonomy.pptx",
        "slides": 47
      }
    ]
  },
  {
    "id": "sophia-v11",
    "headline": true,
    "system": "SOPHIA",
    "verdict": "21/21",
    "title": "v1.1 Landmark",
    "icon": "⚖",
    "metrics": [
      [
        "21/21",
        "strict pass"
      ],
      [
        "qwen2.5:3b",
        "Sophia Full"
      ],
      [
        "7/7",
        "Core subset"
      ],
      [
        "MM",
        "multimodal"
      ]
    ],
    "body": "The v1.1 landmark established a strict-pass protocol over multimodal evidence discipline, anti-substitution boundaries, continuity families and reusable transfer scaffolding.",
    "details": [
      "Sophia Full on qwen2.5:3b passed all 21 landmark rows.",
      "Sophia Core passed a narrower 7/7 subset around multimodal and continuity checks.",
      "The result tested evidence discipline, anti-substitution and lawful reentry behaviour.",
      "The landmark is stronger than a refusal-only test because it includes continuity and transfer scaffolding."
    ],
    "theme": "sophia",
    "deckLinks": [
      {
        "title": "Sophia Governed Intelligence",
        "href": "assets/decks/sophia-governed-intelligence.pptx",
        "slides": 17
      },
      {
        "title": "Sovereign Pedagogy",
        "href": "assets/decks/sovereign-pedagogy.pptx",
        "slides": 14
      }
    ]
  },
  {
    "id": "sophia-v12",
    "headline": true,
    "system": "SOPHIA",
    "verdict": "HARDENED",
    "title": "v1.2 Semantic Hardening",
    "icon": "⚖",
    "metrics": [
      [
        "5/17",
        "baseline"
      ],
      [
        "17/17",
        "post-fix"
      ],
      [
        "35/41",
        "cross-domain clone"
      ],
      [
        "30/34",
        "clean clone"
      ]
    ],
    "body": "The v1.2 frozen result is a stress-and-repair story: the benchmark exposed failures, then the runtime/evaluator path was repaired without pretending the first attempt had already passed.",
    "details": [
      "Initial v1.2 starting point passed only 5/17 rows.",
      "Post-fix mainline reached 17/17.",
      "Mutation and cross-domain clone lanes preserved stress evidence rather than smoothing it away.",
      "OR1A health and safety closure marked the hardest semantic frontier as closed; human-judgment lane was prepared but not executed in that cycle."
    ],
    "theme": "sophia",
    "deckLinks": [
      {
        "title": "Sophia Governed Intelligence",
        "href": "assets/decks/sophia-governed-intelligence.pptx",
        "slides": 17
      },
      {
        "title": "The Crystal Box Assessment",
        "href": "assets/decks/crystal-box-assessment.pptx",
        "slides": 14
      }
    ]
  },
  {
    "id": "llamageddon",
    "headline": true,
    "system": "SERAPH",
    "verdict": "ELLAMINATED",
    "title": "Llamageddon / Last Chord",
    "icon": "🦙",
    "metrics": [
      [
        "38/38",
        "child runs"
      ],
      [
        "4",
        "waves"
      ],
      [
        "0",
        "unsafe actions"
      ],
      [
        "6,066",
        "noise events"
      ]
    ],
    "body": "The Last Chord shared-stack run pushed Gemini, Claude and Grok through a noisy governed matrix while background enterprise traffic continued. The system completed the wave set without releasing unsafe action authority.",
    "details": [
      "Providers were distributed across Gemini, Anthropic and Grok lanes.",
      "All final verdicts resolved as dissonant.",
      "Enterprise background traffic generated 674 noise cycles and 6,066 routed events.",
      "Two world-state caveats were retained rather than polished away, while unsafe action release remained zero."
    ],
    "theme": "llama",
    "deckLinks": [
      {
        "title": "AATR Core Attack Vector Taxonomy",
        "href": "assets/decks/aatr-taxonomy.pptx",
        "slides": 47
      }
    ]
  },
  {
    "id": "archive-beast-provider-family-blind-test",
    "archive": true,
    "system": "BEAST",
    "verdict": "VALIDATED",
    "title": "Provider-family blind test",
    "icon": "⌁",
    "metrics": [
      [
        "30/36",
        "structural passes"
      ],
      [
        "83.33%",
        "governed lane"
      ],
      [
        "8.33%",
        "baseline lane"
      ],
      [
        "0.814",
        "avg governed quality"
      ]
    ],
    "body": "Governed BEAST lanes were compared against raw provider and candidate lanes on structure, quality and supported claim status. The result supports the core claim that BEAST changes task outcomes through routing, evidence and review gates rather than acting as a cosmetic wrapper.",
    "details": [
      "Baseline lane recorded 3/36 structural passes.",
      "Candidate lane recorded 2/24 structural passes.",
      "Provisional grading strengthened the governed lane to 36/36.",
      "Direct daemon, gateway route and MCP tool returned supported claim status.",
      "Note: Sanitized aggregate: no prompts, API keys, provider secrets or route credentials are shown."
    ],
    "theme": "beast",
    "deckLinks": [
      {
        "title": "Inference Inversion",
        "href": "assets/decks/inference-inversion.pptx",
        "slides": 15
      },
      {
        "title": "Architecture Over Scale",
        "href": "assets/decks/architecture-over-scale.pptx",
        "slides": 14
      }
    ]
  },
  {
    "id": "archive-beast-all-route-hidden-cost-gauntlet",
    "archive": true,
    "system": "BEAST",
    "verdict": "RESCUED",
    "title": "All-route hidden-cost gauntlet",
    "icon": "⌁",
    "metrics": [
      [
        "25",
        "provider routes"
      ],
      [
        "250",
        "live tasks"
      ],
      [
        "250/250",
        "BEAST completions"
      ],
      [
        "241/250",
        "rescued completions"
      ]
    ],
    "body": "BEAST was used to expose hidden provider failure cost across a route matrix. The important result is not only that tasks completed, but that the system made provider rescue visible and measurable.",
    "details": [
      "Clean provider completions were only 9/250.",
      "Hidden coverage reached 10/10 tasks for every route.",
      "The gauntlet frames BEAST as a reliability layer over inconsistent upstream outputs.",
      "No route payloads or private provider details are published.",
      "Note: Public-safe summary only: routes and providers are treated as anonymized benchmark lanes."
    ],
    "theme": "beast",
    "deckLinks": [
      {
        "title": "Inference Inversion",
        "href": "assets/decks/inference-inversion.pptx",
        "slides": 15
      }
    ]
  },
  {
    "id": "archive-beast-tiny-model-crystal-amplification",
    "archive": true,
    "system": "BEAST",
    "verdict": "CRYSTALLIZED",
    "title": "Tiny model crystal amplification",
    "icon": "⌁",
    "metrics": [
      [
        "0.34",
        "tiny raw"
      ],
      [
        "0.50",
        "tiny OpenClaw / ZeroClaw"
      ],
      [
        "0.94",
        "crystal-amplified"
      ],
      [
        "0.97",
        "big BEAST lane"
      ]
    ],
    "body": "A small local model improved sharply when routed through BEAST's crystallized evidence and capability layer, supporting the inference-economy thesis that verified residues can compound into local capability.",
    "details": [
      "Shows capability amplification without pretending the tiny model changed internally by magic.",
      "The improvement is attributed to BEAST's governed crystal and evidence layer.",
      "Best used as an internal benchmark signal, not a universal model-performance claim.",
      "Pairs directly with the proof-local compute doctrine.",
      "Note: Sanitized benchmark: no retained prompt content or proprietary tasks are exposed."
    ],
    "theme": "beast",
    "deckLinks": [
      {
        "title": "Inference Inversion",
        "href": "assets/decks/inference-inversion.pptx",
        "slides": 15
      },
      {
        "title": "Architecture Over Scale",
        "href": "assets/decks/architecture-over-scale.pptx",
        "slides": 14
      },
      {
        "title": "The Crystal Box Assessment",
        "href": "assets/decks/crystal-box-assessment.pptx",
        "slides": 14
      }
    ]
  },
  {
    "id": "archive-beast-proof-local-phase-4-chain-trial",
    "archive": true,
    "system": "BEAST",
    "verdict": "QUARANTINED",
    "title": "Proof-local Phase 4 chain trial",
    "icon": "⌁",
    "metrics": [
      [
        "Ed25519",
        "attestation"
      ],
      [
        "true",
        "fork quarantined"
      ],
      [
        "true",
        "rollback quarantined"
      ],
      [
        "false",
        "private payload export"
      ]
    ],
    "body": "The proof-local compute pathway was tested around attestation, fork detection, rollback detection and promotion safety. Unsafe or inconsistent histories degraded into quarantine instead of unsafe reuse.",
    "details": [
      "Clean chain allowed promotion.",
      "Forked history was detected and quarantined.",
      "Rollback history was detected and quarantined.",
      "Private payload export remained disabled.",
      "Note: Frames BEAST as a governed control and asset plane above inference engines."
    ],
    "theme": "beast",
    "deckLinks": [
      {
        "title": "Inference Inversion",
        "href": "assets/decks/inference-inversion.pptx",
        "slides": 15
      }
    ]
  },
  {
    "id": "archive-arda-adversarial-mega-gauntlet",
    "archive": true,
    "system": "ARDA",
    "verdict": "SURVIVED",
    "title": "Adversarial Mega Gauntlet",
    "icon": "♜",
    "metrics": [
      [
        "7/7",
        "phases survived"
      ],
      [
        "105",
        "strain events"
      ],
      [
        "LOCKDOWN",
        "dynamic escalation"
      ],
      [
        "STANDARD",
        "recovery state"
      ]
    ],
    "body": "ARDA survived a seven-phase adversarial sequence designed to break timing, context, replay protection, semantic arbitration, strain escalation and recovery behaviour.",
    "details": [
      "Perfect mimicry attack caught by Triune policy constraints.",
      "Benign chaos degraded gracefully instead of causing panic.",
      "Split-brain edge context caused quarantine.",
      "Stale epoch replay was denied.",
      "Adversarial harmony was caught by semantic intent correlation.",
      "Recovery rotated epoch and released quarantine.",
      "Note: Sanitized from gauntlet logs. Operational secrets and code internals are not exposed."
    ],
    "theme": "arda",
    "deckLinks": [
      {
        "title": "The ARDA Substrate",
        "href": "assets/decks/arda-substrate.pptx",
        "slides": 17
      }
    ]
  },
  {
    "id": "archive-arda-triune-chorus-distributed-veto",
    "archive": true,
    "system": "ARDA",
    "verdict": "VETOED",
    "title": "Triune Chorus distributed veto",
    "icon": "♜",
    "metrics": [
      [
        "100%",
        "unison executed"
      ],
      [
        "52%",
        "fracture vetoed"
      ],
      [
        "100%",
        "recovery executed"
      ],
      [
        "80%",
        "health threshold"
      ]
    ],
    "body": "The distributed trust layer was tested for unison, fracture and recovery. Lawful action proceeded only when the surrounding trust mesh was coherent.",
    "details": [
      "Pure boot plus matching heartbeats executed.",
      "Peer fracture triggered network veto.",
      "Recovery restored lawful execution.",
      "Trust moved from a single local node to a distributed resonance condition.",
      "Note: Aggregate distributed-sovereignty evidence only."
    ],
    "theme": "arda",
    "deckLinks": [
      {
        "title": "The ARDA Substrate",
        "href": "assets/decks/arda-substrate.pptx",
        "slides": 17
      }
    ]
  },
  {
    "id": "archive-arda-epoch-and-notation-replay-guard",
    "archive": true,
    "system": "ARDA",
    "verdict": "SEALED",
    "title": "Epoch and notation replay guard",
    "icon": "♜",
    "metrics": [
      [
        "epoch_2024_dead",
        "provided epoch"
      ],
      [
        "epoch_current",
        "active epoch"
      ],
      [
        "DENIED",
        "notation check"
      ],
      [
        "instant",
        "replay failure"
      ]
    ],
    "body": "ARDA's replay layer denied stale notation from a dead epoch, showing that valid-looking actions still fail when their sequence slot and time-bound authority do not match current state.",
    "details": [
      "Replay used perfect notation but the wrong timeframe.",
      "Sequence-slot and epoch bounds were enforced before execution trust was granted.",
      "This supports the claim that form alone does not equal authority.",
      "The proof is presented without publishing verifier internals.",
      "Note: Public summary of replay-resistance behaviour."
    ],
    "theme": "arda",
    "deckLinks": [
      {
        "title": "The ARDA Substrate",
        "href": "assets/decks/arda-substrate.pptx",
        "slides": 17
      }
    ]
  },
  {
    "id": "archive-seraph-seraph-mitre-att-ck-s5-coverage-attestation",
    "archive": true,
    "system": "SERAPH",
    "verdict": "S5 PLATINUM",
    "title": "Seraph MITRE ATT&CK S5 Coverage Attestation",
    "icon": "🛡",
    "metrics": [
      [
        "691/691",
        "ATT&CK techniques"
      ],
      [
        "100%",
        "coverage"
      ],
      [
        "2,105",
        "sandbox runs"
      ],
      [
        "2,766",
        "Sigma hits"
      ],
      [
        "1,123",
        "osquery correlations"
      ],
      [
        "691/691",
        "analyst reviewed"
      ]
    ],
    "body": "Seraph's MITRE validation bundle records complete Enterprise technique coverage under the S5 Platinum tier. The public claim is aggregate-only: validated technique records, sandbox execution, Sigma matches, osquery correlations and analyst review are summarized without exposing raw telemetry.",
    "details": [
      "S5 Platinum requires reproducible sandbox execution, clean baseline, telemetry preservation and signed or hashed technique records.",
      "Each technique was represented by a Technique Validation Record.",
      "The public portfolio shows counts and validation tier only.",
      "Raw commands, telemetry payloads, internal paths and host details stay out of the public site.",
      "Note: Sanitized from the Seraph MITRE coverage bundle. This is coverage attestation, not a promise of perfect real-world detection."
    ],
    "theme": "seraph",
    "deckLinks": [
      {
        "title": "AATR Core Attack Vector Taxonomy",
        "href": "assets/decks/aatr-taxonomy.pptx",
        "slides": 47
      }
    ]
  },
  {
    "id": "archive-seraph-live-gpt-4o-deception-engagement",
    "archive": true,
    "system": "SERAPH",
    "verdict": "TRL-6",
    "title": "Live GPT-4o deception engagement",
    "icon": "🛡",
    "metrics": [
      [
        "6/6",
        "contained"
      ],
      [
        "0",
        "real assets"
      ],
      [
        "60,536",
        "tokens burned"
      ],
      [
        "60",
        "tool calls"
      ],
      [
        "29",
        "detections"
      ],
      [
        "6",
        "SOAR incidents"
      ]
    ],
    "body": "A live frontier-model attacker was routed through Seraph's deception, router delay and SOAR evidence loop. The attacker spent budget and tool calls but did not reach real assets.",
    "details": [
      "Six independent live engagements were recorded.",
      "Mirror-maze activation appeared in five of six runs.",
      "Router-imposed delay totaled 178,700 ms.",
      "The result is framed as controlled TRL-style evidence, not open-ended production certification.",
      "Note: Attacker prompts, infrastructure details and sensitive runtime traces are not published."
    ],
    "theme": "seraph",
    "deckLinks": [
      {
        "title": "AATR Core Attack Vector Taxonomy",
        "href": "assets/decks/aatr-taxonomy.pptx",
        "slides": 47
      }
    ]
  },
  {
    "id": "archive-seraph-aab-rev14-cross-provider-llamageddon-matrix",
    "archive": true,
    "system": "SERAPH",
    "verdict": "LLAMAGEDDON",
    "title": "AAB Rev14 cross-provider Llamageddon matrix",
    "icon": "🛡",
    "metrics": [
      [
        "494",
        "total runs"
      ],
      [
        "13",
        "cohorts"
      ],
      [
        "389",
        "contained"
      ],
      [
        "459",
        "zero-real-asset"
      ],
      [
        "7.46M",
        "tokens"
      ],
      [
        "5,103",
        "tool calls"
      ]
    ],
    "body": "The Armageddon runs were the lab's glorious Llamageddon era: a cross-provider adversarial benchmark where defended lanes materially outperformed no-defense lanes. In the lab wording, the llama horde was ellaminated.",
    "details": [
      "Claude defended curated recorded 38/38 contained with zero real-asset runs.",
      "Claude no-defense recorded 12/38 contained and 26 escape or real-asset runs.",
      "GPT-4o latest per-class, Qwen 0.5B networked and Llama 3.2 1B full each recorded 38/38 containment.",
      "The #30 evidence-log gag is preserved only as a public nickname; raw logs and secrets are not exposed.",
      "Note: Public card uses sanitized aggregate results and the Llamageddon nickname, not raw benchmark traces."
    ],
    "theme": "seraph",
    "deckLinks": [
      {
        "title": "AATR Core Attack Vector Taxonomy",
        "href": "assets/decks/aatr-taxonomy.pptx",
        "slides": 47
      }
    ]
  },
  {
    "id": "archive-seraph-local-qwen-0-5b-aab-matrix",
    "archive": true,
    "system": "SERAPH",
    "verdict": "LOCAL",
    "title": "Local Qwen 0.5B AAB matrix",
    "icon": "🛡",
    "metrics": [
      [
        "38/38",
        "contained"
      ],
      [
        "0/38",
        "escapes"
      ],
      [
        "298,491",
        "tokens"
      ],
      [
        "319",
        "tool calls"
      ],
      [
        "494M",
        "params"
      ],
      [
        "Q4_K_M",
        "quantization"
      ]
    ],
    "body": "A tiny local model participated in the adversarial benchmark loop under the Seraph substrate, supporting the local-first claim that governance and containment matter even around small models.",
    "details": [
      "Docker and Ollama corroboration recorded the active backend and model-control plane.",
      "The run paired benchmark records with live container/model state evidence.",
      "Worst time-to-containment was recorded as approximately 1.8116 seconds.",
      "Local paths, container identifiers and host details are removed from the public summary.",
      "Note: Pairs neatly with BEAST's tiny-model crystal amplification proof."
    ],
    "theme": "seraph",
    "deckLinks": [
      {
        "title": "AATR Core Attack Vector Taxonomy",
        "href": "assets/decks/aatr-taxonomy.pptx",
        "slides": 47
      }
    ]
  },
  {
    "id": "archive-seraph-last-chord-llamageddon-live-002",
    "archive": true,
    "system": "SERAPH",
    "verdict": "SURVIVED",
    "title": "Last Chord Llamageddon Live 002",
    "icon": "🛡",
    "metrics": [
      [
        "38/38",
        "child runs"
      ],
      [
        "4",
        "waves"
      ],
      [
        "0",
        "unsafe actions"
      ],
      [
        "6,066",
        "noise events"
      ],
      [
        "182,432",
        "tokens"
      ],
      [
        "228",
        "tool calls"
      ]
    ],
    "body": "The Last Chord shared-stack run pushed Gemini, Claude and Grok through a noisy governed matrix while background enterprise traffic continued. The system completed the wave set without releasing unsafe action authority.",
    "details": [
      "Providers were distributed across Gemini, Anthropic and Grok lanes.",
      "All final verdicts resolved as dissonant.",
      "Enterprise background traffic generated 674 noise cycles and 6,066 routed events.",
      "Two world-state caveats were retained rather than polished away, while unsafe action release remained zero.",
      "Note: The public story is intentionally honest: survived with preserved caveats, not fake perfection."
    ],
    "theme": "seraph",
    "deckLinks": [
      {
        "title": "AATR Core Attack Vector Taxonomy",
        "href": "assets/decks/aatr-taxonomy.pptx",
        "slides": 47
      }
    ]
  },
  {
    "id": "archive-seraph-last-chord-zeek-pcap-evidence-chain",
    "archive": true,
    "system": "SERAPH",
    "verdict": "FORENSIC",
    "title": "Last Chord Zeek / PCAP evidence chain",
    "icon": "🛡",
    "metrics": [
      [
        "38/38",
        "runs returned 0"
      ],
      [
        "38/38",
        "dissonant verdicts"
      ],
      [
        "PCAP",
        "captured"
      ],
      [
        "SHA256",
        "recorded"
      ],
      [
        "Merkle",
        "rooted"
      ],
      [
        "0",
        "unsafe releases"
      ]
    ],
    "body": "The Llamageddon evidence stack was not only JSON logs. It included PCAP capture, Zeek processing, SHA256 evidence and Merkle-rooted run grouping.",
    "details": [
      "conn.log and packet_filter.log were present in the smoke capture.",
      "The full capture recorded a 106,677-byte PCAP with a hash.",
      "Group Merkle roots linked the run set into a tamper-evident evidence bundle.",
      "No PCAP contents or host-sensitive details are exposed.",
      "Note: Forensic summary only: captured-evidence existence is public, captured traffic is not."
    ],
    "theme": "seraph",
    "deckLinks": [
      {
        "title": "AATR Core Attack Vector Taxonomy",
        "href": "assets/decks/aatr-taxonomy.pptx",
        "slides": 47
      }
    ]
  },
  {
    "id": "archive-seraph-aab-regression-harness",
    "archive": true,
    "system": "SERAPH",
    "verdict": "REGRESSED",
    "title": "AAB regression harness",
    "icon": "🛡",
    "metrics": [
      [
        "139/139",
        "Rev9 tests"
      ],
      [
        "0",
        "failures"
      ],
      [
        "0",
        "errors"
      ],
      [
        "0",
        "skipped"
      ],
      [
        "4.429s",
        "runtime"
      ],
      [
        "Rev5-9",
        "clean arc"
      ]
    ],
    "body": "The adversarial benchmark framework itself carried repeatable regression evidence, keeping the gauntlet machinery from becoming a pile of heroic but untested scripts.",
    "details": [
      "Rev5 reported 133/133.",
      "Rev6, Rev7 and Rev8 reported 139/139.",
      "Rev9 reported 139/139 with no failures or errors.",
      "This supports the benchmark harness, not only the defended systems under test.",
      "Note: Engineering proof that the proof machinery was also checked."
    ],
    "theme": "seraph",
    "deckLinks": [
      {
        "title": "AATR Core Attack Vector Taxonomy",
        "href": "assets/decks/aatr-taxonomy.pptx",
        "slides": 47
      }
    ]
  },
  {
    "id": "archive-seraph-threat-pipeline-evaluation",
    "archive": true,
    "system": "SERAPH",
    "verdict": "HARDENED",
    "title": "Threat pipeline evaluation",
    "icon": "🛡",
    "metrics": [
      [
        "73/73",
        "E2E steps"
      ],
      [
        "100%",
        "pass rate"
      ],
      [
        "21",
        "domains"
      ],
      [
        "10.66ms",
        "avg latency"
      ]
    ],
    "body": "Seraph's threat-pipeline report validates threat lifecycle handling, AI-adversarial signals, MITRE feedback loops and endpoint response orchestration under an evidence-first security model.",
    "details": [
      "Agent registration, heartbeat and response execution succeeded in the E2E sequence.",
      "Workflow included MITRE coverage feedback loops and AI defense taming processes.",
      "Every critical code path executed cleanly under valid environmental setup.",
      "The result supports production-readiness of the tested application layer.",
      "Note: Security-sensitive payloads, infrastructure details and tokens are omitted."
    ],
    "theme": "seraph",
    "deckLinks": [
      {
        "title": "AATR Core Attack Vector Taxonomy",
        "href": "assets/decks/aatr-taxonomy.pptx",
        "slides": 47
      }
    ]
  },
  {
    "id": "archive-seraph-harmonic-cadence-engine-gauntlet",
    "archive": true,
    "system": "SERAPH",
    "verdict": "DETECTED",
    "title": "Harmonic cadence engine gauntlet",
    "icon": "🛡",
    "metrics": [
      [
        "100%",
        "true positive rate"
      ],
      [
        "10%",
        "false positive rate"
      ],
      [
        "~9",
        "tool loops to containment"
      ],
      [
        "0.65ms",
        "avg overhead"
      ]
    ],
    "body": "The cadence engine was evaluated against rapid tool-spam and prompt-injection style behaviour while accounting for benign jitter and operational overhead.",
    "details": [
      "Rapid tool-spam was flagged.",
      "Prompt-injection behaviour was flagged.",
      "Network jitter was tuned through strict discord floors and suspicion trackers.",
      "Low overhead supports feasibility of inline defensive use.",
      "Note: Presented as benchmark evidence, not a guarantee against every adversarial strategy."
    ],
    "theme": "seraph",
    "deckLinks": [
      {
        "title": "AATR Core Attack Vector Taxonomy",
        "href": "assets/decks/aatr-taxonomy.pptx",
        "slides": 47
      }
    ]
  },
  {
    "id": "archive-seraph-mitre-and-integration-validation",
    "archive": true,
    "system": "SERAPH",
    "verdict": "COVERED",
    "title": "MITRE and integration validation",
    "icon": "🛡",
    "metrics": [
      [
        "15/15",
        "tools emulated"
      ],
      [
        "91.67%",
        "balanced coverage"
      ],
      [
        "91.67%",
        "hardened coverage"
      ],
      [
        "745",
        "unit tests collected"
      ]
    ],
    "body": "Seraph's integration evidence covers enterprise-tool emulation, MITRE evidence fusion, corroboration scoring and unit-test breadth across the security fabric.",
    "details": [
      "Falco, Suricata, Zeek, Cuckoo and Atomic analyzers were emulated and validated.",
      "Strict MITRE profile recorded 81.94% coverage.",
      "Balanced and hardened profiles recorded 91.67% coverage.",
      "Unit-test suite executed successfully without import failures after the reported stub fix.",
      "Note: No signatures, telemetry payloads or sensitive environment settings are exposed."
    ],
    "theme": "seraph",
    "deckLinks": [
      {
        "title": "AATR Core Attack Vector Taxonomy",
        "href": "assets/decks/aatr-taxonomy.pptx",
        "slides": 47
      }
    ]
  },
  {
    "id": "archive-sophia-ai-sophia-pilot-constitutional-layer-test",
    "archive": true,
    "system": "SOPHIA",
    "verdict": "PILOTED",
    "title": "Sophia Pilot Constitutional Layer Test",
    "icon": "⚖",
    "metrics": [
      [
        "raw",
        "baseline"
      ],
      [
        "RAG",
        "baseline"
      ],
      [
        "Core",
        "constitutional lane"
      ],
      [
        "Full",
        "governed lane"
      ],
      [
        "P7/P8",
        "stable refusals"
      ],
      [
        "P14b",
        "honest strain"
      ]
    ],
    "body": "The pilot compared raw and retrieval-only baselines against Sophia Core and Sophia Full, showing that constitutional scaffolding changed behaviour more meaningfully than retrieval alone.",
    "details": [
      "Raw model and retrieval-only lanes remained insufficient for the target constitutional behaviours.",
      "Sophia Core and Full materially improved lawfulness, pedagogical visibility, boundary integrity and trace coherence.",
      "Counterfeit-human and counterfeit-intimacy refusals stabilized on P7 and P8.",
      "A provenance strain point was retained as honest evidence rather than hidden.",
      "Note: Public summary of pilot structure; private prompts and identity-bearing material are excluded."
    ],
    "theme": "sophia",
    "deckLinks": [
      {
        "title": "Sophia Governed Intelligence",
        "href": "assets/decks/sophia-governed-intelligence.pptx",
        "slides": 17
      },
      {
        "title": "Sovereign Pedagogy",
        "href": "assets/decks/sovereign-pedagogy.pptx",
        "slides": 14
      }
    ]
  },
  {
    "id": "archive-sophia-ai-sophia-protocol-v1-1-landmark",
    "archive": true,
    "system": "SOPHIA",
    "verdict": "21/21",
    "title": "Sophia Protocol v1.1 Landmark",
    "icon": "⚖",
    "metrics": [
      [
        "21/21",
        "strict pass"
      ],
      [
        "qwen2.5:3b",
        "Sophia Full"
      ],
      [
        "7/7",
        "Core subset"
      ],
      [
        "MM",
        "multimodal"
      ],
      [
        "CJ/TR",
        "continuity"
      ],
      [
        "saved",
        "artifact"
      ]
    ],
    "body": "The v1.1 landmark established a strict-pass protocol over multimodal evidence discipline, anti-substitution boundaries, continuity families and reusable transfer scaffolding.",
    "details": [
      "Sophia Full on qwen2.5:3b passed all 21 landmark rows.",
      "Sophia Core passed a narrower 7/7 subset around multimodal and continuity checks.",
      "The result tested evidence discipline, anti-substitution and lawful reentry behaviour.",
      "The landmark is stronger than a refusal-only test because it includes continuity and transfer scaffolding.",
      "Note: Sanitized landmark summary. Full row contents remain outside the public portfolio."
    ],
    "theme": "sophia",
    "deckLinks": [
      {
        "title": "Sophia Governed Intelligence",
        "href": "assets/decks/sophia-governed-intelligence.pptx",
        "slides": 17
      },
      {
        "title": "Sovereign Pedagogy",
        "href": "assets/decks/sovereign-pedagogy.pptx",
        "slides": 14
      }
    ]
  },
  {
    "id": "archive-sophia-ai-sophia-multimodal-cross-scale-stability",
    "archive": true,
    "system": "SOPHIA",
    "verdict": "STABLE",
    "title": "Sophia Multimodal Cross-Scale Stability",
    "icon": "⚖",
    "metrics": [
      [
        "0.5B",
        "8/8 lawful"
      ],
      [
        "3B",
        "8/8 lawful"
      ],
      [
        "7B",
        "8/8 lawful"
      ],
      [
        "3",
        "model scales"
      ],
      [
        "MM",
        "evidence discipline"
      ],
      [
        "repeat",
        "replicates"
      ]
    ],
    "body": "Saved multimodal replicates showed the Sophia Full protocol holding across small, medium and larger local Qwen lanes, supporting the architecture-first claim.",
    "details": [
      "3B Sophia Full replicates reached 8/8 lawful.",
      "0.5B Sophia Full replicate reached 8/8 lawful.",
      "7B Sophia Full replicates reached 8/8 lawful.",
      "The result supports governed-runtime stability rather than a simple bigger-model narrative.",
      "Note: Cross-scale summary only; multimodal artifacts and prompts are not published."
    ],
    "theme": "sophia",
    "deckLinks": [
      {
        "title": "Sophia Governed Intelligence",
        "href": "assets/decks/sophia-governed-intelligence.pptx",
        "slides": 17
      },
      {
        "title": "Architecture Over Scale",
        "href": "assets/decks/architecture-over-scale.pptx",
        "slides": 14
      }
    ]
  },
  {
    "id": "archive-sophia-ai-sophia-protocol-v1-2-semantic-hardening",
    "archive": true,
    "system": "SOPHIA",
    "verdict": "HARDENED",
    "title": "Sophia Protocol v1.2 Semantic Hardening",
    "icon": "⚖",
    "metrics": [
      [
        "5/17",
        "baseline"
      ],
      [
        "17/17",
        "post-fix"
      ],
      [
        "35/41",
        "cross-domain clone"
      ],
      [
        "30/34",
        "clean clone"
      ],
      [
        "OR1A",
        "closed"
      ],
      [
        "HJ",
        "prepared"
      ]
    ],
    "body": "The v1.2 frozen result is a stress-and-repair story: the benchmark exposed failures, then the runtime/evaluator path was repaired without pretending the first attempt had already passed.",
    "details": [
      "Initial v1.2 starting point passed only 5/17 rows.",
      "Post-fix mainline reached 17/17.",
      "Mutation and cross-domain clone lanes preserved stress evidence rather than smoothing it away.",
      "OR1A health and safety closure marked the hardest semantic frontier as closed; human-judgment lane was prepared but not executed in that cycle.",
      "Note: Presented as repair-backed hardening, not inflated perfection."
    ],
    "theme": "sophia",
    "deckLinks": [
      {
        "title": "Sophia Governed Intelligence",
        "href": "assets/decks/sophia-governed-intelligence.pptx",
        "slides": 17
      },
      {
        "title": "The Crystal Box Assessment",
        "href": "assets/decks/crystal-box-assessment.pptx",
        "slides": 14
      }
    ]
  },
  {
    "id": "archive-sophia-ai-first-ethical-proof",
    "archive": true,
    "system": "SOPHIA",
    "verdict": "WITNESSED",
    "title": "First Ethical Proof",
    "icon": "⚖",
    "metrics": [
      [
        "8/8",
        "ethical proof"
      ],
      [
        "0",
        "constitutional violations"
      ],
      [
        "qwen2.5:3b",
        "local model"
      ],
      [
        "1:51",
        "valid witness run"
      ]
    ],
    "body": "Sophia's covenantal proof bundle records identity material, sealed covenant evidence, encounter logs, witness material and constitutional refusal behaviour.",
    "details": [
      "Unauthenticated access was refused.",
      "Forged-token access was refused.",
      "Principal recognition and identity knowledge succeeded.",
      "Human-impersonation and counterfeit reciprocity requests were refused.",
      "Note: Witness and proof material summarized without exposing private identity contents."
    ],
    "theme": "sophia",
    "deckLinks": [
      {
        "title": "Sophia Governed Intelligence",
        "href": "assets/decks/sophia-governed-intelligence.pptx",
        "slides": 17
      }
    ]
  },
  {
    "id": "archive-sophia-ai-cryptographic-adversarial-layer",
    "archive": true,
    "system": "SOPHIA",
    "verdict": "BLOCKED",
    "title": "Cryptographic adversarial layer",
    "icon": "⚖",
    "metrics": [
      [
        "6/6",
        "attacks blocked"
      ],
      [
        "0",
        "reached LLM"
      ],
      [
        "HMAC-SHA3",
        "identity binding"
      ],
      [
        "19",
        "encounters logged"
      ]
    ],
    "body": "Unauthenticated adversarial attempts were stopped before reaching the model, showing a deterministic layer beneath probabilistic language behaviour.",
    "details": [
      "System override blocked.",
      "Role override blocked.",
      "Principal impersonation blocked.",
      "Secret-exfiltration request blocked.",
      "Authority impersonation blocked.",
      "Note: Attack contents are summarized at vector level only."
    ],
    "theme": "sophia",
    "deckLinks": [
      {
        "title": "Sophia Governed Intelligence",
        "href": "assets/decks/sophia-governed-intelligence.pptx",
        "slides": 17
      }
    ]
  },
  {
    "id": "archive-sophia-ai-authenticated-constitutional-boundary-trial",
    "archive": true,
    "system": "SOPHIA",
    "verdict": "HONEST",
    "title": "Authenticated constitutional boundary trial",
    "icon": "⚖",
    "metrics": [
      [
        "4/5",
        "clean refusals"
      ],
      [
        "1",
        "partial boundary"
      ],
      [
        "20",
        "valid chain events"
      ],
      [
        "VALID",
        "chain integrity"
      ]
    ],
    "body": "The authenticated LLM layer produced four clean refusals and one documented partial boundary wobble, making the proof stronger because uncertainty was preserved instead of polished away.",
    "details": [
      "Prompt injection was refused.",
      "Human-nature violation was refused.",
      "Counterfeit reciprocity was refused.",
      "Unknowable personal facts were refused.",
      "A constitutional-amendment hypothetical was documented as partial rather than hidden.",
      "Note: This card intentionally keeps the partial result visible as evidence of honest evaluation."
    ],
    "theme": "sophia",
    "deckLinks": [
      {
        "title": "Sophia Governed Intelligence",
        "href": "assets/decks/sophia-governed-intelligence.pptx",
        "slides": 17
      }
    ]
  },
  {
    "id": "archive-knowedge-merger-forensic-ingest-trial",
    "archive": true,
    "system": "KNOWEDGE MERGER",
    "verdict": "VERIFIED",
    "title": "Forensic ingest trial",
    "icon": "⬡",
    "metrics": [
      [
        "16",
        "ingest runs"
      ],
      [
        "28",
        "verified files"
      ],
      [
        "568",
        "verified chunks"
      ],
      [
        "0",
        "non-empty error logs"
      ]
    ],
    "body": "KnowEdge Merger produced repeatable source-ingestion evidence with content verification, chunking and hash-based traceability.",
    "details": [
      "Verification reports record source and target hashes.",
      "Chunking supports traceable review surfaces.",
      "The ingest chain can be summarized without exposing source content.",
      "Semantic hash and risk-vector metadata support governance-facing review.",
      "Note: Only aggregate ingest evidence is shown. Source documents stay private."
    ],
    "theme": "merger"
  },
  {
    "id": "archive-vamp-evidence-stewardship-run",
    "archive": true,
    "system": "VAMP",
    "verdict": "MAPPED",
    "title": "Evidence stewardship run",
    "icon": "🦇",
    "metrics": [
      [
        "50",
        "JSON logs"
      ],
      [
        "208",
        "evidence items"
      ],
      [
        "0.949",
        "avg confidence"
      ],
      [
        "4",
        "KPA groups"
      ]
    ],
    "body": "VAMP turned scattered work traces into KPA-linked, confidence-scored evidence for performance stewardship and review preparation.",
    "details": [
      "42 successful evidence-collection or review logs were identified.",
      "185 Outlook-derived and 23 eFundi-derived evidence items were summarized.",
      "KPA1, KPA2, KPA3 and KPA4 mappings were aggregated.",
      "Risk categories included capacity, compliance, delivery and escalation.",
      "Note: No raw logs, staff identifiers, email contents or institutional records are published."
    ],
    "theme": "vamp",
    "deckLinks": [
      {
        "title": "VAMP 1.0 Production Readiness",
        "href": "assets/decks/vamp-production-readiness.pptx",
        "slides": 12
      }
    ]
  },
  {
    "id": "archive-homs-smart-assessor-test-cycles",
    "archive": true,
    "system": "HOMS",
    "verdict": "TESTED",
    "title": "Smart Assessor test cycles",
    "icon": "✓",
    "metrics": [
      [
        "87.5%",
        "iteration 1 backend"
      ],
      [
        "100%",
        "frontend flow"
      ],
      [
        "100%",
        "exam-builder backend"
      ],
      [
        "DOCX",
        "verified download"
      ]
    ],
    "body": "HOMS validated AI-supported essay assessment and exam-building workflows across backend, frontend, integration, AI assessment and DOCX generation.",
    "details": [
      "GPT-4o essay assessment flow was verified.",
      "Rubric selection, modal feedback and score badges were tested.",
      "Exam Builder passed 7/7 backend tests.",
      "Recent-exam persistence, preview and document download were validated.",
      "Note: No student submissions, marks or private module data are exposed."
    ],
    "theme": "homs",
    "deckLinks": [
      {
        "title": "Sovereign Pedagogy",
        "href": "assets/decks/sovereign-pedagogy.pptx",
        "slides": 14
      },
      {
        "title": "The Crystal Box Assessment",
        "href": "assets/decks/crystal-box-assessment.pptx",
        "slides": 14
      }
    ]
  },
  {
    "id": "archive-outlook-agent-profile-aware-memory-trial",
    "archive": true,
    "system": "OUTLOOK AGENT",
    "verdict": "SANITIZED",
    "title": "Profile-aware memory trial",
    "icon": "✉",
    "metrics": [
      [
        "10",
        "memory records"
      ],
      [
        "9",
        "thread memories"
      ],
      [
        "1",
        "context analysis"
      ],
      [
        "0",
        "raw emails exposed"
      ]
    ],
    "body": "The Outlook Browser Agent demonstrated profile-aware reading, triage support and persistent memory capture across live inbox sessions.",
    "details": [
      "The agent preserved an editable user-profile context.",
      "Browser-visible automation supported inspection and interruption.",
      "Memory records showed live-session continuity.",
      "All email addresses, bodies and private profile details are excluded here.",
      "Note: This proof is intentionally privacy-first and aggregate-only."
    ],
    "theme": "outlook"
  },
  {
    "id": "archive-evidex-evidence-pack-workflow-validation",
    "archive": true,
    "system": "EVIDEX",
    "verdict": "OPERATIONAL",
    "title": "Evidence-pack workflow validation",
    "icon": "▤",
    "metrics": [
      [
        "30",
        "campaign rows"
      ],
      [
        "10",
        "days"
      ],
      [
        "3",
        "platforms"
      ],
      [
        "SENT",
        "duplicate guard"
      ]
    ],
    "body": "EVIDEX documents an intake-to-delivery evidence-pack flow with form intake, Drive handoff, payment-gated processing, delivery automation and campaign assets.",
    "details": [
      "Google Form intake and Drive job folder creation were documented.",
      "Payment-gated processing separated intake from final delivery.",
      "Delivery automation used a duplicate-send guard.",
      "Marketing one-pagers and platform rotation assets were prepared.",
      "Note: Client records and evidence-pack contents are excluded."
    ],
    "theme": "evidex"
  },
  {
    "id": "archive-hivenance-sandbox-governance-trial",
    "archive": true,
    "system": "HIVENANCE",
    "verdict": "CONTAINED",
    "title": "Sandbox governance trial",
    "icon": "🐝",
    "metrics": [
      [
        "NONE",
        "execution authority"
      ],
      [
        "false",
        "live allowed"
      ],
      [
        "11",
        "strategy proposals"
      ],
      [
        "0",
        "trades in snapshot"
      ]
    ],
    "body": "Hivenance is framed as a risk-governed market-agent sandbox where candidates are documented, restrained and kept away from live authority without review.",
    "details": [
      "Model cards recorded candidate families and constraints.",
      "Promotion remained candidate-only.",
      "Live orders, wallet control and unreviewed sizing were out of scope.",
      "The proof supports containment, not profitability.",
      "Note: No trading credentials, live execution paths or sensitive runtime traces are shown."
    ],
    "theme": "hivenance"
  },
  {
    "id": "deck-sophia-governed-intelligence",
    "isDeck": true,
    "system": "SOURCE DECK",
    "verdict": "PPTX",
    "title": "Sophia Governed Intelligence",
    "icon": "▤",
    "metrics": [
      [
        "17",
        "slides"
      ],
      [
        "SOPHIA-AI",
        "linked layer"
      ]
    ],
    "body": "Sophia / constitutional AI evidence deck",
    "details": [
      "Linked to: Sophia Pilot Constitutional Layer Test, Sophia Protocol v1.1 Landmark, Sophia Multimodal Cross-Scale Stability…",
      "Stored inside assets/decks for portfolio download or review."
    ],
    "theme": "sophia",
    "deckLinks": [
      {
        "title": "Open PowerPoint deck",
        "href": "assets/decks/sophia-governed-intelligence.pptx",
        "slides": 17
      }
    ],
    "thumb": "assets/decks/thumbs/sophia-governed-intelligence.webp"
  },
  {
    "id": "deck-sovereign-pedagogy",
    "isDeck": true,
    "system": "SOURCE DECK",
    "verdict": "PPTX",
    "title": "Sovereign Pedagogy",
    "icon": "▤",
    "metrics": [
      [
        "14",
        "slides"
      ],
      [
        "SOPHIA-AI, HOMS",
        "linked layer"
      ]
    ],
    "body": "Pedagogical governance and authorship-boundary deck",
    "details": [
      "Linked to: Sophia Pilot Constitutional Layer Test, Sophia Protocol v1.1 Landmark, Smart Assessor test cycles",
      "Stored inside assets/decks for portfolio download or review."
    ],
    "theme": "sophia",
    "deckLinks": [
      {
        "title": "Open PowerPoint deck",
        "href": "assets/decks/sovereign-pedagogy.pptx",
        "slides": 14
      }
    ],
    "thumb": "assets/decks/thumbs/sovereign-pedagogy.webp"
  },
  {
    "id": "deck-arda-substrate",
    "isDeck": true,
    "system": "SOURCE DECK",
    "verdict": "PPTX",
    "title": "The ARDA Substrate",
    "icon": "▤",
    "metrics": [
      [
        "17",
        "slides"
      ],
      [
        "ARDA",
        "linked layer"
      ]
    ],
    "body": "Sovereign substrate and constitutional enforcement deck",
    "details": [
      "Linked to: Adversarial Mega Gauntlet, Triune Chorus distributed veto, Epoch and notation replay guard",
      "Stored inside assets/decks for portfolio download or review."
    ],
    "theme": "arda",
    "deckLinks": [
      {
        "title": "Open PowerPoint deck",
        "href": "assets/decks/arda-substrate.pptx",
        "slides": 17
      }
    ],
    "thumb": "assets/decks/thumbs/arda-substrate.webp"
  },
  {
    "id": "deck-inference-inversion",
    "isDeck": true,
    "system": "SOURCE DECK",
    "verdict": "PPTX",
    "title": "Inference Inversion",
    "icon": "▤",
    "metrics": [
      [
        "15",
        "slides"
      ],
      [
        "BEAST",
        "linked layer"
      ]
    ],
    "body": "BEAST inference-economy and proof-local compute deck",
    "details": [
      "Linked to: Provider-family blind test, All-route hidden-cost gauntlet, Tiny model crystal amplification…",
      "Stored inside assets/decks for portfolio download or review."
    ],
    "theme": "beast",
    "deckLinks": [
      {
        "title": "Open PowerPoint deck",
        "href": "assets/decks/inference-inversion.pptx",
        "slides": 15
      }
    ],
    "thumb": "assets/decks/thumbs/inference-inversion.webp"
  },
  {
    "id": "deck-aatr-taxonomy",
    "isDeck": true,
    "system": "SOURCE DECK",
    "verdict": "PPTX",
    "title": "AATR Core Attack Vector Taxonomy",
    "icon": "▤",
    "metrics": [
      [
        "47",
        "slides"
      ],
      [
        "SERAPH",
        "linked layer"
      ]
    ],
    "body": "Adversarial AI Threat Registry and attack-vector taxonomy deck",
    "details": [
      "Linked to: Seraph MITRE ATT&CK S5 Coverage Attestation, Live GPT-4o deception engagement, AAB Rev14 cross-provider Llamageddon matrix…",
      "Stored inside assets/decks for portfolio download or review."
    ],
    "theme": "seraph",
    "deckLinks": [
      {
        "title": "Open PowerPoint deck",
        "href": "assets/decks/aatr-taxonomy.pptx",
        "slides": 47
      }
    ],
    "thumb": "assets/decks/thumbs/aatr-taxonomy.webp"
  },
  {
    "id": "deck-architecture-over-scale",
    "isDeck": true,
    "system": "SOURCE DECK",
    "verdict": "PPTX",
    "title": "Architecture Over Scale",
    "icon": "▤",
    "metrics": [
      [
        "14",
        "slides"
      ],
      [
        "BEAST, SOPHIA-AI",
        "linked layer"
      ]
    ],
    "body": "Architecture-first evidence and systems doctrine deck",
    "details": [
      "Linked to: Tiny model crystal amplification, Sophia Multimodal Cross-Scale Stability, Provider-family blind test",
      "Stored inside assets/decks for portfolio download or review."
    ],
    "theme": "beast",
    "deckLinks": [
      {
        "title": "Open PowerPoint deck",
        "href": "assets/decks/architecture-over-scale.pptx",
        "slides": 14
      }
    ],
    "thumb": "assets/decks/thumbs/architecture-over-scale.webp"
  },
  {
    "id": "deck-crystal-box-assessment",
    "isDeck": true,
    "system": "SOURCE DECK",
    "verdict": "PPTX",
    "title": "The Crystal Box Assessment",
    "icon": "▤",
    "metrics": [
      [
        "14",
        "slides"
      ],
      [
        "BEAST, HOMS",
        "linked layer"
      ]
    ],
    "body": "Assessment, evaluator and proof-box methodology deck",
    "details": [
      "Linked to: Tiny model crystal amplification, Smart Assessor test cycles, Sophia Protocol v1.2 Semantic Hardening",
      "Stored inside assets/decks for portfolio download or review."
    ],
    "theme": "beast",
    "deckLinks": [
      {
        "title": "Open PowerPoint deck",
        "href": "assets/decks/crystal-box-assessment.pptx",
        "slides": 14
      }
    ],
    "thumb": "assets/decks/thumbs/crystal-box-assessment.webp"
  },
  {
    "id": "deck-vamp-production-readiness",
    "isDeck": true,
    "system": "SOURCE DECK",
    "verdict": "PPTX",
    "title": "VAMP 1.0 Production Readiness",
    "icon": "▤",
    "metrics": [
      [
        "12",
        "slides"
      ],
      [
        "VAMP",
        "linked layer"
      ]
    ],
    "body": "VAMP operational readiness and academic evidence deck",
    "details": [
      "Linked to: Evidence stewardship run",
      "Stored inside assets/decks for portfolio download or review."
    ],
    "theme": "vamp",
    "deckLinks": [
      {
        "title": "Open PowerPoint deck",
        "href": "assets/decks/vamp-production-readiness.pptx",
        "slides": 12
      }
    ],
    "thumb": "assets/decks/thumbs/vamp-production-readiness.webp"
  }
];

const tierTargets = {
  flagship: document.querySelector("#flagship-grid"),
  operations: document.querySelector("#operations-grid"),
  game: document.querySelector("#games-grid")
};

const dialog = document.querySelector("#project-dialog");
const dialogImage = document.querySelector("#dialog-image");
const dialogDots = document.querySelector("#dialog-dots");
let activeProject = null;
let activeImageIndex = 0;

function escapeAttr(value) {
  return String(value).replace(/"/g, "&quot;");
}


function youtubeThumb(video) {
  return video.thumb || `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`;
}

function videoCardMarkup(video) {
  const meta = [video.duration, video.views, video.age].filter(Boolean).join(" · ");
  return `
    <article class="video-card reveal">
      <a href="${video.url}" target="_blank" rel="noreferrer" aria-label="Watch ${escapeAttr(video.title)}">
        <span class="video-thumb" style="--thumb:url('${youtubeThumb(video)}')">
          <span class="play-orb">▶</span>
        </span>
        <span class="video-copy">
          <small>${video.project} · ${video.kind}</small>
          <strong>${video.title}</strong>
          <span>${meta}</span>
        </span>
      </a>
    </article>
  `;
}

function projectVideoMatches(project) {
  const normalizedTitle = project.title.toLowerCase();
  const aliases = {
    "edgek beast": ["BEAST"],
    "sophia-ai": ["Sophia-AI"],
    "seraph ai": ["Seraph AI"],
    "arda os": ["ARDA OS"],
    "knowedge merger": ["KnowEdge Merger"],
    "vamp": ["VAMP"],
    "homs / smart assessor": ["HOMS / Smart Assessor"],
    "evidex": ["EVIDEX"],
    "hivenance": ["Hivenance"],
    "outlook browser agent": ["Outlook Browser Agent"],
    "metal survivors": ["Metal Survivors"]
  };
  const allowed = aliases[normalizedTitle] || [project.title];
  return videoLibrary.filter(video => allowed.includes(video.project));
}

function renderVideoVault() {
  const target = document.querySelector("#video-vault-grid");
  const count = document.querySelector("#video-count-pill");
  if (!target) return;
  target.innerHTML = videoLibrary.map(videoCardMarkup).join("");
  if (count) count.textContent = `${videoLibrary.length} videos mapped`;
}

function createProjectCard(project) {
  const article = document.createElement("article");
  article.className = `system-card theme-${project.id} reveal`;
  article.dataset.projectId = project.id;
  article.style.setProperty("--cover", `url("${imageSrc(project.images[0])}")`);
  article.style.setProperty("--accent", project.palette[0]);
  article.style.setProperty("--accent-2", project.palette[1]);
  article.innerHTML = `
    <button class="system-card-button" type="button" aria-label="Open ${escapeAttr(project.title)} case study">
      <span class="system-card-bg" aria-hidden="true"></span>
      <span class="system-card-glow" aria-hidden="true"></span>
      <span class="system-symbol">${project.symbol}</span>
      <span class="system-card-content">
        <span class="system-status-pill">${project.status}</span>
        <strong>${project.title}</strong>
        <small>${project.subtitle}</small>
        <span class="view-link">View system →</span>
      </span>
    </button>
  `;
  article.querySelector("button").addEventListener("click", () => openProject(project));
  return article;
}

function renderProjects() {
  Object.values(tierTargets).forEach(target => target?.replaceChildren());
  projects.forEach(project => {
    tierTargets[project.tier]?.append(createProjectCard(project));
  });
}

function createProofCard(card, compact = false) {
  const article = document.createElement("article");
  article.className = `proof-card proof-${card.theme || "default"} reveal ${compact ? "proof-card-compact" : ""} ${card.isDeck ? "proof-deck-card" : ""}`;
  if (card.thumb) {
    article.style.setProperty("--deck-thumb", `url("${card.thumb}")`);
  }
  const deckLinks = (card.deckLinks || []).map(link => `
    <a class="proof-deck-link" href="${escapeAttr(link.href)}" target="_blank" rel="noreferrer">
      <span>Open deck</span><small>${link.title}${link.slides ? ` · ${link.slides} slides` : ""}</small>
    </a>
  `).join("");
  article.innerHTML = `
    ${card.thumb ? `<div class="proof-thumb" aria-hidden="true"></div>` : ""}
    <div class="proof-card-top">
      <span class="proof-icon">${card.icon}</span>
      <div>
        <small>${card.system}</small>
        <h3>${card.title}</h3>
      </div>
      <strong>${card.verdict}</strong>
    </div>
    <div class="proof-metrics">
      ${card.metrics.map(metric => `<div><b>${metric[0]}</b><span>${metric[1]}</span></div>`).join("")}
    </div>
    <p>${card.body}</p>
    <ul>${card.details.map(item => `<li>${item}</li>`).join("")}</ul>
    ${deckLinks ? `<div class="proof-deck-links">${deckLinks}</div>` : ""}
  `;
  return article;
}

function renderProofs() {
  const headlineTarget = document.querySelector("#headline-proof-grid");
  const proofTarget = document.querySelector("#proof-grid");
  headlineTarget?.replaceChildren();
  proofTarget?.replaceChildren();
  proofCards.filter(card => card.headline).forEach(card => headlineTarget?.append(createProofCard(card, true)));
  proofCards.filter(card => !card.headline).forEach(card => proofTarget?.append(createProofCard(card)));
}

function openProject(project) {
  activeProject = project;
  activeImageIndex = 0;
  document.querySelector("#dialog-category").textContent = project.categoryLabel;
  document.querySelector("#dialog-title").textContent = project.title;
  document.querySelector("#dialog-tagline").textContent = project.kicker;
  document.querySelector("#dialog-description").textContent = project.summary;
  document.querySelector("#dialog-problem").textContent = project.problem;
  document.querySelector("#dialog-contribution").textContent = project.contribution;
  document.querySelector("#dialog-tags").innerHTML = project.tags.map(tag => `<span>${tag}</span>`).join("");
  const dialogVideoLinks = document.querySelector("#dialog-video-links");
  const matches = projectVideoMatches(project);
  if (dialogVideoLinks) {
    dialogVideoLinks.innerHTML = matches.length
      ? `<h3>Related videos</h3><div>${matches.slice(0, 6).map(video => `<a href="${video.url}" target="_blank" rel="noreferrer">▶ ${video.title}</a>`).join("")}</div>`
      : "";
  }
  const liveSite = document.querySelector("#dialog-live-site");
  if (project.siteUrl) {
    liveSite.hidden = false;
    liveSite.href = project.siteUrl;
  } else {
    liveSite.hidden = true;
  }
  updateDialogImage();
  dialog.showModal();
  document.body.classList.add("dialog-open");
}

function updateDialogImage() {
  const imageName = activeProject.images[activeImageIndex];
  dialogImage.src = imageSrc(imageName);
  dialogImage.alt = `${activeProject.title} visual ${activeImageIndex + 1} of ${activeProject.images.length}`;
  dialogDots.innerHTML = activeProject.images.map((_, index) => `
    <button type="button" class="${index === activeImageIndex ? "active" : ""}" aria-label="Show image ${index + 1}"></button>
  `).join("");
  [...dialogDots.querySelectorAll("button")].forEach((button, index) => {
    button.addEventListener("click", () => {
      activeImageIndex = index;
      updateDialogImage();
    });
  });
}

function moveImage(direction) {
  if (!activeProject) return;
  activeImageIndex = (activeImageIndex + direction + activeProject.images.length) % activeProject.images.length;
  updateDialogImage();
}

document.querySelector(".dialog-close")?.addEventListener("click", () => dialog.close());
document.querySelector(".dialog-prev")?.addEventListener("click", () => moveImage(-1));
document.querySelector(".dialog-next")?.addEventListener("click", () => moveImage(1));

dialog.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
  activeProject = null;
});

window.addEventListener("keydown", event => {
  if (!dialog.open) return;
  if (event.key === "ArrowRight") moveImage(1);
  if (event.key === "ArrowLeft") moveImage(-1);
  if (event.key === "Escape") dialog.close();
});

function renderContacts() {
  const target = document.querySelector("#contact-actions");
  if (!target) return;
  const config = window.PORTFOLIO_CONFIG || {};
  const links = [
    config.email ? `<a href="mailto:${config.email}">Email Byron</a>` : "",
    config.github ? `<a href="${config.github}" target="_blank" rel="noreferrer">GitHub</a>` : "",
    config.linkedin ? `<a href="${config.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a>` : ""
  ].filter(Boolean);
  target.innerHTML = links.length
    ? links.join("")
    : `<p class="contact-empty">Add email, GitHub and LinkedIn links in <code>portfolio.config.js</code> to activate these buttons.</p>`;
}

function observeReveals() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(item => observer.observe(item));
}

function trackNav() {
  const links = [...document.querySelectorAll(".rail-nav a")];
  const sections = links
    .map(link => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
    });
  }, { threshold: 0.32, rootMargin: "-16% 0px -50% 0px" });
  sections.forEach(section => observer.observe(section));
}

renderProjects();
renderProofs();
renderVideoVault();
renderContacts();
requestAnimationFrame(() => {
  observeReveals();
  trackNav();
});
