import React from "react";

function ExpCard({ job, company, startDate, endDate, description }) {
  return (
    <div className="flex flex-col bg-[#292929]/40 p-5 rounded-2xl shadow-md shadow-black hover:scale-110 transition-all min-w-[20vw]">
      <h1 className="text-xl ">{job}</h1>
      <h1>{company}</h1>
      <div className="flex mt-3 space-x-1 text-[#969695] ">
        <h1>{startDate}</h1>
        <h1>-</h1>
        <h1>{endDate ? endDate : " Present"}</h1>
      </div>
      <div className=" max-w-[25vw] mt-5 text-[#575757] flex flex-col space-y-2">
        {description?.map((desc) => {
          return <p> • {desc}</p>;
        })}
      </div>
    </div>
  );
}

export default ExpCard;
