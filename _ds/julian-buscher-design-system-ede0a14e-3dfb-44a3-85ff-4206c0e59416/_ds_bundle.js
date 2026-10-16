/* @ds-bundle: {"format":4,"namespace":"JulianBuscherDesignSystem_ede0a1","components":[{"name":"Annotation","sourcePath":"components/content/Annotation.jsx"},{"name":"Figure","sourcePath":"components/content/Figure.jsx"},{"name":"Lead","sourcePath":"components/content/Lead.jsx"},{"name":"MetaRow","sourcePath":"components/content/MetaRow.jsx"},{"name":"ProjectCard","sourcePath":"components/content/ProjectCard.jsx"},{"name":"Section","sourcePath":"components/content/Section.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"ImagePlaceholder","sourcePath":"components/core/ImagePlaceholder.jsx"},{"name":"Monogram","sourcePath":"components/core/Monogram.jsx"},{"name":"SkillChip","sourcePath":"components/core/SkillChip.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"FilterBar","sourcePath":"components/navigation/FilterBar.jsx"},{"name":"NextProjectLink","sourcePath":"components/navigation/NextProjectLink.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteNav","sourcePath":"components/navigation/SiteNav.jsx"}],"sourceHashes":{"components/content/Annotation.jsx":"8c2d72ebdbd6","components/content/Figure.jsx":"60b8b500fd86","components/content/Lead.jsx":"484fc8b1914f","components/content/MetaRow.jsx":"e116fe544f01","components/content/ProjectCard.jsx":"988b2b878dbb","components/content/Section.jsx":"90e4420f6a0d","components/core/Button.jsx":"89834495ec9f","components/core/ImagePlaceholder.jsx":"940e0d2b34bf","components/core/Monogram.jsx":"88b4e32374ea","components/core/SkillChip.jsx":"7db596f4bd3b","components/core/Wordmark.jsx":"53c98ac4e216","components/navigation/FilterBar.jsx":"36ed253741f4","components/navigation/NextProjectLink.jsx":"7a508c276b42","components/navigation/SiteFooter.jsx":"bd708f6210c3","components/navigation/SiteNav.jsx":"a027ab6e16c8","ui_kits/portfolio/AboutScreen.jsx":"26e53e9a97b2","ui_kits/portfolio/HomeScreen.jsx":"473868654711","ui_kits/portfolio/ProjectScreen.jsx":"fbdb297b182e","ui_kits/portfolio/data.js":"b6537376bbf6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.JulianBuscherDesignSystem_ede0a1 = window.JulianBuscherDesignSystem_ede0a1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Annotation.jsx
try { (() => {
/** Annotation über einem Visual (§7.4): 2-px-Akzentlinie zum Ziel, Label außerhalb des Objekts,
 *  Mono 13 px auf weißer Fläche. Max. 5 Annotationen pro Bild. Koordinaten in Prozent. */
function Annotation({
  label,
  x = 10,
  y = 10,
  targetX = 40,
  targetY = 40,
  onDark = false,
  style
}) {
  const dx = targetX - x;
  const dy = targetY - y;
  const length = Math.sqrt(dx * dx + dy * dy);
  const angle = Math.atan2(dy, dx) * 180 / Math.PI;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: `${x}%`,
      top: `${y}%`,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: `${length}%`,
      height: 2,
      background: "var(--annotation-line)",
      transform: `rotate(${angle}deg)`,
      transformOrigin: "0 50%"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "translate(-50%, -100%)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono)",
      lineHeight: "var(--lh-mono)",
      letterSpacing: "var(--ls-mono)",
      whiteSpace: "nowrap",
      padding: "var(--s-1)",
      borderRadius: "var(--radius-flat)",
      background: onDark ? "transparent" : "var(--annotation-label-bg)",
      color: onDark ? "#FFFFFF" : "var(--annotation-label-ink)"
    }
  }, label));
}
Object.assign(__ds_scope, { Annotation });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Annotation.jsx", error: String((e && e.message) || e) }); }

