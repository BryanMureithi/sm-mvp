import { useState } from "react";

const NavBar = () => {
  let [open, setOpen] = useState(false);

  return (
    <div className=" px-6 py-6 flex flex-col sticky top-0 z-10 bg-[#1E1E1E] lg:px-24 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          <img src="/images/logo.png" alt="" />
        </a>
      </div>
      <div
        onClick={() => setOpen(!open)}
        className="absolute right-8 cursor-pointer lg:hidden"
      >
        <box-icon name="menu" size="lg" color="#fff"></box-icon>
      </div>
      <div className="flex-none">
        <ul
          className={`menu menu-vertical bg-gray-800 rounded-md px-4 py-3 mt-4 transition-all duration-500 ease-in lg:mt-0 lg:bg-[#1E1E1E] lg:menu-horizontal lg:space-x-10 lg:items-center ${
            open ? "top-20 " : "hidden"
          }`}
        >
          <li>
            <a href={`/`} className="text-white hover:text-[#868FFF]">
              Home
            </a>
          </li>
          <li>
            <a href={`/projects`} className="text-white hover:text-[#868FFF]">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-[#868FFF]">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
