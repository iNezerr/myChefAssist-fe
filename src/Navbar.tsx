import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

type Props = {};

const NavItems = [
  { id: 1, text: 'Search', link: '/' },
  { id: 2, text: 'My Recipes', link: '/my-recipes' },
  { id: 3, text: 'About', link: '/about' },
];

const Navbar: React.FC<Props> = (_props: Props) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <h1 className="text-white font-bold text-xl">myChefAssist</h1>
        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
            aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
            aria-controls="mobile-menu"
          >
            {/* Hamburger Menu Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <ul className="hidden lg:flex space-x-6">
          {NavItems.map((item) => (
            <li key={item.id} className="text-grey-300 hover:text-white">
              <NavLink to={item.link}>{item.text}</NavLink>
            </li>
          ))}
        </ul>
        <ul className="hidden lg:flex space-x-4">
          <li className="text-gray-300 hover:text-white">Account: Coming soon</li>
        </ul>
      </div>
      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        id="mobile-menu"
        className={`lg:hidden menu-transition ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
          } overflow-hidden bg-gray-800 text-white transition-all duration-300 ease-in-out`}
      >
        <ul className="px-4 py-2 space-y-2">
          {NavItems.map((item) => (
            <li key={item.id} className="text-grey-300 hover:text-white">
              <NavLink to={item.link} onClick={() => setMobileMenuOpen(false)}>
                {item.text}
              </NavLink>
            </li>
          ))}
          {/* Mobile Sign In/Sign Up Links */}
          <div className="mt-4 text-gray-400">
            Account : Coming soon
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
