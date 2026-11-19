import { FaFlag, FaUser } from 'react-icons/fa'
import type { Iplayer } from '../../types/Player'
import PlayerImage from './PlayerImage'

interface IPlayerCardProps {
  player: Iplayer
  onSelect: (player: Iplayer) => void
}

const PlayerCard = ({ player, onSelect }: IPlayerCardProps) => {
  return (
    <article className="group flex flex-col rounded-2xl border border-line bg-white p-[18px] transition-shadow duration-300 hover:shadow-[0_20px_45px_-28px_rgba(17,24,39,0.45)]">
      <div className="aspect-[297/189] w-full overflow-hidden rounded-xl bg-[#d9d9d9]">
        <PlayerImage
          src={player.PlayerImg}
          alt={player.PlayerName}
          className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]"
          iconClassName="text-5xl"
        />
      </div>

      <h3 className="mt-3 flex items-center gap-2.5 text-[17px] font-semibold text-neutral-900 sm:text-[18px]">
        <FaUser className="text-[15px] text-neutral-700" aria-hidden="true" />
        <span className="truncate">{player.PlayerName}</span>
      </h3>

      <div className="mt-1.5 flex items-center justify-between gap-3">
        <p className="flex min-w-0 items-center gap-2 text-[14px] text-neutral-400">
          <FaFlag className="shrink-0 text-[13px]" aria-hidden="true" />
          <span className="truncate">{player.Origin}</span>
        </p>
        <span className="shrink-0 rounded-lg bg-neutral-100 px-3 py-1.5 text-[12px] font-medium text-neutral-700">
          {player.PlayerType}
        </span>
      </div>

      <hr className="my-3 border-0 border-t border-neutral-100" />

      <p className="text-[14px] font-bold text-neutral-900">Rating</p>

      <div className="mt-2.5 flex items-start justify-between gap-4 text-[13px]">
        <span className="font-semibold text-neutral-900">
          {player.battingStyle}
        </span>
        <span className="text-right text-neutral-400">
          {player.BowlingStyle}
        </span>
      </div>

      <div className="mt-3 flex items-center justify-between gap-3">
        <p className="text-[15px] font-bold text-neutral-900">
          Price: ${player.Price}
        </p>
        <button
          type="button"
          onClick={() => onSelect(player)}
          className="shrink-0 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-[12px] font-medium text-neutral-700 transition hover:border-neutral-300 hover:bg-neutral-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400"
        >
          Choose Player
        </button>
      </div>
    </article>
  )
}

export default PlayerCard
