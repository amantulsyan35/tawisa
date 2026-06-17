"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = ["Collections", "For Her", "For Him", "For Kids", "About"] as const;

const cartItems = [
  {
    brand: "TAWISA · Rings",
    name: "Solitaire Glow Ring",
    variant: (
      <>
        Metal: <span>9K Gold</span> &nbsp;·&nbsp; Size: <span>7</span>
      </>
    ),
    price: "₹8,499",
    original: "₹9,999",
    discount: "15% off",
    qty: 1,
    giftActive: false,
  },
  {
    brand: "TAWISA · Earrings",
    name: "Celestial Drop Earrings",
    variant: (
      <>
        Metal: <span>Sterling Silver</span>
      </>
    ),
    price: "₹3,299",
    original: "₹3,899",
    discount: "15% off",
    qty: 2,
    giftActive: false,
  },
  {
    brand: "TAWISA · Necklaces",
    name: "Garden Pendant Necklace",
    variant: (
      <>
        Metal: <span>Rose Gold</span> &nbsp;·&nbsp; Chain: <span>18 inch</span>
      </>
    ),
    price: "₹5,999",
    original: "₹7,499",
    discount: "20% off",
    qty: 1,
    giftActive: true,
  },
] as const;

const suggestions = [
  ["Aurora Stacking Ring", "₹4,299", "₹5,099"],
  ["Dusk Bangle", "₹6,799", "₹7,999"],
  ["Luna Chain Bracelet", "₹2,899", "₹3,499"],
  ["Iris Stud Earrings", "₹1,899", "₹2,299"],
] as const;

const footerGroups = [
  ["Shop", ["For Her", "For Him", "For Kids", "Customise", "New Arrivals"]],
  ["Collections", ["Rings", "Earrings", "Necklaces", "Bracelets", "Pendants"]],
  ["Help", ["My Orders", "Track Shipment", "Returns", "Size Guide", "Care Guide"]],
  ["Company", ["About TAWISA", "Craftsmanship", "Sustainability", "Press", "Contact"]],
] as const;

function HeartIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function BagIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="item-img-placeholder">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
      <span className="item-img-label">{label}</span>
    </div>
  );
}

function GiftIcon({ active }: { active: boolean }) {
  if (active) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    );
  }

  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect x="2" y="7" width="20" height="5" />
      <path d="M12 22V7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  );
}

