import { useState } from "react";
import axios from "axios";

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import "./assets/css/hero.css";

function App() {
  //Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  //Submit event
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      Name: name,
      Email: email,
      Phone: phone,
      Message: message,
    };

    axios
      .post(
        "https://sheet.best/api/sheets/0d529c7f-b0f9-4487-ac96-0c2fab9764b8",
        data
      )
      .then((response) => {
        alert("Message sent successfully");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      });
  };

  return (
    <div className="bg-[#0A0E12] h-full font-raleway">
      <header>
      <div className="bg-[#0A0E12]">
          <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto text-center">
            
            <a className="group inline-flex flex-wrap items-center bg-white/10 hover:bg-white/10 focus:outline-none focus:bg-white/10 border border-white/10 p-1 ps-4 rounded-full shadow-md" href="../figma.html">
              <p className="me-2 text-white text-sm">
                We are Launching a new version of our website soon. Stay Tuned!
              </p>
            </a>
            
          </div>
        </div>
        <Navbar />
      </header>
      {/* Hero Section */}
      <section className="gradientt">
        <div className="max-w-6xl px-4 xl:px-0 py-10 lg:py-12 mx-auto">
          <div className="px-4 py-16 md:px-12 lg:py-12 lg:px-24">
            <div className="">
              <h1 className="font-inter text-3xl font-medium text-white w-11/12 md:text-3xl md:w-10/12 lg:text-5xl lg:text-center lg:w-11/12">
                Your <span className="text-[#868FFF]">Trusted Partner</span> for
                Tailored Digital Solutions, Designed to{" "}
                <span className="text-[#868FFF]">Transform Your Success</span>
              </h1>
              <div className="flex items-center justify-center">
                <p className="text-[#A8A8A8] mt-10 font-inter font-normal text-sm w-12/12 md:text-base md:w-10/12 lg:mt-16 lg:w-11/12 lg:text-center lg:text-base">
                  At Sortseam, we're here to make your digital dreams a reality.
                  Our dedicated team specializes in creating custom digital
                  solutions that are perfectly suited to your unique needs.
                  Discover how we can help you achieve unparalleled success in the
                  digital world.
                </p>
              </div>
              
              <div className="flex flex-col space-y-6 mt-16 justify-center md:mt-24 md:justify-start md:space-y-0 md:flex-row md:items-center md:justify-center md:space-x-12">
                <a
                  href="#contact"
                  className="px-3 py-3 w-full text-center text-white bg-[#5454D4] hover:bg-[#4A4AFF] lg:w-60 lg:px-6 lg:py-3"
                >
                  <span className="text-sm lg:text-base">Book a Meeting</span>
                </a>
                <a
                  href={`/projects`}
                  className="px-3 py-3 w-full text-center text-[#A8A8A8] border border-[#5454D4] hover:bg-[#4A4AFF] hover:text-white lg:w-60 lg:px-6 lg:py-3"
                >
                  <span className="text-sm lg:text-base">See Our Work</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we do Section */}

      <section
        id="services"
        className="services-gradient text-white"
      >
        <div className="max-w-6xl px-4 xl:px-0 py-10 lg:py-12 mx-auto">
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
              <img src="/images/icon1.svg" alt="icon" />
            </div>
          </div>
          <div className="flex flex-col items-center space-y-12 px-4 mt-20 sm:grid sm:grid-cols-2 md:space-y-0 lg:px-24 lg:mt-24 lg:flex lg:flex-row lg:space-y-0 lg:items-center lg:justify-between">
            <div className="flex flex-col">
              <img
                src="/images/icon-video.png"
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
                src="/images/icon2.png"
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
                src="/images/icon3.png"
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
            <img src="/images/icon4.png" alt="icon" />
            <div>
              <a
                href="#contact"
                className="px-6 py-2 bg-[#5454D4] hover:bg-[#4A4AFF]"
              >
                Get In Touch
              </a>
            </div>
            <div></div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}

      <section className="services-gradient">
        <div className="max-w-6xl px-4 xl:px-0 py-10 lg:py-12 mx-auto">
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
          <div className="grid grid-cols-1 mt-8 px-4 gap-12 md:grid-cols-2 md:px-12 lg:mt-32 lg:px-16 lg:gap-12 lg:grid-cols-2">
            <div className="col-span-1 border border-transparent hover:border-[#5454D4] hover:rounded-lg p-4">
              <h2 className="text-white mt-2 font-poppins text-xl font-semibold">
                Client-Centric Excellence
              </h2>
              <p className="text-[#878988] font-poppins text-sm mt-2 font-normal w-full">
                We prioritize open communication, collaboration, and a tailored
                approach to provide solutions that align perfectly with your
                vision.
              </p>
            </div>
            <div className="col-span-1 border border-transparent hover:border-[#5454D4] hover:rounded-lg p-4">
              <h2 className="text-white mt-2 font-poppins text-xl font-semibold">
                Our Proven Track Record
              </h2>
              <p className="text-[#878988] font-poppins text-sm mt-2 font-normal w-full">
                Dive into a collection of successful projects that showcase our
                expertise, creativity, and the tangible impact weve made for
                businesses across diverse industries.
              </p>
            </div>
            <div className="col-span-1 border border-transparent hover:border-[#5454D4] hover:rounded-lg p-4">
              <h2 className="text-white mt-2 font-poppins text-xl font-semibold">
                24/7 Support and Dedication
              </h2>
              <p className="text-[#878988] font-poppins text-sm mt-2 font-normal w-full">
                Your success is our priority, and our commitment goes beyond
                office hours. With sortseam, enjoy the assurance of 24/7 support
                and dedication.
              </p>
            </div>
            <div className="col-span-1 border border-transparent hover:border-[#5454D4] hover:rounded-lg p-4">
              <h2 className="text-white mt-2 font-poppins text-xl font-semibold">
                Innovation Meets Reliability
              </h2>
              <p className="text-[#878988] font-poppins text-sm mt-2 font-normal w-full">
                We pride ourselves on pushing the boundaries of creativity while
                maintaining unwavering reliability in project delivery.
              </p>
            </div>
            <div className="col-span-1 border border-transparent hover:border-[#5454D4] hover:rounded-lg p-4">
              <h2 className="text-white mt-2 font-poppins text-xl font-semibold">
                Industry Leading Experts
              </h2>
              <p className="text-[#878988] font-poppins text-sm mt-2 font-normal w-full">
                By choosing us, you entrust your vision to a team that not only
                understands the intricacies of your industry but also sets the
                standard for excellence.
              </p>
            </div>
            <div className="col-span-1 border border-transparent hover:border-[#5454D4] hover:rounded-lg p-4">
              <h2 className="text-white mt-2 font-poppins text-xl font-semibold">
                Client Testimonials
              </h2>
              <p className="text-[#878988] font-poppins text-sm mt-2 font-normal w-full">
                Discover the stories of success directly from our clients. Our
                testimonials offer firsthand accounts of the positive experiences
                businesses have had while working with sortseam.
              </p>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <a
              href="#contact"
              className="px-6 py-2 text-white bg-[#5454D4] hover:bg-[#4A4AFF]"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}

      <section className="bg-[#0A0E12]">
        <div className="max-w-6xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
          <div className="flex flex-col items-center mt-12">
            <h2 className="text-[#868FFF] font-poppins text-xs font-semibold">
              OUR PROJECTS
            </h2>
            <h3 className="text-white text-center mt-2 font-poppins text-xl font-semibold md:text-3xl">
              Custom Work We Have Worked On
            </h3>
            <p className="mt-4 text-[#D4D4D4] text-center font-poppins text-sm font-normal w-11/12 lg:w-5/12">
              Explore our diverse portfolio of completed projects. From web
              development and digital marketing to app design and branding, our
              projects exemplify our expertise and commitment to delivering
              exceptional results.
            </p>
          </div>
          {/* Projects Examples */}
          <div className="grid grid-cols-1 gap-8 mt-24 md:grid-cols-2 lg:grid-cols-3">
            <div className="col-span-1">
              <img src="/images/work-4.png" alt="" className="rounded-md" />
              <div className="flex items-center mt-2">
                <span className="bg-[#5454D4] text-gray-300 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
                  Website
                </span>
                <span className="bg-green-600 text-gray-300 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
                  In Progress
                </span>
              </div>

              <h2 className="font-semibold text-lg font-poppins text-gray-200 lg:text-base">
                Donga CarSpa
              </h2>
            </div>
            <div className="col-span-1">
              <img src="/images/work-5.png" alt="" className="rounded-md " />
              <div className="flex items-center mt-2">
                <span className="bg-[#5454D4] text-gray-300 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
                  Website
                </span>
                <span className="bg-green-600 text-gray-300 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
                  In Progress
                </span>
              </div>
              <h2 className="font-semibold text-lg font-poppins text-gray-200 lg:text-base">
                AC Steel Engineering
              </h2>
            </div>
            <div className="col-span-1">
              <img src="/images/work-3.png" alt="" className="rounded-md " />
              <span className="bg-[#5454D4] text-gray-300 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
                Website
              </span>
              <h2 className="font-semibold text-lg font-poppins text-gray-200 lg:text-base">
                Femininity By Rachel V
              </h2>
            </div>
            <div className="col-span-1">
              <img
                src="/images/marty-party.png"
                alt=""
                className="rounded-md max-w-full"
              />
              <span className="bg-[#5454D4] text-gray-300 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
                Podcast
              </span>
              <h2 className="font-semibold text-lg font-poppins text-gray-200 lg:text-base">
                The Marty Party Podcast
              </h2>
            </div>
            <div className="col-span-1">
              <img
                src="/images/buy-build.png"
                alt=""
                className="rounded-md w-auto"
              />
              <span className="bg-[#5454D4] text-gray-300 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
                Podcast
              </span>
              <h2 className="font-semibold text-lg font-poppins text-gray-200 lg:text-base">
                Buy and Build
              </h2>
            </div>
            <div className="col-span-1">
              <img
                src="/images/rachelv.png"
                alt=""
                className="rounded-md w-auto"
              />
              <span className="bg-[#5454D4] text-gray-300 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
                Podcast
              </span>
              <h2 className="font-semibold text-lg font-poppins text-gray-200 lg:text-base">
                Femininity By Rachel V
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}

      <section className="bg-[#4A4AFF]">
        <div className="max-w-6xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
          <div className="flex justify-center items-center">
            <h2 className="text-white w-8/12 text-center font-poppins text-xl font-semibold lg:w-5/12 lg:text-3xl">
              Our values define our teams and determine our partners.
            </h2>
          </div>
          <div className="grid grid-cols-1 px-12 gap-10 mt-16 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-5 lg:gap-y-10 lg:mt-24">
            <div className="col-span-1">
              <h3 className="text-white text-lg w-6/12 font-poppins font-semibold lg:text-xl lg:w-3/12">
                People First
              </h3>
              <p className="text-white font-poppins w-full text-sm font-normal mt-2 lg:w-11/12">
                Putting people at the forefront ensures meaningful, collaborative,
                and impactful solutions.
              </p>
            </div>
            <div className="col-span-1">
              <h3 className="text-white text-lg w-6/12 font-poppins font-semibold lg:text-xl">
                Always Learning
              </h3>
              <p className="text-white font-poppins w-full text-sm font-normal mt-2 lg:w-9/12">
                We stay at the forefront of industry trends, technologies, and
                strategies.
              </p>
            </div>
            <div className="col-span-1">
              <h3 className="text-white text-lg w-6/12 font-poppins font-semibold lg:text-xl">
                Trust is Everything
              </h3>
              <p className="text-white font-poppins w-full text-sm font-normal mt-2 lg:w-9/12">
                Choosing us means choosing a partner you can trust to bring your
                vision to life.
              </p>
            </div>
            <div className="col-span-1">
              <h3 className="text-white text-lg w-7/12 font-poppins font-semibold lg:text-xl">
                Dream and Deliver Big
              </h3>
              <p className="text-white font-poppins w-full text-sm font-normal mt-2 lg:w-9/12">
                We encourage our clients to envision their boldest ideas.
              </p>
            </div>
            <div className="col-span-1">
              <h3 className="text-white text-lg w-9/12 font-poppins font-semibold lg:text-xl">
                Client Success is our Success
              </h3>
              <p className="text-white font-poppins w-full text-sm font-normal mt-2 lg:w-11/12">
                Your success is not just a goal; its our measure of achievement.
              </p>
            </div>
          </div>
          <div className="mt-32 flex justify-center">
            <a href="#contact" className="px-6 py-2 bg-[#1E1E1E] text-white">
              Start a Conversation
            </a>
          </div>
        </div>
      </section>

      {/* Tools and Experience Section */}

      <section className="tools-gradient">
        <div className="grid grid-cols-1 max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto lg:grid-cols-2">
          <div className="col-span-1 space-y-8 py-24">
            <h2 className="text-white font-inter text-4xl font-bold">
              Tools and Experience
            </h2>
            <p className="text-[#D4D4D4] font-poppins text-sm font-normal w-10/12">
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
          <div className="col-span-1 flex justify-center lg:justify-start">
            <img src="/images/toolss.png" alt="" className="w-11/12" />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      
