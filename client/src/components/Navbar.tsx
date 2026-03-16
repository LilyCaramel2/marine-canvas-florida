import { Link } from 'wouter';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/industrial', label: 'Industrial' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/sailing-with-us', label: 'Sailing With Us' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <nav>
      <ul>
        {navLinks.map(link => (
          <li key={link.label}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}