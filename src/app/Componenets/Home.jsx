import Meteors from "./Meteors";
import React from "react";
import Icon from "../react-icons";
import Image from "next/image";

export default function Home() {
  return (
    <div id="Home" className="container min-w-full font-serif">
      <div className="flex flex-col min-h-screen items-center justify-center bg-gray-900">
        <Meteors number={15} />
        <Image
          src="/Picture.png"
          alt="picture"
          width={150}
          height={150}
          className="rounded-full"
        />
        <div className="text-xl mt-7 text-shadow-glow">Andy Felix</div>
        <div className="text-xl mt-3 text-shadow-glow">
          Student & Front End Devoloper
        </div>
        {/* Social Links */}
        <div className="mt-2">
          <button className="m-1.5">
            <a href="https://github.com/babydell/" target="_blank">
              <Icon.FaGithubSquare className="w-7 h-7 rounded-md transition duration-300 ease-in-out hover:shadow-md hover:shadow-gray-700 hover:scale-110" />
            </a>
          </button>
          <button className="m-1.5">
            <a href="https://linkedin.com/in/AJavaCoder7" target="_blank">
              <Icon.FaLinkedin className="w-7 h-7 rounded-md transition duration-300 ease-in-out hover:shadow-md hover:shadow-gray-700 hover:scale-110 " />
            </a>
          </button>
          <button className="m-1.5">
            <a
              href="https://discordapp.com/users/972365255105728572"
              target="_blank"
            >
              <Icon.FaDiscord className="w-7 h-7 rounded-md transition duration-300 ease-in-out hover:shadow-md hover:shadow-gray-700 hover:scale-110" />
            </a>
          </button>
          <button className="m-1.5">
            <a href="https://mailto:AJavaCoder7@gmail.com" target="_blank">
              <Icon.MdEmail className="w-7 h-7 rounded-md transition duration-300 ease-in-out hover:shadow-md hover:shadow-gray-700 hover:scale-110" />
            </a>
          </button>
        </div>
      </div>
        <hr class="m-auto h-px  max-w-7xl bg-gray-600 border-0 text-center" />
    </div>
  );
}
