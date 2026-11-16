import { FaUser, FaMapMarkerAlt } from "react-icons/fa";
import { GiBowlingPin, GiCricketBat } from "react-icons/gi";
import type { Iplayer } from "../../types/Player";

const PlayerCard = ({ player }: { player: Iplayer }) => {
  return (
    <div className="group card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out border border-base-200 hover:border-primary/30 hover:-translate-y-1 overflow-hidden">
      {/* Image Section */}
      <figure className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
        <img
          src={player.PlayerImg}
          alt={player.PlayerName}
          className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

        {/* Player name overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-white">
          <FaUser className="text-lg drop-shadow-md" />
          <h2 className="text-xl font-bold tracking-wide drop-shadow-md">
            {player.PlayerName}
          </h2>
        </div>

        {/* Badge top right */}
        <div className="absolute top-4 right-4">
          <span className="badge badge-primary badge-lg font-medium shadow-md">
            {player.PlayerType}
          </span>
        </div>
      </figure>

      {/* Body Section */}
      <div className="card-body p-5 gap-4">
        {/* Origin */}
        <div className="flex items-center gap-2 text-base-content/70">
          <FaMapMarkerAlt className="text-primary" />
          <span className="font-medium">{player.Origin}</span>
        </div>

        <div className="divider my-0" />

        {/* Playing Style */}
        <div>
          <h3 className="text-sm uppercase tracking-wider font-semibold text-base-content/50 mb-3">
            Playing Style
          </h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-3 rounded-lg bg-base-200/60 px-3 py-2">
              <div className="flex items-center gap-2 text-sm font-medium">
                <GiCricketBat className="text-primary text-lg" />
                <span>Batting</span>
              </div>
              <span className="text-sm font-semibold text-base-content/80">
                {player.battingStyle}
              </span>
            </div>

            <div className="flex items-center justify-between gap-3 rounded-lg bg-base-200/60 px-3 py-2">
              <div className="flex items-center gap-2 text-sm font-medium">
                <GiBowlingPin className="text-secondary text-lg" />
                <span>Bowling</span>
              </div>
              <span className="text-sm font-semibold text-base-content/80">
                {player.BowlingStyle}
              </span>
            </div>
          </div>
        </div>

        <div className="divider my-0" />

        {/* Price + Action */}
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wider text-base-content/50 font-semibold">
              Price
            </p>
            <p className="text-2xl font-extrabold text-primary">
              {player.Price}
            </p>
          </div>
          <button className="btn btn-primary btn-sm sm:btn-md rounded-full shadow-md hover:shadow-lg transition-shadow">
            Choose Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;