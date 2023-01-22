import React from "react";

function Skill({ skillIcon, skillName }) {
  return (
    <div className="flex flex-col items-center justify-center px-10 py-12 space-y-5 transition-all text-[#757575] hover:text-white bg-white/10 rounded-2xl grayscale hover:grayscale-0 hover:scale-110">
      {skillIcon}
      <h1 className="">{skillName}</h1>
    </div>
  );
}

export default Skill;
