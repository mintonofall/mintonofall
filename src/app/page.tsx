"use client";

import Image from "next/image";
import PlayerCard from "./PlayerCard";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import db from "../../lib/db";
import CreatePlayer from "./createPlayer";
import { playerList } from "../../prisma/fakeDatabase";
import { Player, SendData } from "@/model/model";
import { platform } from "process";
import { Play } from "next/font/google";

async function getInitialPlayers() {
  const players = await db.watingPlayer.findMany();
  console.log("client side players: ", players);
  return players;
}

export default function Home() {
  const [PlayerArray, setPlayerArray] = useState<Array<Player>>(
    Array.from({ length: 48 })
  );
  // const [PlayerArray, setPlayerArray] = useState<Array<Player>>(
  //  () => JSON.parse(localStorage.getItem('PlayerArray')) || Array.from({ length: 48 })
  // ); // [player1, player2, player3, player4]
  const [showCreatePlayer, setShowCreatePlayer] = useState(false);
  const [showInputPlayer, setShowInputPlayer] = useState([]);
  const [inputPlayer, setInputPlayer] = useState("");
  const [players, setPlayers] = useState<Player[]>([]);
  const [PlayingGame, setPlayingGame] = useState<Player[]>(
    Array.from({ length: 16 })
  );
  const [selectedPlayer, setSelectedPlayer] = useState<Player>({
    id: 0,
    name: "",
    age: 0,
    grade: "",
    gameCount: 0,
    avatar: "",
    clubId: 0,
  });
  const seletPlayer = async (index: number) => {
    const newArray = [...PlayerArray];
    newArray[index] = selectedPlayer;
    await setPlayerArray(newArray);
  };

  const handlePlayerClick = (player: Player) => {
    fetch("/www/selectedPlayers", {
      method: "POST",
      body: JSON.stringify({ playerId: player.id, clubId: player.clubId }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("res data is ", data);
        setPlayers(data);
        // Handle the response data here
      })
      .catch((error) => {
        // Handle any errors here
      });
  };

  useEffect(() => {
    fetch("/www/players")
      .then((response) => response.json())
      .then((data) => {
        setPlayers(data);
      });
    fetch("/www/watingBoard")
      .then((response) => response.json())
      .then((data) => {});
  }, []);

  useEffect(() => {
    const sendData: SendData[] = [];
    PlayerArray.map((player, idx) => {
      if (!player) {
        const data = {
          place: idx,
          clubId: 1,
          playerId: null,
        };
        sendData.push(data);
      } else {
        const data = {
          playerId: player.id,
          place: idx,
          clubId: player?.clubId,
        };
        sendData.push(data);
      }
    });
    console.log("sendData is ", sendData);
    fetch("/www/watingBoard", {
      method: "POST",
      body: JSON.stringify(sendData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("res data is ", data);
        // Handle the response data here
      })
      .catch((error) => {
        console.log("error is ", error);
        // Handle any errors here
      });
    localStorage.setItem("PlayerArray", JSON.stringify(PlayerArray));
  }, [PlayerArray]);

  return (
    <div className="flex  flex-row">
      <div className="overflow-x-scroll lg:w-2/3">
        <div className="flex bg-green-400 p-5">
          <div className="grid grid-rows-4 grid-cols-1 w-20">
            {Array.from({ length: 4 }).map((_, index) => (
              <button key={index}>+</button>
            ))}
          </div>
          <div className="grid grid-cols-4 grid-rows-4 *:border-2 *:rounded-md gap-2 w-full">
            {Array.from({ length: 16 }).map((_, index) => (
              <div key={index}>
                {PlayerArray[index] ? (
                  <PlayerCard
                    name={PlayerArray[index]?.name}
                    age={PlayerArray[index]?.age || 0}
                    grade={PlayerArray[index]?.grade}
                    avatar={PlayerArray[index]?.avatar}
                    gameCount={PlayerArray[index]?.gameCount || 0}
                  ></PlayerCard>
                ) : (
                  <PlayerCard
                    name="선수이름"
                    age={0}
                    grade=""
                    avatar="https://imagedelivery.net/H_vtnjYSM5axKm4PivHM5g/54f8e178-686c-4184-811c-eeb72f96ba00/avatar"
                    gameCount={0}
                  ></PlayerCard>
                )}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex bg-rose-300 p-5">
            <div className="grid grid-rows-12 grid-cols-1 w-20">
              {Array.from({ length: 12 }).map((_, index) => (
                <button key={index}>+</button>
              ))}
            </div>
            <div className="grid grid-rows-12 grid-cols-4 *:border-2 *:rounded-md gap-2 w-full">
              {Array.from({ length: 48 }).map((_, index) => (
                <div
                  key={index}
                  onClick={() => {
                    seletPlayer(index);
                  }}
                >
                  {PlayerArray[index] ? (
                    <PlayerCard
                      name={PlayerArray[index].name}
                      age={PlayerArray[index].age || 0}
                      grade={PlayerArray[index].grade}
                      avatar={PlayerArray[index].avatar}
                      gameCount={PlayerArray[index].gameCount || 0}
                    ></PlayerCard>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-scroll lg:w-1/3">
        <div>
          <form>
            <input
              onChange={async (e) => {
                setInputPlayer(e.target.value);
                fetch("/www/findPlayers", {
                  method: "POST",
                  body: JSON.stringify({ name: inputPlayer }),
                })
                  .then((response) => response.json())
                  .then((data) => {
                    setShowInputPlayer(data);
                    console.log("show is ", showInputPlayer);
                  });
              }}
              placeholder="이름 혹은 전화번호 네자리"
            ></input>
            <button>참가</button>
          </form>
          <div>
            {players.map((player: Player, idx) => {
              return (
                <div
                  key={idx}
                  onClick={() => {
                    setSelectedPlayer(player); // Fix: Use setSelectedPlayer instead of selectedPlayer
                  }}
                >
                  <PlayerCard
                    name={player.name}
                    age={player.age || 0}
                    grade={player.grade}
                    gameCount={4}
                    avatar={player.avatar}
                  />
                </div>
              );
            })}
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
      <div className={inputPlayer == "" ? "hidden" : ""}>
        {showInputPlayer.map((player: Player, idx) => {
          return (
            <div
              onClick={() => {
                console.log("selected player is ", player);
                handlePlayerClick(player);
              }}
            >
              <PlayerCard
                name={player.name}
                age={player.age || 0}
                grade={player.grade}
                gameCount={0}
                avatar={player.avatar}
              />
            </div>
          );
        })}
        test
      </div>
    </div>
  );
}