// components/content/Lead.jsx
try { (() => {
/** Outcome-Absatz (§9.2): der einzige Absatz, den viele Leser vollständig lesen. */
function Lead({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-lead)",
      lineHeight: "var(--lh-lead)",
      color: "var(--ink-body)",
      maxWidth: "var(--measure)",
      margin: 0,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Lead });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Lead.jsx", error: String((e && e.message) || e) }); }

// components/content/MetaRow.jsx
try { (() => {
/** Meta-Zeile Projektseite (§8): Label in Mono, Wert in H3-Größe. Desktop 4-spaltig. */
function MetaRow({
  items = [],
  columns = 4,
  style
}) {
  return /*#__PURE__*/React.createElement("dl", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      gap: "var(--s-4)",
      margin: 0,
      ...style
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.label
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono)",
      lineHeight: "var(--lh-mono)",
      letterSpacing: "var(--ls-mono)",
      color: "var(--ink-muted)",
      marginBottom: "var(--s-2)"
    }
  }, it.label), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      fontSize: "var(--fs-h3)",
      lineHeight: "var(--lh-h3)",
      letterSpacing: "var(--ls-h3)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--ink)"
    }
  }, it.value))));
}
Object.assign(__ds_scope, { MetaRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/MetaRow.jsx", error: String((e && e.message) || e) }); }

// components/content/Section.jsx
try { (() => {
/** Sektion einer Projektseite: 96-px-Abstand oben, optional H2 + Textspalte (§6.3, §9). */
function Section({
  title,
  tone = "page",
  children,
  wide = false,
  id,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      background: tone === "alt" ? "var(--surface-2)" : tone === "surface" ? "var(--surface)" : "transparent",
      paddingTop: "var(--gap-section)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "0 var(--page-margin)"
    }
  }, title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--fs-h2)",
      lineHeight: "var(--lh-h2)",
      letterSpacing: "var(--ls-h2)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--ink)",
      margin: "0 0 var(--gap-heading-text)",
      maxWidth: "var(--measure)"
    }
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: wide ? "none" : "var(--measure)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-3)"
    }
  }, children)));
}
Object.assign(__ds_scope, { Section });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Section.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  fontFamily: "var(--font-sans)",
  fontSize: "var(--fs-body)",
  fontWeight: "var(--fw-medium)",
  lineHeight: 1,
  letterSpacing: 0,
  padding: "var(--pad-button-y) var(--pad-button-x)",
  borderRadius: "var(--radius-pill)",
  display: "inline-flex",
  alignItems: "center",
  gap: "var(--s-2)",
  cursor: "pointer",
  textDecoration: "none",
  transition: "background var(--motion-duration) var(--motion-easing), color var(--motion-duration) var(--motion-easing)"
};
function Button({
  variant = "primary",
  href,
  onClick,
  disabled = false,
  type = "button",
  children,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const primary = {
    background: disabled ? "var(--line)" : hover ? "var(--ink)" : "var(--ink-body)",
    color: disabled ? "var(--text-disabled)" : "var(--text-on-dark)",
    border: "1px solid transparent"
  };
  const secondary = {
    background: disabled ? "transparent" : hover ? "var(--surface)" : "transparent",
    color: disabled ? "var(--text-disabled)" : "var(--ink-body)",
    border: "var(--border)"
  };
  const merged = {
    ...base,
    ...(variant === "secondary" ? secondary : primary),
    cursor: disabled ? "not-allowed" : "pointer",
    ...style
  };
  const handlers = disabled ? {} : {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick
  };
  if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: merged
  }, handlers), children);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    style: merged,
    disabled: disabled
  }, handlers), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/ImagePlaceholder.jsx
