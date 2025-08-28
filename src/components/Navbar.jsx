import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetTrigger, SheetContent } from './ui/sheet';

const NavLink = ({ href, text, active }) => {
  return (
    <a 
      href={href} 
      className={`relative font-medium text-sm hover:text-[var(--primary)] transition-colors ${active ? 'active-nav-link' : ''}`}
    >
      {text}
    </a>
  );
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll events for glass effect and active section
  useEffect(() => {
    const handleScroll = () => {
      // Add glass effect when scrolled
      setIsScrolled(window.scrollY > 50);

      // Special case for Home section (near top of page)
      if (window.scrollY < 200) {
        setActiveSection('home');
        return;
      }

      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'contact'];
      let closestSection = null;
      let minDistance = Infinity;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top); // Distance from viewport top
          // Consider sections that are visible or near the viewport
          if (rect.top <= 200 && rect.bottom >= 0 && distance < minDistance) {
            minDistance = distance;
            closestSection = section;
          }
        }
      });

      if (closestSection) {
        setActiveSection(closestSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "/#home", text: "Home" },
    { href: "/#about", text: "About" },
    { href: "/#projects", text: "Projects" },
    { href: "/#contact", text: "Contact" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'glass' : ''}`}>
      <nav className="w-full container mx-auto px-6 py-4 sm:px-8 md:px-16 lg:px-20 xl:px-[88px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-xl md:text-2xl font-bold text-primary">
              Port<span className="font-thin">folio</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <NavLink 
                key={link.text} 
                href={link.href} 
                text={link.text} 
                active={activeSection === link.href.substring(2)}
              />
            ))}
          </nav>

          {/* Mobile Navigation Trigger */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu size={24} className="" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[var(--background)/0.95] glass border-[var(--muted)] px-6">
              <div className="flex flex-col gap-6 mt-12">
                {navLinks.map(link => (
                  <a 
                    key={link.text} 
                    href={link.href} 
                    className={`text-lg ${
                      activeSection === link.href.substring(2) 
                        ? 'text-[var(--primary)] font-medium' 
                        : 'text-[var(--foreground)]'
                    } hover:text-[var(--primary)] transition-colors`}
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};