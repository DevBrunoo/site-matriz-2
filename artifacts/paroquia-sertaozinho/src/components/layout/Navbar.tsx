import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  {
    label: "Paróquia",
    href: "/historia",
    children: [
      { label: "História", href: "/historia" },
      { label: "Capelas e Setores", href: "/capelas" },
      { label: "Padres e Diáconos", href: "/padres" },
      { label: "Secretaria", href: "/secretaria" },
    ],
  },
  {
    label: "Agenda",
    href: "/agenda",
    children: [
      { label: "Horários de Missa", href: "/missas" },
      { label: "Eventos", href: "/eventos" },
      { label: "Via Sacra", href: "/via-sacra" },
    ],
  },
  {
    label: "Sacramentos",
    href: "/sacramentos",
    children: [
      { label: "Batismo", href: "/batismo" },
      { label: "Confissão", href: "/confissao" },
      { label: "Eucaristia", href: "/eucaristia" },
      { label: "Crisma", href: "/crisma" },
      { label: "Matrimônio", href: "/matrimonio" },
    ],
  },
  {
    label: "Pastorais",
    href: "/pastorais",
    children: [
      { label: "Associação do Rosário", href: "/associacao-do-rosario" },
      { label: "Pastoral Familiar", href: "/pastoral-familiar" },
      { label: "Grupo de Evangelização", href: "/grupo-de-evangelizacao" },
      { label: "Pastoral da Sobriedade", href: "/pastoral-da-sobriedade" },
      { label: "Pastoral do Dízimo", href: "/pastoral-do-dizimo" },
      { label: "Renovação Carismática", href: "/renovacao-carismatica" },
      { label: "TLC", href: "/tlc" },
      { label: "Catequese", href: "/catequese" },
    ],
  },
  {
    label: "Dízimo e Doações",
    href: "/dizimo",
    children: [],
  },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10">
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="Paróquia Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="%23D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 7L7 17M7 7l10 10"/></svg>';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-primary text-lg leading-tight">
                Nossa Senhora Aparecida
              </span>
              <span className="text-[10px] uppercase tracking-widest text-secondary font-medium">
                Sertãozinho - SP
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-secondary transition-colors py-8"
                >
                  {item.label}
                  {item.children.length > 0 && (
                    <ChevronDown className="w-3.5 h-3.5 opacity-50" />
                  )}
                </Link>

                {item.children.length > 0 && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-[100%] left-0 w-48 bg-white border border-gray-100 shadow-sm py-2 z-50"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-foreground hover:text-secondary hover:bg-gray-50 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            
            <Link
              href="/contato"
              className="text-sm font-medium text-foreground hover:text-secondary transition-colors py-8 relative after:absolute after:bottom-[30px] after:left-0 after:h-[1px] after:w-full after:bg-secondary after:scale-x-0 hover:after:scale-x-100 after:origin-bottom-left after:transition-transform"
            >
              Contato
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
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
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="space-y-1">
                  {item.children.length > 0 ? (
                    <>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                        className="flex justify-between items-center w-full px-4 py-3 text-left font-medium text-foreground"
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform opacity-50",
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
                            className="pl-8 space-y-1 overflow-hidden bg-gray-50"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="block py-2 text-sm text-foreground/80 hover:text-secondary"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 font-medium text-foreground hover:text-secondary transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 pb-2 px-4">
                <Link
                  href="/contato"
                  className="block w-full py-3 text-left font-medium text-secondary"
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
