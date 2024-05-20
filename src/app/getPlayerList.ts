"use server"
import db from "../../lib/db";

export async function getPlayerList() {
  const playerList = await db.player.findMany();
  return playerList;
}