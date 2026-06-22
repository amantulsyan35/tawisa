"use client";

import Link from "next/link";
import { useState } from "react";
import {
  BagIcon,
  CloseIcon,
  HeartIcon,
  InstagramIcon,
  SearchIcon,
  UserIcon,
  YoutubeIcon,
} from "@/design-system";

const navLinks = [
  { label: "Collections", href: "/collections" },
  { label: "For Her", href: "/collections" },
  { label: "For Him", href: "/collections" },
  { label: "For Kids", href: "/collections" },
  { label: "About", href: "/#about" },
] as const;

const products = [
  {
    badge: "New",
    badgeClass: "badge-new",
    bgClass: "prod-bg-1",
    jewel: <div className="prod-jewel-ring" role="img" aria-label="Diamond solitaire ring" />,
    material: "9K Gold",
    rating: "4.9",
    name: "Solitaire Glow Ring",
    price: "₹8,499",
    originalPrice: "₹10,999",
    off: "23% off",
    href: "/products/solitaire-glow-ring",
  },
  {
    badge: "Hot",
    badgeClass: "badge-hot",
    bgClass: "prod-bg-2",
    jewel: (
      <div className="prod-jewel-necklace" role="img" aria-label="Silver pendant necklace">
        <div className="necklace-chain" />
        <div className="necklace-gem" />
      </div>
    ),
    material: "Silver",
    rating: "4.8",
    name: "Teardrop Pendant",
    price: "₹3,299",
    originalPrice: "₹4,500",
    off: "27% off",
    href: "/products/solitaire-glow-ring",
  },
  {
    badge: "New",
    badgeClass: "badge-new",
    bgClass: "prod-bg-3",
    jewel: (
      <div className="prod-jewel-earring" role="img" aria-label="Drop earrings">
        <div className="prod-earring">
          <div className="prod-earring-hook" />
          <div className="prod-earring-gem" />
        </div>
        <div className="prod-earring" style={{ marginTop: 10 }}>
          <div className="prod-earring-hook" />
          <div className="prod-earring-gem" />
        </div>
      </div>
    ),
    material: "Diamond",
    rating: "5.0",
    name: "Dewdrop Earrings",
    price: "₹14,799",
    originalPrice: "₹18,000",
    off: "18% off",
    href: "/products/solitaire-glow-ring",
  },
  {
    badge: "Hot",
    badgeClass: "badge-hot",
    bgClass: "prod-bg-4",
    jewel: <div className="prod-jewel-bracelet" role="img" aria-label="Gold bracelet" />,
    material: "9K Gold",
    rating: "4.7",
    name: "Celestial Bracelet",
    price: "₹11,299",
    originalPrice: "₹14,000",
    off: "19% off",
    href: "/products/solitaire-glow-ring",
  },
];

const reviews = [
  {
    quote:
      '"The ring arrived beautifully packaged. The quality is exceptional for the price — it looks just like high-end boutique jewellery."',
    initial: "P",
    name: "Priya Sharma",
    role: "Corporate Executive, Bengaluru",
  },
  {
    quote:
      '"Bought a silver bracelet for my wife. She gets compliments everywhere she wears it. Will definitely order again from TAWISA."',
    initial: "R",
    name: "Rahul Menon",
    role: "Product Manager, Mumbai",
  },
  {
    quote:
      '"The customization feature is incredible. I designed my own pendant and it came out exactly as I imagined. Absolutely stunning!"',
    initial: "A",
    name: "Ananya Iyer",
    role: "Designer, Hyderabad",
  },
];

