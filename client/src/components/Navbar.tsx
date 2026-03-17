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
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300">
          <img
            src="https://private-us-east-1.manuscdn.com/sessionFile/kbuCeaZfrgJv7ecTDWFekd/sandbox/96UDgFpgJy05Lzp9RGvltf_1771113026600_na1fn_bWFyaW5lLWNhbnZhcy1sb2dv.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva2J1Q2VhWmZyZ0p2N2VjVERXRmVrZC9zYW5kYm94Lzk2VURnRnBnSnkwNUx6cDlSR3ZsdGZfMTc3MTExMzAyNjYwMF9uYTFmbl9iV0Z5YVc1bExXTmhiblpoY3kxc2IyZHYucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=uj-rtqRvh-Mwg3HeOI3bufCtOLvQD1y4dEnH6hqHNFqpV6yKAA4ooNRqz6PoXkIcqMg7AhC-aAEeKBmq9OHClwlPn5Xo2KDvsW3fyUlYdpf0PY2vRIHai4R9bS8zRjo-Zq93SCY69l3JmcBXKC7so2HMU2rVP5jYoUFswv3EO7akq9LkJe4LC5Fr-sxD1ToCQndCFog-ZEX5nr7aLvfDXd09D0Cgx9FNag1x4KgkTYw-iKx2r2UMzfSpOJggfSu1iej43z2SeB5jRRrwAEPG18P69D5mn8EbFZ0BI6u1dN8IQ7b43MmtDkfOeTqjH8NXtRIdyp8dNY8L4hQeHfTjBw__"
            alt="Marine Canvas Florida Logo"
            className="h-16 w-auto md:h-20 lg:h-24"
          />
          <div className="hidden sm:flex flex-col">
            <span className="font-bold text-lg md:text-xl text-primary leading-none">Marine Canvas</span>
            <span className="font-bold text-sm md:text-base text-secondary">FLORIDA</span>
          </div>
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
