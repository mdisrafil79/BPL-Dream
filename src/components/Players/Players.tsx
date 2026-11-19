import { useState } from 'react'
import type { Iplayer } from '../../types/Player'
import { MAX_SELECTED_PLAYERS } from '../../constants'
import AvailablePlayers from './AvailablePlayers'
import SelectedPlayers from './SelectedPlayers'

interface PlayersProps {
  players: Iplayer[]
  selectedPlayers: Iplayer[]
  onSelect: (player: Iplayer) => void
  onRemove: (player: Iplayer) => void
}

type TabType = 'available' | 'selected'

const Players = ({
  players,
  selectedPlayers,
  onSelect,
  onRemove,
}: PlayersProps) => {
  const [tab, setTab] = useState<TabType>('available')

  const availablePlayers = players.filter(
    (player) =>
      !selectedPlayers.some((item) => item.PlayerName === player.PlayerName),
  )

  const heading =
    tab === 'available'
      ? 'Available Players'
      : `Selected Player (${selectedPlayers.length}/${MAX_SELECTED_PLAYERS})`

  const tabButtonClass = (isActive: boolean) =>
    [
      'px-4 py-2 text-[13px] font-medium transition-colors sm:px-5',
      isActive
        ? 'bg-neon font-semibold text-[#101010]'
        : 'bg-white text-neutral-500 hover:text-neutral-800',
    ].join(' ')

  return (
    <section
      id="players"
      className="mx-auto w-[92%] max-w-[1440px] scroll-mt-6 pt-12 sm:pt-14 lg:w-[82%] lg:pt-16"
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-[clamp(20px,1.9vw,30px)] font-bold tracking-tight text-neutral-900">
          {heading}
        </h2>

        <div
          className="flex overflow-hidden rounded-xl border border-neutral-200 bg-white"
          role="tablist"
          aria-label="Player lists"
        >
          <button
            type="button"
            role="tab"
            aria-selected={tab === 'available'}
            onClick={() => setTab('available')}
            className={tabButtonClass(tab === 'available')}
          >
            Available
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={tab === 'selected'}
            onClick={() => setTab('selected')}
            className={tabButtonClass(tab === 'selected')}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>

      <div className="mt-10">
        {tab === 'available' ? (
          <AvailablePlayers players={availablePlayers} onSelect={onSelect} />
        ) : (
          <SelectedPlayers
            players={selectedPlayers}
            onRemove={onRemove}
            onAddMore={() => setTab('available')}
          />
        )}
      </div>
    </section>
  )
}

export default Players

