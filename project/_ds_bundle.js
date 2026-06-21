/* @ds-bundle: {"format":3,"namespace":"PLNLYDesignSystem_1cc2e7","components":[{"name":"Orbit","sourcePath":"components/brand/Orbit.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Icon","sourcePath":"components/icon/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/icon/Icon.jsx"}],"sourceHashes":{"components/brand/Orbit.jsx":"7add2586c4a0","components/brand/Wordmark.jsx":"4b58bb98c926","components/core/Badge.jsx":"991f1cd9336f","components/core/Button.jsx":"8196eed18508","components/core/Card.jsx":"586390672741","components/core/Eyebrow.jsx":"4b28802fc230","components/forms/Input.jsx":"85d0d352b1e0","components/icon/Icon.jsx":"edd816068ddd","ui_kits/website/Site.jsx":"f00028f9ad40"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PLNLYDesignSystem_1cc2e7 = window.PLNLYDesignSystem_1cc2e7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Orbit.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PLNLY Orbit — the brand's recurring motif.
 * Concentric hairline rings with a coral center (the household) and
 * mint/mist satellites (the tools). Replaces every AI cliché.
 */
function Orbit({
  size = 240,
  tone = 'ink',
  // 'ink' (on dark) | 'faint' (on light backdrop)
  spin = false,
  // slow rotation — closer to an hour hand than a spinner
  duration = 90,
  // seconds per turn
  satellites = true,
  style,
  ...rest
}) {
  const onInk = tone === 'ink';
  const ring = onInk ? ['#3b4048', '#343941', '#2c313a'] : ['rgba(32,36,43,0.09)', 'rgba(32,36,43,0.07)', 'rgba(32,36,43,0.05)'];
  const centerOpacity = onInk ? 1 : 0.5;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 240 240",
    fill: "none",
    style: {
      transformOrigin: 'center',
      animation: spin ? `plnly-orbit-spin ${duration}s linear infinite` : undefined,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("circle", {
    cx: "120",
    cy: "120",
    r: "40",
    stroke: ring[0],
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "120",
    cy: "120",
    r: "72",
    stroke: ring[1],
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "120",
    cy: "120",
    r: "104",
    stroke: ring[2],
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "120",
    cy: "120",
    r: "6",
    fill: "#E25E3A",
    fillOpacity: centerOpacity
  }), satellites && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "192",
    cy: "120",
    r: "4",
    fill: "#9FB1BB",
    fillOpacity: onInk ? 1 : 0.7
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "80",
    cy: "48",
    r: "4.5",
    fill: "#C2D8CC",
    fillOpacity: onInk ? 1 : 0.7
  })), /*#__PURE__*/React.createElement("style", null, `@keyframes plnly-orbit-spin { to { transform: rotate(360deg); } }
        @media (prefers-reduced-motion: reduce) { svg { animation: none !important; } }`));
}
Object.assign(__ds_scope, { Orbit });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Orbit.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PLNLY Wordmark — the PLNLY / plainly lockup.
 * The wordmark never appears without "plainly" beneath it on first contact.
 * Outfit Medium uppercase (.045em) over a divider, then Newsreader italic coral (.16em).
 */
