import React, { useState } from "react";
import Available from "../available/Available";
import Selected from "../selected/Selected";

const Players = ({ playerPromise }) => {
  const [activeTab, setActiveTab] = useState("available");
  return (
    <div className="w-7xl mx-auto">
      <div className="flex items-center justify-between gap-4">
        {activeTab === "available" ? (
          <h1 className="text-3xl font-bold">Available</h1>
        ) : (
          <h1 className="text-3xl font-bold">Selected Player (4/6)</h1>
        )}
        <div>
          <button
            onClick={() => setActiveTab("available")}
            className={`btn rounded-l-xl ${activeTab === "available" ? "bg-[#E7FE29] text-black" : "bg-soft"}`}
          >
            Available
          </button>
          <button
            onClick={() => setActiveTab("selected")}
            className={`btn rounded-r-xl ${activeTab === "selected" ? "bg-[#E7FE29] text-black" : "bg-soft"}`}
          >
            Selected
          </button>
        </div>
      </div>

      {activeTab === "available" ? (
        <Available playerPromise={playerPromise}></Available>
      ) : (
        <Selected></Selected>
      )}
    </div>
  );
};

export default Players;
