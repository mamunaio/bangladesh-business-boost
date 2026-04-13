import { Moon, Sun, Monitor, ArrowUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

const applyTheme = (theme: Theme) => {
  const isDark =
    theme === "dark" ||
    (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", isDark);
};

const FloatingControls = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as Theme) || "system";
    }
    return "system";
  });

  const [showTop, setShowTop] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Listen to system preference changes when in system mode
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if (theme === "system") applyTheme("system");
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const themes: { value: Theme; icon: typeof Sun; label: string }[] = [
    { value: "light", icon: Sun, label: "Light" },
    { value: "dark", icon: Moon, label: "Dark" },
    { value: "system", icon: Monitor, label: "System" },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`w-11 h-11 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all duration-500 group ${
          showTop ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-75 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 transition-all" />
      </button>

      {/* Theme switcher */}
      <div className="relative">
        {/* Expanded options */}
        <div
          className={`absolute bottom-full mb-2 right-0 flex flex-col gap-1.5 bg-card border border-border rounded-2xl p-1.5 shadow-xl transition-all duration-300 origin-bottom-right ${
            open ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
          }`}
        >
          {themes.map((t) => (
            <button
              key={t.value}
              onClick={() => {
                setTheme(t.value);
                setOpen(false);
              }}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                theme === t.value
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
            >
              <t.icon className="w-3.5 h-3.5" />
              {t.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="w-11 h-11 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group"
          aria-label="Theme settings"
        >
          {theme === "dark" ? (
            <Moon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          ) : theme === "light" ? (
            <Sun className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          ) : (
            <Monitor className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          )}
        </button>
      </div>

      {/* WhatsApp */}
      <a
        href="https://wa.me/+8801833925304"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl shadow-[#25D366]/30 hover:scale-110 transition-transform">
          <MessageCircle className="w-7 h-7 text-primary-foreground" />
        </div>
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat with us!
        </span>
      </a>
    </div>
  );
};

export default FloatingControls;