function Wordmark({
  variant = 'stacked',
  size = 'md',
  onInk = false,
  subBrand = false,
  // true → PL·AI·NLY (the AI-literacy line)
  reveal = true,
  // show the "plainly" reveal + divider
  style,
  ...rest
}) {
  const scale = {
    sm: 0.62,
    md: 1,
    lg: 1.5
  }[size] || 1;
  const inkColor = onInk ? 'var(--plnly-on-ink)' : 'var(--plnly-ink)';
  const dividerColor = onInk ? 'var(--plnly-on-ink)' : 'var(--plnly-ink)';
  const mark = subBrand ? /*#__PURE__*/React.createElement(React.Fragment, null, "PL", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--plnly-coral)'
    }
  }, "AI"), "NLY") : 'PLNLY';
  const wordmarkEl = markSize => /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--plnly-font-display)',
      fontWeight: 'var(--plnly-weight-medium)',
      fontSize: markSize,
      letterSpacing: 'var(--plnly-wordmark-ls)',
      paddingLeft: '0.045em',
      color: inkColor,
      lineHeight: 1,
      display: 'block'
    }
  }, mark);
  const revealEl = (revealSize, ls = 'var(--plnly-reveal-ls)') => /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--plnly-font-serif)',
      fontStyle: 'italic',
      fontWeight: 'var(--plnly-weight-regular)',
      fontSize: revealSize,
      letterSpacing: ls,
      paddingLeft: ls === 'none' ? 0 : '0.16em',
      color: 'var(--plnly-coral)',
      lineHeight: 1
    }
  }, "plainly");
  if (variant === 'compact') {
    // The "P." mark — app, small sizes. Ink disc with cream P + coral stop.
    const d = 96 * scale;
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        width: d,
        height: d,
        borderRadius: '50%',
        background: onInk ? 'var(--plnly-coral)' : 'var(--plnly-ink)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--plnly-font-display)',
        fontWeight: 500,
        fontSize: d * 0.48,
        color: onInk ? 'var(--plnly-cream)' : 'var(--plnly-porcelain)'
      }
    }, "P", /*#__PURE__*/React.createElement("span", {
      style: {
        color: onInk ? 'var(--plnly-ink)' : 'var(--plnly-coral)'
      }
    }, ".")));
  }
  if (variant === 'horizontal') {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 16 * scale,
        ...style
      }
    }, rest), wordmarkEl(38 * scale), reveal && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 1,
        height: 34 * scale,
        background: dividerColor,
        opacity: 0.35
      }
    }), revealEl(22 * scale, 'none')));
  }

  // stacked (primary)
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      ...style
    }
  }, rest), wordmarkEl(58 * scale), reveal && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30 * scale,
      height: 1,
      background: dividerColor,
      opacity: 0.45,
      margin: `${9 * scale}px 0`
    }
  }), revealEl(19 * scale)));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PLNLY Badge — a small status chip or tag. Two flavours:
 *  tone="hue" gives a soft desaturated tint pill (mint, mist, eucalyptus...);
 *  tone="status" maps to the functional colors (success/info/caution/error).
 * Square-ish (chip radius). Mono labels read as a stamp.
 */
const HUE = {
  mint: {
    bg: 'rgba(194,216,204,0.45)',
    fg: '#3f5247'
  },
  mist: {
    bg: 'rgba(159,177,187,0.40)',
    fg: '#3e4f59'
  },
  eucalyptus: {
    bg: 'rgba(94,116,104,0.16)',
    fg: '#4a5d53'
  },
  greige: {
    bg: 'var(--plnly-greige-deep)',
    fg: 'var(--plnly-ink-65)'
  },
  coral: {
    bg: 'rgba(226,94,58,0.12)',
    fg: 'var(--plnly-coral-deep)'
  }
};
const STATUS = {
  success: {
    bg: 'rgba(79,122,94,0.14)',
    fg: '#3f6a4e',
    dot: 'var(--plnly-success)'
  },
  info: {
    bg: 'rgba(94,126,146,0.14)',
    fg: '#4d6c80',
    dot: 'var(--plnly-info)'
  },
  caution: {
    bg: 'rgba(190,122,53,0.15)',
    fg: '#9c6225',
    dot: 'var(--plnly-caution)'
  },
  error: {
    bg: 'rgba(192,67,42,0.13)',
    fg: 'var(--plnly-error)',
    dot: 'var(--plnly-error)'
  }
};
function Badge({
  children,
  tone = 'hue',
  // 'hue' | 'status'
  color = 'mint',
  // hue name OR status name depending on tone
  dot = false,
  // leading status dot (status tone)
  mono = true,
  style,
  ...rest
}) {
  const palette = tone === 'status' ? STATUS[color] || STATUS.info : HUE[color] || HUE.mint;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      background: palette.bg,
      color: palette.fg,
      fontFamily: mono ? 'var(--plnly-font-mono)' : 'var(--plnly-font-body)',
      fontSize: mono ? 10.5 : 12.5,
      fontWeight: mono ? 500 : 500,
      letterSpacing: mono ? '0.12em' : '0',
      textTransform: mono ? 'uppercase' : 'none',
      padding: mono ? '5px 9px' : '4px 11px',
      borderRadius: 'var(--plnly-radius-chip)',
      lineHeight: 1,
      ...style
    }
  }, rest), dot && tone === 'status' && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: palette.dot,
      flex: 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PLNLY Button — the action. Primary is an ink pill with the coral dot
 * affordance ("Start the setup •"). Copy is a verb + a noun, never "Submit".
 * One coral thing per view — if two compete, make one secondary.
 */
