import React from "react";

function FirstRow() {
  return (
    <>
      <div className=" -mt-5 px-[10vh] lg:py-[18vh] lg:px-[24vh] text-[#757575] grid grid-cols-8 lg:grid-cols-16 gap-6	place-content-center">
        <div className="grid grid-cols-6 col-span-6 gap-6 text-white transition-all cursor-pointer hover:underline place-content-center">
          <h1>A</h1>
          <h1>K</h1>
          <h1>S</h1>
          <h1>H</h1>
          <h1>I</h1>
          <h1>T</h1>
        </div>
        <h1>X</h1>
        <h1>X</h1>
      </div>
    </>
  );
}

export default FirstRow;
