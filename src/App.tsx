import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Locations from "./pages/Locations";
import Website_design from "./pages/Website_design";
import App_design from "./pages/App_design";
import Graphic_design from "./pages/Graphic_design";
import { logoDark, iconClose, iconHamburger, bgPatternLeaf } from "./assets";

import { useState } from "react";
import Footer from "./pages/Footer";

function App() {
  const [isToggle, setIsToggle] = useState(false);

  const toggleMenu = () => {
    const menu = document.querySelector(".max-sm");
    menu?.classList.toggle("hidden");
    setIsToggle(!isToggle);
  };

  return (
    <>
      <Router>
        <div className=" block h-auto font-Jost bg-white xl:px-[164px] lg:px-[114px] lg:pt-16 md:pt-16 lg:pb-3 md:pb-3 md:px-10 max-sm:px-0 max-sm:pt-[35px] max-sm:pb-[15px] relative z-10">
          <nav className="flex flex-row justify-between items-center pb-[67px] uppercase text-sm max-sm:mx-6">
            {/* Logo */}
            <Link to="designo_website/">
              <img
                src={logoDark}
                alt="Designo Logo"
                className="w-[202px] h-auto cursor-pointer"
              />
            </Link>

            {/* Desktop Navigation */}
            <ul className="flex-row justify-between items-center gap-[42px] md:flex max-sm:hidden">
              <li>
                <Link to="designo_website/about" className="hover:underline">
                  Our Company
                </Link>
              </li>
              <li>
                <Link to="designo_website/locations" className="hover:underline">
                  Location
                </Link>
              </li>
              <li>
                <Link to="designo_website/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>

            {/* Hamburger Menu */}

            <img
              src={isToggle ? iconClose : iconHamburger}
              alt="Hamburger Menu"
              className="hamburger cursor-pointer md:hidden max-sm:block relative"
              onClick={toggleMenu}
            />

            {/* Mobile Navigation */}
            <div
              className={`w-full justify-center items-start gap-[42px] bg-black h-[235px] absolute top-24 left-0 p-6 ${
                isToggle ? "block" : "hidden"
              } text-primary-White text-2xl font-normal tracking-wide flex flex-col z-50`}
            >
              <Link
                to="designo_website/about"
                className="hover:underline"
                onClick={toggleMenu}
              >
                Our Company
              </Link>
              <Link
                to="designo_website/locations"
                className="hover:underline"
                onClick={toggleMenu}
              >
                Location
              </Link>
              <Link
                to="designo_website/contact"
                className="hover:underline"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </div>
          </nav>

          {/* Background Pattern */}
          <img
            src={bgPatternLeaf}
            alt="Background Pattern"
            className="absolute top-[475px] left-0 w-auto h-[594px] object-cover z-0 lg:block hidden"
          />

          {/* Routes */}
          <div className="h-auto mb-[393px] max-sm:mb-[430px]">
            <Routes>
              <Route path="designo_website/" element={<Home />} />
              <Route path="designo_website/about" element={<About />} />
              <Route path="designo_website/contact" element={<Contact />} />
              <Route path="designo_website/locations" element={<Locations />} />
              <Route path="designo_website/website_design" element={<Website_design />} />
              <Route path="designo_website/app_design" element={<App_design />} />
              <Route path="designo_website/graphic_design" element={<Graphic_design />} />
            </Routes>
          </div>

          {/* Background Overlay */}
          {isToggle && (
            <div
              className="fixed  inset-0 bg-black opacity-15 z-30"
              onClick={toggleMenu}
            ></div>
          )}

          {/* Background Pattern */}
          <img
            src={bgPatternLeaf}
            alt="Background Pattern"
            className="absolute bottom-[467PX] right-0 w-auto h-[594px] object-cover z-0 rotate-180 lg:block hidden"
          />
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
