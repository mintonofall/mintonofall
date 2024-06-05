import { NextRequest, NextResponse } from "next/server";
import db from "../../../../lib/db";
import { playerList } from "../../../../prisma/fakeDatabase";
import { stringify } from "querystring";
import { request } from "http";
import { Player } from "@/model/model";
export async function POST(req: NextRequest) {
    const data = await req.json();
    console.log("data is ", data);
    const newPlace:number = await db.watingPlayer.count() + 1;
    const players = await db.player.findUnique({where :{
        id: data.playerId,
        clubId: data.clubId,
    }});
    console.log("players is ", players);
    // const players = playerList;
    if(!players) {
        return Response.json({ message: 'Player not found' });
    }
    const inputWatingPlayer = await db.watingPlayer.create({
        data: {
            place: newPlace,
            playerId: players.id,
            clubId: players.clubId,
            
        },})
    const playerList = await db.watingPlayer.findMany({ select: { watingPlayer: true }, orderBy: { place: 'asc' } });

    // const players = playerList;
    const newPlayerList:Player[] = []
   
    console.log("sever side players: ", playerList[0].watingPlayer);
    if(!players) {
        return Response.json({ message: 'Player not found' });
    }
    playerList.map((player) => {
        newPlayerList.push(player.watingPlayer);
    })
    console.log("newPlayerList is ", newPlayerList);
        

    return NextResponse.json(newPlayerList);
}