function Button({
  children,
  variant = 'primary',
  // 'primary' | 'secondary' | 'ghost'
  size = 'md',
  // 'sm' | 'md' | 'lg'
  dot = true,
  // the trailing coral dot affordance
  onInk = false,
  disabled = false,
  style,
  ...rest
}) {
  const pad = {
    sm: '9px 16px',
    md: '12px 22px',
    lg: '15px 28px'
  }[size];
  const fontSize = {
    sm: 13,
    md: 14,
    lg: 15
  }[size];
  const dotSize = {
    sm: 6,
    md: 7,
    lg: 7
  }[size];
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 9,
    fontFamily: 'var(--plnly-font-body)',
    fontWeight: 'var(--plnly-weight-medium)',
    fontSize,
    lineHeight: 1,
    padding: pad,
    borderRadius: 'var(--plnly-radius-pill)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background var(--plnly-dur-micro) var(--plnly-ease), color var(--plnly-dur-micro) var(--plnly-ease), opacity var(--plnly-dur-micro) var(--plnly-ease)',
    textDecoration: 'none',
    whiteSpace: 'nowrap'
  };
  const variants = {
    primary: {
      background: onInk ? 'var(--plnly-porcelain)' : 'var(--plnly-ink)',
      color: onInk ? 'var(--plnly-ink)' : 'var(--plnly-porcelain)'
    },
    secondary: {
      background: 'transparent',
      color: onInk ? 'var(--plnly-on-ink)' : 'var(--plnly-ink)',
      borderColor: onInk ? 'var(--plnly-border-on-ink)' : 'var(--plnly-border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: onInk ? 'var(--plnly-on-ink)' : 'var(--plnly-ink)',
      padding: {
        sm: '4px 2px',
        md: '6px 2px',
        lg: '8px 2px'
      }[size],
      borderRadius: 0
    }
  };
  const isGhost = variant === 'ghost';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), isGhost ? /*#__PURE__*/React.createElement("span", {
    style: {
      borderBottom: '1px solid rgba(32,36,43,0.3)',
      paddingBottom: 2
    }
  }, children) : children, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: dotSize,
      height: dotSize,
      borderRadius: '50%',
      background: 'var(--plnly-coral)',
      flex: 'none'
    }
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PLNLY Card — a surface. White on greige by default; soft, low elevation;
 * mostly-square corners. "Quiet" is the greige inset variant; "ink" is the
 * dark band card.
 */
