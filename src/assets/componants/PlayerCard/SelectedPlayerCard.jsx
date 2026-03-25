import React from "react";
import { Trash2, User } from "lucide-react";

const SelectedPlayerCard = ({ handleDeleteSelectedPlayer, player, index }) => {
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
};

export default SelectedPlayerCard;
