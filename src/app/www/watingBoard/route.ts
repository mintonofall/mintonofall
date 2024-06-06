import { NextRequest } from "next/server";
import db from "../../../../lib/db";


export async function GET(req: NextRequest) {
    const datas = await db.watingBoard.findMany({
        where: { clubId: 1 },
        orderBy: { place: 'asc' },
        select: { watingPlayer: true, place: true}
    });

    return Response.json(datas);

}

export async function POST(req: NextRequest) {
    const data = await req.json();
         console.log("data is ", data);
        const datas = await db.watingBoard.findMany({
            where: {place: data.place, clubId: data.clubId},
        })
        if(datas.length === 0) {
            const newdata = await db.watingBoard.create({
                data: {
                    place: data.place,
                    playerId: data.playerId,
                    clubId: data.clubId
                }
            })
        } else {
            const updatedata = await db.watingBoard.update({
                where: {id: datas[0].id},
                data: {
                    playerId: data.playerId
                }
            })
        }
        // const datas = await db.watingBoard.create({
        //     data: {
        //         place: data.place,
        //         playerId: data.playerId,
        //         clubId: data.clubId
        //     }
        // })

   console.log("req.body is ", data);
    return Response.json({ message: 'sever is good' });
}