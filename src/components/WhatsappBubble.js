import React from "react"
import { useState, useEffect } from "react";

import WhatsappIconColor from "../svg/WhatsappIconColor"

const WhatsappBubble =({contactNum}) => {

  const [live, setLive] = useState();

  useEffect(() => {

    var now = new Date();

    if(now.getDay() <= 5 && now.getHours() >= 0 && now.getHours() < 17){
      setLive(true);
    } else {
      setLive(false);
    }

  }, []);


  return(

      <div className="z-2 fixed bottom-40 right-2 w-12">

        <a href={`https://wa.me/${contactNum}`} target="_blank" rel="noopener noreferrer">

        <WhatsappIconColor className="z-5 animate-wiggle"/>

        {live &&
            <div className="">
              <span className="z-10 absolute right-1 -top-1 text-red-500">&#9679;</span>
              <div className="z-10 absolute right-[3px] top-[4px] rounded-full w-3 h-3 border-red-500 border animate-ping"></div>




            </div>
        }

        </a>
      </div>

  );

}

export default WhatsappBubble
