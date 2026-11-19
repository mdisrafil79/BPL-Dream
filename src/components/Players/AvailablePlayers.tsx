import type { Iplayer } from '../../types/Player'
import PlayerCard from './PlayerCard'

interface IAvailablePlayersProps {
  players: Iplayer[]
  onSelect: (player: Iplayer) => void
}

const AvailablePlayers = ({ players, onSelect }: IAvailablePlayersProps) => {
  if (players.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-neutral-200 px-6 py-16 text-center">
        <p className="text-base font-semibold text-neutral-800">
          No players available
        </p>
        <p className="mt-2 text-sm text-neutral-500">
          You have already picked every player in the squad.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {players.map((player) => (
        <PlayerCard
          key={player.PlayerName}
          player={player}
          onSelect={onSelect}
        />
      ))}
    </div>
  )
}

export default AvailablePlayers
