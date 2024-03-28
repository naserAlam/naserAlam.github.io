import { FiGithub, FiLinkedin } from "react-icons/fi";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-black">
      <div className="flex items-center font-semibold justify-between p-5 lg:mx-20 lg:flex-row">
        <div>
          <a
            href="#home"
            className="text-white text-xl flex items-center"
          >
            <span className="px-2">
              Copyright &copy; {currentYear} - naserAlam.dev
            </span>
          </a>
        </div>
        <div className="space-x-4 flex flex-row ">
        <a href="https://www.github.com/naseralam">
            <FiGithub
              size={45}
              className="p-1.5 text-white rounded-lg hover:border-2 hover:border-slate-200 hover:cursor-pointer hover:text-blue-400  focus:border-stone-500 focus:cursor-pointer focus:text-blue-600"
            />
          </a>
          <a href="https://www.linkedin.com/in/naserabdullahalam">
            <FiLinkedin
              size={45}
              className="p-1.5 text-white rounded-lg hover:border-2 hover:border-slate-200 hover:cursor-pointer hover:text-blue-400 focus:border-stone-500 focus:cursor-pointer focus:text-blue-600"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
