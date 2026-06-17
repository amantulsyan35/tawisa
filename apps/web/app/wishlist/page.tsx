import WishlistPageClient from "./wishlist-page-client";

type WishlistPageProps = {
  searchParams: Promise<{
    state?: string;
  }>;
};

export default async function WishlistPage({ searchParams }: WishlistPageProps) {
  const params = await searchParams;

  return <WishlistPageClient initialState={params.state === "filled" ? "filled" : "empty"} />;
}
