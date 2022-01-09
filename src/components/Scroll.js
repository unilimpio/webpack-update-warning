import React, { useState, useEffect } from 'react'

import { ChevronUpIcon } from '@heroicons/react/solid'

/*
the following code is the result of extensive research, tried a few snippets out there but finaly this one was he most useful

https://www.coderomeos.org/scroll-to-top-of-the-page-a-simple-react-component

*/
const Scroll = ({
    showPoint,
}) => {

  const [isVisible, setIsVisible] = useState(false);

// Show button when page is scorlled upto given distance
const toggleVisibility = () => {
  if (window.pageYOffset > showPoint) {
    setIsVisible(true);
  } else {
    setIsVisible(false);
  }
};


    const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` })
    }

    const handleKeyPress = (isVisible) => {
        if(isVisible){
          window[`scrollTo`]({ top: 0, behavior: `smooth` })
        }
    }

    useEffect(() => {
      window.addEventListener("scroll", toggleVisibility);
    });

      return (

        <div className="z-2 fixed bottom-2 right-2">
        {isVisible &&
          <div role="button" tabIndex="0" onClick={handleClick} onKeyPress={handleKeyPress}
                  className=
    "w-auto rounded-full shadow-md hover:bg-zinc-300 hover:text-blue-500 bg-primary-default text-white py-2 px-2 cursor-pointer"

                  aria-label="to top">

            <ChevronUpIcon className="h5 w-5"/>
          </div>}
        </div>

        )
}

export default Scroll
