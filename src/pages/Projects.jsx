import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Projects = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main className="bg-[#1E1E1E] px-12 py-16 lg:px-24 lg:py-10">
        <div className="space-y-16">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="col-span-1">
              <img
                src="/images/work-5.png"
                alt=""
                className="max-w-full rounded-lg"
              />
            </div>
            <div className="col-span-1 text-white flex flex-col justify-center space-y-4">
              <h1 className="text-2xl font-semibold lg:text-3xl">
                AC Steel Engineering
              </h1>
              <p className="text-base text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium maiores officia quibusdam similique nesciunt aut
                sint vitae? Corrupti dolor, reiciendis magnam maxime veritatis
                dolores porro omnis magni voluptatum laudantium! Repellat.
              </p>
              <a
                href="https://acsteel.vercel.app/"
                className="text-[#5454D4] hover:underline"
              >
                https://acsteel.vercel.app/
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="col-span-1">
              <img
                src="/images/work-3.png"
                alt=""
                className="max-w-full rounded-xl"
              />
            </div>
            <div className="col-span-1 text-white flex flex-col justify-center space-y-4">
              <h1 className="text-2xl font-semibold lg:text-3xl">
                Femininity By RachelV
              </h1>
              <p className="text-base text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium maiores officia quibusdam similique nesciunt aut
                sint vitae? Corrupti dolor, reiciendis magnam maxime veritatis
                dolores porro omnis magni voluptatum laudantium! Repellat.
              </p>
              <a
                href="https://www.femininitybyrachelv.com/"
                className="text-[#5454D4] hover:underline"
              >
                https://www.femininitybyrachelv.com/
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="col-span-1">
              <img
                src="/images/work-4.png"
                alt=""
                className="max-w-full rounded-xl"
              />
            </div>
            <div className="col-span-1 text-white flex flex-col justify-center space-y-4">
              <h1 className="text-2xl font-semibold lg:text-3xl">
                Donga CarSpa
              </h1>
              <p className="text-base text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium maiores officia quibusdam similique nesciunt aut
                sint vitae? Corrupti dolor, reiciendis magnam maxime veritatis
                dolores porro omnis magni voluptatum laudantium! Repellat.
              </p>
              <a
                href="https://www.dongacarspa.com/"
                className="text-[#5454D4] hover:underline"
              >
                https://www.dongacarspa.com/
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
