"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Code } from "lucide-react";
import { data } from "@/lib/data";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "next-themes";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme } = useTheme();

  // Theme-specific styling
  const getThemeSpecificStyles = () => {
    switch (theme) {
      case "cyberpunk":
        return {
          linkHover: "hover:text-fuchsia-400",
          activeLink: "text-fuchsia-500",
          activeBorder: "bg-fuchsia-500",
          mobileNav: "bg-gray-900 neon-glow",
        };
      case "fc25":
        return {
          linkHover: "hover:text-amber-400",
          activeLink: "text-amber-500",
          activeBorder: "bg-amber-500",
          mobileNav: "bg-gray-900 retro-texture",
        };
      case "beach":
        return {
          linkHover: "hover:text-cyan-600",
          activeLink: "text-cyan-600",
          activeBorder: "bg-cyan-600",
          mobileNav: "bg-cyan-100 water-pattern",
        };
      case "light":
        return {
          linkHover: "hover:text-indigo-600",
          activeLink: "text-indigo-600",
          activeBorder: "bg-indigo-600",
          mobileNav: "bg-white",
        };
      case "dark":
      default:
        return {
          linkHover: "hover:text-indigo-400",
          activeLink: "text-indigo-500",
          activeBorder: "bg-indigo-500",
          mobileNav: "bg-gray-900",
        };
    }
  };

  const styles = getThemeSpecificStyles();

  return (
    <header className="py-8 xl:py-12 text-white absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            {data.name.split(" ")[0]}
            <span className={styles.activeLink}>.</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-8">
          <nav className="flex items-center space-x-8">
            {navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-base font-medium transition-colors duration-300 ${
                  styles.linkHover
                } ${
                  pathname === link.href ? styles.activeLink : "text-foreground"
                }`}
              >
                {link.name}
                {pathname === link.href && (
                  <span
                    className={`absolute -bottom-1 left-0 w-full h-0.5 ${styles.activeBorder}`}
                  ></span>
                )}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="xl:hidden flex">
          <button
            type="button"
            className={`inline-flex items-center justify-center p-2 text-foreground ${styles.linkHover} transition-colors`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/70">
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`fixed inset-y-0 right-0 w-full max-w-xs shadow-xl p-6 ${styles.mobileNav}`}
          >
            <div className="flex items-center justify-between mb-8">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <h2 className="text-2xl font-bold text-foreground">
                  {data.name.split(" ")[0]}
                  <span className={styles.activeLink}>.</span>
                </h2>
              </Link>
              <button
                type="button"
                className={`p-2 text-foreground ${styles.linkHover}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="space-y-6">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block text-lg font-medium ${
                    pathname === link.href
                      ? styles.activeLink
                      : `text-foreground ${styles.linkHover}`
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-10 pt-6 border-t border-gray-700">
              <div className="flex items-center">
                <ThemeToggle />
                <span className="ml-4 text-sm text-muted-foreground">
                  Theme options
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </header>
  );
}
