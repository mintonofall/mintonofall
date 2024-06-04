import { NextRequest } from "next/server";
import db from "../../../../lib/db";
import { playerList } from "../../../../prisma/fakeDatabase";
import { stringify } from "querystring";
export async function POST(req: NextRequest) {
    const data = await req.json();
    const players = await db.player.findMany({ where: { name: { contains: data.name } }, select: { name:true, grade:true,avatar:true, age:true } });
    // const players = playerList;
    if(!players) {
        return Response.json({ message: 'Player not found' });
    }
    console.log("body is ",data);
    console.log("sever side players: ", players);
    return Response.json(players);;
}




// import { Request, Response } from 'express';

// import Player from '../models/Player';

// export const findPlayerByName = async (req: Request, res: Response) => {
//     try {
//         const { name } = req.body;

//         // Find player by name in the Player model
//         const player = await Player.findOne({ name });

//         if (!player) {
//             return res.status(404).json({ message: 'Player not found' });
//         }

//         return res.status(200).json(player);
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: 'Internal server error' });
//     }
// };
// export const createPlayer = async (req: Request, res: Response) => {
//     try {
//         const { name, age, position } = req.body;

//         // Create a new player using the Player model
//         const player = new Player({ name, age, position });
//         await player.save();

//         return res.status(201).json(player);
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: 'Internal server error' });
//     }
// };