import type { Metadata } from "next";
import CollectionsPageClient from "./collections-page-client";

export const metadata: Metadata = {
  title: "TAWISA — All Collections",
  description: "Explore every TAWISA piece across silver, gold and diamond collections.",
};

export default function CollectionsPage() {
  return <CollectionsPageClient />;
}
