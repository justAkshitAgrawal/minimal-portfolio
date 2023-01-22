import React from "react";
import {
  FaLinkedinIn,
  FaLongArrowAltDown,
  FaLongArrowAltLeft,
} from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { FadeIn } from "react-slide-fade-in";
import { AiFillInstagram } from "react-icons/ai";

function Contact() {
  const navigate = useNavigate();

  return (
    <div className=" h-fit bg-[#0F0F0F] font-baron ">
      {" "}
      <FadeIn durationInMilliseconds={2000}>
        <div className="grid gap-10 text-[#757575]/30 grid-cols-16 text-xl h-screen place-items-center px-[20vw] relative">
          <FaLongArrowAltLeft
            className="fixed transition-all top-5 left-5 text-white/40 hover:text-white"
            onClick={() => {
              navigate("/");
            }}
          />
          <h1>X</h1>
          <h1>X</h1> <h1>X</h1>
          <h1 className=" info">C</h1>
          <h1 className=" info">O</h1>
          <h1 className=" info">N</h1>
          <h1 className=" info">T</h1>
          <h1 className=" info">A</h1>
          <h1 className=" info">C</h1>
          <h1 className=" info">T</h1>
          <h1>X</h1>
          <h1 className=" info">M</h1>
          <h1 className=" info">E</h1>
          <h1>X</h1>
          <h1>X</h1>
          <h1>X</h1>
        </div>
        <Link to="contact" smooth={true}>
          <FaLongArrowAltDown className="absolute text-white bottom-5 left-[50%] animate-bounce h-5 w-5" />
        </Link>
      </FadeIn>
      <div
        className="text-white justify-self-end mx-[20vw] py-20 h-screen flex items-center justify-center space-x-16"
        id="contact"
      >
        <div className="flex flex-col items-center p-10 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl">
          <h1 className="text-xl tracking-[0.8rem] uppercase ">
            Reach out to me{" "}
          </h1>
          <div className="flex items-center mt-5 space-x-6 ">
            <a
              href="mailto:akshitaggarwal7@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="self-start "
            >
              <div className="flex flex-col items-center self-start space-x-3 mt-7 bg-[#0f0f0f]/50 p-5 rounded-xl w-[12vw] hover:scale-110 transition-all">
                <MdMail className="w-10 h-10 mt-1 text-[#de4032]" />
                <h1>Send an email</h1>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/akshit-agrawal-586365227/"
              target="_blank"
              rel="noreferrer"
              className="self-start "
            >
              <div className="flex flex-col items-center self-start space-x-3 mt-7 bg-[#0f0f0f]/50 p-5 rounded-xl w-[12vw] hover:scale-110 transition-all">
                <FaLinkedinIn className="w-10 h-10 mt-1 text-[#0077b5]" />
                <h1>Connect with me</h1>
              </div>
            </a>
            <a
              href="https://www.instagram.com/_agrawal_akshit_/"
              target="_blank"
              rel="noreferrer"
              className="self-start "
            >
              <div className="flex flex-col items-center self-start space-x-3 mt-7 bg-[#0f0f0f]/50 p-5 rounded-xl w-[12vw] hover:scale-110 transition-all">
                <AiFillInstagram className="w-10 h-10 mt-1 text-[#DD2A7B]" />
                <h1>Send a DM</h1>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
