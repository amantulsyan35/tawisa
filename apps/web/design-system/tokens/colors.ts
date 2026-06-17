/**
 * TAWISA Design System - Color Tokens
 * Matches the Amethyst Silk Luxury theme
 */

export const colors = {
  // Backgrounds
  bg: "#FFFFFF",
  bg2: "#F2EBF7",
  bg3: "#E8DDEF",
  glass: "rgba(255,255,255,0.72)",
  footerBg: "#1E1828",

  // Accent / Brand (Amethyst)
  accent: "#B99BCC",
  accent2: "#8A6BA3",
  accentLt: "rgba(145,116,170,0.12)",

  // Text
  text: "#32263B",
  text2: "#72667D",
  text3: "#A098B0",

  // Borders
  border: "rgba(218,203,231,0.42)",
  border2: "rgba(186,164,203,0.34)",

  // Semantic
  success: "#3D8B5E",
  successLt: "rgba(61,139,94,0.10)",

  // Button gradients
  btnPrimaryFrom: "#C9B0DC",
  btnPrimaryTo: "#A980C0",
} as const;

export type ColorToken = keyof typeof colors;

export const typography = {
  fontSerif: '"Cormorant Garamond", Georgia, serif',
  fontSans: '"Manrope", system-ui, sans-serif',
  sizes: {
    xs: "10px",
    sm: "11px",
    base: "12px",
    md: "14px",
    lg: "15px",
    xl: "17px",
    "2xl": "22px",
    "3xl": "26px",
    hero: "clamp(48px, 12vw, 72px)",
    section: "clamp(32px, 8vw, 48px)",
  },
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
  },
  tracking: {
    tight: "0.01em",
    base: "0.02em",
    wide: "0.10em",
    wider: "0.12em",
    widest: "0.28em",
  },
} as const;

export const spacing = {
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  8: "32px",
  10: "40px",
  12: "48px",
  16: "64px",
  20: "80px",
  24: "96px",
} as const;

export const radii = {
  sm: "16px",
  md: "24px",
  lg: "32px",
  pill: "999px",
} as const;

export const shadows = {
  sm: "0 12px 48px rgba(145,116,170,0.10)",
  md: "0 24px 72px rgba(145,116,170,0.14)",
  button: "0 8px 28px rgba(138,107,163,0.28)",
  buttonHover: "0 12px 36px rgba(138,107,163,0.38)",
} as const;

export const motion = {
  transition: "0.22s cubic-bezier(0.4,0,0.2,1)",
} as const;
