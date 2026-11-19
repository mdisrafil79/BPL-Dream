import { FaRegTrashAlt } from 'react-icons/fa'
import type { Iplayer } from '../../types/Player'
import PlayerImage from './PlayerImage'

interface SelectedPlayersProps {
  players: Iplayer[]
  onRemove: (player: Iplayer) => void
  onAddMore: () => void
}

const SelectedPlayers = ({
  players,
  onRemove,
  onAddMore,
}: SelectedPlayersProps) => {
  if (players.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-neutral-200 px-6 py-16 text-center">
        <p className="text-base font-semibold text-neutral-800">
          No player selected yet
        </p>
        <p className="mt-2 text-sm text-neutral-500">
          Pick up to 6 players to build your dream team.
        </p>
        <button
          type="button"
          onClick={onAddMore}
          className="mt-6 rounded-lg border-[1.5px] border-[#101010] bg-neon px-5 py-2.5 text-sm font-bold text-[#101010] transition hover:brightness-[0.97]"
        >
          Add More Player
        </button>
      </div>
    )
  }

  return (
    <div>
      <ul className="space-y-5">
        {players.map((player) => (
          <li
            key={player.PlayerName}
            className="flex items-center gap-5 rounded-2xl border border-line bg-white px-5 py-5 sm:gap-7 sm:px-6 sm:py-7"
          >
            <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-[#d9d9d9] sm:h-[72px] sm:w-[72px]">
              <PlayerImage
                src={player.PlayerImg}
                alt={player.PlayerName}
                className="h-full w-full"
                iconClassName="text-2xl"
              />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="truncate text-[17px] font-semibold text-neutral-900 sm:text-[23px]">
                {player.PlayerName}
              </h3>
              <p className="mt-1 truncate text-[13px] text-neutral-500 sm:text-[15px]">
                {player.battingStyle}
              </p>
            </div>

            <button
              type="button"
              onClick={() => onRemove(player)}
              aria-label={`Remove ${player.PlayerName}`}
              className="shrink-0 rounded-lg p-2 text-red-400 transition hover:bg-red-50 hover:text-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-300"
            >
              <FaRegTrashAlt className="text-[17px]" aria-hidden="true" />
            </button>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={onAddMore}
        className="mt-8 rounded-lg border-[1.5px] border-[#101010] bg-neon px-5 py-2.5 text-[15px] font-bold text-[#101010] transition hover:brightness-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400"
      >
        Add More Player
      </button>
    </div>
  )
}

export default SelectedPlayers
