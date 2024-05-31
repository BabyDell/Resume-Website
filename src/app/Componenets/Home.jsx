import Meteors from "./Meteors";
import React from "react";
import Icon from "../react-icons";


export default function Home() {
  return (
    <div className="container min-w-full font-serif">
      <div className="flex flex-col min-h-screen items-center justify-center bg-gray-900">
      <Meteors number={10} />
        <img
          src="/Picture.png"
          alt="picture"
          className="w-32 h-32 rounded-full"
        />
        <div className="text-xl mt-7">Andy Felix</div>
        <div className="text-xl mt-3">Student & Full Stack Devoloper</div>
        {/* Social Links */}
        <div className="mt-2">
            <button className="m-1.5"><a href="https://github.com/babydell/" target="_blank"><Icon.FaGithubSquare className="w-7 h-7"/></a></button>
            <button className="m-1.5"><a href="https://linkedin.com/in/AJavaCoder7" target="_blank"><Icon.FaLinkedin className="w-7 h-7"/></a></button>
            <button className="m-1.5"><a href="https://discordapp.com/users/972365255105728572" target="_blank" ><Icon.FaDiscord className="w-7 h-7"/></a></button>
            <button className="m-1.5"><a href="https://mailto:AJavaCoder7@gmail.com" target="_blank"><Icon.MdEmail className="w-7 h-7"/></a></button>
        </div>
      </div>
    </div>
  );
}