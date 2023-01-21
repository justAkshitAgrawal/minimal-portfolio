import React, { useState } from "react";
import { SiReact } from "react-icons/si";

function RowNTwo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <h1 className="cursor-not-allowed text-white/20">4</h1>
      <h1>X</h1>
      <h1 className="">{`<`}</h1>
      <h1
        className="info"
        style={{
          textDecoration: isHovered ? "underline" : "none",
        }}
        onMouseOver={() => {
          setIsHovered(true);
        }}
        onMouseOut={() => {
          setIsHovered(false);
        }}
      >
        W
      </h1>
      <h1
        className="info"
        style={{
          textDecoration: isHovered ? "underline" : "none",
        }}
        onMouseOver={() => {
          setIsHovered(true);
        }}
        onMouseOut={() => {
          setIsHovered(false);
        }}
      >
        E
      </h1>
      <h1
        className="info"
        style={{
          textDecoration: isHovered ? "underline" : "none",
        }}
        onMouseOver={() => {
          setIsHovered(true);
        }}
        onMouseOut={() => {
          setIsHovered(false);
        }}
      >
        B
      </h1>
      <h1>{`/`}</h1>
      <h1>{`>`}</h1>
      <h1>X</h1>
      <h1>X</h1>
      <h1>X</h1>
      <h1>X</h1>
      <SiReact className=" mt-1 text-[#5ed3f3]/50 hover:text-[#5ed3f3] transition-all" />
      <h1>X</h1>
      <h1>X</h1>
      <h1>X</h1>
    </>
  );
}

export default RowNTwo;
