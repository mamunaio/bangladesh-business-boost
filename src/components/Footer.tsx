import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-hero text-hero-foreground pt-16 pb-8 relative">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-hero-foreground/10">
          <div>
            <img
              src="https://codenextit.com/assets/img/cnits-logo-main.png"
              alt="Code Next IT"
              className="h-10 brightness-0 invert mb-4"
            />
            <p className="text-sm text-hero-foreground/50 leading-relaxed">
              Your trusted local technology partner in Bangladesh. Helping businesses grow online since 2021.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-hero-foreground mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm text-hero-foreground/50">
              {["Web Design", "E-Commerce", "SEO Services", "Software Development"].map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-hero-foreground transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-hero-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-hero-foreground/50">
              {[{ l: "Home", h: "#home" }, { l: "Portfolio", h: "#portfolio" }, { l: "Pricing", h: "#pricing" }, { l: "Contact", h: "#contact" }].map((item) => (
                <li key={item.l}>
                  <a href={item.h} className="hover:text-hero-foreground transition-colors">{item.l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-hero-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-hero-foreground/50">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+8801833925304" className="hover:text-hero-foreground transition-colors">+880 1833-925304</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@codenextit.com" className="hover:text-hero-foreground transition-colors">info@codenextit.com</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Dhaka, Bangladesh
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-hero-foreground/30">
            © {new Date().getFullYear()} Code Next IT. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 text-primary" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
