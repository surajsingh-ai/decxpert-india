import { cn } from "@/lib/utils";

export const Screen = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("max-w-5xl mx-auto px-4 sm:px-6 py-5 sm:py-7 space-y-6", className)}>{children}</div>
);

export const SectionHeader = ({
  eyebrow, title, desc,
}: { eyebrow?: string; title: string; desc?: string }) => (
  <div>
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <h2 className="mt-2 font-display text-xl sm:text-2xl font-bold tracking-tight">{title}</h2>
    {desc && <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>}
  </div>
);
