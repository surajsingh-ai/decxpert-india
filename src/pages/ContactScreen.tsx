import { Screen, SectionHeader } from "@/components/app/Screen";
import { MapPin, Mail, Phone, Globe, ArrowRight, Users } from "lucide-react";

const team = [
  { n: "Saumya Shukla", r: "Chief Executive Officer" },
  { n: "Dr. Ankit Shukla", r: "Technical Director" },
  { n: "Nikhil Mishra", r: "Chief Technology Officer" },
];

const ContactScreen = () => (
  <Screen>
    <SectionHeader eyebrow="Tender & demo enquiries" title="Get in touch" />

    <div className="page-card p-5 bg-gradient-dark text-primary-foreground border-0 relative overflow-hidden">
      <div className="absolute -top-16 -right-16 h-44 w-44 rounded-full bg-primary-glow/25 blur-3xl" />
      <div className="relative space-y-4 text-sm">
        <div className="flex gap-3">
          <MapPin className="h-5 w-5 text-primary-glow shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold">Dectrocel<span className="text-primary-glow">®</span></div>
            <div className="text-white/75">MedTech CoE, SGPGIMS Campus<br />Lucknow, Uttar Pradesh, India</div>
          </div>
        </div>
        <a href="mailto:support@dectrocel.com" className="flex gap-3 hover:text-primary-glow transition">
          <Mail className="h-5 w-5 text-primary-glow shrink-0 mt-0.5" />
          <div>
            <div className="text-[10px] uppercase tracking-wider text-white/60">Email</div>
            support@dectrocel.com
          </div>
        </a>
        <a href="tel:+919807194222" className="flex gap-3 hover:text-primary-glow transition">
          <Phone className="h-5 w-5 text-primary-glow shrink-0 mt-0.5" />
          <div>
            <div className="text-[10px] uppercase tracking-wider text-white/60">Phone</div>
            +91 98071 94222
          </div>
        </a>
        <a href="https://the-decxpert.com" target="_blank" rel="noreferrer" className="flex gap-3 hover:text-primary-glow transition">
          <Globe className="h-5 w-5 text-primary-glow shrink-0 mt-0.5" />
          <div>
            <div className="text-[10px] uppercase tracking-wider text-white/60">Website</div>
            the-decxpert.com
          </div>
        </a>
        <a
          href="mailto:support@dectrocel.com"
          className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary-foreground text-primary-deep px-4 py-2.5 text-sm font-bold hover:bg-primary-glow transition"
        >
          Request Tender Pack <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>

    <section>
      <SectionHeader eyebrow="Leadership" title="Built by clinicians, for clinicians" />
      <div className="mt-3 grid sm:grid-cols-3 gap-3">
        {team.map((t) => (
          <div key={t.n} className="page-card p-4">
            <div className="h-10 w-10 rounded-full bg-gradient-teal grid place-items-center text-primary-foreground font-bold mb-2">
              {t.n.split(" ").map((p) => p[0]).slice(0, 2).join("")}
            </div>
            <div className="font-display font-bold text-sm">{t.n}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{t.r}</div>
          </div>
        ))}
      </div>
    </section>

    <div className="page-card p-4 flex items-center gap-3">
      <div className="h-10 w-10 rounded-lg bg-primary/10 grid place-items-center shrink-0">
        <Users className="h-5 w-5 text-primary" />
      </div>
      <div className="text-xs text-muted-foreground">
        Powered by the Department of Pulmonary Medicine, SGPGIMS, Lucknow.
      </div>
    </div>
  </Screen>
);

export default ContactScreen;
