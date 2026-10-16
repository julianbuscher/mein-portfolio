# Julian Buscher — Design System

Design System für das Mechatronik-Portfolio von **Julian Buscher** (Universität Innsbruck). Es setzt die Brand Guidelines v0.1 (Stand 04.09.2026) in Tokens, Komponenten und Screens um.

## Kontext

**Wer:** Julian Buscher, Mechatronik-Student mit Schwerpunkt Konstruktion, Prototyping und Automatisierung realer Hardware.

**Versprechen:** „Ich baue Sachen fertig — vom CAD bis zum funktionierenden Aufbau, dokumentiert."

**Zielgruppe — zwei Leser gleichzeitig:** HR/Recruiting (fachfremd, scannt 30 Sekunden) und die Fachabteilung (will Zahlen, CAD, Messwerte). Das Layout bedient beide: Bild + Outcome oben, Technikblöcke weiter unten.

**Drei visuelle Attribute:** präzise · unaufgeregt · gebaut (nicht nur gerendert).

### Oberflächen (Produkte)

| Surface | Status hier |
| --- | --- |
| Portfolio-Website (Startseite, Projektseiten, About/Contact) | UI Kit `ui_kits/portfolio/` |
| PDF-Mappe, Querformat 16:9, eine Seite pro Projekt | UI Kit `ui_kits/pdf-mappe/` |
| CV | bereits gebaut |
| LinkedIn-Grafiken (Banner, 4:3-Beitragskacheln) | nicht gebaut — Regeln in §11 der Guidelines |
| Slides (Uni, Team, Interview) | nicht gebaut — es lag kein Slide-Template bei; Regel: weißer Hintergrund, Display für Titel, ein Bild pro Slide |

### Quellen

- `uploads/brand-guidelines-julian-buscher.md` — Brand Guidelines v0.1 (403 Zeilen, deutsch).
- `uploads/JB - Lebenslauf - ATS.pdf` — ATS-Lebenslauf, Stand 09/2026. Quelle aller Projekt- und Lebenslaufinhalte im System.
- `uploads/02_front.png` — Rendering des Roboterarms (1600 × 1200). Zugeschnitten nach `assets/images/`.
- `uploads/archivo-{400,500,600}.woff2`, `uploads/fragmentmono-400.woff2` — Webfonts, kopiert nach `assets/fonts/`.
- Darin referenziert, **hier nicht selbst geprüft**: CSS-Analyse von `jacobschwartz.framer.ai` (Design-Referenz, ausgelesen 04.09.2026) und MIT MechE Communication Lab, CommKit „Portfolio" (CC BY-NC 4.0, Inhaltsreferenz).
- Kein Codebase, kein Figma-File, kein Logo wurden übergeben.

---

## Content Fundamentals

Wie Copy geschrieben wird. Die Schreibstimme selbst liegt in der `brand-voice`-Skill; hier stehen die portfoliospezifischen Regeln (§10 der Guidelines).