try { (() => {
/** Neutraler Platzhalter für fehlendes Bildmaterial. Ersetzt kein Foto — markiert die Fläche. */
function ImagePlaceholder({
  ratio = "4 / 3",
  label,
  radius = "var(--radius)",
  tone = "surface",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      width: "100%",
      background: tone === "render" ? "var(--surface-2)" : "var(--surface)",
      border: "var(--border)",
      borderRadius: radius,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono)",
      letterSpacing: "var(--ls-mono)",
      color: "var(--ink-muted)",
      padding: "0 var(--s-4)",
      textAlign: "center"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { ImagePlaceholder });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ImagePlaceholder.jsx", error: String((e && e.message) || e) }); }

// components/content/Figure.jsx
try { (() => {
/** Bild mit Bildunterschrift (§8). caption beschreibt, was zu sehen ist — nie den Fließtext wiederholen. */
function Figure({
  src,
  alt = "",
  caption,
  ratio = "4 / 3",
  tone = "surface",
  placeholderLabel = "image",
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: "var(--radius)",
      overflow: "hidden"
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "100%",
      aspectRatio: ratio,
      objectFit: "cover",
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement(__ds_scope.ImagePlaceholder, {
    ratio: ratio,
    tone: tone,
    label: placeholderLabel,
    radius: "var(--radius)"
  }), children), caption ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: "var(--gap-caption)",
      fontSize: "var(--fs-caption)",
      lineHeight: "var(--lh-caption)",
      color: "var(--text-caption)",
      maxWidth: "var(--measure)"
    }
  }, caption) : null);
}
Object.assign(__ds_scope, { Figure });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Figure.jsx", error: String((e && e.message) || e) }); }

// components/core/Monogram.jsx
try { (() => {
function Monogram({
  size = 40,
  initials = "JB",
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      background: "var(--ink-body)",
      color: "#FFFFFF",
      borderRadius: "var(--radius)",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-semibold)",
      fontSize: Math.round(size * 0.4),
      letterSpacing: "-0.01em",
      lineHeight: 1,
      paddingBottom: Math.max(1, Math.round(size * 0.02)),
      ...style
    }
  }, initials);
}
Object.assign(__ds_scope, { Monogram });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Monogram.jsx", error: String((e && e.message) || e) }); }

// components/core/SkillChip.jsx
try { (() => {
function SkillChip({
  children,
  onClick,
  active = false,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const interactive = typeof onClick === "function";
  return /*#__PURE__*/React.createElement("span", {
    role: interactive ? "button" : undefined,
    tabIndex: interactive ? 0 : undefined,
    onClick: onClick,
    onKeyDown: interactive ? e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick(e);
      }
    } : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono)",
      lineHeight: "var(--lh-mono)",
      letterSpacing: "var(--ls-mono)",
      color: active ? "var(--text-on-dark)" : "var(--ink-body)",
      background: active ? "var(--ink-body)" : interactive && hover ? "var(--bg)" : "var(--surface)",
      border: active ? "1px solid var(--ink-body)" : "var(--border)",
      borderRadius: "var(--radius-pill)",
      padding: "var(--pad-chip-y) var(--pad-chip-x)",
      display: "inline-block",
      whiteSpace: "nowrap",
      cursor: interactive ? "pointer" : "default",
      transition: "background var(--motion-duration) var(--motion-easing)",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { SkillChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SkillChip.jsx", error: String((e && e.message) || e) }); }

// components/content/ProjectCard.jsx
try { (() => {
function ProjectCard({
  title,
  year,
  skills = [],
  image,
  imageLabel = "4:3 project image",
  onClick,
  href = "#",
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick ? e => {
      e.preventDefault();
      onClick();
    } : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "block",
      textDecoration: "none",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius)",
      overflow: "hidden",
      boxShadow: hover ? "var(--shadow-hover)" : "none",
      transition: "box-shadow var(--motion-duration) var(--motion-easing)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      transform: hover ? "scale(var(--hover-image-scale))" : "scale(1)",
      transition: "transform var(--motion-duration) var(--motion-easing)"
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: "100%",
      aspectRatio: "var(--aspect-tile)",
      objectFit: "cover",
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement(__ds_scope.ImagePlaceholder, {
    ratio: "4 / 3",
    label: imageLabel,
    radius: "0",
    style: {
      border: "none"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--s-3)",
      display: "flex",
      alignItems: "baseline",
      gap: "var(--s-3)",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--fs-h3)",
      lineHeight: "var(--lh-h3)",
      letterSpacing: "var(--ls-h3)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--ink)",
      margin: 0
    }
  }, title), year ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body)",
      color: "var(--ink-muted)",
      whiteSpace: "nowrap"
    }
  }, year) : null), skills.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--s-3)",
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--s-2)"
    }
  }, skills.slice(0, 3).map(s => /*#__PURE__*/React.createElement(__ds_scope.SkillChip, {
    key: s
  }, s))) : null);
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
function Wordmark({
  name = "Julian Buscher",
  subtitle,
  size = 20,
  inverse = false,
  href,
  align = "left",
  style
}) {
  const content = /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      textAlign: align
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "-0.01em",
      fontSize: size,
      lineHeight: 1.1,
      color: inverse ? "#FFFFFF" : "var(--ink)",
      whiteSpace: "nowrap"
    }
  }, name), subtitle ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: "var(--s-2)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body)",
      fontWeight: "var(--fw-regular)",
      color: inverse ? "#D4D4D4" : "var(--ink-muted)"
    }
  }, subtitle) : null);
  if (href) return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      textDecoration: "none",
      ...style
    }
  }, content);
  return /*#__PURE__*/React.createElement("span", {
    style: style
  }, content);
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/navigation/FilterBar.jsx
try { (() => {
/** Filterleiste ab 6 Projekten (§1.3). Ein aktiver Filter zur Zeit. */
function FilterBar({
  tags = [],
  value = "All",
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "group",
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--s-2)",
      ...style
    }
  }, ["All", ...tags].map(tag => /*#__PURE__*/React.createElement(__ds_scope.SkillChip, {
    key: tag,
    active: value === tag,
    onClick: () => onChange && onChange(tag)
  }, tag)));
}
Object.assign(__ds_scope, { FilterBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/FilterBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NextProjectLink.jsx
try { (() => {
/** Navigation zum nächsten Projekt (§9.10). */
function NextProjectLink({
  title,
  year,
  onClick,
  href = "#",
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick ? e => {
      e.preventDefault();
      onClick();
    } : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: "var(--s-4)",
      padding: "var(--s-5) 0",
      borderTop: "var(--border)",
      textDecoration: "none",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono)",
      letterSpacing: "var(--ls-mono)",
      color: "var(--ink-muted)",
      marginBottom: "var(--s-2)"
    }
  }, "Next project"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--fs-h3)",
      lineHeight: "var(--lh-h3)",
      letterSpacing: "var(--ls-h3)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--ink)",
      borderBottom: hover ? "2px solid var(--accent)" : "2px solid transparent"
    }
  }, title)), year ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body)",
      color: "var(--ink-muted)"
    }
  }, year) : null);
}
Object.assign(__ds_scope, { NextProjectLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NextProjectLink.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function SiteFooter({
  email = "jul.buscher@gmail.com",
  links = [{
    label: "LinkedIn",
    href: "#"
  }, {
    label: "Download CV",
    href: "#"
  }],
  year = new Date().getFullYear(),
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface)",
      marginTop: "var(--gap-above-footer)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "var(--pad-footer) var(--page-margin)",
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--s-6)",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 20,
    subtitle: "Mechatronik \xB7 Universit\xE4t Innsbruck"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-2)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:" + email,
    style: {
      fontSize: "var(--fs-body)",
      color: "var(--ink-body)",
      textDecoration: "none"
    }
  }, email), links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    style: {
      fontSize: "var(--fs-body)",
      color: "var(--ink-body)",
      textDecoration: "none"
    }
  }, l.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono)",
      letterSpacing: "var(--ls-mono)",
      color: "var(--ink-muted)"
    }
  }, "\xA9 ", year, " Julian Buscher")));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteNav.jsx
