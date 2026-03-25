import PlayerCard from "../PlayerCard/PlayerCard";


const Available = ({
  playerData,
  coin,
  setCoin,
  selectedPlayer,
  setSelectedPlayer,
}) => {
  return (
    <div className="w-7xl mx-auto grid grid-cols-3 gap-5">
      {playerData.map((player, index) => (
        <PlayerCard
          key={index}
          player={player}
          coin={coin}
          setCoin={setCoin}
          selectedPlayer={selectedPlayer}
          setSelectedPlayer={setSelectedPlayer}
        ></PlayerCard>
      ))}
    </div>
  );
};

export default Available;
