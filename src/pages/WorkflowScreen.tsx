import { Screen, SectionHeader } from "@/components/app/Screen";
import { Database, Cpu, FileCheck2, ArrowRight, CheckCircle2, ScanLine, ShieldCheck } from "lucide-react";

const stages = [
  {
    title: "Input",
    icon: Database,
    items: [
      "Manual drag-and-drop DICOM",
      "Automated folder monitoring",
      "Batch screening camp imports",
      "PACS / RIS pull",
    ],
  },
  {
    title: "Processing",
    icon: Cpu,
    items: [
      "Auto body-part recognition",
      "Image-quality grading",
      "AI inference (CPU only)",
      "Confidence scoring",
    ],
  },
  {
    title: "Output",
    icon: FileCheck2,
    items: [
      "Structured PDF report",
      "Grad-CAM heatmaps",
      "6-zone lung mapping",
      "TB checklist + rib numbering",
    ],
  },
];

const qualityChecks = [
  "Rotation grading",
  "Motion blur",
  "Exposure analysis",
  "Artifact detection",
  "Implant differentiation",
  "Anatomy crop check",
];

const integrations = ["DICOM native", "PACS compatible", "RIS compatible", "HL7 export ready", "Vendor-agnostic"];

const WorkflowScreen = () => (
  <Screen>
    <SectionHeader
      eyebrow="Workflow automation"
      title="From DICOM to structured report — fully automated"
      desc="Three stages, vendor-agnostic, runs on commodity hardware."
    />

    <div className="space-y-3">
      {stages.map((s, i) => (
        <div key={s.title} className="page-card p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-teal grid place-items-center shrink-0">
              <s.icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <div className="page-marker">Stage 0{i + 1}</div>
              <h3 className="font-display font-bold text-base">{s.title}</h3>
            </div>
          </div>
          <ul className="grid sm:grid-cols-2 gap-y-1.5 gap-x-4">
            {s.items.map((it) => (
              <li key={it} className="flex gap-2 text-sm text-foreground/85">
                <ArrowRight className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {it}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <section>
      <SectionHeader eyebrow="Quality gatekeeper" title="Built-in image-quality checks" />
      <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2">
        {qualityChecks.map((q) => (
          <div key={q} className="flex items-center gap-2 rounded-lg bg-secondary px-3 py-2 text-xs font-semibold text-secondary-foreground">
            <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" /> {q}
          </div>
        ))}
      </div>
    </section>

    <section>
      <SectionHeader eyebrow="Integrations" title="Vendor-agnostic compatibility" />
      <div className="mt-3 flex flex-wrap gap-2">
        {integrations.map((t) => (
          <span key={t} className="rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-semibold text-primary">{t}</span>
        ))}
      </div>
      <div className="mt-4 page-card p-4">
        <div className="page-marker mb-2">Hardware vendors supported</div>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {["GE", "Siemens", "Philips", "Fuji", "Allengers", "Legacy CR"].map((v) => (
            <div key={v} className="rounded-lg border border-border bg-secondary/40 px-2 py-2 text-center font-display font-bold text-primary-deep text-sm">{v}</div>
          ))}
        </div>
      </div>
    </section>

    <section className="page-card p-4 flex items-start gap-3">
      <div className="h-9 w-9 rounded-lg bg-primary/10 grid place-items-center shrink-0">
        <ShieldCheck className="h-5 w-5 text-primary" />
      </div>
      <div>
        <div className="font-semibold text-sm">Offline TB triage included</div>
        <p className="text-xs text-muted-foreground mt-0.5">
          19 chest pathologies including the 11-sign TB checklist run without any internet connectivity.
        </p>
      </div>
      <ScanLine className="h-5 w-5 text-muted-foreground hidden sm:block" />
    </section>
  </Screen>
);

export default WorkflowScreen;
