import { FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {  useState } from "react";

const HomeFooter = () => {
  const [clicked, setClicked] = useState(false);


  const handleClick = () => {
    // Toggle the clicked state between true and false
    setClicked(prevClicked => !prevClicked);
    
  };

  return (
    <div>
      <div className="bg-black ">
      <div className="flex justify-end">
        <div className="flex flex-col p-10 justify-start">
         <div className="1st-section my-3">
         <h1 className="text-xl font-bold text-white p-2 my-2">Subscribe Us!</h1>
          <div className="grid grid-cols-1 gap-3">
            <input type="text" className="px-10 py-3 rounded-md outline-none" placeholder='Enter email address'/>
            <button type="submit" className={`bg-purple-500 my-2 p-2 rounded-md text-white font-bold cursor-pointer  scale-100  ${
      clicked ? 'transform scale-105 transition duration-500 ease-in-out bg-purple-700' : ''
    }`} value={"submit"}     onClick={handleClick}>{clicked ? "Submit" : "Subscribed"}</button>

          </div>
         </div>
          <div className="2nd-section my-3">
            <h1 className="text-xl font-bold text-white p-2 my-2" >Contact With Us!</h1>
            <div className="icon_div text-3xl grid grid-cols-5 gap-4 text-white">
            <FaFacebookF  className="cursor-pointer hover:-translate-y-1  duration-500 ease-in-out"/>
            <FaSquareXTwitter className="cursor-pointer hover:-translate-y-1  duration-500 ease-in-out"/>
            <FaInstagram className="cursor-pointer hover:-translate-y-1  duration-500 ease-in-out"/>
            <FaYoutube className="cursor-pointer hover:-translate-y-1  duration-500 ease-in-out"/>
            <FaLinkedin className="cursor-pointer hover:-translate-y-1  duration-500 ease-in-out"/>
            <FaPinterest className="cursor-pointer hover:-translate-y-1  duration-500 ease-in-out"/>
            <FaWhatsapp className="cursor-pointer hover:-translate-y-1  duration-500 ease-in-out"/>
            <MdEmail className="cursor-pointer hover:-translate-y-1  duration-500 ease-in-out"/>

            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-3">
        <hr className="bg-white  w-[500px]" />
        <h1 className="text-base font-bold text-white p-2 my-2">Copyright © 2022 Tanmoy Shome. All Rights Reserved.</h1>
      </div>
    </div>
    </div>
  )
}

export default HomeFooter