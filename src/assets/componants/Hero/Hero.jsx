import React from "react";
import bgImg from "../../../assets/bg-shadow.png";
import heroImg from "../../../assets/banner-main.png";
const Hero = () => {
  return (
    <div>
      <div
        className="hero h-110 w-7xl mx-auto overflow-hidden rounded-3xl my-5"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-full flex flex-col items-center">
            <img src={heroImg} alt="" />
            <h1 className="mb-5 text-4xl font-bold">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <p className="mb-5">Beyond Boundaries Beyond Limits</p>
            <button className="btn bg-[#E7FE29] text-black font-bold rounded-2xl">
              Claim Free Credit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
