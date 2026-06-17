"use client";

import Link from "next/link";
import { useState } from "react";

const thumbs = [
  ["th1", "View 1: Front angle"],
  ["th2", "View 2: Side angle"],
  ["th3", "View 3: Top view"],
  ["th4", "View 4: On hand"],
] as const;

const metals = [
  ["Silver", "swatch-silver"],
  ["9K Gold", "swatch-gold"],
  ["Rose Gold", "swatch-rose"],
] as const;

const stones = [
  ["Plain", "ss-plain"],
  ["CZ Stones", "ss-cz"],
  ["Diamond", "ss-diamond"],
] as const;

const sizes = ["5", "6", "7", "8", "9", "10"] as const;

const accordions = [
  {
    title: "Product Details",
    content: (
      <div className="spec-list">
        {[
          ["Metal", "9K Gold"],
          ["Stone", "CZ — Amethyst"],
          ["Weight", "2.4 grams"],
          ["Finish", "High Polished"],
          ["Certification", "BIS Hallmarked"],
          ["Setting", "Prong Set"],
        ].map(([key, value]) => (
          <div className="spec-item" key={key}>
            <div className="spec-key">{key}</div>
            <div className="spec-val">{value}</div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "About this piece",
    content: (
      <>
        <p>
          The Solitaire Glow Ring is crafted for those who wear their elegance quietly but confidently. A single
          luminous stone set in a refined 9K gold band — designed to catch light and attention in equal measure.
        </p>
        <br />
        <p>Perfect for everyday wear or special occasions. Pairs beautifully with our Dewdrop Earrings from the same collection.</p>
      </>
    ),
  },
  {
    title: "Care Instructions",
    content: (
      <>
        <p>To maintain the brilliance of your jewellery:</p>
        <br />
        <p>
          · Store in the provided pouch when not in use
          <br />
          · Avoid contact with perfumes, lotions and cleaning agents
          <br />
          · Clean gently with a soft, dry cloth
          <br />· Remove before swimming or bathing
        </p>
      </>
    ),
  },
  {
    title: "Shipping & Returns",
    content: (
      <p>
        · Free standard delivery (5–7 business days)
        <br />
        · Express delivery available at checkout (2–3 days)
        <br />
        · 15-day hassle-free returns
        <br />· All orders shipped in a signature TAWISA gift box
      </p>
    ),
  },
];

const reviews = [
  {
    initial: "P",
    name: "Priya Sharma",
    date: "12 May 2026",
    text: "Absolutely stunning ring. The stone catches light beautifully and the 9K gold feels substantial and premium. Got so many compliments at work!",
    variant: "9K Gold · CZ Stones · Size 7",
    stars: 5,
  },
  {
    initial: "N",
    name: "Neha Joshi",
    date: "8 May 2026",
    text: "Gifted this to my mom and she was in tears. The packaging is luxury-level, the ring is exactly as described. Delivery was 2 days early!",
    variant: "9K Gold · CZ Stones · Size 6",
    stars: 5,
    avatarStyle: { background: "linear-gradient(135deg, #b8a0c8, #8a6ba3)" },
  },
  {
    initial: "A",
    name: "Arjun Rao",
    date: "2 May 2026",
    text: "Bought this as an anniversary gift for my wife. She loved it. The silver option is equally gorgeous. Slightly delayed delivery but overall excellent.",
    variant: "Silver · Plain · Size 8",
    stars: 4,
    avatarStyle: { background: "linear-gradient(135deg, #a8b8c8, #607080)" },
  },
];

const similarProducts = [
  ["sim-bg-1", <div className="sim-ring sim-ring-1" role="img" aria-label="Gold ring illustration" key="ring" />, "9K Gold", "Halo Glow Ring", "₹9,299"],
  ["sim-bg-2", <div className="sim-pendant" role="img" aria-label="Silver pendant illustration" key="pendant" />, "Silver", "Teardrop Pendant", "₹3,299"],
  [
    "sim-bg-3",
    <div className="sim-earring-set" role="img" aria-label="Earrings illustration" key="earrings">
      <div className="sim-earring-piece">
        <div className="sim-earring-hook" />
        <div className="sim-earring-drop" />
      </div>
      <div className="sim-earring-piece" style={{ marginTop: 8 }}>
        <div className="sim-earring-hook" />
        <div className="sim-earring-drop" />
      </div>
    </div>,
    "Diamond",
    "Dewdrop Earrings",
    "₹14,799",
  ],
  ["sim-bg-4", <div className="sim-ring sim-ring-2" role="img" aria-label="Silver ring illustration" key="silver-ring" />, "Silver", "Minimal Band Ring", "₹2,899"],
] as const;

function Star({ size = 15, fill = "#b99bcc" }: { size?: number; fill?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function ProductPageClient() {
  const [activeThumb, setActiveThumb] = useState(0);
  const [metal, setMetal] = useState("9K Gold");
  const [stone, setStone] = useState("CZ Stones");
  const [size, setSize] = useState("7");
  const [openAccordion, setOpenAccordion] = useState(0);

  return (
    <div className="pdp-page">
      <header className="pdp-nav" role="banner">
        <Link href="/" className="nav-back" aria-label="Back to shop">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
          </svg>
          Shop
        </Link>
        <Link href="/" className="nav-logo" aria-label="TAWISA Home">
          TAWISA
        </Link>
        <div className="nav-right">
          <button className="nav-icon-btn" aria-label="Share product">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          </button>
          <button className="nav-icon-btn" aria-label="Cart (2 items)" style={{ position: "relative" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <div className="cart-badge" aria-hidden="true">
              2
            </div>
          </button>
        </div>
      </header>

      <main>
        <div className="pdp-layout">
          <div className="gallery-col">
            <div className="gallery" role="region" aria-label="Product images">
              <div className="gallery-main" role="img" aria-label="Solitaire Glow Ring — 9K Gold with amethyst center stone">
                <div className="gallery-ring" aria-hidden="true">
                  <div className="ring-band" />
                  <div className="ring-stone-cluster">
                    <div className="stone-side" />
                    <div className="stone-center" />
                    <div className="stone-side" />
                  </div>
                  <div className="ring-shine" />
                </div>
                <div className="gallery-tag" aria-label="Material: 9K Gold">
                  <div className="metal-dot" />
                  9K Gold
                </div>
                <div className="gallery-badge">23% off</div>
              </div>

              <div className="thumb-strip" role="list" aria-label="Product image gallery">
                {thumbs.map(([thumbClass, label], index) => (
                  <button
                    className={`thumb ${activeThumb === index ? "active" : ""}`}
                    role="listitem"
                    aria-label={label}
                    aria-current={activeThumb === index ? "true" : undefined}
                    key={thumbClass}
                    onClick={() => setActiveThumb(index)}
                  >
                    <div className={`thumb-ring ${thumbClass}`} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <section className="product-info" aria-labelledby="product-name">
              <nav aria-label="Breadcrumb">
                <ol className="product-breadcrumb">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li aria-hidden="true">
                    <span className="breadcrumb-sep">/</span>
                  </li>
                  <li>
                    <a href="#">Rings</a>
                  </li>
                  <li aria-hidden="true">
                    <span className="breadcrumb-sep">/</span>
                  </li>
                  <li aria-current="page" className="breadcrumb-current">
                    Solitaire Glow Ring
                  </li>
                </ol>
              </nav>

              <div className="product-header">
                <div className="product-collection">Signature Collection</div>
                <h1 className="product-name" id="product-name">
                  Solitaire Glow Ring
                </h1>
              </div>

              <div className="rating-row">
                <div className="stars" role="img" aria-label="4.9 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} />
                  ))}
                </div>
                <span className="rating-score">4.9</span>
                <span className="rating-divider" />
                <span className="rating-count">128 reviews</span>
                <span className="rating-divider" />
                <span className="sold-count">420 sold</span>
              </div>

              <div className="pricing-block" role="region" aria-label="Pricing">
                <div className="price-main">
                  <span className="price-current">₹8,499</span>
                  <span className="price-original" aria-label="Original price ₹10,999">
                    ₹10,999
                  </span>
                  <span className="price-badge" role="note">
                    23% OFF
                  </span>
                </div>
                <div className="price-note">
                  Inclusive of all taxes · <span>Free delivery by Thu, 22 May</span>
                </div>
              </div>

              <section className="customize-section" aria-label="Product customization">
                <div className="option-group" role="group" aria-labelledby="metal-label">
                  <div className="option-label" id="metal-label">
                    Metal
                    <span className="option-selected">{metal}</span>
                  </div>
                  <div className="metal-options" role="list">
                    {metals.map(([name, swatch]) => (
                      <button className={`metal-option ${metal === name ? "active" : ""}`} role="listitem" key={name} onClick={() => setMetal(name)}>
                        <span className="metal-circle" role="button" aria-pressed={metal === name} aria-label={`Select ${name}${metal === name ? " (currently selected)" : ""}`}>
                          <span className={`metal-swatch ${swatch}`} />
                        </span>
                        <span className="metal-name">{name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="option-group" role="group" aria-labelledby="stone-label">
                  <div className="option-label" id="stone-label">
                    Stone
                    <span className="option-selected">{stone}</span>
                  </div>
                  <div className="stone-options" role="list">
                    {stones.map(([name, swatch]) => (
                      <button className={`stone-chip ${stone === name ? "active" : ""}`} role="listitem" aria-pressed={stone === name} key={name} onClick={() => setStone(name)}>
                        <span className={`stone-swatch-sm ${swatch}`} />
                        {name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="option-group" role="group" aria-labelledby="size-label">
                  <div className="option-label" id="size-label">
                    Ring Size
                    <span className="size-guide-link" role="button" tabIndex={0}>
                      Size Guide
                    </span>
                  </div>
                  <div className="size-options" role="list" aria-label="Available ring sizes">
                    {sizes.map((item) => {
                      const unavailable = item === "5";
                      return (
                        <button
                          className={`size-chip ${size === item ? "active" : ""} ${unavailable ? "unavailable" : ""}`}
                          role="listitem"
                          aria-label={`Size ${item}${unavailable ? ", unavailable" : size === item ? ", selected" : ""}`}
                          aria-pressed={!unavailable && size === item ? "true" : undefined}
                          disabled={unavailable}
                          key={item}
                          onClick={() => setSize(item)}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </section>

              <div className="cta-block" role="group" aria-label="Purchase actions">
                <button className="btn-cart">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                  Add to Cart
                </button>
                <button className="btn-buy">Buy Now</button>
                <button className="btn-wish">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                  Save to Wishlist
                </button>
              </div>

              <div className="trust-row" role="list" aria-label="Trust signals">
                <div className="trust-chip" role="listitem">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <div className="trust-chip-label">BIS Certified</div>
                  <div className="trust-chip-sub">Hallmarked</div>
                </div>
                <div className="trust-chip" role="listitem">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div className="trust-chip-label">Free Delivery</div>
                  <div className="trust-chip-sub">Pan India</div>
                </div>
                <div className="trust-chip" role="listitem">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
                    <polyline points="1 4 1 10 7 10" />
                    <path d="M3.51 15a9 9 0 1 0 .49-3.51" />
                  </svg>
                  <div className="trust-chip-label">15-day Returns</div>
                  <div className="trust-chip-sub">Easy process</div>
                </div>
              </div>
            </section>

            <section className="accordion-section" aria-label="Product details">
              {accordions.map((item, index) => {
                const isOpen = openAccordion === index;
                return (
                  <div className="accordion-item" key={item.title}>
                    <button
                      className={`accordion-trigger ${isOpen ? "open" : ""}`}
                      aria-expanded={isOpen}
                      onClick={() => setOpenAccordion(isOpen ? -1 : index)}
                    >
                      {item.title}
                      <ChevronIcon />
                    </button>
                    <div className={`accordion-body ${isOpen ? "open" : ""}`}>{item.content}</div>
                  </div>
                );
              })}
            </section>
          </div>
        </div>

        <section className="reviews-section" aria-labelledby="reviews-heading">
          <div className="reviews-header">
            <div className="reviews-eyebrow">Customer Reviews</div>
            <h2 className="reviews-title" id="reviews-heading">
              What they say
            </h2>
          </div>

          <div className="reviews-summary" role="region" aria-label="Rating summary">
            <div className="summary-big">
              <div className="summary-num">4.9</div>
              <div className="summary-stars" aria-label="4.9 out of 5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star size={14} key={index} />
                ))}
              </div>
              <div className="summary-count">128 reviews</div>
            </div>

            <div className="summary-bars" role="list" aria-label="Rating breakdown">
              {[["5", "88%"], ["4", "9%"], ["3", "2%"], ["2", "1%"], ["1", "0%"]].map(([label, pct]) => (
                <div className="bar-row" role="listitem" key={label}>
                  <span className="bar-label">{label}</span>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ width: pct }} aria-hidden="true" />
                  </div>
                  <span className="bar-pct">{pct}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reviews-list" role="list" aria-label="Customer reviews">
            {reviews.map((review) => (
              <article className="review-card" role="listitem" key={review.name}>
                <div className="review-header">
                  <div className="review-author-row">
                    <div className="review-avatar" style={review.avatarStyle} aria-hidden="true">
                      {review.initial}
                    </div>
                    <div>
                      <div className="review-name">{review.name}</div>
                      <div className="review-date">{review.date}</div>
                    </div>
                  </div>
                  <div className="review-stars" aria-label={`${review.stars} stars`}>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star size={13} fill={index < review.stars ? "#b99bcc" : "#ddd0c8"} key={index} />
                    ))}
                  </div>
                </div>
                <p className="review-text">{review.text}</p>
                <span className="review-variant">{review.variant}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="similar-section" aria-labelledby="similar-heading">
          <div className="similar-eyebrow">You May Also Like</div>
          <h2 className="similar-title" id="similar-heading">
            Complete the Look
          </h2>
          <div className="similar-scroll" role="list" aria-label="Similar products">
            {similarProducts.map(([bgClass, jewel, material, name, price]) => (
              <article className="similar-card" role="listitem" tabIndex={0} key={name}>
                <div className={`similar-img ${bgClass}`}>{jewel}</div>
                <div className="similar-info">
                  <div className="similar-mat">{material}</div>
                  <div className="similar-name">{name}</div>
                  <div className="similar-price">{price}</div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <div className="sticky-cta" role="toolbar" aria-label="Purchase actions">
        <button className="sticky-wish" aria-label="Save to wishlist">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
        <button className="sticky-cart">Add to Cart</button>
        <button className="sticky-buy">Buy Now</button>
      </div>
    </div>
  );
}
