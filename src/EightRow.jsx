import React from "react";

function EightRow() {
  return (
    <>
      <div className="px-[10vh] mt-8 lg:px-[24vh] text-[#757575] grid grid-cols-8 lg:grid-cols-16 gap-6 place-content-center justify-items-center		">
        <h1>X</h1>
        <div className="col-span-7 grid grid-cols-7 gap-6 text-white hover:underline place-content-center cursor-pointer transition-all	justify-items-center	">
          <h1>C</h1>
          <h1>O</h1>
          <h1>N</h1>
          <h1>T</h1>
          <h1>A</h1>
          <h1>C</h1>
          <h1>T</h1>
        </div>
      </div>
    </>
  );
}

export default EightRow;
