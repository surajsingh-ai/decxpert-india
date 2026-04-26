import heroXray from "@/assets/hero-xray.jpg";
import heatmapImg from "@/assets/heatmap.jpg";
import dashboardImg from "@/assets/dashboard.jpg";
import dectrocelLogo from "@/assets/dectrocel-logo.png";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import {
  Activity, ShieldCheck, Cpu, Cloud, Database, FileCheck2, Zap, Stethoscope,
  Brain, ScanLine, Building2, Microscope, BarChart3, Workflow, Lock, Award,
  CheckCircle2, AlertTriangle, MapPin, Mail, Phone, Globe, ArrowRight,
  HardDrive, WifiOff, Layers, Target, FileText, Users, Hospital, Radio,
} from "lucide-react";

/* ---------- Reusable atoms ---------- */
const PageMarker = ({ n, label }: { n: string; label: string }) => (
  <div className="flex items-center gap-3 mb-6">
    <span className="page-marker">Page {n}</span>
    <span className="h-px flex-1 bg-border" />
    <span className="page-marker">{label}</span>
  </div>
);

const Badge = ({ icon: Icon, children }: { icon: any; children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
    <Icon className="h-3.5 w-3.5" /> {children}
  </span>
);

const FeatureCard = ({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) => (
  <div className="group page-card p-6 hover:shadow-elevated transition-all duration-300">
    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-teal text-primary-foreground shadow-glow">
      <Icon className="h-5 w-5" />
    </div>
    <h4 className="font-display text-base font-bold mb-1.5">{title}</h4>
    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
  </div>
);

/* ---------- Top nav ---------- */
const Nav = () => (
  <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
    <div className="max-w-6xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
      <a href="#top" className="flex items-center gap-3">
        <img src={dectrocelLogo} alt="Dectrocel logo" className="h-10 w-auto object-contain" />
        <div className="leading-tight border-l border-border pl-3">
          <div className="font-display font-bold text-sm">Dectrocel<span className="text-primary">®</span></div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">DecXpert AI</div>
        </div>
      </a>
      <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-muted-foreground">
        <a href="#problem" className="hover:text-primary transition">Problem</a>
        <a href="#product" className="hover:text-primary transition">Platform</a>
        <a href="#tb" className="hover:text-primary transition">TB Engine</a>
        <a href="#deploy" className="hover:text-primary transition">Deployment</a>
        <a href="#validation" className="hover:text-primary transition">Validation</a>
        <a href="#contact" className="hover:text-primary transition">Contact</a>
      </nav>
      <a href="#contact" className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary-deep transition">
        Request Demo <ArrowRight className="h-3.5 w-3.5" />
      </a>
    </div>
  </header>
);

/* ---------- 1. COVER ---------- */
const Cover = () => (
  <section className="relative overflow-hidden bg-gradient-dark text-primary-foreground">
    <div className="absolute inset-0 grid-pattern opacity-40" />
    <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary-glow/20 blur-3xl" />
    <div className="relative page-section py-20 sm:py-28">
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <Badge icon={Award}>CDSCO Licensed</Badge>
            <Badge icon={ShieldCheck}>ISO 13485</Badge>
            <Badge icon={Lock}>DPDP Act 2023</Badge>
            <Badge icon={Microscope}>Nature Sci. Reports 2024</Badge>
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary-glow mb-4">
            E-Brochure · Procurement Edition · 2025
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
            Dectrocel<span className="text-primary-glow">®</span> DecXpert
            <span className="block text-primary-glow mt-2">AI Radiology Decision Support Platform</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed">
            Revolutionising respiratory healthcare and tuberculosis screening — AI-powered chest and skeletal X-ray analysis engineered for Indian public healthcare infrastructure.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#product" className="inline-flex items-center gap-2 rounded-full bg-primary-foreground text-primary-deep px-6 py-3 text-sm font-bold hover:bg-primary-glow transition">
              Explore the Platform <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">
              Tender Enquiry
            </a>
          </div>
          <div className="mt-10 pt-6 border-t border-white/15 text-sm text-white/70">
            <span className="font-semibold text-white">Powered by</span> the Department of Pulmonary Medicine, SGPGIMS, Lucknow
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-elevated ring-1 ring-white/10">
            <img src={heroXray} alt="Chest X-ray with AI detection overlays" width={1536} height={1024} className="w-full h-auto" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
            <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
              {[
                { l: "Pathologies", v: "262" },
                { l: "Modules", v: "11" },
                { l: "TB Signs", v: "11" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl bg-black/50 backdrop-blur px-3 py-2 border border-white/10">
                  <div className="font-display text-xl font-bold text-primary-glow">{s.v}</div>
                  <div className="text-[10px] uppercase tracking-wider text-white/70">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-3 text-xs text-white/60 text-center font-mono">Check your lung health now — simple, fast, reliable.</p>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- 2. PROBLEM ---------- */
const Problem = () => {
  const items = [
    { icon: Users, t: "Crushing patient load", d: "Public hospitals see thousands of chest X-rays daily; reporting backlogs delay TB and cancer diagnosis." },
    { icon: Stethoscope, t: "Acute radiologist shortage", d: "India has ~1 radiologist per 100,000 people — the deficit is sharpest in PHCs and district hospitals." },
    { icon: AlertTriangle, t: "Missed TB & lung cancer", d: "Subtle apical infiltrates, miliary nodules and small nodules are routinely missed on first read." },
    { icon: ScanLine, t: "Variable image quality", d: "Field-level CR/DR systems produce rotated, under-exposed and motion-blurred images that confuse generic AI." },
    { icon: Cloud, t: "Cloud-only AI is unsuitable", d: "Government and air-gapped facilities cannot transmit PHI to external cloud inference services." },
    { icon: FileText, t: "Unstructured reporting", d: "Free-text reports limit auditability, screening analytics and medico-legal traceability." },
  ];
  return (
    <section id="problem" className="page-section">
      <PageMarker n="02" label="The Problem" />
      <div className="max-w-3xl">
        <span className="eyebrow">Why a purpose-built platform</span>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold">Indian radiology has unique constraints. Most AI tools weren't built for them.</h2>
        <p className="mt-4 text-muted-foreground text-lg">DecXpert-SX is engineered from the ground up for the realities of Indian public healthcare — high volume, limited connectivity, mixed equipment vintages, and strict data sovereignty.</p>
      </div>
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((i) => <FeatureCard key={i.t} icon={i.icon} title={i.t} desc={i.d} />)}
      </div>
    </section>
  );
};

/* ---------- 3. PRODUCT OVERVIEW ---------- */
const Overview = () => (
  <section id="product" className="relative bg-gradient-surface">
    <div className="page-section">
      <PageMarker n="03" label="Product Overview" />
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6">
          <span className="eyebrow">Platform Overview</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold leading-tight">
            One unified AI decision support system for the entire chest and skeleton.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            DecXpert is a clinically validated AI radiology platform that detects tuberculosis, pneumonia, COPD, ILD, lung cancer and skeletal pathologies — generating structured, explainable reports with confidence scoring on every finding.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Detects 262 pathologies across 11 anatomical regions from a single dashboard",
              "Runs fully offline on standard hospital computers — no GPU, no cloud",
              "Generates medico-legal grade structured PDF reports with Grad-CAM heatmaps",
              "Confidence score (0–100%) on every detected pathology",
            ].map((t) => (
              <li key={t} className="flex gap-3 text-sm">
                <CheckCircle2 className="h-5 w-5 text-primary flex-none mt-0.5" /> <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-6">
          <div className="grid grid-cols-2 gap-4">
            {[
              { v: "262", l: "Pathologies detected", icon: Target },
              { v: "11", l: "Anatomical modules", icon: Layers },
              { v: "1M+", l: "Indian scans trained on", icon: Database },
              { v: "≈98%", l: "TB detection accuracy", icon: ShieldCheck },
            ].map((s) => (
              <div key={s.l} className="page-card p-6">
                <s.icon className="h-5 w-5 text-primary mb-3" />
                <div className="stat-number">{s.v}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2 font-semibold">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- 4. CORE CAPABILITIES ---------- */
const Capabilities = () => {
  const features = [
    { icon: Activity, t: "56 chest X-ray pathologies", d: "Airways, lung fields, cardiac silhouette, mediastinum, pleura, diaphragm." },
    { icon: HardDrive, t: "206 musculoskeletal conditions", d: "Trauma, degenerative disease, oncology, infection and congenital anomalies." },
    { icon: ShieldCheck, t: "11-sign TB checklist", d: "Each TB sign reported separately with its own confidence score — not a single probability." },
    { icon: Target, t: "Nodule risk stratification", d: "Size-stratified malignancy scoring: <6mm, 6–8, 8–20, 20–30, >30mm masses." },
    { icon: ScanLine, t: "Auto body-part recognition", d: "Reads DICOM, identifies anatomy, routes to the correct AI model — no manual selection." },
    { icon: Brain, t: "Grad-CAM heatmaps", d: "Lesion localisation rendered directly on the X-ray for clinician verification." },
    { icon: Layers, t: "Rib-level fracture mapping", d: "Reports Rib 1–12, Left/Right — medico-legal grade anatomical localisation." },
    { icon: BarChart3, t: "Batch screening mode", d: "Process thousands of X-rays with positive/negative dashboards and triage queues." },
    { icon: FileCheck2, t: "Structured PDF reporting", d: "Confidence-scored, auditable, ready for hospital records and tender compliance." },
  ];
  return (
    <section className="page-section">
      <PageMarker n="04" label="DecXpert-SX Core Capabilities" />
      <div className="max-w-3xl">
        <span className="eyebrow">Core capabilities</span>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold">Complete body AI radiology assistant for government healthcare systems.</h2>
      </div>
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f) => <FeatureCard key={f.t} icon={f.icon} title={f.t} desc={f.d} />)}
      </div>
    </section>
  );
};

/* ---------- 5. TB ENGINE ---------- */
const TBEngine = () => {
  const signs = [
    "Apical fibronodular infiltrates", "Cavitation", "Miliary nodules", "Hilar lymphadenopathy",
    "Pleural effusion", "Fibrosis", "Ghon focus", "Ranke complex",
    "Tree-in-Bud pattern", "TB pneumonia", "Spontaneous pneumothorax / empyema",
  ];
  return (
    <section id="tb" className="relative overflow-hidden bg-gradient-dark text-primary-foreground">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative page-section">
        <PageMarker n="05" label="TB Detection Engine" />
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary-glow">
              <span className="w-8 h-px bg-primary-glow" /> Key differentiator
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold leading-tight">
              The only AI platform that issues an <span className="text-primary-glow">11-sign specialist TB checklist</span> — not a single probability.
            </h2>
            <p className="mt-5 text-white/80 leading-relaxed">
              DecXpert-SX reports each TB sign individually with its own confidence score, mirroring how pulmonologists actually read a chest X-ray. Specialist signs such as Tree-in-Bud, Ranke Complex and Ghon focus — typically only flagged by chest physicians — are detected automatically.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent/20 border border-accent/40 px-4 py-2 text-sm">
              <WifiOff className="h-4 w-4 text-accent" />
              <span><strong>Offline TB triage</strong> — works without any internet connectivity</span>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-6 sm:p-8">
              <div className="flex items-center justify-between mb-5">
                <div className="font-mono text-xs uppercase tracking-widest text-primary-glow">TB Sign Checklist</div>
                <div className="font-mono text-xs text-white/60">11 / 11 detected separately</div>
              </div>
              <div className="grid sm:grid-cols-2 gap-2">
                {signs.map((s, i) => (
                  <div key={s} className="flex items-center justify-between gap-3 rounded-lg bg-white/5 border border-white/10 px-3 py-2.5 text-sm">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-[10px] text-primary-glow w-5">{String(i + 1).padStart(2, "0")}</span>
                      <span>{s}</span>
                    </div>
                    <CheckCircle2 className="h-4 w-4 text-primary-glow flex-none" />
                  </div>
                ))}
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  { l: "6-zone lung mapping", v: "RUL · RML · RLL · LUL · LML · LLL" },
                  { l: "Rib numbering", v: "Rib 1–12 · L / R" },
                  { l: "Offline pathologies", v: "19 chest" },
                ].map((b) => (
                  <div key={b.l} className="rounded-lg bg-primary/15 border border-primary-glow/30 p-3">
                    <div className="text-[10px] uppercase tracking-wider text-primary-glow font-semibold">{b.l}</div>
                    <div className="text-xs mt-1 text-white/90">{b.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- 6. COMPLETE BODY SUITE ---------- */
const BodySuite = () => {
  const modules = [
    { n: "Chest", c: 56, k: "Airways · Lungs · Mediastinum · Pleura" },
    { n: "Spine", c: 24, k: "Scoliosis · Fractures · Spondylolisthesis" },
    { n: "Knee", c: 24, k: "OA grading · Tibial plateau · Patellar dislocation" },
    { n: "Shoulder", c: 20, k: "Hill-Sachs · Bankart · Rotator cuff" },
    { n: "Wrist", c: 19, k: "Colles · Smith · Barton · Scaphoid AVN" },
    { n: "Pelvis", c: 21, k: "Acetabular · Femoral neck · DDH · SCFE" },
    { n: "Hand", c: 18, k: "Phalangeal & metacarpal trauma" },
    { n: "Foot & Ankle", c: 22, k: "Lisfranc · Calcaneal · Maisonneuve" },
    { n: "Skull", c: 14, k: "Vault & base assessment" },
    { n: "Elbow", c: 16, k: "Supracondylar · Radial head · Effusion" },
    { n: "Hip", c: 28, k: "AVN · Fracture · Arthroplasty review" },
  ];
  return (
    <section className="page-section">
      <PageMarker n="06" label="Complete Body Suite — 262 Pathologies" />
      <div className="grid lg:grid-cols-12 gap-10 items-end mb-10">
        <div className="lg:col-span-7">
          <span className="eyebrow">Anatomical coverage</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold">11 modules. 262 pathologies. One dashboard.</h2>
          <p className="mt-4 text-muted-foreground">Automatic body-part recognition routes each DICOM to the correct AI model — radiographers never select a module manually.</p>
        </div>
        <div className="lg:col-span-5">
          <div className="page-card p-5 bg-secondary border-primary/20">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-teal grid place-items-center">
                <Award className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <div className="font-display font-bold text-primary-deep">262 / 262 parameter coverage</div>
                <div className="text-xs text-muted-foreground">vs. ~140 in the nearest comparable AI platform</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {modules.map((m) => (
          <div key={m.n} className="page-card p-5 hover:border-primary/40 transition">
            <div className="flex items-baseline justify-between">
              <h4 className="font-display text-lg font-bold">{m.n}</h4>
              <span className="font-mono text-sm font-bold text-primary">{m.c}</span>
            </div>
            <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">pathologies</div>
            <p className="mt-3 text-xs text-muted-foreground leading-relaxed">{m.k}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ---------- 7. WORKFLOW ---------- */
const WorkflowSection = () => {
  const stages = [
    {
      title: "Input",
      icon: Database,
      items: ["Manual drag-and-drop DICOM", "Automated folder monitoring", "Batch screening camp imports", "PACS / RIS pull"],
    },
    {
      title: "Processing",
      icon: Cpu,
      items: ["Auto body-part recognition", "Image-quality grading", "AI inference (CPU only)", "Confidence scoring"],
    },
    {
      title: "Output",
      icon: FileCheck2,
      items: ["Structured PDF report", "Grad-CAM heatmaps", "6-zone lung mapping", "TB checklist + rib numbering"],
    },
  ];
  return (
    <section className="relative bg-gradient-surface">
      <div className="page-section">
        <PageMarker n="07" label="Workflow & Integration" />
        <div className="max-w-3xl">
          <span className="eyebrow">Workflow automation</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold">From DICOM to structured report — fully automated.</h2>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-5 relative">
          {stages.map((s, i) => (
            <div key={s.title} className="relative">
              <div className="page-card p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-gradient-teal grid place-items-center">
                    <s.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="page-marker">Stage 0{i + 1}</div>
                    <h4 className="font-display font-bold text-lg">{s.title}</h4>
                  </div>
                </div>
                <ul className="space-y-2">
                  {s.items.map((it) => (
                    <li key={it} className="flex gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-none" /> {it}
                    </li>
                  ))}
                </ul>
              </div>
              {i < stages.length - 1 && (
                <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 h-6 w-6 text-primary z-10 bg-background rounded-full" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 page-card overflow-hidden">
          <div className="grid lg:grid-cols-12">
            <div className="lg:col-span-5 p-8">
              <span className="eyebrow">Image Quality Intelligence</span>
              <h3 className="mt-4 font-display text-2xl font-bold">Built-in gatekeeper for field-level imaging.</h3>
              <p className="mt-3 text-sm text-muted-foreground">DecXpert-SX validates every X-ray before inference — guaranteeing reliable AI predictions even in low-resource imaging environments.</p>
              <div className="mt-5 grid grid-cols-2 gap-2">
                {["Rotation grading", "Motion blur", "Exposure analysis", "Artifact detection", "Implant differentiation", "Anatomy crop check"].map((q) => (
                  <div key={q} className="flex items-center gap-2 rounded-lg bg-secondary px-3 py-2 text-xs font-semibold text-secondary-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {q}
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7 relative bg-gradient-dark min-h-[280px]">
              <img src={dashboardImg} alt="DecXpert-SX dashboard placeholder" loading="lazy" width={1280} height={800} className="w-full h-full object-cover opacity-90" />
              <div className="absolute top-3 left-3 rounded-md bg-black/60 backdrop-blur px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-primary-glow border border-primary-glow/30">
                Dashboard preview
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {["DICOM native", "PACS compatible", "RIS compatible", "HL7 export ready", "Vendor-agnostic"].map((t) => (
            <span key={t} className="rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-semibold text-primary">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- 8. EXPLAINABLE AI / REPORTING ---------- */
const Reporting = () => (
  <section className="page-section">
    <PageMarker n="08" label="Reporting & Explainable AI" />
    <div className="grid lg:grid-cols-12 gap-10 items-center">
      <div className="lg:col-span-6 order-2 lg:order-1">
        <span className="eyebrow">Explainable AI</span>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold leading-tight">Every finding, localised. Every score, traceable.</h2>
        <p className="mt-4 text-muted-foreground">DecXpert generates medico-legal grade structured reports — Grad-CAM heatmaps render lesion locations directly on the X-ray, while every pathology carries a 0–100% confidence score for risk stratification and audit.</p>
        <div className="mt-6 space-y-3">
          {[
            { t: "Grad-CAM heatmaps", d: "Visual lesion localisation that radiologists and clinicians can verify at a glance." },
            { t: "6-zone lung mapping", d: "Findings reported by RUL, RML, RLL, LUL, LML, LLL for clarity and consistency." },
            { t: "Rib-level fracture localisation", d: "Reports Rib 1–12, Left / Right — useful in trauma and medico-legal contexts." },
            { t: "Confidence-score reporting", d: "0–100% probability on every finding, used for triage prioritisation and clinical validation." },
          ].map((x) => (
            <div key={x.t} className="flex gap-4">
              <div className="h-8 w-8 rounded-lg bg-primary/10 grid place-items-center flex-none">
                <CheckCircle2 className="h-4 w-4 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-sm">{x.t}</div>
                <div className="text-sm text-muted-foreground">{x.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:col-span-6 order-1 lg:order-2">
        <div className="relative">
          <div className="page-card overflow-hidden">
            <img src={heatmapImg} alt="Grad-CAM heatmap on chest X-ray" loading="lazy" width={1024} height={1024} className="w-full h-auto" />
          </div>
          <div className="absolute -bottom-5 -right-5 page-card p-4 max-w-[220px] shadow-elevated bg-card">
            <div className="flex items-center gap-2 mb-1">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Priority Triage</span>
            </div>
            <div className="text-sm font-semibold">Pneumothorax detected</div>
            <div className="text-xs text-muted-foreground">Confidence: <span className="font-mono font-bold text-accent">94%</span> · Escalated to top of queue</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- 9. DEPLOYMENT ---------- */
const Deployment = () => (
  <section id="deploy" className="relative bg-gradient-surface">
    <div className="page-section">
      <PageMarker n="09" label="Deployment & Infrastructure" />
      <div className="max-w-3xl">
        <span className="eyebrow">Built for Indian public healthcare</span>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold">Offline-first. CPU-only. DPDP-compliant.</h2>
        <p className="mt-4 text-muted-foreground text-lg">Engineered for the infrastructure you actually have — from PHCs running Intel i3 desktops to air-gapped tertiary hospitals.</p>
      </div>

      <div className="mt-10 grid lg:grid-cols-3 gap-5">
        <div className="page-card p-6">
          <Cpu className="h-7 w-7 text-primary mb-3" />
          <h4 className="font-display font-bold mb-2">Minimum hardware</h4>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li className="flex justify-between"><span>CPU</span><span className="font-mono text-foreground">Intel i3</span></li>
            <li className="flex justify-between"><span>RAM</span><span className="font-mono text-foreground">4 GB</span></li>
            <li className="flex justify-between"><span>GPU</span><span className="font-mono text-foreground">Not required</span></li>
            <li className="flex justify-between"><span>OS</span><span className="font-mono text-foreground">Win / Linux</span></li>
          </ul>
        </div>
        <div className="page-card p-6">
          <WifiOff className="h-7 w-7 text-primary mb-3" />
          <h4 className="font-display font-bold mb-2">Connectivity options</h4>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5" /> Fully offline installation</li>
            <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5" /> Air-gapped hospital ready</li>
            <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5" /> 19 chest pathologies offline</li>
            <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5" /> Optional secure on-prem cloud</li>
          </ul>
        </div>
        <div className="page-card p-6">
          <Building2 className="h-7 w-7 text-primary mb-3" />
          <h4 className="font-display font-bold mb-2">Suitable settings</h4>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5" /> Primary Health Centres</li>
            <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5" /> District & sub-district hospitals</li>
            <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5" /> Medical colleges & AIIMS</li>
            <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5" /> NTEP TB screening camps</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 page-card p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
          <div>
            <div className="page-marker mb-1">Vendor-agnostic compatibility</div>
            <h4 className="font-display font-bold text-xl">Works with every X-ray system in the Indian market.</h4>
          </div>
          <Badge icon={Lock}>DPDP Act 2023 compliant</Badge>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {["GE", "Siemens", "Philips", "Fuji", "Allengers", "Legacy CR"].map((v) => (
            <div key={v} className="rounded-xl border border-border bg-secondary/40 px-4 py-4 text-center font-display font-bold text-primary-deep">{v}</div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ---------- 10. CLINICAL VALIDATION ---------- */
const Validation = () => (
  <section id="validation" className="page-section">
    <PageMarker n="10" label="Clinical Validation & Compliance" />
    <div className="grid lg:grid-cols-12 gap-10">
      <div className="lg:col-span-5">
        <span className="eyebrow">Clinical evidence</span>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold leading-tight">Validated where it matters — at the point of care.</h2>
        <p className="mt-4 text-muted-foreground">DecXpert is the result of multi-year collaboration with the Department of Pulmonary Medicine, SGPGIMS Lucknow, with peer-reviewed publication and multi-centre validation across India.</p>
        <div className="mt-6 space-y-2">
          {[
            { i: Award, t: "CDSCO Licensed Medical Device" },
            { i: ShieldCheck, t: "ISO 13485:2016 Certified QMS" },
            { i: Lock, t: "DPDP Act 2023 Compliant" },
            { i: Microscope, t: "Published in Nature Scientific Reports, 2024" },
          ].map((b) => (
            <div key={b.t} className="flex items-center gap-3 rounded-xl border border-primary/20 bg-secondary/50 px-4 py-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-teal grid place-items-center">
                <b.i className="h-4 w-4 text-primary-foreground" />
              </div>
              <div className="font-semibold text-sm">{b.t}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:col-span-7">
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { v: "1M+", l: "Indian X-ray scans used in training" },
            { v: "500K+", l: "Expert-labelled dataset" },
            { v: "≈98%", l: "TB detection accuracy in clinical settings" },
            { v: "52.8%", l: "Treatment outcome improvement vs standard workflow" },
          ].map((s) => (
            <div key={s.l} className="page-card p-6">
              <div className="stat-number">{s.v}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="mt-5 page-card p-6 bg-gradient-dark text-primary-foreground border-0">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-lg bg-primary-glow/20 grid place-items-center flex-none">
              <Hospital className="h-5 w-5 text-primary-glow" />
            </div>
            <div>
              <div className="page-marker text-primary-glow">Lead clinical site</div>
              <div className="mt-1 font-display font-bold text-lg">SGPGIMS, Lucknow</div>
              <p className="mt-2 text-sm text-white/80">Sanjay Gandhi Postgraduate Institute of Medical Sciences — Department of Pulmonary Medicine. Multi-centre validation extended across tertiary centres and district hospitals in Uttar Pradesh and partner states.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- 11. PRODUCT FAMILY ---------- */
type ProductDetail = {
  code: string;
  t: string;
  d: string;
  icon: any;
  primary?: boolean;
  tagline: string;
  highlights: { icon: any; t: string; d: string }[];
  features: string[];
  specs: { l: string; v: string }[];
  useCases: string[];
  validation?: { l: string; v: string }[];
  pricing?: { price: string; term: string; includes: string; bullets: string[] };
  deployments?: string[];
};

const Family = () => {
  const products: ProductDetail[] = [
    {
      code: "SX",
      t: "DecXpert-SX",
      d: "Complete body X-ray AI suite — 262 pathologies, 11 modules, TB engine.",
      icon: ScanLine,
      primary: true,
      tagline: "Flagship complete-body X-ray AI decision support platform.",
      highlights: [
        { icon: Target, t: "262 pathologies", d: "Across 11 anatomical modules from a single dashboard." },
        { icon: ShieldCheck, t: "11-sign TB engine", d: "Specialist TB checklist with per-sign confidence scores." },
        { icon: Brain, t: "Grad-CAM heatmaps", d: "Lesion localisation rendered directly on the X-ray." },
        { icon: WifiOff, t: "Offline-first", d: "Runs on Intel i3 / 4GB RAM — no GPU, no cloud." },
      ],
      features: [
        "56 chest X-ray pathologies (airways, lungs, mediastinum, pleura, diaphragm)",
        "206 musculoskeletal conditions across spine, knee, shoulder, wrist, pelvis, hand, foot, skull, elbow, hip",
        "Auto body-part recognition — DICOM routed to correct AI model automatically",
        "Image-quality gatekeeper: rotation, blur, exposure, artifact and crop checks",
        "6-zone lung mapping (RUL · RML · RLL · LUL · LML · LLL)",
        "Rib-level fracture localisation (Rib 1–12 · L / R) for medico-legal grade reports",
        "Confidence score (0–100%) on every detected pathology",
        "Structured PDF reporting with Grad-CAM heatmaps",
        "Batch screening mode with positive/negative triage dashboards",
      ],
      specs: [
        { l: "Pathologies", v: "262" },
        { l: "Anatomical modules", v: "11" },
        { l: "TB signs", v: "11 (separate scores)" },
        { l: "Min CPU", v: "Intel i3" },
        { l: "Min RAM", v: "4 GB" },
        { l: "GPU", v: "Not required" },
        { l: "Connectivity", v: "Fully offline" },
        { l: "Compliance", v: "CDSCO · ISO 13485 · DPDP" },
      ],
      useCases: [
        "NTEP TB screening camps and active case-finding drives",
        "District & sub-district hospital chest X-ray reporting",
        "Medical college teaching & second-read assistance",
        "Air-gapped tertiary hospital deployments",
      ],
    },
    {
      code: "MX",
      t: "DecXpert-MX",
      d: "Manual drag-and-drop X-ray analysis tool for radiology desks.",
      icon: FileText,
      tagline: "Radiologist-controlled, on-demand X-ray AI second read.",
      highlights: [
        { icon: FileText, t: "Drag-and-drop", d: "Open any DICOM or JPEG/PNG instantly from the desktop." },
        { icon: Brain, t: "AI second read", d: "Full DecXpert pathology engine on a per-case basis." },
        { icon: FileCheck2, t: "PDF reports", d: "Structured, confidence-scored, ready for the patient file." },
        { icon: Lock, t: "Local processing", d: "Image never leaves the workstation — DPDP compliant." },
      ],
      features: [
        "Manual case-by-case analysis controlled by the radiologist",
        "Supports DICOM, JPEG and PNG inputs",
        "Full pathology coverage of the SX engine on demand",
        "Side-by-side image and heatmap viewer",
        "Editable findings with one-click PDF export",
        "Runs entirely on the local workstation",
      ],
      specs: [
        { l: "Mode", v: "Manual / on-demand" },
        { l: "Input formats", v: "DICOM · JPEG · PNG" },
        { l: "Min CPU", v: "Intel i3" },
        { l: "Min RAM", v: "4 GB" },
        { l: "GPU", v: "Not required" },
        { l: "Connectivity", v: "Fully offline" },
      ],
      useCases: [
        "Radiologist desktop second-read workflow",
        "Outpatient clinics and private practice",
        "Teleradiology hub adjudication",
      ],
    },
    {
      code: "AX",
      t: "DecXpert-AX",
      d: "Automated folder-scanning workflow system for high-volume centres.",
      icon: Workflow,
      tagline: "Hands-free, high-throughput AI for screening and PACS pipelines.",
      highlights: [
        { icon: Workflow, t: "Folder watcher", d: "Auto-processes any DICOM dropped in a watched folder." },
        { icon: BarChart3, t: "Triage dashboards", d: "Positive / negative queues with priority escalation." },
        { icon: Database, t: "PACS / RIS pull", d: "Vendor-agnostic integration with hospital systems." },
        { icon: Cpu, t: "CPU-only at scale", d: "Process thousands of scans per day on commodity hardware." },
      ],
      features: [
        "Automated folder monitoring with zero radiographer interaction",
        "Batch screening mode for camps and mass screening drives",
        "Positive / negative dashboards with triage queue prioritisation",
        "PACS, RIS and HL7 export-ready integration",
        "Auto body-part recognition and quality gating before inference",
        "Audit log with per-case confidence scores",
      ],
      specs: [
        { l: "Mode", v: "Automated batch" },
        { l: "Throughput", v: "Thousands / day" },
        { l: "Integration", v: "PACS · RIS · HL7" },
        { l: "GPU", v: "Not required" },
        { l: "OS", v: "Windows / Linux" },
        { l: "Connectivity", v: "Offline or on-prem" },
      ],
      useCases: [
        "TB screening camps and Active Case Finding (ACF)",
        "High-volume district hospital chest X-ray pipelines",
        "Insurance & employee health screening",
        "Public health surveillance programmes",
      ],
    },
    {
      code: "CT",
      t: "DecXpert-CT",
      d: "Advanced CT scan analysis platform for thoracic and abdominal imaging.",
      icon: Layers,
      tagline: "Volumetric AI for thoracic and abdominal CT decision support.",
      highlights: [
        { icon: Layers, t: "Volumetric analysis", d: "Slice-by-slice and 3D pathology detection." },
        { icon: Target, t: "Nodule stratification", d: "Size-based malignancy scoring on pulmonary nodules." },
        { icon: Brain, t: "Explainable overlays", d: "Lesion overlays on key slices for radiologist review." },
        { icon: FileCheck2, t: "Structured CT report", d: "Findings, measurements and confidence in one PDF." },
      ],
      features: [
        "Thoracic CT analysis: nodules, masses, consolidation, fibrosis, pleural disease",
        "Abdominal CT support for organ-level findings",
        "Pulmonary nodule risk stratification (<6mm, 6–8, 8–20, 20–30, >30mm)",
        "Multi-planar reconstruction (axial, coronal, sagittal) viewer",
        "Structured CT report with measurements and confidence scores",
        "DICOM-native, PACS-compatible workflow",
      ],
      specs: [
        { l: "Modality", v: "CT (thoracic + abdominal)" },
        { l: "Input", v: "DICOM series" },
        { l: "Reconstruction", v: "Axial · Coronal · Sagittal" },
        { l: "Integration", v: "PACS · RIS" },
        { l: "Connectivity", v: "On-prem deployment" },
      ],
      useCases: [
        "Lung cancer screening programmes",
        "Tertiary hospital CT reporting assistance",
        "Pre-surgical planning and follow-up imaging",
      ],
    },
    {
      code: "LGP",
      t: "My LGP Health",
      d: "AI-based chronic liver disease assessment mobile application.",
      icon: Activity,
      tagline: "Patient-facing AI screening for chronic liver disease risk.",
      highlights: [
        { icon: Activity, t: "Liver risk score", d: "AI-driven chronic liver disease risk assessment." },
        { icon: Users, t: "Patient-facing app", d: "Designed for patients and primary care touchpoints." },
        { icon: BarChart3, t: "Trend tracking", d: "Longitudinal score tracking and lifestyle insights." },
        { icon: Lock, t: "Privacy-first", d: "DPDP-aligned data handling on the user's device." },
      ],
      features: [
        "Symptom and risk-factor questionnaire driven by clinical guidelines",
        "AI-based chronic liver disease risk score with severity bands",
        "Personalised lifestyle and follow-up recommendations",
        "Longitudinal tracking of risk over time",
        "Shareable reports for treating physicians",
        "Mobile-first, low-bandwidth friendly",
      ],
      specs: [
        { l: "Platform", v: "Mobile application" },
        { l: "Audience", v: "Patients · Primary care" },
        { l: "Focus area", v: "Chronic liver disease" },
        { l: "Compliance", v: "DPDP-aligned" },
      ],
      useCases: [
        "Community-level liver health screening",
        "Primary care risk triage and referral",
        "Patient self-monitoring between consultations",
      ],
    },
  ];

  return (
    <section className="relative bg-gradient-surface">
      <div className="page-section">
        <PageMarker n="11" label="Product Family" />
        <div className="max-w-3xl">
          <span className="eyebrow">The DecXpert family</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold">Five purpose-built tools. One unified clinical AI platform.</h2>
          <p className="mt-3 text-sm text-muted-foreground">Click any product to view full specifications, features, and use cases.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p) => (
            <Dialog key={p.code}>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className={`page-card p-6 relative overflow-hidden text-left w-full hover:border-primary/50 hover:shadow-elevated transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${p.primary ? 'ring-2 ring-primary' : ''}`}
                >
                  {p.primary && (
                    <span className="absolute top-4 right-4 rounded-full bg-accent text-accent-foreground px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">Flagship</span>
                  )}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-teal grid place-items-center">
                      <p.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="page-marker">Product {p.code}</div>
                      <div className="font-display font-bold text-lg">{p.t}</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                    View details <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">
                <div className="bg-gradient-dark text-primary-foreground p-6 sm:p-8 rounded-t-lg">
                  <div className="flex items-start gap-4">
                    <div className="h-14 w-14 rounded-xl bg-primary-glow/20 border border-primary-glow/30 grid place-items-center flex-none">
                      <p.icon className="h-7 w-7 text-primary-glow" />
                    </div>
                    <div className="min-w-0">
                      <div className="page-marker text-primary-glow">Product {p.code}</div>
                      <DialogTitle className="font-display text-2xl sm:text-3xl font-bold mt-1">{p.t}</DialogTitle>
                      <DialogDescription className="text-white/80 mt-2">{p.tagline}</DialogDescription>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-8">
                  <div>
                    <div className="eyebrow mb-3">Highlights</div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {p.highlights.map((h) => (
                        <div key={h.t} className="flex gap-3 rounded-xl border border-border bg-secondary/40 p-3">
                          <div className="h-9 w-9 rounded-lg bg-gradient-teal grid place-items-center flex-none">
                            <h.icon className="h-4 w-4 text-primary-foreground" />
                          </div>
                          <div>
                            <div className="font-semibold text-sm">{h.t}</div>
                            <div className="text-xs text-muted-foreground leading-relaxed">{h.d}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="eyebrow mb-3">Features</div>
                    <ul className="space-y-2">
                      {p.features.map((f) => (
                        <li key={f} className="flex gap-3 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-none" />
                          <span className="text-foreground/90">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="eyebrow mb-3">Specifications</div>
                      <div className="rounded-xl border border-border divide-y divide-border overflow-hidden">
                        {p.specs.map((s) => (
                          <div key={s.l} className="flex items-center justify-between px-4 py-2.5 text-sm bg-secondary/30">
                            <span className="text-muted-foreground">{s.l}</span>
                            <span className="font-mono font-semibold text-foreground text-right">{s.v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="eyebrow mb-3">Use cases</div>
                      <ul className="space-y-2">
                        {p.useCases.map((u) => (
                          <li key={u} className="flex gap-3 text-sm">
                            <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-none" />
                            <span>{u}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                    <Badge icon={Award}>CDSCO Licensed</Badge>
                    <Badge icon={ShieldCheck}>ISO 13485</Badge>
                    <Badge icon={Lock}>DPDP Act 2023</Badge>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-deep transition"
                  >
                    Request demo for {p.t} <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- 12. IMPACT, TEAM & CONTACT ---------- */
const ImpactTeamContact = () => {
  const team = [
    { n: "Saumya Shukla", r: "Chief Executive Officer" },
    { n: "Dr. Ankit Shukla", r: "Technical Director" },
    { n: "Nikhil Mishra", r: "Chief Technology Officer" },
  ];
  const advisors = [
    "Dr. Randeep Guleria",
    "Dr. Alok Nath",
    "Dr. Zia Hashim",
    "Dr. Ajmal Khan",
    "Dr. Prasanth Areekkara Poduvattil",
  ];
  return (
    <section id="contact" className="page-section">
      <PageMarker n="12" label="Impact · Team · Contact" />

      <div className="grid sm:grid-cols-3 gap-5 mb-12">
        {[
          { v: "205K+", l: "Scans processed", icon: ScanLine },
          { v: "4,655+", l: "Positive clinician ratings", icon: ShieldCheck },
          { v: "Multi-centre", l: "Deployments across India", icon: MapPin },
        ].map((s) => (
          <div key={s.l} className="page-card p-6">
            <s.icon className="h-5 w-5 text-primary mb-3" />
            <div className="stat-number">{s.v}</div>
            <div className="mt-2 text-sm text-muted-foreground font-semibold uppercase tracking-wider text-xs">{s.l}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <span className="eyebrow">Leadership & advisory</span>
          <h3 className="mt-4 font-display text-2xl font-bold">Built by clinicians, for clinicians.</h3>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {team.map((t) => (
              <div key={t.n} className="page-card p-5">
                <div className="h-10 w-10 rounded-full bg-gradient-teal grid place-items-center text-primary-foreground font-bold mb-3">
                  {t.n.split(" ").map((p) => p[0]).slice(0, 2).join("")}
                </div>
                <div className="font-display font-bold text-sm">{t.n}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{t.r}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 page-card p-6">
            <div className="page-marker mb-3">Clinical Advisory Board</div>
            <div className="flex flex-wrap gap-2">
              {advisors.map((a) => (
                <span key={a} className="rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground">{a}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="page-card p-7 bg-gradient-dark text-primary-foreground border-0 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary-glow/20 blur-3xl" />
            <div className="relative">
              <span className="page-marker text-primary-glow">Tender & demo enquiries</span>
              <h3 className="mt-3 font-display text-2xl font-bold">Get in touch</h3>

              <div className="mt-6 space-y-4 text-sm">
                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 text-primary-glow flex-none mt-0.5" />
                  <div>
                    <div className="font-semibold">Dectrocel<span className="text-primary-glow">®</span></div>
                    <div className="text-white/75">MedTech CoE, SGPGIMS Campus<br />Lucknow, Uttar Pradesh, India</div>
                  </div>
                </div>
                <a href="mailto:support@dectrocel.com" className="flex gap-3 hover:text-primary-glow transition">
                  <Mail className="h-5 w-5 text-primary-glow flex-none mt-0.5" />
                  <div><div className="text-[11px] uppercase tracking-wider text-white/60">Email</div>support@dectrocel.com</div>
                </a>
                <a href="tel:+919807194222" className="flex gap-3 hover:text-primary-glow transition">
                  <Phone className="h-5 w-5 text-primary-glow flex-none mt-0.5" />
                  <div><div className="text-[11px] uppercase tracking-wider text-white/60">Phone</div>+91 98071 94222</div>
                </a>
                <a href="https://the-decxpert.com" target="_blank" rel="noreferrer" className="flex gap-3 hover:text-primary-glow transition">
                  <Globe className="h-5 w-5 text-primary-glow flex-none mt-0.5" />
                  <div><div className="text-[11px] uppercase tracking-wider text-white/60">Website</div>the-decxpert.com</div>
                </a>
              </div>

              <a href="mailto:support@dectrocel.com" className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary-foreground text-primary-deep px-5 py-3 text-sm font-bold hover:bg-primary-glow transition">
                Request Tender Pack <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- Footer ---------- */
const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="max-w-6xl mx-auto px-6 sm:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
      <div className="flex items-center gap-2">
        <img src={dectrocelLogo} alt="Dectrocel logo" className="h-7 w-auto object-contain" />
        <span>© {new Date().getFullYear()} Dectrocel® · DecXpert AI Radiology Platform</span>
      </div>
      <div className="flex items-center gap-4 font-mono uppercase tracking-widest text-[10px]">
        <span>CDSCO</span>·<span>ISO 13485</span>·<span>DPDP 2023</span>·<span>Nature Sci. Rep. 2024</span>
      </div>
    </div>
  </footer>
);

const Index = () => (
  <main className="min-h-screen bg-background">
    <Nav />
    <Cover />
    <Family />
    <Problem />
    <Overview />
    <Capabilities />
    <TBEngine />
    <BodySuite />
    <WorkflowSection />
    <Reporting />
    <Deployment />
    <Validation />
    <ImpactTeamContact />
    <Footer />
  </main>
);

export default Index;
