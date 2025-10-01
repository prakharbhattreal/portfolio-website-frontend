"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <header
      className="flex items-center justify-between px-4 py-3 sticky top-0 z-50
    border-b border-black/10 dark:border-white/10
    bg-white/75 dark:bg-black/75
    backdrop-blur-md backdrop-saturate-150
"
    >
      {/* Left: Sidebar Trigger */}
      <div className="flex items-center justify-center ">
        <SidebarTrigger className="mr-2 cursor-pointer" />
        <img
          src="/logo.png" // replace with your logo path
          alt="Logo"
          className="h-6 w-6 md:hidden"
        />
      </div>

      {/* Right: Theme Toggle */}
      <div className="flex items-center gap-2">
        <ThemeToggle />
      </div>
    </header>
  );
}
