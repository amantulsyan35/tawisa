import { HeartIcon } from "../icons";
import { JewelryIllustration } from "./JewelryIllustration";

interface FeaturedProductCardProps {
  name: string;
  material: string;
  rating: string;
  price: string;
  originalPrice: string;
  discount: string;
  badge: "New" | "Hot";
  background: "one" | "two" | "three" | "four";
  illustration: "product-ring" | "product-necklace" | "product-earrings" | "product-bracelet";
}

const backgrounds = {
  one: "bg-[linear-gradient(135deg,#fdf6f2_0%,#f7e5d8_100%)]",
  two: "bg-[linear-gradient(135deg,#f5f0ec_0%,#ece3d8_100%)]",
  three: "bg-[linear-gradient(135deg,#fef8f4_0%,#f8ece2_100%)]",
  four: "bg-[linear-gradient(135deg,#f3eeea_0%,#e9dfd5_100%)]",
};

const badgeStyles = {
  New: "border-[rgba(145,116,170,0.2)] bg-[rgba(145,116,170,0.16)] text-accent2",
  Hot: "border-[rgba(157,111,83,0.18)] bg-[rgba(157,111,83,0.12)] text-[#7a4f35]",
};

export function FeaturedProductCard({
  name,
  material,
  rating,
  price,
  originalPrice,
  discount,
  badge,
  background,
  illustration,
}: FeaturedProductCardProps) {
  return (
    <article className="group cursor-pointer overflow-hidden rounded-lg border border-border bg-glass shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-elevated">
      <div className={`relative flex aspect-square items-center justify-center overflow-hidden ${backgrounds[background]}`}>
        <JewelryIllustration kind={illustration} />
        <button
          aria-label="Add to wishlist"
          className="absolute right-2.5 top-2.5 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-glass text-text2 backdrop-blur-sm transition-colors duration-200 hover:bg-[rgba(145,116,170,0.18)]"
        >
          <HeartIcon size={16} />
        </button>
        <div className={`absolute left-2.5 top-2.5 rounded-pill border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] ${badgeStyles[badge]}`}>
          {badge}
        </div>
      </div>
      <div className="px-4 pb-[18px] pt-3.5">
        <div className="mb-1.5 flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.14em] text-accent">{material}</span>
          <span className="h-[3px] w-[3px] rounded-full bg-border2" />
          <span className="flex items-center gap-1 text-[11px] text-text3">
            <span className="text-accent">★</span> {rating}
          </span>
        </div>
        <h3 className="mb-2 font-serif text-[17px] font-medium leading-[1.3] tracking-[0.01em] text-text">
          {name}
        </h3>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-base font-semibold text-text">{price}</span>
          <span className="text-[13px] text-text3 line-through">{originalPrice}</span>
          <span className="rounded-pill bg-[rgba(122,143,92,0.1)] px-2 py-0.5 text-[11px] font-semibold text-[#7a8f5c]">
            {discount}
          </span>
        </div>
      </div>
    </article>
  );
}
