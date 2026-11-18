import { Code2, KeyRound, Wrench, Bot } from "lucide-react";
import { Integrations } from "./Blocks";
import { Confirm } from "./Shell";

export default function IntegrationsSection({ cats, title, lede, gov }) {
  return (
    <section id="integrations" className="alt">
      <div className="wrap">
        <div className="section-head"><span className="eyebrow">Integrations<Confirm label="confirm partner list" /></span><h2>{title}</h2><p className="lede">{lede}</p></div>
        <Integrations cats={cats} />
        <div className="int-foot">
          <div className="card"><div className="icon"><Code2 size={20} /></div><div><h4>Open API & webhooks<Confirm /></h4><p>Build your own connections and automate data flows.</p></div></div>
          <div className="card"><div className="icon"><KeyRound size={20} /></div><div><h4>SSO & role-based access<Confirm /></h4><p>SAML sign-on and granular permissions by team.</p></div></div>
          <div className="card"><div className="icon"><Bot size={20} /></div><div><h4>Connect your AI assistant<Confirm /></h4><p>Securely bring live hiring data into Claude, Copilot or Gemini via MCP — with governed access.</p></div></div>
          <div className="card"><div className="icon"><Wrench size={20} /></div><div><h4>{gov ? "Custom integrations" : "Integration services"}</h4><p>{gov ? "Auzmor professional services build connections to legacy and in-house systems." : "Our team helps connect the systems unique to your stack."}</p></div></div>
        </div>
      </div>
    </section>
  );
}
