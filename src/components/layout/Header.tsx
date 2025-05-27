"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return pathName === path;
  };
  const navItems = [
    { path: "/", name: "Home" },
    { path: "/cars", name: "Cars" },
    { path: "/locations", name: "Locations" },
  ];
  return (
    <header className="backdrop-blur-md bg-[rgba(21,24,27,0.8)] border-b border-gray-800 text-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex gap-8 items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <div className="flex items-center space-x-2 cursor-pointer group">
                  <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center text-white font-bold group-hover:from-gray-500 group-hover:to-gray-700 transition-all duration-300 shadow-md group-hover:shadow-lg group-active:scale-95">
                    C
                  </div>
                  <span className="text-xl font-bold text-gray-200 hover:text-white transition-colors duration-300">
                    CarRental
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link href={item.path} key={item.path}>
                  <div className="relative px-4 py-2 group">
                    <span
                      className={`relative z-10 ${
                        isActive(item.path)
                          ? "text-white font-medium"
                          : "text-gray-400 hover:text-white"
                      } transition-colors duration-300`}
                    >
                      {item.name}
                    </span>
                    {isActive(item.path) && (
                      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-full origin-left animate-underline"></div>
                    )}
                    <div
                      className={`absolute bottom-0 left-0 right-0 bg-white rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ${
                        isActive(item.path) ? "hidden" : ""
                      }`}
                    ></div>
                  </div>
                </Link>
              ))}
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => toggleMenu()}
              className="p-2 rounded-lg hover:bg-gray-800 focus:outline-none transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col items-center">
                <span
                  className={`block h-0.5 w-6 bg-gray-300 rounded-full transition-all duration-300 ${
                    isMenuOpen
                      ? "rotate-45 translate-y-1.5"
                      : "-translate-y-0.5"
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-gray-300 rounded-full mt-1.5 transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-gray-300 rounded-full mt-1.5 transition-all duration-300 ${
                    isMenuOpen
                      ? "-rotate-45 -translate-y-1.5"
                      : "translate-y-0.5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="pt-2 pb-3 space-y-1">
            <Link href="/">
              <span
                className={`${
                  isActive("/")
                    ? "bg-gray-800 text-white"
                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                } block pl-3 pr-4 py-2 text-base font-medium transition-colors duration-300`}
                onClick={closeMenu}
              >
                Home
              </span>
            </Link>
            <Link href="/cars">
              <span
                className={`${
                  isActive("/cars")
                    ? "bg-gray-800 text-white"
                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                } block pl-3 pr-4 py-2 text-base font-medium transition-colors duration-300`}
                onClick={closeMenu}
              >
                Cars
              </span>
            </Link>
            <Link href="/locations">
              <span
                className={`${
                  isActive("/locations")
                    ? "bg-gray-800 text-white"
                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                } block pl-3 pr-4 py-2 text-base font-medium transition-colors duration-300`}
                onClick={closeMenu}
              >
                Locations
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
