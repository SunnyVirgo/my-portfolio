import React from "react";
import Name from "./name";
import Me from "../assets/me.jpg";
import DropGrid from "./anime";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

function Home() {
    return(
  
        <div>
        <br /><br />
        <div className="h-screen flex justify-around items-center flex-row h-5/6 bg-slate-900 w-full lg:flex lg:flex-row md:flex md:flex-row sm:flex-col">
                <div className="w-1/2 flex justify-center lg:w-1/2 md:w-1/3 sm:w-full sm:flex sm:justify-center">
                    <div className="z-30">
                    <Name/>
                    <div className="flex justify-start align-center mt-6">
                        <ScrollLink
                        to="contacts-section"
                        smooth={true}
                        duration={500}
                        className="px-3 cursor-pointer">
                            <button className="bg-green-600 px-2 py-1 rounded-sm font-semibold text-slate-900 text-sm">Contact Me</button>
                        </ScrollLink>
                    </div>
                  
                    </div>
                    </div>
                    <div className="w-1/2 flex justify-center items-center lg:w-1/2 md:w-1/2 sm:w-full sm:flex sm:justify-center px-5 mb-10">
                   <div className="z-10 px-5">
                   <p className="indent-3 text-gray-300 tracking-tight text-base text-gray-500"><span className="text-3xl text-green-600">W</span>elcome to my creative universe! I am Sunny, a dedicated and imaginative designer with a passion for crafting compelling digital experiences.
                     With a keen eye for aesthetics and a love for innovation, I thrive on transforming ideas into visually stunning and user-friendly designs.
                      Through a blend of artistic prowess and technical expertise, I aim to leave a lasting impression on every project I undertake.
                       As you explore my portfolio, you'll delve into a diverse collection of captivating creations, ranging from web and mobile designs to branding and illustrations.
                        Join me on this artistic journey as we embark on an adventure of imagination and innovation.

</p>
                   </div>
                        {/* <img className="rounded-r-full rounded-l-full w-96 h-96" src={Me} alt="" /> */}
                    </div>
                </div>
        </div>
    )
}
export default Home