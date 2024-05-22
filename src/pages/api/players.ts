import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../lib/db";

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  const players = await db.player.findMany();
  console.log("server side players: ", players);
  res.status(200).json(players);
}