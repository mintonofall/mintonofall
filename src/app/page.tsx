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
  const players = playerList;
  const [boardPointer, setBoardPointer] = useState(0);
  const [playerPointer, setPlayerPointer] = useState(0);
  const [showCreatePlayer, setShowCreatePlayer] = useState(false);

  return (
    <div className="flex flex-row">
      <div className="lg:w-1/2">
        <div className="flex bg-green-400 p-5">
          <div className="grid grid-rows-4 grid-cols-1 w-20">
            <button>=</button>
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
            <div key={0}></div>
            <div key={2}></div>
            <div key={3}></div>
            <div key={4}></div>
            <div key={5}></div>
            <div key={6}></div>
            <div key={7}></div>
            <div key={8}></div>
            <div key={9}></div>
            <div key={10}></div>
            <div key={11}></div>
            <div key={12}></div>
            <div key={13}></div>
            <div key={14}></div>
            <div key={15}></div>
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

              <div key={16}></div>
              <div key={17}></div>
              <div key={18}></div>
              <div key={19}></div>
              <div key={20}></div>
              <div key={21}></div>
              <div key={22}></div>
              <div key={23}></div>
              <div key={24}></div>
              <div key={25}></div>
              <div key={26}></div>
              <div key={27}></div>
              <div key={28}></div>
              <div key={29}></div>
              <div key={30}></div>
              <div key={31}></div>
              <div key={32}></div>
              <div key={33}></div>
              <div key={34}></div>
              <div key={35}></div>
              <div key={36}></div>
              <div key={37}></div>
              <div key={38}></div>
              <div key={39}></div>
              <div key={40}></div>
              <div key={41}></div>
              <div key={42}></div>
              <div key={43}></div>
              <div key={44}></div>
              <div key={45}></div>
              <div key={46}></div>
              <div key={47}></div>
              <div key={48}></div>
              <div key={49}></div>
              <div key={50}></div>
              <div key={51}></div>
              <div key={52}></div>
              <div key={53}></div>
              <div key={54}></div>
              <div key={55}></div>
              <div key={56}></div>
              <div key={57}></div>
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
