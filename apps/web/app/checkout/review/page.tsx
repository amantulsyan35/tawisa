"use client";

import Link from "next/link";
import { useState } from "react";

const PROMOS: Record<string, number> = {
  TAWISA10: 10,
  WELCOME10: 10,
  SAVE15: 15,
  FIRST20: 20,
};

const BASE_TOTAL = 21195;

function ImageIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="m21 15-5-5L5 21" />
    </svg>
  );
}

function ProceedButton() {
  return (
    <Link href="/checkout/payment">
      <button className="btn-primary proceed-btn" aria-label="Proceed to payment" type="button">
        Proceed to Payment
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </button>
    </Link>
  );
}

export default function CheckoutReviewPage() {
  const [promoInput, setPromoInput] = useState("");
  const [appliedCode, setAppliedCode] = useState("");
  const [invalidPromo, setInvalidPromo] = useState(false);

  const discountPercent = appliedCode ? (PROMOS[appliedCode] ?? 0) : 0;
  const discount = Math.round((BASE_TOTAL * discountPercent) / 100);
  const total = BASE_TOTAL - discount;

  const applyPromo = () => {
    const code = promoInput.trim().toUpperCase();
    if (!code) {
      return;
    }

    if (PROMOS[code]) {
      setAppliedCode(code);
      setInvalidPromo(false);
      return;
    }

    setInvalidPromo(true);
    window.setTimeout(() => setInvalidPromo(false), 2000);
  };

  const removePromo = () => {
    setAppliedCode("");
    setPromoInput("");
    setInvalidPromo(false);
  };

  return (
    <div className="checkout-review-page">
      <header className="co-header" role="banner">
        <Link href="/" className="co-logo">
          TAWISA
        </Link>
        <div className="co-secure">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          Secure Checkout
        </div>
        <Link href="/cart" className="co-exit">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
          Exit
        </Link>
      </header>

      <nav className="co-steps" aria-label="Checkout progress">
        <div className="step done">
          <div className="step-num">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <span className="step-label">Address</span>
        </div>
        <div className="step-connector done" />
        <div className="step active" aria-current="step">
          <div className="step-num">2</div>
          <span className="step-label">Review</span>
        </div>
        <div className="step-connector" />
        <div className="step pending">
          <div className="step-num">3</div>
          <span className="step-label">Payment</span>
        </div>
      </nav>

      <div className="co-wrap">
        <div className="co-grid">
          <div>
            <div className="co-card">
              <div className="co-card-head">
                <h2 className="co-card-title">Delivering to</h2>
                <Link href="/checkout/address" className="change-link">
                  Change
                </Link>
              </div>
              <div className="co-card-body">
                <div className="addr-summary">
                  <div className="addr-icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <div className="addr-detail-name">Priya Sharma</div>
                    <div className="addr-detail-text">
                      42, Rosewood Apartments, Sector 18
                      <br />
                      Gurugram, Haryana — 122001 · +91 98765 43210
                    </div>
                    <div className="addr-detail-method">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Standard Delivery · Free · Jun 2 – Jun 5
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="co-card">
              <div className="co-card-head">
                <h1 className="co-card-title">
                  Review <em>Items</em>
                </h1>
                <Link href="/cart" className="change-link">
                  Edit Bag
                </Link>
              </div>
              <div className="co-card-body review-card-body">
                <ul className="review-items" role="list">
                  <li className="review-item" role="listitem">
                    <div className="r-img" aria-hidden="true">
                      <ImageIcon />
                    </div>
                    <div>
                      <div className="r-brand">TAWISA · Rings</div>
                      <div className="r-name">Solitaire Glow Ring</div>
                      <div className="r-variant">
                        Metal: <span>9K Gold</span> · Size: <span>7</span>
                      </div>
                    </div>
                    <div className="r-qty-price">
                      <div className="r-price">₹8,499</div>
                      <div className="r-qty">Qty: 1</div>
                    </div>
                  </li>

                  <li className="review-item" role="listitem">
                    <div className="r-img" aria-hidden="true">
                      <ImageIcon />
                    </div>
                    <div>
                      <div className="r-brand">TAWISA · Earrings</div>
                      <div className="r-name">Celestial Drop Earrings</div>
                      <div className="r-variant">
                        Metal: <span>Sterling Silver</span>
                      </div>
                    </div>
                    <div className="r-qty-price">
                      <div className="r-price">₹6,598</div>
                      <div className="r-qty">Qty: 2</div>
                    </div>
                  </li>

                  <li className="review-item" role="listitem">
                    <div className="r-img" aria-hidden="true">
                      <ImageIcon />
                    </div>
                    <div>
                      <div className="r-brand">TAWISA · Necklaces</div>
                      <div className="r-name">Garden Pendant Necklace</div>
                      <div className="r-variant">
                        Metal: <span>Rose Gold</span> · Chain: <span>18 inch</span>
                      </div>
                      <div className="gift-tag">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <polyline points="20 12 20 22 4 22 4 12" />
                          <rect x="2" y="7" width="20" height="5" />
                          <path d="M12 22V7" />
                        </svg>
                        Gift wrapped
                      </div>
                    </div>
                    <div className="r-qty-price">
                      <div className="r-price">₹5,999</div>
                      <div className="r-qty">Qty: 1</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <aside className="order-summary" aria-label="Order summary">
            <div className="sum-title">Order Summary</div>

            {!appliedCode ? (
              <div className="promo-row" aria-label="Apply promo code">
                <input
                  className={`promo-input ${invalidPromo ? "promo-input-invalid" : ""}`}
                  type="text"
                  placeholder="Enter promo code"
                  aria-label="Promo code"
                  maxLength={20}
                  id="promo-input"
                  value={promoInput}
                  onChange={(event) => setPromoInput(event.target.value)}
                />
                <button className="promo-apply" onClick={applyPromo} aria-label="Apply promo code" type="button">
                  Apply
                </button>
              </div>
            ) : null}

            {appliedCode ? (
              <div className="promo-applied" id="promo-applied">
                <div className="promo-applied-left">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Code applied:{" "}
                  <span className="promo-code-badge" id="promo-code-badge">
                    {appliedCode}
                  </span>
                </div>
                <button className="promo-remove" onClick={removePromo} type="button">
                  Remove
                </button>
              </div>
            ) : null}

            <div className="price-rows" role="list" id="price-rows">
              <div className="price-row" role="listitem">
                <span className="lbl">Subtotal (4 items)</span>
                <span className="val">₹21,096</span>
              </div>
              {appliedCode ? (
                <div className="price-row discount-row" role="listitem">
                  <span className="lbl">Discount</span>
                  <span className="val discount" id="discount-val">
                    − ₹{discount.toLocaleString("en-IN")}
                  </span>
                </div>
              ) : null}
              <div className="price-row" role="listitem">
                <span className="lbl">Gift Wrap (×1)</span>
                <span className="val">₹99</span>
              </div>
              <div className="price-row" role="listitem">
                <span className="lbl">Delivery</span>
                <span className="val free">Free</span>
              </div>
            </div>
            <hr className="divider" />
            <div className="total-row">
              <span className="total-lbl">Total</span>
              <span className="total-val" id="total-val">
                ₹{total.toLocaleString("en-IN")}
              </span>
            </div>
            {appliedCode ? (
              <div className="saving-note" id="saving-note">
                You&apos;re saving ₹{discount.toLocaleString("en-IN")} on this order
              </div>
            ) : null}

            <ProceedButton />

            <div className="trust-pills" role="list">
              <div className="trust-pill" role="listitem">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Secure Payment
              </div>
              <div className="trust-pill" role="listitem">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                14-Day Returns
              </div>
              <div className="trust-pill" role="listitem">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Free Delivery
              </div>
            </div>
          </aside>
        </div>
      </div>

      <div className="sticky-cta">
        <div className="sticky-row">
          <div>
            <div className="sticky-total-label">Total</div>
            <div className="sticky-total-value">₹{total.toLocaleString("en-IN")}</div>
          </div>
          <div className="sticky-cta-btn">
            <ProceedButton />
          </div>
        </div>
      </div>
    </div>
  );
}
