import Button from "./Button";

const NavBar = () => {
  return (
    <nav className="px-4 py-2 md:px-12 lg:px-24 lg:py-3 flex justify-between items-center bg-[#1E1E1E] text-white font-inter text-sm">
      <img src="/images/logo.png" alt="logo" />
      <ul className="lg:flex space-x-12 hidden">
        <li className="text-[#868FFF]">
          <a href={`/`}>Home</a>
        </li>
        <li className="hover:text-[#868FFF]">
          <a href="#services">Services</a>
        </li>
        <li className="hover:text-[#868FFF]">
          <a href={`/projects`}>Projects</a>
        </li>
      </ul>
      <Button title="Get in Touch" />
      <a href="" className="lg:hidden">
        <box-icon name="menu" color="#5454D4" size="lg"></box-icon>
      </a>
    </nav>
  );
};

export default NavBar;
