import Image from "next/image";
import PlayerComponent from "./PlayerComponent";
import db from "../../lib/db";

async function getPlayers() {
  const players = await db.player.findMany();
  return players;
}

export default async function Home() {
  const players = await getPlayers();
  return (
    <div className="flex flex-row">
      <div className="w-1/2">
        <div className="">Court div</div>
        <div>Wating div</div>
      </div>
      <div className="w-1/2">
        <PlayerComponent />
        {players[0].name}
        {players[0].avatar ? (
          <Image
            src={players[0].avatar}
            alt="avatar"
            width={100}
            height={100}
          />
        ) : (
          players[0].avatar
        )}
      </div>
    </div>
  );
}
