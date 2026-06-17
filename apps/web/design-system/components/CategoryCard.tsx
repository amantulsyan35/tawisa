import { ArrowRightIcon } from "../icons";
import { JewelryIllustration } from "./JewelryIllustration";

interface CategoryCardProps {
  name: string;
  count: string;
  background: "her" | "him" | "kids";
  illustration: "earrings" | "bracelet" | "pendant";
}

const backgrounds = {
  her: "bg-[linear-gradient(135deg,#fdf2ec_0%,#f4ddd0_50%,#e8c9b8_100%)]",
  him: "bg-[linear-gradient(135deg,#f0ece8_0%,#ddd4cb_50%,#c8bdb4_100%)]",
  kids: "bg-[linear-gradient(135deg,#fdf6f2_0%,#f7e8de_50%,#edd5c5_100%)]",
};

export function CategoryCard({ name, count, background, illustration }: CategoryCardProps) {
  return (
    <article className="group flex-[0_0_260px] cursor-pointer snap-start overflow-hidden rounded-lg border border-border bg-glass shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-elevated lg:flex-auto">
      <div className={`flex h-[200px] items-center justify-center overflow-hidden ${backgrounds[background]} lg:h-[260px]`}>
        <JewelryIllustration kind={illustration} staggered={illustration === "earrings"} />
      </div>
      <div className="px-[22px] pb-6 pt-5">
        <div className="mb-1.5 text-[11px] uppercase tracking-[0.2em] text-text3">Collection</div>
        <h3 className="font-serif text-[26px] font-medium tracking-[0.02em] text-text">{name}</h3>
        <div className="mt-1 text-[13px] text-text2">{count}</div>
        <div className="mt-3.5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-accent2">
          Shop now
          <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-1" size={14} />
        </div>
      </div>
    </article>
  );
}
