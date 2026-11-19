import './App.css'
import { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import Nav from './components/Nav'
import Banner from './components/Banner'
import Players from './components/Players/Players'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import type { Iplayer } from './types/Player'
import {
  CLAIM_AMOUNT,
  INITIAL_COIN,
  MAX_SELECTED_PLAYERS,
} from './constants'

interface TeamState {
  coin: number
  selectedPlayers: Iplayer[]
}

function App() {
  const [players, setPlayers] = useState<Iplayer[]>([])
  const [team, setTeam] = useState<TeamState>({
    coin: INITIAL_COIN,
    selectedPlayers: [],
  })
  const [isLoading, setIsLoading] = useState(true)

  // The ref mirrors the latest team state synchronously so that fast repeated
  // actions (for example clicking seven players in the same tick) still respect
  // the coin balance and the six-player limit.
  const teamRef = useRef(team)
  const commitTeam = (next: TeamState) => {
    teamRef.current = next
    setTeam(next)
  }

  useEffect(() => {
    let isMounted = true

    fetch('/data.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load players')
        return res.json() as Promise<Iplayer[]>
      })
      .then((data) => {
        if (isMounted) setPlayers(data)
      })
      .catch(() => {
        if (isMounted) toast.error('Could not load the player list')
      })
      .finally(() => {
        if (isMounted) setIsLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [])

  const handleClaimCredit = () => {
    const current = teamRef.current
    commitTeam({ ...current, coin: current.coin + CLAIM_AMOUNT })
    toast.success(`${CLAIM_AMOUNT} free credits claimed`)
  }

  const handleSelectPlayer = (player: Iplayer) => {
    const current = teamRef.current

    if (
      current.selectedPlayers.some(
        (item) => item.PlayerName === player.PlayerName,
      )
    ) {
      return
    }

    if (current.selectedPlayers.length >= MAX_SELECTED_PLAYERS) {
      toast.error(`You can only select ${MAX_SELECTED_PLAYERS} players`)
      return
    }

    const price = Number(player.Price)
    if (!Number.isFinite(price) || price < 0) {
      toast.error('This player has an invalid price')
      return
    }

    if (current.coin < price) {
      toast.error('You do not have enough coins to choose this player')
      return
    }

    commitTeam({
      coin: current.coin - price,
      selectedPlayers: [...current.selectedPlayers, player],
    })
    toast.success(`${player.PlayerName} added to your team`)
  }

  const handleRemovePlayer = (player: Iplayer) => {
    const current = teamRef.current
    const price = Number(player.Price)
    const refund = Number.isFinite(price) && price > 0 ? price : 0

    commitTeam({
      coin: current.coin + refund,
      selectedPlayers: current.selectedPlayers.filter(
        (item) => item.PlayerName !== player.PlayerName,
      ),
    })
    toast.info(`${player.PlayerName} removed from your team`)
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Nav coin={team.coin} />
      <Banner onClaim={handleClaimCredit} />

      {isLoading ? (
        <div className="mx-auto flex w-[82%] max-w-[1440px] items-center justify-center py-28">
          <span className="loading loading-spinner loading-lg text-neutral-400" />
          <span className="ml-3 text-sm text-neutral-500">Loading players…</span>
        </div>
      ) : (
        <Players
          players={players}
          selectedPlayers={team.selectedPlayers}
          onSelect={handleSelectPlayer}
          onRemove={handleRemovePlayer}
        />
      )}

      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
