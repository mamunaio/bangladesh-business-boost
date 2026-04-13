import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, ChevronDown, Monitor, Palette, Code, ShoppingCart, Globe, Server, Cloud, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const servicesMenu = [
  { icon: Code, title: "Management Softwares", desc: "Optimize Operations With Our Dynamic Software Services." },
  { icon: Palette, title: "UI/UX Design", desc: "Transforming Concepts Into Seamless User Experiences" },
  { icon: Globe, title: "Web Development", desc: "Elevate Your Online Presence With Our Web Expertise" },
  { icon: Monitor, title: "Graphics Design", desc: "Unleash Creativity With Our Graphic Design Solutions" },
];

const hostingMenu = [
  { icon: Server, title: "Web Hosting", desc: "Optimize Operations With Our Dynamic Software Services." },
  { icon: Cloud, title: "BDIX VPS", desc: "Elevate Your Online Presence With Our Web Expertise" },
];

const careerMenu = [
  { icon: GraduationCap, title: "Industrial Training", desc: "Optimize Operations With Our Dynamic Software Services." },
];

type MegaMenu = "services" | "hosting" | "career" | null;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMega, setActiveMega] = useState<MegaMenu>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMega(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = (menu: MegaMenu) => {
    clearTimeout(timeoutRef.current);
    setActiveMega(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMega(null), 200);
  };

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services", mega: "services" as MegaMenu, items: servicesMenu },
    { label: "Hosting", href: "#pricing", mega: "hosting" as MegaMenu, items: hostingMenu },
    { label: "Career", href: "#contact", mega: "career" as MegaMenu, items: careerMenu },
    { label: "About Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];

  const renderMegaDropdown = (items: typeof servicesMenu) => (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-card/95 backdrop-blur-xl border rounded-2xl shadow-2xl shadow-primary/10 p-4 min-w-[420px] animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200 z-50"
      onMouseEnter={() => clearTimeout(timeoutRef.current)}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`grid ${items.length > 2 ? "grid-cols-2" : "grid-cols-1"} gap-2`}>
        {items.map((item) => (
          <a
            key={item.title}
            href="#services"
            onClick={() => setActiveMega(null)}
            className="flex items-start gap-3 p-3 rounded-xl hover:bg-accent/50 transition-all duration-200 group"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-primary-glow/20 flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-primary-glow/30 transition-all">
              <item.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{item.title}</p>
              <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{item.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl shadow-lg border-b"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex items-center gap-2 relative z-10">
          <img
            src="https://codenextit.com/assets/img/cnits-logo-main.png"
            alt="Code Next IT Logo"
            className={`h-8 md:h-10 transition-all duration-300 ${!scrolled ? "brightness-0 invert" : ""}`}
          />
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.mega ? handleMouseEnter(item.mega) : undefined}
              onMouseLeave={item.mega ? handleMouseLeave : undefined}
            >
              <a
                href={item.href}
                className={`text-sm font-medium transition-colors relative group flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-primary/5 ${
                  scrolled ? "text-muted-foreground hover:text-foreground" : "text-hero-foreground/70 hover:text-hero-foreground"
                }`}
                onClick={(e) => {
                  if (item.mega) {
                    e.preventDefault();
                    setActiveMega(activeMega === item.mega ? null : item.mega);
                  }
                }}
              >
                {item.label}
                {item.mega && <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMega === item.mega ? "rotate-180" : ""}`} />}
                <span className="absolute -bottom-1 left-3 right-3 h-0.5 bg-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
              {item.mega && activeMega === item.mega && item.items && renderMegaDropdown(item.items)}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+8801833925304">
            <Button variant={scrolled ? "outline" : "hero-outline"} size="sm" className="gap-2">
              <Phone className="w-4 h-4" />
              Call Now
            </Button>
          </a>
          <a href="https://wa.me/+8801833925304" target="_blank" rel="noopener noreferrer">
            <Button variant={scrolled ? "default" : "hero"} size="sm">
              Free Consultation
            </Button>
          </a>
        </div>

        <button
          className={`lg:hidden p-2 relative z-10 ${!scrolled && !open ? "text-hero-foreground" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-b pb-4 shadow-xl animate-in slide-in-from-top-2">
          <div className="container flex flex-col gap-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <a
                  href={item.href}
                  onClick={() => { if (!item.mega) setOpen(false); }}
                  className="py-2.5 px-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-colors flex items-center justify-between"
                >
                  {item.label}
                  {item.mega && <ChevronDown className="w-4 h-4" />}
                </a>
                {item.items && (
                  <div className="pl-4 space-y-1 mt-1">
                    {item.items.map((sub) => (
                      <a
                        key={sub.title}
                        href="#services"
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-accent/50 transition-colors"
                      >
                        <sub.icon className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{sub.title}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex flex-col gap-2 pt-3 mt-2 border-t">
              <a href="tel:+8801833925304">
                <Button variant="outline" size="sm" className="w-full gap-2">
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
              </a>
              <a href="https://wa.me/+8801833925304" target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="w-full">Free Consultation</Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
