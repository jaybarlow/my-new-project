'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg'
          : 'bg-gray-900/80 backdrop-blur-sm'
      }`}
    >
      <nav
        className="container mx-auto px-6 py-4 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-300 transition-all"
          aria-label="MyProject home"
        >
          MyProject
        </Link>
        <div className="flex gap-8" role="menubar">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              role="menuitem"
              className={`relative font-medium transition-all duration-300 group ${
                isActive(link.href)
                  ? 'text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
              aria-current={isActive(link.href) ? 'page' : undefined}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 ${
                  isActive(link.href)
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
