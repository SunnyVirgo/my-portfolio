import React from "react";
import Me from "../assets/me.jpg";

function AboutMe() {
    return(
        <>
        <div className="bg-slate-900">
            <br /><br /><br />
            <div className="mb-5">
                <div className="px-6 mb-5">
                        <span className="text-green-600 capitalize font-bold">About me _______</span><span></span>
                </div>
                <div className="px-8 mb-5">
                    <span className="capitalize text-2xl font-bold text-gray-600">about me</span>
                </div>
                <div className="flex flex-row justify-around w-full p-5">
                    <div className="w-1/2">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit molestias totam vitae ex! Repudiandae itaque, reprehenderit quod repellat officiis eos exercitationem! Omnis maiores veniam neque eligendi incidunt nulla debitis veritatis?</p>
                    </div>
                    <div className="w-1/2 flex justify-center">
                         <img className="rounded-r-full rounded-l-full w-96 h-96" src={Me} alt="" />
                    </div>
                </div>
            </div>
           
            <div className="px-6 mb-5">
                    <span className="text-green-600 capitalize font-bold">Skills _______</span><span></span>
            </div>
            <div className="px-8 mb-5">
                <span className="capitalize text-2xl font-bold text-gray-600">my skills</span>
            </div>
        </div>
        </>
    )
}
export default AboutMe