function Stars() {
  return (
    <div className="review-stars" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#b99bcc" key={index}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <Link href="/" className="nav-logo" aria-label="TAWISA Home">
          TAWISA
        </Link>

        <nav className="nav-links" aria-label="Desktop navigation">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.label}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="nav-icon-btn" aria-label="Search">
            <SearchIcon size={18} />
          </button>
          <Link href="/wishlist?state=filled" className="nav-icon-btn" aria-label="Wishlist">
            <HeartIcon size={18} />
          </Link>
          <Link href="/cart" className="nav-icon-btn hide-mobile" aria-label="Cart">
            <BagIcon size={18} />
          </Link>
          <Link href="/account" className="nav-icon-btn hide-mobile" aria-label="My Account">
            <UserIcon size={18} />
          </Link>
          <button className="nav-menu-btn" aria-label="Open menu" onClick={() => setDrawerOpen(true)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`nav-drawer ${drawerOpen ? "open" : ""}`} id="drawer" role="dialog" aria-modal="true" aria-label="Navigation menu">
        <button className="drawer-backdrop" onClick={() => setDrawerOpen(false)} aria-label="Close menu backdrop" />
        <div className="drawer-panel">
          <button className="drawer-close" onClick={() => setDrawerOpen(false)} aria-label="Close menu">
            <CloseIcon size={22} />
          </button>
          {[...navLinks, { label: "Wishlist", href: "/wishlist?state=filled" }, { label: "Bag", href: "/cart" }, { label: "Account", href: "/account" }].map((link) => (
            <Link href={link.href} className="drawer-item" key={link.label} onClick={() => setDrawerOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <section className="hero" aria-label="Hero banner">
        <div className="hero-content">
          <div className="hero-eyebrow">New Collection · 2026</div>

          <h1 className="hero-title">
            Jewellery for
            <br />
            the <em>Modern</em>
            <br />
            Soul
          </h1>

          <p className="hero-sub">
            Crafted in silver, gold & diamond — jewellery that moves with you, designed for the life you live.
          </p>

          <div className="hero-actions">
            <Link href="/collections" className="btn-primary">Explore Collections</Link>
            <Link href="/#about" className="btn-ghost">View Lookbook</Link>
          </div>

          <div className="trust-bar" role="list" aria-label="Brand stats">
            {[
              ["200+", "Designs"],
              ["3", "Metals"],
              ["4.9★", "Rated"],
              ["50K+", "Happy Customers"],
            ].map(([value, label]) => (
              <div className="trust-item" role="listitem" key={label}>
                <div className="trust-num">{value}</div>
                <div className="trust-label">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual" role="img" aria-label="TAWISA signature ring">
          <div className="jewel-ring">
            <div className="jewel-center" />
            <div className="jewel-tag">New Arrival</div>
            <div className="jewel-badge">9K Gold · ₹8,499</div>
          </div>
        </div>
      </section>

      <section className="section categories-bg" aria-labelledby="cat-title">
        <div className="section-header">
          <div className="section-eyebrow">Curated Collections</div>
          <h2 className="section-title" id="cat-title">
            Shop by <em>Audience</em>
          </h2>
        </div>

        <div className="category-scroll" role="list" aria-label="Shop by audience">
          <Link href="/collections" className="category-card" role="listitem">
            <div className="category-visual cat-her">
              <div className="jewel-earring-pair" role="img" aria-label="Earrings">
                <div className="jewel-earring">
                  <div className="earring-hook" />
                  <div className="earring-drop" />
                </div>
                <div className="jewel-earring" style={{ marginTop: 10 }}>
                  <div className="earring-hook" />
                  <div className="earring-drop" />
                </div>
              </div>
            </div>
            <div className="category-info">
              <div className="category-tag">Collection</div>
              <div className="category-name">For Her</div>
              <div className="category-count">124 styles available</div>
              <div className="category-arrow">
                Shop now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          <Link href="/collections" className="category-card" role="listitem">
            <div className="category-visual cat-him">
              <div className="jewel-bracelet" role="img" aria-label="Bracelet" />
            </div>
            <div className="category-info">
              <div className="category-tag">Collection</div>
              <div className="category-name">For Him</div>
              <div className="category-count">68 styles available</div>
              <div className="category-arrow">
                Shop now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          <Link href="/collections" className="category-card" role="listitem">
            <div className="category-visual cat-kids">
              <div className="jewel-pendant" role="img" aria-label="Pendant" />
            </div>
            <div className="category-info">
              <div className="category-tag">Collection</div>
              <div className="category-name">For Kids</div>
              <div className="category-count">42 styles available</div>
              <div className="category-arrow">
                Shop now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <div className="material-strip" role="tablist" aria-label="Filter by material">
        <div className="material-tabs">
          {["All", "Silver", "9K Gold", "Diamond", "CZ Stones", "Customise"].map((tab, index) => (
            <button className={`mat-tab ${index === 0 ? "active" : ""}`} role="tab" aria-selected={index === 0} key={tab}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      <section className="section featured-section" aria-labelledby="feat-title">
        <div className="section-header">
          <div className="section-eyebrow">Bestsellers</div>
          <h2 className="section-title" id="feat-title">
            Featured <em>Pieces</em>
          </h2>
        </div>

        <div className="products-grid" role="list" aria-label="Featured products">
          {products.map((product) => (
            <article className="product-card" role="listitem" tabIndex={0} key={product.name}>
              <Link href={product.href} className={`product-img-wrap ${product.bgClass}`}>
                {product.jewel}
                <span className="product-wishlist" aria-label="Add to wishlist">
                  <HeartIcon size={16} />
                </span>
                <div className={`product-badge ${product.badgeClass}`}>{product.badge}</div>
              </Link>
              <Link href={product.href} className="product-info">
                <div className="product-meta">
                  <span className="product-material">{product.material}</span>
                  <span className="product-dot" />
                  <span className="product-rating">
                    <span className="star-fill">★</span> {product.rating}
                  </span>
                </div>
                <div className="product-name">{product.name}</div>
                <div className="product-pricing">
                  <span className="price-current">{product.price}</span>
                  <span className="price-original">{product.originalPrice}</span>
                  <span className="price-off">{product.off}</span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="center-action">
          <Link href="/collections" className="btn-ghost">View All Products</Link>
        </div>
      </section>

      <section className="editorial-band" id="about" aria-label="Brand statement">
        <div className="editorial-divider">
          <div className="editorial-gem" />
        </div>
        <p className="editorial-quote">
          &quot;Jewellery is the most personal form of expression — we make it worthy of your story.&quot;
        </p>
        <div className="editorial-sub">TAWISA · Crafted with Intention</div>

        <div className="materials-row" role="list" aria-label="Materials we work with">
          <div className="material-pill" role="listitem">
            <div className="material-dot dot-silver" />
            Silver
          </div>
          <div className="material-pill" role="listitem">
            <div className="material-dot dot-gold" />
            9K Gold
          </div>
          <div className="material-pill" role="listitem">
            <div className="material-dot dot-diamond" />
            Diamond
          </div>
        </div>
      </section>

      <section className="section testimonials-bg" aria-labelledby="reviews-title">
        <div className="section-header">
          <div className="section-eyebrow">Customer Stories</div>
          <h2 className="section-title" id="reviews-title">
            Loved by <em>Many</em>
          </h2>
        </div>

        <div className="testimonials-scroll" role="list" aria-label="Customer reviews">
          {reviews.map((review) => (
            <article className="review-card" role="listitem" key={review.name}>
              <Stars />
              <p className="review-text">{review.quote}</p>
              <div className="review-author">
                <div className="review-avatar" aria-hidden="true">
                  {review.initial}
                </div>
                <div>
                  <div className="review-name">{review.name}</div>
                  <div className="review-role">{review.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="newsletter" aria-labelledby="newsletter-title">
        <div className="section-eyebrow newsletter-eyebrow">Early Access</div>
        <h2 className="newsletter-title" id="newsletter-title">
          Stay in the <em>Loop</em>
        </h2>
        <p className="newsletter-sub">New arrivals, exclusive drops and styling notes — delivered to your inbox.</p>
        <form className="newsletter-form" onSubmit={(event) => event.preventDefault()} aria-label="Newsletter signup">
          <label htmlFor="email-input" className="sr-only">
            Email address
          </label>
          <input className="newsletter-input" id="email-input" type="email" placeholder="Your email address" autoComplete="email" />
          <button className="btn-primary" type="submit">
            Subscribe
          </button>
        </form>
      </section>

      <footer className="footer" role="contentinfo">
        <div className="footer-logo">TAWISA</div>
        <div className="footer-tagline">Silver · Gold · Diamond</div>

        <nav className="footer-links" aria-label="Footer navigation">
          {[
            ["Shop", ["For Her", "For Him", "For Kids", "Customise", "New Arrivals"]],
            ["Collections", ["Rings", "Earrings", "Necklaces", "Bracelets", "Pendants"]],
            ["Help", ["My Orders", "Track Shipment", "Returns", "Size Guide", "Care Guide"]],
            ["Company", ["About TAWISA", "Craftsmanship", "Sustainability", "Press", "Contact"]],
          ].map(([title, links]) => (
            <div className="footer-col" key={title as string}>
              <div className="footer-col-title">{title}</div>
              <ul>
                {(links as string[]).map((link) => (
                  <li key={link}>
                    <Link href={title === "Help" && link === "My Orders" ? "/account/orders" : title === "Shop" || title === "Collections" ? "/collections" : title === "Company" && link === "About TAWISA" ? "/#about" : "/"}>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="footer-bottom">
          <div className="footer-copy">© 2026 TAWISA. All rights reserved.</div>
          <div className="footer-socials" aria-label="Social media">
            <Link href="/" className="social-btn" aria-label="Instagram">
              <InstagramIcon size={16} />
            </Link>
            <Link href="/" className="social-btn" aria-label="Pinterest">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.23-5.22 1.23-5.22s-.31-.63-.31-1.56c0-1.46.85-2.55 1.9-2.55.9 0 1.33.67 1.33 1.48 0 .9-.58 2.25-.87 3.5-.25 1.04.52 1.89 1.53 1.89 1.84 0 3.08-2.37 3.08-5.17 0-2.14-1.44-3.64-3.5-3.64-2.38 0-3.78 1.79-3.78 3.63 0 .72.28 1.49.62 1.91.07.08.08.15.06.23l-.23.96c-.04.14-.12.17-.28.1-1.03-.48-1.67-1.99-1.67-3.2 0-2.6 1.89-4.99 5.46-4.99 2.86 0 5.09 2.04 5.09 4.77 0 2.84-1.8 5.13-4.28 5.13-.84 0-1.62-.44-1.89-.95l-.51 1.93c-.19.71-.69 1.6-1.02 2.14.77.24 1.58.37 2.42.37 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
              </svg>
            </Link>
            <Link href="/" className="social-btn" aria-label="YouTube">
              <YoutubeIcon size={16} />
            </Link>
          </div>
        </div>
      </footer>

      <Link href="/cart" className="floating-cart" aria-label="View cart (2 items)">
        <BagIcon size={22} />
        <div className="cart-count" aria-hidden="true">
          2
        </div>
      </Link>
    </>
  );
}
