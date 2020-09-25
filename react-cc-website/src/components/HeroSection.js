import React from "react";
import { Button } from "./Button";
import { Link } from "react-rout-dom";
import "./HeroSection.css";

function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) {
  return (
    <>
      <div
        className={lightBg ? "home__hear-section" : "home__hero-section darkBg"}
      >
        <h1>test</h1>
      </div>
    </>
  );
}

export default HeroSection;
