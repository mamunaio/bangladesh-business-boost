import { ArrowRight, Phone, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-glow/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-primary/8 rounded-full blur-2xl animate-float" />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-hero-foreground/90 text-sm font-medium mb-8 animate-in slide-in-from-bottom-4 duration-700">
              <span className="w-2 h-2 rounded-full bg-primary-glow animate-pulse" />
              🇧🇩 Trusted by 50+ Local Businesses in Bangladesh
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tight text-hero-foreground">
              We Build Websites
              <br />
              That <span className="gradient-text">Grow Your</span>
              <br />
              Business
            </h1>

            <p className="mt-6 text-lg md:text-xl text-hero-foreground/60 max-w-lg leading-relaxed">
              Professional web design, development & SEO for local businesses in Bangladesh. Affordable. Fast. Reliable.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/+8801833925304" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl" className="gap-3 w-full sm:w-auto">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href="tel:+8801833925304">
                <Button variant="hero-outline" size="xl" className="gap-3 w-full sm:w-auto">
                  <Phone className="w-5 h-5" />
                  +880 1833-925304
                </Button>
              </a>
            </div>

            {/* Stats row */}
            <div className="mt-14 flex gap-10">
              {[
                { value: "50+", label: "Happy Clients" },
                { value: "100+", label: "Projects Done" },
                { value: "3+", label: "Years Experience" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-black gradient-text">{stat.value}</div>
                  <div className="text-sm text-hero-foreground/40 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side — floating cards */}
          <div className="hidden lg:block relative">
            <div className="relative w-full h-[500px]">
              {/* Main card */}
              <div className="absolute top-10 left-10 right-0 glass rounded-2xl p-1 animate-float shadow-2xl">
                <img
                  src="https://codenextit.com/assets/img/home_hero_slide_01.webp"
                  alt="Web design project"
                  className="rounded-xl w-full h-64 object-cover"
                />
              </div>
              {/* Floating small card */}
              <div className="absolute bottom-16 left-0 glass rounded-xl p-4 animate-float shadow-xl" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center animate-glow-ring">
                    <Play className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-hero-foreground">Project Delivered</p>
                    <p className="text-xs text-hero-foreground/50">in just 7 days</p>
                  </div>
                </div>
              </div>
              {/* Rating card */}
              <div className="absolute bottom-0 right-4 glass rounded-xl p-4 animate-float shadow-xl" style={{ animationDelay: "2s" }}>
                <div className="flex items-center gap-1 text-yellow-400 text-lg">★★★★★</div>
                <p className="text-xs text-hero-foreground/50 mt-1">4.9/5 Client Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary/10 backdrop-blur-sm py-3 overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap gap-8">
          {["Web Design", "E-Commerce", "SEO", "UI/UX Design", "Software Development", "Graphic Design", "Maintenance", "Web Design", "E-Commerce", "SEO", "UI/UX Design", "Software Development", "Graphic Design", "Maintenance"].map((item, i) => (
            <span key={i} className="text-sm font-medium text-hero-foreground/50 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
