import React, { useState } from "react";
import { SiCss3 } from "react-icons/si";
import { useNavigate } from "react-router-dom";

function RowExp() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

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
        onClick={() => {
          navigate("/experience");
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
        onClick={() => {
          navigate("/experience");
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
        onClick={() => {
          navigate("/experience");
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
        onClick={() => {
          navigate("/experience");
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
        onClick={() => {
          navigate("/experience");
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
        onClick={() => {
          navigate("/experience");
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
        onClick={() => {
          navigate("/experience");
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
        onClick={() => {
          navigate("/experience");
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
        onClick={() => {
          navigate("/experience");
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
        onClick={() => {
          navigate("/experience");
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
