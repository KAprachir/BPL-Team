import { Trash2, User } from "lucide-react";
import React from "react";

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
      {selectedPlayer.map((player, index) => {
        return (
          <div
            key={index}
            className="flex justify-between items-center border rounded-2xl p-10 mb-4"
          >
            <div className="flex">
              <img
                src={player.picture_url}
                alt={player.player_name}
                className="h-18.75 w-18 object-fit"
              />
              <div className="ml-4">
                <h2 className="flex text-2xl font-bold items-center">
                  <User size={25} />
                  {player.player_name}{" "}
                </h2>
                <p className="text-xl">{player.playing_type}</p>
              </div>
            </div>
            <div>
              <button
                className="btn text-red-500"
                onClick={() => handleDeleteSelectedPlayer(player)}
              >
                <Trash2 size={25} />{" "}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Selected;
