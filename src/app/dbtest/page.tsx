import db from "../../../lib/db";
import PlayerCard from "../PlayerCard";

async function getPlayers() {
  const players = await db.player.findMany();
  console.log("client side players: ", players);
  return players;
}

export default async function Home() {
  const players = await getPlayers();

  return (
    <div>
      {players.map((player) => (
        <PlayerCard
          key={player.id}
          name={player.name}
          age={player.age!}
          grade={player.grade!}
          avatar={player.avatar!}
          gameCount={4}
        />
      ))}
    </div>
  );
}
