const NavBar = () => {
  return (
    <nav className="px-24 py-3 flex justify-between items-center bg-[#1E1E1E] text-white font-inter text-sm">
      <img src="src/assets/images/logo.png" alt="logo" />
      <ul className="flex space-x-12">
        <li className="text-[#868FFF]">
          <a href="#">Home</a>
        </li>
        <li className="hover:text-[#868FFF]">
          <a href="#">About Us</a>
        </li>
        <li className="hover:text-[#868FFF]">
          <a href="#">Services</a>
        </li>
        <li className="hover:text-[#868FFF]">
          <a href="#">Projects</a>
        </li>
      </ul>
      <a
        href="#"
        className="px-6 py-2 bg-[#5454D4] hover:bg-[#4A4AFF] rounded-full"
      >
        Get In Touch
      </a>
    </nav>
  );
};

export default NavBar;
