import { Button, Badge, ProductCard, SearchIcon, HeartIcon, BagIcon } from "@/design-system";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-2xl font-bold text-accent2">TAWISA</h1>
        <div className="flex gap-4 text-accent2">
          <SearchIcon size={24} />
          <HeartIcon size={24} />
          <BagIcon size={24} />
        </div>
      </div>

      {/* Buttons */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-4">Buttons</h2>
        <div className="flex gap-4">
          <Button variant="primary">Shop Now</Button>
          <Button variant="ghost">Learn More</Button>
        </div>
      </section>

      {/* Badges */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-4">Badges</h2>
        <div className="flex gap-3">
          <Badge>Default</Badge>
          <Badge variant="new">New</Badge>
          <Badge variant="success">Delivered</Badge>
          <Badge variant="discount">15% off</Badge>
        </div>
      </section>

      {/* Product Cards */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Product Cards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard
            name="Amethyst Dream Ring"
            category="Rings"
            price={8499}
            originalPrice={9999}
            discount={15}
            badge="New"
          />
          <ProductCard
            name="Silver Cascade Earrings"
            category="Earrings"
            price={4299}
          />
          <ProductCard
            name="Golden Whisper Pendant"
            category="Pendants"
            price={12999}
            originalPrice={14999}
            discount={13}
          />
          <ProductCard
            name="Diamond Luxe Bracelet"
            category="Bracelets"
            price={24999}
            badge="Bestseller"
          />
        </div>
      </section>
    </main>
  );
}
