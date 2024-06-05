import { Player, SendData } from "@/model/model";
import { NextRequest } from "next/server";
import db from "../../../../lib/db";


export async function GET(req: NextRequest) {
    const boards = await db.watingBoard.findMany({
        where: { clubId: 1 },
        orderBy: { place: 'asc' },
        select: { watingPlayer: true }
    });
    const newPlayerList:Player[] = []
    boards.map((player) => {
        if(player.watingPlayer !== null) {
            newPlayerList.push(player.watingPlayer);
        }
    })

    return Response.json(newPlayerList);

}

export async function POST(req: NextRequest) {
    const data = await req.json();
    console.log("req.body is ", data);
    const deleteBoard = await db.watingBoard.deleteMany({where: {clubId: data[0].clubId}});
    data.map(async (board:SendData) => {
        console.log("board is ", board);

        const boards = await db.watingBoard.create({
            data: {
                place: board.place,
                playerId: board.playerId,
                clubId: board.clubId
            }
        })

    })
    return Response.json({ message: 'sever is good' });
}