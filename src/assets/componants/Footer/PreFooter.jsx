import React from "react";
import bgImg from "../../../assets/bg-shadow.png";

const PreFooter = () => {
  return (
    <div className="relative z-10 -mb-32 px-4">
      <div
        className="text-primary-content py-16 px-4 w-7xl mx-auto rounded-2xl mt-5 bg-amber-50"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center mx-auto space-y-2">
            <h2 className="text-3xl font-bold text-black">Subscribe to our newsletter</h2>
            <p className="opacity-90 text-black">
              Get the latest updates and news delivered to your inbox.
            </p>
            <form className="flex w-full max-w-md gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full text-base-content"
              />
              <button className="btn btn-neutral">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
