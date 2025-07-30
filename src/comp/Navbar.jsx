import { useState, useEffect } from "react";

import { customScrollTo } from "../utils/customtoscroll";


export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed w-full text-white z-50 transition-all duration-300 ${
  scrolled ? "shadow-md backdrop-blur bg-gray-900/90" : "bg-gray-900"
}`}>

      <div className="w-full px-6 py-4">

        <div className="flex justify-between items-center">
          {/* Logó + név */}
          <a
            href="#hero"
            className="flex items-center space-x-2 text-white hover:text-yellow-200"
          >
              <img
                src="/perjesi-site-test/logo.png"
                alt="PD logó"
                className="h-20 w-20 mr-2"
             />
              <span className="font-bold text-xl">Dr. Perjési Dóra</span>

          </a>

          {/* Asztali menü */}
          <div className="hidden md:flex space-x-10">
            <a
  href="#hero"
  onClick={(e) => {
    e.preventDefault();
    customScrollTo("hero", 1000); // 1000ms = 1 sec scroll
  }}
  className="nav-link text-white hover:text-yellow-200 font-bold text-lg"
>
  Kezdőlap
</a>
            <a
  href="#rolam"
  onClick={(e) => {
    e.preventDefault();
    customScrollTo("rolam", 1000);
  }}
  className="nav-link text-white hover:text-yellow-200 font-bold text-lg"
>
  Rólam
</a>

            <a
  href="#szolgaltatasok"
  onClick={(e) => {
    e.preventDefault();
    customScrollTo("szolgaltatasok", 1000);
  }}
  className="nav-link text-white hover:text-yellow-200 font-bold text-lg"
>
  Szolgáltatások
</a>

            <a
  href="#kapcsolat"
  onClick={(e) => {
    e.preventDefault();
    customScrollTo("kapcsolat", 1000);
  }}
  className="nav-link text-white hover:text-yellow-200 font-bold text-lg"
>
  Kapcsolat
</a>

          </div>

          {/* Mobil menü gomb */}
          <div className="md:hidden">
            <button
              className="text-white hover:text-yellow-200 focus:outline-none"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobil menü */}
        {mobileOpen && (
          <div className="md:hidden mt-4 pb-3 space-y-2">
            <a href="#hero" className="block nav-link text-white hover:text-yellow-200 font-bold text-lg" onClick={() => setMobileOpen(false)}>Kezdőlap</a>
            <a href="#rolam" className="block nav-link text-white hover:text-yellow-200 font-bold text-lg" onClick={() => setMobileOpen(false)}>Rólam</a>
            <a href="#szolgaltatasok" className="block nav-link text-white hover:text-yellow-200 font-bold text-lg" onClick={() => setMobileOpen(false)}>Szolgáltatások</a>
            <a href="#kapcsolat" className="block nav-link text-white hover:text-yellow-200 font-bold text-lg" onClick={() => setMobileOpen(false)}>Kapcsolat</a>
          </div>
        )}
      </div>
    </nav>
  );
}
