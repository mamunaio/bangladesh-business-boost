import { Phone, Mail, MapPin, Heart, Globe, Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Top wave/gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="gradient-hero text-hero-foreground pt-20 pb-8 relative">
        {/* Background decorations */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary-glow/5 rounded-full blur-3xl" />

        <div className="container relative">
          {/* Main footer grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12">
            {/* Brand column */}
            <div className="lg:col-span-4">
              <img
                src="https://codenextit.com/assets/img/cnits-logo-main.png"
                alt="Code Next IT"
                className="h-10 brightness-0 invert mb-5"
              />
              <p className="text-sm text-hero-foreground/50 leading-relaxed max-w-xs">
                Your trusted local technology partner in Bangladesh. Helping businesses grow online with modern web solutions since 2021.
              </p>
              {/* Social links */}
              <div className="flex items-center gap-3 mt-6">
                {[
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Globe, href: "https://codenextit.com", label: "Website" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-hero-foreground/5 border border-hero-foreground/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 group"
                  >
                    <social.icon className="w-4 h-4 text-hero-foreground/50 group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-2">
              <h4 className="font-bold text-hero-foreground mb-5 text-sm uppercase tracking-wider">Services</h4>
              <ul className="space-y-3 text-sm text-hero-foreground/50">
                {["Web Design", "E-Commerce", "SEO Services", "Software Dev", "UI/UX Design"].map((s) => (
                  <li key={s}>
                    <a href="#services" className="hover:text-primary transition-colors duration-200 flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="font-bold text-hero-foreground mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-3 text-sm text-hero-foreground/50">
                {[
                  { l: "Home", h: "#home" },
                  { l: "Portfolio", h: "#portfolio" },
                  { l: "Pricing", h: "#pricing" },
                  { l: "About Us", h: "#why-us" },
                  { l: "Contact", h: "#contact" },
                ].map((item) => (
                  <li key={item.l}>
                    <a href={item.h} className="hover:text-primary transition-colors duration-200 flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                      {item.l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-4">
              <h4 className="font-bold text-hero-foreground mb-5 text-sm uppercase tracking-wider">Get in Touch</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="tel:+8801833925304" className="flex items-center gap-3 text-hero-foreground/50 hover:text-hero-foreground transition-colors group">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-hero-foreground/70 font-medium">+880 1833-925304</p>
                      <p className="text-xs text-hero-foreground/30">Mon-Sat, 9am-9pm</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@codenextit.com" className="flex items-center gap-3 text-hero-foreground/50 hover:text-hero-foreground transition-colors group">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-hero-foreground/70 font-medium">info@codenextit.com</p>
                  </a>
                </li>
                <li className="flex items-center gap-3 text-hero-foreground/50">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-hero-foreground/70 font-medium">Dhaka, Bangladesh</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-hero-foreground/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-hero-foreground/30 flex items-center gap-1">
              © {new Date().getFullYear()} Code Next IT. Made with
              <Heart className="w-3.5 h-3.5 text-primary fill-primary inline" />
              in Bangladesh
            </p>
            <div className="flex items-center gap-6 text-xs text-hero-foreground/30">
              <a href="#" className="hover:text-hero-foreground/60 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-hero-foreground/60 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
