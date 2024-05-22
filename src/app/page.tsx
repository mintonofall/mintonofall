"use client";

import Image from "next/image";
import PlayerCard from "./PlayerCard";
import { useEffect, useState } from "react";
import Link from "next/link";
import db from "../../lib/db";
import CreatePlayer from "./createPlayer";
import { playerList } from "../../prisma/fakeDatabase";

async function getInitialPlayers() {
  const players = await db.player.findMany();
  console.log("client side players: ", players);
  return players;
}

export default function Home() {
  const [boardPointer, setBoardPointer] = useState(0);
  const [playerPointer, setPlayerPointer] = useState(0);
  const [showCreatePlayer, setShowCreatePlayer] = useState(false);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("/www/players")
      .then((response) => response.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div className="flex flex-row">
      <div className="lg:w-1/2">
        <div className="flex bg-green-400 p-5">
          <div className="grid grid-rows-4 grid-cols-1 w-20">
            <button>+</button>
            <button>+</button>
            <button>+</button>
            <button>+</button>
          </div>
          <div className="grid grid-cols-4 grid-rows-4 *:border-2 *:rounded-md gap-2 w-full">
            <div key={"A"}>
              <PlayerCard
                name={"aaa"}
                age={30}
                grade={"A"}
                avatar=""
                gameCount={3}
              ></PlayerCard>
            </div>
          </div>
        </div>
        <div>
          <div className="flex bg-rose-300 p-5">
            <div className="grid grid-rows-12 grid-cols-1 w-20">
              <button>+</button>
              <button>+</button>
              <button>+</button>
              <button>+</button>
              <button>+</button>
              <button>+</button>
              <button>+</button>
              <button>+</button>
              <button>+</button>
              <button>+</button>
              <button>+</button>
            </div>
            <div className="grid grid-rows-12 grid-cols-4 *:border-2 *:rounded-md gap-2 w-full">
              <div className="">
                <PlayerCard
                  name={playerList[0].name}
                  age={30}
                  grade={"A"}
                  avatar=""
                  gameCount={3}
                ></PlayerCard>
              </div>
              <div>
                <PlayerCard
                  name={playerList[0].name}
                  age={30}
                  grade={"A"}
                  avatar=""
                  gameCount={3}
                ></PlayerCard>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2">
        <div>
          <form>
            <input placeholder="이름 혹은 전화번호 네자리"></input>
            <button>참가</button>
          </form>
          <div>
            {players.map((player: any) => {
              return (
                <div key={player.name}>
                  <PlayerCard
                    name={player.name}
                    age={player.age}
                    grade={player.grade}
                    gameCount={4}
                    avatar={player.avatar}
                  />
                </div>
              );
            })}
            <PlayerCard
              name={playerList[0].name}
              age={30}
              grade="S"
              gameCount={4}
              avatar="https://imagedelivery.net/H_vtnjYSM5axKm4PivHM5g/4011421e-caf3-40e8-4df5-fffa4655e800/avatar"
            />
          </div>
          <Link href={"createPlayer"}>선수추가</Link>
          <div></div>
          <button
            onClick={() => {
              setShowCreatePlayer(!showCreatePlayer);
            }}
          >
            선수추가보이기
          </button>
          <div className={showCreatePlayer ? "" : "hidden"}>
            <CreatePlayer />
          </div>
        </div>
      </div>
    </div>
  );
}
