import PlayerCard from "../PlayerCard/PlayerCard";
import { use } from "react";

const Available = ({ playerPromise }) => {
  const playerData = use(playerPromise);
  console.log(playerData);
  return (
    <div className="w-7xl mx-auto grid grid-cols-3 gap-5">
      {playerData.map((player, index) => (
        <PlayerCard key={index} player={player}></PlayerCard>
      ))}
    </div>
  );
};

export default Available;
