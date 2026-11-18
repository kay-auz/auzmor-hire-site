"use client";
import { useState } from "react";
import { Circle, Sparkles, Heart, ShieldAlert, MessageCircle, Bell, Target, Accessibility, BarChart3, Building, Building2, Bus, CalendarClock, ClipboardCheck, ClipboardList, Droplets, FileSignature, FileText, GitBranch, Globe, GraduationCap, HeartPulse, History, KeyRound, Landmark, Languages, Layers, LayoutTemplate, ListChecks, Lock, Medal, Megaphone, MessageSquareText, MessagesSquare, Mic, Palette, Scale, ScanSearch, ScrollText, Search, Send, Server, ShieldCheck, Siren, Trophy, Users, Video, Wand2, Workflow, Wrench } from "lucide-react";
const I = { Sparkles, Heart, ShieldAlert, MessageCircle, Bell, Target, Accessibility, BarChart3, Building, Building2, Bus, CalendarClock, ClipboardCheck, ClipboardList, Droplets, FileSignature, FileText, GitBranch, Globe, GraduationCap, HeartPulse, History, KeyRound, Landmark, Languages, Layers, LayoutTemplate, ListChecks, Lock, Medal, Megaphone, MessageSquareText, MessagesSquare, Mic, Palette, Scale, ScanSearch, ScrollText, Search, Send, Server, ShieldCheck, Siren, Trophy, Users, Video, Wand2, Workflow, Wrench };

export function Icon({ name, size = 22 }) {
  const C = I[name] || Circle;
  return <C size={size} strokeWidth={2} />;
}

export function Stages({ stages }) {
  const [i, setI] = useState(0);
  const s = stages[i];
  return (
    <div className="stage">
      <div className="stage-list">
        {stages.map((st, k) => (
          <button key={st.name} className={k === i ? "on" : ""} onClick={() => setI(k)}>
            <Icon name={st.icon} size={20} />
            <span>{st.name}<small>{st.tag}</small></span>
          </button>
        ))}
      </div>
      <div className="grid g2">
        {s.items.map(([icon, t, d, ai], n) => (
          <div className="card" key={n}>
            <div className={"icon" + (ai ? " ai" : "")}><Icon name={icon} /></div>
            <h3>{t}{ai && <span className="pill" style={{ marginLeft: 8, background: "var(--brand-soft)", color: "var(--brand)" }}>AI</span>}</h3>
            <p>{d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const COLORS = ["#5b3fe4", "#0ea5e9", "#10b981", "#f97316", "#e11d48", "#8b5cf6", "#0b5cad", "#14b8a6", "#f59e0b"];
const mono = (name) => name.replace(/[^A-Za-z0-9 ]/g, "").split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();

export function Integrations({ cats }) {
  const [i, setI] = useState(0);
  const c = cats[i];
  return (
    <div className="int-wrap">
      <div className="int-cats">
        {cats.map((x, k) => (
          <button key={x.name} className={k === i ? "on" : ""} onClick={() => setI(k)}>
            <span style={{ display: "flex", gap: 10, alignItems: "center" }}><Icon name={x.icon} size={18} />{x.name}</span>
            <em>{x.count || x.apps.length}</em>
          </button>
        ))}
      </div>
      <div>
        <p className="int-desc">{c.desc}</p>
        <div className="int-grid">
          {c.apps.map(([n, sub], k) => (
            <div className="int" key={n}>
              <span className="mono" style={{ background: COLORS[(k + i * 2) % COLORS.length] }}>{mono(n)}</span>
              <span>{n}<small>{sub}</small></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
