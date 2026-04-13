import { Phone, Mail, MapPin, Heart, Globe, Facebook, Linkedin, Twitter, Instagram, Youtube, ArrowUpRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient top border */}
      <div className="h-1 bg-gradient-to-r from-primary via-primary-glow to-primary" />

      {/* Newsletter CTA strip */}
      <div className="gradient-hero relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary-glow/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
        </div>

        <div className="container relative">
          <div className="py-14 flex flex-col lg:flex-row items-center justify-between gap-8 border-b border-hero-foreground/10">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-hero-foreground">
                Ready to <span className="gradient-text">Transform</span> Your Business?
              </h3>
              <p className="text-hero-foreground/50 mt-2">Subscribe to our newsletter for tips, updates, and exclusive offers.</p>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); setEmail(""); }} className="flex gap-2 w-full lg:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 rounded-xl bg-hero-foreground/5 border-hero-foreground/10 text-hero-foreground placeholder:text-hero-foreground/30 min-w-[240px]"
              />
              <Button type="submit" className="h-12 px-6 rounded-xl gap-2">
                <Send className="w-4 h-4" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="gradient-hero text-hero-foreground pt-14 pb-8 relative">
        <div className="container relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12">
            {/* Brand */}
            <div className="lg:col-span-4">
              <img
                src="https://codenextit.com/assets/img/cnits-logo-main.png"
                alt="Code Next IT"
                className="h-10 brightness-0 invert mb-5"
              />
              <p className="text-sm text-hero-foreground/50 leading-relaxed max-w-xs">
                Your trusted local technology partner in Bangladesh. Helping businesses grow online with modern web solutions since 2021.
              </p>
              {/* Social */}
              <div className="flex items-center gap-2 mt-6">
                {[
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Youtube, href: "#", label: "YouTube" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-hero-foreground/5 border border-hero-foreground/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <social.icon className="w-4 h-4 text-hero-foreground/50 group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-2">
              <h4 className="font-bold text-hero-foreground mb-5 text-sm uppercase tracking-wider flex items-center gap-2">
                <span className="w-8 h-0.5 bg-primary rounded-full" />
                Services
              </h4>
              <ul className="space-y-3 text-sm text-hero-foreground/50">
                {["Web Design", "E-Commerce", "SEO Services", "Software Dev", "UI/UX Design", "Graphics Design"].map((s) => (
                  <li key={s}>
                    <a href="#services" className="hover:text-primary transition-colors duration-200 flex items-center gap-2 group">
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="font-bold text-hero-foreground mb-5 text-sm uppercase tracking-wider flex items-center gap-2">
                <span className="w-8 h-0.5 bg-primary-glow rounded-full" />
                Company
              </h4>
              <ul className="space-y-3 text-sm text-hero-foreground/50">
                {[
                  { l: "Home", h: "#home" },
                  { l: "About Us", h: "#about" },
                  { l: "Portfolio", h: "#portfolio" },
                  { l: "Pricing", h: "#pricing" },
                  { l: "Career", h: "#contact" },
                  { l: "Contact", h: "#contact" },
                ].map((item) => (
                  <li key={item.l}>
                    <a href={item.h} className="hover:text-primary transition-colors duration-200 flex items-center gap-2 group">
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                      {item.l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-4">
              <h4 className="font-bold text-hero-foreground mb-5 text-sm uppercase tracking-wider flex items-center gap-2">
                <span className="w-8 h-0.5 bg-primary rounded-full" />
                Get in Touch
              </h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="tel:+8801833925304" className="flex items-center gap-3 text-hero-foreground/50 hover:text-hero-foreground transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary-glow/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary-glow/20 transition-all">
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
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-glow/20 to-primary/10 flex items-center justify-center group-hover:from-primary-glow/30 group-hover:to-primary/20 transition-all">
                      <Mail className="w-4 h-4 text-primary-glow" />
                    </div>
                    <p className="text-hero-foreground/70 font-medium">info@codenextit.com</p>
                  </a>
                </li>
                <li className="flex items-center gap-3 text-hero-foreground/50">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary-glow/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-hero-foreground/70 font-medium">Dhaka, Bangladesh</p>
                </li>
                <li className="flex items-center gap-3 text-hero-foreground/50">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-glow/20 to-primary/10 flex items-center justify-center">
                    <Globe className="w-4 h-4 text-primary-glow" />
                  </div>
                  <a href="https://codenextit.com" target="_blank" rel="noopener noreferrer" className="text-hero-foreground/70 font-medium hover:text-primary transition-colors">codenextit.com</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-hero-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-hero-foreground/30 flex items-center gap-1">
              © {new Date().getFullYear()} Code Next IT Solutions. Made with
              <Heart className="w-3.5 h-3.5 text-primary fill-primary inline mx-0.5" />
              in Bangladesh
            </p>
            <div className="flex items-center gap-6 text-xs text-hero-foreground/30">
              <a href="#" className="hover:text-hero-foreground/60 transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-hero-foreground/60 transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-hero-foreground/60 transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
