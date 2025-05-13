
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";

interface NavLink {
  name: string;
  href: string;
  active?: boolean;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "#home", active: true },
  { name: "About", href: "#about" },
  { name: "Resume", href: "#resume" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" }
];

export function NavBar() {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <a href="#home" className="text-lg font-bold">
          Krishnansh <span className="text-primary">Vasaniya</span>
        </a>

        {/* Mobile menu button */}
        {isMobile ? (
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        ) : (
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-md text-sm hover:bg-accent hover:text-accent-foreground transition-colors ${
                  link.active ? "text-primary font-medium" : ""
                }`}
              >
                {link.name}
              </a>
            ))}
            <ThemeToggle />
          </nav>
        )}
      </div>
      
      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden p-4 bg-background border-b animate-slide-in">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors ${
                  link.active ? "text-primary font-medium" : ""
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
