import { useEffect } from "react";
import Navbar from "./comp/Navbar";
import Hero from "./comp/Hero";
import About from "./comp/About";
import Services from "./comp/Services";
import Quote from "./comp/Quote";
import Contact from "./comp/Contact";
import Footer from "./comp/Footer";
function App() {
 useEffect(() => {
  const reveal = () => {
    const elements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-bottom"
    );
    for (let el of elements) {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const elementBottom = el.getBoundingClientRect().bottom;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible && elementBottom > 0) {
        el.classList.add("active");
      } else {
        el.classList.remove("active"); // 🔁 fontos újra eltávolítani
      }
    }
  };

  window.addEventListener("scroll", reveal);
  reveal();
  return () => window.removeEventListener("scroll", reveal);
}, []);


  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services/>
      <Quote/>
      <Contact/>
       <Footer/>

    </>
  );
}

export default App;
