import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faFacebookMessenger,faGithub, faLinkedin, faDiscord } from "@fortawesome/free-brands-svg-icons";


export default function Links() {

  const values = [
    {
      icon: faFacebook,
      name : "FaceBook"
    },
    {
      icon: faFacebookMessenger,
      name : "Messenger"
    },
    {
      icon: faGithub,
      name: "GitHub"
    },
    {
      icon:faLinkedin,
      name:"LinkedIn"
    },
    {
      icon:faDiscord,
      name:"Discord"
    }
  ]
  
    return(
        <div className="fixed flex flex-col mb-24">
            <ul>
              {values.map( value =>{
                return(
                <div>
              <li className='w-100 cursor-pointer mb-2 ml-14 z-100  hover:-ml-7 transition-right duration-500 ease-in-out'>
                <a className={`w-100 flex items-center bg-slate-700 rounded-tl-md rounded-bl-md p-1 pr-3`}
                    >
                        <FontAwesomeIcon icon={value.icon}  className="pr-2"/>
                        <span className="capitalize text-xs">{value.name}</span>
                    </a>
                </li>
                </div>
                )
              })}
            </ul>
        </div>
    )
}