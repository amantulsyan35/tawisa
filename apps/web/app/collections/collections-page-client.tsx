"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = ["Collections", "For Her", "For Him", "For Kids", "About"] as const;
const quickFilters = ["All", "Silver", "9K Gold", "Diamond", "Rings", "Earrings", "Necklaces", "Bracelets"] as const;
const materials = ["Silver", "9K Gold", "Diamond"] as const;

const products = [
  {
    bg: "prod-bg-1",
    jewel: <div className="prod-jewel-ring" role="img" aria-label="Ring" />,
    badge: "New",
    badgeClass: "badge-new",
    material: "9K Gold",
    rating: "4.9",
    name: "Solitaire Glow Ring",
    price: "₹8,499",
    originalPrice: "₹10,999",
    off: "23% off",
  },
  {
    bg: "prod-bg-2",
    jewel: (
      <div className="prod-jewel-necklace" role="img" aria-label="Necklace">
        <div className="necklace-chain" />
        <div className="necklace-gem" />
      </div>
    ),
    badge: "Hot",
    badgeClass: "badge-hot",
    material: "Silver",
    rating: "4.8",
    name: "Teardrop Pendant",
    price: "₹3,299",
    originalPrice: "₹4,500",
    off: "27% off",
  },
  {
    bg: "prod-bg-3",
    jewel: (
      <div className="prod-jewel-earring" role="img" aria-label="Earrings">
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
    badge: "New",
    badgeClass: "badge-new",
    material: "Diamond",
    rating: "5.0",
    name: "Dewdrop Earrings",
    price: "₹14,799",
    originalPrice: "₹18,000",
    off: "18% off",
  },
  {
    bg: "prod-bg-4",
    jewel: <div className="prod-jewel-bracelet" role="img" aria-label="Bracelet" />,
    badge: undefined,
    badgeClass: undefined,
    material: "9K Gold",
    rating: "4.7",
    name: "Celestial Bracelet",
    price: "₹11,299",
    originalPrice: "₹14,000",
    off: "19% off",
  },
  {
    bg: "prod-bg-5",
    jewel: <div className="prod-jewel-pendant" role="img" aria-label="Pendant" />,
    badge: "New",
    badgeClass: "badge-new",
    material: "Silver",
    rating: "4.9",
    name: "Luna Pendant",
    price: "₹4,799",
    originalPrice: "₹6,200",
    off: "23% off",
  },
  {
    bg: "prod-bg-6",
    jewel: <div className="prod-jewel-ring" role="img" aria-label="Ring" />,
    badge: "Sale",
    badgeClass: "badge-sale",
    material: "9K Gold",
    rating: "4.6",
    name: "Aurora Band Ring",
    price: "₹7,299",
    originalPrice: "₹9,500",
    off: "23% off",
  },
  {
    bg: "prod-bg-7",
    jewel: (
      <div className="prod-jewel-earring" role="img" aria-label="Earrings">
        <div className="prod-earring">
          <div className="prod-earring-hook" />
          <div className="prod-earring-gem" />
        </div>
        <div className="prod-earring" style={{ marginTop: 8 }}>
          <div className="prod-earring-hook" />
          <div className="prod-earring-gem" />
        </div>
      </div>
    ),
    badge: undefined,
    badgeClass: undefined,
    material: "Diamond",
    rating: "4.8",
    name: "Stardust Hoops",
    price: "₹9,499",
    originalPrice: "₹12,000",
    off: "21% off",
  },
  {
    bg: "prod-bg-8",
    jewel: <div className="prod-jewel-bracelet" role="img" aria-label="Bracelet" />,
    badge: "Hot",
    badgeClass: "badge-hot",
    material: "Silver",
    rating: "4.7",
    name: "Infinity Bangle",
    price: "₹5,199",
    originalPrice: "₹6,800",
    off: "24% off",
  },
] as const;

function HeartIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function BagIcon({ size = 18, stroke = "currentColor" }: { size?: number; stroke?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

export default function CollectionsPageClient() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeMaterial, setActiveMaterial] = useState("Silver");
  const [gridMode, setGridMode] = useState<"four" | "two">("four");

  return (
    <div className="catalog-page">
      <nav className="navbar" role="navigation">
        <Link href="/" className="nav-logo">
          TAWISA
        </Link>
        <nav className="nav-links">
          {navLinks.map((link) => (
            <Link href={link === "Collections" ? "/collections" : "#"} key={link}>
              {link}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="nav-icon-btn" aria-label="Search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
          <button className="nav-icon-btn" aria-label="Wishlist">
            <HeartIcon />
          </button>
          <button className="nav-icon-btn hide-mobile" aria-label="Cart">
            <BagIcon />
          </button>
          <button className="nav-icon-btn hide-mobile" aria-label="My Account">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>
          <button className="nav-menu-btn" aria-label="Open menu" onClick={() => setDrawerOpen(true)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`nav-drawer ${drawerOpen ? "open" : ""}`} id="drawer" role="dialog" aria-modal="true">
        <button className="drawer-backdrop" onClick={() => setDrawerOpen(false)} aria-label="Close menu backdrop" />
        <div className="drawer-panel">
          <button className="drawer-close" onClick={() => setDrawerOpen(false)} aria-label="Close menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          {[...navLinks, "Account"].map((link) => (
            <Link href={link === "Collections" ? "/collections" : "#"} className="drawer-item" key={link} onClick={() => setDrawerOpen(false)}>
              {link}
            </Link>
          ))}
        </div>
      </div>

      <section className="catalog-banner" aria-label="Catalog banner">
        <div className="banner-placeholder" aria-hidden="true">
          <div className="placeholder-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="m21 15-5-5L5 21" />
            </svg>
          </div>
          <span className="placeholder-label">Replace with collection image — 1440 × 480px</span>
        </div>
        <div className="banner-overlay" aria-hidden="true" />
        <div className="banner-content">
          <div className="banner-text-block">
            <div className="banner-eyebrow">All Collections</div>
            <h1 className="banner-title">
              Explore <em>Every</em> Piece
            </h1>
            <p className="banner-count">200+ designs across Silver, Gold & Diamond</p>
          </div>
          <div className="banner-badge">New Season · 2026</div>
        </div>
      </section>

      <div className="catalog-body">
        <div className="mobile-filter-bar" role="toolbar" aria-label="Quick filters">
          {quickFilters.map((filter, index) => (
            <button className={`filter-chip ${activeFilter === filter ? "active" : ""}`} key={filter} onClick={() => setActiveFilter(filter)}>
              {index === 0 ? (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="6" y1="12" x2="18" y2="12" />
                  <line x1="9" y1="18" x2="15" y2="18" />
                </svg>
              ) : null}
              {filter}
            </button>
          ))}
        </div>

        <aside className="filter-sidebar" aria-label="Product filters">
          <div className="sidebar-title">Filters</div>
          <div className="filter-group">
            <div className="filter-group-title">Category</div>
            {[["Rings", "48", true], ["Earrings", "62", true], ["Necklaces", "34", false], ["Bracelets", "28", false], ["Pendants", "30", false]].map(
              ([label, count, checked]) => (
                <label className="filter-option" key={String(label)}>
                  <input type="checkbox" defaultChecked={Boolean(checked)} /> {label} <span className="filter-count">{count}</span>
                </label>
              ),
            )}
          </div>
          <div className="filter-group">
            <div className="filter-group-title">Material</div>
            <div className="swatch-row">
              {materials.map((material) => (
                <button
                  className={`swatch swatch-${material === "9K Gold" ? "gold" : material.toLowerCase()} ${activeMaterial === material ? "active" : ""}`}
                  title={material}
                  role="radio"
                  aria-checked={activeMaterial === material}
                  key={material}
                  onClick={() => setActiveMaterial(material)}
                />
              ))}
            </div>
          </div>
          <div className="filter-group">
            <div className="filter-group-title">Price Range</div>
            <div className="price-inputs">
              <input className="price-input" type="number" placeholder="₹ Min" defaultValue="500" />
              <span className="price-sep">—</span>
              <input className="price-input" type="number" placeholder="₹ Max" defaultValue="20000" />
            </div>
            <input className="price-slider" type="range" min="500" max="50000" defaultValue="20000" aria-label="Max price" />
          </div>
          <div className="filter-group">
            <div className="filter-group-title">Shop For</div>
            {[["For Her", "124", true], ["For Him", "68", true], ["For Kids", "42", false]].map(([label, count, checked]) => (
              <label className="filter-option" key={String(label)}>
                <input type="checkbox" defaultChecked={Boolean(checked)} /> {label} <span className="filter-count">{count}</span>
              </label>
            ))}
          </div>
          <div className="sidebar-actions">
            <button className="btn-apply">Apply</button>
            <button className="btn-clear">Clear</button>
          </div>
        </aside>

        <div className="product-area">
          <div className="product-area-header">
            <p className="result-count">
              <span>200</span> products
            </p>
            <div className="sort-row">
              <span className="sort-label">Sort:</span>
              <select className="sort-select" aria-label="Sort products" defaultValue="Featured">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
                <option>Best Rated</option>
              </select>
              <div className="grid-toggle" role="group" aria-label="Grid view">
                <button className={`grid-btn ${gridMode === "four" ? "active" : ""}`} aria-label="4-column grid" aria-pressed={gridMode === "four"} onClick={() => setGridMode("four")}>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                    <rect x="1" y="1" width="6" height="6" rx="1" />
                    <rect x="9" y="1" width="6" height="6" rx="1" />
                    <rect x="1" y="9" width="6" height="6" rx="1" />
                    <rect x="9" y="9" width="6" height="6" rx="1" />
                  </svg>
                </button>
                <button className={`grid-btn ${gridMode === "two" ? "active" : ""}`} aria-label="2-column grid" aria-pressed={gridMode === "two"} onClick={() => setGridMode("two")}>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                    <rect x="1" y="1" width="6" height="14" rx="1" />
                    <rect x="9" y="1" width="6" height="14" rx="1" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="products-grid" role="list" aria-label="Products">
            {products.map((product) => (
              <article className="product-card" role="listitem" tabIndex={0} key={product.name}>
                <div className={`product-img-wrap ${product.bg}`}>
                  {product.jewel}
                  <button className="product-wishlist" aria-label="Save to wishlist">
                    <HeartIcon size={15} />
                  </button>
                  {product.badge ? <div className={`product-badge ${product.badgeClass}`}>{product.badge}</div> : null}
                </div>
                <div className="product-info">
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
                </div>
              </article>
            ))}
          </div>

          <div className="load-more-wrap">
            <p className="load-progress-label">Showing 8 of 200 products</p>
            <div className="load-progress">
              <div className="load-progress-bar" />
            </div>
            <button className="btn-load">Load More</button>
          </div>
        </div>
      </div>

      <button className="floating-cart" aria-label="View cart">
        <BagIcon size={22} stroke="white" />
        <div className="cart-count">2</div>
      </button>
    </div>
  );
}
