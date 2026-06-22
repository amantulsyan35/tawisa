"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

const items = [
  {
    name: "Solitaire Glow Ring",
    variant: "9K Gold · Size 7",
    qty: "Qty: 1",
    price: "₹8,499",
  },
  {
    name: "Celestial Drop Earrings",
    variant: "Sterling Silver",
    qty: "Qty: 2",
    price: "₹6,598",
  },
  {
    name: "Garden Pendant Necklace",
    variant: "Rose Gold · 18 inch · Gift wrapped",
    qty: "Qty: 1",
    price: "₹5,999",
  },
];

const confirmationInlineCss = `
.checkout-confirmation-page{--bg:#FFFFFF;--bg2:#F2EBF7;--bg3:#E8DDEF;--accent:#B99BCC;--accent2:#8A6BA3;--accent-lt:rgba(145,116,170,0.10);--glass:rgba(255,255,255,0.72);--border:rgba(218,203,231,0.42);--border2:rgba(186,164,203,0.34);--text:#32263B;--text2:#72667D;--text3:#A098B0;--success:#3D8B5E;--success-lt:rgba(61,139,94,0.10);--shadow:0 12px 48px rgba(145,116,170,0.10);--shadow2:0 24px 72px rgba(145,116,170,0.14);--r-sm:16px;--r-md:24px;--r-lg:32px;--r-pill:999px;--serif:"Cormorant Garamond",serif;--sans:"Manrope",sans-serif;--transition:0.22s cubic-bezier(0.4,0,0.2,1);min-height:100vh;background:var(--bg);color:var(--text);font-family:var(--sans);line-height:1.6;overflow-x:hidden}.checkout-confirmation-page *,.checkout-confirmation-page *::before,.checkout-confirmation-page *::after{box-sizing:border-box}.checkout-confirmation-page button{font-family:var(--sans);cursor:pointer;border:none;background:none}.checkout-confirmation-page a{text-decoration:none;color:inherit}.checkout-confirmation-page .co-header{height:60px;display:flex;align-items:center;justify-content:center;border-bottom:1px solid var(--border);background:var(--glass);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px)}.checkout-confirmation-page .co-logo{font-family:var(--serif);font-size:24px;font-weight:500;letter-spacing:0.12em;color:var(--accent2)}.checkout-confirmation-page .confirm-hero{background:linear-gradient(160deg,var(--bg) 0%,var(--bg2) 60%,var(--bg3) 100%);padding:60px 20px 48px;text-align:center;position:relative;overflow:hidden}.checkout-confirmation-page .confirm-hero::before{content:"";position:absolute;top:-60px;left:50%;transform:translateX(-50%);width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(185,155,204,0.15) 0%,transparent 70%);pointer-events:none}.checkout-confirmation-page .check-circle{width:88px;height:88px;border-radius:50%;background:linear-gradient(135deg,#C9B0DC,#8A6BA3);display:flex;align-items:center;justify-content:center;margin:0 auto 24px;box-shadow:0 16px 48px rgba(138,107,163,0.32);animation:confirm-popIn .5s cubic-bezier(.34,1.56,.64,1) both}@keyframes confirm-popIn{from{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}.checkout-confirmation-page .check-circle svg{animation:confirm-drawCheck .4s .3s ease both;stroke-dasharray:32;stroke-dashoffset:32}@keyframes confirm-drawCheck{to{stroke-dashoffset:0}}.checkout-confirmation-page .confirm-eyebrow{display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:var(--success);background:var(--success-lt);border:1px solid rgba(61,139,94,.18);padding:5px 14px;border-radius:var(--r-pill);margin-bottom:14px;animation:confirm-fadeUp .4s .5s ease both}.checkout-confirmation-page .confirm-title{font-family:var(--serif);font-size:clamp(36px,8vw,56px);font-weight:500;color:var(--text);line-height:1.15;margin-bottom:10px;animation:confirm-fadeUp .4s .6s ease both}.checkout-confirmation-page .confirm-title em,.checkout-confirmation-page .timeline-title em,.checkout-confirmation-page .items-title em,.checkout-confirmation-page .referral-title em,.checkout-confirmation-page .rating-title em,.checkout-confirmation-page .newsletter-mini-title em{font-style:italic;color:var(--accent2)}.checkout-confirmation-page .confirm-sub{font-size:15px;color:var(--text2);max-width:420px;margin:0 auto 28px;line-height:1.7;animation:confirm-fadeUp .4s .7s ease both}.checkout-confirmation-page .confirm-meta{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:12px;animation:confirm-fadeUp .4s .8s ease both}.checkout-confirmation-page .meta-chip{display:flex;align-items:center;gap:7px;padding:10px 18px;background:var(--glass);border:1px solid var(--border);border-radius:var(--r-pill);backdrop-filter:blur(12px);font-size:13px}.checkout-confirmation-page .meta-icon-accent{color:var(--accent2)}.checkout-confirmation-page .meta-icon-success{color:var(--success)}.checkout-confirmation-page .meta-chip .chip-label{color:var(--text3);font-size:11px;font-weight:500}.checkout-confirmation-page .meta-chip .chip-val{color:var(--text);font-weight:700}.checkout-confirmation-page .meta-chip.delivery .chip-val{color:var(--success)}@keyframes confirm-fadeUp{from{transform:translateY(12px);opacity:0}to{transform:none;opacity:1}}.checkout-confirmation-page .confirm-wrap{max-width:900px;margin:0 auto;padding:40px 20px 80px;display:flex;flex-direction:column;gap:24px}.checkout-confirmation-page .actions-card{display:flex;flex-direction:column;gap:12px}.checkout-confirmation-page .contents-link{display:contents}.checkout-confirmation-page .btn-primary,.checkout-confirmation-page .btn-ghost{display:inline-flex;align-items:center;justify-content:center;gap:8px;border-radius:var(--r-pill);font-size:13px;font-weight:600;text-transform:uppercase;cursor:pointer;width:100%}.checkout-confirmation-page .btn-primary{padding:15px 28px;background:linear-gradient(to right,#C9B0DC 0%,#A980C0 100%);color:#fff;letter-spacing:.08em;box-shadow:0 8px 28px rgba(138,107,163,.28)}.checkout-confirmation-page .btn-primary:hover{box-shadow:0 12px 36px rgba(138,107,163,.38);transform:translateY(-1px)}.checkout-confirmation-page .btn-ghost{padding:14px 28px;background:var(--bg);color:var(--accent2);border:1px solid var(--border2);letter-spacing:.06em}.checkout-confirmation-page .btn-ghost:hover{background:var(--accent-lt);border-color:var(--accent)}.checkout-confirmation-page .timeline-card{background:var(--bg2);border:1px solid var(--border);border-radius:var(--r-md);padding:24px}.checkout-confirmation-page .timeline-title{font-family:var(--serif);font-size:18px;font-weight:500;color:var(--text);margin-bottom:20px}.checkout-confirmation-page .timeline{display:flex;flex-direction:column;gap:0;position:relative}.checkout-confirmation-page .timeline::before{content:"";position:absolute;left:11px;top:14px;bottom:14px;width:1.5px;background:var(--border)}.checkout-confirmation-page .tl-step{display:grid;grid-template-columns:24px 1fr;gap:14px;padding-bottom:20px;position:relative}.checkout-confirmation-page .tl-step:last-child{padding-bottom:0}.checkout-confirmation-page .tl-dot{width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;position:relative;z-index:1}.checkout-confirmation-page .tl-dot.done{background:var(--success)}.checkout-confirmation-page .tl-dot.active{background:var(--accent2);animation:confirm-pulse 2s infinite}.checkout-confirmation-page .tl-dot.pending{background:var(--bg);border:2px solid var(--border)}@keyframes confirm-pulse{0%,100%{box-shadow:0 0 0 0 rgba(138,107,163,.4)}50%{box-shadow:0 0 0 6px rgba(138,107,163,0)}}.checkout-confirmation-page .tl-step-name{font-size:14px;font-weight:600;color:var(--text);margin-bottom:2px}.checkout-confirmation-page .tl-step-name.done{color:var(--success)}.checkout-confirmation-page .tl-step-name.pending{color:var(--text3)}.checkout-confirmation-page .tl-step-accent{color:var(--accent2)}.checkout-confirmation-page .tl-step-sub{font-size:12px;color:var(--text3)}.checkout-confirmation-page .tl-step-sub.active{color:var(--accent2);font-weight:500}.checkout-confirmation-page .items-card,.checkout-confirmation-page .rating-card{background:var(--bg);border:1px solid var(--border);border-radius:var(--r-md);overflow:hidden}.checkout-confirmation-page .items-head{display:flex;align-items:center;justify-content:space-between;padding:18px 24px;border-bottom:1px solid var(--border)}.checkout-confirmation-page .items-title{font-family:var(--serif);font-size:18px;font-weight:500;color:var(--text)}.checkout-confirmation-page .items-count{font-size:12px;color:var(--text3);font-weight:500}.checkout-confirmation-page .items-list{padding:0 24px}.checkout-confirmation-page .conf-item{display:grid;grid-template-columns:64px 1fr auto;gap:14px;align-items:center;padding:16px 0;border-bottom:1px solid var(--border)}.checkout-confirmation-page .conf-item:last-child{border-bottom:none}.checkout-confirmation-page .conf-img{width:64px;height:64px;border-radius:12px;background:var(--bg2);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;color:var(--text3);flex-shrink:0}.checkout-confirmation-page .conf-name{font-family:var(--serif);font-size:15px;font-weight:500;color:var(--text);margin-bottom:3px}.checkout-confirmation-page .conf-variant,.checkout-confirmation-page .conf-qty{font-size:12px;color:var(--text3)}.checkout-confirmation-page .conf-qty{font-size:11px;margin-top:2px}.checkout-confirmation-page .conf-price{font-size:15px;font-weight:700;color:var(--text);text-align:right}.checkout-confirmation-page .items-footer{padding:16px 24px;background:var(--bg2);border-top:1px solid var(--border)}.checkout-confirmation-page .items-footer-row{display:flex;justify-content:space-between;font-size:13px;margin-bottom:6px;color:var(--text2)}.checkout-confirmation-page .items-footer-row .val{font-weight:500;color:var(--text)}.checkout-confirmation-page .items-footer-row .free{color:var(--success);font-weight:600}.checkout-confirmation-page .items-total-row{display:flex;justify-content:space-between;align-items:baseline;margin-top:10px;padding-top:10px;border-top:1px solid var(--border)}.checkout-confirmation-page .items-total-lbl{font-size:14px;font-weight:600;color:var(--text)}.checkout-confirmation-page .items-total-val{font-family:var(--serif);font-size:24px;font-weight:600;color:var(--text)}.checkout-confirmation-page .referral-card{background:linear-gradient(135deg,var(--bg2) 0%,var(--bg3) 100%);border:1px solid var(--border);border-radius:var(--r-md);padding:28px 24px;text-align:center}.checkout-confirmation-page .referral-icon{width:56px;height:56px;border-radius:50%;background:var(--glass);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;color:var(--accent2);margin:0 auto 14px}.checkout-confirmation-page .referral-title{font-family:var(--serif);font-size:22px;font-weight:500;color:var(--text);margin-bottom:6px}.checkout-confirmation-page .referral-sub{font-size:13px;color:var(--text2);max-width:340px;margin:0 auto 18px;line-height:1.7}.checkout-confirmation-page .referral-code-box{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 18px;background:var(--bg);border:1.5px dashed var(--border2);border-radius:var(--r-sm);max-width:320px;margin:0 auto}.checkout-confirmation-page .referral-code{font-size:18px;font-weight:700;letter-spacing:.14em;color:var(--accent2)}.checkout-confirmation-page .copy-btn{font-size:12px;font-weight:600;color:var(--accent2);background:var(--accent-lt);padding:6px 14px;border-radius:var(--r-pill);cursor:pointer}.checkout-confirmation-page .rating-card{padding:24px;text-align:center}.checkout-confirmation-page .rating-title{font-family:var(--serif);font-size:20px;font-weight:500;color:var(--text);margin-bottom:6px}.checkout-confirmation-page .rating-sub{font-size:13px;color:var(--text3);margin-bottom:18px}.checkout-confirmation-page .stars-row{display:flex;align-items:center;justify-content:center;gap:10px;margin-bottom:18px}.checkout-confirmation-page .star-btn{width:44px;height:44px;border-radius:50%;background:var(--bg2);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;color:var(--text3);font-size:20px}.checkout-confirmation-page .star-btn:hover,.checkout-confirmation-page .star-btn.active{background:#FFF3CD;border-color:#F5C518;color:#F5C518;transform:scale(1.1)}.checkout-confirmation-page .rating-skip{font-size:12px;color:var(--text3);font-weight:500;cursor:pointer;text-decoration:underline}.checkout-confirmation-page .newsletter-mini{background:var(--bg2);border:1px solid var(--border);border-radius:var(--r-md);padding:24px;display:flex;align-items:center;gap:16px;flex-wrap:wrap}.checkout-confirmation-page .newsletter-mini-text{flex:1;min-width:200px}.checkout-confirmation-page .newsletter-mini-title{font-family:var(--serif);font-size:18px;font-weight:500;color:var(--text);margin-bottom:4px}.checkout-confirmation-page .newsletter-mini-sub{font-size:13px;color:var(--text2)}.checkout-confirmation-page .newsletter-mini-form{display:flex;gap:8px;flex:1;min-width:260px}.checkout-confirmation-page .newsletter-input{flex:1;height:44px;padding:0 16px;border:1px solid var(--border);border-radius:var(--r-pill);font-size:13px;color:var(--text);background:var(--bg);outline:none}.checkout-confirmation-page .newsletter-btn{height:44px;padding:0 20px;border-radius:var(--r-pill);background:var(--accent2);color:#fff;font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;border:none;white-space:nowrap}.checkout-confirmation-page .footer{padding:40px 20px 28px;background:var(--bg2);border-top:1px solid var(--border)}.checkout-confirmation-page .footer-logo{font-family:var(--serif);font-size:26px;font-weight:500;letter-spacing:.12em;color:var(--accent2);margin-bottom:3px}.checkout-confirmation-page .footer-tagline{font-size:11px;font-weight:500;letter-spacing:.2em;text-transform:uppercase;color:var(--text3);margin-bottom:24px}.checkout-confirmation-page .footer-bottom{display:flex;flex-direction:column;gap:14px;padding-top:20px;border-top:1px solid var(--border)}.checkout-confirmation-page .footer-copy{font-size:12px;color:var(--text3)}.checkout-confirmation-page .footer-socials{display:flex;gap:10px}.checkout-confirmation-page .social-btn{width:34px;height:34px;border-radius:50%;background:var(--bg);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;color:var(--text2)}.checkout-confirmation-page .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}@media(min-width:768px){.checkout-confirmation-page .confirm-wrap{padding:40px 40px 80px}.checkout-confirmation-page .conf-item{grid-template-columns:80px 1fr auto}.checkout-confirmation-page .conf-img{width:80px;height:80px}.checkout-confirmation-page .footer-bottom{flex-direction:row;align-items:center;justify-content:space-between}}@media(min-width:1024px){.checkout-confirmation-page .confirm-hero{padding:80px 80px 60px}.checkout-confirmation-page .confirm-wrap{padding:48px 80px 80px}.checkout-confirmation-page .actions-card{flex-direction:row}.checkout-confirmation-page .actions-card .btn-primary,.checkout-confirmation-page .actions-card .btn-ghost{width:auto;flex:1}}@media(prefers-reduced-motion:reduce){.checkout-confirmation-page *,.checkout-confirmation-page *::before,.checkout-confirmation-page *::after{transition:none!important;animation:none!important}}`;

function ImageIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="m21 15-5-5L5 21" />
    </svg>
  );
}

export default function CheckoutConfirmationPage() {
  const [copied, setCopied] = useState(false);
  const [rating, setRating] = useState(0);
  const [ratingVisible, setRatingVisible] = useState(true);

  const copyCode = () => {
    navigator.clipboard?.writeText("PRIYA500").catch(() => {});
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  const stopSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="checkout-confirmation-page">
      <style dangerouslySetInnerHTML={{ __html: confirmationInlineCss }} />
      <header className="co-header" role="banner">
        <Link href="/" className="co-logo" aria-label="TAWISA Home">
          TAWISA
        </Link>
      </header>

      <section className="confirm-hero" aria-labelledby="confirm-heading">
        <div className="check-circle" role="img" aria-label="Order confirmed">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <div className="confirm-eyebrow" aria-hidden="true">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Payment Successful
        </div>

        <h1 className="confirm-title" id="confirm-heading">
          Order <em>Confirmed!</em>
        </h1>
        <p className="confirm-sub">
          Thank you, Priya! Your jewellery is being carefully packaged.
          <br />
          We&apos;ll send you updates on WhatsApp and email.
        </p>

        <div className="confirm-meta" role="list" aria-label="Order details">
          <div className="meta-chip" role="listitem">
            <svg className="meta-icon-accent" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span>
              <span className="chip-label">Order ID </span>
              <span className="chip-val">#TW26051001</span>
            </span>
          </div>
          <div className="meta-chip delivery" role="listitem">
            <svg className="meta-icon-success" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <rect x="1" y="3" width="15" height="13" rx="1" />
              <path d="M16 8h4l3 5v3h-7V8z" />
              <circle cx="5.5" cy="18.5" r="2.5" />
              <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
            <span>
              <span className="chip-label">Arriving </span>
              <span className="chip-val">Jun 2 – Jun 5</span>
            </span>
          </div>
          <div className="meta-chip" role="listitem">
            <svg className="meta-icon-accent" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <rect x="2" y="5" width="20" height="14" rx="2" />
              <line x1="2" y1="10" x2="22" y2="10" />
            </svg>
            <span>
              <span className="chip-label">Paid via </span>
              <span className="chip-val">PhonePe UPI</span>
            </span>
          </div>
        </div>
      </section>

      <div className="confirm-wrap">
        <div className="actions-card">
          <Link href="/account/orders" className="contents-link">
            <button className="btn-primary" aria-label="Track your order" type="button">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <rect x="1" y="3" width="15" height="13" rx="1" />
                <path d="M16 8h4l3 5v3h-7V8z" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
              Track Order
            </button>
          </Link>
          <Link href="/" className="contents-link">
            <button className="btn-ghost" aria-label="Continue shopping" type="button">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
              Continue Shopping
            </button>
          </Link>
        </div>

        <div className="timeline-card" aria-label="Order status timeline">
          <div className="timeline-title">
            Order <em>Journey</em>
          </div>
          <div className="timeline" role="list">
            <div className="tl-step" role="listitem">
              <div className="tl-dot done" aria-label="Completed">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className="tl-text">
                <div className="tl-step-name done">Order Placed</div>
                <div className="tl-step-sub">Today, 26 May 2026 · 03:42 PM</div>
              </div>
            </div>

            <div className="tl-step" role="listitem">
              <div className="tl-dot active" aria-label="In progress" />
              <div className="tl-text">
                <div className="tl-step-name tl-step-accent">Being Packaged</div>
                <div className="tl-step-sub active">Our team is preparing your order with care</div>
              </div>
            </div>

            <div className="tl-step" role="listitem">
              <div className="tl-dot pending" aria-label="Pending" />
              <div className="tl-text">
                <div className="tl-step-name pending">Shipped</div>
                <div className="tl-step-sub">Expected: 27–28 May 2026</div>
              </div>
            </div>

            <div className="tl-step" role="listitem">
              <div className="tl-dot pending" aria-label="Pending" />
              <div className="tl-text">
                <div className="tl-step-name pending">Out for Delivery</div>
                <div className="tl-step-sub">Expected: Jun 2 – Jun 5</div>
              </div>
            </div>

            <div className="tl-step" role="listitem">
              <div className="tl-dot pending" aria-label="Pending" />
              <div className="tl-text">
                <div className="tl-step-name pending">Delivered</div>
                <div className="tl-step-sub">42, Rosewood Apartments, Gurugram — 122001</div>
              </div>
            </div>
          </div>
        </div>

        <div className="items-card" aria-label="Items in your order">
          <div className="items-head">
            <div className="items-title">
              Your <em>Items</em>
            </div>
            <div className="items-count">4 items · #TW26051001</div>
          </div>
          <ul className="items-list" role="list">
            {items.map((item) => (
              <li className="conf-item" role="listitem" key={item.name}>
                <div className="conf-img" aria-hidden="true">
                  <ImageIcon />
                </div>
                <div>
                  <div className="conf-name">{item.name}</div>
                  <div className="conf-variant">{item.variant}</div>
                  <div className="conf-qty">{item.qty}</div>
                </div>
                <div className="conf-price">{item.price}</div>
              </li>
            ))}
          </ul>
          <div className="items-footer">
            <div className="items-footer-row">
              <span>Subtotal</span>
              <span className="val">₹21,096</span>
            </div>
            <div className="items-footer-row">
              <span>Gift Wrap</span>
              <span className="val">₹99</span>
            </div>
            <div className="items-footer-row">
              <span>Delivery</span>
              <span className="val free">Free</span>
            </div>
            <div className="items-total-row">
              <span className="items-total-lbl">Total Paid</span>
              <span className="items-total-val">₹21,195</span>
            </div>
          </div>
        </div>

        <div className="referral-card" aria-label="Referral offer">
          <div className="referral-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <div className="referral-title">
            Share &amp; <em>Earn</em>
          </div>
          <div className="referral-sub">Give ₹500 off to a friend. Get ₹500 in TAWISA credits when they place their first order.</div>
          <div className="referral-code-box">
            <span className="referral-code" id="ref-code">
              PRIYA500
            </span>
            <button className="copy-btn" onClick={copyCode} aria-label="Copy referral code" type="button">
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {ratingVisible ? (
          <div className="rating-card" aria-label="Rate your experience">
            <div className="rating-title">
              How was your <em>Experience?</em>
            </div>
            <div className="rating-sub">Your feedback helps us improve for everyone.</div>
            <div className="stars-row" role="group" aria-label="Select rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <button className={`star-btn ${rating >= star ? "active" : ""}`} aria-label={`${star} ${star === 1 ? "star" : "stars"}`} onClick={() => setRating(star)} type="button" key={star}>
                  ★
                </button>
              ))}
            </div>
            <button className="rating-skip" onClick={() => setRatingVisible(false)} aria-label="Skip rating" type="button">
              Skip for now
            </button>
          </div>
        ) : null}

        <div className="newsletter-mini" aria-label="Newsletter signup">
          <div className="newsletter-mini-text">
            <div className="newsletter-mini-title">
              Stay in the <em>Loop</em>
            </div>
            <div className="newsletter-mini-sub">New arrivals and exclusive drops — first to your inbox.</div>
          </div>
          <form className="newsletter-mini-form" onSubmit={stopSubmit} aria-label="Newsletter signup">
            <label className="sr-only" htmlFor="nl-email">
              Email address
            </label>
            <input className="newsletter-input" id="nl-email" type="email" placeholder="your@email.com" autoComplete="email" />
            <button className="newsletter-btn" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <footer className="footer" role="contentinfo">
        <div className="footer-logo">TAWISA</div>
        <div className="footer-tagline">Silver · Gold · Diamond</div>
        <div className="footer-bottom">
          <div className="footer-copy">© 2026 TAWISA. All rights reserved.</div>
          <div className="footer-socials" aria-label="Social media">
            <Link href="/" className="social-btn" aria-label="Instagram">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </Link>
            <Link href="/" className="social-btn" aria-label="Pinterest">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.23-5.22 1.23-5.22s-.31-.63-.31-1.56c0-1.46.85-2.55 1.9-2.55.9 0 1.33.67 1.33 1.48 0 .9-.58 2.25-.87 3.5-.25 1.04.52 1.89 1.53 1.89 1.84 0 3.08-2.37 3.08-5.17 0-2.14-1.44-3.64-3.5-3.64-2.38 0-3.78 1.79-3.78 3.63 0 .72.28 1.49.62 1.91.07.08.08.15.06.23l-.23.96c-.04.14-.12.17-.28.1-1.03-.48-1.67-1.99-1.67-3.2 0-2.6 1.89-4.99 5.46-4.99 2.86 0 5.09 2.04 5.09 4.77 0 2.84-1.8 5.13-4.28 5.13-.84 0-1.62-.44-1.89-.95l-.51 1.93c-.19.71-.69 1.6-1.02 2.14.77.24 1.58.37 2.42.37 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
