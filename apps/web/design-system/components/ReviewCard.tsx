import { StarIcon } from "../icons";

interface ReviewCardProps {
  quote: string;
  initial: string;
  name: string;
  role: string;
}

export function ReviewCard({ quote, initial, name, role }: ReviewCardProps) {
  return (
    <article className="flex-[0_0_280px] snap-start rounded-lg border border-border bg-glass p-6 shadow-card lg:flex-auto">
      <div className="mb-3.5 flex gap-[3px]" aria-label="5 star rating">
        {Array.from({ length: 5 }).map((_, index) => (
          <StarIcon className="text-accent" filled key={index} size={14} />
        ))}
      </div>
      <p className="mb-[18px] font-serif text-[17px] italic leading-normal text-text">{quote}</p>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#c9b0dc,#a980c0)] font-serif text-lg font-medium text-white">
          {initial}
        </div>
        <div>
          <div className="text-sm font-semibold text-text">{name}</div>
          <div className="text-xs text-text3">{role}</div>
        </div>
      </div>
    </article>
  );
}
