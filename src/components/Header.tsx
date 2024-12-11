import React, { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ darkMode, toggleDarkMode }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a
            href="#home"
            className="text-2xl font-bold text-gray-800 dark:text-white"
          >
            VS
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#skills" className="nav-link">
              Skills
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#experience" className="nav-link">
              Experience
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-white" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mt-4 flex flex-col items-center space-y-4 md:hidden">
            <a href="#about" className="nav-link" onClick={toggleMenu}>
              About
            </a>
            <a href="#skills" className="nav-link" onClick={toggleMenu}>
              Skills
            </a>
            <a href="#projects" className="nav-link" onClick={toggleMenu}>
              Projects
            </a>
            <a href="#experience" className="nav-link" onClick={toggleMenu}>
              Experience
            </a>
            <a href="#contact" className="nav-link" onClick={toggleMenu}>
              Contact
            </a>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-white" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
