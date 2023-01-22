import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import {
  FaLinkedinIn,
  FaLongArrowAltDown,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { FadeIn } from "react-slide-fade-in";

function MobileContact() {
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

          <h1 className=" info">C</h1>
          <h1 className=" info">O</h1>
          <h1 className=" info">N</h1>
          <h1 className=" info">T</h1>
          <h1 className=" info">A</h1>
          <h1 className=" info">C</h1>
          <h1 className=" info">T</h1>
          <h1>X</h1>
        </div>
        <Link to="about" smooth={true}>
          <FaLongArrowAltDown className="absolute text-white bottom-5 left-[50%] animate-bounce h-5 w-5" />
        </Link>
      </FadeIn>

      <div
        className="text-white justify-self-end mx-[10vw] h-screen relative flex flex-col items-center justify-center "
        id="about"
      >
        <div className="flex flex-col items-center justify-center p-5 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl">
          <div className="flex flex-col items-center justify-center ">
            <a
              href="mailto:akshitaggarwal7@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="self-start "
            >
              <div className="flex items-center space-x-2 ">
                <MdMail className="w-5 h-5 mt-1 text-[#de4032]" />
                <h1>Send an email</h1>
                <FaLongArrowAltRight className="mt-1 text-white/30" />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/akshit-agrawal-586365227/"
              target="_blank"
              rel="noreferrer"
              className="self-start "
            >
              <div className="flex items-center self-start mt-4 space-x-2">
                <FaLinkedinIn className="w-5 h-5 mt-1 text-[#0077b5]" />
                <h1>Connect with me</h1>{" "}
                <FaLongArrowAltRight className="mt-1 text-white/30" />
              </div>
            </a>
            <a
              href="https://www.instagram.com/_agrawal_akshit_/"
              target="_blank"
              rel="noreferrer"
              className="self-start "
            >
              <div className="flex items-center self-start mt-4 space-x-2">
                <AiFillInstagram className="w-5 h-5 mt-1 text-[#DD2A7B]" />
                <h1>Send a DM</h1>{" "}
                <FaLongArrowAltRight className="mt-1 text-white/30" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileContact;
