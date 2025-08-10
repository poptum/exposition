'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <>
      {/* Desktop Menu */}
      <nav className="hidden md:block w-full bg-white shadow-lg fixed top-0 z-50">
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                <Image src="/logo.png" alt="Logo" width={60} height={60} />
              </Link>
            </div>

            {/* Desktop Menu Items */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
              onClick={() => {
                window.open('https://wa.me/5531975039639', 'Olá, gostaria de agendar uma consulta com a Bella');
              }}
              >
                Agende uma consulta
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <nav className="md:hidden w-full bg-white shadow-lg fixed top-0 z-50">
        <div className="px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold text-blue-600">
                Logo
              </Link>
            </div>

            {/* Hamburger Button */}
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close Icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={closeMenu}
        ></div>

        {/* Menu Panel */}
        <div
          className={`absolute top-0 left-0 w-[70%] h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <Link
                href="/"
                className="text-xl font-bold text-blue-600"
                onClick={closeMenu}
              >
                Logo
              </Link>
              <button
                onClick={closeMenu}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 px-6 py-4">
              <div className="space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="block text-gray-700 hover:text-blue-600 py-3 px-4 rounded-lg text-lg font-medium transition-colors duration-200 hover:bg-gray-50"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Menu Footer */}
            <div className="p-6 border-t border-gray-200">
              <button className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200"
              onClick={() => {
                window.open('https://wa.me/5531975039639', 'Olá, gostaria de agendar uma consulta com a Bella');
              }}
              >
                Agende uma consulta
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from being hidden behind fixed menu */}
      <div className="h-16"></div>
    </>
  );
} 