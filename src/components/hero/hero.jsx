import { React, useState } from "react";

import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { FiGithub, FiLinkedin } from "react-icons/fi";

import { SKILLS, SKILL_TYPES, SKILLS_LIST } from "./skills";

function Hero() {

  return (
    <section
      id="home"
      className="flex bg-gray-100 justify-around items-center p-10 lg:px-20 lg:flex-row ssm:flex-col ssm:space-y-10"
    >
      <div className="ssm:w-fit">
        <h1 className="lg:text-5xl ssm:text-4xl text-gray-800 font-bold py-5 text-center">
          Full Stack Developer With a Passion for AI
        </h1>
        <p className="text-xl mt-3 text-gray-500 font-sans text-center">
          Hi, I'm Naser Alam, let's solve problems <br /> & create amazing
          experiences together !
        </p>

        <div className="flex justify-center mt-5 space-x-2">
          <a href="https://www.github.com/naseralam">
            <FiGithub
              size={45}
              className="p-1.5 rounded-lg hover:border-2 hover:border-stone-500 hover:cursor-pointer hover:text-blue-600  focus:border-stone-500 focus:cursor-pointer focus:text-blue-600"
            />
          </a>
          <a href="https://www.linkedin.com/in/naserabdullahalam">
            <FiLinkedin
              size={45}
              className="p-1.5 rounded-lg hover:border-2 hover:border-stone-500 hover:cursor-pointer hover:text-blue-600 focus:border-stone-500 focus:cursor-pointer focus:text-blue-600"
            />
          </a>
        </div>

        <div className="flex justify-evenly items-center mt-20 mx-20 ssm:flex-col lg:flex-row ssm:space-y-3">
          <h3 className="flex flex-row text-xl text-gray-500">Skills <IoEllipsisVerticalSharp className="text-gray-500 mt-1 ml-3 p-0.5 lg:block ssm:hidden"/></h3>
          <div className="flex flex-row space-x-3 ssm:justify-evenly">{SKILLS['webdevelopment'].map((item) => (<img className="hover:animate-bounce focus:animate-bounce" key={item} src={item} width={35}/>))}</div>
          <div className="flex flex-row space-x-3 ssm:justify-evenly">{SKILLS['machinelearning'].map((item) => (<img className="hover:animate-bounce focus:animate-bounce" key={item} src={item} width={35}/>))}</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
