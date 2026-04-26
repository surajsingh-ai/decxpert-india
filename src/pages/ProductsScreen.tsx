import { Link } from "react-router-dom";
import { Screen, SectionHeader } from "@/components/app/Screen";
import { products } from "@/data/products";
import { ArrowRight } from "lucide-react";

const ProductsScreen = () => (
  <Screen>
    <SectionHeader
      eyebrow="The DecXpert family"
      title="Five purpose-built tools"
      desc="Tap any product for full specs, features and use cases."
    />
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {products.map((p) => (
        <Link
          key={p.code}
          to={`/products/${p.slug}`}
          className={`page-card p-4 relative overflow-hidden hover:border-primary/50 hover:shadow-elevated transition active:scale-[0.99] ${p.primary ? "ring-1 ring-primary" : ""}`}
        >
          {p.primary && (
            <span className="absolute top-3 right-3 rounded-full bg-accent text-accent-foreground px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider">
              Flagship
            </span>
          )}
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl bg-gradient-teal grid place-items-center shrink-0">
              <p.icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="min-w-0">
              <div className="page-marker">Product {p.code}</div>
              <div className="font-display font-bold text-base truncate">{p.t}</div>
            </div>
          </div>
          <p className="mt-3 text-xs text-muted-foreground leading-relaxed line-clamp-3">{p.d}</p>
          <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
            Open <ArrowRight className="h-3.5 w-3.5" />
          </div>
        </Link>
      ))}
    </div>
  </Screen>
);

export default ProductsScreen;
