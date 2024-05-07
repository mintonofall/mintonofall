import PlayerCard from "./PlayerCard";

export default function WatingComponent() {
  return (
    <div className="bg-rose-300 p-5">
      <div className="flex gap-2 p-1">
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
      </div>
      <div className="flex gap-2 p-1">
        <div>
          <PlayerCard></PlayerCard>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
