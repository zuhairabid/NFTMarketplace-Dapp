import React from "react";
import Style from "../styles/index.module.css";
import HeroSection from "@/components/HeroSection/HeroSection";
import Section from "@/components/Section/Section";

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Section />
    </div>
  );
};

export default Home;
