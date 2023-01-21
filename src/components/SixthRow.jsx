import React from "react";

function SixthRow() {
  return (
    <>
      <div className="px-[10vh] mt-8 lg:px-[24vh] text-[#757575] grid grid-cols-8 lg:grid-cols-16 gap-6 place-content-center justify-items-center		">
        <h1>X</h1>
        <h1>X</h1>
        <div className="grid grid-cols-1 col-span-1 gap-6 text-white transition-all cursor-pointer hover:underline place-content-center justify-items-center ">
          <h1>B</h1>
        </div>
        <h1>X</h1>
        <h1>X</h1>
        <h1>X</h1>
        <h1 className="text-white ">T</h1>
        <h1>X</h1>
      </div>
    </>
  );
}

export default SixthRow;
