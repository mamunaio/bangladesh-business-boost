import { ArrowRight, Phone, Sparkles, Zap, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount1(Math.floor(ease * 50));
      setCount2(Math.floor(ease * 100));
      setCount3(Math.floor(ease * 3));
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-primary-glow/8 rounded-full blur-[100px] animate-blob" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] animate-float" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(hsl(265 85% 60%) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Animated lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-primary-glow/10 to-transparent" />
      </div>

      <div className="container relative z-10 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-hero-foreground/90 text-sm font-medium mb-8 animate-in slide-in-from-bottom-4 duration-700">
              <Sparkles className="w-4 h-4 text-primary-glow animate-icon-pulse" />
              🇧🇩 Trusted by 50+ Local Businesses in Bangladesh
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight text-hero-foreground">
              We Build
              <span className="relative inline-block mx-3">
                <span className="gradient-text">Digital</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8C50 2 150 2 198 8" stroke="hsl(180 80% 50%)" strokeWidth="3" strokeLinecap="round" className="animate-shimmer" />
                </svg>
              </span>
              <br />
              Experiences That
              <br />
              <span className="gradient-text">Grow Business</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-hero-foreground/55 max-w-lg leading-relaxed">
              Professional web design, development & SEO for local businesses in Bangladesh. Affordable. Fast. Reliable.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/+8801833925304" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl" className="gap-3 w-full sm:w-auto group">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="tel:+8801833925304">
                <Button variant="hero-outline" size="xl" className="gap-3 w-full sm:w-auto">
                  <Phone className="w-5 h-5" />
                  +880 1833-925304
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="mt-14 flex gap-10">
              {[
                { value: `${count1}+`, label: "Happy Clients" },
                { value: `${count2}+`, label: "Projects Done" },
                { value: `${count3}+`, label: "Years Experience" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-black gradient-text">{stat.value}</div>
                  <div className="text-sm text-hero-foreground/40 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side — feature cards grid */}
          <div className="hidden lg:block relative">
            <div className="relative w-full h-[520px]">
              {/* Main visual card */}
              <div className="absolute top-0 left-8 right-0 glass rounded-2xl p-1 animate-float shadow-2xl shadow-primary/10">
                <img
                  src="https://codenextit.com/assets/img/home_hero_slide_01.webp"
                  alt="Web design project showcase"
                  className="rounded-xl w-full h-64 object-cover"
                />
              </div>

              {/* Feature cards */}
              <div className="absolute bottom-24 -left-4 glass rounded-xl p-4 animate-float shadow-xl" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center animate-glow-ring">
                    <Zap className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-hero-foreground">Lightning Fast</p>
                    <p className="text-xs text-hero-foreground/50">Delivered in 7 days</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 right-0 glass rounded-xl p-4 animate-float shadow-xl" style={{ animationDelay: "2s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl gradient-cyan flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-hero-foreground">100% Secure</p>
                    <p className="text-xs text-hero-foreground/50">SSL & Protection</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-48 -left-8 glass rounded-xl px-4 py-3 animate-float shadow-xl" style={{ animationDelay: "3s" }}>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary-glow" />
                  <span className="text-xs font-semibold text-hero-foreground">+340% Growth</span>
                </div>
              </div>

              {/* Rating */}
              <div className="absolute bottom-44 right-2 glass rounded-xl p-3 animate-float shadow-xl" style={{ animationDelay: "1.5s" }}>
                <div className="flex items-center gap-1 text-yellow-400 text-sm">★★★★★</div>
                <p className="text-xs text-hero-foreground/50 mt-0.5">4.9/5 Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
