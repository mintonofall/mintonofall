import { NextRequest } from "next/server";
import db from "../../../../lib/db";
import { playerList } from "../../../../prisma/fakeDatabase";
import { stringify } from "querystring";
export async function POST(req: NextRequest) {
    const data = await req.json();
    console.log("data is ", data);
    const players = await db.player.findUnique({where :{
        id: parseInt(data.playerId),
        clubId: parseInt(data.clubId),
    }});
    // const players = playerList;
    if(!players) {
        return Response.json({ message: 'Player not found' });
    }
    const inputWatingPlayer = await db.watingPlayer.create({
        data: {
            playerId: players.id,
            clubId: players.clubId,
            
        }

    return Response.json(players);
}
