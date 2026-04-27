import {
  Activity, ScanLine, FileText, Workflow, Layers, Target, ShieldCheck, Brain, WifiOff,
  FileCheck2, Lock, BarChart3, Database, Cpu, Users,
} from "lucide-react";

export type ProductDetail = {
  code: string;
  slug: string;
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

export const products: ProductDetail[] = [
  {
    code: "SX",
    slug: "sx",
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
      "206 musculoskeletal conditions across 10 modules",
      "11-sign TB checklist with per-sign confidence scores",
      "Nodule risk stratification (<6mm, 6–8, 8–20, 20–30, >30mm)",
      "Auto body-part recognition — DICOM routed to correct AI model",
      "Grad-CAM heatmaps rendered on the X-ray",
      "Rib-level fracture mapping (Rib 1–12 · L / R)",
      "Batch screening mode with positive/negative dashboards",
      "Structured PDF reporting with confidence scores",
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
    validation: [
      { l: "Overall accuracy", v: "~98% (clinical setting)" },
      { l: "Training cohort", v: "10 Lakh+ images" },
      { l: "Testing cohort", v: "~3 Lakh (expert annotated)" },
      { l: "Validation cohort", v: "5 Lakh+ images" },
      { l: "Peer review", v: "Nature Scientific Reports, 2024" },
      { l: "Sensitivity / Specificity", v: "High / High" },
      { l: "Generalisability", v: "Multi-vendor, multi-centre" },
    ],
    deployments: [
      "Adani Foundation – community screening",
      "10,000+ patients screened across 9 hospital pilots",
      "50,000+ patients prioritised for immediate care escalation",
      "10× faster diagnostic turnaround vs. baseline",
    ],
  },
  {
    code: "MX",
    slug: "mx",
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
    slug: "ax",
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
    slug: "ct",
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
    validation: [
      { l: "Architecture", v: "3D Convolutional Neural Networks" },
      { l: "Normalisation", v: "Multi-window RGB · Z-score · CLAHE" },
      { l: "Vendor handling", v: "Metadata-aware pipeline" },
      { l: "Treatment efficacy uplift", v: "+52.8% (CT monitoring)" },
      { l: "Case yield uplift", v: "+40.1% vs. baseline" },
    ],
  },
  {
    code: "LGP",
    slug: "lgp",
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

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
