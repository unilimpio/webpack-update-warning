import React from "react"
import { useState, useEffect } from "react";

import WhatsappIconColor from "../svg/WhatsappIconColor"






const WhatsappBubble =({contactNum, now}) => {

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

      {live &&
          <div className="z-10 absolute -top-2 right-1 text-red-600 animate-ping">&#9679;</div>
      }

          <WhatsappIconColor className="z-5 animate-wiggle"/>



        </a>
      </div>

  );

}

export default WhatsappBubble
