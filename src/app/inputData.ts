"use server"
import db from "../../lib/db";
import { playerList } from "../../prisma/fakeDatabase"

 export async function inPutData() {
    console.log("inPutData");
    // playerList.map(async (player) => {
    //   const response = await db.player.create({
    //     data: {
    //       name: player.name,
    //       age: player.age,
    //       grade: player.grade,
    //       avatar: player.avatar,
    //     },
    //   });
    // });
  }