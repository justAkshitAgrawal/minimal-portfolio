import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RowSkillS() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <h1 className="">X</h1>
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
        onClick={() => {
          navigate("/skills");
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
        onClick={() => {
          navigate("/skills");
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
        onClick={() => {
          navigate("/skills");
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
        onClick={() => {
          navigate("/skills");
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
        onClick={() => {
          navigate("/skills");
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
        onClick={() => {
          navigate("/skills");
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
