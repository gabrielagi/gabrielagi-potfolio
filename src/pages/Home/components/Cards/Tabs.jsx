import React, { useState } from "react";
import FullStack from "../../../../assets/GabrielaIriart-FullStackDeveloper.jpg";
import HH from "../../../../assets/HH_GabrielaIriart.jpg";

const Tabs = () => {
  const [openTab, setOpenTab] = useState(1);

  const [isImageFS, setIsImageFS] = useState(false);
  const [isImageHH, setIsImageHH] = useState(false);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
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
                Full Stack
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
                Mentor
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
                University
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p className="mb-6">
                    I underwent an intensive training program, exceeding 800
                    hours at the prestigious Henry Bootcamp.
                    <br />
                    <br />
                    Throughout this immersive experience, I honed my abilities
                    in crafting responsive user interfaces and robust
                    server-side functionalities.
                  </p>
                  <img
                    src={FullStack}
                    alt="Full Stack Developer"
                    // className={isImageLarge ? "w-full" : "w-20"}
                    className="w-20"
                    onClick={() => setIsImageFS(true)}
                  />
                  {isImageFS && (
                    <div className="fixed z-10 inset-0 bg-white flex items-center justify-center">
                      <div className="p-4 rounded-lg">
                        <img
                          src={FullStack}
                          alt="Descripción de la imagen"
                          className="w-full"
                        />
                      </div>
                      <div className="absolute top-4 right-4">
                        <button
                          className="right-0 bg-red-400 py-0 px-2 justify-center text-center text-[#fff]"
                          onClick={() => setIsImageFS(false)}
                        >
                          x
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    In my role as a mentor, I played a crucial part in guiding
                    aspiring programmers as a Henry Hero.
                    <br />
                    <br />
                    From facilitating the setup of essential tools to imparting
                    foundational JavaScript concepts, I focused on enhancing not
                    only technical skills but also soft skills like
                    communication, leadership, and empathy.
                  </p>
                  <img
                    src={HH}
                    alt="HH Mentor"
                    className="w-20"
                    onClick={() => setIsImageHH(true)}
                  />
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    Leveraging my comprehensive five-year university education
                    in technology, with a specialization in agile methodologies,
                    interface design, UX, and software quality, I bring a wealth
                    of knowledge and hands-on expertise to the table.
                    <br />
                    <br />
                    Throughout my academic journey, I delved into the
                    intricacies of agile development practices, gaining
                    proficiency in creating seamless user interfaces,
                    understanding user experiences, and ensuring the highest
                    standards of software quality.
                    <br />
                  </p>
                </div>
                {isImageHH && (
                  <div className="fixed z-10 inset-0 bg-white flex items-center justify-center">
                    <div className="p-4 rounded-lg">
                      <img
                        src={HH}
                        alt="Descripción de la imagen"
                        className="w-full"
                      />
                    </div>
                    <div className="absolute top-4 right-4">
                      <button
                        className="right-0 bg-red-400 py-0 px-2 justify-center text-center text-[#fff]"
                        onClick={() => setIsImageHH(false)}
                      >
                        x
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
      <Tabs color="purple" />
    </>
  );
}
