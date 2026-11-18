import { ArrowRight, Check, Sparkles, Eye, ShieldCheck, SlidersHorizontal, Lock, ScrollText, CircleCheck, CircleAlert } from "lucide-react";
import { CTA, FAQ, DEMO, Confirm } from "../../components/Shell";
import { Icon } from "../../components/Blocks";
import IntegrationsSection from "../../components/IntegrationsSection";
import { govIntegrations } from "../../lib/integrations";

export const metadata = {
  title: "Public-sector hiring, accelerated by AI workflows",
  description: "Auzmor Hire Government: responsible, explainable AI for merit-based public-sector recruiting, your agency's own branded career site, and hire-onboard-train on one suite — cloud, government cloud or on-premise.",
};

const diffs = [
  { t: "Responsible AI built for merit systems", d: "AI that saves HR teams hours while standing up to audits, grievances and public-records requests.", c: true,
    pts: ["Every AI suggestion explained and logged", "People make every eligibility and hiring decision", "Agency turns each AI feature on or off"] },
  { t: "Your agency's brand, everywhere candidates are", d: "Applicants apply on your own branded, accessible career site — and your jobs reach far beyond government-only boards.",
    pts: ["No third-party job-site account to apply", "20,000+ boards incl. veteran & diversity", "Mobile-friendly, accessible applications"] },
  { t: "Hire, onboard and train — deployed your way", d: "One public-sector suite for recruiting, onboarding and compliance training, in the cloud, a government cloud or on-premise.", c: true,
    pts: ["Auzmor Office onboarding & e-signatures", "Auzmor Learn compliance training", "Professional services & custom development"] },
];

const ai = [
  ["Wand2", "Write", "AI job bulletin writer", "Drafts clear, plain-language job bulletins and class specs, checks reading level and flags exclusionary wording."],
  ["ListChecks", "Screen", "Minimum-qualification assist", "Checks each application against posted MQs and highlights the evidence — HR confirms every determination, and every one is logged."],
  ["FileText", "Review", "Applicant summaries", "A clear snapshot of each applicant's relevant experience."],
  ["Megaphone", "Promote", "Smart job promotion", "Targets the right boards for hard-to-fill roles like dispatch, nursing and corrections."],
  ["Languages", "Assist", "Multilingual applicant assistant", "Answers applicant questions 24/7, in multiple languages."],
  ["Mic", "Interview", "Panel interview copilot", "Generates structured, job-related question sets, captures panel notes and drafts rating sheets for panel review."],
  ["MessageSquareText", "Report", "Ask Hire", "“How long did police officer recruitments take this year, by stage?” — answered in seconds, ready for council."],
];

const pillars = [
  ["Scale", "Merit & civil-service workflows", "Minimum-qualification screening, exam scoring, ranked eligible lists and rule-of-N certification.", true],
  ["Medal", "Veterans' preference", "Apply preference points automatically and document every decision.", true],
  ["ScrollText", "Audit trail & records retention", "Every action time-stamped and attributable — ready for public-records requests.", true],
  ["Accessibility", "Accessible applications", "Section 508 / WCAG-aligned, mobile-friendly application experience.", true],
  ["ClipboardCheck", "EEO & OFCCP compliance", "EEO self-identification and reporting built in."],
  ["Server", "Hosting your way", "Cloud, government cloud or on-premise — like Auzmor's on-premise LMS.", true],
];

