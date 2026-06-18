"use client";

import Link from "next/link";
import { ChangeEvent, useState } from "react";

type PayTab = "upi" | "card" | "nb" | "emi" | "cod";

const payTabs: Array<{ id: PayTab; label: string; panel: string }> = [
  { id: "upi", label: "UPI", panel: "panel-upi" },
  { id: "card", label: "Credit / Debit Card", panel: "panel-card" },
  { id: "nb", label: "Net Banking", panel: "panel-nb" },
  { id: "emi", label: "EMI", panel: "panel-emi" },
  { id: "cod", label: "Cash on Delivery", panel: "panel-cod" },
];

const upiApps = [
  { id: "gpay", label: "GPay", icon: "G", className: "gpay", aria: "Pay with Google Pay" },
  { id: "phonepe", label: "PhonePe", icon: "P", className: "phonepe", aria: "Pay with PhonePe" },
  { id: "paytm", label: "Paytm", icon: "P", className: "paytm", aria: "Pay with Paytm" },
  { id: "bhim", label: "BHIM", icon: "B", className: "bhim", aria: "Pay with BHIM" },
];

const banks = [
  { id: "b-hdfc", name: "HDFC Bank", logo: "HDFC", color: "#e21c3b" },
  { id: "b-sbi", name: "State Bank", logo: "SBI", color: "#22409a" },
  { id: "b-icici", name: "ICICI Bank", logo: "ICICI", color: "#f7931e" },
  { id: "b-axis", name: "Axis Bank", logo: "AXIS", color: "#97144d" },
  { id: "b-kotak", name: "Kotak Bank", logo: "KMB", color: "#c41b33" },
  { id: "b-yes", name: "Yes Bank", logo: "YES", color: "#00b0ca" },
];

const emiOptions = [
  { id: "emi-3", tenure: "3 Months", bank: "All major cards", amount: "₹7,065 / mo", total: "Total ₹21,195", badge: "No Cost", checked: true },
  { id: "emi-6", tenure: "6 Months", bank: "HDFC, ICICI, Axis", amount: "₹3,533 / mo", total: "Total ₹21,195", badge: "No Cost" },
  { id: "emi-9", tenure: "9 Months", bank: "HDFC, SBI", amount: "₹2,424 / mo", total: "Total ₹21,819", interest: "+ ₹624 interest" },
  { id: "emi-12", tenure: "12 Months", bank: "All major cards", amount: "₹1,878 / mo", total: "Total ₹22,537", interest: "+ ₹1,342 interest" },
];

const summaryItems = [
  { name: "Solitaire Glow Ring", sub: "9K Gold · Sz 7 · Qty 1", price: "₹8,499" },
  { name: "Celestial Drop Earrings", sub: "Silver · Qty 2", price: "₹6,598" },
  { name: "Garden Pendant Necklace", sub: "Rose Gold · Qty 1", price: "₹5,999" },
];

function ImageIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="m21 15-5-5L5 21" />
    </svg>
  );
}

