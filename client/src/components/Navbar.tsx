import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClasses = `fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300 ${
    scrolled ? 'bg-background shadow-md' : 'bg-transparent'
  }`;

  const linkBaseClasses = "font-medium text-lg relative group focus:outline-none focus:ring-2 focus:ring-accent focus:rounded";
  const linkHoverClasses = "text-text hover:text-primary";
  const linkActiveClasses = "text-primary";

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
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300">
          <img 
            src="https://private-us-east-1.manuscdn.com/sessionFile/kbuCeaZfrgJv7ecTDWFekd/sandbox/96UDgFpgJy05Lzp9RGvltf_1771113026600_na1fn_bWFyaW5lLWNhbnZhcy1sb2dv.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva2J1Q2VhWmZyZ0p2N2VjVERXRmVrZC9zYW5kYm94Lzk2VURnRnBnSnkwNUx6cDlSR3ZsdGZfMTc3MTExMzAyNjYwMF9uYTFmbl9iV0Z5YVc1bExXTmhiblpoY3kxc2IyZHYucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=uj-rtqRvh-Mwg3HeOI3bufCtOLvQD1y4dEnH6hqHNFqpV6yKAA4ooNRqz6PoXkIcqMg7AhC-aAEeKBmq9OHClwlPn5Xo2KDvsW3fyUlYdpf0PY2vRIHai4R9bS8zRjo-Zq93SCY69l3JmcBXKC7so2HMU2rVP5jYoUFswv3EO7akq9LkJe4LC5Fr-sxD1ToCQndCFog-ZEX5nr7aLvfDXd09D0Cgx9FNag1x4KgkTYw-iKx2r2UMzfSpOJggfSu1iej43z2SeB5jRRrwAEPG18P69D5mn8EbFZ0BI6u1dN8IQ7b43MmtDkfOeTqjH8NXtRIdyp8dNY8L4hQeHfTjBw__"
            alt="Marine Canvas Florida Logo"
            className="h-12 w-auto"
          />
          <span className="hidden sm:inline font-bold text-lg text-primary">Marine Canvas Florida</span>
        </Link>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-8 lg:space-x-12 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`${linkBaseClasses} ${linkHoverClasses}`}
            >
              {link.label}
              <span className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" aria-hidden="true"></span>
            </Link>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-6 p-2 rounded-full bg-primary text-background hover:bg-brand-nautical-red transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-primary text-background hover:bg-brand-nautical-red transition-colors duration-300"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-primary focus:outline-none focus:ring-2 focus:ring-accent p-2 rounded-md"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
