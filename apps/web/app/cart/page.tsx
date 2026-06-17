import type { Metadata } from "next";
import BagPageClient from "./bag-page-client";

export const metadata: Metadata = {
  title: "TAWISA — My Bag",
  description: "Review your TAWISA jewellery selections and proceed to checkout.",
};

export default function BagPage() {
  return <BagPageClient />;
}