function PayButton({ mobile = false }: { mobile?: boolean }) {
  return (
    <Link href="/checkout/confirmation" className={mobile ? "pay-mobile-link" : undefined}>
      <button className="btn-primary" aria-label="Pay ₹21,195 and place order" type="button">
        <svg width={mobile ? 14 : 15} height={mobile ? 14 : 15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        {mobile ? "Pay Now" : "Pay ₹21,195"}
      </button>
    </Link>
  );
}

export default function CheckoutPaymentPage() {
  const [activeTab, setActiveTab] = useState<PayTab>("upi");
  const [selectedApp, setSelectedApp] = useState("phonepe");
  const [upiId, setUpiId] = useState("");
  const [upiInvalid, setUpiInvalid] = useState(false);
  const [cardPreview, setCardPreview] = useState("•••• •••• •••• ••••");
  const [holderPreview, setHolderPreview] = useState("YOUR NAME");
  const [expPreview, setExpPreview] = useState("MM / YY");

  const verifyUPI = () => {
    if (!upiId.trim() || !upiId.includes("@")) {
      setUpiInvalid(true);
      window.setTimeout(() => setUpiInvalid(false), 2000);
    }
  };

  const fmtCard = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, "").substring(0, 16);
    const formatted = value.replace(/(.{4})/g, "$1  ").trim();
    event.target.value = formatted;
    setCardPreview(value.padEnd(16, "•").replace(/(.{4})/g, "$1 ").trim());
  };

  const fmtExp = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, "").substring(0, 4);
    event.target.value = value.length >= 3 ? `${value.substring(0, 2)} / ${value.substring(2)}` : value;
    setExpPreview(event.target.value || "MM / YY");
  };

  return (
    <div className="checkout-payment-page">
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
        <div className="step done">
          <div className="step-num">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <span className="step-label">Review</span>
        </div>
        <div className="step-connector done" />
        <div className="step active" aria-current="step">
          <div className="step-num">3</div>
          <span className="step-label">Payment</span>
        </div>
      </nav>

      <div className="co-wrap">
        <div className="co-grid">
          <div>
            <div className="co-card">
              <div className="co-card-head">
                <h1 className="co-card-title">
                  Choose <em>Payment</em>
                </h1>
              </div>

              <div className="pay-tabs" role="tablist" aria-label="Payment methods">
                {payTabs.map((tab) => (
                  <button
                    className={`pay-tab ${activeTab === tab.id ? "active" : ""}`}
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    aria-controls={tab.panel}
                    id={`tab-${tab.id}`}
                    onClick={() => setActiveTab(tab.id)}
                    type="button"
                    key={tab.id}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className={`pay-panel ${activeTab === "upi" ? "active" : ""}`} id="panel-upi" role="tabpanel" aria-labelledby="tab-upi">
                <div className="upi-section">
                  <div className="pay-label">Enter UPI ID</div>
                  <div className="upi-input-row">
                    <input
                      className={`pay-input ${upiInvalid ? "pay-input-invalid" : ""}`}
                      type="text"
                      id="upi-id"
                      placeholder="yourname@upi"
                      aria-label="UPI ID"
                      inputMode="email"
                      value={upiId}
                      onChange={(event) => setUpiId(event.target.value)}
                    />
                    <button className="upi-verify" onClick={verifyUPI} type="button">
                      Verify & Pay
                    </button>
                  </div>

                  <div className="upi-divider">or pay with</div>

                  <div className="upi-apps" role="list" aria-label="UPI apps">
                    {upiApps.map((app) => (
                      <button
                        className={`upi-app-btn ${selectedApp === app.id ? "selected" : ""}`}
                        role="listitem"
                        onClick={() => setSelectedApp(app.id)}
                        aria-label={app.aria}
                        aria-pressed={selectedApp === app.id ? true : undefined}
                        type="button"
                        key={app.id}
                      >
                        <div className={`upi-app-icon ${app.className}`}>{app.icon}</div>
                        <span className="upi-app-label">{app.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className={`pay-panel ${activeTab === "card" ? "active" : ""}`} id="panel-card" role="tabpanel" aria-labelledby="tab-card">
                <div className="card-visual" aria-hidden="true">
                  <div className="card-chip" />
                  <div className="card-number-preview" id="card-preview">
                    {cardPreview}
                  </div>
                  <div className="card-meta-row">
                    <div>
                      <div className="card-meta-label">Card Holder</div>
                      <div className="card-meta-val" id="holder-preview">
                        {holderPreview}
                      </div>
                    </div>
                    <div>
                      <div className="card-meta-label">Expires</div>
                      <div className="card-meta-val" id="exp-preview">
                        {expPreview}
                      </div>
                    </div>
                  </div>
                  <div className="card-brand">VISA / MC</div>
                </div>

                <div className="card-form-grid">
                  <div className="form-group">
                    <label className="form-label" htmlFor="card-num">
                      Card Number
                    </label>
                    <input className="pay-input" id="card-num" type="text" placeholder="1234  5678  9012  3456" maxLength={22} inputMode="numeric" onInput={fmtCard} aria-label="Card number" autoComplete="cc-number" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="card-name">
                      Name on Card
                    </label>
                    <input
                      className="pay-input"
                      id="card-name"
                      type="text"
                      placeholder="As printed on card"
                      onInput={(event) => setHolderPreview(event.currentTarget.value.toUpperCase() || "YOUR NAME")}
                      aria-label="Card holder name"
                      autoComplete="cc-name"
                    />
                  </div>
                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="card-exp">
                        Expiry Date
                      </label>
                      <input className="pay-input" id="card-exp" type="text" placeholder="MM / YY" maxLength={7} inputMode="numeric" onInput={fmtExp} aria-label="Expiry date" autoComplete="cc-exp" />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="card-cvv">
                        CVV{" "}
                        <span className="cvv-label-icon">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="12" />
                            <line x1="12" y1="16" x2="12.01" y2="16" />
                          </svg>
                        </span>
                      </label>
                      <input className="pay-input" id="card-cvv" type="password" placeholder="• • •" maxLength={4} inputMode="numeric" aria-label="CVV security code" autoComplete="cc-csc" />
                    </div>
                  </div>
                  <div className="save-card-row">
                    <input type="checkbox" id="save-card" />
                    <label className="save-card-label" htmlFor="save-card">
                      Save this card for future payments
                    </label>
                  </div>
                </div>
              </div>

              <div className={`pay-panel ${activeTab === "nb" ? "active" : ""}`} id="panel-nb" role="tabpanel" aria-labelledby="tab-nb">
                <div className="nb-search">
                  <input className="pay-input nb-search-input" type="search" placeholder="Search your bank…" aria-label="Search bank" />
                </div>
                <div className="bank-grid" role="radiogroup" aria-label="Select bank">
                  {banks.map((bank, index) => (
                    <div className="bank-option" key={bank.id}>
                      <input type="radio" name="bank" id={bank.id} className="bank-radio" defaultChecked={index === 0} />
                      <label className="bank-card" htmlFor={bank.id}>
                        <div className="bank-logo" style={{ background: bank.color }}>
                          {bank.logo}
                        </div>
                        <span className="bank-name">{bank.name}</span>
                      </label>
                    </div>
                  ))}
                  <div className="bank-more" role="button" tabIndex={0}>
                    + 30 more banks
                  </div>
                </div>
              </div>

              <div className={`pay-panel ${activeTab === "emi" ? "active" : ""}`} id="panel-emi" role="tabpanel" aria-labelledby="tab-emi">
                <div className="emi-info-box">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <div className="emi-info-text">No-cost EMI available on select cards. Interest is borne by TAWISA — you pay only the product price.</div>
                </div>
                <div className="emi-label">Select EMI tenure</div>
                <div className="emi-opts" role="radiogroup" aria-label="EMI options">
                  {emiOptions.map((emi) => (
                    <div className="emi-option" key={emi.id}>
                      <input type="radio" name="emi" id={emi.id} className="emi-radio" defaultChecked={emi.checked} />
                      <label className="emi-card" htmlFor={emi.id}>
                        <div className="emi-dot" />
                        <div className="emi-main">
                          <div className="emi-tenure">{emi.tenure}</div>
                          <div className="emi-bank">{emi.bank}</div>
                        </div>
                        <div className="emi-right">
                          <div className="emi-amount">{emi.amount}</div>
                          <div className="emi-total">{emi.total}</div>
                        </div>
                        {emi.badge ? <span className="emi-badge">{emi.badge}</span> : <span className="emi-interest">{emi.interest}</span>}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`pay-panel ${activeTab === "cod" ? "active" : ""}`} id="panel-cod" role="tabpanel" aria-labelledby="tab-cod">
                <div className="cod-panel">
                  <div className="cod-icon" aria-hidden="true">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                      <rect x="2" y="5" width="20" height="14" rx="2" />
                      <line x1="2" y1="10" x2="22" y2="10" />
                    </svg>
                  </div>
                  <div className="cod-title">Cash on Delivery</div>
                  <div className="cod-sub">Pay ₹21,195 in cash when your order arrives. No advance payment required.</div>
                  <div className="cod-note">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    A ₹49 COD handling fee applies
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="order-summary" aria-label="Order summary">
            <div className="sum-title">Order Summary</div>

            <div className="sum-addr">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div className="sum-addr-text">
                <span className="sum-addr-name">Priya Sharma</span>
                42, Rosewood Apartments, Gurugram — 122001
              </div>
            </div>

            <div className="sum-items" role="list">
              {summaryItems.map((item) => (
                <div className="sum-item" role="listitem" key={item.name}>
                  <div className="sum-img" aria-hidden="true">
                    <ImageIcon />
                  </div>
                  <div>
                    <div className="sum-name">{item.name}</div>
                    <div className="sum-sub">{item.sub}</div>
                  </div>
                  <div className="sum-item-price">{item.price}</div>
                </div>
              ))}
            </div>

            <div className="price-rows" role="list">
              <div className="price-row">
                <span className="lbl">Subtotal</span>
                <span className="val">₹21,096</span>
              </div>
              <div className="price-row">
                <span className="lbl">Gift Wrap</span>
                <span className="val">₹99</span>
              </div>
              <div className="price-row">
                <span className="lbl">Delivery</span>
                <span className="val free">Free</span>
              </div>
            </div>
            <hr className="divider" />
            <div className="total-row">
              <span className="total-lbl">Total</span>
              <span className="total-val">₹21,195</span>
            </div>

            <PayButton />

            <div className="pay-secure-note">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              256-bit SSL encrypted · Your data is safe
            </div>
            <div className="razorpay-note">
              Payments powered by <span className="rzp-badge">Razorpay</span>
            </div>
          </aside>
        </div>
      </div>

      <div className="sticky-cta">
        <div className="sticky-row">
          <div className="sticky-total">
            <div className="sticky-total-label">Pay</div>
            <div className="sticky-total-value">₹21,195</div>
          </div>
          <div className="sticky-cta-btn">
            <PayButton mobile />
          </div>
        </div>
      </div>
    </div>
  );
}
