"use client";

import Link from "next/link";
import { useState } from "react";

const addressTypes = ["Home", "Work", "Other"];

function ImageIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="m21 15-5-5L5 21" />
    </svg>
  );
}

function ContinueButton() {
  return (
    <Link href="/checkout/review">
      <button className="btn-primary" aria-label="Continue to order review" type="button">
        Continue to Review
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </button>
    </Link>
  );
}

export default function CheckoutAddressPage() {
  const [addFormOpen, setAddFormOpen] = useState(false);
  const [activeType, setActiveType] = useState("Home");
  const [selectedAddress, setSelectedAddress] = useState("addr1");
  const [selectedDelivery, setSelectedDelivery] = useState("std");

  const toggleAddForm = () => setAddFormOpen((isOpen) => !isOpen);

  return (
    <div className="checkout-address-page">
      <header className="co-header" role="banner">
        <Link href="/" className="co-logo" aria-label="TAWISA Home">
          TAWISA
        </Link>
        <div className="co-secure" aria-label="Secure checkout">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          Secure Checkout
        </div>
        <Link href="/cart" className="co-exit" aria-label="Exit checkout, return to cart">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
          Exit
        </Link>
      </header>

      <nav className="co-steps" aria-label="Checkout progress">
        <div className="step active" aria-current="step">
          <div className="step-num">1</div>
          <span className="step-label">Address</span>
        </div>
        <div className="step-connector" aria-hidden="true" />
        <div className="step pending">
          <div className="step-num">2</div>
          <span className="step-label">Review</span>
        </div>
        <div className="step-connector" aria-hidden="true" />
        <div className="step pending">
          <div className="step-num">3</div>
          <span className="step-label">Payment</span>
        </div>
      </nav>

      <div className="co-wrap">
        <div className="co-grid">
          <div>
            <div className="co-card co-card-address">
              <div className="co-card-head">
                <h1 className="co-card-title">
                  Delivery <em>Address</em>
                </h1>
              </div>
              <div className="co-card-body">
                <div className="addr-list" role="radiogroup" aria-label="Select delivery address">
                  <input
                    type="radio"
                    name="addr"
                    id="addr1"
                    className="addr-radio"
                    checked={selectedAddress === "addr1"}
                    onChange={() => setSelectedAddress("addr1")}
                  />
                  <label className="addr-card" htmlFor="addr1">
                    <div className="addr-dot" aria-hidden="true" />
                    <div className="addr-info">
                      <div className="addr-name-row">
                        <span className="addr-name">Priya Sharma</span>
                        <span className="addr-badge home">Home</span>
                        <span className="addr-badge default">Default</span>
                      </div>
                      <div className="addr-text">
                        42, Rosewood Apartments, Sector 18
                        <br />
                        Gurugram, Haryana — 122001
                      </div>
                      <div className="addr-phone">+91 98765 43210</div>
                    </div>
                  </label>

                  <input
                    type="radio"
                    name="addr"
                    id="addr2"
                    className="addr-radio"
                    checked={selectedAddress === "addr2"}
                    onChange={() => setSelectedAddress("addr2")}
                  />
                  <label className="addr-card" htmlFor="addr2">
                    <div className="addr-dot" aria-hidden="true" />
                    <div className="addr-info">
                      <div className="addr-name-row">
                        <span className="addr-name">Priya Sharma</span>
                        <span className="addr-badge work">Work</span>
                      </div>
                      <div className="addr-text">
                        Tower B, Level 9, Cyber City
                        <br />
                        DLF Phase 2, Gurugram — 122002
                      </div>
                      <div className="addr-phone">+91 98765 43210</div>
                    </div>
                  </label>
                </div>

                <button
                  className="addr-add-btn"
                  onClick={toggleAddForm}
                  aria-expanded={addFormOpen}
                  aria-controls="add-addr-form"
                  id="add-addr-toggle"
                  type="button"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                  Add a new address
                </button>

                <div className={`add-addr-form ${addFormOpen ? "open" : ""}`} id="add-addr-form" aria-hidden={!addFormOpen}>
                  <div>
                    <div className="form-label addr-form-label-spaced">Address type</div>
                    <div className="addr-type-row">
                      {addressTypes.map((type) => (
                        <button className={`addr-type-chip ${activeType === type ? "active" : ""}`} type="button" onClick={() => setActiveType(type)} key={type}>
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="fn">
                        First Name
                      </label>
                      <input className="form-input" id="fn" type="text" placeholder="Priya" autoComplete="given-name" />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="ln">
                        Last Name
                      </label>
                      <input className="form-input" id="ln" type="text" placeholder="Sharma" autoComplete="family-name" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">
                        Phone
                      </label>
                      <input className="form-input" id="phone" type="tel" placeholder="+91 98765 43210" autoComplete="tel" />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="pin">
                        Pincode
                      </label>
                      <input className="form-input" id="pin" type="text" placeholder="122001" maxLength={6} inputMode="numeric" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="addr-line1">
                      Address Line 1
                    </label>
                    <input className="form-input" id="addr-line1" type="text" placeholder="House / Flat no., Building name" autoComplete="address-line1" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="addr-line2">
                      Address Line 2 <span className="form-label-optional">(optional)</span>
                    </label>
                    <input className="form-input" id="addr-line2" type="text" placeholder="Street, Area, Landmark" autoComplete="address-line2" />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="city">
                        City
                      </label>
                      <input className="form-input" id="city" type="text" placeholder="Gurugram" autoComplete="address-level2" />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="state">
                        State
                      </label>
                      <select className="form-select" id="state" autoComplete="address-level1" defaultValue="Haryana">
                        <option value="">Select state</option>
                        <option>Delhi</option>
                        <option>Haryana</option>
                        <option>Maharashtra</option>
                        <option>Karnataka</option>
                        <option>Tamil Nadu</option>
                        <option>Telangana</option>
                        <option>Rajasthan</option>
                        <option>Gujarat</option>
                        <option>Uttar Pradesh</option>
                        <option>West Bengal</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-actions">
                    <button className="btn-primary btn-save-address" type="button" onClick={toggleAddForm}>
                      Save Address
                    </button>
                    <button className="btn-ghost" type="button" onClick={toggleAddForm}>
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="co-card">
              <div className="co-card-head">
                <h2 className="co-card-title">
                  Delivery <em>Method</em>
                </h2>
              </div>
              <div className="co-card-body">
                <div className="delivery-opts" role="radiogroup" aria-label="Choose delivery method">
                  <input
                    type="radio"
                    name="delivery"
                    id="std"
                    className="delivery-radio"
                    checked={selectedDelivery === "std"}
                    onChange={() => setSelectedDelivery("std")}
                  />
                  <label className="delivery-opt" htmlFor="std">
                    <div className="delivery-dot" aria-hidden="true" />
                    <div className="delivery-info-col">
                      <div className="delivery-name">Standard Delivery</div>
                      <div className="delivery-sub">Estimated delivery: Jun 2 – Jun 5</div>
                    </div>
                    <div className="delivery-price free">Free</div>
                  </label>

                  <input
                    type="radio"
                    name="delivery"
                    id="exp"
                    className="delivery-radio"
                    checked={selectedDelivery === "exp"}
                    onChange={() => setSelectedDelivery("exp")}
                  />
                  <label className="delivery-opt" htmlFor="exp">
                    <div className="delivery-dot" aria-hidden="true" />
                    <div className="delivery-info-col">
                      <div className="delivery-name">Express Delivery</div>
                      <div className="delivery-sub">Estimated delivery: May 29 – May 30</div>
                    </div>
                    <div className="delivery-price">₹99</div>
                  </label>
                </div>
              </div>
            </div>

            <div className="co-desktop-cta" id="desktop-cta">
              <ContinueButton />
            </div>
          </div>

          <aside className="order-mini" aria-label="Order summary">
            <div className="mini-title">Your Order</div>

            <div className="mini-items" role="list">
              <div className="mini-item" role="listitem">
                <div className="mini-img" aria-hidden="true">
                  <ImageIcon />
                </div>
                <div>
                  <div className="mini-name">Solitaire Glow Ring</div>
                  <div className="mini-variant">9K Gold · Sz 7</div>
                  <div className="mini-qty">Qty: 1</div>
                </div>
                <div className="mini-price">₹8,499</div>
              </div>
              <div className="mini-item" role="listitem">
                <div className="mini-img" aria-hidden="true">
                  <ImageIcon />
                </div>
                <div>
                  <div className="mini-name">Celestial Drop Earrings</div>
                  <div className="mini-variant">Sterling Silver</div>
                  <div className="mini-qty">Qty: 2</div>
                </div>
                <div className="mini-price">₹6,598</div>
              </div>
              <div className="mini-item" role="listitem">
                <div className="mini-img" aria-hidden="true">
                  <ImageIcon />
                </div>
                <div>
                  <div className="mini-name">Garden Pendant Necklace</div>
                  <div className="mini-variant">Rose Gold · 18 inch</div>
                  <div className="mini-qty">Qty: 1</div>
                </div>
                <div className="mini-price">₹5,999</div>
              </div>
            </div>

            <div className="mini-rows">
              <div className="mini-row">
                <span className="lbl">Subtotal</span>
                <span className="val">₹21,096</span>
              </div>
              <div className="mini-row">
                <span className="lbl">Gift Wrap</span>
                <span className="val">₹99</span>
              </div>
              <div className="mini-row">
                <span className="lbl">Delivery</span>
                <span className="val free">Free</span>
              </div>
            </div>
            <hr className="mini-divider" />
            <div className="mini-total-row">
              <span className="mini-total-lbl">Total</span>
              <span className="mini-total-val">₹21,195</span>
            </div>

            <ContinueButton />
          </aside>
        </div>
      </div>

      <div className="sticky-cta">
        <ContinueButton />
      </div>
    </div>
  );
}
