import React, { useState } from "react";
import CurrencyFront from "../../assets/swiper-currencycharmeleon.png";
import CurrencyBack from "../../assets/swiper-currencycharmeleon-back.png";

const Projects = () => {
  const [openTab, setOpenTab] = useState(1);

  const [isImageFront, setIsImageFront] = useState(false);
  const [isImageBack, setIsImageBack] = useState(false);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full h-[w-full]">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-[#724FFF]"
                    : "text-[#1d252d] bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                GreenCorner
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-[#724FFF]"
                    : "text-[#1d252d] bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                PokéWorld
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-[#724FFF]"
                    : "text-[#1d252d] bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Rick And Morty
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 4
                    ? "text-white bg-[#724FFF]"
                    : "text-[#1d252d] bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                Currency Converter
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div
                  className={
                    openTab === 1 ? "flex flex-col md:flex-row" : "hidden"
                  }
                  id="link1"
                >
                  <div className="w-full md:w-1/2 pr-4 text-[#1d252d] mr-5 ml-3 mb-5">
                    <p className="mb-1 mt-1 text-[18px] font-semibold">
                      🌿 Key Achievements:
                    </p>
                    <p>
                      I led the development of a plant-focused ecommerce site,
                      implementing Git Flow for code optimization. The
                      aesthetics were designed using Figma, and I contributed to
                      full-stack development, with a focus on debugging and
                      issue resolution.
                    </p>
                    <p className="mt-4 text-[16px] font-semibold">
                      ⚙️ Tech Stack:
                    </p>
                    <p className="mb-6">
                      React, Redux, Tailwind CSS, Aos, Cloudinary, Node JS,
                      Express, PostgreSQL, Auth0, API Mercado Pago, Nodemailer,
                      Sequelize
                    </p>
                    <div className="flex flex-wrap">
                      <a href="https://green-corner.vercel.app/">
                        💻 Visit the GreenCorner website
                      </a>
                      <a href="https://github.com/gabrielagi/PF-G4-GreenCorner">
                        📌 Visit the GreenCorner Repository
                      </a>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/b0dlbAlZn4M"
                      title="YouTube Video Player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>

                <div
                  className={
                    openTab === 2 ? "flex flex-col md:flex-row" : "hidden"
                  }
                  id="link2"
                >
                  <div className="w-full md:w-1/2 pr-4 text-[#1d252d] mr-5 ml-3 mb-5">
                    <p className="mb-1 mt-1 text-[18px] font-semibold">
                      🌟 Key Achievements:
                    </p>
                    <p>
                      I led the development of a Pokémon application, focusing
                      on enhancing user experience through personalized
                      favorites and advanced filtering by Pokémon types.
                      Spearheaded the creation of a unique Pokédex that allows
                      users to discover and interact with a diverse range of
                      Pokémon.
                    </p>
                    <p className="mt-4 text-[16px] font-semibold">
                      ⚙️ Tech Stack:
                    </p>
                    <p className="mb-6">
                      React, Redux, Styled Components, Node JS, Express,
                      PostgreSQL, JEST, PokeApi, Sequelize
                    </p>
                    <div className="flex flex-wrap">
                      <a href="https://green-corner.vercel.app/">
                        📌 Visit the PokéWorld Repository
                      </a>
                      <a href="https://www.behance.net/gallery/180358341/PokWorld">
                        📸 Explore high-quality screenshots
                      </a>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/aMaU_KK5aBk"
                      title="YouTube Video Player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
                <div
                  className={
                    openTab === 3 ? "flex flex-col md:flex-row" : "hidden"
                  }
                  id="link4"
                >
                  <div className="w-full md:w-1/2 pr-4 text-[#1d252d] mr-5 ml-3 mb-5">
                    <p className="mb-1 mt-1 text-[18px] font-semibold">
                      🌌 Key Achievements:
                    </p>
                    <p>
                      The app allows in-depth exploration of character
                      information, creating a personalized favorites list, and
                      applying filters and sorting.
                    </p>
                    <p className="mt-4 text-[16px] font-semibold">
                      ⚙️ Tech Stack:
                    </p>
                    <p className="mb-6">
                      React, Redux, Styled Components,Node JS, Express,
                      PostgreSQL, Jest, React Router, Sequelize
                    </p>
                    <div className="flex flex-wrap">
                      <a href="https://github.com/gabrielagi/PI-rick-and-morty">
                        📌 Visit the Rick and Morty Repository
                      </a>
                      <a href="https://www.behance.net/gallery/178698591/Rick-and-Morty-Integration-Project">
                        📸 Explore high-quality screenshots
                      </a>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/Z2y8To0EhDU"
                      title="YouTube Video Player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
                <div
                  className={
                    openTab === 4 ? "flex flex-col md:flex-row" : "hidden"
                  }
                  id="link4"
                >
                  <div className="w-full md:w-1/2 pr-4 text-[#1d252d] mr-5 ml-3 mb-5">
                    <p className="mb-1 mt-1 text-[18px] font-semibold">
                      💰 Key Achievements:
                    </p>
                    <p>
                      A straightforward React Native app for currency
                      conversion. Users can easily convert between different
                      currencies, thanks to real-time exchange rates fetched
                      from an external API. The backend is powered by Node.js.
                    </p>
                    <p className="mt-4 text-[16px] font-semibold">
                      ⚙️ Tech Stack:
                    </p>
                    <p className="mb-6">
                      React Native, Expo, Expo Font, Expo Splash Screen, Axios,
                      React Native Dotenv, React Native Google Fonts, React
                      Native Link, React Native Reanimated, React Native
                      Screens, React Navigation, Styled Components, Node JS,
                      Express,
                    </p>
                    <div className="flex flex-wrap">
                      <a href="https://github.com/gabrielagi/CurrencyConverter">
                        📌 Visit the Currency Charmeleon Repository
                      </a>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="flex flex-wrap">
                      <img
                        src={CurrencyFront}
                        alt="Currency Front"
                        className="w-1/2"
                        onClick={() => setIsImageFront(true)}
                      />
                      <img
                        src={CurrencyBack}
                        alt="Currency Back"
                        className="w-1/2"
                        onClick={() => setIsImageBack(true)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function ProjectsRender() {
  return (
    <>
      <Projects color="purple" />
    </>
  );
}
