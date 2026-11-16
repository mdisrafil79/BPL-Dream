import { use, useState } from 'react';
import type { Iplayer } from '../../types/Player';
import AvailablePlayers from './AbailablePlayers';

interface PlayersProps {
  playersPromise: Promise<Iplayer[]>;
}

const Players = ({ playersPromise }: PlayersProps) => {
  const players = use(playersPromise);
  const [buttonType, setButtonType]  = useState("available")
  console.log(buttonType)

  const handleUpdateBtnType = (type : "available" | "selected") => {
    setButtonType(type)
  }

  return (
    <div id="players" className='container mx-auto scroll-mt-8'>
      <div className='flex justify-between gap-4'>
        <h2 className='font-bold text-xl'>Available Players</h2>
        <div>
          <button
          onClick={()=>handleUpdateBtnType("available")}
           className={`btn ${buttonType === "available" ? "btn-success" : ""} rounded-r-none`}>Available</button>
          <button
          onClick={()=>handleUpdateBtnType("selected")}
           className={`btn ${buttonType === "selected" ? "btn-success" : ""} rounded-l-none`}>Selected</button>
        </div>
      </div>
      <AvailablePlayers players={players} />
    </div>
  );
};

export default Players;