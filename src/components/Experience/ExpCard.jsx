import React from "react";

function ExpCard({ job, company, startDate, endDate, description, logo }) {
  return (
    <div className=" bg-[#292929]/40 px-5 mx-10 rounded-2xl shadow-md shadow-black pt-5 pb-14 flex items-start  justify-between max-w-[30vw]">
      <div className="flex flex-col items-start">
        <h1 className="text-2xl ">{job}</h1>
        <h1 className="text-lg ">{company}</h1>
        <div className="flex mt-3 space-x-1 text-[#969695] ">
          <h1>{startDate}</h1>
          <h1>-</h1>
          <h1>{endDate ? endDate : " Present"}</h1>
        </div>
        <div className=" max-w-[25vw]  mt-5 text-[#575757] flex flex-col space-y-2">
          {description?.map((desc) => {
            return <h1 className="self-start">• {desc}</h1>;
          })}
        </div>
      </div>
      <div className="">
        <img src={logo} alt="" className="h-20" />
      </div>
    </div>
  );
}

export default ExpCard;
