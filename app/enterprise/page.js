import { ArrowRight, Check, Sparkles, Eye, ShieldCheck, SlidersHorizontal, Lock } from "lucide-react";
import { CTA, FAQ, DEMO, Confirm } from "../../components/Shell";
import { Icon } from "../../components/Blocks";
import IntegrationsSection from "../../components/IntegrationsSection";
import { enterpriseIntegrations } from "../../lib/integrations";

export const metadata = {
  title: "Enterprise ATS with built-in AI",
  description: "Auzmor Hire Enterprise: AI-powered, structured hiring at scale — explainable matching, interview copilot, 20,000+ job boards and native onboarding and learning. Live in weeks.",
};

const diffs = [
  { t: "AI in every step — included, not upsold", d: "AI is native to the Auzmor Hire workflow and part of the platform, not a separate layer or a stack of add-on SKUs.", c: true,
    pts: ["Job descriptions, screening and summaries", "Interview copilot with draft scorecards", "Every recommendation explained"] },
  { t: "One platform from candidate to contributor", d: "Hire, onboard and train on one connected suite. Candidate data flows into Auzmor Office and Auzmor Learn — no re-keying, no gaps.",
    pts: ["Offer accepted → onboarding starts", "Role-based training assigned on day one", "One vendor, one login, one data model"] },
  { t: "Enterprise power, live in weeks", d: "Recruiters configure workflows themselves, with hands-on implementation and responsive human support behind them.", c: true,
    pts: ["Recruiter-owned workflows & scorecards", "20,000+ job boards from day one", "<24 hr support response reported by customers"] },
];

const ai = [
  ["Wand2", "Attract", "AI job description writer", "Generate inclusive, on-brand job posts from a title and a few notes. Flags exclusionary language before you publish."],
  ["ScanSearch", "Screen", "Explainable smart match", "Ranks every applicant against your must-have skills and shows the evidence behind each score — so recruiters can trust, verify and override."],
  ["FileText", "Review", "Candidate summaries", "One-paragraph snapshots of each resume and application."],
  ["History", "Rediscover", "Talent rediscovery", "Resurfaces silver-medalists and past applicants for every new req."],
  ["CalendarClock", "Schedule", "Smart scheduling", "Books multi-person panels across calendars and time zones."],
  ["Mic", "Interview", "Interview copilot", "Suggests structured questions, captures notes and drafts scorecards mapped to your criteria — interviewers stay present, not typing."],
  ["MessageSquareText", "Analyze", "Ask Hire", "Ask “Which sources produced our best engineering hires this year?” and get the chart, instantly."],
];

const controls = [
  ["ShieldCheck", "Roles & permissions", "Granular access by team, region and requisition."],
  ["Palette", "Multi-brand career sites", "One platform, a career site per brand or business unit."],
  ["GitBranch", "Approval chains", "Requisition and offer approvals that mirror your org."],
  ["ClipboardList", "Structured hiring", "Standard scorecards and interview kits across every team."],
  ["Scale", "EEOC & OFCCP", "Built-in self-ID and compliance reporting."],
  ["Lock", "Enterprise security", "ISO 27001, GDPR, 2FA and SSO."],
];

