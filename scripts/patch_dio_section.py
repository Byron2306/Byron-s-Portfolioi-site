from pathlib import Path

index = Path("index.html")
fragment = Path("dio-fragment.html").read_text(encoding="utf-8")
text = index.read_text(encoding="utf-8")

if 'id="dio"' in text:
    print("DIO section already present")
else:
    css_old = '<link rel="stylesheet" href="styles.css" />'
    css_new = css_old + '\n  <link rel="stylesheet" href="dio-section.css?v=20260917-1" />'
    if css_old not in text:
        raise SystemExit("styles.css marker not found")
    text = text.replace(css_old, css_new, 1)

    nav_old = '          <a href="#home" class="active"><span>⌂</span>Home</a>\n          <a href="#flagship"><span>✥</span>Systems</a>'
    nav_new = '          <a href="#home" class="active"><span>⌂</span>Home</a>\n          <a href="#dio"><span>◉</span>DIO</a>\n          <a href="#flagship"><span>✥</span>Systems</a>'
    if nav_old not in text:
        raise SystemExit("navigation marker not found")
    text = text.replace(nav_old, nav_new, 1)

    flagship = '        <section class="section-panel" id="flagship" aria-labelledby="flagship-title">'
    if flagship not in text:
        raise SystemExit("flagship marker not found")
    text = text.replace(flagship, fragment + flagship, 1)
    index.write_text(text, encoding="utf-8")

verified = index.read_text(encoding="utf-8")
assert verified.count('id="dio"') == 1
assert verified.count('href="#dio"') == 1
assert verified.index('id="dio"') < verified.index('id="flagship"')
assert 'dio-section.css?v=20260917-1' in verified
assert 'assets/identity/dio-wordmark.svg' in verified
assert '68' in verified and 'canon-level product incarnations' in verified
for label in ("Profiles", "Work patterns", "Organs &amp; executors", "Products &amp; incarnations", "Proof &amp; settlement"):
    assert label in verified
print("DIO architecture contract verified")
