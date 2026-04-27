import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Home, Boxes, Workflow, FileBarChart2, Microscope, Phone, Search, Bell, Sun, Moon, Menu, BookOpen } from "lucide-react";
import { useState } from "react";
import dectrocelLogo from "@/assets/dectrocel-logo.png";
import { cn } from "@/lib/utils";
import { useTheme } from "./ThemeProvider";
import {
  Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";

export const NAV_ITEMS = [
  { to: "/", label: "Home", icon: Home, end: true },
  { to: "/products", label: "Products", icon: Boxes },
  { to: "/workflow", label: "Workflow", icon: Workflow },
  { to: "/reports", label: "Reports", icon: FileBarChart2 },
  { to: "/evidence", label: "Evidence", icon: Microscope },
  { to: "/contact", label: "Contact", icon: Phone },
];

export const BROCHURE_URL = "/brochure";
export const BROCHURE_ITEM = { to: BROCHURE_URL, label: "Brochure", icon: BookOpen };

const screenTitle = (path: string) => {
  if (path.startsWith("/products/")) return "Product";
  const item = NAV_ITEMS.find((n) => (n.end ? n.to === path : path.startsWith(n.to)));
  return item?.label ?? "DecXpert";
};

const TopBar = ({ onMenu }: { onMenu: () => void }) => {
  const { theme, toggle } = useTheme();
  const { pathname } = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 h-14 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="h-full px-3 sm:px-5 flex items-center gap-2">
        <button
          aria-label="Menu"
          onClick={onMenu}
          className="md:hidden h-9 w-9 grid place-items-center rounded-lg hover:bg-muted"
        >
          <Menu className="h-5 w-5" />
        </button>
        <NavLink to="/" className="flex items-center gap-2 min-w-0">
          <img src={dectrocelLogo} alt="Dectrocel" className="h-8 w-auto object-contain" />
          <div className="leading-tight hidden sm:block">
            <div className="font-display text-[13px] font-bold">Dectrocel<span className="text-primary">®</span></div>
            <div className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground">DecXpert AI</div>
          </div>
        </NavLink>
        <div className="mx-2 h-6 w-px bg-border hidden sm:block" />
        <h1 className="font-display text-sm font-bold truncate flex-1">{screenTitle(pathname)}</h1>
        <div className="flex items-center gap-1">
          <Sheet open={searchOpen} onOpenChange={setSearchOpen}>
            <SheetTrigger asChild>
              <button aria-label="Search" className="h-9 w-9 grid place-items-center rounded-lg hover:bg-muted">
                <Search className="h-[18px] w-[18px]" />
              </button>
            </SheetTrigger>
            <SheetContent side="top" className="p-4">
              <SheetHeader><SheetTitle>Search DecXpert</SheetTitle></SheetHeader>
              <Input placeholder="Search pathologies, modules, products…" className="mt-3" autoFocus />
              <p className="mt-2 text-xs text-muted-foreground">Try: TB, nodule, rib fracture, MX, CT…</p>
            </SheetContent>
          </Sheet>
          <button aria-label="Notifications" className="relative h-9 w-9 grid place-items-center rounded-lg hover:bg-muted">
            <Bell className="h-[18px] w-[18px]" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-accent" />
          </button>
          <button
            aria-label="Toggle theme"
            onClick={toggle}
            className="h-9 w-9 grid place-items-center rounded-lg hover:bg-muted"
          >
            {theme === "dark" ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
          </button>
        </div>
      </div>
    </header>
  );
};

const SideNav = () => (
  <aside className="hidden md:flex w-60 shrink-0 border-r border-border bg-card/50 flex-col">
    <div className="p-3 space-y-0.5 flex-1">
      <div className="px-3 py-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Navigation</div>
      {NAV_ITEMS.map((it) => (
        <NavLink
          key={it.to}
          to={it.to}
          end={it.end}
          className={({ isActive }) =>
            cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
              isActive ? "bg-primary text-primary-foreground" : "text-foreground/80 hover:bg-muted",
            )
          }
        >
          <it.icon className="h-4 w-4" />
          {it.label}
        </NavLink>
      ))}
      <NavLink
        to={BROCHURE_ITEM.to}
        className={({ isActive }) =>
          cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
            isActive ? "bg-primary text-primary-foreground" : "text-foreground/80 hover:bg-muted",
          )
        }
      >
        <BROCHURE_ITEM.icon className="h-4 w-4" />
        {BROCHURE_ITEM.label}
      </NavLink>
    </div>
    <div className="p-3 border-t border-border">
      <div className="rounded-xl bg-gradient-teal p-3 text-primary-foreground">
        <div className="text-[10px] font-mono uppercase tracking-widest opacity-80">Tender enquiry</div>
        <div className="font-display font-bold text-sm mt-0.5">Request a demo</div>
        <NavLink to="/contact" className="mt-2 inline-flex text-[11px] font-semibold underline-offset-2 hover:underline">
          Contact sales →
        </NavLink>
      </div>
    </div>
  </aside>
);

