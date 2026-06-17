"use client";

import { HeartIcon } from "../icons";
import { Badge } from "./Badge";

interface ProductCardProps {
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  badge?: string;
  imageUrl?: string;
}

export function ProductCard({
  name,
  category,
  price,
  originalPrice,
  discount,
  badge,
}: ProductCardProps) {
  const formatPrice = (p: number) =>
    new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(p);

  return (
    <article className="group relative bg-white rounded-sm border border-border overflow-hidden transition-shadow hover:shadow-card">
      {/* Image placeholder */}
      <div className="relative aspect-square bg-bg2 flex items-center justify-center">
        <span className="text-text3 text-sm">Image</span>

        {/* Wishlist button */}
        <button className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-white/80 text-text2 hover:text-accent2 transition-colors">
          <HeartIcon size={18} />
        </button>

        {/* Badge */}
        {badge && (
          <div className="absolute top-3 left-3">
            <Badge variant="new">{badge}</Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="text-xs text-text3 uppercase tracking-wide mb-1">{category}</div>
        <div className="font-medium text-text mb-2 line-clamp-1">{name}</div>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-text">{formatPrice(price)}</span>
          {originalPrice && (
            <span className="text-sm text-text3 line-through">{formatPrice(originalPrice)}</span>
          )}
          {discount && (
            <Badge variant="discount">{discount}% off</Badge>
          )}
        </div>
      </div>
    </article>
  );
}
