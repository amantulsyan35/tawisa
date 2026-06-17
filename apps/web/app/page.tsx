"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = ["Collections", "For Her", "For Him", "For Kids", "About"];

const trustItems = [
  { value: "200+", label: "Designs" },
  { value: "3", label: "Metals" },
  { value: "4.9★", label: "Rated" },
  { value: "50K+", label: "Happy Customers" },
];

const categories = [
  {
    name: "For Her",
    count: "124 styles available",
    visual: "earrings",
    bg: "from-[#fdf2ec] via-[#f4ddd0] to-[#e8c9b8]",
  },
  {
    name: "For Him",
    count: "68 styles available",
    visual: "bracelet",
    bg: "from-[#f0ece8] via-[#ddd4cb] to-[#c8bdb4]",
  },
  {
    name: "For Kids",
    count: "42 styles available",
    visual: "pendant",
    bg: "from-[#fdf6f2] via-[#f7e8de] to-[#edd5c5]",
  },
] as const;

const materialTabs = ["All", "Silver", "9K Gold", "Diamond", "CZ Stones", "Customise"];

const products = [
  {
    name: "Solitaire Glow Ring",
    material: "9K Gold",
    rating: "4.9",
    price: "₹8,499",
    original: "₹10,999",
    off: "23% off",
    badge: "New",
    badgeTone: "new",
    visual: "ring",
    bg: "from-[#fdf6f2] to-[#f7e5d8]",
  },
  {
    name: "Teardrop Pendant",
    material: "Silver",
    rating: "4.8",
    price: "₹3,299",
    original: "₹4,500",
    off: "27% off",
    badge: "Hot",
    badgeTone: "hot",
    visual: "necklace",
    bg: "from-[#f5f0ec] to-[#ece3d8]",
  },
  {
    name: "Dewdrop Earrings",
    material: "Diamond",
    rating: "5.0",
    price: "₹14,799",
    original: "₹18,000",
    off: "18% off",
    badge: "New",
    badgeTone: "new",
    visual: "drop-earrings",
    bg: "from-[#fef8f4] to-[#f8ece2]",
  },
  {
    name: "Celestial Bracelet",
    material: "9K Gold",
    rating: "4.7",
    price: "₹11,299",
    original: "₹14,000",
    off: "19% off",
    badge: "Hot",
    badgeTone: "hot",
    visual: "wide-bracelet",
    bg: "from-[#f3eeea] to-[#e9dfd5]",
  },
] as const;

const reviews = [
  {
    quote:
      "The ring arrived beautifully packaged. The quality is exceptional for the price - it looks just like high-end boutique jewellery.",
    name: "Priya Sharma",
    role: "Corporate Executive, Bengaluru",
    initial: "P",
  },
  {
    quote:
      "Bought a silver bracelet for my wife. She gets compliments everywhere she wears it. Will definitely order again from TAWISA.",
    name: "Rahul Menon",
    role: "Product Manager, Mumbai",
    initial: "R",
  },
  {
    quote:
      "The customization feature is incredible. I designed my own pendant and it came out exactly as I imagined. Absolutely stunning!",
    name: "Ananya Iyer",
    role: "Designer, Hyderabad",
    initial: "A",
  },
];

const footerColumns = [
  ["Shop", "For Her", "For Him", "For Kids", "Customise", "New Arrivals"],
  ["Collections", "Rings", "Earrings", "Necklaces", "Bracelets", "Pendants"],
  ["Help", "My Orders", "Track Shipment", "Returns", "Size Guide", "Care Guide"],
  ["Company", "About TAWISA", "Craftsmanship", "Sustainability", "Press", "Contact"],
];

