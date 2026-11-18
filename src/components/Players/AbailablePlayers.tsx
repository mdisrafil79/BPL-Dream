
import type { Dispatch, SetStateAction } from "react";
import type { Iplayer } from "../../types/Player";
import PlayerCard from "./PlayerCard";

interface IAvailablePlayersProps {
  players: Iplayer[];
  coin : number;
  setCoin : Dispatch<SetStateAction<number>>;
  selectedPlayers : object[];
  setSelectedPlayers: Dispatch<SetStateAction<object[]>>;
}

const AbailablePlayers = ({ players , coin, setCoin, selectedPlayers , setSelectedPlayers }: IAvailablePlayersProps) => {
  // console.log(coin , setCoin , "from available player")
  return (
    <div className="grid grid-cols-1 gap-7 mt-6 sm:grid-cols-2 lg:grid-cols-3">
      {players.map((player) => (
        <PlayerCard key={player.PlayerName} player={player} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} />
      ) )}
    </div>
  );
};

export default AbailablePlayers;