try { (() => {
function SiteNav({
  items = [{
    label: "Projects",
    href: "#projects"
  }, {
    label: "About",
    href: "#about"
  }, {
    label: "Contact",
    href: "#contact"
  }],
  active,
  onNavigate,
  scrolled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 10,
      background: "var(--bg)",
      borderBottom: scrolled ? "var(--border)" : "1px solid transparent",
      ...style
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "var(--s-4) var(--page-margin)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--s-5)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 20,
    href: "#home"
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "flex",
      gap: "var(--s-4)",
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, items.map(item => {
    const isActive = active === item.label;
    return /*#__PURE__*/React.createElement("li", {
      key: item.label
    }, /*#__PURE__*/React.createElement("a", {
      href: item.href,
      onClick: onNavigate ? e => {
        e.preventDefault();
        onNavigate(item);
      } : undefined,
      style: {
        fontSize: "var(--fs-body)",
        fontWeight: "var(--fw-medium)",
        color: isActive ? "var(--ink)" : "var(--ink-body)",
        textDecoration: "none",
        paddingBottom: "var(--s-1)",
        borderBottom: isActive ? "2px solid var(--accent)" : "2px solid transparent"
      }
    }, item.label));
  }))));
}
Object.assign(__ds_scope, { SiteNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/AboutScreen.jsx
try { (() => {
const DSA = window.JulianBuscherDesignSystem_ede0a1;
function AboutScreen() {
  const {
    Lead,
    Figure,
    Section,
    Button,
    MetaRow
  } = DSA;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "var(--s-8) var(--page-margin) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0, 1fr) 360px",
      gap: "var(--s-7)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      marginBottom: "var(--s-4)"
    }
  }, "About"), /*#__PURE__*/React.createElement(Lead, null, "Mechatronik an der Universit\xE4t Innsbruck, seit 10/2025. Ich konstruiere parametrisch in Fusion 360, entwerfe Leiterplatten in KiCad, fertige an CNC-Fr\xE4se und FDM-Drucker und messe nach, ob das Ergebnis der Auslegung entspricht."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--s-4)"
    }
  }, "Am liebsten arbeite ich an Aufbauten, bei denen Mechanik, Elektronik und Firmware zusammenkommen \u2014 Dosiertechnik, Laborsysteme, Gelenkarme. Im Praktikum am EMBL habe ich Baugruppen von der Anforderung bis zur Inbetriebnahme verantwortet."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--s-3)",
      marginTop: "var(--s-5)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, null, "Download CV"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    href: "#contact"
  }, "Contact"))), /*#__PURE__*/React.createElement(Figure, {
    ratio: "1 / 1",
    placeholderLabel: "Portr\xE4t 1:1 \u2014 800 \xD7 800 px",
    caption: "Portr\xE4t, neutraler Hintergrund, Oberk\xF6rper."
  }))), /*#__PURE__*/React.createElement(Section, {
    title: "Werkzeuge und Verfahren",
    wide: true
  }, /*#__PURE__*/React.createElement(MetaRow, {
    items: [{
      label: "CAD",
      value: "Fusion 360, Rhino"
    }, {
      label: "Elektronik",
      value: "KiCad, Arduino, Löten"
    }, {
      label: "Fertigung",
      value: "CNC-Fräsen, FDM"
    }, {
      label: "Software",
      value: "C/C++, Python, G-Code"
    }]
  })), /*#__PURE__*/React.createElement(Section, {
    title: "Contact",
    id: "contact"
  }, /*#__PURE__*/React.createElement("p", null, "Am schnellsten per Mail. F\xFCr Bewerbungen bekommst du eine PDF-Mappe mit den drei Projekten, die zur Stelle passen."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    href: "mailto:jul.buscher@gmail.com"
  }, "jul.buscher@gmail.com"))));
}
window.AboutScreen = AboutScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/AboutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/HomeScreen.jsx
try { (() => {
const DS = window.JulianBuscherDesignSystem_ede0a1;
function HomeScreen({
  onOpen
}) {
  const {
    ProjectCard,
    FilterBar,
    Lead
  } = DS;
  const {
    projects,
    allSkills
  } = window.PortfolioData;
  const [filter, setFilter] = React.useState("All");
  const shown = filter === "All" ? projects : projects.filter(p => p.skills.includes(filter));
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "var(--s-8) var(--page-margin) 0"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      maxWidth: 900,
      marginBottom: "var(--s-3)"
    }
  }, "Ich baue Sachen fertig \u2014 vom CAD bis zum funktionierenden Aufbau."), /*#__PURE__*/React.createElement(Lead, null, "Mechatronik an der Universit\xE4t Innsbruck. Schwerpunkt Konstruktion, Fertigung und Automatisierung realer Hardware \u2014 vom parametrischen CAD \xFCber die eigene Leiterplatte bis zur kalibrierten Messreihe.")), /*#__PURE__*/React.createElement("section", {
    id: "projects",
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "var(--gap-section) var(--page-margin) 0"
    }
  }, /*#__PURE__*/React.createElement(FilterBar, {
    tags: allSkills,
    value: filter,
    onChange: setFilter,
    style: {
      marginBottom: "var(--s-5)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "var(--gap-grid)"
    }
  }, shown.map(p => /*#__PURE__*/React.createElement(ProjectCard, {
    key: p.id,
    title: p.title,
    year: p.year,
    skills: p.skills,
    image: p.tileImage,
    imageLabel: p.tileLabel,
    onClick: () => onOpen(p.id)
  }))), shown.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--ink-muted)",
      marginTop: "var(--s-5)"
    }
  }, "Kein Projekt mit diesem Skill.") : null));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/ProjectScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DSP = window.JulianBuscherDesignSystem_ede0a1;
