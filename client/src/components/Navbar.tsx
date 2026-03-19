import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun, Menu, X, ChevronDown } from 'lucide-react';

const industrialSubLinks = [
  { href: '/industrial', label: 'Industrial Hub' },
  { href: '/industrial/clean-room', label: 'Softwall Cleanrooms' },
  { href: '/industrial/clean-room-containment', label: 'Data Center Containment' },
  { href: '/industrial/clean-room-equipment-covers', label: 'Equipment Covers' },
  { href: '/industrial/equipment-protection', label: 'Equipment Protection' },
  { href: '/industrial/shading-solutions', label: 'Shading Solutions' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [industrialOpen, setIndustrialOpen] = useState(false);
  const [mobileIndustrialOpen, setMobileIndustrialOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIndustrialOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navbarClasses = `fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300 ${
    scrolled ? 'bg-background shadow-md' : 'bg-transparent'
  }`;

  const linkBaseClasses =
    'font-medium text-lg relative group focus:outline-none focus:ring-2 focus:ring-accent focus:rounded';
  const linkHoverClasses = 'text-text hover:text-primary';

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/sailing-with-us', label: 'Sailing With Us' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center hover:opacity-80 transition-opacity duration-300">
          <img
            src="/images/logo-adriatic-lux.png"
            alt="Adriatic Lux | Marine Canvas Florida Logo"
            className="h-16 w-auto md:h-20 lg:h-24"
          />
        </Link>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-8 lg:space-x-12 items-center">
          {navLinks.map((link) => (
            <Link key={link.href} to={link.href} className={`${linkBaseClasses} ${linkHoverClasses}`}>
              {link.label}
              <span
                className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                aria-hidden="true"
              ></span>
            </Link>
          ))}

          {/* Industrial Dropdown (Desktop) */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setIndustrialOpen(true)}
            onMouseLeave={() => setIndustrialOpen(false)}
          >
            <button
              className={`${linkBaseClasses} ${linkHoverClasses} flex items-center gap-1`}
              aria-expanded={industrialOpen}
              aria-haspopup="true"
              onClick={() => setIndustrialOpen(!industrialOpen)}
            >
              Industrial
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${industrialOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
              <span
                className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                aria-hidden="true"
              ></span>
            </button>

            {industrialOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-xl py-2 z-50">
                {industrialSubLinks.map((sub) => (
                  <Link
                    key={sub.href}
                    to={sub.href}
                    onClick={() => setIndustrialOpen(false)}
                  >
                    <div className="px-4 py-2 text-sm font-medium text-text hover:text-primary hover:bg-primary/5 transition-colors duration-150 cursor-pointer">
                      {sub.label}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-6 p-2 rounded-full bg-primary text-background hover:bg-brand-nautical-red transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-primary text-background hover:bg-brand-nautical-red transition-colors duration-300"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-primary focus:outline-none focus:ring-2 focus:ring-accent p-2 rounded-md"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-text hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Industrial Accordion (Mobile) */}
            <div>
              <button
                className="flex items-center justify-between w-full text-text hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setMobileIndustrialOpen(!mobileIndustrialOpen)}
                aria-expanded={mobileIndustrialOpen}
              >
                <span>Industrial</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${mobileIndustrialOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
              {mobileIndustrialOpen && (
                <div className="mt-2 ml-4 flex flex-col space-y-3 border-l-2 border-primary/20 pl-4">
                  {industrialSubLinks.map((sub) => (
                    <Link
                      key={sub.href}
                      to={sub.href}
                      className="text-sm text-text hover:text-primary transition-colors duration-200"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileIndustrialOpen(false);
                      }}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
