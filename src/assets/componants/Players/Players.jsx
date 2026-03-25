import React, { useState } from "react";
import Available from "../available/Available";
import Selected from "../selected/Selected";
import { use } from "react";

const Players = ({ playerPromise, coin, setCoin }) => {
  const playerData = use(playerPromise);
  const [activeTab, setActiveTab] = useState("available");
  const [selectedPlayer, setSelectedPlayer] = useState([]);
  return (
    <div className="w-7xl mx-auto">
      <div className="flex items-center justify-between gap-4">
        {activeTab === "available" ? (
          <h1 className="text-3xl font-bold">Available</h1>
        ) : (
          <h1 className="text-3xl font-bold">
            Selected Player ({selectedPlayer.length}/{playerData.length})
          </h1>
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
            Selected {selectedPlayer.length}
          </button>
        </div>
      </div>

      {activeTab === "available" ? (
        <Available
          playerData={playerData}
          coin={coin}
          setCoin={setCoin}
          selectedPlayer={selectedPlayer}
          setSelectedPlayer={setSelectedPlayer}
        ></Available>
      ) : (
        <Selected
          selectedPlayer={selectedPlayer}
          setSelectedPlayer={setSelectedPlayer}
          coin={coin}
          setCoin={setCoin}
        ></Selected>
      )}
    </div>
  );
};

export default Players;