function ProjectScreen({
  project,
  next,
  onOpen,
  onBack
}) {
  const {
    Lead,
    MetaRow,
    Figure,
    Annotation,
    Section,
    SkillChip,
    NextProjectLink,
    Button
  } = DSP;
  const bullets = {
    margin: 0,
    paddingLeft: "1.1em",
    display: "grid",
    gap: "var(--s-2)",
    maxWidth: "var(--measure)",
    color: "var(--ink-body)"
  };
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "var(--s-6) var(--page-margin) 0"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onBack
  }, "Back to projects")), /*#__PURE__*/React.createElement("header", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "var(--s-5) var(--page-margin) 0"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      maxWidth: 920,
      marginBottom: "var(--s-4)"
    }
  }, project.title), /*#__PURE__*/React.createElement(Lead, null, project.lead), /*#__PURE__*/React.createElement(MetaRow, {
    items: project.meta,
    style: {
      marginTop: "var(--s-6)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--s-4)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono)",
      letterSpacing: "var(--ls-mono)",
      color: "var(--ink-muted)"
    }
  }, project.course)), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--bleed)",
      margin: "var(--gap-section) auto 0",
      padding: "0 var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement(Figure, {
    ratio: "16 / 9",
    src: project.heroImage,
    alt: project.heroAlt,
    placeholderLabel: project.hero && project.hero.label,
    caption: project.heroCaption || project.hero && project.hero.caption
  })), /*#__PURE__*/React.createElement(Section, {
    title: "Motivation & Anforderungen"
  }, project.motivation.map((t, i) => /*#__PURE__*/React.createElement("p", {
    key: i
  }, t))), /*#__PURE__*/React.createElement(Section, {
    title: "Mein Beitrag"
  }, /*#__PURE__*/React.createElement("ul", {
    style: bullets
  }, project.contribution.map(t => /*#__PURE__*/React.createElement("li", {
    key: t
  }, t))), project.contributionTeam ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--ink-muted)"
    }
  }, project.contributionTeam) : null), /*#__PURE__*/React.createElement(Section, {
    title: "Technische Umsetzung",
    wide: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "var(--gap-grid)"
    }
  }, project.visuals.map(v => /*#__PURE__*/React.createElement(Figure, {
    key: v.label,
    ratio: v.ratio,
    tone: v.tone,
    placeholderLabel: v.label,
    caption: v.caption
  }, (v.annotations || []).map(a => /*#__PURE__*/React.createElement(Annotation, _extends({
    key: a.label
  }, a))))))), /*#__PURE__*/React.createElement(Section, {
    title: "Ergebnis"
  }, project.result.map((t, i) => /*#__PURE__*/React.createElement("p", {
    key: i
  }, t))), /*#__PURE__*/React.createElement(Section, {
    title: "Was ich mitgenommen habe"
  }, /*#__PURE__*/React.createElement("p", null, project.learned)), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "var(--gap-section) var(--page-margin) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--s-2)",
      marginBottom: "var(--s-6)"
    }
  }, project.skills.map(s => /*#__PURE__*/React.createElement(SkillChip, {
    key: s
  }, s))), /*#__PURE__*/React.createElement(NextProjectLink, {
    title: next.title,
    year: next.year,
    onClick: () => onOpen(next.id)
  })));
}
window.ProjectScreen = ProjectScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/ProjectScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/data.js
try { (() => {
(() => {
  const projects = [{
    id: "cnc",
    title: "Fill & Transfer CNC Robot",
    year: "2026",
    skills: ["Automatisierung", "Konstruktion", "Messtechnik"],
    tileLabel: "4:3 — Dosiersystem auf der umgebauten 3018-Fräse",
    lead: "Umbau einer 3018-CNC-Fräse zum Dosiersystem für 96 Positionen im 9-mm-Raster, ausgelegt auf ein Fehlerbudget von ± 2 mm. Ich habe den Dosieradapter parametrisch konstruiert, die Steuerung von Zeit- auf Schrittsteuerung umgestellt und das Fördervolumen gravimetrisch kalibriert.",
    meta: [{
      label: "Rolle",
      value: "Konstruktion, Steuerung"
    }, {
      label: "Zeitraum",
      value: "08/2026 – 09/2026"
    }, {
      label: "Kontext",
      value: "EMBL Heidelberg"
    }, {
      label: "Werkzeuge",
      value: "Fusion 360, GRBL"
    }],
    course: "Praktikum Fluid Controls · EMBL Headquarters",
    hero: {
      label: "Hero 16:9 — Dosiersystem im Betrieb",
      caption: "Umgebaute 3018-Fräse mit Dosieradapter über der 96er-Platte."
    },
    motivation: ["Flüssigkeiten mussten reproduzierbar auf 96 Positionen im 9-mm-Raster verteilt werden. Kommerzielle Pipettierroboter waren für den Versuchsaufbau nicht verfügbar.", "Randbedingungen: Positioniergenauigkeit im Fehlerbudget von ± 2 mm, Bauraum der 3018-Fräse, Adapter im FDM-Verfahren druckbar."],
    contribution: ["3018-CNC-Fräse eigenständig zum Dosiersystem umgebaut", "Dosieradapter parametrisch in Fusion 360 über 8 Iterationen gegen Bauraum- und Druckbarkeitsgrenzen konstruiert", "Dosierung von Zeit- auf Schrittsteuerung umgestellt", "Fördervolumen gravimetrisch kalibriert"],
    visuals: [{
      ratio: "4 / 3",
      tone: "render",
      label: "CAD — Dosieradapter, Iteration 8",
      caption: "Adapter am Spindelhalter; Wandstärken und Überhänge auf FDM ausgelegt.",
      annotations: [{
        label: "Rasterabstand 9 mm",
        x: 16,
        y: 22,
        targetX: 46,
        targetY: 48
      }]
    }, {
      ratio: "4 / 3",
      tone: "surface",
      label: "Prozessbild — gravimetrische Kalibrierung",
      caption: "Fördervolumen über Waage gegen Schrittzahl kalibriert."
    }],
    result: ["Positioniergenauigkeit innerhalb des Fehlerbudgets von ± 2 mm über alle 96 Positionen.", "Die Zeitsteuerung streute mit dem Netzdruck; erst die Schrittsteuerung machte das Fördervolumen reproduzierbar."],
    learned: "Volumen über Zeit zu steuern ist bequem und ungenau. Ich lege Dosierung jetzt von Anfang an auf eine zählbare Größe aus."
  }, {
    id: "arm",
    title: "Modularer Roboterarm mit vier Gelenken und Greifer",
    year: "2026",
    skills: ["CAD", "Konstruktion", "Kinematik"],
    tileImage: "../../assets/images/roboterarm-tile-4x3.png",
    tileAlt: "Modularer Roboterarm mit Greifer, Rendering von vorn",
    lead: "Modularer Roboterarm mit vier Gelenken und Zweifinger-Greifer, komplett parametrisch in Fusion 360 konstruiert. Ich habe alle Komponenten entworfen und zu einer vollständigen Baugruppe zusammengeführt, um Kinematik und mechanischen Aufbau zu untersuchen.",
    meta: [{
      label: "Rolle",
      value: "Konstruktion, CAD"
    }, {
      label: "Zeitraum",
      value: "02/2026 – 03/2026"
    }, {
      label: "Team",
      value: "Einzelarbeit"
    }, {
      label: "Werkzeuge",
      value: "Fusion 360"
    }],
    course: "Eigenprojekt",
    heroImage: "../../assets/images/roboterarm-hero-16x9.png",
    heroAlt: "Roboterarm-Baugruppe, Rendering von vorn",
    heroCaption: "Vollständiges Baugruppenmodell: Sockel, vier Gelenke und Zweifinger-Greifer.",
    motivation: ["Ziel war eine Baugruppe, an der sich Kinematik und Arbeitsraum eines Gelenkarms untersuchen lassen — ohne fertige Bibliotheksteile, damit jede Schnittstelle selbst definiert ist.", "Randbedingung: alle Bauteile fertigungsgerecht für FDM, Greifer als austauschbares Modul am Handgelenksflansch."],
    contribution: ["Alle Baugruppen parametrisch konstruiert: Sockel, Schulter, Ober- und Unterarm, Handgelenk", "Zweifinger-Greifer als eigenständiges Modul am Flansch ausgelegt", "Gesamtbaugruppe mit Gelenkbeziehungen aufgebaut und den Arbeitsraum über die Gelenkgrenzen geprüft", "Bauteile fertigungsgerecht für FDM ausgelegt — Wandstärken, Überhänge, Lagersitze"],
    visuals: [{
      ratio: "4 / 3",
      tone: "render",
      label: "CAD — Explosionsdarstellung Handgelenk und Greifer",
      caption: "Flanschschnittstelle: der Greifer ist ohne Änderung am Arm tauschbar."
    }, {
      ratio: "4 / 3",
      tone: "render",
      label: "CAD — Arbeitsraum über die Gelenkgrenzen",
      caption: "Grenzstellungen der vier Gelenke, überlagert dargestellt."
    }],
    result: ["Vollständiges Baugruppenmodell mit definierten Gelenkbeziehungen; Kinematik und Arbeitsraum im CAD prüfbar.", "Offen: Reichweite, Traglast, Gelenkwinkel und Gesamtmasse als Zahlen — sie ersetzen diesen Absatz, sobald sie vorliegen."],
    learned: "Der Flansch war die wichtigste Entscheidung: eine sauber definierte Schnittstelle macht den Greifer austauschbar und die Baugruppe erweiterbar."
  }, {
    id: "embl",
    title: "Laborsysteme am EMBL: Mechanik, Elektronik und Firmware in einer Hand",
    year: "2026",
    skills: ["Elektronik", "Firmware", "Inbetriebnahme"],
    tileLabel: "4:3 — bestückte Leiterplatte, KiCad-Entwurf daneben",
    lead: "Komponenten für fluidtechnische und elektronische Laborsysteme, eigenständig entwickelt und gefertigt — von der Anforderung bis zur Inbetriebnahme. Ich habe Mechanik, Elektronik, Firmware und Steuerungssoftware verantwortet und mehrere Leiterplatten in KiCad entworfen, bestückt und gelötet.",
    meta: [{
      label: "Rolle",
      value: "Entwicklung, Fertigung"
    }, {
      label: "Zeitraum",
      value: "08/2026 – 09/2026"
    }, {
      label: "Kontext",
      value: "Praktikum Fluid Controls"
    }, {
      label: "Werkzeuge",
      value: "KiCad, C/C++, Fusion 360"
    }],
    course: "EMBL Headquarters · Heidelberg",
    hero: {
      label: "Hero 16:9 — Laborsystem am Arbeitsplatz",
      caption: "Aufbau bei der Inbetriebnahme, Steuerung über eigene Leiterplatte."
    },
    motivation: ["Die Laborsysteme brauchten Komponenten, die es nicht von der Stange gab: Fluidik, Ansteuerung und Bedienung mussten zusammenpassen.", "Randbedingung: jede Baugruppe von der Anforderung bis zur Inbetriebnahme in einer Hand — Mechanik, Elektronik, Firmware und Steuerungssoftware."],
    contribution: ["Komponenten für fluidtechnische und elektronische Laborsysteme entwickelt und gefertigt", "Mehrere Leiterplatten in KiCad entworfen, bestückt und gelötet", "Firmware und Steuerungssoftware für die Ansteuerung geschrieben", "Aufbauten in Betrieb genommen und gegen die Anforderung geprüft"],
    visuals: [{
      ratio: "4 / 3",
      tone: "surface",
      label: "Prozessbild — Bestücken und Löten",
      caption: "Bestückung der Ansteuerplatine, Bauteile von Hand gesetzt.",
      annotations: [{
        label: "Treiberstufe",
        x: 58,
        y: 22,
        targetX: 44,
        targetY: 46
      }]
    }, {
      ratio: "4 / 3",
      tone: "render",
      label: "KiCad — Layout der Ansteuerplatine",
      caption: "Zweilagiges Layout, Leistungs- und Signalpfade getrennt geführt."
    }],
    result: ["Mehrere Baugruppen bis zur Inbetriebnahme gebracht, jeweils mit eigener Leiterplatte und Firmware.", "Offen: Stückzahlen und Messwerte pro Baugruppe — sobald du sie nachtragen kannst, gehören sie hierhin."],
    learned: "Wenn Mechanik, Elektronik und Firmware in einer Hand liegen, entscheidet die Reihenfolge: erst die Schnittstellen festlegen, dann parallel bauen."
  }];
  const allSkills = ["Konstruktion", "CAD", "Automatisierung", "Elektronik", "Firmware", "Kinematik", "Messtechnik", "Inbetriebnahme"];
  window.PortfolioData = {
    projects,
    allSkills
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Annotation = __ds_scope.Annotation;

__ds_ns.Figure = __ds_scope.Figure;

__ds_ns.Lead = __ds_scope.Lead;

__ds_ns.MetaRow = __ds_scope.MetaRow;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.Section = __ds_scope.Section;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ImagePlaceholder = __ds_scope.ImagePlaceholder;

__ds_ns.Monogram = __ds_scope.Monogram;

__ds_ns.SkillChip = __ds_scope.SkillChip;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.FilterBar = __ds_scope.FilterBar;

__ds_ns.NextProjectLink = __ds_scope.NextProjectLink;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteNav = __ds_scope.SiteNav;

})();
