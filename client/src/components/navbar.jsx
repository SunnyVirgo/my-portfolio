import React, { useState, useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home-section") 
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const sections = ["home-section", "about-section", "projects-section", "contacts-section"];
    
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section.offsetTop <= scrollPosition + 1) {
        setActiveSection(sections[i]);
        break;
      }
    }
  };

    const scrollToSection = (sectionId) => {
        scroll.scrollTo(sectionId, {
            smooth: true,
            duration: 500,
            offset: 100,
        })
        setActiveSection(sectionId)
    }

    
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    return (
        <div className="fixed w-full flex bg-slate-900 justify-between z-40 p-5">
          <div><h1 className="text-lg font-extrabold tracking-widest"><span className="text-green-600">Port</span><span className="text-white">folio</span></h1></div>
            <div>
                <ul className="flex flex-row text-white font-bold text-sm">
                <ScrollLink
                      to="home-section"
                      smooth={true}
                      duration={500}
                      className="px-3 cursor-pointer"
                      onClick={()=>scrollToSection("home-section")}
                    >
                    <li className={`px-3 ${activeSection === "home-section" ? "list-item-line":""}`}>Home</li>
                    </ScrollLink>
                    <ScrollLink
                      to="about-section"
                      smooth={true}
                      duration={500}
                      className="px-3 cursor-pointer"
                      onClick={()=>scrollToSection("about-section")}
                    >
                    <li className={`px-3 ${activeSection === "about-section" ? "list-item-line" : ""}`}>About</li>
                    </ScrollLink>
                    <ScrollLink
                      to="projects-section"
                      smooth={true}
                      duration={500}
                      className="px-3 cursor-pointer"
                      onClick={()=>scrollToSection("projects-section")}
                    >
                    <li className={`px-3 ${activeSection === "projects-section" ? "list-item-line":""}`}>Projects</li>
                    </ScrollLink>
                    <ScrollLink
                      to="contacts-section"
                      smooth={true}
                      duration={500}
                      className="px-3 cursor-pointer"
                      onClick={()=>scrollToSection("contacts-section")}
                    >
                    <li className={`px-3 ${activeSection === "contacts-section" ? "list-item-line":""}`}>Contacts</li>
                    </ScrollLink>
                </ul>
            </div>
        </div>
    )
}
export default Navbar