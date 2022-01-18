import React from "react"

const PictureWebp = ({ path, filename, className, description }) => {

    return (

      <div className={` ${className}`} >
      <picture>
        <source srcSet={ path + "../../images/" + filename + ".webp"} type="image/webp"/>
        <source srcSet={path + "../../images/" + filename + ".jpg"} type="image/jpeg"/>
        <img src={path + "../../images/" + filename + ".jpg"} alt={ description } />
      </picture>
    </div>


    );
  };

  export default PictureWebp;
