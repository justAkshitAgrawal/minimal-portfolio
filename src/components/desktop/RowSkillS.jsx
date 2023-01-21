import React, { useState } from "react";

function RowSkillS() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <h1>X</h1>
      <h1>X</h1>
      <h1>X</h1>
      <h1>X</h1>
      <h1>X</h1>
      <h1
        className="info "
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
        S
      </h1>
      <h1
        className="info "
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
        K
      </h1>
      <h1
        className="info "
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
        I
      </h1>
      <h1
        className="info "
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
        L
      </h1>
      <h1
        className="info "
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
        L
      </h1>
      <h1
        className="info "
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
        S
      </h1>
      <h1>X</h1>
      <h1>X</h1>
      <h1>X</h1>
      <h1>X</h1>
      <h1>X</h1>
    </>
  );
}

export default RowSkillS;
