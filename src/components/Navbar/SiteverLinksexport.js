import React, { useState, useEffect } from "react"



import { Link, navigate } from "gatsby"
import { ChevronDownIcon } from '@heroicons/react/solid'
import { GlobeIcon } from '@heroicons/react/solid'



const Dropdown = ({
  options, id
}) => {


  const [selectedOption, setSelectedOption] = useState(options[0].value);






  return (
      <select id={id}
        className={`

          h-[1.20rem]
          m-0 pl-1 py-0 pr-6
          cursor-pointer
          font-lighter

          text-xs
          text-primary-lighter
          bg-transparent
          border-gray-100
          hover:border-gray-200
          rounded-md

        `}

        aria-label={id}
        value={selectedOption}
        onChange={event => {
                    event.preventDefault()
                    // TODO: do something with form values
                    setSelectedOption(event.target.value)
                    navigate(event.target.value)
                  }}>
        {options.map(o => (
          <option key={Math.random()} value={o.value}>{o.label}</option>
        ))}
      </select>
  );
};

const SiteverLinks = ({siteVerOpts, langOpts}) => {




  return (
    <>
      <div className="bg-gradient-to-b from-stone-100 to-white rounded-md pr-6 pt-3 pl-2 text-primary-lighter text-xs shadow-inner">


        <span className="">Version del sitio:&nbsp;&nbsp;</span>

        <Dropdown id={'sitever'} options={siteVerOpts}/>

        <span className="">&nbsp;&nbsp;Idioma:&nbsp;&nbsp;</span>

        <Dropdown id={'lang'} options={langOpts}/>



      </div>

    </>
  )
}

export default SiteverLinks
