"use client";

import Image from "next/image";
import db from "../../lib/db";
import PlayerCard from "./PlayerCard";
import { useState } from "react";

async function getPlayers() {
  const players = await db.player.findMany();
  return players;
}

export default async function Home() {
  const [boardPointer, setBoardPointer] = useState(0);
  const [playerPointer, setPlayerPointer] = useState(0);
  const players = await getPlayers();
  return (
    <div className="flex flex-row">
      <div className="w-1/2">
        <div className="">Court div</div>
        <div>
          <div className="bg-rose-300 p-5">
            <div className="grid grid-rows-12 grid-cols-4 *:border-2 *:rounded-md gap-2">
              <div className="">
                <PlayerCard></PlayerCard>
              </div>
              <div>
                <PlayerCard></PlayerCard>
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div>
          <form>
            <input placeholder="이름 혹은 전화번호 네자리"></input>
            <button>참가</button>
          </form>
          <div>
            <PlayerCard />
          </div>
        </div>
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
