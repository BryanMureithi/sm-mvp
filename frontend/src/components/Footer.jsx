const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] px-24">
      <div className="flex justify-between items-center py-6">
        <img src="src/assets/images/logo.png" alt="" />
        <ul className="flex space-x-4 text-white">
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
          <li>
            <a href="">Licensing</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <a href="#" className="px-6 py-2 bg-[#5454D4] hover:bg-[#4A4AFF]">
          Get In Touch
        </a>
      </div>
      <hr className="w-full text-gray-500" />
      <div className="flex justify-between items-center py-6">
        <p className="text-white text-sm">
          © 2023 Sorstseam. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