const BottomNav = () => {
  const items = [...NAV_ITEMS];
  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-40 h-16 border-t border-border bg-background/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)]">
      <div className="grid grid-cols-7 h-full">
        {items.map((it) => (
          <NavLink
            key={it.to}
            to={it.to}
            end={it.end}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center justify-center gap-0.5 text-[10px] font-medium transition-colors",
                isActive ? "text-primary" : "text-muted-foreground active:text-foreground",
              )
            }
          >
            {({ isActive }) => (
              <>
                <it.icon className={cn("h-[18px] w-[18px]", isActive && "stroke-[2.5]")} />
                <span className="truncate">{it.label}</span>
              </>
            )}
          </NavLink>
        ))}
        <NavLink
          to={BROCHURE_ITEM.to}
          className={({ isActive }) =>
            cn(
              "flex flex-col items-center justify-center gap-0.5 text-[10px] font-medium transition-colors",
              isActive ? "text-primary" : "text-muted-foreground active:text-foreground",
            )
          }
        >
          {({ isActive }) => (
            <>
              <BROCHURE_ITEM.icon className={cn("h-[18px] w-[18px]", isActive && "stroke-[2.5]")} />
              <span className="truncate">{BROCHURE_ITEM.label}</span>
            </>
          )}
        </NavLink>
      </div>
    </nav>
  );
};

const MobileDrawer = ({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) => (
  <Sheet open={open} onOpenChange={onOpenChange}>
    <SheetContent side="left" className="w-72 p-0">
      <div className="p-4 border-b border-border flex items-center gap-3">
        <img src={dectrocelLogo} alt="Dectrocel" className="h-9 w-auto" />
        <div>
          <div className="font-display font-bold text-sm">Dectrocel®</div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">DecXpert AI</div>
        </div>
      </div>
      <div className="p-3 space-y-1">
        {NAV_ITEMS.map((it) => (
          <NavLink
            key={it.to}
            to={it.to}
            end={it.end}
            onClick={() => onOpenChange(false)}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium",
                isActive ? "bg-primary text-primary-foreground" : "hover:bg-muted",
              )
            }
          >
            <it.icon className="h-4 w-4" />
            {it.label}
          </NavLink>
        ))}
        <a
          href={BROCHURE_ITEM.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => onOpenChange(false)}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-muted"
        >
          <BROCHURE_ITEM.icon className="h-4 w-4" />
          {BROCHURE_ITEM.label}
        </a>
      </div>
    </SheetContent>
  </Sheet>
);

export const AppShell = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TopBar onMenu={() => setDrawerOpen(true)} />
      <MobileDrawer open={drawerOpen} onOpenChange={setDrawerOpen} />
      <div className="flex flex-1 min-h-0">
        <SideNav />
        <main className="flex-1 min-w-0 pb-20 md:pb-0">
          <Outlet />
        </main>
      </div>
      <BottomNav />
    </div>
  );
};
