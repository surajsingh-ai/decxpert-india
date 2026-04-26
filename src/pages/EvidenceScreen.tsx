import { Screen, SectionHeader } from "@/components/app/Screen";
import { Award, ShieldCheck, Lock, Microscope, Hospital, ScanLine, MapPin } from "lucide-react";

const compliance = [
  { i: Award, t: "CDSCO Licensed Medical Device" },
  { i: ShieldCheck, t: "ISO 13485:2016 Certified QMS" },
  { i: Lock, t: "DPDP Act 2023 Compliant" },
  { i: Microscope, t: "Published in Nature Scientific Reports, 2024" },
];

const stats = [
  { v: "1M+", l: "Indian X-ray scans used in training" },
  { v: "500K+", l: "Expert-labelled dataset" },
  { v: "≈98%", l: "TB detection accuracy in clinical settings" },
  { v: "52.8%", l: "Treatment outcome improvement vs standard workflow" },
];

const advisors = [
  "Dr. Randeep Guleria",
  "Dr. Alok Nath",
  "Dr. Zia Hashim",
  "Dr. Ajmal Khan",
  "Dr. Prasanth Areekkara Poduvattil",
];

const impact = [
  { v: "205K+", l: "Scans processed", icon: ScanLine },
  { v: "4,655+", l: "Positive clinician ratings", icon: ShieldCheck },
  { v: "Multi-centre", l: "Deployments across India", icon: MapPin },
];

const EvidenceScreen = () => (
  <Screen>
    <SectionHeader
      eyebrow="Clinical evidence"
      title="Validated where it matters — at the point of care"
      desc="Multi-year collaboration with the Department of Pulmonary Medicine, SGPGIMS Lucknow."
    />

    <div className="grid grid-cols-2 gap-3">
      {stats.map((s) => (
        <div key={s.l} className="page-card p-4">
          <div className="stat-number !text-3xl">{s.v}</div>
          <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
        </div>
      ))}
    </div>

    <div className="space-y-2">
      {compliance.map((b) => (
        <div key={b.t} className="flex items-center gap-3 rounded-xl border border-primary/20 bg-secondary/50 px-3 py-2.5">
          <div className="h-8 w-8 rounded-lg bg-gradient-teal grid place-items-center shrink-0">
            <b.i className="h-4 w-4 text-primary-foreground" />
          </div>
          <div className="font-semibold text-sm">{b.t}</div>
        </div>
      ))}
    </div>

    <div className="page-card p-5 bg-gradient-dark text-primary-foreground border-0 relative overflow-hidden">
      <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-primary-glow/20 blur-3xl" />
      <div className="relative flex items-start gap-3">
        <div className="h-10 w-10 rounded-lg bg-primary-glow/20 grid place-items-center shrink-0">
          <Hospital className="h-5 w-5 text-primary-glow" />
        </div>
        <div>
          <div className="page-marker text-primary-glow">Lead clinical site</div>
          <div className="mt-1 font-display font-bold text-lg">SGPGIMS, Lucknow</div>
          <p className="mt-2 text-sm text-white/80">
            Sanjay Gandhi Postgraduate Institute of Medical Sciences — Department of Pulmonary Medicine. Multi-centre validation extended across tertiary centres and district hospitals.
          </p>
        </div>
      </div>
    </div>

    <section>
      <SectionHeader title="Field impact" />
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {impact.map((s) => (
          <div key={s.l} className="page-card p-4">
            <s.icon className="h-4 w-4 text-primary mb-2" />
            <div className="stat-number !text-2xl">{s.v}</div>
            <div className="mt-1 text-[11px] uppercase tracking-wider font-semibold text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
    </section>

    <section>
      <SectionHeader title="Clinical Advisory Board" />
      <div className="mt-3 flex flex-wrap gap-2">
        {advisors.map((a) => (
          <span key={a} className="rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground">{a}</span>
        ))}
      </div>
    </section>
  </Screen>
);

export default EvidenceScreen;
