import { useState, useEffect } from "react";
import goodtech from '../assets/images/final-goodtech.png'

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(()=>{
    const onScroll =()=>{
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener('scroll', onScroll);
    return ()=>  window.removeEventListener('scroll', onScroll)
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <div className="fixed top-0 z-50 w-full">
      <div className={`min-w-full h-fit flex flex-row items-center justify-between ${isScrolled ? "bg-blue-950" : "bg-[rgba(40,57,93,0.1)]"} p-3`}>
        <h2 className="text-xl font-semibold max-w-20">
          <a href="/"><img className= "" src={goodtech} alt="" /></a>
        </h2>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="hamburger w-12 md:hidden cursor-pointer"
        >
          <div className="w-full flex flex-col gap-1 transition-all duration-300">
            <span
              className={`block h-1 bg-accentshade rounded-md transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-1 bg-accentshade rounded-md transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-1 bg-accentshade rounded-md transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </div>
        <div className={`hidden gap-10 items-center ${isScrolled ? "text-white" : "text-accent "} md:flex`}>
          <a onClick={() => scrollToSection("about")} className="hover:text-accentshade">
            About
          </a>
          <a onClick={() => scrollToSection("products")} className="hover:text-accentshade">
            Products
          </a>
          <a onClick={() => scrollToSection("whychoose")} className="hover:text-accentshade">
            Why Choose Us
          </a>
          <a onClick={() => scrollToSection("faqs")} className="hover:text-accentshade">
            FAQs
          </a>
          <button
            onClick={() => scrollToSection("git")}
            className="hidden font-semibold h-fit rounded-md p-2 text-white md:inline-flex bg-accentshade hover:border-accentshade hover:bg-white hover:text-accentshade">Get in Touch</button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white w-full px-4 py-2 flex flex-col gap-4 text-gray-700 border-t border-gray-200">
          <a onClick={() => scrollToSection("about")} className="hover:text-blue-500">
            About
          </a>
          <a onClick={() => scrollToSection("products")} className="hover:text-blue-500">
            Products
          </a>
          <a onClick={() => scrollToSection("whychoose")} className="hover:text-blue-500">
            Why Choose Us
          </a>
          <a onClick={() => scrollToSection("faqs")} className="hover:text-blue-500">
            FAQs
          </a>
          <button onClick={() => scrollToSection("git")} className="bg-accentshade text-white p-2 rounded-md"> Get in Touch </button>
        </div>
      )}
    </div>
  );
};

export default NavBar;