import { Link, useParams, useNavigate } from "react-router-dom";
import { getProduct } from "@/data/products";
import { Screen } from "@/components/app/Screen";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, ArrowRight, CheckCircle2, MapPin, Award, ShieldCheck, Lock, Printer, FileText } from "lucide-react";

const Badge = ({ icon: Icon, children }: { icon: any; children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-[11px] font-semibold text-primary whitespace-nowrap">
    <Icon className="h-3 w-3" /> {children}
  </span>
);

const ProductDetailScreen = () => {
  const { slug = "" } = useParams();
  const navigate = useNavigate();
  const p = getProduct(slug);

  if (!p) {
    return (
      <Screen>
        <div className="page-card p-6 text-center">
          <p className="text-sm text-muted-foreground">Product not found.</p>
          <Link to="/products" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
            <ArrowLeft className="h-4 w-4" /> Back to Products
          </Link>
        </div>
      </Screen>
    );
  }

  return (
    <div className="pb-24 md:pb-6">
      {/* Detail header */}
      <div className="relative overflow-hidden bg-gradient-dark text-primary-foreground">
        <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-primary-glow/25 blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back
          </button>
          <div className="mt-3 flex items-start gap-3">
            <div className="h-12 w-12 rounded-xl bg-primary-glow/20 border border-primary-glow/30 grid place-items-center shrink-0">
              <p.icon className="h-6 w-6 text-primary-glow" />
            </div>
            <div className="min-w-0">
              <div className="page-marker text-primary-glow">Product {p.code}</div>
              <h1 className="mt-0.5 font-display text-xl sm:text-2xl font-bold">{p.t}</h1>
              <p className="mt-1 text-sm text-white/80">{p.tagline}</p>
            </div>
          </div>
        </div>
      </div>

      <Screen>
        <Tabs defaultValue="overview" className="w-full">
          <div className="-mx-4 sm:-mx-6 px-4 sm:px-6 overflow-x-auto sticky top-14 bg-background/95 backdrop-blur z-30 py-2 border-b border-border print:hidden">
            <TabsList className="inline-flex w-auto">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="specs">Specifications</TabsTrigger>
              <TabsTrigger value="useCases">Use Cases</TabsTrigger>
              <TabsTrigger value="brochure">Brochure</TabsTrigger>
              <TabsTrigger value="demo">Demo</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="overview" className="space-y-5 mt-4">
            <div className="grid sm:grid-cols-2 gap-3">
              {p.highlights.map((h) => (
                <div key={h.t} className="page-card p-4 flex gap-3">
                  <div className="h-9 w-9 rounded-lg bg-gradient-teal grid place-items-center shrink-0">
                    <h.icon className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-sm">{h.t}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{h.d}</div>
                  </div>
                </div>
              ))}
            </div>

            {p.code === "SX" && (
              <div className="page-card p-4">
                <div className="page-marker mb-2">Flagship positioning</div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                  {[
                    { v: "262", l: "Pathologies" },
                    { v: "11", l: "Modules" },
                    { v: "56", l: "Chest" },
                    { v: "206", l: "MSK" },
                  ].map((x) => (
                    <div key={x.l} className="rounded-lg bg-secondary/50 px-2 py-3">
                      <div className="font-display font-extrabold text-lg text-primary">{x.v}</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">{x.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              <Badge icon={Award}>CDSCO Licensed</Badge>
              <Badge icon={ShieldCheck}>ISO 13485</Badge>
              <Badge icon={Lock}>DPDP Act 2023</Badge>
            </div>

            {p.deployments && (
              <div>
                <div className="eyebrow mb-2">Live deployments & impact</div>
                <ul className="page-card p-4 divide-y divide-border">
                  {p.deployments.map((d) => (
                    <li key={d} className="flex gap-3 text-sm py-2 first:pt-0 last:pb-0">
                      <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </TabsContent>

          <TabsContent value="features" className="mt-4">
            <ul className="page-card p-4 divide-y divide-border">
              {p.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm py-2.5 first:pt-0 last:pb-0">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="specs" className="mt-4 space-y-4">
            <div>
              <div className="eyebrow mb-2">Specifications</div>
              <div className="rounded-xl border border-border divide-y divide-border overflow-hidden">
                {p.specs.map((s) => (
                  <div key={s.l} className="flex items-center justify-between px-4 py-2.5 text-sm bg-card">
                    <span className="text-muted-foreground">{s.l}</span>
                    <span className="font-mono font-semibold text-right">{s.v}</span>
                  </div>
                ))}
              </div>
            </div>
            {p.validation && (
              <div>
                <div className="eyebrow mb-2">Clinical validation</div>
                <div className="rounded-xl border border-border divide-y divide-border overflow-hidden">
                  {p.validation.map((s) => (
                    <div key={s.l} className="flex items-center justify-between px-4 py-2.5 text-sm bg-card">
                      <span className="text-muted-foreground">{s.l}</span>
                      <span className="font-mono font-semibold text-right">{s.v}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {p.pricing && (
              <div className="rounded-2xl bg-gradient-dark text-primary-foreground p-5">
                <div className="page-marker text-primary-glow">Preferential pricing</div>
                <div className="mt-1 flex flex-wrap items-end gap-x-3 gap-y-1">
                  <div className="font-display text-2xl font-extrabold">{p.pricing.price}</div>
                  <div className="text-xs text-white/70">{p.pricing.term}</div>
                </div>
                <div className="mt-1 inline-block rounded-full bg-accent text-accent-foreground px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                  {p.pricing.includes}
                </div>
                <ul className="mt-3 grid sm:grid-cols-2 gap-1.5">
                  {p.pricing.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-xs text-white/90">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary-glow mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </TabsContent>

          <TabsContent value="useCases" className="mt-4">
            <ul className="page-card p-4 divide-y divide-border">
              {p.useCases.map((u) => (
                <li key={u} className="flex gap-3 text-sm py-2.5 first:pt-0 last:pb-0">
                  <ArrowRight className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>{u}</span>
                </li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="page-card p-5 text-center">
              <p.icon className="h-10 w-10 mx-auto text-primary" />
              <h3 className="mt-3 font-display font-bold text-lg">Try {p.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground max-w-md mx-auto">
                Schedule a tailored walkthrough or request a tender pack from our team.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold hover:bg-primary-deep transition"
                >
                  Request demo <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-semibold hover:bg-muted transition"
                >
                  Tender enquiry
                </Link>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </Screen>

      {/* Sticky CTA on mobile */}
      <div className="md:hidden fixed bottom-16 inset-x-0 z-30 px-4 pb-2">
        <Link
          to="/contact"
          className="flex items-center justify-center gap-1.5 rounded-full bg-primary text-primary-foreground px-4 py-3 text-sm font-bold shadow-elevated"
        >
          Request demo for {p.t} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default ProductDetailScreen;
