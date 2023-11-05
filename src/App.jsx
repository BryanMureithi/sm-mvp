import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
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
          <div className="px-12 py-16 lg:py-32 lg:px-24">
            <div className="">
              <h1 className="font-inter text-2xl text-center font-medium text-white w-11/12 md:text-4xl md:w-10/12 lg:text-6xl lg:text-start lg:w-8/12">
                Your <span className="text-[#868FFF]">Trusted Partner</span> for
                Tailored Digital Solutions, Designed to{" "}
                <span className="text-[#868FFF]">Transform Your Success</span>
              </h1>
              <p className="text-[#A8A8A8] mt-16 font-inter text-center font-normal text-sm w-12/12 md:text-base md:w-10/12 lg:w-5/12 lg:text-start lg:text-base">
                At Sortseam, we're here to make your digital dreams a reality.
                Our dedicated team specializes in creating custom digital
                solutions that are perfectly suited to your unique needs.
                Discover how we can help you achieve unparalleled success in the
                digital world.
              </p>
              <div className="flex space-x-12 mt-24 justify-center lg:justify-start">
                <a
                  href="#"
                  className="px-3 py-3 text-white bg-[#5454D4] hover:bg-[#4A4AFF] lg:px-6 lg:py-3"
                >
                  <span className="text-sm lg:text-base">Book a Meeting</span>
                </a>
                <a
                  href="#"
                  className="px-3 py-3 text-[#A8A8A8] border border-[#5454D4] hover:bg-[#4A4AFF] hover:text-white lg:px-6 lg:py-3"
                >
                  <span className="text-sm lg:text-base">See Our Work</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="px-20 py-10 grid grid-cols-2 gap-8 lg:flex lg:justify-between lg:items-center lg:px-36 lg:py-20">
          <img
            src="src/assets/images/company.png"
            alt="logos"
            className="col-span-1"
          />
          <img
            src="src/assets/images/company.png"
            alt="logos"
            className="col-span-1"
          />
          <img
            src="src/assets/images/company.png"
            alt="logos"
            className="col-span-1"
          />
          <img
            src="src/assets/images/company.png"
            alt="logos"
            className="col-span-1"
          />
        </div>
      </section>

      {/* What we do Section */}

      <section className="services-gradient px-12 py-12 text-white lg:px-24 lg:py-16">
        <div className="flex justify-between items-center px-12">
          <div className=""></div>
          <div className="flex flex-col items-center">
            <h2 className="text-[#868FFF] font-poppins text-xs font-semibold">
              WHAT WE DO
            </h2>
            <h3 className="mt-2 font-poppins text-2xl font-semibold">
              Our Services
            </h3>
            <p className="mt-4 text-[#D4D4D4] text-center font-poppins text-sm font-normal w-12/12 md:w-11/12">
              Explore the wide range of expert services we offer to cater to
              your specific requirements.
            </p>
          </div>
          <div className="hidden sm:block">
            <img src="src/assets/images/icon1.svg" alt="icon" />
          </div>
        </div>
        <div className="grid grid-cols-1 px-12 gap-4 mt-20 sm:grid-cols-2 md:px-16 lg:mt-36 lg:flex lg:justify-between">
          <div className="flex flex-col">
            <img
              src="src/assets/images/icon-video.png"
              alt=""
              className="w-12 ml-20 lg:w-16 lg:ml-24"
            />
            <h2 className="font-raleway mt-6 text-start text-lg font-semibold lg:text-center lg:text-2xl">
              Podcast Management
            </h2>
            <div className="mt-8">
              <ul className="space-y-2">
                <li className="text-[#A8A8A8] text-base font-normal lg:text-lg">
                  Video Editting
                </li>
                <li className="text-[#A8A8A8] text-base font-normal lg:text-lg">
                  Audio Editting
                </li>
                <li className="text-[#A8A8A8] text-base font-normal lg:text-lg">
                  Transcription
                </li>
                <li className="text-[#A8A8A8] text-base font-normal lg:text-lg">
                  Social Media Management
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col">
            <img
              src="src/assets/images/icon2.png"
              alt=""
              className="w-12 ml-20 lg:w-16 lg:ml-24"
            />
            <h2 className="font-raleway mt-6 text-start text-lg font-semibold lg:text-center lg:text-2xl">
              Website Development
            </h2>
            <div className="mt-8">
              <ul className="space-y-2">
                <li className="text-[#A8A8A8] text-base font-normal lg:text-lg">
                  Front-end Development
                </li>
                <li className="text-[#A8A8A8] text-base font-normal lg:text-lg">
                  Backend Development
                </li>
                <li className="text-[#A8A8A8] text-base font-normal lg:text-lg">
                  Search Engine Optimization
                </li>
                <li className="text-[#A8A8A8] text-base font-normal lg:text-lg">
                  Website Maintenance
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col mt-12 lg:mt-1">
            <img
              src="src/assets/images/icon3.png"
              alt=""
              className="w-12 ml-16 lg:w-16 lg:ml-24"
            />
            <h2 className="font-raleway mt-6 text-start text-lg font-semibold lg:text-center lg:text-2xl">
              UI/UX Design
            </h2>
            <div className="mt-8">
              <ul className="space-y-2">
                <li className="text-[#A8A8A8] text-base font-normal lg:text-lg">
                  Website Designs
                </li>
                <li className="text-[#A8A8A8] text-base font-normal lg:text-lg">
                  Mobile App Designs
                </li>
                <li className="text-[#A8A8A8] text-base font-normal lg:text-lg">
                  UX Research
                </li>
                <li className="text-[#A8A8A8] text-base font-normal lg:text-lg">
                  Design Implementation
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-24 lg:mt-36">
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

      <section className="services-gradient  px-12 py-12 lg:px-24 lg:py-12">
        <div className="flex flex-col items-center">
          <h2 className="text-[#868FFF] font-poppins text-xs font-semibold">
            WHY CHOOSE US
          </h2>
          <h3 className="text-white mt-2 font-poppins text-2xl sm:text-3xl font-semibold">
            What Makes Us Unique
          </h3>
          <p className="mt-4 text-[#D4D4D4] text-center font-poppins text-sm font-normal w-11/12 sm:w-8/12">
            Explore the wide range of expert services we offer to cater to your
            specific requirements.
          </p>
        </div>
        <div className="grid grid-cols-1 mt-20 px-24 gap-12 md:grid-cols-2 lg:mt-32 lg:px-28 lg:gap-24 lg:grid-cols-3">
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

      <section className="bg-[#1E1E1E] px-12 py-12 lg:px-24 lg:py-12">
        <div className="flex flex-col items-center mt-12">
          <h2 className="text-[#868FFF] font-poppins text-xs font-semibold">
            OUR PROJECTS
          </h2>
          <h3 className="text-white mt-2 font-poppins text-2xl font-semibold md:text-3xl">
            Custom Work We Have Worked On
          </h3>
          <p className="mt-4 text-[#D4D4D4] text-center font-poppins text-sm font-normal w-9/12 lg:w-5/12">
            Explore our diverse portfolio of completed projects. From web
            development and digital marketing to app design and branding, our
            projects exemplify our expertise and commitment to delivering
            exceptional results.
          </p>
        </div>
        {/* Projects Examples */}
        <div className="grid grid-cols-1 gap-12 mt-24 md:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-1">
            <img
              src="src/assets/images/work-2.png"
              alt=""
              className="rounded-md"
            />
            <span class="bg-[#5454D4] text-gray-300 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
              Front-end
            </span>
            <h2 className="font-bold text-lg font-poppins text-gray-200 lg:text-xl">
              Flex Dealer
            </h2>
          </div>
          <div className="col-span-1">
            <img
              src="src/assets/images/work-1.png"
              alt=""
              className="rounded-md"
            />
            <span class="bg-[#5454D4] text-gray-300 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
              UI/UX Design
            </span>
            <h2 className="font-bold text-lg font-poppins text-gray-200 lg:text-xl">
              Sortseam
            </h2>
          </div>
          <div className="col-span-1">
            <img
              src="src/assets/images/work-2.png"
              alt=""
              className="rounded-md"
            />
            <span class="bg-[#5454D4] text-gray-300 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
              Full-stack
            </span>
            <h2 className="font-bold text-lg font-poppins text-gray-200 lg:text-xl">
              Fourth Profile
            </h2>
          </div>
          <div className="col-span-1">
            <img
              src="src/assets/images/work-2.png"
              alt=""
              className="rounded-md"
            />
            <span class="bg-[#5454D4] text-gray-300 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
              Front-end
            </span>
            <h2 className="font-bold text-lg font-poppins text-gray-200 lg:text-xl">
              Flex Dealer
            </h2>
          </div>
          <div className="col-span-1">
            <img
              src="src/assets/images/work-1.png"
              alt=""
              className="rounded-md"
            />
            <span class="bg-[#5454D4] text-gray-300 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
              UI/UX Design
            </span>
            <h2 className="font-bold text-lg font-poppins text-gray-200 lg:text-xl">
              Sortseam
            </h2>
          </div>
          <div className="col-span-1">
            <img
              src="src/assets/images/work-2.png"
              alt=""
              className="rounded-md"
            />
            <span class="bg-[#5454D4] text-gray-300 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
              Full-stack
            </span>
            <h2 className="font-bold text-lg font-poppins text-gray-200 lg:text-xl">
              Fourth Profile
            </h2>
          </div>
        </div>
      </section>

      {/* Our Values Section */}

      <section className="px-24 py-12 bg-[#4A4AFF]">
        <div className="flex justify-center items-center">
          <h2 className="text-white w-8/12 text-center font-poppins text-2xl font-semibold lg:w-5/12 lg:text-3xl">
            Our values define our teams and determine our partners.
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-12 mt-16 lg:grid-cols-5 lg:gap-2 lg:mt-24">
          <div className="col-span-1">
            <h3 className="text-white text-lg w-6/12 font-poppins font-semibold lg:text-xl">
              People First
            </h3>
            <p className="text-white font-poppins w-11/12 text-sm font-normal mt-2 lg:w-9/12">
              We care about People before products and profits
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-white text-lg w-6/12 font-poppins font-semibold lg:text-xl">
              Always Learning
            </h3>
            <p className="text-white font-poppins w-11/12 text-sm font-normal mt-2 lg:w-9/12">
              We care about People before products and profits
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-white text-lg w-6/12 font-poppins font-semibold lg:text-xl">
              Trust is Everything
            </h3>
            <p className="text-white font-poppins w-11/12 text-sm font-normal mt-2 lg:w-9/12">
              We care about People before products and profits
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-white text-lg w-7/12 font-poppins font-semibold lg:text-xl">
              Dream and Deliver Big
            </h3>
            <p className="text-white font-poppins w-11/12 text-sm font-normal mt-2 lg:w-9/12">
              We care about People before products and profits
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-white text-lg w-9/12 font-poppins font-semibold lg:text-xl">
              Client Success is our Success
            </h3>
            <p className="text-white font-poppins w-11/12 text-sm font-normal mt-2 lg:w-9/12">
              We care about People before products and profits
            </p>
          </div>
        </div>
        <div className="mt-32 flex justify-center">
          <a href="#" className="px-6 py-2 bg-[#1E1E1E] text-white">
            Start a Conversation
          </a>
        </div>
      </section>

      {/* Tools and Experience Section */}

      <section className="px-12 py-8 tools-gradient grid grid-cols-1 lg:px-24 lg:py-12 lg:grid-cols-2">
        <div className="col-span-1 space-y-8 py-24">
          <h2 className="text-white font-inter text-4xl font-bold">
            Tools and Experience
          </h2>
          <p className="text-[#D4D4D4] font-poppins text-sm font-normal w-8/12">
            Our experience covers a wide range of solutions, industries and
            frameworks. We aim to be technology agnostic, choosing the right
            tool for the job, and some of our favorite tools are ReactJS, React
            Native, Ruby on Rails and Node.js.
          </p>
          <ul className="space-y-2 text-white font-poppins text-lg font-semibold">
            <li>Web Applications</li>
            <li>UI/UX Design</li>
            <li>Video Editting</li>
            <li>Social Media Management</li>
          </ul>
        </div>
        <div className="col-span-1 flex justify-center">
          <img src="src/assets/images/tools.png" alt="" className="w-9/12" />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;