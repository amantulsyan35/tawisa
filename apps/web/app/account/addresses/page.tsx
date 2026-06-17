"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Collections", href: "/collections" },
  { label: "For Her", href: "#" },
  { label: "For Him", href: "#" },
  { label: "For Kids", href: "#" },
];

const addressTypes = ["Home", "Work", "Other"];

export default function AccountAddressesPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeType, setActiveType] = useState("Home");

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  return (
    <div className="account-profile-page account-addresses-page">
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
          <button className="nav-icon-btn active hide-mobile" aria-label="My Account">
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

      <div className={`nav-drawer ${drawerOpen ? "open" : ""}`} id="drawer">
        <button className="drawer-backdrop" onClick={() => setDrawerOpen(false)} aria-label="Close menu backdrop" />
        <div className="drawer-panel">
          <button className="drawer-close" onClick={() => setDrawerOpen(false)} aria-label="Close">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <Link href="#" className="drawer-item" onClick={() => setDrawerOpen(false)}>
            For Her
          </Link>
          <Link href="#" className="drawer-item" onClick={() => setDrawerOpen(false)}>
            For Him
          </Link>
          <Link href="#" className="drawer-item" onClick={() => setDrawerOpen(false)}>
            For Kids
          </Link>
          <Link href="/account/addresses" className="drawer-item drawer-item-account" onClick={() => setDrawerOpen(false)}>
            My Addresses
          </Link>
        </div>
      </div>

      <div className="page-wrap">
        <div className="mobile-tabs">
          <button className="mobile-tab" type="button" onClick={() => { window.location.href = "/account"; }}>
            Profile
          </button>
          <button className="mobile-tab" type="button" onClick={() => { window.location.href = "/account/orders"; }}>
            Orders
          </button>
          <button className="mobile-tab active" type="button" onClick={() => { window.location.href = "/account/addresses"; }}>
            Addresses
          </button>
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
              <Link href="/account/orders" className="nav-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                My Orders
              </Link>
              <Link href="/account/addresses" className="nav-item active">
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
                  My <em>Addresses</em>
                </h1>
              </div>
              <button className="btn-add" type="button" onClick={() => setModalOpen(true)}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                Add New
              </button>
            </div>

            <div className="address-grid">
              <div className="address-card default">
                <div className="address-card-header">
                  <div className="address-type-row">
                    <span className="address-type">Home</span>
                    <span className="default-badge">Default</span>
                  </div>
                  <div className="address-actions">
                    <button className="addr-btn" aria-label="Edit address" type="button" onClick={() => setModalOpen(true)}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="address-name">Priya Sharma</div>
                <div className="address-line">
                  Flat 4B, Prestige Towers
                  <br />
                  MG Road, Indiranagar
                  <br />
                  Bengaluru — 560038, Karnataka
                </div>
                <div className="address-phone">+91 98765 43210</div>
              </div>

              <div className="address-card">
                <div className="address-card-header">
                  <div className="address-type-row">
                    <span className="address-type">Work</span>
                  </div>
                  <div className="address-actions">
                    <button className="addr-btn" aria-label="Edit address" type="button" onClick={() => setModalOpen(true)}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                      </svg>
                    </button>
                    <button className="addr-btn delete" aria-label="Delete address" type="button">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                        <path d="M10 11v6" />
                        <path d="M14 11v6" />
                        <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="address-name">Priya Sharma</div>
                <div className="address-line">
                  WeWork, 3rd Floor, Embassy Golf Links
                  <br />
                  Koramangala, Bengaluru — 560034
                </div>
                <div className="address-phone">+91 98765 43210</div>
              </div>

              <button className="address-card-add" type="button" onClick={() => setModalOpen(true)} aria-label="Add new address">
                <div className="add-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
                <span className="add-label">Add New Address</span>
              </button>
            </div>
          </div>
        </main>
      </div>

      <div className={`modal-overlay ${modalOpen ? "open" : ""}`} id="modal" role="dialog" aria-modal="true" aria-label="Add address" onClick={(event) => { if (event.target === event.currentTarget) setModalOpen(false); }}>
        <div className="modal">
          <div className="modal-header">
            <h2 className="modal-title">
              Add <em>Address</em>
            </h2>
            <button className="modal-close" type="button" onClick={() => setModalOpen(false)} aria-label="Close">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              setModalOpen(false);
            }}
          >
            <div className="address-type-block">
              <div className="form-label address-type-label">Address Type</div>
              <div className="address-type-chips">
                {addressTypes.map((type) => (
                  <button className={`type-chip ${activeType === type ? "active" : ""}`} type="button" onClick={() => setActiveType(type)} key={type}>
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label className="form-label" htmlFor="m-fname">
                  First Name
                </label>
                <input className="form-input" id="m-fname" type="text" placeholder="First name" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="m-lname">
                  Last Name
                </label>
                <input className="form-input" id="m-lname" type="text" placeholder="Last name" />
              </div>
              <div className="form-group full">
                <label className="form-label" htmlFor="m-addr1">
                  Address Line 1
                </label>
                <input className="form-input" id="m-addr1" type="text" placeholder="Flat / House no., Building name" />
              </div>
              <div className="form-group full">
                <label className="form-label" htmlFor="m-addr2">
                  Address Line 2
                </label>
                <input className="form-input" id="m-addr2" type="text" placeholder="Street, Area, Locality" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="m-city">
                  City
                </label>
                <input className="form-input" id="m-city" type="text" placeholder="City" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="m-pin">
                  PIN Code
                </label>
                <input className="form-input" id="m-pin" type="text" inputMode="numeric" maxLength={6} placeholder="000000" />
              </div>
              <div className="form-group full">
                <label className="form-label" htmlFor="m-state">
                  State
                </label>
                <select className="form-input form-select" id="m-state" defaultValue="">
                  <option value="">Select state</option>
                  <option>Karnataka</option>
                  <option>Maharashtra</option>
                  <option>Delhi</option>
                  <option>Tamil Nadu</option>
                  <option>Telangana</option>
                  <option>Gujarat</option>
                  <option>Rajasthan</option>
                  <option>Uttar Pradesh</option>
                  <option>West Bengal</option>
                </select>
              </div>
              <div className="form-group full">
                <label className="form-label" htmlFor="m-phone">
                  Mobile Number
                </label>
                <input className="form-input" id="m-phone" type="tel" placeholder="+91 00000 00000" />
              </div>
            </div>

            <div className="modal-actions">
              <button type="submit" className="btn-primary">
                Save Address
              </button>
              <button type="button" className="btn-ghost" onClick={() => setModalOpen(false)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
