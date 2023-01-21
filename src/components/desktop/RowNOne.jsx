import React, { useState } from "react";

function RowNOne() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <h1 className="cursor-not-allowed text-white/20">0</h1>
      <h1>X</h1>
      <h1>X</h1>
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
        D
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
        V
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
        L
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
        P
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
        R
      </h1>
      <h1>X</h1>
    </>
  );
}

export default RowNOne;
