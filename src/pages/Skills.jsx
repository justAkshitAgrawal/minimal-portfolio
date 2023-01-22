import React from "react";
import { FadeIn } from "react-slide-fade-in";
import { FaLongArrowAltDown, FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-scroll";
import Skill from "../components/skills/Skill";
import {
  SiCss3,
  SiHtml5,
  SiJava,
  SiJavascript,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { useNavigate } from "react-router-dom";

function Skills() {
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
          <h1>X</h1>
          <h1 className=" info">S</h1>
          <h1 className=" info">K</h1>
          <h1 className=" info">I</h1>
          <h1 className=" info">L</h1>
          <h1 className=" info">L</h1>
          <h1 className=" info">S</h1>
          <h1>X</h1>
          <h1>X</h1>
          <h1>X</h1>
          <h1>X</h1>
          <h1>X</h1>
          <h1>X</h1>
        </div>
        <Link to="skills" smooth={true}>
          <FaLongArrowAltDown className="absolute text-white bottom-5 left-[50%] animate-bounce  h-5 w-5" />
        </Link>
      </FadeIn>
      <div
        className="text-white justify-self-end mx-[20vw] py-20 h-screen flex items-center justify-center space-x-16"
        id="skills"
      >
        <div className="flex flex-col space-y-12">
          <Skill
            skillIcon={<SiJavascript className="w-16 h-16 text-[#f8dc3d]" />}
            skillName="JavaScript"
          />
          <Skill
            skillIcon={<SiJava className="w-16 h-16 text-[#e27107] " />}
            skillName="Java"
          />
        </div>
        <div className="flex flex-col mt-40 space-y-12 ">
          <Skill
            skillIcon={<SiReact className="w-16 h-16 text-[#5ccfee] " />}
            skillName="React"
          />
          <Skill
            skillIcon={<SiTailwindcss className="w-16 h-16 text-[#01b7d6] " />}
            skillName="Tailwind"
          />
        </div>
        <div className="flex flex-col space-y-12 ">
          <Skill
            skillIcon={<SiHtml5 className="w-16 h-16 text-[#e44d26] " />}
            skillName="HTML"
          />
          <Skill
            skillIcon={<SiCss3 className="w-16 h-16 text-[#1a73ba]" />}
            skillName="CSS"
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
