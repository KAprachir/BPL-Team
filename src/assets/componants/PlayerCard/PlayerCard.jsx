import React, { useState } from "react";
import { Flag, User } from "lucide-react";

const PlayerCard = ({ player, index }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div key={index} className="card bg-base-100 shadow-sm p-4">
      <figure>
        <img
          className="w-100 h-75 object-fill"
          src={player.picture_url}
          alt="player img"
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-2">
          <User />
          <h2 className="card-title">{player.player_name}</h2>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Flag />
            <h4>{player.country} </h4>
          </div>
          <button className="btn btn-ghost">{player.playing_type}</button>
        </div>
        <div className="divider"></div>

        <div className="flex justify-between items-center max-w-10/12">
          <h3>Rating:</h3>
          <h3>{player.rating}</h3>
        </div>
        <div className="flex justify-between items-center">
          <h3>Hand:</h3>
          <h3>{player.hand} </h3>
        </div>

        <div className="card-actions justify-between items-center">
          <h3>Price : {player.price} </h3>
          <button
            onClick={() => setIsSelected(true)}
            className="btn btn-outline"
          >
            {isSelected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
