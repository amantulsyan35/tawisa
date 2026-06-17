"use client";

import Link from "next/link";
import { useState } from "react";

type WishlistPageClientProps = {
  initialState: "empty" | "filled";
};

const navLinks = ["Collections", "For Her", "For Him", "For Kids", "About"];

const wishlistItems = [
  {
    id: "solitaire-glow-ring",
    bgClass: "prod-bg-1",
    jewel: <div className="prod-jewel-ring" role="img" aria-label="Solitaire ring" />,
    badge: "New",
    badgeClass: "badge-new",
    material: "9K Gold",
    rating: "4.9",
    name: "Solitaire Glow Ring",
    currentPrice: "₹8,499",
    originalPrice: "₹10,999",
    discount: "23% off",
  },
  {
    id: "teardrop-pendant",
    bgClass: "prod-bg-2",
    jewel: (
      <div className="prod-jewel-necklace" role="img" aria-label="Pendant necklace">
        <div className="necklace-chain" />
        <div className="necklace-gem" />
      </div>
    ),
    badge: "Sale",
    badgeClass: "badge-sale",
    material: "Silver",
    rating: "4.8",
    name: "Teardrop Pendant",
    currentPrice: "₹3,299",
    originalPrice: "₹4,500",
    discount: "27% off",
  },
  {
    id: "dewdrop-earrings",
    bgClass: "prod-bg-3",
    jewel: (
      <div className="prod-jewel-earring" role="img" aria-label="Drop earrings">
        <div className="prod-earring">
          <div className="prod-earring-hook" />
          <div className="prod-earring-gem" />
        </div>
        <div className="prod-earring" style={{ marginTop: "10px" }}>
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
    currentPrice: "₹14,799",
    originalPrice: "₹18,000",
    discount: "18% off",
  },
  {
    id: "celestial-bracelet",
    bgClass: "prod-bg-4",
    jewel: <div className="prod-jewel-bracelet" role="img" aria-label="Gold bracelet" />,
    material: "9K Gold",
    rating: "4.7",
    name: "Celestial Bracelet",
    currentPrice: "₹11,299",
    originalPrice: "₹14,000",
    discount: "19% off",
  },
  {
    id: "luna-pendant",
    bgClass: "prod-bg-5",
    jewel: <div className="prod-jewel-pendant" role="img" aria-label="Amethyst pendant" />,
    badge: "New",
    badgeClass: "badge-new",
    material: "Silver",
    rating: "4.9",
    name: "Luna Pendant",
    currentPrice: "₹4,799",
    originalPrice: "₹6,200",
    discount: "23% off",
  },
  {
    id: "aurora-band-ring",
    bgClass: "prod-bg-6",
    jewel: <div className="prod-jewel-ring" role="img" aria-label="Gold ring" />,
    badge: "Sale",
    badgeClass: "badge-sale",
    material: "9K Gold",
    rating: "4.6",
    name: "Aurora Band Ring",
    currentPrice: "₹7,299",
    originalPrice: "₹9,500",
    discount: "23% off",
  },
];

const categoryPills = [
  {
    label: "Rings",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    label: "Earrings",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 2 8 8H4l3 5-1 7 6-3 6 3-1-7 3-5h-4z" />
      </svg>
    ),
  },
  {
    label: "Necklaces",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: "Bracelets",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round">
        <rect x="3" y="8" width="18" height="8" rx="4" />
      </svg>
    ),
  },
  {
    label: "Pendants",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8A6BA3" strokeWidth="1.8" strokeLinecap="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function BagIcon({ stroke = "currentColor", size = 18 }: { stroke?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function CloseIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function WishlistPageClient({ initialState }: WishlistPageClientProps) {
  const [items, setItems] = useState(initialState === "filled" ? wishlistItems : wishlistItems.slice(0, 0));
  const [removingItems, setRemovingItems] = useState<Set<string>>(new Set());

  const removeItem = (id: string) => {
    setRemovingItems((current) => new Set(current).add(id));
    window.setTimeout(() => {
      setItems((current) => current.filter((item) => item.id !== id));
      setRemovingItems((current) => {
        const next = new Set(current);
        next.delete(id);
        return next;
      });
    }, 220);
  };

  return (
    <>
      <nav className="navbar" role="navigation">
        <Link href="/" className="nav-logo">
          TAWISA
        </Link>
        <nav className="nav-links">
          {navLinks.map((link) => (
            <a href="#" key={link}>
              {link}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="nav-icon-btn" aria-label="Search">
            <SearchIcon />
          </button>
          <button className="nav-icon-btn active" aria-label="Wishlist" aria-current="page">
            <HeartIcon />
          </button>
          <button className="nav-icon-btn hide-mobile" aria-label="Cart">
            <BagIcon />
          </button>
          <button className="nav-icon-btn hide-mobile" aria-label="My Account">
            <UserIcon />
          </button>
          <button className="nav-menu-btn" aria-label="Open menu">
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {items.length === 0 ? (
        <>
          <main className="empty-wrap">
            <div className="empty-illustration" aria-hidden="true">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#B99BCC"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>

            <h1 className="empty-title">
              Your Wishlist
              <br />
              is <em>Empty</em>
            </h1>
            <p className="empty-sub">
              Save pieces that catch your eye — come back to them anytime and move them to your bag when you&apos;re ready.
            </p>

            <div className="empty-actions">
              <Link href="/" className="btn-primary">
                Explore Collections
              </Link>
              <button className="btn-ghost">View Lookbook</button>
            </div>
          </main>

          <div className="inspiration-strip">
            <div className="strip-eyebrow">Start Saving</div>
            <p className="strip-title">&quot;Where would you like to begin?&quot;</p>

            <div className="category-row" role="list" aria-label="Browse by category">
              {categoryPills.map((category) => (
                <div className="cat-pill" role="listitem" tabIndex={0} key={category.label}>
                  <div className="cat-pill-icon" aria-hidden="true">
                    {category.icon}
                  </div>
                  <span className="cat-pill-label">{category.label}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <main className="page-wrap">
            <div className="page-header">
              <div>
                <div className="page-eyebrow">Saved Items</div>
                <h1 className="page-title">
                  My <em>Wishlist</em>
                </h1>
                <p className="wishlist-count">6 pieces saved</p>
              </div>
              <div className="header-actions">
                <button className="btn-ghost-sm">Move All to Bag</button>
              </div>
            </div>

            <div className="wishlist-bar" role="toolbar" aria-label="Filter wishlist">
              <div className="bar-left">
                <button className="filter-chip active">All</button>
                <button className="filter-chip">Silver</button>
                <button className="filter-chip">9K Gold</button>
                <button className="filter-chip">Diamond</button>
              </div>
              <div className="bar-right">
                <span>Sort by</span>
                <select className="sort-select" aria-label="Sort wishlist" defaultValue="Date Added">
                  <option>Date Added</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className="wishlist-grid" role="list" aria-label="Wishlist items">
              {items.map((item) => (
                <article
                  className="product-card"
                  role="listitem"
                  tabIndex={0}
                  key={item.id}
                  style={
                    removingItems.has(item.id)
                      ? { transition: "opacity 0.22s, transform 0.22s", opacity: 0, transform: "scale(0.95)" }
                      : undefined
                  }
                >
                  <div className={`product-img-wrap ${item.bgClass}`}>
                    {item.jewel}
                    <button className="product-remove" aria-label="Remove from wishlist" onClick={() => removeItem(item.id)}>
                      <CloseIcon />
                    </button>
                    {item.badge ? <div className={`product-badge ${item.badgeClass}`}>{item.badge}</div> : null}
                  </div>
                  <div className="product-info">
                    <div className="product-meta">
                      <span className="product-material">{item.material}</span>
                      <span className="product-dot" />
                      <span className="product-rating">
                        <span className="star-fill">★</span> {item.rating}
                      </span>
                    </div>
                    <div className="product-name">{item.name}</div>
                    <div className="product-pricing">
                      <span className="price-current">{item.currentPrice}</span>
                      <span className="price-original">{item.originalPrice}</span>
                      <span className="price-off">{item.discount}</span>
                    </div>
                    <button className="btn-add-bag">Add to Bag</button>
                  </div>
                </article>
              ))}
            </div>

            <div className="wishlist-footer">
              <p className="wishlist-footer-text">&quot;Discover more pieces crafted for you&quot;</p>
              <button className="btn-primary">Continue Shopping</button>
            </div>
          </main>

          <button className="floating-cart" aria-label="View cart">
            <BagIcon size={22} stroke="white" />
            <div className="cart-count">2</div>
          </button>
        </>
      )}
    </>
  );
}
