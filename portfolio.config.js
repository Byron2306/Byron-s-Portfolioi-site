/*
  Add your real public contact details here.
  Leave a value blank to keep that contact button inactive.
*/
window.PORTFOLIO_CONFIG = {
  email: "",
  github: "",
  linkedin: ""
};

/* Portfolio extension layer: sanitized public additions only. */
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
    signature: "Historical interpretation is embedded in faction goals, lane pressure, combat relationships and the route to defeating the opposing General.",
    tags: ["World War II", "Trading-card game", "Faction systems", "Historical interpretation", "Serious games", "Published framework"],
    images: ["beast-ide-1.webp"],
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
    images: ["beast-ide-1.webp"],
    siteUrl: "https://byron2306.github.io/Drenched/"
  }
];

window.PORTFOLIO_PROOF_CARDS = [
  {system:"BEAST", verdict:"VALIDATED", title:"Provider-family blind test", body:"Governed BEAST lane outperformed raw provider lanes on structural completion and quality, showing that routing, evidence and review gates change task outcomes rather than merely decorating them.", metrics:[["30/36","structural passes"],["83.33%","governed lane"],["8.33%","baseline lane"]], note:"Sanitized aggregate: direct daemon, gateway route and MCP tool all reported supported claim status."},
  {system:"BEAST", verdict:"RESCUED", title:"All-route hidden-cost gauntlet", body:"Across provider routes and live tasks, BEAST exposed how often raw provider output needed rescue, then completed the workload through its governed completion path.", metrics:[["25","routes"],["250","live tasks"],["241","rescued completions"]], note:"Public-safe summary only: no provider secrets, prompts or route credentials included."},
  {system:"BEAST", verdict:"CRYSTALLIZED", title:"Tiny model crystal amplification", body:"A small local model improved dramatically when routed through BEAST's crystallized evidence and capability layer, supporting the inference-economy thesis.", metrics:[["0.34","tiny raw"],["0.94","crystal-amplified"],["0.97","big BEAST lane"]], note:"Claim framed as internal benchmark evidence, not universal model performance."},
  {system:"ARDA", verdict:"SURVIVED", title:"Adversarial Mega Gauntlet", body:"ARDA survived a seven-phase adversarial sequence covering perfect mimicry, benign chaos, split-brain context, stale epoch replay, adversarial harmony, cascading strain and recovery.", metrics:[["7/7","phases survived"],["105","strain events"],["LOCKDOWN","dynamic escalation"]], note:"Sanitized from gauntlet logs. No operational secrets exposed."},
  {system:"ARDA", verdict:"VETOED", title:"Triune Chorus distributed veto", body:"The distributed trust layer allowed lawful action during unison, vetoed operation during a fractured peer state and restored lawful execution after recovery.", metrics:[["100%","unison executed"],["52%","fracture vetoed"],["100%","recovery executed"]], note:"Published as aggregate distributed-sovereignty evidence."},
  {system:"SERAPH", verdict:"HARDENED", title:"Threat pipeline evaluation", body:"Seraph's test report validates threat lifecycle handling, harmonic cadence detection, enterprise-tool emulation, MITRE evidence fusion and unit-test breadth.", metrics:[["73/73","E2E steps"],["745","unit tests"],["15/15","tools emulated"]], note:"Reported latency: 10.66ms average E2E workflow, 0.65ms cadence-engine overhead."},
  {system:"SOPHIA-AI", verdict:"WITNESSED", title:"First Ethical Proof", body:"Sophia's covenantal evidence bundle records identity, sealed covenant material, encounter logs, witness material and constitutional refusal behaviour.", metrics:[["8/8","ethical proof"],["6/6","crypto blocks"],["20","valid chain events"]], note:"One authenticated LLM-layer partial was retained as honest boundary evidence."},
  {system:"KNOWEDGE MERGER", verdict:"VERIFIED", title:"Forensic ingest trial", body:"KnowEdge Merger produced repeatable source-ingestion evidence with content verification, chunking and hash-based source traceability.", metrics:[["28","verified files"],["568","verified chunks"],["0","non-empty error logs"]], note:"Only aggregate ingest evidence is shown. Source contents stay private."},
  {system:"VAMP", verdict:"MAPPED", title:"Evidence stewardship run", body:"VAMP mapped work evidence into performance-review structures, turning scattered activity traces into KPA-linked, confidence-scored stewardship data.", metrics:[["208","evidence items"],["0.949","avg confidence"],["4","KPA groups"]], note:"Personal work evidence and identifiers are deliberately excluded."},
  {system:"HOMS", verdict:"TESTED", title:"Smart Assessor test cycles", body:"HOMS validated AI-supported essay assessment and exam-building workflows across backend, frontend, integration, AI assessment and DOCX generation.", metrics:[["87.5%","iteration 1 backend"],["100%","exam-builder backend"],["DOCX","download verified"]], note:"Assessment claims are summarized without student submissions or private module data."},
  {system:"OUTLOOK AGENT", verdict:"SANITIZED", title:"Profile-aware memory trial", body:"The Outlook Browser Agent demonstrated profile-aware reading, triage support and persistent memory capture across live inbox sessions.", metrics:[["10","memory records"],["9","thread memories"],["0","raw emails exposed"]], note:"Inbox content, addresses and personal profile details are not published."},
  {system:"EVIDEX", verdict:"OPERATIONAL", title:"Evidence-pack workflow validation", body:"EVIDEX documents an intake-to-delivery evidence-pack flow with form intake, Drive handoff, payment-gated processing, delivery automation and campaign assets.", metrics:[["30","campaign rows"],["3","platforms"],["SENT","duplicate guard"]], note:"No client records or evidence-pack contents are exposed."},
  {system:"HIVENANCE", verdict:"CONTAINED", title:"Sandbox governance trial", body:"Hivenance is framed as a risk-governed market-agent sandbox: candidates are documented, restrained and kept away from live authority without review.", metrics:[["NONE","execution authority"],["false","live allowed"],["11","strategy proposals"]], note:"Not presented as trading performance. Presented as governed containment."}
];

