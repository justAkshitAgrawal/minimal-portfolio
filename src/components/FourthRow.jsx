import React from "react";

function FourthRow() {
  return (
    <>
      <div className="px-[10vh] mt-8 lg:px-[24vh] text-[#757575] grid grid-cols-8 lg:grid-cols-16 gap-6 place-content-center justify-items-center		">
        <h1>X</h1>
        <h1>X</h1>
        <div className="col-span-1 grid grid-cols-1 gap-6 text-white hover:underline place-content-center cursor-pointer transition-all		justify-items-center	">
          <h1>W</h1>
        </div>
        <h1>X</h1>
        <h1>X</h1>
        <h1>X</h1>
        <h1 className=" text-white">O</h1>
        <h1>X</h1>
      </div>
    </>
  );
}

export default FourthRow;
