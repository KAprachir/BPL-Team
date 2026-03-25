import React from "react";
import SelectedPlayerCard from "../PlayerCard/SelectedPlayerCard";

const Selected = ({ selectedPlayer, setSelectedPlayer, coin, setCoin }) => {
  const handleDeleteSelectedPlayer = (player) => {
    const filterPlayer = selectedPlayer.filter(
      (selectPlayer) => selectPlayer.player_name != player.player_name,
    );
    setSelectedPlayer(filterPlayer);
    setCoin(+coin + +player.price);
  };
  return (
    <div className="w-7xl mx-auto my-10">
      {selectedPlayer.length === 0 ? (
        <div className="h-40 flex flex-col items-center justify-center gap-2">
          <h1 className="text-2xl font-semibold">No Player is Selected</h1>
          <p>Go to The Available Tab to Select Player</p>
        </div>
      ) : (
        selectedPlayer.map((player, index) => {
          return (
            <SelectedPlayerCard
              handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}
              player={player}
              index={index}
            />
          );
        })
      )}
    </div>
  );
};

export default Selected;
