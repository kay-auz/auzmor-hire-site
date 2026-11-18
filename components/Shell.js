"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

export const DEMO = "https://auzmor.com/contact/";

// Review markers are hidden on the site. Set SHOW_CONFIRM to true to show the yellow
// "confirm" tags again next to claims that still need product/legal sign-off.
const SHOW_CONFIRM = false;
export function Confirm({ label = "confirm" }) {
  if (!SHOW_CONFIRM) return null;
  return <span className="confirm" title="Placeholder claim — confirm with product before launch">{label}</span>;
}

export function Logo() {
  return <span className="logo">auzmor<span>Hire</span><i className="dot" /></span>;
}

export function Nav() {
  const p = usePathname();
  const links = [["/", "Platform"], ["/enterprise", "Enterprise"], ["/government", "Government"]];
  return (
    <header className="nav">
      <div className="wrap">
        <Link href="/"><Logo /></Link>
        <nav className="nav-links">
          {links.map(([h, l]) => <Link key={h} href={h} className={p === h ? "active" : ""}>{l}</Link>)}
          <a href="#ai">Hire with AI</a>
          <a href="#integrations">Integrations</a>
        </nav>
        <a className="btn btn-primary" href={DEMO}>Book a demo</a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="cols">
          <div>
            <Logo />
            <p style={{ color: "var(--ink-2)", marginTop: 16, maxWidth: 340 }}>
              The AI-powered applicant tracking system for enterprises and public agencies. AI does the busywork — your people make the decisions.
            </p>
          </div>
          <div><h4>Auzmor Hire</h4><Link href="/">Platform</Link><Link href="/enterprise">Enterprise</Link><Link href="/government">Government</Link></div>
          <div><h4>Products</h4><a href="https://auzmor.com/">Auzmor Learn</a><a href="https://auzmor.com/">Auzmor Office</a><a href="https://auzmor.com/">Auzmor LXP</a></div>
          <div><h4>Contact</h4><a href="mailto:hello@auzmor.com">hello@auzmor.com</a><a href="tel:5153091733">515-309-1733</a><a href={DEMO}>Book a demo</a></div>
        </div>
        <div className="bottom"><span>© 2026 auzmor Inc. All rights reserved.</span><span>ISO 27001 · GDPR · 2FA · 21 CFR Part 11</span></div>
      </div>
    </footer>
  );
}

export function CTA({ title, body, label = "Book a demo" }) {
  return (
    <section style={{ paddingTop: 40 }}>
      <div className="wrap">
        <div className="cta">
          <h2>{title}</h2>
          <p>{body}</p>
          <div className="btns">
            <a className="btn btn-primary" href={DEMO}>{label} <ArrowRight size={18} /></a>
            <a className="btn btn-glass" href={DEMO}>Talk to an expert</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FAQ({ items }) {
  return (
    <section id="faq">
      <div className="wrap" style={{ maxWidth: 880 }}>
        <div className="section-head center"><span className="eyebrow">FAQ</span><h2>Questions, answered</h2></div>
        {items.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
      </div>
    </section>
  );
}
