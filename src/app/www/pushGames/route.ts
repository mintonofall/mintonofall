import { NextRequest } from "next/server";
import db from "../../../../lib/db";
import { PlayingGame } from "@/model/model";


export async function GET(req: NextRequest) {
   
    var playingGames:PlayingGame[] = []
    const datas = await db.playingGames.findMany({
        where: { clubId: 1 },
        orderBy: { courtNumber: 'asc' },
    });
    console.log("datas is ", datas);
    const playingGamesPromises = datas.map(async (data)=> {
        const player1 = await db.player.findUnique({
            where: {id: data.player1Id},
        });
        const player2 = await db.player.findUnique({
            where: {id: data.player2Id},
        });
        const player3 = await db.player.findUnique({
            where: {id: data.player3Id},
        });
        const player4 = await db.player.findUnique({
            where: {id: data.player4Id},
        });
        const playingGame:PlayingGame = {
            courtNumber: data.courtNumber,
            player1: player1,
            player2: player2,
            player3: player3,
            player4: player4,
            clubId: data.clubId
        }
        console.log("playingGame is ", playingGame);
        await playingGames.push(playingGame);
    });
    const playingGamess = await Promise.all(playingGamesPromises);
    console.log("playingGames is ", playingGamess);
    return Response.json(playingGames);
}

export async function POST(req: NextRequest) {
    const data = await req.json();
         console.log("data is ", data);
            const newdata = await db.playingGames.create({
                data: {
                    courtNumber: data.courtNumber,
                    player1Id: data.player1Id,
                    player2Id: data.player2Id,
                    player3Id: data.player3Id,
                    player4Id: data.player4Id,
                    clubId: data.clubId
                }
            })
        
        // const datas = await db.watingBoard.create({
        //     data: {
        //         place: data.place,
        //         playerId: data.playerId,
        //         clubId: data.clubId
        //     }
        // })

    return Response.json({ message: 'push is good' });
}