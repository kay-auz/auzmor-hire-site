"use client";
import { useState } from "react";
import { Bell, Sparkles, Check, ArrowRight, Users, ClipboardCheck, GitBranch, Smartphone, CalendarCheck, Search, FileSignature, BarChart3, ShieldCheck, UserCog, AlertTriangle, Apple, Play, Briefcase, UserRound, Settings2 } from "lucide-react";
import { Confirm, DEMO } from "./Shell";

const apps = [
  {
    key: "recruiters", label: "Recruiters & hiring managers", icon: Briefcase,
    title: "Keep hiring moving between meetings",
    body: "Review candidates, submit feedback and approve offers from anywhere — with AI prep briefs before every interview.",
    feats: [[Users, "Review candidates anywhere", "Profiles, resumes and AI summaries in your pocket."], [ClipboardCheck, "Scorecards in minutes", "Rate candidates right after the interview."], [GitBranch, "One-tap approvals", "Sign off on requisitions and offers instantly."], [Bell, "Real-time alerts", "Interview reminders, new applicants, pending tasks."]],
    phone: (
      <>
        <div className="ph-head"><small>Good morning, Dana</small><b>3 things need you</b></div>
        <div className="ph-card"><Bell size={14} /><div><b>Interview in 30 min</b><small>Priya Nair · Senior Data Analyst</small></div></div>
        <div className="ph-card ai"><Sparkles size={14} /><div><b>AI prep brief ready</b><small>5/5 must-haves · ask about SQL migration</small></div></div>
        <div className="ph-card"><Check size={14} /><div><b>Approve offer</b><small>Sam Wilson · Product Designer</small></div></div>
        <div className="ph-btn">Approve offer <ArrowRight size={14} /></div>
      </>
    ),
  },
  {
    key: "applicants", label: "Applicants", icon: UserRound,
    title: "A candidate experience that fits in their pocket",
    body: "Applicants find roles, apply in minutes, pick interview times and track every step — no more application black hole.",
    feats: [[Smartphone, "Apply in minutes", "Mobile-first apply with resume upload or profile import."], [Search, "Job alerts & matches", "Personalized roles delivered as they open."], [CalendarCheck, "Self-scheduling", "Candidates pick interview slots and get reminders."], [FileSignature, "Track & sign", "Live application status and offer e-signature."]],
    phone: (
      <>
        <div className="ph-head"><small>Hi Priya</small><b>Your applications</b></div>
        <div className="ph-card"><div style={{ width: "100%" }}><b>Senior Data Analyst</b><small>Acme Corp · Chicago</small>
          <div className="ph-steps">{["Applied", "Screen", "Interview", "Offer"].map((s, i) => <span key={s} className={i < 3 ? "on" : ""}>{s}</span>)}</div></div></div>
        <div className="ph-card ai"><CalendarCheck size={14} /><div><b>Pick your interview time</b><small>Thu 10:00 · Thu 2:30 · Fri 11:00</small></div></div>
        <div className="ph-card"><Sparkles size={14} /><div><b>2 new roles match you</b><small>Analytics Engineer · BI Developer</small></div></div>
        <div className="ph-btn">Confirm Thu 10:00 <ArrowRight size={14} /></div>
      </>
    ),
  },
  {
    key: "admins", label: "HR admins", icon: Settings2,
    title: "Run your hiring operation from anywhere",
    body: "Admins see hiring health at a glance, manage users and permissions, and act on compliance alerts before they become issues.",
    feats: [[BarChart3, "Live hiring dashboard", "Open reqs, time to hire and pipeline health."], [UserCog, "Users & permissions", "Add users, change roles and revoke access on the go."], [GitBranch, "Approval oversight", "See and unblock stalled requisitions and offers."], [ShieldCheck, "Compliance alerts", "EEO reporting, audit and policy reminders."]],
    phone: (
      <>
        <div className="ph-head"><small>Admin · All locations</small><b>Hiring overview</b></div>
        <div className="ph-kpis"><div><small>Open reqs</small><b>214</b></div><div><small>Time to hire</small><b>23d</b></div></div>
        <div className="ph-card"><GitBranch size={14} /><div><b>6 approvals stalled &gt; 3 days</b><small>EMEA · Engineering</small></div></div>
        <div className="ph-card ai"><AlertTriangle size={14} /><div><b>EEO report due Friday</b><small>Data 98% complete</small></div></div>
        <div className="ph-card"><UserCog size={14} /><div><b>2 access requests</b><small>New hiring managers · Sales</small></div></div>
      </>
    ),
  },
];

export default function MobileApps() {
  const [i, setI] = useState(0);
  const a = apps[i];
  return (
    <section id="mobile" className="alt">
      <div className="wrap">
        <div className="section-head center"><span className="eyebrow">Auzmor Hire mobile apps<Confirm /></span>
          <h2>Hiring doesn't wait for a desk. <span className="grad-text">Neither should you.</span></h2>
          <p className="lede">Purpose-built mobile experiences for everyone in the hiring process — on iOS and Android.</p></div>
        <div className="seg">
          {apps.map((x, k) => { const Ic = x.icon; return <button key={x.key} className={k === i ? "on" : ""} onClick={() => setI(k)}><Ic size={17} />{x.label}</button>; })}
        </div>
        <div className="split" style={{ marginTop: 48 }}>
          <div>
            <h3 style={{ fontSize: "1.8rem" }}>{a.title}</h3>
            <p className="lede" style={{ fontSize: "1.08rem" }}>{a.body}</p>
            <div className="tiles" style={{ margin: "24px 0 28px" }}>
              {a.feats.map(([Ic, t, d]) => <div className="tile" key={t}><div className="icon"><Ic size={20} /></div><div><h4>{t}</h4><p>{d}</p></div></div>)}
            </div>
            <div className="btns">
              <a className="store" href={DEMO}><Apple size={22} /><span><small>Download on the</small>App Store</span></a>
              <a className="store" href={DEMO}><Play size={20} /><span><small>Get it on</small>Google Play</span></a>
            </div>
          </div>
          <div className="phones single" aria-hidden>
            <div className="phone" key={a.key}><div className="notch" />{a.phone}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
