import PlayerCard from "./PlayerCard";

export default function PlayerComponent() {
  return (
    <div>
      <form>
        <input placeholder="이름 혹은 전화번호 네자리"></input>
        <button>참가</button>
      </form>
      <div>
        <PlayerCard />
      </div>
    </div>
  );
}
