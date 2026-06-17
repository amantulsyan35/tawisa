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