export default function Enterprise() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="chip"><b>ENTERPRISE</b> Auzmor Hire for enterprise talent teams</span>
            <h1>Enterprise hiring, <span className="grad-text">powered by AI.</span> Live in weeks.</h1>
            <p className="lede">Structured, high-volume hiring across teams, brands and locations — with AI built into every step and a platform your recruiters can actually run themselves.</p>
            <div className="btns">
              <a className="btn btn-primary" href={DEMO}>Book an enterprise demo <ArrowRight size={18} /></a>
              <a className="btn btn-glass" href="#ai">See the AI</a>
            </div>
            <div className="trust-row"><span><Check size={16} />AI included in the platform</span><span><Check size={16} />ISO 27001</span><span><Check size={16} />EEOC & OFCCP</span></div>
          </div>
          <div style={{ position: "relative" }}>
            <div className="mock" aria-hidden>
              <div className="mock-top"><i /><i /><i /><span>Hiring health · All locations</span></div>
              <div className="grid g2" style={{ gap: 10 }}>
                {[["Open reqs", "214"], ["Avg. time to hire", "23 days"], ["Offer acceptance", "91%"], ["Scorecards on time", "94%"]].map(([k, v]) => (
                  <div className="mock-row" key={k} style={{ display: "block", margin: 0 }}><small style={{ color: "var(--ink-3)" }}>{k}</small><b style={{ display: "block", fontSize: "1.45rem", fontFamily: "var(--head)" }}>{v}</b></div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 6, alignItems: "flex-end", height: 96, marginTop: 14 }}>
                {[40, 55, 48, 70, 62, 85, 78, 96].map((h, i) => <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 7 ? "linear-gradient(180deg, var(--ai), var(--brand-2))" : "var(--brand-soft)", borderRadius: 6 }} />)}
              </div>
            </div>
            <div className="ai-pop" aria-hidden>
              <div className="hd"><Sparkles size={16} /> Ask Hire</div>
              <p><b style={{ color: "var(--ink)" }}>“Where are engineering offers stalling?”</b><br />Offer approval averages 4.2 days in EMEA vs 1.1 in NA. 3 offers awaiting VP sign-off.</p>
              <div className="acts"><span>Nudge approvers</span><span>Open report</span></div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head center"><span className="eyebrow">Why Auzmor Hire Enterprise</span><h2>Three reasons talent teams choose us</h2></div>
          <div className="diff">
            {diffs.map((x, k) => (
              <div className="d" key={x.t}>
                <div className="num">0{k + 1}</div>
                <h3>{x.t}{x.c && <Confirm />}</h3><p>{x.d}</p>
                <ul>{x.pts.map((p) => <li key={p}><Check size={16} />{p}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ai" className="ai-band">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow"><Sparkles size={14} /> AI for enterprise hiring<Confirm /></span><h2>AI that moves the work. <span className="grad-text">People own the decisions.</span></h2>
            <p className="lede">From the first job post to the final report, Auzmor Hire AI removes hours of manual work per requisition — while every recommendation stays transparent and every decision stays human.</p></div>
          <div className="bento">
            {ai.map(([ic, tag, t, d], k) => (
              <div key={t} className={"b" + (k < 2 || k > 4 ? " wide" : "")}>
                <div className="icon"><Icon name={ic} /></div><span className="tag">{tag}</span><h3>{t}</h3><p>{d}</p>
              </div>
            ))}
          </div>
          <div className="principles">
            <div><b><Eye size={18} />Explainable</b><span>Scores come with evidence, not mystery.</span></div>
            <div><b><ShieldCheck size={18} />Human-decided</b><span>AI recommends; people approve.</span></div>
            <div><b><SlidersHorizontal size={18} />Admin-controlled</b><span>Enable AI by feature, team or region.</span></div>
            <div><b><Lock size={18} />Private by design</b><span>Your data never trains public models.</span></div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap split">
          <div><span className="eyebrow">Enterprise controls<Confirm /></span><h2>Governance for complex organizations</h2>
            <p className="lede">Give every business unit the flexibility it needs while HR keeps one standard, one data set and one view of hiring.</p>
            <a className="btn btn-ghost" href={DEMO}>Talk to an enterprise specialist <ArrowRight size={18} /></a></div>
          <div className="tiles">{controls.map(([ic, t, d]) => <div className="tile" key={t}><div className="icon"><Icon name={ic} size={20} /></div><div><h4>{t}</h4><p>{d}</p></div></div>)}</div>
        </div>
      </section>

      <IntegrationsSection cats={enterpriseIntegrations} title="Plugs into your enterprise stack" lede="Connect Auzmor Hire to your HRIS, job boards, video, assessment, identity and collaboration tools — and to the rest of the Auzmor suite." />

      <section>
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">Implementation<Confirm /></span><h2>Live in weeks, not quarters</h2></div>
          <div className="grid g4 steps">
            <div className="card"><h3>Discover</h3><p>Map your roles, stages, approvals and compliance needs with an Auzmor specialist.</p></div>
            <div className="card"><h3>Configure</h3><p>Workflows, scorecards, AI settings, offer templates and career sites set up with you.</p></div>
            <div className="card"><h3>Migrate & connect</h3><p>Bring over open jobs and candidates, and connect your HRIS and tools.</p></div>
            <div className="card"><h3>Launch & optimize</h3><p>Train recruiters and hiring managers, then improve with live analytics.</p></div>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap split">
          <div><span className="eyebrow">Security</span><h2>Enterprise-grade security by default</h2>
            <p className="lede">Candidate data is protected by certified controls, modern authentication and private-by-design AI.</p></div>
          <div className="badges">
            {["ISO 27001", "GDPR", "Two-factor authentication", "21 CFR Part 11", "EEOC / OFCCP"].map((b) => <span className="badge" key={b}><ShieldCheck size={16} />{b}</span>)}
            <span className="badge"><ShieldCheck size={16} />SOC 2<Confirm /></span>
          </div>
        </div>
      </section>

      <FAQ items={[
        ["Is AI included, or an add-on?", <>AI capabilities are built into the Auzmor Hire Enterprise platform.<Confirm label="confirm packaging" /></>],
        ["Does the AI make hiring decisions?", "No. AI drafts, ranks, summarizes and schedules, and always shows its reasoning. Recruiters and hiring managers review and make every decision."],
        ["How long does implementation take?", <>Most enterprise teams go live in weeks, with hands-on support from discovery to launch.<Confirm /></>],
        ["Can you migrate data from our current ATS?", <>Yes. Our team helps migrate open jobs, candidates and history during implementation.<Confirm /></>],
        ["Is there a trial?", "Yes. After a demo you get a free 7-day trial to test Auzmor Hire with your own roles."],
      ]} />

      <CTA title="See AI-powered enterprise hiring in action" body="Bring a real requisition — we'll show you how Auzmor Hire takes it from job post to signed offer." label="Book an enterprise demo" />
    </>
  );
}
