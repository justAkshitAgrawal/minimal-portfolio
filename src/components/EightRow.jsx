import React from "react";
import { useNavigate } from "react-router-dom";

function EightRow() {
  const navigate = useNavigate();

  return (
    <>
      <h1>X</h1>
      <h1
        className=" info"
        onClick={() => {
          navigate("/contactme");
        }}
      >
        C
      </h1>
      <h1
        className=" info"
        onClick={() => {
          navigate("/contactme");
        }}
      >
        O
      </h1>
      <h1
        className=" info"
        onClick={() => {
          navigate("/contactme");
        }}
      >
        N
      </h1>
      <h1
        className=" info"
        onClick={() => {
          navigate("/contactme");
        }}
      >
        T
      </h1>
      <h1
        className=" info"
        onClick={() => {
          navigate("/contactme");
        }}
      >
        A
      </h1>
      <h1
        className=" info"
        onClick={() => {
          navigate("/contactme");
        }}
      >
        C
      </h1>
      <h1
        className=" info"
        onClick={() => {
          navigate("/contactme");
        }}
      >
        T
      </h1>
    </>
  );
}

export default EightRow;
