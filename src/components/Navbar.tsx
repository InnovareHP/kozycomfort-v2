import * as React from "react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export default function Navbar() {
  return (
    <nav className="border-b bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between w-full">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                SMW
              </div>
              <span className="font-semibold text-lg text-foreground hidden sm:block">
                SMW Care Services
              </span>
            </a>
          </div>

          {/* Navigation items on the right */}
          <NavigationMenu className="max-w-full justify-end">
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#about"
                  className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
                >
                  About Us
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#services"
                  className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
                >
                  Our Services
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#home"
                  className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
                >
                  Our Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#contact"
                  className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
                >
                  Contact Us
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#careers"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-blue-600 text-white hover:bg-blue-700"
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
  )
}

