import Navbar from "./components/NavBar";
import "./assets/css/hero.css";

function App() {
  return (
    <div classname="bg-[#1E1E1E] h-full font-raleway">
      <header>
        <Navbar />
      </header>
      <section className="gradientt">
        <div className="">
          <div className="col-span-2 py-36 px-24">
            <div className="">
              <h1 className="font-inter text-6xl font-medium text-white w-8/12">
                Your <span className="text-[#868FFF]">Trusted Partner</span> for
                Tailored Digital Solutions, Designed to{" "}
                <span className="text-[#868FFF]">Transform Your Success</span>
              </h1>
              <p className="text-[#A8A8A8] mt-16 font-inter font-normal text-2xl w-7/12">
                At Sortseam, we're here to make your digital dreams a reality.
                Our dedicated team specializes in creating custom digital
                solutions that are perfectly suited to your unique needs.
                Discover how we can help you achieve unparalleled success in the
                digital world.
              </p>
              <div className="flex space-x-12 mt-24">
                <a
                  href="#"
                  className="px-6 py-3 text-white bg-[#5454D4] hover:bg-[#4A4AFF]"
                >
                  Book a Meeting
                </a>
                <a
                  href="#"
                  className="px-6 py-3 text-[#A8A8A8] border border-[#5454D4] hover:bg-[#4A4AFF] hover:text-white"
                >
                  See Our Work
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="px-36 py-20 flex justify-between items-center">
          <img src="src/assets/images/company.png" alt="logos" />
          <img src="src/assets/images/company.png" alt="logos" />
          <img src="src/assets/images/company.png" alt="logos" />
          <img src="src/assets/images/company.png" alt="logos" />
        </div>
      </section>
    </div>
  );
}

export default App;
