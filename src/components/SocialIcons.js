import React from "react";
import InstagramIcon from "../svg/InstagramIcon";
import FacebookIcon from "../svg/FacebookIcon";
import YoutubeIcon from "../svg/YoutubeIcon";


const SocialIcons = ({ color='#000000' }) => (

       
        <div className={'flex mt-1 p-2 mb-2 '}>
            <div className={'flex-1 w-2 mx-1'}>
            <a href="https://instagram.com/unilimpio.ec" ><InstagramIcon color={color} /></a>
            </div>
            <div className={'flex-1 w-2 mx-1'}>
            <a href="https://facebook.com/unilimpio" ><FacebookIcon color={color} /></a>
            </div>
            <div className={'flex-1 w-2 mx-1'}>
            <a href="https://www.youtube.com/channel/UC2CwZGLWvhnneQ9KwMHSJfw" ><YoutubeIcon color={color} /></a>
            </div>
        </div>


);


export default SocialIcons;