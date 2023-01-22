import React from "react";
import { FaLongArrowAltDown, FaLongArrowAltLeft } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { TbBrandGithub } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { FadeIn } from "react-slide-fade-in";
import me from "../media/me.jpg";

function About() {
  const navigate = useNavigate();
  return (
    <div className=" h-fit bg-[#0F0F0F] font-baron ">
      <FadeIn durationInMilliseconds={2000}>
        <div className="grid gap-10 text-[#757575]/30 grid-cols-16 text-xl h-screen place-items-center px-[20vw] relative">
          <FaLongArrowAltLeft
            className="fixed transition-all top-5 left-5 text-white/40 hover:text-white"
            onClick={() => {
              navigate("/");
            }}
          />
          <h1>X</h1>
          <h1>X</h1>
          <h1>{`<`}</h1>
          <h1 className=" info">A</h1>
          <h1 className=" info">B</h1>
          <h1 className=" info">O</h1>
          <h1 className=" info">U</h1>
          <h1 className=" info">T</h1>
          <h1>X</h1>
          <h1 className=" info">M</h1>
          <h1 className=" info">E</h1>

          <h1>{`/`}</h1>
          <h1>{`>`}</h1>
          <h1>X</h1>
          <h1>X</h1>
          <h1>X</h1>
        </div>
        <Link to="about" smooth={true}>
          <FaLongArrowAltDown className="absolute text-white bottom-5 left-[50%] animate-bounce h-5 w-5" />
        </Link>
      </FadeIn>
      <div
        className="text-white justify-self-end mx-[20vw] py-20 h-screen flex items-center justify-center space-x-16"
        id="about"
      >
        <div className="flex items-center p-10 space-x-10 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl">
          <img src={me} alt="" className=" h-[20vh] rounded-xl" />
          <div>
            <h1 className="text-xl tracking-[0.8rem] uppercase ">
              Akshit Agrawal
            </h1>
            <h1 className="mt-6 text-lg">
              I'm a Front End Developer <br /> Trying to make the web a better{" "}
              <br /> Connect with me to discuss awesome ideas
            </h1>
            <div className="flex items-center mt-5 space-x-5">
              <a
                href="https://github.com/justAkshitAgrawal"
                target="_blank"
                rel="noreferrer"
              >
                <TbBrandGithub className="w-6 h-6 mt-1 text-white " />
              </a>
              <a
                href="https://www.linkedin.com/in/akshit-agrawal-586365227/"
                target="_blank"
                rel="noreferrer"
              >
                <ImLinkedin2 className="mt-1  text-[#0077b5] h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
