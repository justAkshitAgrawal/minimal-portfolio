import React from "react";
import { FaLongArrowAltDown, FaLongArrowAltLeft } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { FadeIn } from "react-slide-fade-in";
import ExpCard from "../components/Experience/ExpCard";
import scrollify from "../media/scrollify.png";
import jobstry from "../media/jobstry.png";

function Experience() {
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
          <h1>X</h1>
          <h1 className=" info">E</h1>
          <h1 className=" info">X</h1>
          <h1 className=" info">P</h1>
          <h1 className=" info">E</h1>
          <h1 className=" info">R</h1>
          <h1 className=" info">I</h1>
          <h1 className=" info">E</h1>
          <h1 className=" info">N</h1>
          <h1 className=" info">C</h1>
          <h1 className=" info">E</h1>
          <h1>X</h1>
          <h1>X</h1>
          <h1>X</h1>
        </div>
        <Link to="exp" smooth={true}>
          <FaLongArrowAltDown className="absolute text-white bottom-5 left-[50%] animate-bounce h-5 w-5" />
        </Link>
      </FadeIn>
      <div
        className="text-white mx-[20vw] py-20 h-screen flex flex-col items-center justify-center mr-1"
        id="exp"
      >
        <Carousel autoPlay={false} showStatus={false} width={"60%"}>
          <ExpCard
            job={"Front-end Intern"}
            company={"Scrollify"}
            startDate={"January 2023"}
            description={[
              "Developing the web app Scrollify.",
              "Making a website for the company.",
              "Developing a portfolio generator. ",
            ]}
            logo={scrollify}
          />
          <ExpCard
            job={"Front-end Intern"}
            company={"Jobs Territory"}
            startDate={"June 2022"}
            endDate={"August 2022"}
            description={[
              "Developed an ATS for the company.",
              "Redesigned the company's website.",
              "Led a team of 3 interns.",
            ]}
            logo={jobstry}
          />
        </Carousel>
      </div>
    </div>
  );
}

export default Experience;
