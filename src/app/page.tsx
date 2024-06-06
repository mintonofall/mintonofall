"use client";

import Image from "next/image";
import PlayerCard from "./PlayerCard";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import db from "../../lib/db";
import CreatePlayer from "./createPlayer";
import { playerList } from "../../prisma/fakeDatabase";
import { Player, SendData, PlayerWithPlaceObj } from "@/model/model";
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
  const [watingBoardIdx, setWatingBoardIdx] = useState(0);
  const [watingPointer, setWatingPointer] = useState(0);
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

  const pushGame = async (watingPointer: number, index: number) => {
    fetch("/www/pushGames", {
      method: "Post",
      body: JSON.stringify({
        courtNumber: index,
        player1Id: PlayerArray[watingPointer * 4]?.id,
        player2Id: PlayerArray[watingPointer * 4 + 1]?.id,
        player3Id: PlayerArray[watingPointer * 4 + 2]?.id,
        player4Id: PlayerArray[watingPointer * 4 + 3]?.id,
        clubId: PlayerArray[watingPointer * 4]?.clubId,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("push data is ", data);
      });
  };

  const isSelected = (watingPointer: number, index: number): Boolean => {
    if (watingPointer === 0 && index < 4) {
      return true;
    }
    if (watingPointer === 1 && index >= 4 && index < 8 && index > 3) {
      return true;
    }

    return false;
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

  const sendWatingBoardPlayer = async (index: number) => {
    fetch("/www/watingBoard", {
      method: "POST",
      body: JSON.stringify({
        playerId: selectedPlayer.id,
        clubId: selectedPlayer.clubId,
        place: index,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("wating data is ", data);
      })
      .catch((error) => {
        // Handle any errors here
      });
  };

  useEffect(() => {
    fetch("/www/pushGames")
      .then((response) => response.json())
      .then((data) => {
        console.log("playingGame datas is ", data);
        data.map((data: PlayerWithPlaceObj) => {});
      });
    fetch("/www/players")
      .then((response) => response.json())
      .then((data) => {
        setPlayers(data);
      });
    fetch("/www/watingBoard")
      .then((response) => response.json())
      .then((datas) => {
        console.log("wating List is", datas);
        const newPlayerArray: Player[] = Array.from({ length: 48 });
        datas.map((data: PlayerWithPlaceObj) => {
          newPlayerArray[data.place] = data.watingPlayer!;
        });
        console.log("stard wating data is ", newPlayerArray);
        setPlayerArray(newPlayerArray);
      });
  }, []);

  return (
    <div className="flex  flex-row">
      <div className="overflow-x-scroll lg:w-2/3">
        <div className="flex bg-green-400 p-5">
          <div className="grid grid-rows-4 grid-cols-1 w-20">
            {Array.from({ length: 4 }).map((_, index) => (
              <button
                onClick={() => {
                  pushGame(watingPointer, index);
                }}
                key={index}
              >
                +
              </button>
            ))}
          </div>
          <div className="grid grid-cols-4 grid-rows-4 *:border-2 *:rounded-md gap-2 w-full">
            {Array.from({ length: 16 }).map((_, index) => (
              <div key={index}>
                {PlayingGame[index] ? (
                  <PlayerCard
                    name={PlayingGame[index]?.name}
                    age={PlayingGame[index]?.age || 0}
                    grade={PlayingGame[index]?.grade}
                    avatar={PlayingGame[index]?.avatar}
                    gameCount={PlayingGame[index]?.gameCount || 0}
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
                <div
                  key={index}
                  onClick={() => {
                    setWatingPointer(index);
                  }}
                >
                  <button>+</button>
                </div>
              ))}
            </div>
            <div className="grid grid-rows-12 grid-cols-4 *:border-2 *:rounded-md gap-2 w-full">
              {Array.from({ length: 48 }).map((_, index) => (
                <div
                  key={index}
                  className={`${
                    isSelected(watingPointer, index) ? "bg-orange-400" : ""
                  }`}
                  onClick={async () => {
                    seletPlayer(index);
                    await setWatingBoardIdx(index);
                    console.log("Board inx is ", watingBoardIdx);
                    await sendWatingBoardPlayer(index);
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
