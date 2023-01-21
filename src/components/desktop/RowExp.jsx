import React, { useState } from "react";
import { SiCss3 } from "react-icons/si";

function RowExp() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
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
        X
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
        I
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
        E
      </h1>
      <h1>X</h1>
      <h1>X</h1>
      <h1>X</h1>
      <SiCss3 className="mt-1 text-[#1a73ba]/50 hover:text-[#1a73ba] transition-all" />
      <h1>X</h1>
      <h1>X</h1>
    </>
  );
}

export default RowExp;
