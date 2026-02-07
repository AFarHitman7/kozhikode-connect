import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import calicutLogo from "@/assets/calicut-commons-logo.png";

const navLinks = [
  { href: "/", label: "Communities" },
  { href: "/events", label: "Events" },
  { href: "/food", label: "Food" },
  { href: "/archives", label: "Archives" },
  { href: "/manifesto", label: "Manifesto" },
];

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative">
      {/* Lattice pattern background */}
      <div className="lattice-pattern dot-pattern bg-muted">
        <div className="container py-5 md:py-7">
          <div className="flex items-center justify-between">
            {/* Logo & Brand */}
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src={calicutLogo} 
                alt="Calicut Commons — Malabar arch with community" 
                className="w-12 h-12 md:w-14 md:h-14 object-contain group-hover:scale-105 transition-transform duration-200"
              />
              <div>
                <h1 className="text-xl md:text-2xl font-display font-bold text-foreground leading-tight">
                  Calicut Commons
                </h1>
                <p className="text-xs md:text-sm tracking-widest uppercase text-primary font-medium">
                  Kozhikode • Est. 2026
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`nav-link font-medium ${
                    location.pathname === link.href ? "nav-link-active" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 -mr-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-6 pt-6 border-t border-border">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`text-lg font-medium py-2 ${
                      location.pathname === link.href 
                        ? "text-primary" 
                        : "text-foreground/80"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>
          )}
        </div>
      </div>
      
      {/* Bottom border — laterite stripe */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </header>
  );
}
