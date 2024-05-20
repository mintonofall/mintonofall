import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../../lib/db";
import { playerList } from "../../../../prisma/fakeDatabase";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    // const players = await db.player.findMany();
    const players = playerList;
    console.log("sever side players: ", players);
    return res.status(200).json(players);;
}