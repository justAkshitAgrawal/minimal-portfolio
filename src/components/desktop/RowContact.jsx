import React, { useState } from "react";
import { SiVisualstudiocode } from "react-icons/si";

function RowContact() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <h1>X</h1>
      <h1>X</h1>
      <h1>X</h1>
      <h1>X</h1>
      <h1>X</h1>
      <SiVisualstudiocode className="self-center text-[#24acf2]/50 mt-1 hover:text-[#24acf2] transition-all" />
      <h1>X</h1>
      <h1>X</h1>
      <h1>X</h1>
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
        C
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
        O
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
        N
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
        T
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
        A
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
        C
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
        T
      </h1>
    </>
  );
}

export default RowContact;
