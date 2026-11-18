import { Sparkles, MapPin, MessageCircle } from "lucide-react";
import { Icon } from "./Blocks";
import { Confirm } from "./Shell";

const careerFeatures = [
  ["Target", "Personalized job recommendations", "Roles reorder for each visitor based on their skills, interests and location.", true],
  ["FileText", "AI job summaries", "Long postings condensed into what candidates care about — pay, location, must-haves.", true],
  ["MessageCircle", "24/7 career assistant", "Answers candidate questions and guides them to the right role, day or night.", true],
  ["LayoutTemplate", "No-code, multi-brand builder", "Edit pages, themes and brands without IT tickets — a site per brand or region."],
  ["Users", "Talent community", "Visitors who aren't ready to apply join your pipeline for future roles.", true],
  ["Accessibility", "Accessible & multilingual", "Mobile-first, accessibility-checked pages in your candidates' languages.", true],
];

export function CareerSiteSection() {
  return (
    <section id="career-site">
      <div className="wrap">
        <div className="section-head center"><span className="eyebrow"><Sparkles size={14} /> AI-powered career page</span>
          <h2>A career page that <span className="grad-text">knows who's visiting</span></h2>
          <p className="lede">Turn browsers into applicants. Auzmor Hire's career page personalizes every visit, answers questions instantly and feeds every interested candidate straight into your pipeline.</p></div>
        <div className="split" style={{ alignItems: "start" }}>
          <div className="browser" aria-hidden>
            <div className="browser-top"><i /><i /><i /><span>careers.yourcompany.com</span></div>
            <div className="cs-hero">
              <b>Build what's next with us</b>
              <div className="cs-search"><span>Search roles, skills or locations</span><em>Search</em></div>
            </div>
            <div className="cs-body">
              <div className="cs-label"><Sparkles size={13} /> Recommended for you · based on your profile</div>
              {[["Senior Data Analyst", "Chicago · Hybrid", "96%"], ["Analytics Engineer", "Remote · US", "91%"], ["BI Developer", "Austin · On-site", "84%"]].map(([t, l, m]) => (
                <div className="cs-job" key={t}>
                  <div><b>{t}</b><small><MapPin size={12} /> {l}</small></div>
                  <span className="cs-match">{m} match</span>
                </div>
              ))}
              <div className="cs-summary"><b><Sparkles size={13} /> AI summary · Senior Data Analyst</b>
                <span>$95–115k · 3 days in office · Must have: SQL, Python, 5+ yrs · Leads the revenue analytics team</span></div>
            </div>
            <div className="cs-chat">
              <div className="hd"><MessageCircle size={15} /> Career assistant</div>
              <p className="q">Do you sponsor visas for analyst roles?</p>
              <p className="a">Yes — 2 of the roles recommended for you offer visa sponsorship. Want me to show them?</p>
            </div>
          </div>
          <div className="tiles" style={{ gridTemplateColumns: "1fr" }}>
            {careerFeatures.map(([ic, t, d, c]) => (
              <div className="tile" key={t}><div className="icon"><Icon name={ic} size={20} /></div><div><h4>{t}{c && <Confirm />}</h4><p>{d}</p></div></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
