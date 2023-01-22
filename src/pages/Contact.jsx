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
        <div className="flex flex-col items-center p-10 space-x-10 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl">
          <h1 className="text-xl tracking-[0.8rem] uppercase ">
            Reach out to me{" "}
          </h1>
          <a
            href="mailto:akshitaggarwal7@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="self-start "
          >
            <div className="flex items-center self-start space-x-3 mt-7">
              <MdMail className="w-5 h-5 mt-1 text-[#de4032]" />
              <h1>akshitaggarwal7@gmail.com</h1>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/akshit-agrawal-586365227/"
            target="_blank"
            rel="noreferrer"
            className="self-start "
          >
            <div className="flex items-center self-start mt-4 space-x-3">
              <FaLinkedinIn className="w-5 h-5 mt-1 text-[#0077b5]" />
              <h1>@akshit-agrawal-586365227</h1>
            </div>
          </a>
          <a
            href="https://www.instagram.com/_agrawal_akshit_/"
            target="_blank"
            rel="noreferrer"
            className="self-start "
          >
            <div className="flex items-center self-start mt-4 space-x-3">
              <AiFillInstagram className="w-5 h-5 mt-1 text-[#DD2A7B]" />
              <h1>@_agrawal_akshit_</h1>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
