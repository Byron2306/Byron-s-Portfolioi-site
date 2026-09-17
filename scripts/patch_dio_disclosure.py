from pathlib import Path

p = Path("index.html")
s = p.read_text(encoding="utf-8")

# RED: the desired disclosure must not already be present.
if '<details class="section-panel dio-panel" id="dio">' in s:
    raise SystemExit("DIO disclosure already present")

old_start = '        <section class="section-panel dio-panel" id="dio" aria-labelledby="dio-title">'
old_end = '        </section>\n\n        <section class="section-panel" id="flagship" aria-labelledby="flagship-title">'
if old_start not in s or old_end not in s:
    raise SystemExit("Existing DIO section markers not found")

start = s.index(old_start)
end = s.index(old_end, start)

new = '''        <details class="section-panel dio-panel" id="dio">
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

          <div class="dio-expanded">
            <div class="dio-atmosphere" aria-hidden="true"></div>
            <div class="dio-intro reveal">
              <div class="dio-copy">
                <p class="eyebrow"><span class="status-dot"></span> Architecture before catalogue</p>
                <h3>The architecture behind the portfolio.</h3>
                <p class="dio-lede">DIO is a proof-carrying intelligence operating architecture: one governed organism that composes reusable capability into products, executes within explicit authority, records what happened, and carries evidence forward.</p>
                <p>Rather than treating each project as an isolated app, DIO separates profiles, work patterns, governed executors, products and proof so capability can be reused without silently inheriting permission.</p>
                <div class="dio-actions">
                  <a class="dio-btn dio-btn-primary" href="https://byron2306.github.io/DIO-Workflows/" target="_blank" rel="noreferrer">Enter DIO Workflows ↗</a>
                  <a class="dio-btn" href="https://byron2306.github.io/DIO-Workflows/products/" target="_blank" rel="noreferrer">Explore 68 products ↗</a>
                </div>
              </div>
              <aside class="dio-proof-signal" aria-label="DIO portfolio signal">
                <strong>68</strong>
                <span>canon-level product incarnations</span>
                <small>53 base canon + 15 canon extensions</small>
              </aside>
            </div>

            <div class="dio-architecture reveal" aria-label="DIO architecture flow">
              <article><small>01</small><strong>Profiles</strong><span>Domain, authority, connectors, outputs and commercial context become explicit configuration.</span></article>
              <article><small>02</small><strong>Work patterns</strong><span>Reusable evidence, obligation and proof contracts describe governed work.</span></article>
              <article><small>03</small><strong>Organs &amp; executors</strong><span>Bounded capability performs work through named execution surfaces and gates.</span></article>
              <article><small>04</small><strong>Products &amp; incarnations</strong><span>Capability is compiled into buyer-facing forms without rebuilding the operating spine.</span></article>
              <article><small>05</small><strong>Proof &amp; settlement</strong><span>Receipts, evidence and world outcomes travel forward while authority remains explicit.</span></article>
            </div>

            <div class="dio-loop reveal" aria-label="DIO governed consequence loop">
              <span>Intent</span><i>→</i><span>Compose</span><i>→</i><span>Execute</span><i>→</i><span>Prove</span><i>→</i><span>Settle</span><i>→</i><span>Learn</span>
            </div>

            <div class="dio-principles reveal">
              <article><span>◈</span><div><h3>Governed composition</h3><p>Reusable capability can combine, but authority does not hitchhike between roles.</p></div></article>
              <article><span>⌁</span><div><h3>Typed execution</h3><p>Planning, execution, disclosure and release remain distinct operating decisions.</p></div></article>
              <article><span>▣</span><div><h3>Evidence by default</h3><p>Outputs are accompanied by receipts, provenance and reviewable proof boundaries.</p></div></article>
              <article><span>✦</span><div><h3>Products, not prompts</h3><p>The portfolio becomes a governed product factory rather than a pile of disconnected AI demos.</p></div></article>
            </div>
          </div>
        </details>

'''

s = s[:start] + new + s[end + len('        </section>\n\n'):]
s = s.replace('dio-section.css?v=20260917-1', 'dio-section.css?v=20260917-2', 1)

# GREEN assertions before writing.
required = [
    '<details class="section-panel dio-panel" id="dio">',
    '<summary class="dio-summary">',
    'assets/identity/dio-sigil.svg',
    'Deterministic Intelligence Orchestration',
    'Open DIO architecture',
    'class="dio-expanded"',
    'Profiles',
    'Work patterns',
    'Organs &amp; executors',
    'Products &amp; incarnations',
    'Proof &amp; settlement',
    '68',
    'dio-section.css?v=20260917-2',
]
missing = [item for item in required if item not in s]
if missing:
    raise SystemExit(f"DIO disclosure verification failed: {missing}")
if '<section class="section-panel dio-panel" id="dio"' in s:
    raise SystemExit("Old always-open DIO section still present")

p.write_text(s, encoding="utf-8")
print("DIO_DISCLOSURE_GREEN")
