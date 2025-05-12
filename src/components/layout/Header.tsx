"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {usePathname} from "next/navigation";

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

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <span className="text-primary font-bold text-xl cursor-pointer">AutoRental</span>
              </Link>
            </div>
            <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/">
                <span className={`${isActive("/") ? "border-primary text-primary" : "border-transparent text-neutral-600 hover:border-neutral-300 hover:text-neutral-800"} border-b-2 px-1 pt-1 inline-flex items-center text-sm font-medium`}>
                  Home
                </span>
              </Link>
              <Link href="/cars">
                <span className={`${isActive("/cars") ? "border-primary text-primary" : "border-transparent text-neutral-600 hover:border-neutral-300 hover:text-neutral-800"} border-b-2 px-1 pt-1 inline-flex items-center text-sm font-medium`}>
                  Cars
                </span>
              </Link>
              <Link href="/locations">
                <span className={`${isActive("/locations") ? "border-primary text-primary" : "border-transparent text-neutral-600 hover:border-neutral-300 hover:text-neutral-800"} border-b-2 px-1 pt-1 inline-flex items-center text-sm font-medium`}>
                  Locations
                </span>
              </Link>
              <Link href="/deals">
                <span className={`${isActive("/deals") ? "border-primary text-primary" : "border-transparent text-neutral-600 hover:border-neutral-300 hover:text-neutral-800"} border-b-2 px-1 pt-1 inline-flex items-center text-sm font-medium`}>
                  Deals
                </span>
              </Link>
            </nav>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button variant="outline" className="ml-3">
              <Link href="/cars">
                <span className="text-neutral-600 hover:text-neutral-800 text-sm font-medium">
                  Browse Cars
                </span>
              </Link>
            </Button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              id="mobile-menu-button"
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-600 hover:text-neutral-800 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link href="/">
              <span
                className={`${isActive("/") ? "bg-primary text-white" : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-800"} block pl-3 pr-4 py-2 text-base font-medium`}
                onClick={closeMenu}
              >
                Home
              </span>
            </Link>
            <Link href="/cars">
              <span
                className={`${isActive("/cars") ? "bg-primary text-white" : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-800"} block pl-3 pr-4 py-2 text-base font-medium`}
                onClick={closeMenu}
              >
                Cars
              </span>
            </Link>
            <Link href="/locations">
              <span
                className={`${isActive("/locations") ? "bg-primary text-white" : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-800"} block pl-3 pr-4 py-2 text-base font-medium`}
                onClick={closeMenu}
              >
                Locations
              </span>
            </Link>
            <Link href="/deals">
              <span
                className={`${isActive("/deals") ? "bg-primary text-white" : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-800"} block pl-3 pr-4 py-2 text-base font-medium`}
                onClick={closeMenu}
              >
                Deals
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