<div className="bg-[#0A0E12]">
  <div className="max-w-6xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
    
    <div className="max-w-3xl mb-10 lg:mb-14">
      <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">Contact us</h2>
      <p className="mt-1 text-neutral-400">Whatever your goal - we will get you there.</p>
    </div>
    

    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
      <div className="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
        <form>
          <div className="space-y-4">
            
            <div className="relative">
              <input type="text" id="hs-tac-input-name" className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
              focus:pt-6
              focus:pb-2
              [&:not(:placeholder-shown)]:pt-6
              [&:not(:placeholder-shown)]:pb-2
              autofill:pt-6
              autofill:pb-2" placeholder="Name"/>
              <label htmlFor="hs-tac-input-name" className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:text-xs
                peer-focus:-translate-y-1.5
                peer-focus:text-neutral-400
                peer-[:not(:placeholder-shown)]:text-xs
                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                peer-[:not(:placeholder-shown)]:text-neutral-400">Name</label>
            </div>
            

            
            <div className="relative">
              <input type="email" id="hs-tac-input-email" className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
              focus:pt-6
              focus:pb-2
              [&:not(:placeholder-shown)]:pt-6
              [&:not(:placeholder-shown)]:pb-2
              autofill:pt-6
              autofill:pb-2" placeholder="Email"/>
              <label htmlFor="hs-tac-input-email" className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:text-xs
                peer-focus:-translate-y-1.5
                peer-focus:text-neutral-400
                peer-[:not(:placeholder-shown)]:text-xs
                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                peer-[:not(:placeholder-shown)]:text-neutral-400">Email</label>
            </div>
           

            
            <div className="relative">
              <input type="text" id="hs-tac-input-company" className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
              focus:pt-6
              focus:pb-2
              [&:not(:placeholder-shown)]:pt-6
              [&:not(:placeholder-shown)]:pb-2
              autofill:pt-6
              autofill:pb-2" placeholder="Company"/>
              <label htmlFor="hs-tac-input-company" className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:text-xs
                peer-focus:-translate-y-1.5
                peer-focus:text-neutral-400
                peer-[:not(:placeholder-shown)]:text-xs
                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                peer-[:not(:placeholder-shown)]:text-neutral-400">Company</label>
            </div>
            

            
            <div className="relative">
              <input type="text" id="hs-tac-input-phone" className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
              focus:pt-6
              focus:pb-2
              [&:not(:placeholder-shown)]:pt-6
              [&:not(:placeholder-shown)]:pb-2
              autofill:pt-6
              autofill:pb-2" placeholder="Phone"/>
              <label htmlFor="hs-tac-input-phone" className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:text-xs
                peer-focus:-translate-y-1.5
                peer-focus:text-neutral-400
                peer-[:not(:placeholder-shown)]:text-xs
                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                peer-[:not(:placeholder-shown)]:text-neutral-400">Phone</label>
            </div>
            

            
            <div className="relative">
              <textarea id="hs-tac-message" className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
              focus:pt-6
              focus:pb-2
              [&:not(:placeholder-shown)]:pt-6
              [&:not(:placeholder-shown)]:pb-2
              autofill:pt-6
              autofill:pb-2" placeholder="This is a textarea placeholder"></textarea>
              <label htmlFor="hs-tac-message" className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:text-xs
                peer-focus:-translate-y-1.5
                peer-focus:text-neutral-400
                peer-[:not(:placeholder-shown)]:text-xs
                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                peer-[:not(:placeholder-shown)]:text-neutral-400">Tell us about your project</label>
            </div>
            
          </div>

          <div className="mt-2">
            <p className="text-xs text-neutral-500">
              All fields are required
            </p>

            <p className="mt-5">
              <a className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#5454D4] font-medium text-sm text-neutral-300 rounded-full focus:outline-none" href="#">
                Submit
                <svg className="shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </p>
          </div>
        </form>
      </div>
      

      <div className="space-y-14">
       
        <div className="flex gap-x-5">
          <svg className="shrink-0 size-6 text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          <div className="grow">
            <h4 className="text-white font-semibold">Our address:</h4>

            <address className="mt-1 text-neutral-400 text-sm not-italic">
              300 Bath Street, Tay House<br/>
              Glasgow G2 4JR, United Kingdom
            </address>
          </div>
        </div>
       

        
        <div className="flex gap-x-5">
          <svg className="shrink-0 size-6 text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"/><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"/></svg>
          <div className="grow">
            <h4 className="text-white font-semibold">Email us:</h4>

            <a className="mt-1 text-neutral-400 text-sm hover:text-neutral-200 focus:outline-none focus:text-neutral-200" href="#mailto:example@site.co" target="_blank">
              hello@example.so
            </a>
          </div>
        </div>
        

        
        <div className="flex gap-x-5">
          <svg className="shrink-0 size-6 text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>
          <div className="grow">
            <h4 className="text-white font-semibold">We're hiring</h4>
            <p className="mt-1 text-neutral-400">We're thrilled to announce that we're expanding our team and looking for talented individuals like you to join us.</p>
            <p className="mt-2">
              <a className="group inline-flex items-center gap-x-2 font-medium text-sm text-[#5454D4] decoration-2 hover:underline focus:outline-none focus:underline" href="#">
                Job openings
                <svg className="shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </p>
          </div>
        </div>
        
      </div>
      
    </div>
    
  </div>
</div>

      <Footer />
    </div>
  );
}

export default App;