function SearchIcon({ className = "h-[18px] w-[18px]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function HeartIcon({ className = "h-[18px] w-[18px]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function BagIcon({ className = "h-[18px] w-[18px]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg className="h-3.5 w-3.5 transition-transform duration-[220ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="h-3.5 w-3.5 fill-[#b99bcc]" viewBox="0 0 24 24" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className="fixed left-3 right-3 top-3 z-50 flex items-center justify-between rounded-[24px] border border-[rgba(218,203,231,0.42)] bg-[rgba(255,255,255,0.72)] px-5 py-3.5 shadow-[0_12px_48px_rgba(145,116,170,0.10)] backdrop-blur-[20px] lg:left-6 lg:right-6 lg:top-4 lg:px-8 lg:py-4">
        <Link href="/" className="font-serif text-[26px] font-medium tracking-[0.12em] text-[#8A6BA3]" aria-label="TAWISA Home">
          TAWISA
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Desktop navigation">
          {navItems.map((item) => (
            <a key={item} href="#" className="text-[12px] font-medium uppercase tracking-[0.12em] text-[#72667D] transition-colors duration-[220ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-[#8A6BA3]">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <IconButton label="Search">
            <SearchIcon />
          </IconButton>
          <IconButton label="Wishlist">
            <HeartIcon />
          </IconButton>
          <IconButton label="Cart" className="hidden lg:flex">
            <BagIcon />
          </IconButton>
          <IconButton label="My Account" className="hidden lg:flex">
            <UserIcon />
          </IconButton>
          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <span className="h-[1.5px] w-[22px] rounded bg-[#8A6BA3]" />
            <span className="h-[1.5px] w-3.5 rounded bg-[#8A6BA3]" />
            <span className="h-[1.5px] w-[18px] rounded bg-[#8A6BA3]" />
          </button>
        </div>
      </header>

      {drawerOpen ? (
        <div className="fixed inset-0 z-[100] flex flex-col lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <button
            type="button"
            className="absolute inset-0 bg-[rgba(52,40,33,0.4)] backdrop-blur-[4px]"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
          />
          <div className="absolute bottom-0 right-0 top-0 flex w-[85%] max-w-80 flex-col gap-1.5 bg-white px-7 pb-10 pt-[72px] shadow-[-20px_0_60px_rgba(52,40,33,0.15)]">
            <button type="button" className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center text-[#72667D]" onClick={() => setDrawerOpen(false)} aria-label="Close menu">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            {[...navItems, "Account"].map((item) => (
              <a key={item} href="#" className="border-b border-[rgba(218,203,231,0.42)] py-3.5 font-serif text-[22px] font-normal tracking-[0.04em] text-[#32263B] hover:text-[#8A6BA3]">
                {item}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}

function IconButton({ children, label, className = "flex" }: { children: React.ReactNode; label: string; className?: string }) {
  return (
    <button
      type="button"
      className={`${className} h-10 w-10 items-center justify-center rounded-full bg-[rgba(145,116,170,0.12)] text-[#8A6BA3] transition-colors duration-[220ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[rgba(145,116,170,0.22)]`}
      aria-label={label}
    >
      {children}
    </button>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-gradient-to-br from-white via-[#F2EBF7] to-[#E8DDEF] px-5 pb-16 pt-[100px] before:absolute before:-right-20 before:-top-20 before:h-[300px] before:w-[300px] before:rounded-full before:bg-[radial-gradient(circle,rgba(145,116,170,0.18)_0%,transparent_70%)] after:absolute after:-bottom-[60px] after:-left-[60px] after:h-60 after:w-60 after:rounded-full after:bg-[radial-gradient(circle,rgba(145,116,170,0.12)_0%,transparent_70%)] lg:flex-row lg:items-center lg:justify-between lg:gap-[60px] lg:px-20 lg:pb-20 lg:pt-[120px] min-[1440px]:px-[120px]" aria-label="Hero banner">
      <div className="relative z-10 lg:max-w-[560px] lg:flex-1">
        <div className="mb-6 inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.28em] text-[#B99BCC] before:block before:h-px before:w-7 before:bg-[#B99BCC]">
          New Collection · 2026
        </div>
        <h1 className="max-w-[640px] font-serif text-[clamp(48px,12vw,72px)] font-medium leading-[1.05] tracking-[0.02em] text-[#32263B]">
          Jewellery for
          <br />
          the <em className="font-light italic text-[#8A6BA3]">Modern</em>
          <br />
          Soul
        </h1>
        <p className="mt-5 max-w-[380px] text-[15px] font-light leading-[1.65] text-[#72667D]">
          Crafted in silver, gold & diamond - jewellery that moves with you, designed for the life you live.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button className="min-h-12 rounded-full bg-gradient-to-r from-[#c9b0dc] to-[#a980c0] px-7 py-[15px] text-[12px] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_8px_28px_rgba(138,107,163,0.28)] transition-all duration-[220ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(138,107,163,0.38)]" type="button">Explore Collections</button>
          <button className="min-h-12 rounded-full border border-[rgba(186,164,203,0.34)] bg-[rgba(255,255,255,0.72)] px-7 py-[15px] text-[12px] font-semibold uppercase tracking-[0.14em] text-[#8A6BA3] backdrop-blur-[12px] transition-all duration-[220ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[rgba(186,164,203,0.6)] hover:bg-[rgba(186,164,203,0.18)]" type="button">View Lookbook</button>
        </div>
        <div className="mt-10 flex gap-6 overflow-x-auto border-t border-[rgba(218,203,231,0.42)] pt-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" role="list" aria-label="Brand stats">
          {trustItems.map((item) => (
            <div key={item.label} className="flex min-w-[100px] flex-col gap-1" role="listitem">
              <div className="font-serif text-[32px] font-medium tracking-[0.02em] text-[#8A6BA3]">{item.value}</div>
              <div className="text-[11px] uppercase tracking-[0.16em] text-[#A098B0]">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative z-10 my-9 flex items-center justify-center lg:m-0 lg:flex-none" role="img" aria-label="TAWISA signature ring">
        <div className="relative flex h-[200px] w-[200px] items-center justify-center rounded-full border border-[rgba(186,164,203,0.34)] bg-gradient-to-br from-[rgba(255,255,255,0.9)] via-[rgba(244,236,229,0.7)] to-[rgba(237,224,212,0.5)] shadow-[0_24px_72px_rgba(145,116,170,0.14)] backdrop-blur-[8px] before:absolute before:inset-5 before:rounded-full before:border before:border-[rgba(200,154,123,0.28)] before:bg-gradient-to-br before:from-[rgba(200,154,123,0.08)] before:to-transparent lg:h-[340px] lg:w-[340px]">
          <div className="relative z-10 h-14 w-14 rounded-full bg-gradient-to-br from-[#c9b0dc] via-[#a980c0] to-[#7a5898] shadow-[0_4px_20px_rgba(157,111,83,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] lg:h-[90px] lg:w-[90px]" />
          <div className="absolute -right-3 -top-3 rounded-full border border-[rgba(218,203,231,0.42)] bg-[rgba(255,255,255,0.72)] px-3.5 py-1.5 text-[11px] uppercase tracking-[0.14em] text-[#8A6BA3] shadow-[0_12px_48px_rgba(145,116,170,0.10)] backdrop-blur-[12px]">New Arrival</div>
          <div className="absolute -bottom-2 left-2.5 rounded-full border border-[rgba(218,203,231,0.42)] bg-[rgba(255,255,255,0.72)] px-3.5 py-1.5 text-[11px] tracking-[0.1em] text-[#72667D] shadow-[0_12px_48px_rgba(145,116,170,0.10)] backdrop-blur-[12px]">9K Gold · ₹8,499</div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, emphasis, id }: { eyebrow: string; title: string; emphasis: string; id: string }) {
  return (
    <div className="mb-9">
      <div className="mb-2.5 flex items-center gap-2.5 text-[11px] uppercase tracking-[0.28em] text-[#B99BCC] after:h-px after:max-w-12 after:flex-1 after:bg-[rgba(186,164,203,0.34)]">{eyebrow}</div>
      <h2 className="font-serif text-[clamp(32px,8vw,48px)] font-medium leading-[1.1] tracking-[0.02em] text-[#32263B]" id={id}>
        {title} <em className="font-light italic text-[#8A6BA3]">{emphasis}</em>
      </h2>
    </div>
  );
}

function Categories() {
  return (
    <section className="bg-gradient-to-b from-[#F2EBF7] to-white px-5 py-16 lg:px-20 lg:py-24 min-[1440px]:px-[120px] min-[1440px]:py-28" aria-labelledby="cat-title">
      <SectionHeader eyebrow="Curated Collections" title="Shop by" emphasis="Audience" id="cat-title" />
      <div className="flex snap-x gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible" role="list" aria-label="Shop by audience">
        {categories.map((category) => (
          <article key={category.name} className="group relative flex-[0_0_260px] snap-start cursor-pointer overflow-hidden rounded-[32px] border border-[rgba(218,203,231,0.42)] bg-[rgba(255,255,255,0.72)] shadow-[0_12px_48px_rgba(145,116,170,0.10)] transition-all duration-[220ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:shadow-[0_24px_72px_rgba(145,116,170,0.14)] lg:flex-auto" role="listitem" tabIndex={0}>
            <div className={`flex h-[200px] items-center justify-center overflow-hidden bg-gradient-to-br ${category.bg} lg:h-[260px]`}>
              <JewelryVisual type={category.visual} />
            </div>
            <div className="px-[22px] pb-6 pt-5">
              <div className="mb-1.5 text-[11px] uppercase tracking-[0.2em] text-[#A098B0]">Collection</div>
              <div className="font-serif text-[26px] font-medium tracking-[0.02em] text-[#32263B]">{category.name}</div>
              <div className="mt-1 text-[13px] text-[#72667D]">{category.count}</div>
              <div className="mt-3.5 inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#8A6BA3]">
                Shop now <ArrowRightIcon />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function JewelryVisual({ type }: { type: string }) {
  if (type === "bracelet") {
    return <div className="relative h-20 w-20 rounded-full border-[6px] border-transparent bg-[linear-gradient(rgba(255,255,255,0.72),rgba(255,255,255,0.72))_padding-box,linear-gradient(135deg,#c9b0dc,#a980c0,#7a5898,#a980c0)_border-box] shadow-[0_4px_20px_rgba(157,111,83,0.3)] after:absolute after:right-[-4px] after:top-1/2 after:h-3 after:w-3 after:-translate-y-1/2 after:rounded-full after:bg-gradient-to-br after:from-[#c9b0dc] after:to-[#8a6ba3] after:shadow-[0_2px_8px_rgba(157,111,83,0.4)]" role="img" aria-label="Bracelet" />;
  }

  if (type === "pendant") {
    return <div className="relative h-[90px] w-16 before:absolute before:left-1/2 before:top-0 before:h-[22px] before:w-0.5 before:-translate-x-1/2 before:rounded before:bg-gradient-to-b before:from-[#8A6BA3] before:to-[#B99BCC] after:absolute after:bottom-0 after:left-1/2 after:h-[52px] after:w-[52px] after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-br after:from-[#c9b0dc] after:via-[#a980c0] after:to-[#7a5898] after:shadow-[0_6px_24px_rgba(157,111,83,0.35),inset_0_1px_0_rgba(255,255,255,0.25)]" role="img" aria-label="Pendant" />;
  }

  return (
    <div className="flex items-end gap-4" role="img" aria-label="Earrings">
      <DropEarring />
      <DropEarring className="mt-2.5" />
    </div>
  );
}

function DropEarring({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center gap-0.5 ${className}`}>
      <div className="h-3.5 w-0.5 rounded bg-gradient-to-b from-[#8A6BA3] to-[#B99BCC]" />
      <div className="h-7 w-5 rounded-[50%_50%_50%_50%/40%_40%_60%_60%] bg-gradient-to-br from-[#e4c4b0] via-[#b99bcc] to-[#8a6ba3] shadow-[0_4px_12px_rgba(157,111,83,0.3)]" />
    </div>
  );
}

function MaterialTabs() {
  return (
    <div className="px-5 pb-16 lg:px-20 lg:pb-20 min-[1440px]:px-[120px]" role="tablist" aria-label="Filter by material">
      <div className="flex gap-2.5 overflow-x-auto pb-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {materialTabs.map((tab, index) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={index === 0}
            className={index === 0 ? "min-h-11 flex-none rounded-full bg-gradient-to-br from-[#c9b0dc] to-[#a980c0] px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-white shadow-[0_6px_20px_rgba(138,107,163,0.25)]" : "min-h-11 flex-none rounded-full border border-[rgba(186,164,203,0.34)] bg-transparent px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#72667D] transition-all duration-[220ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[rgba(145,116,170,0.12)] hover:text-[#8A6BA3]"}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}

function Products() {
  return (
    <section className="px-5 pb-16 pt-0 lg:px-20 lg:pb-24 min-[1440px]:px-[120px] min-[1440px]:pb-28" aria-labelledby="feat-title">
      <SectionHeader eyebrow="Bestsellers" title="Featured" emphasis="Pieces" id="feat-title" />
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6" role="list" aria-label="Featured products">
        {products.map((product) => (
          <article key={product.name} className="group cursor-pointer overflow-hidden rounded-[32px] border border-[rgba(218,203,231,0.42)] bg-[rgba(255,255,255,0.72)] shadow-[0_12px_48px_rgba(145,116,170,0.10)] transition-all duration-[220ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:shadow-[0_24px_72px_rgba(145,116,170,0.14)]" role="listitem" tabIndex={0}>
            <div className={`relative flex aspect-square items-center justify-center overflow-hidden bg-gradient-to-br ${product.bg}`}>
              <ProductVisual type={product.visual} />
              <button type="button" className="absolute right-2.5 top-2.5 flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(218,203,231,0.42)] bg-[rgba(255,255,255,0.72)] backdrop-blur-[8px] transition-colors hover:bg-[rgba(145,116,170,0.18)]" aria-label="Add to wishlist">
                <HeartIcon className="h-4 w-4" />
              </button>
              <div className={product.badgeTone === "new" ? "absolute left-2.5 top-2.5 rounded-full border border-[rgba(145,116,170,0.2)] bg-[rgba(145,116,170,0.16)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#8A6BA3]" : "absolute left-2.5 top-2.5 rounded-full border border-[rgba(157,111,83,0.18)] bg-[rgba(157,111,83,0.12)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#7a4f35]"}>
                {product.badge}
              </div>
            </div>
            <div className="px-4 pb-[18px] pt-3.5">
              <div className="mb-1.5 flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.14em] text-[#B99BCC]">{product.material}</span>
                <span className="h-[3px] w-[3px] rounded-full bg-[rgba(186,164,203,0.34)]" />
                <span className="flex items-center gap-[3px] text-[11px] text-[#A098B0]"><span className="text-[#b99bcc]">★</span> {product.rating}</span>
              </div>
              <h3 className="mb-2 font-serif text-[17px] font-medium leading-[1.3] tracking-[0.01em] text-[#32263B]">{product.name}</h3>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[16px] font-semibold text-[#32263B]">{product.price}</span>
                <span className="text-[13px] text-[#A098B0] line-through">{product.original}</span>
                <span className="rounded-full bg-[rgba(122,143,92,0.1)] px-2 py-0.5 text-[11px] font-semibold text-[#7a8f5c]">{product.off}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-9 text-center">
        <button className="min-h-12 rounded-full border border-[rgba(186,164,203,0.34)] bg-[rgba(255,255,255,0.72)] px-7 py-[15px] text-[12px] font-semibold uppercase tracking-[0.14em] text-[#8A6BA3] backdrop-blur-[12px] transition-all duration-[220ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[rgba(186,164,203,0.6)] hover:bg-[rgba(186,164,203,0.18)]" type="button">View All Products</button>
      </div>
    </section>
  );
}

function ProductVisual({ type }: { type: string }) {
  if (type === "ring") {
    return <div className="relative h-20 w-20 rounded-full border-[7px] border-transparent bg-[linear-gradient(white,white)_padding-box,linear-gradient(135deg,#e4c4b0,#b99bcc,#8a6ba3)_border-box] shadow-[0_6px_20px_rgba(157,111,83,0.25),inset_0_1px_0_rgba(255,255,255,0.6)] after:absolute after:right-3 after:top-[-2px] after:h-3.5 after:w-3.5 after:rounded-full after:bg-gradient-to-br after:from-[#e8d0c0] after:via-[#b99bcc] after:to-[#8a5e42] after:shadow-[0_2px_8px_rgba(157,111,83,0.4)]" role="img" aria-label="Diamond solitaire ring" />;
  }

  if (type === "necklace") {
    return (
      <div className="flex h-[90px] w-[70px] flex-col items-center" role="img" aria-label="Silver pendant necklace">
        <div className="h-10 w-[60px] rounded-t-full border-[1.5px] border-b-0 border-[#B99BCC] opacity-50" />
        <div className="-mt-0.5 h-7 w-7 rounded-full bg-gradient-to-br from-[#c9b0dc] via-[#a980c0] to-[#7a5898] shadow-[0_4px_16px_rgba(157,111,83,0.4)]" />
      </div>
    );
  }

  if (type === "wide-bracelet") {
    return <div className="h-14 w-[90px] rounded-full border-[5px] border-transparent bg-[linear-gradient(white,white)_padding-box,linear-gradient(135deg,#e4c4b0,#b99bcc,#8a6ba3,#b99bcc)_border-box] shadow-[0_4px_16px_rgba(157,111,83,0.25)]" role="img" aria-label="Gold bracelet" />;
  }

  return (
    <div className="flex gap-3.5" role="img" aria-label="Drop earrings">
      <DropEarring />
      <DropEarring className="mt-2.5" />
    </div>
  );
}

function EditorialBand() {
  const materials = [
    ["Silver", "from-[#e8e8e8] to-[#b0b0b0]"],
    ["9K Gold", "from-[#d8c0f0] to-[#9070c0]"],
    ["Diamond", "from-[#f0eeff] to-[#c8c0e8]"],
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#E8DDEF] to-[#F2EBF7] px-5 py-12 text-center before:absolute before:left-1/2 before:top-1/2 before:h-[400px] before:w-[400px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-[radial-gradient(circle,rgba(200,154,123,0.1)_0%,transparent_60%)] lg:px-20 lg:py-20 min-[1440px]:px-[120px] min-[1440px]:py-24" aria-label="Brand statement">
      <div className="relative z-10 mx-auto mb-5 flex max-w-60 items-center justify-center gap-4 before:h-px before:flex-1 before:bg-[rgba(186,164,203,0.34)] after:h-px after:flex-1 after:bg-[rgba(186,164,203,0.34)]">
        <div className="h-2 w-2 rounded-full bg-gradient-to-br from-[#B99BCC] to-[#8A6BA3]" />
      </div>
      <p className="relative z-10 mx-auto mb-6 max-w-[560px] font-serif text-[clamp(28px,7vw,48px)] font-normal italic leading-[1.25] tracking-[0.01em] text-[#32263B]">
        &quot;Jewellery is the most personal form of expression - we make it worthy of your story.&quot;
      </p>
      <div className="relative z-10 text-[11px] uppercase tracking-[0.28em] text-[#B99BCC]">TAWISA · Crafted with Intention</div>
      <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-5 lg:gap-7" role="list" aria-label="Materials we work with">
        {materials.map(([name, bg]) => (
          <div key={name} className="flex cursor-pointer items-center gap-2 rounded-full border border-[rgba(218,203,231,0.42)] bg-[rgba(255,255,255,0.72)] px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.1em] text-[#72667D] backdrop-blur-[12px] transition-all duration-[220ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[#B99BCC] hover:bg-[rgba(145,116,170,0.14)] hover:text-[#8A6BA3]" role="listitem">
            <span className={`h-2 w-2 rounded-full bg-gradient-to-br ${bg}`} />
            {name}
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-white px-5 py-16 lg:px-20 lg:py-24 min-[1440px]:px-[120px] min-[1440px]:py-28" aria-labelledby="reviews-title">
      <SectionHeader eyebrow="Customer Stories" title="Loved by" emphasis="Many" id="reviews-title" />
      <div className="flex snap-x gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible" role="list" aria-label="Customer reviews">
        {reviews.map((review) => (
          <article key={review.name} className="flex-[0_0_280px] snap-start rounded-[32px] border border-[rgba(218,203,231,0.42)] bg-[rgba(255,255,255,0.72)] p-6 shadow-[0_12px_48px_rgba(145,116,170,0.10)] lg:flex-auto" role="listitem">
            <div className="mb-3.5 flex gap-[3px]" aria-label="5 star rating">
              {Array.from({ length: 5 }).map((_, index) => <StarIcon key={index} />)}
            </div>
            <p className="mb-[18px] font-serif text-[17px] font-normal italic leading-normal text-[#32263B]">&quot;{review.quote}&quot;</p>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#c9b0dc] to-[#a980c0] font-serif text-[18px] font-medium text-white" aria-hidden="true">{review.initial}</div>
              <div>
                <div className="text-[14px] font-semibold text-[#32263B]">{review.name}</div>
                <div className="text-[12px] text-[#A098B0]">{review.role}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="bg-gradient-to-br from-[#F2EBF7] to-[#E8DDEF] px-5 py-14 text-center lg:px-20 lg:py-24 min-[1440px]:px-[120px] min-[1440px]:py-28" aria-labelledby="newsletter-title">
      <div className="mx-auto mb-3.5 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-[rgba(145,116,170,0.12)] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8A6BA3]">Early Access</div>
      <h2 className="mb-3 font-serif text-[clamp(30px,8vw,44px)] font-medium text-[#32263B]" id="newsletter-title">
        Stay in the <em className="italic text-[#8A6BA3]">Loop</em>
      </h2>
      <p className="mb-7 text-[14px] leading-[1.65] text-[#72667D]">New arrivals, exclusive drops and styling notes - delivered to your inbox.</p>
      <form className="mx-auto flex max-w-[420px] flex-col gap-3 sm:flex-row" aria-label="Newsletter signup" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="email-input" className="sr-only">Email address</label>
        <input className="min-h-12 flex-1 rounded-full border border-[rgba(186,164,203,0.34)] bg-[rgba(255,255,255,0.72)] px-5 py-[15px] font-sans text-[14px] text-[#32263B] outline-none backdrop-blur-[12px] placeholder:text-[#A098B0] focus:border-[#B99BCC]" id="email-input" type="email" placeholder="Your email address" autoComplete="email" />
        <button className="min-h-12 rounded-full bg-gradient-to-r from-[#c9b0dc] to-[#a980c0] px-7 py-[15px] text-[12px] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_8px_28px_rgba(138,107,163,0.28)] transition-all duration-[220ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(138,107,163,0.38)]" type="submit">Subscribe</button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1e1828] px-5 pb-8 pt-12 text-[rgba(250,246,242,0.7)] lg:px-20 lg:pb-10 lg:pt-16 min-[1440px]:px-[120px] min-[1440px]:pb-12 min-[1440px]:pt-20" role="contentinfo">
      <div className="mb-2 font-serif text-[32px] font-medium tracking-[0.12em] text-[#B99BCC]">TAWISA</div>
      <div className="mb-8 text-[12px] uppercase tracking-[0.2em] text-[rgba(145,116,170,0.55)]">Silver · Gold · Diamond</div>
      <nav className="mb-10 grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-10" aria-label="Footer navigation">
        {footerColumns.map(([title, ...links]) => (
          <div key={title}>
            <div className="mb-3.5 text-[11px] uppercase tracking-[0.2em] text-[#B99BCC]">{title}</div>
            <ul>
              {links.map((link) => (
                <li key={link} className="mb-2.5">
                  <a href="#" className="text-[14px] text-[rgba(250,246,242,0.55)] transition-colors duration-[220ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-[#B99BCC]">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
      <div className="flex flex-col gap-3 border-t border-[rgba(145,116,170,0.15)] pt-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="text-[12px] tracking-[0.06em] text-[rgba(145,116,170,0.4)]">© 2026 TAWISA. All rights reserved.</div>
        <div className="flex gap-3" aria-label="Social media">
          {["Instagram", "Pinterest", "YouTube"].map((item) => (
            <a key={item} href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(145,116,170,0.22)] text-[rgba(200,154,123,0.6)] transition-all duration-[220ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[rgba(145,116,170,0.4)] hover:bg-[rgba(145,116,170,0.12)] hover:text-[#B99BCC]" aria-label={item}>
              <span className="h-3 w-3 rounded-full border border-current" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function FloatingCart() {
  return (
    <button type="button" className="fixed bottom-5 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#c9b0dc] to-[#a980c0] shadow-[0_8px_28px_rgba(138,107,163,0.4)] transition-transform duration-[220ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-105 lg:hidden" aria-label="View cart (2 items)">
      <BagIcon className="h-[22px] w-[22px] text-white" />
      <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#32263B] text-[11px] font-bold text-white" aria-hidden="true">2</span>
    </button>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#32263B]">
      <Header />
      <Hero />
      <Categories />
      <MaterialTabs />
      <Products />
      <EditorialBand />
      <Testimonials />
      <Newsletter />
      <Footer />
      <FloatingCart />
    </main>
  );
}