**Casing:** Sentence case überall — Überschriften, Buttons, Nav, Tabellenköpfe. Keine Versalien-Eyebrows über Überschriften („Wenn eine Sektion ein Label braucht, ist die Überschrift falsch formuliert"). Keine ALL-CAPS-Flächen.

**Person:** Ich-Form für den eigenen Anteil, „Das Team hat …" für den Rest — nie verschwimmen lassen. Der Leser wird direkt angesprochen nur in Buttons und Kontaktzeilen.

**Titel sind Aussagen, nicht Kursnamen.**

- ✗ „Konstruktionsübung 2" · „Computer Aided Design"
- ✓ „Peristaltikpumpe für 0,1 ml Dosiergenauigkeit" · „Pneumatischer Greifer mit 310 g Eigenmasse"
- Der Kursname wandert in die Meta-Zeile.

**Jede Behauptung, die eine Zahl haben kann, bekommt eine Zahl.**

- ✗ „deutlich leichter" → ✓ „von 480 g auf 310 g"
- ✗ „funktioniert zuverlässig" → ✓ „± 4 % Abweichung über 500 Zyklen"
- Zahlen immer mit Einheit und schmalem Leerzeichen: `30 mm`, `12 V`, `± 0,05 mm`. Dezimalkomma in der deutschen, Punkt in der englischen Fassung.

**Verben:** konstruiert, ausgelegt, gefertigt, simuliert, validiert, programmiert, gemessen, charakterisiert, optimiert, in Betrieb genommen. Verboten: gemacht, geholfen, benutzt, mitgearbeitet, war beteiligt an.

**Keine Marketing-Adjektive** — innovativ, hochmodern, state of the art. Keine Emoji, nirgends. Keine Ausrufezeichen.

**Rhythmus:** Ein Gedanke pro Absatz, max. 4 Zeilen. Aufzählungen max. 6 Punkte à max. 2 Zeilen; ab 7 Punkten wird es eine Tabelle. Abkürzungen beim ersten Auftreten ausschreiben (HR liest mit).

**Der Outcome-Absatz** ist der einzige Absatz, den viele Leser vollständig lesen: 2–3 Sätze, was es ist, wie es performt hat, was mein Beitrag war.

> „Peristaltikpumpe für Laborautomation, dosiert 0,1 ml mit ± 4 % Abweichung über 500 Zyklen. Ich habe Rotor und Schlauchbett konstruiert und den Messaufbau gebaut."

**Ergebnis ist Pflicht** — gemessen gegen das eingangs genannte Ziel, mit mindestens einer Zahl. Wenn etwas nicht funktioniert hat: was schiefging und was die nächste Iteration anders macht. Das ist stärker als es wegzulassen.

**Bildunterschriften** beschreiben, was zu sehen ist, und wiederholen nie den Fließtext. Alt-Text ist Pflicht.

**Buttons sagen, was passiert:** `Download CV`, nicht `Mehr`. Kein Pfeil-Suffix.

**Sprache:** Website englisch (Zielgruppe über DACH hinaus), deutsche CV-Variante als separates PDF. Nav und Buttons daher englisch, Fachinhalte in der Sprache der Zielgruppe.

---

## Visual Foundations

**Grundhaltung:** neutral-monochrom. Die einzige Farbe auf der Seite kommt aus Fotos und Renderings. Hierarchie entsteht über Größe und Weißraum, nicht über Fett, Farbe oder Kapitälchen. Ein Radius, ein Schatten, ein Grid.

**Farbe** (`tokens/colors.css`) — `--ink #000` Überschriften, `--ink-body #262626` Fließtext, `--ink-muted #525252` Meta/Captions (7,8 : 1, ersetzt bewusst das kontrastschwache `#7e7e87` der Referenz), `--line #D4D4D4`, `--surface #F7F7F7`, `--surface-2 #FAFAFA`, `--bg #FFF`. Genau **ein Akzent**, `--accent #E8500F`: Annotationen in Bildern, Datenreihe 2 in Plots, aktiver Nav-Zustand, Fokusring. Budget max. 10 % der sichtbaren Fläche; sind zwei Akzentelemente gleichzeitig sichtbar, ist eines zu viel. Für Text ab 16 px `--accent-text #C4410C`. Nie dekorativ, nie für Überschriften, nie Rot–Grün als Bedeutungspaar.

**Gradients:** keine. Nirgends — nicht als Hintergrund, nicht als Schutzverlauf über Bildern. Text auf Bild wird vermieden statt abgedunkelt; Labels stehen auf weißer Fläche (Annotationssystem) oder außerhalb des Bildes.

**Typografie** (`tokens/typography.css`) — eine Familie: **Archivo** (400/500/600). §5.1 nennt zusätzlich `Archivo Expanded` 600 für Deckblatt und Start-H1; dafür fehlt die Fontdatei, deshalb ist es nicht als Token angelegt (siehe Offene Punkte). **Fragment Mono** ausschließlich für technische Daten: Werte mit Einheit, Toleranzen, Bauteilnummern, Meta-Labels. Nie für Fließtext oder Überschriften. Skala Desktop/Tablet/Mobil: Display 56/48/34 · H2 40/32/26 · H3 26/22/20 · Lead 20/18/17 · Body 17/16/16 · Caption 14/14/13 · Mono-Label 13/13/12. Line-height 104 % Display, 110 % H2, 120 % H3, 150 % Lead, 160 % Body. Tracking −1,5 % Display, −1 % H2, −0,5 % H3, 0 im Body, +2 % Mono. Alles linksbündig, Flattersatz, Zeilenlänge max. 75 Zeichen (Textspalte 720 px). Hervorhebung nur über Weight 600 — kein Kursiv (außer Fachbegriffen), kein farbiges Wort. Zentriert ist nur die Wortmarke auf dem PDF-Deckblatt.

**Abstand** (`tokens/spacing.css`) — nur 4 · 8 · 16 · 24 · 32 · 48 · 64 · 96 · 128 px. Überschrift → Text 16, Text → Visual 32, Sektion → Sektion 96 (Mobil 48), über dem Footer 128, Kachelabstand 24. Der stärkste Abstand steht immer **über** einer Sektion: der Weißraum gehört zur nächsten Einheit.

**Layout** (`tokens/layout.css`) — Seitencontainer max. 1120 px zentriert, Textspalte 720 px, Full-bleed max. 1440 px. Seitenrand 80/40/20 px. Breakpoints ≥1200 / 810–1199 / ≤809. Fixiert ist nur die Kopfzeile (sticky, weiß, beim Scrollen 1-px-`--line`-Unterkante) — keine schwebenden CTAs, keine eingeblendeten Banner.

**Ecken** — 10 px auf Bildern, Kacheln, Videocontainern, Chips. 999 px auf Pill-Buttons und Filter-Tags. 0 px auf Tabellen, Trennlinien und Annotationsboxen.

**Karten** sehen so aus: 4:3-Bild mit 10 px Radius, darunter Titel und Jahr, darunter max. 3 Skill-Chips. **Kein** Rahmen um die ganze Kachel, **kein** Ruheschatten, keine Innenpolsterung — die Kachel ist das Bild. Abgrenzung von Flächen läuft über `--line` oder `--surface`, nicht über Schatten.

**Schatten** — standardmäßig keiner. Der einzige erlaubte Schatten ist der Hover-Zustand einer Projektkachel: `0 1px 2px rgba(0,0,0,.06), 0 6px 16px rgba(0,0,0,.06)`. Keine Innenschatten, keine Glows.

**Rahmen** — 1 px `--line`. Nie 2 px, nie farbig. Ausnahme: Fokusring 2 px `--accent` mit 2 px Offset — Pflicht, nie entfernen.

**Animation** — praktisch keine. Genau eine Bewegung im System: Projektkachel-Hover, Schatten ein + Bildzoom `scale(1.02)` in **200 ms ease-out**. Keine Scroll-Reveals, kein Parallax, keine Bounces, keine Stagger-Effekte, keine Seitenübergänge. Video nur, wenn Bewegung die Aussage trägt: max. 20 s, stumm, Loop, kein Autoplay mit Ton, Poster-Frame gesetzt.

**Hover-Zustände** — Button primär: Fläche `--ink-body` → `#000`. Button sekundär: transparent → `--surface`. Kachel: Schatten + Bildzoom. Nav/Links: Akzentunterstrich beim aktiven Element, Textfarbe → `--ink`. Keine Opazitätswechsel, keine Farbwechsel im Text.

**Press-Zustände** — kein Shrink, kein Skalieren. Der Zustand wird über dieselbe dunklere Fläche wie Hover angezeigt; Aktivität ist ohnehin durch den Fokusring sichtbar. Deaktiviert: `--ink-muted` Text, `--line` Fläche, `cursor: not-allowed`.

**Transparenz und Blur** — nicht verwendet. Keine Glassmorphism-Kopfzeile, kein Backdrop-Filter, keine halbtransparenten Overlays. Die sticky Nav ist deckend weiß.

**Hintergründe** — weiß als Grundfläche, `--surface`/`--surface-2` für alternierende Sektionen und den Footer. Keine Bilder als Sektionshintergrund, keine Muster, keine Texturen, kein Grain, keine handgezeichneten Illustrationen. Max. zwei Hintergrundtöne pro Screen.

**Bildwelt** — dokumentarisch, nicht gestylt: gleichmäßiges diffuses Licht, aufgeräumter Hintergrund, Objekt scharf, keine Blitzschatten; über alle Projekte dieselbe Lichtstimmung. Renderings auf einheitlichem `#FAFAFA` oder transparent, isometrisch für Übersicht, orthogonal für Maße, gleiche Materialdarstellung, keine Studio-HDRI-Spiegelungen, keine Bodenreflexionen. Farbstimmung damit neutral-kühl bis metallisch — der Akzent ist die einzige gesättigte Farbe, die nicht aus dem Objekt kommt. Formate: Kachel 4:3, Hero 16:9 oder 3:2 (ein Format pro Projekt durchziehen), Detail 4:3, Porträt 1:1 in 800 × 800. Durchgehend `object-fit: cover`. Export JPEG Q80 für Fotos, PNG für Renderings, längste Kante max. 2400 px, < 500 kB. **Bildfläche ≥ 60 % der Scrollhöhe** einer Projektseite; kein Textblock länger als 5 Zeilen ohne Visual. Pflichtmix pro Projekt: 1 Hero (fertiges System) + mind. 1 CAD/Rendering + mind. 1 Prozessbild (Aufbau, Fertigung, Messung, Fehlversuch) + wenn vorhanden 1 Ergebnisgrafik. Reihenfolge immer Gesamtsystem → Subsystem → Detail.

**Annotationen** (das eigentliche Markenmotiv, §7.4) — 2-px-Linien und -Pfeile in `--accent`, ohne Schatten und Umrandung. Labeltext Mono 13 px, `--ink-body` auf weißer Fläche mit 4 px Innenabstand, oder weiß direkt auf dunklem Bildbereich. Labels stehen **außerhalb** des Objekts und werden mit einer Linie ans Ziel geführt, nie quer über das Bauteil. Maße mit Einheit, max. 5 Annotationen pro Bild. Ausschnittvergrößerungen als 10-px-Radius-Kasten neben dem Gesamtbild, verbunden mit zwei Akzentlinien.

**Plots** — Achsen und Beschriftung `--ink-muted` 13 px. Reihe 1 `#000` durchgezogen, Reihe 2 `#E8500F` durchgezogen, Reihe 3 `#767676` gestrichelt; mehr als drei Reihen werden aufgeteilt. Gitternetz nur horizontal, `#EDEDED`, 1 px. Kein Rahmen um den Plot. Direktbeschriftung an der Kurve statt Legende. Achsen mit Einheit, Nullpunkt zeigen oder Bruch kennzeichnen.

**Dunkelmodus** — optional, niedrige Priorität. Vorbereitet als `:root[data-theme="dark"]`: `--bg #171717`, `--ink #FAFAFA`, Akzent unverändert.

---

## Motion

Ergänzung zu §7 („Animation — praktisch keine"). Die Grundhaltung bleibt: Bewegung erklärt Herkunft und Ziel, sonst findet sie nicht statt. Kein Parallax, keine Scroll-Reveals mit Staffelung, keine Bewegung, die das Lesen verzögert, keine Animationsbibliothek — CSS und die View Transitions API reichen.

**Eine Kurve für alles:** `cubic-bezier(0.32, 0.72, 0, 1)`. Federartig, mit minimalem Auslauf am Ende. Lineares oder `ease-in-out` wird nicht verwendet.

**Eine Dauer je Ebene:**

| Ebene | Dauer | Verzögerung |
| --- | --- | --- |
| Seitenübergang (geteilte Elemente, Wurzel-Fade) | 460 ms | 0 |
| Textinhalt der Zielseite (`::view-transition-new(root)`) | 460 ms | 100 ms |
| Scroll-Reveal einer Sektion | 460 ms | 0 |
| Bild-Einblendung nach dem Laden | 400 ms | 0 |
| Hover- und Fokuszustände | 200 ms | 0 |

Nichts über 500 ms — darüber wirkt es zäh statt ruhig.

**Geteilte Elemente.** Der Seitenwechsel von der Projektkachel zur Projektseite ist ein dokumentübergreifender View Transition (`@view-transition { navigation: auto }`), keine Neuzeichnung. Zwei Namen sind vergeben und dürfen pro Dokument nur einmal vorkommen:

- `vt-media` — Kachelbild ↔ Hero. Bildpaar mit `isolation: none`, `animation: none`, `object-fit: cover`, damit das Seitenverhältnis erhalten bleibt und nichts verzerrt.
- `vt-title` — Kacheltitel (H3) ↔ Seitentitel (H1), `object-fit: contain`, `object-position: left top`.

Die Namen werden zur Laufzeit gesetzt (`pageswap` beim Verlassen, `pagereveal` beim Ankommen), nie statisch im Markup — sonst kollidieren mehrere Kacheln.

**Die übrigen Kacheln treten zurück:** `::view-transition-old(root)` blendet auf `opacity: 0` und `scale(0.97)`. Die Zielseite kommt mit 12 px Versatz von unten. Rückwärts läuft dieselbe Bewegung, zurück an genau die Rasterposition.

**Kachel-Hover:** 4 px Anheben, Rahmen auf `--accent`, Schatten aus §7, 200 ms. Das ist die einzige Stelle, an der ein Rahmen die Akzentfarbe trägt.

**Fallback und Barrierefreiheit sind Teil der Regel, nicht Zugabe.** Ohne Unterstützung der API wird ohne Animation umgeschaltet — die Navigation bleibt echte Navigation, URLs bleiben verlinkbar, die Zurück-Taste funktioniert. Bei `prefers-reduced-motion: reduce` entfallen geteilte Elemente und Scroll-Reveals; es bleibt eine 150-ms-Blende. Nach jedem Übergang landet der Tastaturfokus auf dem H1 der neuen Ansicht (`tabindex="-1"`, `preventScroll`).

**Implementierung:** `motion.js` im Projektwurzelverzeichnis, in jedem Dokument über `<helmet>` geladen; die zugehörigen `::view-transition-*`-Regeln und `@keyframes` stehen im selben `<helmet><style>`.

---

## Iconography

**Es gibt kein Icon-System — und das ist eine Entscheidung, keine Lücke.** Die Guidelines definieren keinen Icon-Satz, keine Icon-Font und kein Sprite. Die Referenzseite arbeitet ebenfalls ohne Icons; Bedeutung tragen Bilder, Typografie und Weißraum.

Konkret:

- **Keine dekorativen Icons** in Nav, Buttons oder Kacheln. Buttons tragen Text, kein Pfeil-Suffix, kein Icon davor.
- **Keine Icon-Font, kein Sprite, keine PNG-Icons** in den Quellen — daher auch keine im `assets/`-Ordner. Es wurde bewusst **kein** CDN-Satz (Lucide, Heroicons o. ä.) eingezogen: ein fremder Icon-Satz wäre eine Erfindung, die die Marke nicht hat.
- **Keine Emoji.** Nirgends — nicht in Copy, nicht in UI, nicht auf Slides.
- **Keine Unicode-Piktogramme** als Icon-Ersatz (kein ↗, →, ✓ als Zierde). Erlaubt sind Unicode-Zeichen nur als *Inhalt*: Mittelpunkt `·` als Trenner in Meta-Zeilen, `±` und `°` und `ø` in technischen Angaben, Gedankenstrich `—`.
- **Das nächste an einem Icon** ist der 2-px-Akzentstrich: als Unterstrich unter dem aktiven Nav-Eintrag, als Annotationslinie im Bild, als Trennlinie unter CV-Sektionsüberschriften. Ein Strich, drei Bedeutungen — mehr Zeichensprache braucht das System nicht.
- **Sollte später doch ein Icon nötig werden** (z. B. LinkedIn im Footer), gilt: einfarbig `--ink-body`, 1,5–2 px Strichstärke passend zum Annotationsstrich, 20 px Kantenlänge, kein Fill, keine Rundung — und als echte SVG-Datei in `assets/` ablegen, nicht inline erfinden.

**Logo:** Es existiert keins und es ist keins vorgesehen — „Ein Bildzeichen für eine Einzelperson wirkt in Bewerbungen schnell aufgesetzt. Die Marke ist der Name." Wo eine Marke stehen müsste, steht die Wortmarke `Julian Buscher` in Archivo 600; das Monogramm `JB` (weiß auf `--ink-body`, Radius 10 px) dient nur als Favicon, Avatar und Deckblatt-Ecke. `assets/` enthält daher keine Logodatei — es wurde bewusst keine gezeichnet.

---

## Index

### Root

| Datei | Inhalt |
| --- | --- |
| `styles.css` | Einstiegspunkt, nur `@import`-Zeilen |
| `readme.md` | dieses Dokument |
| `SKILL.md` | Agent-Skill-Definition für die Nutzung außerhalb dieses Projekts |
| `thumbnail.html` | Kachel des Design Systems |
| `uploads/brand-guidelines-julian-buscher.md` | Originalquelle |

### Tokens (`tokens/`)

`fonts.css` (Webfont-Einbindung) · `colors.css` · `typography.css` · `spacing.css` · `form.css` (Radius, Rahmen, Schatten, Bewegung) · `layout.css` · `base.css` (Elementdefaults)

### Komponenten (`components/`)

**core/** — `Button`, `SkillChip`, `Wordmark`, `Monogram`, `ImagePlaceholder` **navigation/** — `SiteNav`, `FilterBar`, `SiteFooter`, `NextProjectLink` **content/** — `ProjectCard`, `Lead`, `MetaRow`, `Figure`, `Annotation`, `Section`

Jede Komponente hat `<Name>.jsx`, `<Name>.d.ts` (Props + Adherence-Regeln) und `<Name>.prompt.md` (Wann/Wie + Beispiel). Pro Ordner eine `*.card.html` für die Design-System-Ansicht.

**Intentional additions** — die Guidelines listen in §8 nur Navigation, Projektkachel, Skill-Chip, Button (primär/sekundär), Meta-Zeile, Bildunterschrift und Footer. Zusätzlich gebaut, jeweils weil eine andere Sektion sie explizit vorschreibt:

- `Wordmark`, `Monogram` — §3 definiert beide vollständig (Weight, Tracking, Radius, Mindestgrößen).
- `Annotation` — §7.4 definiert das Annotationssystem als verbindlich über Website, PDF und Slides.
- `Lead` — §9.2 macht den Outcome-Absatz zur eigenen Typrolle mit eigener Größe.
- `Section` — §6.3 legt Sektionsabstand und Textspaltenbreite fest; ohne Wrapper wird die Regel in jedem Screen neu getippt.
- `FilterBar` — §1.3 fordert Skill-Filterung ab 6 Projekten.
- `NextProjectLink` — §9.10 fordert Navigation zum nächsten Projekt.
- `ImagePlaceholder` — Notlösung: es lag kein Bildmaterial bei. Markiert die Fläche und benennt das fehlende Visual. Im Endzustand ersetzt ein echtes Bild mit Alt-Text den Platzhalter.
- `Figure` — implementiert die Bildunterschriftsregel aus §8 zusammen mit Radius/Ratio/Annotations-Container.

### UI Kits (`ui_kits/`)

- `portfolio/` — Portfolio-Website: Startseite mit Filter, volle Projektseite nach §9, About/Contact. `index.html` ist der klickbare Durchlauf.
- `pdf-mappe/` — PDF-Mappe 16:9: `cover.html` (Deckblatt) und `project-page.html` (verdichtete Projektseite).

### Templates (`templates/`)

Templates sind der Weg, die Website **selbst** weiter zu bearbeiten: alles darin ist statisches Markup — Überschriften, Absätze, Listenpunkte, Chips und Bilder lassen sich direkt im Editor anklicken, ändern, duplizieren und löschen, ohne Code anzufassen.

- `portfolio-website/PortfolioWebsite.dc.html` — **die Website.** Eine Seite: Intro, Projektraster (drei echte Projekte), ein ausgeklapptes Projekt mit Hero und Beitrag, der Lebenslauf als Abschnitt `#lebenslauf` (Bildungsweg, Praxis, Technikprojekte, Engagement, Skills), Kontakt, Footer. Neues Projekt = eine Kachel duplizieren und Text tauschen; neue CV-Zeile = eine Zeile duplizieren.
- `project-page/ProjectPage.dc.html` — eigenständige Projektseite in der festen §9-Reihenfolge, für Projekte, die eine ganze Seite verdienen.

### Assets (`assets/`)

- `fonts/` — Archivo 400/500/600, Fragment Mono 400 (WOFF2, self-hosted).
- `images/roboterarm-tile-4x3.png` — Kachelzuschnitt, 1200 × 900, auf `#FAFAFA`.
- `images/roboterarm-hero-16x9.png` — Herozuschnitt, 2000 × 1125, auf `#FAFAFA`.
- `images/roboterarm-front.png` — Original-Rendering, 1600 × 1200.
- Kein Logo und keine Icons — siehe Iconography.

### Specimen Cards (`guidelines/`)

Colors: Ink · Surfaces & Line · Accent · Plot series Type: Display & H2 · H3 & Lead · Body & Caption · Mono label · Weights Spacing: Scale · Rhythm in use · Containers Brand: Radius · Shadow & border · Wordmark · Annotation · Image formats

---

## Offene Punkte und Substitutionen

1. **Fonts erledigt.** Archivo 400/500/600 und Fragment Mono 400 liegen als WOFF2 in `assets/fonts/`, eingebunden über lokale `@font-face`-Regeln in `tokens/fonts.css` mit `font-display: swap`. Kein CDN mehr (§5.1, DSGVO).
2. **`Archivo Expanded` fehlt.** §5.1 nennt es als Gestaltungsmittel für Deckblatt und Start-H1, aber es liegt keine Fontdatei vor. Es gibt daher **kein** `--font-display-expanded`-Token — ein Token ohne Font wäre ein Versprechen, das das System nicht halten kann, und eine andere Familie einzusetzen wäre eine Erfindung. Sobald du `archivo-expanded-600.woff2` lieferst: nach `assets/fonts/` legen, `@font-face` in `tokens/fonts.css` ergänzen, Token in `tokens/typography.css` aktivieren. Bis dahin läuft alles auf Archivo 600.
3. **Ein echtes Rendering vorhanden**, der Rest ist Platzhalter. `assets/images/` enthält das Roboterarm-Rendering in zwei markenkonformen Zuschnitten (4:3-Kachel, 16:9-Hero), freigestellt auf `#FAFAFA` nach §7.2. Alle übrigen Bildflächen sind graue Platzhalter mit Mono-Label, das benennt, welches Visual dort hingehört. Es wurden keine Bilder generiert. Fehlend: Fotos vom Dosiersystem, KiCad-/Leiterplattenbilder, Prozessbilder, Porträt 1:1.
4. **Kein Logo, keine Icons** — bewusst nicht gezeichnet, siehe Iconography.
5. **Projektinhalte sind echt**, aus `uploads/JB - Lebenslauf - ATS.pdf` übernommen: Dosiersystem (Fill & Transfer CNC Robot), modularer Roboterarm, EMBL Fluid Controls. Offene Zahlen sind im Text als offen markiert statt erfunden — Reichweite/Traglast/Masse des Arms, Stückzahlen am EMBL, und Campus Tirol Motorsports steht im CV noch auf Platzhalter.
6. **Nicht gebaut:** LinkedIn-Banner/-Kacheln und Slide-Vorlagen — die Guidelines nennen Regeln, aber es lag kein Template bei. Das CV-Layout ist als Website-Abschnitt gebaut (siehe Templates), nicht als eigenes PDF-Dokument.
