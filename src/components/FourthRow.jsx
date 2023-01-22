import React from "react";
import { useNavigate } from "react-router-dom";

function FourthRow() {
  const navigate = useNavigate();

  return (
    <>
      <h1
        className=" info"
        onClick={() => {
          navigate("/info");
        }}
      >
        A
      </h1>
      <h1
        className=" info"
        onClick={() => {
          navigate("/info");
        }}
      >
        K
      </h1>
      <h1
        className=" info"
        onClick={() => {
          navigate("/info");
        }}
      >
        S
      </h1>
      <h1
        className=" info"
        onClick={() => {
          navigate("/info");
        }}
      >
        H
      </h1>
      <h1
        className=" info"
        onClick={() => {
          navigate("/info");
        }}
      >
        I
      </h1>
      <h1
        className=" info"
        onClick={() => {
          navigate("/info");
        }}
      >
        T
      </h1>
      <h1>X</h1>
      <h1>X</h1>
    </>
  );
}

export default FourthRow;
