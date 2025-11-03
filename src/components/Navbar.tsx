"use client";

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Our Services" },
    { href: "#home", label: "Our Facility" },
    { href: "/contact", label: "Contact Us" },
    { href: "/careers", label: "CAREERS", isButton: true },
  ];

  return (
    <nav className="border-b bg-white fixed top-0 left-0 right-0 w-full z-50 shadow-sm">
      <div className="container mx-auto px-4 py-5 md:py-6">
        <div className="flex items-center justify-between w-full">
          {/* Logo on the left */}
          <div className="shrink-0">
            <a
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              onClick={closeMobileMenu}
            >
              <img
                src="/images/logo/logo-transparent.png"
                alt="Kozy Komfort Logo"
                className="h-[67px] md:h-[77px] w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation - hidden on mobile/tablet */}
          <NavigationMenu className="hidden lg:flex max-w-full justify-end">
            <NavigationMenuList className="gap-2">
              {navLinks.map((link, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    href={link.href}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      link.isButton ? "text-white" : "bg-transparent",
                      "text-base md:text-lg h-12 px-5"
                    )}
                    style={link.isButton ? { backgroundColor: "#BE1C2B" } : {}}
                    onMouseEnter={
                      link.isButton
                        ? (e) => {
                            e.currentTarget.style.backgroundColor = "#9A1623";
                          }
                        : undefined
                    }
                    onMouseLeave={
                      link.isButton
                        ? (e) => {
                            e.currentTarget.style.backgroundColor = "#BE1C2B";
                          }
                        : undefined
                    }
                    onFocus={
                      link.isButton
                        ? (e) => {
                            e.currentTarget.style.backgroundColor = "#9A1623";
                            e.currentTarget.style.outline = "2px solid white";
                            e.currentTarget.style.outlineOffset = "2px";
                          }
                        : undefined
                    }
                    onBlur={
                      link.isButton
                        ? (e) => {
                            e.currentTarget.style.backgroundColor = "#BE1C2B";
                            e.currentTarget.style.outline = "";
                            e.currentTarget.style.outlineOffset = "";
                          }
                        : undefined
                    }
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Hamburger Menu Button - visible on mobile/tablet */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1.5 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={cn(
                "block w-6 h-0.5 bg-gray-700 transition-all duration-300",
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              )}
            />
            <span
              className={cn(
                "block w-6 h-0.5 bg-gray-700 transition-all duration-300",
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              )}
            />
            <span
              className={cn(
                "block w-6 h-0.5 bg-gray-700 transition-all duration-300",
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              )}
            />
          </button>
        </div>

        {/* Mobile Menu - slides down from top */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="flex flex-col py-4 space-y-2 border-t mt-2">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={closeMobileMenu}
                className={cn(
                  "block px-4 py-3 rounded-md text-base font-medium transition-colors",
                  link.isButton
                    ? "text-white text-center"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                )}
                style={link.isButton ? { backgroundColor: "#BE1C2B" } : {}}
                onMouseEnter={
                  link.isButton
                    ? (e) => {
                        e.currentTarget.style.backgroundColor = "#9A1623";
                      }
                    : undefined
                }
                onMouseLeave={
                  link.isButton
                    ? (e) => {
                        e.currentTarget.style.backgroundColor = "#BE1C2B";
                      }
                    : undefined
                }
                onFocus={
                  link.isButton
                    ? (e) => {
                        e.currentTarget.style.backgroundColor = "#9A1623";
                        e.currentTarget.style.outline = "2px solid white";
                        e.currentTarget.style.outlineOffset = "2px";
                      }
                    : undefined
                }
                onBlur={
                  link.isButton
                    ? (e) => {
                        e.currentTarget.style.backgroundColor = "#BE1C2B";
                        e.currentTarget.style.outline = "";
                        e.currentTarget.style.outlineOffset = "";
                      }
                    : undefined
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
