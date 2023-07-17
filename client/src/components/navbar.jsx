import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

function Navbar() {
    const scrollToSection = (sectionId) => {
        scroll.scrollTo(sectionId, {
            smooth: true,
            duration: 500,
        })
    }
    return (
        <div className="fixed w-full flex bg-black justify-between p-5">
          <div><h1><span className="text-red-600">Port</span><span className="text-white">folio</span></h1></div>
            <div>
                <ul className="flex flex-row text-white">
                <ScrollLink
                      to="home-section"
                      smooth={true}
                      duration={500}
                      className="px-3 cursor-pointer"
                    >
                    <li className="px-3">Home</li>
                    </ScrollLink>
                    <ScrollLink
                      to="about-section"
                      smooth={true}
                      duration={500}
                      className="px-3 cursor-pointer"
                    >
                    <li className="px-3">About me</li>
                    </ScrollLink>
                    <ScrollLink
                      to="projects-section"
                      smooth={true}
                      duration={500}
                      className="px-3 cursor-pointer"
                    >
                    <li className="px-3">Projects</li>
                    </ScrollLink>
                    <ScrollLink
                      to="contacts-section"
                      smooth={true}
                      duration={500}
                      className="px-3 cursor-pointer"
                    >
                    <li className="px-3">Contacts</li>
                    </ScrollLink>
                </ul>
            </div>
        </div>
    )
}
export default Navbar