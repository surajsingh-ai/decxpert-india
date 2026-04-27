import { useState } from "react";
import {
  Shield, Network, Zap, WifiOff, FileCheck2, BadgeCheck, Activity, Cpu, Database,
  Lock, KeyRound, Cloud, Server, Building2, Phone, Mail, MapPin, Printer,
  CheckCircle2, ChevronRight, Hospital, Users, FlaskConical, FileText,
} from "lucide-react";
import { Screen, SectionHeader } from "@/components/app/Screen";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ---------- Reusable building blocks ---------- */

const Stat = ({ value, label, sub }: { value: string; label: string; sub?: string }) => (
  <div className="page-card p-4">
    <div className="stat-number !text-3xl sm:!text-4xl">{value}</div>
    <div className="mt-1 font-display font-bold text-sm">{label}</div>
    {sub && <div className="text-xs text-muted-foreground mt-0.5">{sub}</div>}
  </div>
);

const Pill = ({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-1 text-xs font-medium">
    <Icon className="h-3.5 w-3.5 text-primary" />
    {children}
  </span>
);

const FeatureRow = ({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) => (
  <div className="flex gap-3 p-3 rounded-xl border border-border bg-card">
    <div className="h-9 w-9 shrink-0 rounded-lg bg-secondary text-primary grid place-items-center">
      <Icon className="h-4 w-4" />
    </div>
    <div className="min-w-0">
      <div className="font-display font-semibold text-sm">{title}</div>
      <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{desc}</div>
    </div>
    <CheckCircle2 className="h-4 w-4 text-success shrink-0 ml-auto mt-1" />
  </div>
);

const Page = ({
  num, title, subtitle, children,
}: { num: string; title: string; subtitle?: string; children: React.ReactNode }) => (
  <section className="page-card p-5 sm:p-7 space-y-5 break-inside-avoid">
    <div className="flex items-start justify-between gap-3">
      <div>
        <div className="page-marker">DecXpert AI Radiology Suite · pg. {num}</div>
        <h2 className="mt-1 font-display text-2xl sm:text-3xl font-extrabold tracking-tight">{title}</h2>
        {subtitle && <p className="mt-1.5 text-sm text-muted-foreground max-w-2xl">{subtitle}</p>}
      </div>
      <div className="hidden sm:grid h-10 w-10 rounded-full bg-gradient-teal text-primary-foreground place-items-center font-display font-bold text-sm shrink-0">
        {num}
      </div>
    </div>
    {children}
  </section>
);

/* ---------- Sections ---------- */

const Cover = () => (
  <section className="page-card relative overflow-hidden p-6 sm:p-10 break-inside-avoid">
    <div className="absolute inset-0 grid-pattern opacity-50" />
    <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-teal opacity-20 blur-3xl" />
    <div className="relative">
      <div className="page-marker">Confidential · 2026</div>
      <h1 className="mt-2 font-display text-4xl sm:text-6xl font-extrabold tracking-tight">DecXpert</h1>
      <p className="mt-1 text-base sm:text-lg text-muted-foreground italic">AI Radiology Suite</p>
      <p className="mt-4 max-w-xl text-sm sm:text-base">
        Product Feature & Pricing Proposal — AI-Assisted Imaging Interpretation. High-throughput screening,
        seamless PACS integration, and offline field capability.
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        <Pill icon={Shield}>Secure</Pill>
        <Pill icon={Network}>PACS-ready</Pill>
        <Pill icon={Zap}>High-Throughput</Pill>
        <Pill icon={WifiOff}>Offline-Capable</Pill>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-3 max-w-xl">
        {[
          { t: "X-Ray Suite", s: "AI CAD" },
          { t: "CT Thorax", s: "3D CNN" },
          { t: "Analytics", s: "Reporting" },
        ].map((c) => (
          <div key={c.t} className="rounded-xl border border-border bg-card/70 p-3">
            <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{c.s}</div>
            <div className="font-display font-bold text-sm mt-0.5">{c.t}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TOC = ({ onJump }: { onJump: (id: string) => void }) => {
  const items = [
    { n: "01", t: "Executive Summary", s: "Platform overview & compliance readiness", id: "exec" },
    { n: "02", t: "DecXpert SX", s: "AI CAD for chest & skeletal X-rays", id: "sx" },
    { n: "03", t: "DecXpert CT Platform", s: "3D CNN with normalization pipeline", id: "ct" },
    { n: "04", t: "Comprehensive Feature Set", s: "AI, data, integration, security, support", id: "features" },
    { n: "05", t: "Clinical Validation", s: "Datasets, ~98% accuracy, peer-reviewed", id: "validation" },
    { n: "06", t: "Regulatory & Privacy", s: "ISO, CDSCO, MDR, HIPAA/GDPR", id: "regulatory" },
    { n: "07", t: "Clinical Impact & Deployments", s: "Outcomes & live sites", id: "impact" },
    { n: "08", t: "About Dectrocel", s: "Company, advisory, research", id: "about" },
    { n: "09", t: "Pricing & Contact", s: "Licenses, terms, contact", id: "pricing" },
  ];
  return (
    <Page num="02" title="Table of Contents" subtitle="A brochure-style overview of the proposal — review capabilities, validation, and commercial terms.">
      <div className="grid sm:grid-cols-2 gap-2">
        {items.map((i) => (
          <button
            key={i.n}
            onClick={() => onJump(i.id)}
            className="group flex items-center gap-3 p-3 rounded-xl border border-border bg-card hover:border-primary hover:bg-secondary/50 transition-colors text-left"
          >
            <span className="font-mono text-xs text-primary shrink-0">{i.n}</span>
            <span className="min-w-0 flex-1">
              <span className="block font-display font-semibold text-sm">{i.t}</span>
              <span className="block text-xs text-muted-foreground truncate">{i.s}</span>
            </span>
            <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary shrink-0" />
          </button>
        ))}
      </div>
    </Page>
  );
};

const Executive = () => (
  <Page id="exec" num="03" title="Executive Summary"
    subtitle="Modular, scalable AI radiology platform for chest X-ray interpretation and CT thorax analysis—optimized for high-throughput screening, field deployments, and rapid triage.">
    <div className="grid sm:grid-cols-2 gap-3">
      {[
        { i: Cpu, t: "Platform Scope", b: "X-Ray + CT", d: "Unified suite for DecXpert Auto X-Ray & CT Thorax with structured reporting." },
        { i: Activity, t: "Clinical Performance", b: "~98% Accuracy", d: "Optimized to minimize false negatives for public health safety." },
        { i: Network, t: "Operational Fit", b: "PACS / Mini-PACS Ready", d: "Seamless DR machine workflow; offline-capable; optional cloud sync." },
        { i: Shield, t: "Compliance & Security", b: "ISO 13485/14971 · CDSCO 2B · MDR", d: "RBAC, MFA, and end-to-end encrypted communication." },
      ].map((c) => (
        <div key={c.t} className="page-card p-4">
          <div className="flex items-center gap-2 text-primary"><c.i className="h-4 w-4" /><span className="text-[11px] font-mono uppercase tracking-widest">{c.t}</span></div>
          <div className="mt-1.5 font-display font-bold">{c.b}</div>
          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{c.d}</p>
        </div>
      ))}
    </div>

    <div className="rounded-2xl border border-border bg-gradient-to-br from-secondary/60 to-card p-5">
      <div className="eyebrow">Preferential Pricing · 3-Year Licenses (Excl. Tax)</div>
      <div className="grid sm:grid-cols-2 gap-3 mt-4">
        <div className="rounded-xl bg-background border border-border p-4">
          <div className="font-display font-bold">DecXpert X-Ray Suite</div>
          <div className="stat-number !text-3xl mt-1">₹1,25,000</div>
          <div className="text-xs text-muted-foreground mt-1">3-Year License · Includes 20,000 Scans</div>
        </div>
        <div className="rounded-xl bg-background border border-border p-4">
          <div className="font-display font-bold">DecXpert CT Platform</div>
          <div className="stat-number !text-3xl mt-1">₹3,00,000</div>
          <div className="text-xs text-muted-foreground mt-1">3-Year License · Includes 6,000 Scans (Introductory)</div>
        </div>
      </div>
      <p className="text-xs text-muted-foreground mt-3">
        <strong className="text-foreground">Note:</strong> Pricing includes software deployment, PACS integration, and standard support. Scan limits apply as specified.
      </p>
    </div>
  </Page>
);

const SX = () => (
  <Page id="sx" num="04" title="DecXpert SX"
    subtitle="AI-powered computer-aided detection (CAD) for automated interpretation of chest and skeletal X-rays — optimized for high-throughput screening and offline, on-premise deployments.">
    <div className="grid sm:grid-cols-2 gap-3">
      <FeatureRow icon={Activity} title="Chest Interpretation" desc="Detects 40+ clinically significant chest abnormalities with high sensitivity. Heatmaps indicate AI focus area; acts as triage and structured second reader." />
      <FeatureRow icon={Zap} title="High-Speed Analysis" desc="Instant respiratory abnormality detection and structured reports generated in seconds." />
      <FeatureRow icon={Cpu} title="Skeletal Coverage" desc="Multiple skeletal regions for orthopedic screening; integrates with existing radiology workflows." />
      <FeatureRow icon={WifiOff} title="Offline-Ready" desc="Field-capable for mobile DR units; no internet required for core inference." />
      <FeatureRow icon={Network} title="PACS / Mini-PACS Ready" desc="Compatible with standard DICOM viewers and archives; cloud sync optional." />
      <FeatureRow icon={FileCheck2} title="Editable Reports + Voice-to-Text" desc="Radiologists can vet findings and dictate notes for rapid turnaround." />
    </div>

    <div className="rounded-2xl border border-border bg-card p-4">
      <div className="eyebrow">Screening Workflow</div>
      <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
        {["Ingest Image", "AI Analysis", "Structured Report", "Expert Review"].map((s, i) => (
          <div key={s} className="rounded-xl border border-border bg-background p-3">
            <div className="font-mono text-[10px] text-primary">STEP {i + 1}</div>
            <div className="font-display font-semibold text-sm mt-0.5">{s}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 text-xs text-muted-foreground">
        Baseline spec: minimum <strong className="text-foreground">4 GB RAM</strong> · Simple 3-step setup · Handles mixed batches with intelligent file segregation.
      </div>
    </div>
  </Page>
);

const CT = () => (
  <Page id="ct" num="05" title="DecXpert CT Platform"
    subtitle="Deep learning system for volumetric chest CT analysis using 3D CNNs — optimized for large-scale screening and clinical triage.">
    <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-card p-5">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-gradient-teal text-primary-foreground grid place-items-center"><Cpu className="h-5 w-5" /></div>
        <div>
          <div className="font-display font-bold">3D Convolutional Neural Networks</div>
          <div className="text-xs text-muted-foreground">Volumetric analysis for comprehensive respiratory abnormality detection.</div>
        </div>
      </div>
    </div>

    <div>
      <div className="eyebrow">Normalization Pipeline</div>
      <div className="mt-3 grid sm:grid-cols-2 gap-3">
        {[
          { t: "Multi-Window RGB", d: "Composite views across CT windows (Lung, Mediastinal, Bone) for consistent feature capture." },
          { t: "Z-Score Standardization", d: "Normalizes intensity distributions to handle Hounsfield Unit scaling variations across scanners." },
          { t: "CLAHE Enhancement", d: "Contrast Limited Adaptive Histogram Equalization improves local contrast for clearer lung patterns." },
          { t: "Vendor Metadata Tracking", d: "Accounts for vendor-specific reconstruction algorithms and slice thickness variability." },
        ].map((s, i) => (
          <div key={s.t} className="rounded-xl border border-border bg-card p-4">
            <div className="font-mono text-[10px] text-primary">0{i + 1}</div>
            <div className="font-display font-semibold text-sm mt-0.5">{s.t}</div>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{s.d}</p>
          </div>
        ))}
      </div>
    </div>

    <div>
      <div className="eyebrow">Why Normalization Matters for Screening</div>
      <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
        {[
          ["Reduced Variability", "Intensity, contrast, reconstruction"],
          ["Cross-Vendor Ready", "Multi-vendor environments"],
          ["Consistent Inference", "Stable across devices"],
          ["Triage Reliability", "Dependable high-throughput queues"],
        ].map(([t, d]) => (
          <div key={t} className="rounded-xl border border-border bg-card p-3">
            <div className="font-display font-semibold text-xs">{t}</div>
            <div className="text-[11px] text-muted-foreground mt-0.5">{d}</div>
          </div>
        ))}
      </div>
    </div>
  </Page>
);

const Features = () => {
  const groups = [
    {
      title: "Core AI Analysis",
      items: [
        { i: Zap, t: "High-Speed Analysis", d: "Instant respiratory abnormality detection and structured reports in seconds." },
        { i: Activity, t: "Heatmap Precision", d: "Visually indicates the AI's area of focus on the X-ray for diagnostic clarity." },
      ],
    },
    {
      title: "Data Handling",
      items: [
        { i: Database, t: "Multi-Format Support", d: "Seamlessly handles DICOM (.dcm), JPG, JPEG, and PNG in mixed batches." },
        { i: FileCheck2, t: "Intelligent Segregation", d: "Routes successful and failed files to separate folders with logs to prevent data loss." },
      ],
    },
    {
      title: "Reporting & Vetting",
      items: [
        { i: FileText, t: "Editable Reports", d: "Allows radiologists and experts to insert additional comments alongside AI findings." },
        { i: Activity, t: "Audio Transcription", d: "Voice-to-text input to add radiology comments directly into reports." },
      ],
    },
    {
      title: "Deployment & Integration",
      items: [
        { i: Network, t: "Seamless Integration", d: "Works with PACS/Mini-PACS; compatible with existing workflows; cloud sync ready." },
        { i: Cpu, t: "Simple 3-Step Setup", d: "Activate license → Configure folder → Start processing. Baseline 4 GB RAM." },
      ],
    },
    {
      title: "Enterprise & Security",
      items: [
        { i: Lock, t: "Secure Storage", d: "Encrypted data handling with role-based access controls." },
        { i: Activity, t: "Data Analytics", d: "Real-time analytics dashboard for trend identification and reporting." },
        { i: Cloud, t: "Flexible Hosting", d: "On-premise local processing or optional cloud-based inference." },
      ],
    },
    {
      title: "Customer Support",
      items: [
        { i: Users, t: "Integration Assist", d: "Automated workflow management support during initial integration." },
        { i: Server, t: "Tech Maintenance", d: "Ongoing updates and troubleshooting with 4-hour response SLA." },
      ],
    },
  ];
  return (
    <Page id="features" num="06-07" title="Comprehensive Feature Set"
      subtitle="Detailed feature coverage across core AI analysis, data handling, reporting, deployment, security, and support.">
      <div className="space-y-5">
        {groups.map((g) => (
          <div key={g.title}>
            <div className="eyebrow">{g.title}</div>
            <div className="mt-3 grid sm:grid-cols-2 gap-3">
              {g.items.map((it) => <FeatureRow key={it.t} icon={it.i} title={it.t} desc={it.d} />)}
            </div>
          </div>
        ))}
      </div>
    </Page>
  );
};

const Validation = () => (
  <Page id="validation" num="08" title="Clinical Validation & Performance"
    subtitle="Evidence-backed performance supported by large-scale datasets, multi-center annotations, and peer-reviewed validation.">
    <div className="grid sm:grid-cols-2 gap-3">
      <div className="page-card p-5 bg-gradient-to-br from-primary/5 to-card">
        <div className="eyebrow">Headline</div>
        <div className="stat-number mt-2">~98%</div>
        <div className="font-display font-bold mt-1">Overall Accuracy</div>
        <p className="text-xs text-muted-foreground mt-1">In clinical settings (per proposal).</p>
      </div>
      <div className="page-card p-5">
        <div className="eyebrow">Peer-Reviewed Evidence</div>
        <div className="font-display font-bold mt-2">Nature Scientific Reports (2024)</div>
        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
          Multicentre study demonstrating robustness across diverse populations and scanner vendors.
        </p>
      </div>
    </div>

    <div>
      <div className="eyebrow">Dataset Strength</div>
      <div className="mt-3 grid grid-cols-3 gap-3">
        <Stat value="10L+" label="Training Cohort" sub="Multi-center sourcing" />
        <Stat value="~3L" label="Testing Cohort" sub="Expert annotated" />
        <Stat value="5L" label="Validation" sub="Independent studies" />
      </div>
    </div>

    <div className="page-card p-5">
      <div className="eyebrow">Screening Safety</div>
      <p className="mt-2 text-sm">
        Optimized to minimize false negatives (FN). High Negative Predictive Value (NPV) ensures safe triage in public health screening programs.
      </p>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {[["Sensitivity", "High"], ["Specificity", "High"], ["Generalizability", "Multi-Vendor"]].map(([k, v]) => (
          <div key={k} className="rounded-xl border border-border p-3">
            <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{k}</div>
            <div className="font-display font-bold text-sm mt-0.5">{v}</div>
          </div>
        ))}
      </div>
    </div>
  </Page>
);

const Regulatory = () => (
  <Page id="regulatory" num="09" title="Regulatory Clearances & Data Privacy"
    subtitle="Quality management systems, regulatory alignment, and enterprise security controls for safe deployment in clinical environments.">
    <div className="grid sm:grid-cols-2 gap-3">
      {[
        { i: BadgeCheck, t: "ISO 13485 & 14971", d: "Aligned with global standards for Medical Device Quality Management & Risk Management." },
        { i: Shield, t: "CDSCO Class 2B", d: "Marketing license secured (MD 5); fully compliant with Indian Medical Device Rules." },
        { i: BadgeCheck, t: "Global Alignment", d: "Designed per EU MDR 2017/745 principles; FDA pathway in progress." },
        { i: FlaskConical, t: "Peer Validation", d: "Clinical performance validated in multi-center studies (Nature Scientific Reports)." },
      ].map((c) => <FeatureRow key={c.t} icon={c.i} title={c.t} desc={c.d} />)}
    </div>

    <div>
      <div className="eyebrow">Data Privacy & Security</div>
      <div className="mt-3 flex flex-wrap gap-2">
        <Pill icon={Shield}>HIPAA Aligned</Pill>
        <Pill icon={Shield}>GDPR Principles</Pill>
        <Pill icon={Shield}>DPDP Ready</Pill>
      </div>
      <div className="mt-3 grid sm:grid-cols-3 gap-3">
        <FeatureRow icon={Lock} title="Encryption" desc="End-to-end encrypted communication (TLS/SSL) for data in transit and at rest." />
        <FeatureRow icon={KeyRound} title="RBAC" desc="Role-Based Access Control to ensure data is only visible to authorized personnel." />
        <FeatureRow icon={Shield} title="MFA Support" desc="Multi-Factor Authentication adds an extra layer of login security." />
      </div>
    </div>

    <div>
      <div className="eyebrow">Deployment Options</div>
      <div className="mt-3 grid sm:grid-cols-2 gap-3">
        <div className="page-card p-4">
          <div className="flex items-center gap-2"><Server className="h-4 w-4 text-primary" /><span className="font-display font-bold">On-Premise</span></div>
          <ul className="mt-2 text-xs text-muted-foreground space-y-1">
            <li>• Local hospital server installation</li>
            <li>• Complete data residency control</li>
            <li>• Offline capabilities for field use</li>
          </ul>
        </div>
        <div className="page-card p-4">
          <div className="flex items-center gap-2"><Cloud className="h-4 w-4 text-primary" /><span className="font-display font-bold">Secure Cloud</span></div>
          <ul className="mt-2 text-xs text-muted-foreground space-y-1">
            <li>• SaaS infrastructure model</li>
            <li>• Automatic updates & scaling</li>
            <li>• Centralized remote access</li>
          </ul>
        </div>
      </div>
    </div>
  </Page>
);

const Impact = () => (
  <Page id="impact" num="10" title="Clinical Impact & Deployments"
    subtitle="Real-world outcomes and active deployments demonstrating measurable workflow improvements and screening scale-up.">
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      <Stat value="50K+" label="Patients Prioritized" sub="Immediate care escalation" />
      <Stat value="10×" label="Faster Turnaround" sub="Diagnostic TAT reduction" />
      <Stat value="+40.1%" label="Case Yield" sub="vs. baseline" />
      <Stat value="+52.8%" label="Treatment Efficacy" sub="Monitoring (CT)" />
    </div>

    <div>
      <div className="eyebrow">Live Deployments & Pilots</div>
      <div className="mt-3 grid sm:grid-cols-3 gap-3">
        {[
          { t: "Adani Foundation", d: "Bilaspur, Chhattisgarh" },
          { t: "Pahal Jan Arogya Samiti", d: "Madhya Pradesh — Community screening" },
          { t: "Public Health Centers", d: "Uttar Pradesh, Telangana, Mumbai" },
        ].map((d) => (
          <div key={d.t} className="page-card p-4">
            <div className="flex items-center gap-2 text-primary"><Hospital className="h-4 w-4" /></div>
            <div className="font-display font-bold mt-1">{d.t}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{d.d}</div>
          </div>
        ))}
      </div>
    </div>

    <div className="grid sm:grid-cols-2 gap-3">
      <div className="page-card p-4">
        <div className="eyebrow">Reach</div>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div><div className="text-xs text-muted-foreground">Patients Screened</div><div className="font-display font-bold text-xl">10,000+</div></div>
          <div><div className="text-xs text-muted-foreground">Hospital Pilots</div><div className="font-display font-bold text-xl">09</div></div>
        </div>
      </div>
      <div className="page-card p-4">
        <div className="eyebrow">Case Detection Uplift</div>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div><div className="text-xs text-muted-foreground">Manual</div><div className="font-display font-bold text-xl">~30</div></div>
          <div><div className="text-xs text-muted-foreground">DecXpert</div><div className="font-display font-bold text-xl text-primary">~70</div></div>
        </div>
      </div>
    </div>
  </Page>
);

const About = () => (
  <Page id="about" num="11" title="About Dectrocel"
    subtitle="Pioneering Radiology AI — Software-as-a-Medical-Device (SaMD) solutions developed in close collaboration with clinicians to solve real-world screening challenges.">
    <div className="grid sm:grid-cols-2 gap-3">
      <FeatureRow icon={BadgeCheck} title="SaMD Focused" desc="Certified medical device software designed for clinical diagnostics." />
      <FeatureRow icon={Network} title="Workflow First" desc="Integrated solutions that fit existing hospital and field operations." />
    </div>

    <div>
      <div className="eyebrow">Advisory & Research Team</div>
      <div className="mt-3 grid sm:grid-cols-3 gap-3">
        {[
          { n: "Dr. Saumya Shukla", c: "PhD Public Health (SGPGIMS, Lucknow) · MBA NUS Business School · Data Science, Harvard Medical School" },
          { n: "Dr. Ankit Shukla", c: "PhD AI in Medicine (UQ Brisbane) · MS Duke-NUS Singapore · DTU Copenhagen · Basel University" },
          { n: "Mr. Nikhil Mishra", c: "Researcher in AI & Machine Learning applied to Medicine — IIT Kanpur" },
        ].map((p) => (
          <div key={p.n} className="page-card p-4">
            <div className="h-9 w-9 rounded-full bg-secondary text-primary grid place-items-center"><Users className="h-4 w-4" /></div>
            <div className="font-display font-bold text-sm mt-2">{p.n}</div>
            <div className="text-[11px] text-muted-foreground mt-1 leading-relaxed">{p.c}</div>
          </div>
        ))}
      </div>
    </div>
  </Page>
);

const Pricing = () => (
  <Page id="pricing" num="12" title="Pricing & Contact"
    subtitle="Comprehensive license terms, deployment support, and defined scan volumes.">
    <div className="grid sm:grid-cols-2 gap-3">
      <div className="page-card p-5 relative overflow-hidden">
        <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-teal opacity-10 rounded-full blur-2xl" />
        <div className="eyebrow">X-Ray Suite</div>
        <div className="font-display font-bold text-lg mt-2">DecXpert X-Ray Suite</div>
        <div className="stat-number mt-1">₹1,25,000</div>
        <div className="text-xs text-muted-foreground">3-Year License (Ex-Tax) · 20,000 Scans Included</div>
        <ul className="mt-3 text-xs space-y-1.5">
          <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-success mt-0.5" /> Chest & Skeletal AI CAD</li>
          <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-success mt-0.5" /> Offline-ready deployment</li>
          <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-success mt-0.5" /> PACS / Mini-PACS integration</li>
        </ul>
      </div>
      <div className="page-card p-5 relative overflow-hidden border-primary/30">
        <div className="absolute top-0 right-0 h-24 w-24 bg-accent opacity-10 rounded-full blur-2xl" />
        <div className="eyebrow">CT Platform</div>
        <div className="font-display font-bold text-lg mt-2">DecXpert CT Platform</div>
        <div className="stat-number mt-1">₹3,00,000</div>
        <div className="text-xs text-muted-foreground">3-Year License (Ex-Tax) · 6,000 Scans (Introductory)</div>
        <ul className="mt-3 text-xs space-y-1.5">
          <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-success mt-0.5" /> 3D Volumetric Analysis</li>
          <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-success mt-0.5" /> Normalization Pipeline</li>
          <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-success mt-0.5" /> Advanced Triage Reporting</li>
        </ul>
      </div>
    </div>

    <div className="page-card p-4">
      <div className="eyebrow">What's Included in the License</div>
      <div className="mt-3 grid sm:grid-cols-2 gap-2 text-xs">
        {[
          "Software installation & setup",
          "Tech support (Remote / On-site)",
          "Workflow configuration & mapping",
          "Technical walkthrough & training",
        ].map((x) => (
          <div key={x} className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-success mt-0.5" /> {x}</div>
        ))}
      </div>
    </div>

    <div className="rounded-2xl bg-gradient-hero text-primary-foreground p-5">
      <div className="text-[10px] font-mono uppercase tracking-widest opacity-80">Next Steps</div>
      <div className="font-display font-bold text-lg mt-1">Ready to Transform Your Radiology Workflow?</div>
      <p className="text-sm opacity-90 mt-1 max-w-xl">
        Schedule a technical walkthrough to finalize the deployment plan. Empower your screening programs with clinical-grade AI that is secure, compliant, and built for scale.
      </p>
      <div className="mt-4 grid sm:grid-cols-3 gap-3 text-xs">
        <div className="flex gap-2 items-start"><MapPin className="h-4 w-4 shrink-0 mt-0.5" /><span>MedTech CoE, Third Floor, Opp. Admin Block, SGPGIMS, Raebareli Road, Lucknow, UP – 226014</span></div>
        <div className="flex gap-2 items-center"><Mail className="h-4 w-4 shrink-0" /><a href="mailto:support@dectrocel.com" className="underline-offset-2 hover:underline">support@dectrocel.com</a></div>
        <div className="flex gap-2 items-center"><Phone className="h-4 w-4 shrink-0" /><a href="tel:+919807194222" className="underline-offset-2 hover:underline">+91 9807194222</a></div>
      </div>
    </div>
  </Page>
);

/* ---------- Page wrapper ---------- */

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "products", label: "Products" },
  { id: "evidence", label: "Evidence" },
  { id: "commercial", label: "Commercial" },
  { id: "all", label: "All Pages" },
] as const;

export default function BrochureScreen() {
  const [tab, setTab] = useState<(typeof TABS)[number]["id"]>("overview");

  const jumpTo = (id: string) => {
    setTab("all");
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <Screen>
      <div className="flex items-start justify-between gap-3 print:hidden">
        <SectionHeader
          eyebrow="Confidential · 2026"
          title="DecXpert AI Radiology Suite — Brochure"
          desc="Read the complete proposal in-app. Tap a tab to focus on a section, or print to PDF."
        />
        <Button variant="outline" size="sm" onClick={() => window.print()} className="shrink-0">
          <Printer className="h-4 w-4" /> Print / PDF
        </Button>
      </div>

      <div id="brochure-print" className="space-y-5">
        <Cover />

        <Tabs value={tab} onValueChange={(v) => setTab(v as typeof tab)} className="print:hidden">
          <TabsList className="w-full overflow-x-auto justify-start sm:justify-center">
            {TABS.map((t) => (
              <TabsTrigger key={t.id} value={t.id} className={cn("text-xs sm:text-sm")}>{t.label}</TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="overview" className="space-y-5">
            <TOC onJump={jumpTo} />
            <Executive />
          </TabsContent>

          <TabsContent value="products" className="space-y-5">
            <SX />
            <CT />
            <Features />
          </TabsContent>

          <TabsContent value="evidence" className="space-y-5">
            <Validation />
            <Regulatory />
            <Impact />
            <About />
          </TabsContent>

          <TabsContent value="commercial" className="space-y-5">
            <Pricing />
          </TabsContent>

          <TabsContent value="all" className="space-y-5">
            <TOC onJump={jumpTo} />
            <Executive />
            <SX />
            <CT />
            <Features />
            <Validation />
            <Regulatory />
            <Impact />
            <About />
            <Pricing />
          </TabsContent>
        </Tabs>

        {/* Print-only full content (visible when printing) */}
        <div className="hidden print:block space-y-5">
          <TOC onJump={() => {}} />
          <Executive />
          <SX />
          <CT />
          <Features />
          <Validation />
          <Regulatory />
          <Impact />
          <About />
          <Pricing />
        </div>
      </div>
    </Screen>
  );
}
