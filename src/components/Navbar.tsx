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
  return (
    <nav className="border-b bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-5 md:py-6">
        <div className="flex items-center justify-between w-full">
          {/* Logo on the left */}
          <div className="shrink-0">
            <a
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              {/* Replace this placeholder with your actual logo */}
              <img
                src="/images/logo/logo-transparent.png"
                alt="Kozy Komfort Logo"
                className="h-14 md:h-16 w-auto"
              />
            </a>
          </div>

          {/* Navigation items on the right */}
          <NavigationMenu className="max-w-full justify-end">
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-base md:text-lg h-12 px-5"
                  )}
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#about"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-base md:text-lg h-12 px-5"
                  )}
                >
                  About Us
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#services"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-base md:text-lg h-12 px-5"
                  )}
                >
                  Our Services
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#home"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-base md:text-lg h-12 px-5"
                  )}
                >
                  Our Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#contact"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-base md:text-lg h-12 px-5"
                  )}
                >
                  Contact Us
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#careers"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-blue-600 text-white hover:bg-blue-700 text-base md:text-lg h-12 px-5"
                  )}
                >
                  CAREERS
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
}
