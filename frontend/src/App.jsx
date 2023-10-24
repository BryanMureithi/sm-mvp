import Navbar from "./components/NavBar";
import "./assets/css/hero.css";

function App() {
  return (
    <div classname="bg-[#1E1E1E] h-full font-raleway">
      <header>
        <Navbar />
      </header>
      {/* Hero Section */}
      <section className="gradientt">
        <div className="">
          <div className="col-span-2 py-36 px-24">
            <div className="">
              <h1 className="font-inter text-6xl font-medium text-white w-8/12">
                Your <span className="text-[#868FFF]">Trusted Partner</span> for
                Tailored Digital Solutions, Designed to{" "}
                <span className="text-[#868FFF]">Transform Your Success</span>
              </h1>
              <p className="text-[#A8A8A8] mt-16 font-inter font-normal text-base w-5/12">
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

      {/* What we do Section */}

      <section className="services-gradient px-24 py-16 text-white">
        <div className="flex justify-between items-center px-12">
          <div></div>
          <div className="flex flex-col items-center">
            <h2 className="text-[#868FFF] font-poppins text-xs font-semibold">
              WHAT WE DO
            </h2>
            <h3 className="mt-2 font-poppins text-3xl font-semibold">
              Our Services
            </h3>
            <p className="mt-4 text-[#D4D4D4] text-center font-poppins text-sm font-normal w-11/12">
              Explore the wide range of expert services we offer to cater to
              your specific requirements.
            </p>
          </div>
          <div>
            <img src="src/assets/images/icon1.svg" alt="icon" />
          </div>
        </div>
        <div className="flex justify-between mt-36">
          <div className="flex flex-col">
            <img
              src="src/assets/images/icon-video.png"
              alt=""
              className="w-16 ml-24"
            />
            <h2 className="font-raleway mt-6 text-center text-2xl font-semibold">
              Podcast Management
            </h2>
            <div className="mt-8">
              <ul className="space-y-2">
                <li className="text-[#A8A8A8] text-lg font-normal">
                  Video Editting
                </li>
                <li className="text-[#A8A8A8] text-lg font-normal">
                  Audio Editting
                </li>
                <li className="text-[#A8A8A8] text-lg font-normal">
                  Transcription
                </li>
                <li className="text-[#A8A8A8] text-lg font-normal">
                  Social Media Management
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col">
            <img
              src="src/assets/images/icon2.png"
              alt=""
              className="w-16 ml-24"
            />
            <h2 className="font-raleway mt-6 text-center text-2xl font-semibold">
              Website Development
            </h2>
            <div className="mt-8">
              <ul className="space-y-2">
                <li className="text-[#A8A8A8] text-lg font-normal">
                  Front-end Development
                </li>
                <li className="text-[#A8A8A8] text-lg font-normal">
                  Backend Development
                </li>
                <li className="text-[#A8A8A8] text-lg font-normal">
                  Serach Engine Optimization
                </li>
                <li className="text-[#A8A8A8] text-lg font-normal">
                  Website Maintenance
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col">
            <img
              src="src/assets/images/icon3.png"
              alt=""
              className="w-16 ml-16"
            />
            <h2 className="font-raleway mt-6 text-center text-2xl font-semibold">
              UI/UX Design
            </h2>
            <div className="mt-8">
              <ul className="space-y-2">
                <li className="text-[#A8A8A8] text-lg font-normal">
                  Website Designs
                </li>
                <li className="text-[#A8A8A8] text-lg font-normal">
                  Mobile App Designs
                </li>
                <li className="text-[#A8A8A8] text-lg font-normal">
                  UX Research
                </li>
                <li className="text-[#A8A8A8] text-lg font-normal">
                  Design Implementation
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-36">
          <img src="src/assets/images/icon4.png" alt="icon" />
          <div>
            <a href="#" className="px-6 py-2 bg-[#5454D4] hover:bg-[#4A4AFF]">
              Get In Touch
            </a>
          </div>
          <div></div>
        </div>
      </section>

      {/* Why Choose Us Section */}

      <section className="services-gradient px-24 py-12">
        <div className="flex flex-col items-center">
          <h2 className="text-[#868FFF] font-poppins text-xs font-semibold">
            WHY CHOOSE US
          </h2>
          <h3 className="text-white mt-2 font-poppins text-3xl font-semibold">
            What Makes Us Unique
          </h3>
          <p className="mt-4 text-[#D4D4D4] text-center font-poppins text-sm font-normal w-8/12">
            Explore the wide range of expert services we offer to cater to your
            specific requirements.
          </p>
        </div>
        <div className="grid grid-cols-3 mt-32 px-28 gap-24">
          <div className="col-span-1 border border-transparent hover:border-[#5454D4] hover:rounded-lg p-4">
            <h2 className="text-white mt-2 font-poppins text-xl font-semibold">
              Client-Centric Excellence
            </h2>
            <p className="text-[#878988] font-poppins text-sm mt-2 font-normal w-10/12">
              Understand how our unwavering commitment to client satisfaction
              sets us apart in the digital industry.
            </p>
          </div>
          <div className="col-span-1 border border-transparent hover:border-[#5454D4] hover:rounded-lg p-4">
            <h2 className="text-white mt-2 font-poppins text-xl font-semibold">
              Our Proven Track Record
            </h2>
            <p className="text-[#878988] font-poppins text-sm mt-2 font-normal w-10/12">
              Understand how our unwavering commitment to client satisfaction
              sets us apart in the digital industry.
            </p>
          </div>
          <div className="col-span-1 border border-transparent hover:border-[#5454D4] hover:rounded-lg p-4">
            <h2 className="text-white mt-2 font-poppins text-xl font-semibold">
              24/7 Support and Dedication
            </h2>
            <p className="text-[#878988] font-poppins text-sm mt-2 font-normal w-10/12">
              Understand how our unwavering commitment to client satisfaction
              sets us apart in the digital industry.
            </p>
          </div>
          <div className="col-span-1 border border-transparent hover:border-[#5454D4] hover:rounded-lg p-4">
            <h2 className="text-white mt-2 font-poppins text-xl font-semibold">
              Innovation Meets Reliability
            </h2>
            <p className="text-[#878988] font-poppins text-sm mt-2 font-normal w-10/12">
              Understand how our unwavering commitment to client satisfaction
              sets us apart in the digital industry.
            </p>
          </div>
          <div className="col-span-1 border border-transparent hover:border-[#5454D4] hover:rounded-lg p-4">
            <h2 className="text-white mt-2 font-poppins text-xl font-semibold">
              Industry Leading Experts
            </h2>
            <p className="text-[#878988] font-poppins text-sm mt-2 font-normal w-10/12">
              Understand how our unwavering commitment to client satisfaction
              sets us apart in the digital industry.
            </p>
          </div>
          <div className="col-span-1 border border-transparent hover:border-[#5454D4] hover:rounded-lg p-4">
            <h2 className="text-white mt-2 font-poppins text-xl font-semibold">
              Client Testimonials
            </h2>
            <p className="text-[#878988] font-poppins text-sm mt-2 font-normal w-10/12">
              Understand how our unwavering commitment to client satisfaction
              sets us apart in the digital industry.
            </p>
          </div>
        </div>
        <div className="mt-32 flex justify-center">
          <a href="#" className="px-6 py-2 bg-[#5454D4] hover:bg-[#4A4AFF]">
            Get In Touch
          </a>
        </div>
      </section>

      {/* Why Choose Us Section */}

      <section className="bg-[#1E1E1E] px-24 py-12">
        <div className="flex flex-col items-center mt-12">
          <h2 className="text-[#868FFF] font-poppins text-xs font-semibold">
            OUR PROJECTS
          </h2>
          <h3 className="text-white mt-2 font-poppins text-3xl font-semibold">
            Custom Work We Have Worked On
          </h3>
          <p className="mt-4 text-[#D4D4D4] text-center font-poppins text-sm font-normal w-5/12">
            Explore our diverse portfolio of completed projects. From web
            development and digital marketing to app design and branding, our
            projects exemplify our expertise and commitment to delivering
            exceptional results.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
