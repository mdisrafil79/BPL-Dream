
import type { Iplayer } from "../../types/Player";
import PlayerCard from "./PlayerCard";

interface AvailablePlayersProps {
  players: Iplayer[];
}

const AbailablePlayers = ({ players }: AvailablePlayersProps) => {
  return (
    <div className="grid grid-cols-1 gap-7 mt-6 sm:grid-cols-2 lg:grid-cols-3">
      {players.map((player) => (
        <PlayerCard key={player.PlayerName} player={player} />
      ))}
    </div>
  );
};

export default AbailablePlayers;
