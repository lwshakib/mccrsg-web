"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { navItems } from "@/components/nav-items";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import scoutLogo from "../../public/logo.png";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 0);
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed w-full top-0 z-40 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }
      ${
        pathname !== "/"
          ? // Not home: always solid bg, text dark in light, light in dark
            "bg-white text-gray-900 dark:bg-background dark:text-white shadow-lg"
          : // Home: only scrolled gets bg, otherwise transparent
          isScrolled
          ? "backdrop-blur-md shadow-lg bg-white/95 dark:bg-background/95"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <>
                <div className="w-10 h-10">
                  <Image
                    src={scoutLogo}
                    width={40}
                    height={40}
                    alt="স্কাউট লোগো"
                  />
                </div>
                <span
                  className={`font-semibold text-xl ml-3 ${
                    pathname !== "/"
                      ? "text-gray-900 dark:text-white"
                      : isScrolled
                      ? "text-gray-900 dark:text-white"
                      : "text-white dark:text-white"
                  }`}
                >
                এমসি রোভার স্কাউট গ্রুপ
                </span>
              </>
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <nav className="flex items-center space-x-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className={`px-2 py-2 text-sm font-medium transition-colors ${
                    pathname !== "/"
                      ? "text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-100"
                      : isScrolled
                      ? "text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-100"
                      : "text-white hover:text-gray-100 dark:text-white dark:hover:text-gray-100"
                  }`}
                  onClick={
                    item.url.includes("#")
                      ? (e) => {
                          if (pathname === "/") {
                            handleSmoothScroll(e, item.id);
                          }
                        }
                      : undefined
                  }
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            {/* Theme and Language Controls */}
            <div className="flex items-center space-x-4 ml-4">
              <ModeToggle />
            </div>
          </div>
          {/* Mobile Menu Button and Controls */}
          <div className="flex lg:hidden items-center space-x-2">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className={`p-2 rounded-full hover:bg-opacity-20 cursor-pointer focus:outline-none focus:ring-2 transition-all duration-200 ${
                    pathname !== "/"
                      ? "text-gray-900 hover:bg-gray-200/20 dark:text-white dark:hover:bg-white/20"
                      : isScrolled
                      ? "text-gray-900 hover:bg-gray-200/20 dark:text-white dark:hover:bg-white/20"
                      : "text-white hover:bg-white/20 dark:text-white dark:hover:bg-white/20"
                  }`}
                  aria-label="মেনু টগল করুন"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-4/5 max-w-sm bg-background border-l border-border"
              >
                <div className="flex flex-col h-full pt-20 pb-6 px-6 overflow-y-auto">
                  <nav className="flex-1 space-y-4">
                    {navItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.url}
                        className="block py-3 text-lg font-medium border-b border-border text-foreground hover:text-muted-foreground transition-colors"
                        onClick={
                          item.id === "about-us" || item.id === "join-us"
                            ? undefined
                            : (e) => {
                                if (pathname === "/") {
                                  handleSmoothScroll(e, item.id);
                                }
                                // If not on home, let anchor handle navigation
                              }
                        }
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                  <div className="mt-8 pt-6 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">থিম</span>

                      <ModeToggle />
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
