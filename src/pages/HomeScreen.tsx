import { Link } from "react-router-dom";
import { Screen, SectionHeader } from "@/components/app/Screen";
import { Activity, ShieldCheck, Database, Target, Award, Lock, Microscope, ArrowRight, Boxes, FileBarChart2, Phone, FileText } from "lucide-react";

const KPI = ({ icon: Icon, value, label }: { icon: any; value: string; label: string }) => (
  <div className="page-card p-4">
    <div className="flex items-center justify-between">
      <Icon className="h-4 w-4 text-primary" />
      <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">live</span>
    </div>
    <div className="mt-2 stat-number !text-3xl sm:!text-4xl">{value}</div>
    <div className="mt-1 text-[11px] uppercase tracking-wider font-semibold text-muted-foreground">{label}</div>
  </div>
);

const QuickAction = ({ to, icon: Icon, label, sub }: { to: string; icon: any; label: string; sub: string }) => (
  <Link
    to={to}
    className="page-card p-4 flex items-center gap-3 hover:border-primary/40 active:scale-[0.99] transition"
  >
    <div className="h-10 w-10 rounded-xl bg-gradient-teal grid place-items-center text-primary-foreground shrink-0">
      <Icon className="h-5 w-5" />
    </div>
    <div className="min-w-0 flex-1">
      <div className="font-semibold text-sm">{label}</div>
      <div className="text-xs text-muted-foreground truncate">{sub}</div>
    </div>
    <ArrowRight className="h-4 w-4 text-muted-foreground" />
  </Link>
);

const Badge = ({ icon: Icon, children }: { icon: any; children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-[11px] font-semibold text-primary whitespace-nowrap">
    <Icon className="h-3 w-3" /> {children}
  </span>
);

const HomeScreen = () => (
  <Screen>
    {/* Intro hero card */}
    <div className="relative overflow-hidden rounded-2xl bg-gradient-dark text-primary-foreground p-5 sm:p-6">
      <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-primary-glow/25 blur-3xl" />
      <div className="relative">
        <div className="text-[10px] font-mono uppercase tracking-widest text-primary-glow">Clinical AI · Procurement Edition</div>
        <h2 className="mt-2 font-display text-xl sm:text-2xl font-bold leading-tight">
          DecXpert <span className="text-primary-glow">AI Radiology</span> Decision Support
        </h2>
        <p className="mt-2 text-sm text-white/80 max-w-md">
          Offline-first chest & skeletal X-ray AI engineered for Indian public healthcare.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link to="/products" className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground text-primary-deep px-3.5 py-1.5 text-xs font-bold hover:bg-primary-glow transition">
            Explore Products <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-1.5 rounded-full border border-white/30 px-3.5 py-1.5 text-xs font-semibold hover:bg-white/10 transition">
            Request Demo
          </Link>
        </div>
      </div>
    </div>

    {/* KPIs */}
    <section>
      <SectionHeader eyebrow="Platform metrics" title="At a glance" />
      <div className="mt-3 grid grid-cols-2 lg:grid-cols-4 gap-3">
        <KPI icon={Target} value="262" label="Pathologies" />
        <KPI icon={Database} value="11" label="Modules" />
        <KPI icon={Activity} value="1M+" label="Scans trained" />
        <KPI icon={ShieldCheck} value="≈98%" label="TB accuracy" />
      </div>
    </section>

    {/* Quick actions */}
    <section>
      <SectionHeader title="Quick actions" />
      <div className="mt-3 grid sm:grid-cols-2 gap-3">
        <QuickAction to="/products" icon={Boxes} label="Explore Products" sub="5 modules · 262 pathologies" />
        <QuickAction to="/evidence" icon={Microscope} label="View Clinical Evidence" sub="Nature Sci. Reports 2024" />
        <QuickAction to="/contact" icon={Phone} label="Request Demo" sub="Tender & procurement enquiries" />
        <QuickAction to="/contact" icon={FileText} label="Tender Enquiry" sub="Get the procurement pack" />
      </div>
    </section>

    {/* Trust badges */}
    <section>
      <SectionHeader title="Compliance & credibility" />
      <div className="mt-3 flex flex-wrap gap-2">
        <Badge icon={Award}>CDSCO Licensed</Badge>
        <Badge icon={ShieldCheck}>ISO 13485</Badge>
        <Badge icon={Lock}>DPDP Act 2023</Badge>
        <Badge icon={Microscope}>Nature Sci. Reports 2024</Badge>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        Powered by the Department of Pulmonary Medicine, SGPGIMS, Lucknow.
      </p>
    </section>

    {/* Reports preview */}
    <section>
      <SectionHeader eyebrow="Recent" title="Sample reports" />
      <Link to="/reports" className="mt-3 block page-card p-4 hover:border-primary/40 transition">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-primary/10 grid place-items-center">
            <FileBarChart2 className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-sm">Structured PDF reports with Grad-CAM heatmaps</div>
            <div className="text-xs text-muted-foreground">Confidence-scored, audit-ready, medico-legal grade.</div>
          </div>
          <ArrowRight className="h-4 w-4 text-muted-foreground" />
        </div>
      </Link>
    </section>
  </Screen>
);

export default HomeScreen;
