from pathlib import Path

index = Path('index.html')
css = Path('dio-section.css')
s = index.read_text(encoding='utf-8')
c = css.read_text(encoding='utf-8')

old = '''        <details class="section-panel dio-panel" id="dio">
          <summary class="dio-summary">
            <div class="dio-summary-mark">
              <img src="assets/identity/dio-sigil.svg" alt="DIO sigil" />
            </div>
            <div class="dio-summary-copy">
              <p class="eyebrow">Portfolio operating architecture</p>
              <h2 id="dio-title">Deterministic Intelligence Orchestration</h2>
              <p>DIO is the governed product factory behind the portfolio: reusable capability becomes products, execution remains bounded, and consequential results carry proof.</p>
            </div>
            <div class="dio-summary-signal">
              <strong>68</strong>
              <span>governed portfolio products</span>
              <b>Open DIO architecture ↓</b>
            </div>
          </summary>
'''

new = '''        <details class="section-panel dio-panel" id="dio">
          <summary class="dio-summary dio-summary-card">
            <div class="dio-summary-visual">
              <img src="assets/identity/DIO.png" alt="DIO emblem" />
              <span class="dio-status-pill">PORTFOLIO OPERATING ARCHITECTURE</span>
            </div>
            <div class="dio-summary-copy dio-summary-copy-card">
              <p class="eyebrow">Flagship architecture</p>
              <h2 id="dio-title">Deterministic Intelligence Orchestration</h2>
              <p>DIO is the governed product factory behind the portfolio: reusable capability becomes products, execution remains bounded, and consequential results carry proof.</p>
              <span class="dio-open-label">OPEN ARCHITECTURE →</span>
            </div>
            <div class="dio-summary-signal dio-summary-signal-card">
              <strong>68</strong>
              <span>governed portfolio products</span>
            </div>
          </summary>
'''

if old not in s:
    raise SystemExit('RED/guard failed: expected old DIO summary not found')
if 'assets/identity/DIO.png' in s:
    raise SystemExit('RED failed: new DIO image already present')

s = s.replace(old, new, 1)
s = s.replace('dio-section.css?v=20260917-2', 'dio-section.css?v=20260917-3', 1)
index.write_text(s, encoding='utf-8')

marker = '/* DIO flagship-card refit */'
if marker not in c:
    c += r'''

/* DIO flagship-card refit */
.dio-summary-card{
  grid-template-columns:minmax(280px,.95fr) minmax(0,1.25fr) minmax(130px,.34fr);
  gap:clamp(18px,2.4vw,30px);
  padding:clamp(16px,2vw,24px);
  align-items:stretch;
}
.dio-summary-visual{
  position:relative;
  min-height:280px;
  overflow:hidden;
  border-radius:20px;
  border:1px solid rgba(214,178,103,.28);
  background:#03070b;
  box-shadow:inset 0 0 50px rgba(214,178,103,.04);
}
.dio-summary-visual::after{
  content:"";
  position:absolute;
  inset:0;
  pointer-events:none;
  background:linear-gradient(180deg,transparent 55%,rgba(2,7,13,.78));
}
.dio-summary-visual img{
  width:100%;
  height:100%;
  object-fit:cover;
  object-position:center;
}
.dio-status-pill{
  position:absolute;
  z-index:1;
  left:16px;
  bottom:16px;
  display:inline-flex;
  align-items:center;
  min-height:34px;
  padding:0 12px;
  border:1px solid rgba(214,178,103,.38);
  border-radius:999px;
  color:#f4d98d;
  background:rgba(4,10,16,.82);
  backdrop-filter:blur(8px);
  font-size:.66rem;
  font-weight:900;
  letter-spacing:.14em;
}
.dio-summary-copy-card{
  align-self:center;
  padding-block:10px;
}
.dio-summary-copy-card h2{
  font-size:clamp(2rem,4.5vw,4.8rem);
}
.dio-open-label{
  display:inline-flex;
  margin-top:20px;
  color:#b6ff66;
  font-size:.78rem;
  font-weight:950;
  letter-spacing:.12em;
}
.dio-panel[open] .dio-open-label{
  font-size:0;
}
.dio-panel[open] .dio-open-label::after{
  content:"CLOSE ARCHITECTURE ↑";
  font-size:.78rem;
}
.dio-summary-signal-card{
  align-self:center;
  min-height:150px;
}

@media(max-width:1080px){
  .dio-summary-card{grid-template-columns:minmax(240px,.85fr) minmax(0,1.15fr)}
  .dio-summary-signal-card{grid-column:1/-1}
}
@media(max-width:720px){
  .dio-summary-card{grid-template-columns:1fr;padding:14px;gap:14px}
  .dio-summary-visual{min-height:0;aspect-ratio:1.2/1;border-radius:18px}
  .dio-status-pill{left:12px;bottom:12px;max-width:calc(100% - 24px);font-size:.6rem;letter-spacing:.1em}
  .dio-summary-copy-card{padding:4px 4px 0}
  .dio-summary-copy-card h2{font-size:clamp(2rem,10vw,3rem)}
  .dio-summary-signal-card{grid-column:auto;min-height:0;margin-top:2px}
}
'''

css.write_text(c, encoding='utf-8')

# GREEN verification
out = index.read_text(encoding='utf-8')
assert 'assets/identity/DIO.png' in out
assert 'dio-summary-visual' in out
assert 'OPEN ARCHITECTURE →' in out
assert 'dio-section.css?v=20260917-3' in out
assert 'assets/identity/dio-sigil.svg' not in out
print('GREEN: DIO collapsed card now uses DIO.png and flagship-card layout')
