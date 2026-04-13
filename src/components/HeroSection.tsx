import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/50 -skew-x-12 origin-top-right hidden lg:block" />
      
      <div className="container relative">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
            🇧🇩 Trusted by 50+ Local Businesses in Bangladesh
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-foreground">
            Professional Website Design Services in{" "}
            <span className="text-primary">Bangladesh</span>
          </h1>

          <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            We help local businesses grow online with affordable, fast, and professional web solutions. From design to SEO — we handle it all.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/+8801833925304" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2 text-base w-full sm:w-auto">
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <a href="tel:+8801833925304">
              <Button variant="outline" size="lg" className="gap-2 text-base w-full sm:w-auto">
                <Phone className="w-5 h-5" />
                +880 1833-925304
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { value: "50+", label: "Clients Served" },
              { value: "3+", label: "Years Experience" },
              { value: "100%", label: "Local Support" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
