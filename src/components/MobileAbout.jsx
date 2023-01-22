import React from "react";
import { FaLongArrowAltDown, FaLongArrowAltLeft } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import {
  SiCss3,
  SiHtml5,
  SiJava,
  SiJavascript,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandGithub } from "react-icons/tb";
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { FadeIn } from "react-slide-fade-in";
import me from "../media/me.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import scrollify from "../media/scrollify.png";
import jobstry from "../media/jobstry.png";

function MobileAbout() {
  const navigate = useNavigate();

  return (
    <div className=" h-fit bg-[#0F0F0F] font-baron flex flex-col items-center justify-center ">
      <FadeIn durationInMilliseconds={2000}>
        <div className="grid  text-[#757575]/30 grid-cols-8 h-screen place-items-center gap-x-5  relative">
          <FaLongArrowAltLeft
            className="absolute transition-all top-5 -left-10 text-white/40 hover:text-white"
            onClick={() => {
              navigate("/");
            }}
          />

          <h1 className=" info">A</h1>
          <h1 className=" info">B</h1>
          <h1 className=" info">O</h1>
          <h1 className=" info">U</h1>
          <h1 className=" info">T</h1>
          <h1>X</h1>
          <h1 className=" info">M</h1>
          <h1 className=" info">E</h1>
        </div>
        <Link to="about" smooth={true}>
          <FaLongArrowAltDown className="absolute text-white bottom-5 left-[50%] animate-bounce h-5 w-5" />
        </Link>
      </FadeIn>

      {/* About */}

      <div
        className="text-white justify-self-end mx-[10vw] h-screen relative flex flex-col items-center justify-center "
        id="about"
      >
        <div className="flex flex-col items-center justify-center p-5 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl">
          <img src={me} alt="" className=" h-[20vh] rounded-xl" />
          <h1 className="text-lg tracking-[0.2rem] uppercase ">
            Akshit Agrawal
          </h1>
          <h1 className="mt-6 text-sm text-center">
            I'm a Front End Developer <br /> Trying to make the web a better
            place <br /> Connect with me to discuss awesome ideas
          </h1>
          <div className="flex items-center mt-5 space-x-5">
            <a
              href="https://github.com/justAkshitAgrawal"
              target="_blank"
              rel="noreferrer"
            >
              <TbBrandGithub className="w-6 h-6 text-white " />
            </a>
            <a
              href="https://www.linkedin.com/in/akshit-agrawal-586365227/"
              target="_blank"
              rel="noreferrer"
            >
              <ImLinkedin2 className="  text-[#0077b5] h-6 w-6" />
            </a>
          </div>
        </div>
        <Link to="skills" smooth={true}>
          <FaLongArrowAltDown className="absolute text-white bottom-5 left-[50%] animate-bounce h-5 w-5" />
        </Link>
      </div>

      {/* Skills */}
      <div
        className="text-white justify-self-end mx-[10vw] h-screen relative flex items-center flex-col justify-center "
        id="skills"
      >
        <div className="grid  text-[#757575]/30 grid-cols-8 place-items-center gap-x-5 relative">
          <h1>X</h1>
          <h1 className=" info">S</h1>
          <h1 className=" info">K</h1>
          <h1 className=" info">I</h1>
          <h1 className=" info">L</h1>
          <h1 className=" info">L</h1>
          <h1 className=" info">S</h1>
          <h1>X</h1>
        </div>{" "}
        <div className="flex items-center justify-center px-5 pt-10 space-x-8">
          <div className="flex flex-col space-y-6">
            <div className="p-4 bg-white/20 rounded-xl">
              <SiJavascript className="w-10 h-10 text-[#f8dc3d]" />
            </div>
            <div className="p-4 bg-white/20 rounded-xl">
              <SiJava className="w-10 h-10 text-[#e27107] " />{" "}
            </div>
          </div>
          <div className="flex flex-col space-y-6 mt-28 ">
            <div className="p-4 bg-white/20 rounded-xl">
              <SiReact className="w-10 h-10 text-[#5ccfee] " />{" "}
            </div>
            <div className="p-4 bg-white/20 rounded-xl">
              <SiTailwindcss className="w-10 h-10 text-[#01b7d6] " />{" "}
            </div>
          </div>
          <div className="flex flex-col -mt-10 space-y-6">
            <div className="p-4 bg-white/20 rounded-xl">
              <SiHtml5 className="w-10 h-10 text-[#e44d26] " />
            </div>
            <div className="p-4 bg-white/20 rounded-xl">
              <SiCss3 className="w-10 h-10 text-[#1a73ba]" />
            </div>
          </div>
        </div>
        <Link to="exp" smooth={true}>
          <FaLongArrowAltDown className="absolute text-white bottom-5 left-[50%] animate-bounce h-5 w-5" />
        </Link>
      </div>

      {/* Exp  */}

      <div
        className="text-white justify-self-end mx-[10vw] h-screen relative flex items-center flex-col justify-center "
        id="exp"
      >
        <div className="grid  text-[#757575]/30 grid-cols-8 place-items-center gap-x-5 relative">
          <h1>X</h1>
          <h1>X</h1>
          <h1>X</h1>
          <h1 className=" info">W</h1>
          <h1 className=" info">O</h1>
          <h1 className=" info">R</h1>
          <h1 className=" info">K</h1>
          <h1>X</h1>
        </div>{" "}
        <div className="flex items-center justify-center w-screen px-5 pt-20 space-x-4 ">
          <Carousel autoPlay={false} showArrows={false} showStatus={false}>
            <div className="flex  bg-[#292929]/40 p-5 mb-10 rounded-2xl items-start shadow-md shadow-black  ">
              <div className="flex flex-col items-start">
                <h1 className="text-xl ">Front-end Intern</h1>
                <h1>Scrollify</h1>
                <div className="flex mt-3 text-sm space-x-1 text-[#969695] ">
                  <h1>January 2023</h1>
                  <h1>-</h1>
                  <h1>Present</h1>
                </div>
                <h1 className=" mt-5 text-[#575757] text-start ">
                  • Developing the web app Scrollify.
                </h1>
              </div>
              <div>
                <img src={scrollify} alt="" className="h-12 " />
              </div>
            </div>
            <div className="flex bg-[#292929]/40 p-5 mb-10 rounded-2xl items-start shadow-md shadow-black  ">
              <div className="flex flex-col items-start">
                <h1 className="text-xl ">Front-end Intern</h1>
                <h1>Jobs Territory</h1>
                <div className="flex mt-3 text-sm space-x-1 text-[#969695] ">
                  <h1>June 2022</h1>
                  <h1>-</h1>
                  <h1>August 2022</h1>
                </div>
                <h1 className=" mt-5 text-[#575757] text-start ">
                  • Developed an ATS for the company. Led a team of 3 interns.
                </h1>
              </div>
              <div>
                <img src={jobstry} alt="" className="h-16 " />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default MobileAbout;