export default function BagPageClient() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="bag-page">
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <Link href="/" className="nav-logo" aria-label="TAWISA Home">
          TAWISA
        </Link>
        <nav className="nav-links" aria-label="Desktop navigation">
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
          <Link href="/wishlist" className="nav-icon-btn" aria-label="Wishlist">
            <HeartIcon />
          </Link>
          <Link href="/cart" className="nav-icon-btn active hide-mobile" aria-label="My Cart" aria-current="page">
            <BagIcon />
            <div className="cart-dot" aria-hidden="true" />
          </Link>
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

      <div className={`nav-drawer ${drawerOpen ? "open" : ""}`} id="drawer" role="dialog" aria-modal="true" aria-label="Navigation menu">
        <button className="drawer-backdrop" onClick={() => setDrawerOpen(false)} aria-label="Close menu backdrop" />
        <div className="drawer-panel">
          <button className="drawer-close" onClick={() => setDrawerOpen(false)} aria-label="Close menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          {[...navLinks, "My Account"].map((link) => (
            <Link href={link === "Collections" ? "/collections" : "#"} className="drawer-item" key={link} onClick={() => setDrawerOpen(false)}>
              {link}
            </Link>
          ))}
        </div>
      </div>

      <div className="page-wrap">
        <div className="page-header">
          <Link href="/" className="continue-row" aria-label="Continue shopping">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
            Continue Shopping
          </Link>
          <div className="page-eyebrow">
            <BagIcon size={14} />
            My Bag
          </div>
          <h1 className="page-title">
            Your <em>Selections</em>
          </h1>
          <p className="page-count">3 items in your bag</p>
        </div>

        <div className="cart-grid">
          <div>
            <ul className="cart-items" role="list" aria-label="Cart items">
              {cartItems.map((item) => (
                <li className="cart-item" role="listitem" key={item.name}>
                  <div className="item-img" aria-hidden="true">
                    <ImagePlaceholder label="96×96" />
                  </div>
                  <div className="item-body">
                    <div className="item-brand">{item.brand}</div>
                    <div className="item-name">{item.name}</div>
                    <div className="item-variant">{item.variant}</div>
                    <div className="item-price-row">
                      <span className="item-price">{item.price}</span>
                      <span className="item-price-original">{item.original}</span>
                      <span className="item-discount-badge">{item.discount}</span>
                    </div>
                    <div className="item-actions">
                      <div className="qty-stepper" role="group" aria-label={`Quantity for ${item.name}`}>
                        <button className="qty-btn" aria-label="Decrease quantity" disabled={item.qty === 1}>
                          −
                        </button>
                        <span className="qty-val" aria-live="polite" aria-atomic="true">
                          {item.qty}
                        </span>
                        <button className="qty-btn" aria-label="Increase quantity">
                          +
                        </button>
                      </div>
                      <div className="item-secondary-actions">
                        <button
                          className={`item-action-btn gift-chip ${item.giftActive ? "active" : ""}`}
                          aria-label={item.giftActive ? "Gift wrap added — click to remove" : "Add gift wrap"}
                          aria-pressed={item.giftActive ? "true" : undefined}
                        >
                          <GiftIcon active={item.giftActive} />
                          Gift Wrap
                        </button>
                        <button className="item-action-btn" aria-label={`Move ${item.name} to Wishlist`}>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                          </svg>
                          Wishlist
                        </button>
                        <button className="item-action-btn remove" aria-label={`Remove ${item.name} from cart`}>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6l-1 14H6L5 6" />
                            <path d="M10 11v6" />
                            <path d="M14 11v6" />
                            <path d="M9 6V4h6v2" />
                          </svg>
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="also-like">
              <div className="also-like-header">
                <h2 className="also-like-title">
                  You May <em>Also Like</em>
                </h2>
                <Link href="/collections" className="also-like-more">
                  View all
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="also-like-scroll" role="list" aria-label="Recommended products">
                {suggestions.map(([name, price, original]) => (
                  <article className="suggest-card" role="listitem" tabIndex={0} key={name}>
                    <div className="suggest-img">
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <path d="m21 15-5-5L5 21" />
                        </svg>
                        <span className="suggest-img-label">Product</span>
                      </div>
                      <button className="suggest-wishlist" aria-label={`Add ${name} to wishlist`}>
                        <HeartIcon size={14} />
                      </button>
                    </div>
                    <div className="suggest-body">
                      <div className="suggest-name">{name}</div>
                      <div className="suggest-price-row">
                        <span className="suggest-price">{price}</span>
                        <span className="suggest-price-orig">{original}</span>
                      </div>
                      <button className="suggest-add" aria-label={`Add ${name} to bag`}>
                        Add to Bag
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <aside className="order-summary" aria-label="Order summary">
            <div className="summary-title">Order Summary</div>
            <div className="promo-row" aria-label="Promo code input">
              <input className="promo-input" type="text" placeholder="Enter promo code" aria-label="Promo code" maxLength={20} />
              <button className="promo-apply" aria-label="Apply promo code">
                Apply
              </button>
            </div>
            <div className="price-rows" role="list" aria-label="Price breakdown">
              <div className="price-row" role="listitem">
                <span className="label">Subtotal (4 items)</span>
                <span className="value">₹21,096</span>
              </div>
              <div className="price-row" role="listitem">
                <span className="label">Gift Wrap (×1)</span>
                <span className="value">₹99</span>
              </div>
              <div className="price-row" role="listitem">
                <span className="label">Delivery</span>
                <span className="value free">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ display: "inline", marginRight: 3 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Free
                </span>
              </div>
            </div>
            <hr className="price-divider" />
            <div className="price-total-row" aria-label="Order total">
              <span className="price-total-label">Total</span>
              <span className="price-total-value">₹21,195</span>
            </div>
            <button className="btn-primary checkout-btn" aria-label="Proceed to checkout">
              Proceed to Checkout
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
            <div className="trust-pills" role="list" aria-label="Trust signals">
              {["Secure Payment", "Easy Returns", "14-Day Policy", "Free Delivery"].map((text, index) => (
                <div className="trust-pill" role="listitem" key={text}>
                  {index === 0 ? (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  ) : index === 1 ? (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  ) : index === 2 ? (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  ) : (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  )}
                  {text}
                </div>
              ))}
            </div>
            <div className="delivery-info" role="note" aria-label="Delivery estimate">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <rect x="1" y="3" width="15" height="13" rx="1" />
                <path d="M16 8h4l3 5v3h-7V8z" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
              <div className="delivery-info-text">
                <strong>Estimated delivery: Jun 2 – Jun 5</strong>
                Free standard delivery · Express available at checkout
              </div>
            </div>
          </aside>
        </div>
      </div>

      <footer className="footer" role="contentinfo">
        <div className="footer-logo">TAWISA</div>
        <div className="footer-tagline">Silver · Gold · Diamond</div>
        <nav className="footer-links" aria-label="Footer navigation">
          {footerGroups.map(([title, links]) => (
            <div className="footer-col" key={title}>
              <div className="footer-col-title">{title}</div>
              <ul>
                {links.map((link) => (
                  <li key={link}>
                    <Link href={title === "Collections" ? "/collections" : "#"}>{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
        <div className="footer-bottom">
          <div className="footer-copy">© 2026 TAWISA. All rights reserved.</div>
          <div className="footer-socials" aria-label="Social media">
            <Link href="#" className="social-btn" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </Link>
            <Link href="#" className="social-btn" aria-label="Pinterest">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.23-5.22 1.23-5.22s-.31-.63-.31-1.56c0-1.46.85-2.55 1.9-2.55.9 0 1.33.67 1.33 1.48 0 .9-.58 2.25-.87 3.5-.25 1.04.52 1.89 1.53 1.89 1.84 0 3.08-2.37 3.08-5.17 0-2.14-1.44-3.64-3.5-3.64-2.38 0-3.78 1.79-3.78 3.63 0 .72.28 1.49.62 1.91.07.08.08.15.06.23l-.23.96c-.04.14-.12.17-.28.1-1.03-.48-1.67-1.99-1.67-3.2 0-2.6 1.89-4.99 5.46-4.99 2.86 0 5.09 2.04 5.09 4.77 0 2.84-1.8 5.13-4.28 5.13-.84 0-1.62-.44-1.89-.95l-.51 1.93c-.19.71-.69 1.6-1.02 2.14.77.24 1.58.37 2.42.37 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
              </svg>
            </Link>
            <Link href="#" className="social-btn" aria-label="YouTube">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
              </svg>
            </Link>
          </div>
        </div>
      </footer>

      <div className="sticky-checkout" role="complementary" aria-label="Checkout summary">
        <div className="sticky-total">
          <div className="sticky-total-label">Total · 4 items</div>
          <div className="sticky-total-value">₹21,195</div>
        </div>
        <button className="btn-primary sticky-checkout-btn" aria-label="Proceed to checkout">
          Checkout
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
