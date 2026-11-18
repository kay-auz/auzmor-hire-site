import Link from "next/link";
import { ArrowRight, Check, Sparkles, ShieldCheck, Eye, SlidersHorizontal, Lock, Building2, Landmark } from "lucide-react";
import { CTA, FAQ, DEMO, Confirm } from "../components/Shell";
import { Stages, Icon } from "../components/Blocks";
import { CareerSiteSection } from "../components/HomeExtras";
import MobileApps from "../components/MobileApps";
import IntegrationsSection from "../components/IntegrationsSection";
import { enterpriseIntegrations } from "../lib/integrations";

const stages = [
  { name: "Source & attract", tag: "Fill the top of the funnel", icon: "Megaphone", items: [
    ["Wand2", "AI job descriptions", "Draft clear, inclusive job posts from a title and a few notes — then edit and publish.", true],
    ["Globe", "20,000+ job boards", "Post once to free, niche and premium boards and see which sources actually deliver hires."],
    ["LayoutTemplate", "Branded career page", "A mobile-optimized, no-code career site wired straight into your pipeline."],
    ["Users", "Employee referrals", "Turn employees into recruiters with tracked referrals and rewards."],
  ]},
  { name: "Evaluate & collaborate", tag: "Structured, fair decisions", icon: "ClipboardCheck", items: [
    ["ScanSearch", "Smart match & screening", "Rank applicants against the skills that matter — with the reasons shown, never a black box.", true],
    ["FileText", "AI candidate summaries", "A one-glance snapshot of every resume and application.", true],
    ["Workflow", "Automated workflows", "Emails, evaluation requests and stage moves happen automatically."],
    ["Video", "Smart interviews", "Interview in MS Teams, Google Meet or GoToMeeting with structured scorecards."],
  ]},
  { name: "Hire & measure", tag: "Close fast, prove it", icon: "Trophy", items: [
    ["Send", "Offer management", "Templated, on-brand offers that go out in minutes, not days."],
    ["Scale", "EEOC & OFCCP compliance", "Built-in EEO self-identification and reporting."],
    ["BarChart3", "Reporting & insights", "Source, pipeline, job and team-productivity reports with one-click export."],
    ["MessageSquareText", "Ask Hire analytics", "Ask a question in plain English and get the chart back.", true],
  ]},
];

