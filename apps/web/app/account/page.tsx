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

export default function AccountPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="account-profile-page">
      <nav className="navbar" role="navigation">
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
          <Link href="/account" className="nav-icon-btn active hide-mobile" aria-label="My Account" aria-current="page">
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

      <div className={`nav-drawer ${drawerOpen ? "open" : ""}`} id="drawer" role="dialog" aria-modal="true">
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
          <Link href="/account" className="drawer-item drawer-item-account" onClick={() => setDrawerOpen(false)}>
            My Account
          </Link>
        </div>
      </div>

      <div className="page-wrap">
        <div className="mobile-tabs" role="tablist">
          <Link href="/account" className="mobile-tab active" role="tab">
            Profile
          </Link>
          <Link href="/account/orders" className="mobile-tab" role="tab">
            Orders
          </Link>
          <Link href="/account/addresses" className="mobile-tab" role="tab">
            Addresses
          </Link>
        </div>

        <aside className="account-sidebar" aria-label="Account navigation">
          <div className="sidebar-card">
            <div className="sidebar-user">
              <div className="user-avatar" aria-hidden="true">
                P
              </div>
              <div className="user-name">Priya Sharma</div>
              <div className="user-phone">+91 98765 43210</div>
            </div>
            <nav className="sidebar-nav">
              <Link href="/account" className="nav-item active">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Personal Information
              </Link>
              <Link href="/account/orders" className="nav-item">
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
              <div className="section-title-wrap">
                <div className="section-eyebrow">Account</div>
                <h1 className="section-title">
                  Personal <em>Information</em>
                </h1>
              </div>
              {!editMode ? (
                <button className="btn-edit" id="edit-toggle" type="button" onClick={() => setEditMode(true)}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                  </svg>
                  Edit
                </button>
              ) : null}
            </div>

            {!editMode ? (
              <div id="view-mode">
                <div className="info-row">
                  <span className="info-label">Full Name</span>
                  <span className="info-value">Priya Sharma</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Mobile</span>
                  <span className="info-value">
                    +91 98765 43210 <span className="verified-badge">✓ Verified</span>
                  </span>
                </div>
                <div className="info-row">
                  <span className="info-label">Email</span>
                  <span className="info-value">
                    priya.sharma@gmail.com <span className="verified-badge">✓ Verified</span>
                  </span>
                </div>
                <div className="info-row">
                  <span className="info-label">Gender</span>
                  <span className="info-value">Female</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Birthday</span>
                  <span className="info-value muted">Not set</span>
                </div>
              </div>
            ) : (
              <form
                id="edit-mode"
                onSubmit={(event) => {
                  event.preventDefault();
                  setEditMode(false);
                }}
              >
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label" htmlFor="fname">
                      First Name
                    </label>
                    <input className="form-input" id="fname" type="text" defaultValue="Priya" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="lname">
                      Last Name
                    </label>
                    <input className="form-input" id="lname" type="text" defaultValue="Sharma" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="mobile">
                      Mobile Number
                    </label>
                    <input className="form-input" id="mobile" type="tel" defaultValue="+91 98765 43210" disabled />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      Email Address
                    </label>
                    <input className="form-input" id="email" type="email" defaultValue="priya.sharma@gmail.com" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="gender">
                      Gender
                    </label>
                    <select className="form-input form-select" id="gender" defaultValue="Female">
                      <option>Female</option>
                      <option>Male</option>
                      <option>Prefer not to say</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="dob">
                      Date of Birth
                    </label>
                    <input className="form-input" id="dob" type="date" />
                  </div>
                </div>
                <div className="form-actions form-actions-profile">
                  <button className="btn-primary" type="submit">
                    Save Changes
                  </button>
                  <button className="btn-ghost" type="button" id="cancel-edit" onClick={() => setEditMode(false)}>
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
