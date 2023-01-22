import React from "react";
import { useNavigate } from "react-router-dom";

function FifthRow() {
  const navigate = useNavigate();
  return (
    <>
      <h1>X</h1>
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
        G
      </h1>
      <h1
        className=" info"
        onClick={() => {
          navigate("/info");
        }}
      >
        R
      </h1>
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
        W
      </h1>
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
        L
      </h1>
    </>
  );
}

export default FifthRow;