(() => {
  const nativeFilter = Array.prototype.filter;
  function isPortfolioProjectArray(value) {
    return Array.isArray(value) && value.some(item => item && item.id === "beast") && value.some(item => item && item.id === "arda");
  }
  function extendProjects(value) {
    const extras = window.PORTFOLIO_EXTRA_PROJECTS || [];
    const existing = new Set(value.map(item => item && item.id));
    const missing = extras.filter(item => !existing.has(item.id));
    return missing.length ? value.concat(missing) : value;
  }
  Array.prototype.filter = function patchedPortfolioFilter(...args) {
    if (isPortfolioProjectArray(this)) return nativeFilter.apply(extendProjects(Array.from(this)), args);
    return nativeFilter.apply(this, args);
  };

  const css = `
.proof-section{position:relative}.proof-stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;margin:28px 0 26px}.proof-stats div{border:1px solid var(--line);border-radius:var(--radius-sm);background:linear-gradient(145deg,rgba(8,24,36,.92),rgba(8,19,29,.72));padding:18px;box-shadow:0 16px 44px rgba(0,0,0,.22)}.proof-stats strong{display:block;color:var(--mint);font-size:clamp(1.35rem,3vw,2.35rem);line-height:1;letter-spacing:-.04em}.proof-stats span{display:block;margin-top:8px;color:var(--muted);font-size:.82rem}.proof-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}.proof-card{min-height:390px;display:flex;flex-direction:column;gap:16px;border:1px solid var(--line);border-radius:var(--radius);padding:22px;background:radial-gradient(circle at top left,rgba(103,247,212,.12),transparent 34%),linear-gradient(150deg,rgba(10,25,37,.94),rgba(5,13,22,.86));box-shadow:var(--shadow);overflow:hidden;position:relative}.proof-card:before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(88,231,255,.06),transparent);pointer-events:none}.proof-card-prime{border-color:var(--line-strong)}.proof-card-top{display:flex;justify-content:space-between;gap:10px;align-items:center;position:relative;z-index:1}.proof-card-top span,.proof-card-top strong{font-size:.72rem;letter-spacing:.16em;text-transform:uppercase}.proof-card-top span{color:var(--faint)}.proof-card-top strong{color:var(--bg-deep);background:linear-gradient(135deg,var(--mint),var(--cyan));border-radius:999px;padding:6px 9px;box-shadow:0 0 22px rgba(103,247,212,.22)}.proof-card h3{margin:0;font-size:1.25rem;color:var(--text);position:relative;z-index:1}.proof-card p{margin:0;color:var(--muted);line-height:1.58;position:relative;z-index:1}.proof-card small{color:var(--faint);line-height:1.45;margin-top:auto;position:relative;z-index:1}.proof-metrics{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;position:relative;z-index:1}.proof-metrics div{border:1px solid rgba(138,190,218,.16);border-radius:14px;padding:12px 10px;background:rgba(3,9,15,.42)}.proof-metrics strong{display:block;color:var(--cyan);font-size:1.02rem;letter-spacing:-.02em}.proof-metrics span{display:block;margin-top:5px;color:var(--faint);font-size:.72rem;line-height:1.2}@media(max-width:1080px){.proof-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.proof-stats{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:680px){.proof-grid,.proof-stats{grid-template-columns:1fr}.proof-card{min-height:auto}.proof-metrics{grid-template-columns:1fr}}
`;

  function addProofSection() {
    if (document.querySelector('#proof-chambers')) return;
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    const nav = document.querySelector('.primary-nav');
    if (nav && !nav.querySelector('a[href="#proof-chambers"]')) {
      const link = document.createElement('a');
      link.href = '#proof-chambers';
      link.textContent = 'Proof';
      const doctrine = nav.querySelector('a[href="#doctrine"]');
      nav.insertBefore(link, doctrine || null);
    }

    const cards = (window.PORTFOLIO_PROOF_CARDS || []).map((card, index) => `
      <article class="proof-card reveal ${index < 3 ? 'proof-card-prime' : ''}">
        <div class="proof-card-top"><span>${card.system}</span><strong>${card.verdict}</strong></div>
        <h3>${card.title}</h3>
        <p>${card.body}</p>
        <div class="proof-metrics">${card.metrics.map(metric => `<div><strong>${metric[0]}</strong><span>${metric[1]}</span></div>`).join('')}</div>
        <small>${card.note}</small>
      </article>`).join('');

    const section = document.createElement('section');
    section.id = 'proof-chambers';
    section.className = 'section-shell section-block proof-section';
    section.setAttribute('aria-labelledby', 'proof-title');
    section.innerHTML = `
      <div class="section-heading reveal">
        <p class="eyebrow">Gauntlets &amp; validation</p>
        <h2 id="proof-title">Proof chambers: systems under pressure, receipts intact.</h2>
        <p>Sanitized aggregate summaries from project archives and repo evidence. No raw emails, cookies, student/staff identifiers, private logs or sensitive records are exposed here.</p>
      </div>
      <div class="proof-stats reveal" aria-label="Validation highlights">
        <div><strong>250/250</strong><span>BEAST governed route completions</span></div>
        <div><strong>7/7</strong><span>ARDA adversarial phases survived</span></div>
        <div><strong>745</strong><span>Seraph unit tests collected</span></div>
        <div><strong>568</strong><span>KnowEdge verified chunks</span></div>
      </div>
      <div class="proof-grid">${cards}</div>`;
    const systems = document.querySelector('#systems');
    systems?.insertAdjacentElement('afterend', section);
  }

  window.addEventListener('DOMContentLoaded', () => {
    addProofSection();
    const updateCount = () => {
      document.querySelectorAll('.hero-proof strong').forEach(node => {
        if (/^\d+$/.test(node.textContent.trim()) && node.nextElementSibling?.textContent?.includes('flagship platforms')) node.textContent = '17';
      });
    };
    updateCount();
    setTimeout(updateCount, 300);
    setTimeout(updateCount, 1200);
  });
})();