function Card({
  children,
  surface = 'white',
  // 'white' | 'quiet' | 'porcelain' | 'ink'
  elevation = 'raised',
  // 'flat' | 'raised' | 'floating' | 'overlay'
  radius = 'card',
  // 'card' | 'card-lg' | 'tile'
  padding = 32,
  style,
  ...rest
}) {
  const surfaces = {
    white: {
      background: 'var(--plnly-surface)',
      color: 'var(--plnly-ink)'
    },
    quiet: {
      background: 'var(--plnly-greige)',
      color: 'var(--plnly-ink)'
    },
    porcelain: {
      background: 'var(--plnly-porcelain)',
      color: 'var(--plnly-ink)'
    },
    ink: {
      background: 'var(--plnly-surface-ink)',
      color: 'var(--plnly-on-ink)'
    }
  };
  const shadows = {
    flat: 'none',
    raised: 'var(--plnly-shadow-raised)',
    floating: 'var(--plnly-shadow-floating)',
    overlay: 'var(--plnly-shadow-overlay)'
  };
  const radii = {
    card: 'var(--plnly-radius-card)',
    'card-lg': 'var(--plnly-radius-card-lg)',
    tile: 'var(--plnly-radius-tile)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...surfaces[surface],
      boxShadow: shadows[elevation],
      borderRadius: radii[radius],
      padding,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PLNLY Eyebrow — the mono label / kicker that dates and locates the brand.
 * IBM Plex Mono, uppercase, wide tracking. Sits above headings, in footers,
 * as coordinates and fine print.
 */
function Eyebrow({
  children,
  onInk = false,
  dot = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: 'var(--plnly-font-mono)',
      fontSize: 11,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: onInk ? 'var(--plnly-on-ink-faint)' : 'var(--plnly-text-label)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      lineHeight: 1,
      ...style
    }
  }, rest), children, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--plnly-coral)'
    }
  }));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PLNLY Input — a calm text field. Hanken Grotesk, square-ish, hairline border
 * that warms to ink on focus. Mono label above; coral reserved for error only.
 */
