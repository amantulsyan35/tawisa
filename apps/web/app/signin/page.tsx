"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type LoginMethod = "mobile" | "email";
type AuthStep = "login" | "otp" | "success";

const OTP_LENGTH = 6;

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState<LoginMethod>("mobile");
  const [authStep, setAuthStep] = useState<AuthStep>("login");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(Array<string>(OTP_LENGTH).fill(""));
  const [resendSeconds, setResendSeconds] = useState(30);
  const otpRefs = useRef<Array<HTMLInputElement | null>>([]);

  const destination = activeTab === "mobile" ? `+91 ${phone || "98765 43210"}` : email || "you@example.com";
  const otpComplete = otp.every((digit) => digit.length === 1);

  useEffect(() => {
    if (authStep !== "otp") {
      return;
    }

    setResendSeconds(30);
    window.setTimeout(() => otpRefs.current[0]?.focus(), 0);
  }, [authStep]);

  useEffect(() => {
    if (authStep !== "otp" || resendSeconds <= 0) {
      return;
    }

    const timer = window.setInterval(() => {
      setResendSeconds((seconds) => Math.max(seconds - 1, 0));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [authStep, resendSeconds]);

  const handleOtpSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOtp(Array<string>(OTP_LENGTH).fill(""));
    setAuthStep("otp");
  };

  const handleOtpChange = (index: number, value: string) => {
    const digit = value.replace(/\D/g, "").slice(-1);

    setOtp((currentOtp) => {
      const nextOtp = [...currentOtp];
      nextOtp[index] = digit;
      return nextOtp;
    });

    if (digit && index < OTP_LENGTH - 1) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Backspace" || otp[index] || index === 0) {
      return;
    }

    setOtp((currentOtp) => {
      const nextOtp = [...currentOtp];
      nextOtp[index - 1] = "";
      return nextOtp;
    });
    otpRefs.current[index - 1]?.focus();
  };

  const handleOtpPaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();

    const pasted = event.clipboardData.getData("text").replace(/\D/g, "").slice(0, OTP_LENGTH);
    if (!pasted) {
      return;
    }

    const nextOtp = Array<string>(OTP_LENGTH).fill("");
    [...pasted].forEach((digit, index) => {
      nextOtp[index] = digit;
    });
    setOtp(nextOtp);

    const nextEmpty = nextOtp.findIndex((digit) => !digit);
    otpRefs.current[nextEmpty === -1 ? OTP_LENGTH - 1 : nextEmpty]?.focus();
  };

  const handleResend = () => {
    if (resendSeconds > 0) {
      return;
    }

    setOtp(Array<string>(OTP_LENGTH).fill(""));
    setResendSeconds(30);
    otpRefs.current[0]?.focus();
  };

  const handleBackToLogin = () => {
    setAuthStep("login");
    setOtp(Array<string>(OTP_LENGTH).fill(""));
  };

  return (
    <div className="auth-page">
      <div className={`auth-card ${authStep !== "login" ? "otp-card" : ""}`} role="main" id={authStep !== "login" ? "otp-card" : undefined}>
        <div className="auth-logo">TAWISA</div>
        <div className="auth-logo-sub">Silver · Gold · Diamond</div>

        {authStep === "login" ? (
          <>
            <h1 className="auth-title">
              Welcome <em>Back</em>
            </h1>
            <p className="auth-sub">Sign in or create a new account to continue your journey.</p>

            <div className="auth-tabs" role="tablist" aria-label="Login method">
              <button
                className={`auth-tab ${activeTab === "mobile" ? "active" : ""}`}
                role="tab"
                aria-selected={activeTab === "mobile"}
                type="button"
                onClick={() => setActiveTab("mobile")}
              >
                Mobile
              </button>
              <button
                className={`auth-tab ${activeTab === "email" ? "active" : ""}`}
                role="tab"
                aria-selected={activeTab === "email"}
                type="button"
                onClick={() => setActiveTab("email")}
              >
                Email
              </button>
            </div>

            <div className={`tab-content ${activeTab === "mobile" ? "active" : ""}`} id="tab-mobile">
              <form className="auth-form" onSubmit={handleOtpSubmit} aria-label="Mobile login">
                <div className="input-group">
                  <label className="input-label" htmlFor="phone-input">
                    Mobile Number
                  </label>
                  <div className="input-wrap">
                    <span className="input-prefix">+91</span>
                    <input
                      className="auth-input with-prefix"
                      id="phone-input"
                      type="tel"
                      placeholder="Enter your number"
                      maxLength={10}
                      inputMode="numeric"
                      autoComplete="tel"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value.replace(/\D/g, "").slice(0, 10))}
                    />
                  </div>
                </div>
                <button className="btn-primary" type="submit">
                  Send OTP
                </button>
              </form>
            </div>

            <div className={`tab-content ${activeTab === "email" ? "active" : ""}`} id="tab-email">
              <form className="auth-form" onSubmit={handleOtpSubmit} aria-label="Email login">
                <div className="input-group">
                  <label className="input-label" htmlFor="email-input">
                    Email Address
                  </label>
                  <div className="input-wrap">
                    <input
                      className="auth-input"
                      id="email-input"
                      type="email"
                      placeholder="Enter your email"
                      autoComplete="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                </div>
                <button className="btn-primary" type="submit">
                  Send OTP
                </button>
              </form>
            </div>

            <div className="auth-divider auth-divider--spaced">
              <span>or continue with</span>
            </div>

            <button className="btn-google btn-google--spaced" type="button" aria-label="Sign in with Google">
              <svg className="google-icon" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                />
                <path
                  fill="#4285F4"
                  d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                />
                <path
                  fill="#FBBC05"
                  d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                />
                <path
                  fill="#34A853"
                  d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                />
                <path fill="none" d="M0 0h48v48H0z" />
              </svg>
              Continue with Google
            </button>

            <p className="auth-terms">
              By continuing, you agree to TAWISA&apos;s <Link href="/#about">Terms of Use</Link>
              <br />
              and <Link href="/#about">Privacy Policy</Link>
            </p>
          </>
        ) : null}

        {authStep === "otp" ? (
          <div id="otp-state">
            <div className="otp-icon-wrap" aria-hidden="true">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#8A6BA3"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <line x1="9" y1="10" x2="9" y2="10" />
                <line x1="12" y1="10" x2="12" y2="10" />
                <line x1="15" y1="10" x2="15" y2="10" />
              </svg>
            </div>

            <h1 className="auth-title">
              Verify <em>OTP</em>
            </h1>
            <p className="auth-sub">We&apos;ve sent a 6-digit code to</p>
            <p className="auth-destination" id="dest-display">
              {destination}
            </p>

            <div className="otp-row" role="group" aria-label="Enter 6-digit OTP">
              {otp.map((digit, index) => (
                <input
                  className={`otp-box ${digit ? "filled" : ""}`}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  pattern="[0-9]"
                  aria-label={`Digit ${index + 1}`}
                  value={digit}
                  onChange={(event) => handleOtpChange(index, event.target.value)}
                  onKeyDown={(event) => handleOtpKeyDown(index, event)}
                  onPaste={handleOtpPaste}
                  ref={(element) => {
                    otpRefs.current[index] = element;
                  }}
                  key={index}
                />
              ))}
            </div>

            <button className="btn-primary" id="verify-btn" type="button" disabled={!otpComplete} onClick={() => setAuthStep("success")}>
              Verify &amp; Continue
            </button>

            <div className="resend-row">
              <span>Didn&apos;t receive it?</span>
              <button className="resend-btn" id="resend-btn" type="button" disabled={resendSeconds > 0} onClick={handleResend}>
                {resendSeconds > 0 ? (
                  <>
                    Resend in{" "}
                    <span className="resend-timer" id="timer">
                      {resendSeconds}s
                    </span>
                  </>
                ) : (
                  "Resend OTP"
                )}
              </button>
            </div>

            <div className="auth-change">
              Wrong number?{" "}
              <button className="auth-change-link" type="button" onClick={handleBackToLogin}>
                Change
              </button>
            </div>
          </div>
        ) : null}

        {authStep === "success" ? (
          <div className="success-state show" id="success-state" aria-live="polite">
            <div className="success-check" aria-hidden="true">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#8A6BA3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p className="success-title">
              You&apos;re <em>In</em>
            </p>
            <p className="success-sub">Welcome to TAWISA. Redirecting you to your collection…</p>
            <Link href="/" className="btn-primary success-home-btn">
              Go to Homepage
            </Link>
          </div>
        ) : null}
      </div>

      {authStep === "login" ? (
        <Link href="/" className="auth-back" aria-label="Back to home">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
          </svg>
          Back to TAWISA
        </Link>
      ) : (
        <button className="auth-back" type="button" aria-label="Back to login" onClick={handleBackToLogin}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
          </svg>
          Back to Login
        </button>
      )}
    </div>
  );
}