const ai = [
  ["Wand2", "Kick off", "Job kickoff assistant", "Turn a hiring manager's notes into an inclusive job post, interview plan and scorecard — in minutes."],
  ["ScanSearch", "Screen", "Explainable smart match", "Ranks applicants against must-have skills and shows the evidence behind every score — recruiters verify and decide."],
  ["ShieldAlert", "Verify", "Fraud & spam detection", "Flags fake profiles, duplicate and bot applications before they reach your team."],
  ["FileText", "Summarize", "Candidate insights", "Instant answers about any candidate across resume, notes and feedback."],
  ["Mic", "Interview", "AI notetaker", "Records, transcribes and maps notes to scorecard questions — one click to submit."],
  ["CalendarClock", "Schedule", "Self-scheduling", "Candidates book their own slots; declined interviewers are replaced automatically."],
  ["History", "Rediscover", "Talent rediscovery", "Past applicants resurfaced for every new role."],
  ["MessageSquareText", "Analyze", "Ask Hire", "Plain-language questions turned into charts and reports."],
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="chip"><b>NEW</b> AI built into every step of hiring</span>
            <h1>Hire smarter with AI. <span className="grad-text">Decide like a human.</span></h1>
            <p className="lede">Auzmor Hire is the AI-powered applicant tracking system that writes, screens, summarizes and schedules — so your team spends its time on people and the decisions that matter.</p>
            <div className="btns">
              <a className="btn btn-primary" href={DEMO}>Book a demo <ArrowRight size={18} /></a>
              <a className="btn btn-glass" href="#editions">Explore editions</a>
            </div>
            <div className="trust-row">
              <span><Check size={16} />20,000+ job boards</span><span><Check size={16} />EEOC & OFCCP ready</span><span><Check size={16} />ISO 27001 · GDPR</span>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div className="mock" aria-hidden>
              <div className="mock-top"><i /><i /><i /><span>Senior Data Analyst · 186 applicants</span></div>
              {[["PN", "Priya Nair", "SQL · Python · 6 yrs analytics", 94], ["MT", "Marcus Thompson", "Referral · Tableau · dbt", 89], ["ER", "Elena Ruiz", "Statistics MS · Looker", 86], ["JK", "Jordan Kim", "BI lead · stakeholder mgmt", 81]].map(([a, n, m, s]) => (
                <div className="mock-row" key={n}>
                  <span className="avatar">{a}</span>
                  <span className="meta"><b>{n}</b><small>{m}</small><div className="bar"><i style={{ width: `${s}%` }} /></div></span>
                  <span className="score">{s}%</span>
                </div>
              ))}
            </div>
            <div className="ai-pop" aria-hidden>
              <div className="hd"><Sparkles size={16} /> Why Priya is a strong match</div>
              <p>Meets 5 of 5 must-have skills. Led a SQL migration similar to this role. Available in 2 weeks.</p>
              <div className="acts"><span>Move to interview</span><span>View evidence</span></div>
            </div>
          </div>
        </div>
      </section>

      <div className="logos-band">
        <div className="wrap">
          <p>Trusted by 426+ organizations</p>
          <div className="logos">{["ManagedCare Advisors", "Chicago Venture Partners", "Pluang", "Hakuna Matata", "Macweld Machining", "Dorigo", "f1 studioz", "Cast India"].map((l) => <span key={l}>{l}</span>)}</div>
        </div>
      </div>

      <section id="editions">
        <div className="wrap">
          <div className="section-head center"><span className="eyebrow">Two editions · One platform</span><h2>Built for how <span className="grad-text">you</span> hire</h2>
            <p className="lede">Enterprises and public agencies share the same goal — great hires — but play by very different rules. Choose the edition designed for yours.</p></div>
          <div className="grid g2">
            <Link href="/enterprise" className="path path-ent">
              <div><span className="tag"><Building2 size={14} style={{ verticalAlign: -2 }} /> Auzmor Hire Enterprise</span><h3>AI-powered hiring at enterprise scale — live in weeks</h3>
                <p>For talent teams hiring across functions, brands and locations.</p></div>
              <div><ul>{["AI in every step, included in the platform", "Hire → onboard → train on one platform", "Recruiter-configurable workflows & analytics"].map((x) => <li key={x}><Check size={18} />{x}</li>)}</ul>
                <span className="btn btn-light">Explore Enterprise <ArrowRight size={18} /></span></div>
            </Link>
            <Link href="/government" className="path path-gov">
              <div><span className="tag"><Landmark size={14} style={{ verticalAlign: -2 }} /> Auzmor Hire Government</span><h3>Responsible AI for merit-based public hiring</h3>
                <p>For cities, counties, states, agencies and special districts.</p></div>
              <div><ul>{["Explainable, auditable, human-decided AI", "Your agency's own branded, accessible career site", "Cloud, government cloud or on-premise"].map((x) => <li key={x}><Check size={18} />{x}</li>)}</ul>
                <span className="btn btn-light">Explore Government <ArrowRight size={18} /></span></div>
            </Link>
          </div>
        </div>
      </section>

      <section id="ai" className="ai-band">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow"><Sparkles size={14} /> Auzmor Hire AI<Confirm /></span><h2>AI that does the busywork. <span className="grad-text">People make the call.</span></h2>
            <p className="lede">AI is built into the core of Auzmor Hire — not bolted on. It drafts, ranks, summarizes and schedules; your recruiters and hiring managers review, decide and stay accountable.</p></div>
          <div className="bento">
            {ai.map(([ic, tag, t, d], k) => (
              <div key={t} className={"b" + (k < 2 ? " wide" : "")}>
                <div className="icon"><Icon name={ic} /></div>
                <span className="tag">{tag}</span><h3>{t}</h3><p>{d}</p>
              </div>
            ))}
          </div>
          <div className="principles">
            <div><b><Eye size={18} />Explainable</b><span>Every recommendation shows its reasons.</span></div>
            <div><b><ShieldCheck size={18} />Human-decided</b><span>AI suggests; people approve every hiring decision.</span></div>
            <div><b><SlidersHorizontal size={18} />You're in control</b><span>Turn each AI feature on or off by team.</span></div>
            <div><b><Lock size={18} />Your data stays yours</b><span>Never used to train public AI models.</span></div>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">Platform</span><h2>Everything from first click to signed offer</h2>
            <p className="lede">Every edition includes the full Auzmor Hire core — with AI where it saves the most time.</p></div>
          <Stages stages={stages} />
        </div>
      </section>

      <CareerSiteSection />

      <MobileApps />

      <section id="trust">
        <div className="wrap">
          <div className="section-head center"><span className="eyebrow">Built on trust</span><h2>A hiring platform your people, candidates and auditors can trust</h2>
            <p className="lede">Fair process, responsible AI and enterprise-grade security — designed in from the start, not added later.</p></div>
          <div className="grid g4">
            {[
              ["ClipboardList", "Structured hiring", "Interview kits and scorecards align every interviewer on the same criteria — reducing bias and making decisions defensible.", false],
              ["Sparkles", "Responsible AI", "Human-led, explainable AI with regular third-party bias audits and published results.", true],
              ["ShieldCheck", "Trust & compliance", "Privacy by design, ISO 27001, GDPR and EEOC/OFCCP — with customer data never used to train AI models.", true],
              ["Heart", "Candidate experience", "Simple mobile applications, job alerts, self-scheduling, multilingual career pages and candidate surveys to spot bottlenecks.", true],
            ].map(([ic, t, d, c]) => <div className="card" key={t}><div className="icon"><Icon name={ic} /></div><h3>{t}{c && <Confirm />}</h3><p>{d}</p></div>)}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap stats">
          <div className="stat"><b>426+</b><span>organizations hiring on Auzmor Hire</span></div>
          <div className="stat"><b>10,925</b><span>people engaged through Auzmor Hire</span></div>
          <div className="stat"><b>20,000+</b><span>job boards, one click away</span></div>
          <div className="stat"><b>&lt;24 hr</b><span>support response, as reported by customers</span></div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="quote">
            <blockquote>“Customer service is outstanding — we hear back within 24 hours. With automated interview tasks we now handle a far higher applicant volume without adding headcount.”</blockquote>
            <cite><b style={{ color: "var(--ink)" }}>Jenna Speck</b> · HR Manager, Chicago Venture Partners <Confirm label="use verbatim review" /></cite>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap split">
          <div><span className="eyebrow">Better together</span><h2>From candidate to contributor on one platform</h2>
            <p className="lede">The moment an offer is accepted, onboarding starts in Auzmor Office — candidate data flows in, tasks and reminders go out, documents are e-signed and a branded welcome portal greets your new hire. Auzmor Learn assigns role training so they are productive on day one, not day thirty.</p>
            <a className="btn btn-ghost" href={DEMO}>See the suite <ArrowRight size={18} /></a></div>
          <div className="tiles">
            {[["Search", "Hire", "Source, screen and offer."], ["FileSignature", "Office", "Onboarding, e-signatures, intranet."], ["GraduationCap", "Learn", "Compliance and role training."], ["ShieldCheck", "Secure", "ISO 27001, GDPR, 2FA, 21 CFR Part 11."]].map(([ic, t, d]) => (
              <div className="tile" key={t}><div className="icon"><Icon name={ic} size={20} /></div><div><h4>{t}</h4><p>{d}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      <IntegrationsSection cats={enterpriseIntegrations} title="Connects to the tools you already run" lede="HRIS, job boards, video, assessments, identity and the full Auzmor suite — connected out of the box." />

      <FAQ items={[
        ["What is an applicant tracking system (ATS)?", "An ATS is recruiting software that manages hiring from job post to offer: it publishes jobs, collects applications, moves candidates through interview stages and reports on pipeline health. Auzmor Hire adds AI, a career page and onboarding on top."],
        ["What's the difference between an ATS and a recruiting CRM?", <>An ATS manages active applicants; a CRM nurtures prospects and past candidates for future roles. Auzmor Hire includes talent pools and nurture alongside the ATS.<Confirm /></>],
        ["Which edition is right for us?", "Private companies hiring across teams, locations or countries typically choose Enterprise. Cities, counties, states, agencies and special districts choose Government, which adds public-sector workflows, responsible-AI controls and flexible deployment."],
        ["Does AI make hiring decisions?", "No. Auzmor Hire AI drafts, ranks, summarizes and schedules, and always shows its reasoning. People review and make every hiring decision."],
        ["Is our data used to train AI models?", <>No. Customer and candidate personal data is never used to train AI models.<Confirm /></>],
        ["Does Auzmor Hire integrate with our HRIS?", "Yes. Auzmor Hire integrates with leading HRIS platforms and natively with Auzmor Office and Auzmor Learn."],
        ["How many job boards can we post to?", "More than 20,000 — including free, niche and premium boards — from a single job posting."],
        ["Is there a free trial?", "Yes. After a short demo, you get a free 7-day trial to test Auzmor Hire with your own jobs."],
      ]} />

      <CTA title="Build winning teams with smarter, AI-powered hiring" body="See Auzmor Hire with your own roles, workflows and compliance requirements in a 30-minute demo." />
    </>
  );
}
