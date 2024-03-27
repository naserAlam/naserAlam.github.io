import { useState } from "react";
import { CgNametag } from "react-icons/cg";
import { IoMdMenu } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import NavItem from "./navitem";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  function openMenu() {
    setToggle(true);
  }
  function closeMenu() {
    setToggle(false);
  }

  const navigation = [
    { link: "#home", label: "Home" },
    { link: "#about", label: "About" },
    { link: "#projects", label: "Projects" },
    { link: "#contact", label: "Contact" },
  ];

  return (
    <div className=" bg-white ">
      <div className="flex items-center font-semibold justify-between p-5 lg:mx-20 lg:flex-row">
        <div>
          <a
            href="#home"
            className="text-black font-mono text-2xl tracking-wider flex items-center"
          >
            <CgNametag /> <span className="px-2">naserAlam.dev</span>
          </a>
        </div>
        <div className="space-x-4 ">
          <div className="ssm:hidden lg:block space-x-2">
            {navigation.map((item) => (
              <NavItem
                key={item.link}
                ItemContainer="a"
                link={item.link}
                styles="text-black hover:bg-slate-300 rounded-full px-5 py-2 text-l"
              >
                {item.label}
              </NavItem>
            ))}
          </div>
          <div className="ssm:block lg:hidden">
            {toggle ? (
              <AiOutlineClose
                onClick={closeMenu}
                size={30}
                className="text-black cursor-pointer"
              />
            ) : (
              <IoMdMenu onClick={openMenu} size={30} className="text-black" />
            )}
          </div>
        </div>
      </div>

      <div className="ssm:block lg:hidden">
        {toggle && (
          <div className="flex justify-between ml-10">
            <div className="flex flex-col">
              {navigation.map((item) => (
                <NavItem
                  key={item.link}
                  ItemContainer="a"
                  link={item.link}
                  styles="text-black rounded-full mb-2 cursor-pointer text-l"
                >
                  {item.label}
                </NavItem>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
