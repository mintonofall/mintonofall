import { NextRequest } from "next/server";
import db from "../../../../lib/db";
import { playerList } from "../../../../prisma/fakeDatabase";
import { Player, PlayerWithPlace } from "@/model/model";

export async function GET(req: NextRequest) {
    const players = await db.watingPlayer.findMany({ select: { watingPlayer: true }, orderBy: { place: 'asc' } });

    // const players = playerList;
    const newPlayerList:Player[]= []
   
    // console.log("sever side players: ", players[0]?.watingPlayer);
    if(!players) {
        return Response.json({ message: 'Player not found' });
    }
    players.map((player) => {
        if(player.watingPlayer !== null){
            
        newPlayerList.push(player.watingPlayer);
        }
    })
    // console.log("newPlayerList is ", newPlayerList);
    return Response.json(newPlayerList);
}