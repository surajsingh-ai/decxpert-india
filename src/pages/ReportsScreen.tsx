import { Screen, SectionHeader } from "@/components/app/Screen";
import heatmapImg from "@/assets/heatmap.jpg";
import { CheckCircle2, FileText } from "lucide-react";

const items = [
  { t: "Grad-CAM heatmaps", d: "Visual lesion localisation that radiologists and clinicians can verify at a glance." },
  { t: "6-zone lung mapping", d: "Findings reported by RUL, RML, RLL, LUL, LML, LLL for clarity and consistency." },
  { t: "Rib-level fracture localisation", d: "Reports Rib 1–12, Left / Right — useful in trauma and medico-legal contexts." },
  { t: "Confidence-score reporting", d: "0–100% probability on every finding, used for triage and clinical validation." },
];

const sampleReports = [
  { id: "DX-2024-0184", patient: "M / 47", finding: "Pneumothorax", conf: "94%", priority: "Critical" },
  { id: "DX-2024-0185", patient: "F / 32", finding: "Apical infiltrate · TB suspect", conf: "88%", priority: "High" },
  { id: "DX-2024-0186", patient: "M / 61", finding: "Rib 7 R fracture", conf: "91%", priority: "High" },
  { id: "DX-2024-0187", patient: "F / 28", finding: "Normal study", conf: "97%", priority: "Routine" },
];

const ReportsScreen = () => (
  <Screen>
    <SectionHeader
      eyebrow="Explainable AI"
      title="Every finding, localised. Every score, traceable."
      desc="Medico-legal grade structured reports with Grad-CAM heatmaps and 0–100% confidence."
    />

    <div className="page-card overflow-hidden">
      <img src={heatmapImg} alt="Grad-CAM heatmap on chest X-ray" loading="lazy" className="w-full h-auto" />
    </div>

    <div className="grid sm:grid-cols-2 gap-3">
      {items.map((x) => (
        <div key={x.t} className="page-card p-4 flex gap-3">
          <div className="h-9 w-9 rounded-lg bg-primary/10 grid place-items-center shrink-0">
            <CheckCircle2 className="h-4 w-4 text-primary" />
          </div>
          <div>
            <div className="font-semibold text-sm">{x.t}</div>
            <div className="text-xs text-muted-foreground leading-relaxed">{x.d}</div>
          </div>
        </div>
      ))}
    </div>

    <section>
      <SectionHeader title="Sample triage queue" desc="Auto-prioritised by AI confidence and severity." />
      <div className="mt-3 page-card divide-y divide-border overflow-hidden">
        {sampleReports.map((r) => (
          <div key={r.id} className="p-3 flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-secondary grid place-items-center shrink-0">
              <FileText className="h-4 w-4 text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] text-muted-foreground">{r.id}</span>
                <span className="text-[11px] text-muted-foreground">· {r.patient}</span>
              </div>
              <div className="font-semibold text-sm truncate">{r.finding}</div>
            </div>
            <div className="text-right">
              <div className="font-mono font-bold text-sm text-primary">{r.conf}</div>
              <div className={`text-[10px] uppercase tracking-wider font-bold ${
                r.priority === "Critical" ? "text-destructive" :
                r.priority === "High" ? "text-accent" : "text-muted-foreground"
              }`}>{r.priority}</div>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs text-muted-foreground">Demo data shown for illustration.</p>
    </section>
  </Screen>
);

export default ReportsScreen;
