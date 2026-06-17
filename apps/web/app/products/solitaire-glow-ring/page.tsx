import type { Metadata } from "next";
import ProductPageClient from "./product-page-client";

export const metadata: Metadata = {
  title: "TAWISA — Solitaire Glow Ring · Amethyst Silk",
  description: "Solitaire Glow Ring in 9K Gold with amethyst CZ stones from TAWISA.",
};

export default function SolitaireGlowRingPage() {
  return <ProductPageClient />;
}
