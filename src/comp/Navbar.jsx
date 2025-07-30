import { useState, useEffect } from "react";
import { customScrollTo } from "../utils/customtoscroll";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      setScrolled(currentY > 50);

      // Csak mobilon rejtsük el
      if (window.innerWidth <= 768) {
        const scrollDiff = lastScrollY - currentY;

          if (currentY > lastScrollY && currentY > 100) {
            setHidden(true); // lefelé → elrejt
          } else if (scrollDiff > 30 || currentY < 50) {
            setHidden(false); // csak akkor jön vissza, ha legalább 30px-et felfelé ment
          }

      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleMobileLinkClick = (id) => {
    customScrollTo(id, 1000);
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed w-full text-white z-50 transition-all duration-300 transform ${
        scrolled ? "shadow-md backdrop-blur bg-gray-900/90" : "bg-gray-900"
      } ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
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
            {["hero", "rolam", "szolgaltatasok", "kapcsolat"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  customScrollTo(id, 1000);
                }}
                className="nav-link text-white hover:text-yellow-200 font-bold text-lg"
              >
                {id === "hero"
                  ? "Kezdőlap"
                  : id === "rolam"
                  ? "Rólam"
                  : id === "szolgaltatasok"
                  ? "Szolgáltatások"
                  : "Kapcsolat"}
              </a>
            ))}
          </div>

          {/* Mobil hamburger menü ikon */}
          <div className="md:hidden">
            <button
              className="relative w-8 h-6 flex flex-col justify-between items-center focus:outline-none"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span
                className={`block h-0.5 w-full bg-white transform transition duration-300 ease-in-out ${
                  mobileOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-white transition-all duration-300 ease-in-out ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-white transform transition duration-300 ease-in-out ${
                  mobileOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>

        {/* Mobil menü - lenyílva */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height] duration-500 ease-in-out ${
            mobileOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="pb-3 pt-2 space-y-2">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleMobileLinkClick("hero");
              }}
              className="block nav-link text-white hover:text-yellow-200 font-bold text-lg"
            >
              Kezdőlap
            </a>
            <a
              href="#rolam"
              onClick={(e) => {
                e.preventDefault();
                handleMobileLinkClick("rolam");
              }}
              className="block nav-link text-white hover:text-yellow-200 font-bold text-lg"
            >
              Rólam
            </a>
            <a
              href="#szolgaltatasok"
              onClick={(e) => {
                e.preventDefault();
                handleMobileLinkClick("szolgaltatasok");
              }}
              className="block nav-link text-white hover:text-yellow-200 font-bold text-lg"
            >
              Szolgáltatások
            </a>
            <a
              href="#kapcsolat"
              onClick={(e) => {
                e.preventDefault();
                handleMobileLinkClick("kapcsolat");
              }}
              className="block nav-link text-white hover:text-yellow-200 font-bold text-lg"
            >
              Kapcsolat
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
