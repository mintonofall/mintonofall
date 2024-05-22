import { NextRequest } from "next/server";
import db from "../../../../lib/db";
import { playerList } from "../../../../prisma/fakeDatabase";

export async function GET(req: NextRequest) {
    // const players = await db.player.findMany();
    const players = playerList;
    console.log("sever side players: ", players);
    return Response.json(players);;
}