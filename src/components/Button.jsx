const Button = ({ title }) => {
  return (
    <div>
      <a
        href="#contact"
        className="button hidden lg:block px-6 py-2 bg-[#5454D4] hover:bg-[#4A4AFF] rounded-full"
      >
        {title}
      </a>
    </div>
  );
};

export default Button;
