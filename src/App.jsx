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
    <div classname="bg-[#1E1E1E] h-full font-raleway">
      <header>
        <Navbar />
      </header>
      {/* Hero Section */}
      <section className="gradientt">
        <div className="">
          <div className="px-4 py-16 md:px-12 lg:py-24 lg:px-24">
            <div className="">
              <h1 className="font-inter text-4xl font-medium text-white w-11/12 md:text-4xl md:w-10/12 lg:text-6xl lg:text-start lg:w-8/12">
                Your <span className="text-[#868FFF]">Trusted Partner</span> for
                Tailored Digital Solutions, Designed to{" "}
                <span className="text-[#868FFF]">Transform Your Success</span>
              </h1>
              <p className="text-[#A8A8A8] mt-10 font-inter font-normal text-sm w-12/12 md:text-base md:w-10/12 lg:mt-16 lg:w-5/12 lg:text-start lg:text-base">
                At Sortseam, we're here to make your digital dreams a reality.
                Our dedicated team specializes in creating custom digital
                solutions that are perfectly suited to your unique needs.
                Discover how we can help you achieve unparalleled success in the
                digital world.
              </p>
              <div className="flex flex-col space-y-6 mt-16 justify-center md:mt-24 md:justify-start md:space-y-0 md:flex-row md:space-x-12">
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
        <div className="px-10 py-10 grid grid-cols-2 gap-8 lg:flex lg:justify-between lg:items-center lg:px-36 lg:py-16">
          <img src="/images/company.png" alt="logos" className="col-span-1" />
          <img src="/images/company.png" alt="logos" className="col-span-1" />
          <img src="/images/company.png" alt="logos" className="col-span-1" />
          <img src="/images/company.png" alt="logos" className="col-span-1" />
        </div>
      </section>

      {/* What we do Section */}

      <section
        id="services"
        className="services-gradient px-2 py-12 text-white md:px-12 lg:px-24 lg:py-16"
      >
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
        <div className="flex flex-col items-center space-y-12 px-4 mt-20 sm:grid sm:grid-cols-2 md:space-y-0 lg:px-44 lg:mt-24 lg:flex lg:flex-row lg:space-y-0 lg:items-center lg:justify-between">
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
            <a href="#" className="px-6 py-2 bg-[#5454D4] hover:bg-[#4A4AFF]">
              Get In Touch
            </a>
          </div>
          <div></div>
        </div>
      </section>

      {/* Why Choose Us Section */}

      <section className="services-gradient  px-2 py-12 md:px-12 lg:px-24 lg:py-12">
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
        <div className="grid grid-cols-1 mt-20 px-4 gap-12 md:grid-cols-2 md:px-12 lg:mt-32 lg:px-16 lg:gap-24 lg:grid-cols-3">
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
              expertise, creativity, and the tangible impact we've made for
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
        <div className="mt-32 flex justify-center">
          <a
            href="#"
            className="px-6 py-2 text-white bg-[#5454D4] hover:bg-[#4A4AFF]"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* Why Choose Us Section */}

      <section className="bg-[#1E1E1E] px-12 py-12 lg:px-24 lg:pb-24">
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
        <div className="grid grid-cols-1 gap-12 mt-24 md:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-1">
            <img src="/images/work-4.png" alt="" className="rounded-md" />
            <span class="bg-[#5454D4] text-gray-300 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
              Website
            </span>
            <h2 className="font-semibold text-lg font-poppins text-gray-200 lg:text-base">
              Donga CarSpa
            </h2>
          </div>
          <div className="col-span-1">
            <img src="/images/work-5.png" alt="" className="rounded-md " />
            <span class="bg-[#5454D4] text-gray-300 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
              Website
            </span>
            <h2 className="font-semibold text-lg font-poppins text-gray-200 lg:text-base">
              AC Steel Engineering
            </h2>
          </div>
          <div className="col-span-1">
            <img src="/images/work-3.png" alt="" className="rounded-md " />
            <span class="bg-[#5454D4] text-gray-300 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
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
            <span class="bg-[#5454D4] text-gray-300 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
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
            <span class="bg-[#5454D4] text-gray-300 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
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
            <span class="bg-[#5454D4] text-gray-300 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
              Podcast
            </span>
            <h2 className="font-semibold text-lg font-poppins text-gray-200 lg:text-base">
              Femininity By Rachel V
            </h2>
          </div>
        </div>
      </section>

      {/* Our Values Section */}

      <section className="px-4 py-12 bg-[#4A4AFF] lg:px-24">
        <div className="flex justify-center items-center">
          <h2 className="text-white w-8/12 text-center font-poppins text-xl font-semibold lg:w-5/12 lg:text-3xl">
            Our values define our teams and determine our partners.
          </h2>
        </div>
        <div className="grid grid-cols-1 px-12 gap-10 mt-16 lg:grid-cols-2 xl:grid-cols-5 xl:gap-x-5 lg:gap-y-10 lg:mt-24">
          <div className="col-span-1">
            <h3 className="text-white text-lg w-6/12 font-poppins font-semibold lg:text-xl lg:w-5/12">
              People First
            </h3>
            <p className="text-white font-poppins w-full text-sm font-normal mt-2 lg:w-9/12">
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
            <p className="text-white font-poppins w-full text-sm font-normal mt-2 lg:w-9/12">
              Your success is not just a goal; it's our measure of achievement.
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

      <section className="shadow-md shadow-[#4A4AFF] px-12 py-8 tools-gradient grid grid-cols-1 lg:px-24 lg:py-12 lg:grid-cols-2">
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
        <div className="col-span-1 flex justify-center lg:justify-start">
          <img src="/images/toolss.png" alt="" className="w-8/12" />
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="tools-gradient">
        <div class="flex flex-col items-center py-12 justify-around lg:px-24 lg:grid lg:grid-cols-2 lg:gap-24">
          <div className="max-w-md w-full mt-16 md:mt-12 lg:mt-0">
            <h2 className="text-[#868FFF] font-bold text-sm">TESTIMONIALS</h2>
            <h3 className="text-4xl text-white font-bold mt-4">
              Get In <span className="text-[#868FFF]">Touch</span>
            </h3>
            <div className="h-1 w-24 mt-2 bg-[#868FFF]"></div>
            <p className="my-6 text-gray-300">
              Ready to embark on a transformative journey? Whether you have a
              project in mind, questions about our services, or just want to say
              hello, we invite you to get in touch. Our team at sortseam is here
              to listen, collaborate, and bring your ideas to life. Reach out
              today, and let's start creating something extraordinary together.
            </p>
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-white">
                Email Address
              </h2>
              <p className="text-sm text-[#868FFF]">info@sortseam.com</p>
            </div>
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-white">Phone Number</h2>
              <p className="text-sm text-[#868FFF]">
                +254757327949 | +254705073697
              </p>
            </div>
          </div>
          <div class="max-w-md w-full space-y-8">
            <div>
              <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-400">
                Contact Us
              </h2>
            </div>
            <form class="mt-8 space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="remember" value="true" />
              <div class="rounded-md shadow-sm">
                <div>
                  <label for="name" class="sr-only">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autocomplete="name"
                    required
                    class="appearance-none rounded-md relative block w-full px-3 py-2 my-4 bg-transparent border border-[#4A4AFF] placeholder-[#868FFF] text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Full Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>
                <div>
                  <label for="name" class="sr-only">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="name"
                    required
                    class="appearance-none rounded-md relative block w-full px-3 py-2 my-8 bg-transparent border border-[#4A4AFF] placeholder-[#868FFF] text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="">
                  <label for="phone" class="sr-only">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autocomplete="tel"
                    required
                    class="appearance-none rounded-md relative block w-full px-3 py-2 my-8 bg-transparent border border-[#4A4AFF] placeholder-[#868FFF] text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Phone Number"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                  />
                </div>
                <div>
                  <label for="message" class="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    class="appearance-none resize-none rounded-md relative block w-full px-3 py-2 bg-transparent border border-[#4A4AFF] placeholder-[#868FFF] text-white rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Message"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                  ></textarea>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
