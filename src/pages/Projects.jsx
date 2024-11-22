import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Projects = () => {
  return (
    <div>
      <header className="bg-[#0A0E12]">
        <NavBar />
      </header>
      <main className="bg-[#0A0E12] px-12 py-16 lg:px-24 lg:py-10">
        <div className="space-y-16">
          {/* 
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
          */}
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
                Femininity aims to take woman’s activewear and make women feel
                fierce, confident and sexy inside and outside of the gym.
                Femininity activewear was created to drive women to feel
                empowered by their active wear. Whether it’s leggings, gym
                shorts, sports bras, jumpsuits or crop tops, Rachel V’s vision
                is to “bring the heat” to your workouts and lifestyle.
              </p>
              <a
                href="https://www.femininitybyrachelv.com/"
                className="text-[#5454D4] hover:underline"
              >
                https://www.femininitybyrachelv.com/
              </a>
            </div>
          </div>
          {/*
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
          */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="col-span-1">
              <img
                src="/images/rachelv.png"
                alt=""
                className="max-w-full rounded-xl"
              />
            </div>
            <div className="col-span-1 text-white flex flex-col justify-center space-y-4">
              <h1 className="text-2xl font-semibold lg:text-3xl">
                Femininity by Rachel V Podcast
              </h1>
              <p className="text-base text-gray-400">
                Femininity aims to take woman’s activewear and make women feel
                fierce, confident and sexy inside and outside of the gym.
                Femininity activewear was created to drive women to feel
                empowered by their active wear. Whether it’s leggings, gym
                shorts, sports bras, jumpsuits or crop tops, Rachel V’s vision
                is to “bring the heat” to your workouts and lifestyle.
              </p>
              <a
                href="https://open.spotify.com/show/6naqbamMRStBMWigQXB0Kh?si=71226010aa40467c"
                className="text-[#5454D4] hover:underline"
              >
                Femininity By RachelV Podcast
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="col-span-1">
              <img
                src="/images/marty-party.png"
                alt=""
                className="max-w-full rounded-xl"
              />
            </div>
            <div className="col-span-1 text-white flex flex-col justify-center space-y-4">
              <h1 className="text-2xl font-semibold lg:text-3xl">
                The Marty Party Podcast
              </h1>
              <p className="text-base text-gray-400">
                This is Marty asking questions about lifestyle, habits, and
                ideas to people that inspire him. He hopes to identify the paths
                and pivotal moments that make them who they are today, and how
                they choose to live. This is his way to get a peek into the
                lives of young thought leaders, and he hopes to share this
                journey with all of you.
              </p>
              <a
                href="https://open.spotify.com/show/6T58CXTCNFzWMh6OjUA87u?si=7c43f74e612647ed"
                className="text-[#5454D4] hover:underline"
              >
                The Marty Party Podcast
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="col-span-1">
              <img
                src="/images/buy-build.png"
                alt=""
                className="max-w-full rounded-xl"
              />
            </div>
            <div className="col-span-1 text-white flex flex-col justify-center space-y-4">
              <h1 className="text-2xl font-semibold lg:text-3xl">
                Buy and Build Podcast
              </h1>
              <p className="text-base text-gray-400">
                Buy and Build is a weekly Podcast that explores the nuances of
                buying and building small businesses, with a focus on the UK and
                Europe. If you are interested in small business acquisition or
                investing, then this show is for you! Wel will dissect the
                strategies and insights of small business owners, investors and
                other deal professionals that we meet along our journeys to
                acquire and invest in our own profitable small businesses.
              </p>
              <a
                href="https://open.spotify.com/show/4fl6zA4LbH9BlftkMEDKeL?si=15ef8b718ff34158"
                className="text-[#5454D4] hover:underline"
              >
                Buy and Build Podcast
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