export default function Government() {
  return (
    <div className="gov-theme">
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="chip"><b>GOVERNMENT</b> Auzmor Hire · Government build</span>
            <h1>Public-sector hiring, <span className="grad-text">accelerated by AI workflows.</span></h1>
            <p className="lede">Fill critical public-service roles faster with explainable, auditable AI and compliance-first workflows — and give your community an application experience worthy of the job.</p>
            <div className="btns">
              <a className="btn btn-primary" href={DEMO}>Book a government demo <ArrowRight size={18} /></a>
              <a className="btn btn-glass" href="#ai">Responsible AI</a>
            </div>
            <div className="trust-row"><span><Check size={16} />NMSDC-certified supplier</span><span><Check size={16} />ISO 27001</span><span><Check size={16} />EEO & OFCCP ready</span></div>
          </div>
          <div style={{ position: "relative" }}>
            <div className="mock" aria-hidden>
              <div className="mock-top"><i /><i /><i /><span>Police Officer I · Eligible list · Rule of 3</span></div>
              {[["RA", "R. Alvarez", "Exam 91.5 · Veteran +5", "96.5"], ["KO", "K. Okafor", "Exam 94.0", "94.0"], ["DN", "D. Nguyen", "Exam 87.5 · Veteran +5", "92.5"], ["SP", "S. Patel", "Exam 90.0", "90.0"]].map(([a, n, m, s], k) => (
                <div className="mock-row" key={n} style={{ opacity: k > 2 ? .45 : 1 }}>
                  <span className="avatar">{a}</span><span className="meta"><b>#{k + 1} {n}</b><small>{m}</small></span><span className="score">{s}</span>
                </div>
              ))}
            </div>
            <div className="ai-pop" aria-hidden>
              <div className="hd"><Sparkles size={16} /> MQ check · J. Brooks</div>
              <p style={{ marginBottom: 6 }}><CircleCheck size={13} style={{ color: "#10b981", verticalAlign: -2 }} /> High school diploma — verified<br /><CircleCheck size={13} style={{ color: "#10b981", verticalAlign: -2 }} /> Valid driver's license — stated<br /><CircleAlert size={13} style={{ color: "#f59e0b", verticalAlign: -2 }} /> Age 21 by appointment — needs HR review</p>
              <div className="acts"><span>Confirm determination</span><span>View audit log</span></div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head center"><span className="eyebrow">Why Auzmor Hire Government</span><h2>Three reasons agencies choose us</h2></div>
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
          <div className="section-head"><span className="eyebrow"><Sparkles size={14} /> Responsible AI for government<Confirm /></span><h2>AI that serves the public. <span className="grad-text">People stay accountable.</span></h2>
            <p className="lede">Public hiring has to be fair, transparent and defensible. Auzmor Hire AI handles the drafting, checking and scheduling — and leaves a clear record of every recommendation and every human decision.</p></div>
          <div className="bento">
            {ai.map(([ic, tag, t, d], k) => (
              <div key={t} className={"b" + (k < 2 || k > 4 ? " wide" : "")}>
                <div className="icon"><Icon name={ic} /></div><span className="tag">{tag}</span><h3>{t}</h3><p>{d}</p>
              </div>
            ))}
          </div>
          <div className="principles">
            <div><b><ShieldCheck size={18} />Human-decided</b><span>People make every eligibility and hiring decision.</span></div>
            <div><b><Eye size={18} />Explainable</b><span>Each suggestion shows the evidence behind it.</span></div>
            <div><b><ScrollText size={18} />Audit-logged</b><span>AI output and human actions recorded for review.</span></div>
            <div><b><Lock size={18} />Agency-controlled</b><span>Toggle features; data never trains public models.</span></div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">Built for government</span><h2>Compliance-first recruiting for cities, counties, states and agencies</h2>
            <p className="lede">Everything in the Auzmor Hire core — plus the rules, records and transparency public employers answer to.</p></div>
          <div className="grid g3">
            {pillars.map(([ic, t, d, c]) => <div className="card" key={t}><div className="icon"><Icon name={ic} /></div><h3>{t}{c && <Confirm />}</h3><p>{d}</p></div>)}
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap split">
          <div><span className="eyebrow">Who it's for</span><h2>From small towns to statewide agencies</h2>
            <p className="lede">Whether you post five jobs a year or five hundred, Auzmor Hire Government scales to your process — and your budget.</p></div>
          <div className="tiles">
            {[["Building", "Cities & counties"], ["Landmark", "State agencies"], ["Siren", "Public safety & corrections"], ["Droplets", "Utilities & special districts"], ["Bus", "Transit & public works"], ["HeartPulse", "Public health"]].map(([ic, x]) => (
              <div className="tile" key={x} style={{ alignItems: "center" }}><div className="icon"><Icon name={ic} size={20} /></div><h4 style={{ margin: 0 }}>{x}</h4></div>
            ))}
          </div>
        </div>
      </section>

      <IntegrationsSection gov cats={govIntegrations} title="Connects to your ERP, testing vendors and IT standards" lede="Keep personnel records, exams, background investigations and sign-on in sync — and reach candidates well beyond government-only job boards." />

      <section>
        <div className="wrap split">
          <div><span className="eyebrow">One public-sector suite</span><h2>Hire, onboard and train — on one platform</h2>
            <p className="lede">Auzmor's public-sector suite covers recruiting, onboarding workflows and e-signatures, compliance training (harassment prevention, OSHA, fraud prevention and more) and an employee intranet.</p></div>
          <div className="tiles">
            {[["Search", "Auzmor Hire", "Merit-based recruiting & compliance."], ["FileSignature", "Auzmor Office", "Onboarding, e-signatures, intranet."], ["GraduationCap", "Auzmor Learn", "Compliance training, cloud or on-prem."], ["Wrench", "Professional services", "Custom content and application development."]].map(([ic, t, d]) => (
              <div className="tile" key={t}><div className="icon"><Icon name={ic} size={20} /></div><div><h4>{t}</h4><p>{d}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap split">
          <div><span className="eyebrow">Security & procurement</span><h2>Built to pass review</h2>
            <p className="lede">Certified security controls, flexible hosting and a procurement process designed for public buyers.</p></div>
          <div className="badges">
            {["ISO 27001", "GDPR", "Two-factor authentication", "21 CFR Part 11", "EEO / OFCCP", "NMSDC-certified supplier"].map((b) => <span className="badge" key={b}><ShieldCheck size={16} />{b}</span>)}
            {["StateRAMP", "CJIS-aligned", "Cooperative purchasing"].map((b) => <span className="badge" key={b}><ShieldCheck size={16} />{b}<Confirm /></span>)}
          </div>
        </div>
      </section>

      <FAQ items={[
        ["Does AI decide who is eligible or hired?", "No. AI highlights evidence and drafts recommendations; HR staff and hiring panels make and confirm every eligibility, ranking and hiring decision — and each one is logged."],
        ["Can we turn AI features off?", <>Yes. Administrators enable or disable each AI feature and control which user groups can use it.<Confirm /></>],
        ["Is our data used to train AI models?", <>No. Agency data stays within your environment and is not used to train public AI models.<Confirm /></>],
        ["Do applicants need an account on a third-party job site?", "No. Applicants apply directly on your agency's branded career site, which you can embed on your existing website."],
        ["Can we host Auzmor Hire on-premise?", <>Yes. Like Auzmor's on-premise LMS, Auzmor Hire Government can run in the cloud, a government cloud or on-premise.<Confirm /></>],
      ]} />

      <CTA title="Modernize public-sector hiring — responsibly" body="See how your agency can fill critical roles faster, with every rule followed and every decision documented." label="Book a government demo" />
    </div>
  );
}
