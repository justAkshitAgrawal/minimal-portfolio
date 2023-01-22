import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FadeIn } from "react-slide-fade-in";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="h-fit bg-[#0F0F0F] font-baron">
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
          <h1>X</h1>
          <h1 className=" info">4</h1>
          <h1 className=" info">0</h1>
          <h1 className=" info">4</h1>

          <h1>X</h1>
          <h1 className=" info">N</h1>
          <h1 className=" info">O</h1>
          <h1 className=" info">T</h1>
          <h1>X</h1>

          <h1 className=" info">F</h1>
          <h1 className=" info">O</h1>
          <h1 className=" info">U</h1>
          <h1 className=" info">N</h1>
          <h1 className=" info">D</h1>
          <h1>X</h1>
        </div>
      </FadeIn>
    </div>
  );
}

export default NotFound;
