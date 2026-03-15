import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  {
    label: "Paróquia",
    href: "/historia", // Default link if clicked directly
    children: [
      { label: "História", href: "/historia" },
      { label: "Capelas e Setores", href: "/historia#capelas" },
      { label: "Padres e Diáconos", href: "/historia#clero" },
      { label: "Secretaria", href: "/contato" },
    ],
  },
  {
    label: "Agenda",
    href: "/agenda",
    children: [
      { label: "Horários de Missa", href: "/agenda#missas" },
      { label: "Eventos", href: "/agenda#eventos" },
      { label: "Via Sacra", href: "/agenda#via-sacra" },
    ],
  },
  {
    label: "Sacramentos",
    href: "/sacramentos",
    children: [
      { label: "Batismo", href: "/sacramentos#batismo" },
      { label: "Confissão", href: "/sacramentos#confissao" },
      { label: "Eucaristia", href: "/sacramentos#eucaristia" },
      { label: "Crisma", href: "/sacramentos#crisma" },
      { label: "Matrimônio", href: "/sacramentos#matrimonio" },
    ],
  },
  {
    label: "Pastorais",
    href: "/pastorais",
    children: [
      { label: "RCC", href: "/pastorais#rcc" },
      { label: "TLC", href: "/pastorais#tlc" },
      { label: "Terço dos Homens", href: "/pastorais#terco" },
      { label: "Catequese", href: "/pastorais#catequese" },
      { label: "PASCOM", href: "/pastorais#pascom" },
      { label: "Liturgia", href: "/pastorais#liturgia" },
      { label: "Coral", href: "/pastorais#coral" },
    ],
  },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 overflow-hidden rounded-full bg-white shadow-sm border border-secondary/20 p-1 transition-transform group-hover:scale-105">
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="Paróquia Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback if logo is missing
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="%23D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 7L7 17M7 7l10 10"/></svg>';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "font-display font-bold leading-tight transition-colors",
                isScrolled ? "text-primary text-xl" : "text-white text-xl drop-shadow-md"
              )}>
                Nossa Senhora Aparecida
              </span>
              <span className={cn(
                "text-xs uppercase tracking-wider font-semibold transition-colors",
                isScrolled ? "text-secondary" : "text-secondary drop-shadow-md"
              )}>
                Sertãozinho - SP
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 rounded-full font-medium transition-all",
                    isScrolled 
                      ? "text-foreground hover:bg-primary/5 hover:text-primary" 
                      : "text-white hover:bg-white/10 drop-shadow-md"
                  )}
                >
                  {item.label}
                  <ChevronDown className="w-4 h-4 opacity-70" />
                </Link>

                <AnimatePresence>
                  {activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-border/50 overflow-hidden py-2"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-5 py-2.5 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors font-medium"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            
            <Link
              href="/contato"
              className={cn(
                "ml-4 px-6 py-2 rounded-full font-semibold transition-all border-2",
                isScrolled
                  ? "border-secondary text-secondary hover:bg-secondary hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-primary"
              )}
            >
              Contato
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={cn("w-6 h-6", isScrolled ? "text-primary" : "text-white")} />
            ) : (
              <Menu className={cn("w-6 h-6", isScrolled ? "text-primary" : "text-white")} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="space-y-1">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                    className="flex justify-between items-center w-full px-4 py-3 text-left font-semibold text-primary rounded-lg hover:bg-primary/5"
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 transition-transform",
                        activeDropdown === item.label && "rotate-180"
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-8 space-y-1 overflow-hidden"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block py-2 text-sm text-foreground/80 hover:text-primary"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="pt-4 pb-2 px-4">
                <Link
                  href="/contato"
                  className="block w-full text-center px-6 py-3 bg-secondary text-white font-semibold rounded-lg shadow-md"
                >
                  Contato
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
