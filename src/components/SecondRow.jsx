import React from "react";

function SecondRow() {
  return (
    <>
      <div className="px-[10vh] mt-8 lg:px-[24vh] text-[#757575] grid grid-cols-8 lg:grid-cols-16 gap-6	place-content-center	">
        <h1>X</h1>
        <div className="col-span-7 row-span-1 grid grid-cols-7 gap-6 text-white hover:underline place-content-center cursor-pointer transition-all	">
          <h1>A</h1>
          <h1>G</h1>
          <h1>R</h1>
          <h1>A</h1>
          <h1>W</h1>
          <h1>A</h1>
          <h1>L</h1>
        </div>
      </div>
    </>
  );
}

export default SecondRow;
