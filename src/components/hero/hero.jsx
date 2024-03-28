import { FiGithub, FiLinkedin } from "react-icons/fi";

import { SKILLS } from "./skills_list";

function Hero() {

  return (
    <section
      id="home"
      className="flex bg-gray-100 min-h-screen justify-around items-center p-10 lg:px-20 lg:flex-row ssm:flex-col ssm:space-y-10"
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
        <div className="flex justify-evenly align-middle items-center mt-20 mx-20 ssm:flex-col lg:flex-row ssm:space-y-3">
          <h3 className="text-xl text-gray-500">Tech Stack</h3>
          <hr className="lg:hidden ssm:block bg-gray-500 w-full h-0.5"/>
          <div className="flex flex-row space-x-3 ssm:justify-center">{SKILLS['webdevelopment'].map((item) => (<img className="hover:animate-bounce focus:animate-bounce" key={item} src={item} width={45}/>))}</div>
          <div className="flex flex-row space-x-3 ssm:justify-center">{SKILLS['machinelearning'].map((item) => (<img className="hover:animate-bounce focus:animate-bounce" key={item} src={item} width={45}/>))}</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
