import { newPlayer } from "./newPlayer";

export default function CreatePlayer() {
  return (
    <div>
      <form action={newPlayer}>
        <input placeholder="이름" name="name"></input>
        <div>
          연령대
          <input type="radio" name="age" value="20" />
          20
          <input type="radio" name="age" value="30" />
          30
          <input type="radio" name="age" value="40" />
          40
          <input type="radio" name="age" value="50" />
          50
          <input type="radio" name="age" value="60" />
          60
        </div>
        <div>
          급수
          <input type="radio" name="grade" value="S" />S
          <input type="radio" name="grade" value="A" />A
          <input type="radio" name="grade" value="B" />B
          <input type="radio" name="grade" value="C" />C
          <input type="radio" name="grade" value="D" />D
          <input type="radio" name="grade" value="E" />E
        </div>
        <input type="submit" value="만들기" />
      </form>
    </div>
  );
}