function Input({
  label,
  hint,
  error,
  id,
  style,
  containerStyle,
  ...rest
}) {
  const inputId = id || (label ? `plnly-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--plnly-font-mono)',
      fontSize: 10.5,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--plnly-text-label)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: e => {
      setFocused(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur?.(e);
    },
    style: {
      fontFamily: 'var(--plnly-font-body)',
      fontSize: 16,
      color: 'var(--plnly-ink)',
      background: 'var(--plnly-surface)',
      border: `1px solid ${error ? 'var(--plnly-error)' : focused ? 'var(--plnly-ink)' : 'var(--plnly-border-strong)'}`,
      borderRadius: 'var(--plnly-radius-card)',
      padding: '12px 14px',
      outline: 'none',
      transition: 'border-color var(--plnly-dur-micro) var(--plnly-ease)',
      width: '100%',
      boxSizing: 'border-box',
      ...style
    }
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--plnly-font-body)',
      fontSize: 13,
      lineHeight: 1.5,
      color: error ? 'var(--plnly-error)' : 'var(--plnly-text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/icon/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PLNLY Icon — the abstract mark set, built from the dot, the ring, and the line.
 * 24px grid, 1.75px stroke, round caps/joins. Coral appears in at most one
 * element, only when it carries meaning (a focal point, an active state).
 * For dense functional UI, pair with a thin-line library set to the same stroke.
 */
const STROKE = '#20242B';
const CORAL = '#E25E3A';
function paths(name, coral) {
  const accent = coral ? CORAL : STROKE;
  switch (name) {
    case 'ring':
      // a cycle, a routine
      return /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "8.5",
        stroke: STROKE,
        strokeWidth: "1.75"
      });
    case 'focus':
      // set up, dialed in
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "8.5",
        stroke: STROKE,
        strokeWidth: "1.75"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "2.6",
        fill: CORAL
      }));
    case 'time':
      // schedule, day
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "8.5",
        stroke: STROKE,
        strokeWidth: "1.75"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "12",
        y1: "12",
        x2: "12",
        y2: "7",
        stroke: STROKE,
        strokeWidth: "1.75",
        strokeLinecap: "round"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "12",
        y1: "12",
        x2: "15.5",
        y2: "13.5",
        stroke: STROKE,
        strokeWidth: "1.75",
        strokeLinecap: "round"
      }));
    case 'plan':
      // a list, the setup
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
        x1: "5",
        y1: "8",
        x2: "19",
        y2: "8",
        stroke: STROKE,
        strokeWidth: "1.75",
        strokeLinecap: "round"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "5",
        y1: "12",
        x2: "19",
        y2: "12",
        stroke: STROKE,
        strokeWidth: "1.75",
        strokeLinecap: "round"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "5",
        y1: "16",
        x2: "14",
        y2: "16",
        stroke: STROKE,
        strokeWidth: "1.75",
        strokeLinecap: "round"
      }));
    case 'handover':
      // yours to run →
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
        x1: "4",
        y1: "12",
        x2: "18",
        y2: "12",
        stroke: STROKE,
        strokeWidth: "1.75",
        strokeLinecap: "round"
      }), /*#__PURE__*/React.createElement("polyline", {
        points: "13,7 18,12 13,17",
        stroke: accent,
        strokeWidth: "1.75",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none"
      }));
    case 'add':
      // more, new
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
        x1: "12",
        y1: "5",
        x2: "12",
        y2: "19",
        stroke: STROKE,
        strokeWidth: "1.75",
        strokeLinecap: "round"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "5",
        y1: "12",
        x2: "19",
        y2: "12",
        stroke: STROKE,
        strokeWidth: "1.75",
        strokeLinecap: "round"
      }));
    case 'place':
      // the household
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
        d: "M5 9 V5 H9",
        stroke: STROKE,
        strokeWidth: "1.75",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M19 9 V5 H15",
        stroke: STROKE,
        strokeWidth: "1.75",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M5 15 V19 H9",
        stroke: STROKE,
        strokeWidth: "1.75",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M19 15 V19 H15",
        stroke: STROKE,
        strokeWidth: "1.75",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none"
      }));
    case 'orbit':
      // the brand motif, as a glyph
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "3.2",
        stroke: STROKE,
        strokeWidth: "1.75"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "8.5",
        stroke: STROKE,
        strokeWidth: "1.75",
        strokeDasharray: "2 3"
      }));
    default:
      return /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "8.5",
        stroke: STROKE,
        strokeWidth: "1.75"
      });
  }
}
function Icon({
  name = 'ring',
  size = 24,
  coral = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      display: 'inline-block',
      verticalAlign: 'middle',
      flex: 'none',
      ...style
    }
  }, rest), paths(name, coral));
}
const ICON_NAMES = ['ring', 'focus', 'time', 'plan', 'handover', 'add', 'place', 'orbit'];
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icon/Icon.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Site.jsx
try { (() => {
/* global React */
const NS = window.PLNLYDesignSystem_1cc2e7;
const {
  Wordmark,
  Orbit,
  Button,
  Icon,
  Eyebrow,
  Card,
  Input
} = NS;
const {
  useState
} = React;

/* ---------------------------------------------------------------- Header */
function Header({
  onBook
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(227,225,218,0.82)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--plnly-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '18px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    variant: "horizontal",
    size: "sm"
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#service",
    style: navLink
  }, "The service"), /*#__PURE__*/React.createElement("a", {
    href: "#who",
    style: navLink
  }, "Who it's for"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onBook
  }, "Start the setup"))));
}
const navLink = {
  fontFamily: 'var(--plnly-font-body)',
  fontSize: 14,
  color: 'var(--plnly-ink-65)',
  textDecoration: 'none'
};

/* ------------------------------------------------------------------ Hero */
function Hero({
  onBook
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      maxWidth: 1120,
      margin: '0 auto',
      padding: '120px 40px 128px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -200,
      top: -120,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(Orbit, {
    tone: "faint",
    size: 760,
    spin: true,
    duration: 90
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Modern life, minus the jargon \xB7 Brooklyn, NY"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--plnly-font-display)',
      fontWeight: 500,
      fontSize: 74,
      lineHeight: 1.04,
      letterSpacing: '-0.025em',
      color: 'var(--plnly-ink)',
      margin: '26px 0 0'
    }
  }, "Built bespoke. ", /*#__PURE__*/React.createElement("em", {
    style: italicCoral
  }, "Yours"), " to run."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--plnly-font-body)',
      fontSize: 20,
      lineHeight: 1.55,
      color: 'var(--plnly-ink-80)',
      margin: '30px 0 0',
      maxWidth: 560
    }
  }, "We set the tools of modern life up around how your household actually lives, teach you to run them, and hand over the keys. You own the capability \u2014 not a subscription to us."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 22,
      marginTop: 38
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onBook
  }, "Start the setup"), /*#__PURE__*/React.createElement("a", {
    href: "#service",
    style: {
      fontFamily: 'var(--plnly-font-body)',
      fontSize: 15,
      color: 'var(--plnly-ink)',
      borderBottom: '1px solid rgba(32,36,43,0.3)',
      paddingBottom: 2,
      textDecoration: 'none'
    }
  }, "See how it works"))));
}
const italicCoral = {
  fontFamily: 'var(--plnly-font-serif)',
  fontStyle: 'italic',
  fontWeight: 300,
  color: 'var(--plnly-coral)'
};

/* ----------------------------------------------------------- Positioning */
function PositioningBand() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--plnly-ink)',
      color: 'var(--plnly-on-ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '90px 40px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    onInk: true
  }, "The difference"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--plnly-font-display)',
      fontWeight: 500,
      fontSize: 40,
      lineHeight: 1.2,
      letterSpacing: '-0.015em',
      marginTop: 22,
      maxWidth: 880
    }
  }, "Everyone else runs the AI and keeps the keys. We set it up, teach you to run it, and ", /*#__PURE__*/React.createElement("em", {
    style: italicCoral
  }, "hand them over.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--plnly-font-body)',
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--plnly-on-ink-dim)',
      margin: '24px 0 0',
      maxWidth: 600
    }
  }, "Ownership, not concierge. When we're done, the capability is yours to keep \u2014 and to grow on your own.")));
}

/* --------------------------------------------------------------- Service */
const STEPS = [{
  icon: 'focus',
  title: 'Set up around you',
  body: "We configure the tools to your household's real rhythm — scheduling, groceries, travel, the operations of a home. Not a template."
}, {
  icon: 'plan',
  title: 'Taught, not done-for-you',
  body: 'You learn to run it, at your pace, in plain language. We explain the real tool and the real task — never "AI-powered solutions."'
}, {
  icon: 'handover',
  title: "Then it's yours",
  body: "We hand over the keys. You stay in control of your own systems, and we're there when you want us — not because you need us.",
  coral: true
}];
function Service() {
  return /*#__PURE__*/React.createElement("section", {
    id: "service",
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '104px 40px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "How it works"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--plnly-font-display)',
      fontWeight: 500,
      fontSize: 38,
      lineHeight: 1.12,
      letterSpacing: '-0.015em',
      color: 'var(--plnly-ink)',
      margin: '18px 0 0',
      maxWidth: '18ch'
    }
  }, "Set up around how you ", /*#__PURE__*/React.createElement("em", {
    style: italicCoral
  }, "actually"), " live."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 28,
      marginTop: 56
    }
  }, STEPS.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.title
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 38,
    coral: s.coral
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--plnly-font-display)',
      fontWeight: 500,
      fontSize: 21,
      color: 'var(--plnly-ink)',
      marginTop: 20
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--plnly-font-body)',
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--plnly-ink-55)',
      margin: '10px 0 0'
    }
  }, s.body)))));
}

/* -------------------------------------------------------------- Who it's for */
function WhoFor() {
  return /*#__PURE__*/React.createElement("section", {
    id: "who",
    style: {
      background: 'var(--plnly-porcelain)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '104px 40px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Who it's for"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--plnly-font-display)',
      fontWeight: 500,
      fontSize: 38,
      lineHeight: 1.12,
      letterSpacing: '-0.015em',
      color: 'var(--plnly-ink)',
      margin: '18px 0 56px'
    }
  }, "Two households. One idea."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(Card, {
    surface: "quiet",
    elevation: "flat",
    radius: "card-lg",
    padding: 40
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...iconWell,
      background: 'var(--plnly-mist)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "orbit",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: cardTitle
  }, "Busy households"), /*#__PURE__*/React.createElement("p", {
    style: cardBody
  }, "You could figure the tools out yourself \u2014 you'd just rather not lose the weekend to it. We configure AI around your week and hand it back, with you still in control.")), /*#__PURE__*/React.createElement(Card, {
    surface: "quiet",
    elevation: "flat",
    radius: "card-lg",
    padding: 40
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...iconWell,
      background: 'var(--plnly-mint)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plan",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: cardTitle
  }, "Parents of college-bound teens"), /*#__PURE__*/React.createElement("p", {
    style: cardBody
  }, "Real, responsible AI literacy before campus \u2014 NotebookLM, citations, the academic-integrity lines. Tool fluency, scoped tight. Not subject tutoring.")))));
}
const iconWell = {
  width: 42,
  height: 42,
  borderRadius: 11,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};
const cardTitle = {
  fontFamily: 'var(--plnly-font-display)',
  fontWeight: 500,
  fontSize: 23,
  color: 'var(--plnly-ink)',
  marginTop: 24
};
const cardBody = {
  fontFamily: 'var(--plnly-font-body)',
  fontSize: 15.5,
  lineHeight: 1.6,
  color: 'var(--plnly-ink-65)',
  margin: '12px 0 0'
};

/* ---------------------------------------------------------- PLAINLY moment */
function PlainlyAI() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--plnly-ink)',
      color: 'var(--plnly-on-ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '104px 40px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    onInk: true
  }, "The two letters we left out"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--plnly-font-display)',
      fontWeight: 500,
      fontSize: 60,
      letterSpacing: '0.04em',
      color: 'var(--plnly-on-ink)',
      lineHeight: 1,
      marginTop: 26
    }
  }, "PL", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--plnly-coral)'
    }
  }, "AI"), "NLY"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--plnly-font-body)',
      fontSize: 16.5,
      lineHeight: 1.6,
      color: 'var(--plnly-on-ink-dim)',
      margin: '26px 0 0',
      maxWidth: 440
    }
  }, "PLNLY is \"plainly\" with the A and the I taken out \u2014 modern life, minus the jargon. Our AI-literacy program is the one place we put them back. Same name, switched on.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Orbit, {
    tone: "ink",
    size: 240,
    spin: true,
    duration: 60
  }))));
}

/* ---------------------------------------------------------------- Essence */
function Essence() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '120px 40px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--plnly-font-serif)',
      fontStyle: 'italic',
      fontWeight: 300,
      fontSize: 56,
      lineHeight: 1.15,
      color: 'var(--plnly-ink)'
    }
  }, "a beautiful plainness"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Modern life, minus the jargon.")));
}

/* ----------------------------------------------------------------- Footer */
function Footer({
  onBook
}) {
  return /*#__PURE__*/React.createElement("footer", {
    id: "contact",
    style: {
      background: 'var(--plnly-porcelain)',
      borderTop: '1px solid var(--plnly-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '80px 40px 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Wordmark, {
    variant: "stacked",
    size: "sm",
    style: {
      alignItems: 'flex-start'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--plnly-font-body)',
      fontSize: 15,
      lineHeight: 1.5,
      color: 'var(--plnly-ink-55)',
      margin: '22px 0 0',
      maxWidth: 300
    }
  }, "Personal AI setup, teaching, and retainer. Brooklyn, NY \u2014 and online.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 64,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Get in touch"), /*#__PURE__*/React.createElement("div", {
    style: footCol
  }, /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    style: footLink,
    onClick: e => {
      e.preventDefault();
      onBook();
    }
  }, "Book an intro call"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:hello@plnly.co",
    style: footLink
  }, "hello@plnly.co"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Elsewhere"), /*#__PURE__*/React.createElement("div", {
    style: footCol
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: footLink
  }, "Instagram"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: footLink
  }, "LinkedIn"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 64,
      paddingTop: 24,
      borderTop: '1px solid var(--plnly-border)',
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "\xA9 2026 PLNLY \xB7 Brooklyn, NY"), /*#__PURE__*/React.createElement(Eyebrow, {
    dot: true
  }, "Modern life, minus the jargon"))));
}
const footCol = {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  marginTop: 14
};
const footLink = {
  fontFamily: 'var(--plnly-font-body)',
  fontSize: 15,
  color: 'var(--plnly-ink)',
  textDecoration: 'none'
};

/* ----------------------------------------------------------- Booking modal */
function BookingModal({
  onClose
}) {
  const [sent, setSent] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      background: 'rgba(32,36,43,0.42)',
      backdropFilter: 'blur(3px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 460,
      maxWidth: '100%'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    surface: "white",
    elevation: "overlay",
    radius: "card-lg",
    padding: 40,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      position: 'absolute',
      top: 18,
      right: 20,
      background: 'none',
      border: 'none',
      fontSize: 20,
      color: 'var(--plnly-ink-35)',
      cursor: 'pointer',
      lineHeight: 1
    }
  }, "\xD7"), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Orbit, {
    tone: "faint",
    size: 120
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--plnly-font-display)',
      fontWeight: 500,
      fontSize: 24,
      color: 'var(--plnly-ink)',
      marginTop: 8
    }
  }, "Set up. ", /*#__PURE__*/React.createElement("em", {
    style: italicCoral
  }, "We'll be in touch.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--plnly-font-body)',
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--plnly-ink-55)',
      margin: '12px 0 24px'
    }
  }, "We'll reach out within a day to find a time. No phone tree, no chatbot \u2014 just us."), /*#__PURE__*/React.createElement(Button, {
    onClick: onClose
  }, "Back to the site")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Start the setup"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--plnly-font-display)',
      fontWeight: 500,
      fontSize: 28,
      lineHeight: 1.15,
      letterSpacing: '-0.01em',
      color: 'var(--plnly-ink)',
      margin: '14px 0 6px'
    }
  }, "Tell us about your household."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--plnly-font-body)',
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--plnly-ink-55)',
      margin: '0 0 24px'
    }
  }, "A short note is plenty. We read every one."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Your name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    placeholder: "you@household.com",
    type: "email"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "What would you like set up?",
    placeholder: "Scheduling, travel, the kids' tools\u2026"
  }), /*#__PURE__*/React.createElement(Button, {
    onClick: () => setSent(true),
    style: {
      marginTop: 4
    }
  }, "Send it over"))))));
}

/* ------------------------------------------------------------------- Site */
function Site() {
  const [booking, setBooking] = useState(false);
  const open = () => setBooking(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--plnly-greige)',
      fontFamily: 'var(--plnly-font-body)',
      color: 'var(--plnly-ink)',
      overflowX: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    onBook: open
  }), /*#__PURE__*/React.createElement(Hero, {
    onBook: open
  }), /*#__PURE__*/React.createElement(PositioningBand, null), /*#__PURE__*/React.createElement(Service, null), /*#__PURE__*/React.createElement(WhoFor, null), /*#__PURE__*/React.createElement(PlainlyAI, null), /*#__PURE__*/React.createElement(Essence, null), /*#__PURE__*/React.createElement(Footer, {
    onBook: open
  }), booking && /*#__PURE__*/React.createElement(BookingModal, {
    onClose: () => setBooking(false)
  }));
}
window.Site = Site;
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(Site, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Site.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Orbit = __ds_scope.Orbit;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

})();
