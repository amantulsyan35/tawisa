"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Collections", href: "/collections" },
  { label: "For Her", href: "/collections" },
  { label: "For Him", href: "/collections" },
  { label: "For Kids", href: "/collections" },
  { label: "About", href: "/#about" },
];

const orderTabs = ["All Orders", "Delivered", "In Transit", "Processing"];

export default function AccountOrdersPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeOrderTab, setActiveOrderTab] = useState("All Orders");

  return (
    <div className="account-profile-page account-orders-page">
      <nav className="navbar">
        <Link href="/" className="nav-logo">
          TAWISA
        </Link>
        <nav className="nav-links">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.label}>
              {link.label}
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
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </Link>
          <Link href="/cart" className="nav-icon-btn hide-mobile" aria-label="Cart">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </Link>
          <Link href="/account" className="nav-icon-btn active hide-mobile" aria-label="My Account">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </Link>
          <button className="nav-menu-btn" aria-label="Open menu" onClick={() => setDrawerOpen(true)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`nav-drawer ${drawerOpen ? "open" : ""}`} id="drawer">
        <button className="drawer-backdrop" onClick={() => setDrawerOpen(false)} aria-label="Close menu backdrop" />
        <div className="drawer-panel">
          <button className="drawer-close" onClick={() => setDrawerOpen(false)} aria-label="Close">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          {navLinks.map((link) => (
            <Link href={link.href} className="drawer-item" onClick={() => setDrawerOpen(false)} key={link.label}>
              {link.label}
            </Link>
          ))}
          <Link href="/account/orders" className="drawer-item drawer-item-account" onClick={() => setDrawerOpen(false)}>
            My Orders
          </Link>
        </div>
      </div>

      <div className="page-wrap">
        <div className="mobile-tabs">
          <Link href="/account" className="mobile-tab">
            Profile
          </Link>
          <Link href="/account/orders" className="mobile-tab active">
            Orders
          </Link>
          <Link href="/account/addresses" className="mobile-tab">
            Addresses
          </Link>
        </div>

        <aside className="account-sidebar">
          <div className="sidebar-card">
            <div className="sidebar-user">
              <div className="user-avatar">P</div>
              <div className="user-name">Priya Sharma</div>
              <div className="user-phone">+91 98765 43210</div>
            </div>
            <nav className="sidebar-nav">
              <Link href="/account" className="nav-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Personal Information
              </Link>
              <Link href="/account/orders" className="nav-item active">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                My Orders
              </Link>
              <Link href="/account/addresses" className="nav-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                My Addresses
              </Link>
              <div className="nav-divider" />
              <Link href="/wishlist" className="nav-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                My Wishlist
              </Link>
              <div className="nav-divider" />
              <button className="nav-item logout nav-item-button" type="button">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
                Sign Out
              </button>
            </nav>
          </div>
        </aside>

        <main className="account-main">
          <div className="section-card">
            <div className="section-header">
              <div>
                <div className="section-eyebrow">Account</div>
                <h1 className="section-title">
                  My <em>Orders</em>
                </h1>
              </div>
            </div>

            <div className="order-tabs" role="tablist">
              {orderTabs.map((tab) => (
                <button className={`order-tab ${activeOrderTab === tab ? "active" : ""}`} type="button" onClick={() => setActiveOrderTab(tab)} key={tab}>
                  {tab}
                </button>
              ))}
            </div>

            <div className="order-card">
              <div className="order-header">
                <div className="order-meta">
                  <span className="order-id">#TWS-2024-0391</span>
                  <span className="order-date">12 May 2026</span>
                </div>
                <span className="order-status status-delivered">
                  <span className="status-dot" />
                  Delivered
                </span>
              </div>
              <div className="order-body">
                <div className="order-items">
                  <div className="order-item">
                    <div className="order-item-img item-bg-1">
                      <div className="mini-ring" />
                    </div>
                    <div className="order-item-info">
                      <div className="order-item-name">Solitaire Glow Ring</div>
                      <div className="order-item-meta">9K Gold · Size 15</div>
                    </div>
                    <div className="order-item-price">₹8,499</div>
                  </div>
                </div>
              </div>
              <div className="order-footer">
                <div className="order-total">
                  Order Total: <span>₹8,499</span>
                </div>
                <div className="order-actions">
                  <button className="btn-sm btn-sm-ghost" type="button">
                    Track
                  </button>
                  <button className="btn-sm btn-sm-primary" type="button">
                    Buy Again
                  </button>
                </div>
              </div>
            </div>

            <div className="order-card">
              <div className="order-header">
                <div className="order-meta">
                  <span className="order-id">#TWS-2024-0418</span>
                  <span className="order-date">20 May 2026</span>
                </div>
                <span className="order-status status-shipped">
                  <span className="status-dot" />
                  In Transit
                </span>
              </div>
              <div className="order-body">
                <div className="order-items">
                  <div className="order-item">
                    <div className="order-item-img item-bg-2">
                      <div className="mini-earring">
                        <div>
                          <div className="mini-hook" />
                          <div className="mini-drop" />
                        </div>
                        <div className="mini-earring-offset">
                          <div className="mini-hook" />
                          <div className="mini-drop" />
                        </div>
                      </div>
                    </div>
                    <div className="order-item-info">
                      <div className="order-item-name">Dewdrop Earrings</div>
                      <div className="order-item-meta">Diamond · Pair</div>
                    </div>
                    <div className="order-item-price">₹14,799</div>
                  </div>
                  <div className="order-item">
                    <div className="order-item-img item-bg-1">
                      <div className="mini-gem" />
                    </div>
                    <div className="order-item-info">
                      <div className="order-item-name">Luna Pendant</div>
                      <div className="order-item-meta">Silver</div>
                    </div>
                    <div className="order-item-price">₹4,799</div>
                  </div>
                </div>
              </div>
              <div className="order-footer">
                <div className="order-total">
                  Order Total: <span>₹19,598</span>
                </div>
                <div className="order-actions">
                  <button className="btn-sm btn-sm-primary" type="button">
                    Track Order
                  </button>
                </div>
              </div>
            </div>

            <div className="order-card">
              <div className="order-header">
                <div className="order-meta">
                  <span className="order-id">#TWS-2024-0425</span>
                  <span className="order-date">24 May 2026</span>
                </div>
                <span className="order-status status-processing">
                  <span className="status-dot" />
                  Processing
                </span>
              </div>
              <div className="order-body">
                <div className="order-items">
                  <div className="order-item">
                    <div className="order-item-img item-bg-3">
                      <div className="mini-ring" />
                    </div>
                    <div className="order-item-info">
                      <div className="order-item-name">Aurora Band Ring</div>
                      <div className="order-item-meta">9K Gold · Size 13</div>
                    </div>
                    <div className="order-item-price">₹7,299</div>
                  </div>
                </div>
              </div>
              <div className="order-footer">
                <div className="order-total">
                  Order Total: <span>₹7,299</span>
                </div>
                <div className="order-actions">
                  <button className="btn-sm btn-sm-ghost" type="button">
                    Cancel Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
