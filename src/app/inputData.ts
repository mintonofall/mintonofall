import db from "../../lib/db";
import { playerList } from "../../prisma/fakeDatabase"

export async function inPutData() {
    try {
        // 비동기 작업
        await Promise.all(playerList.map(async (player) => {
            const response = await db.player.create({
                data: {
                    name: player.name,
                    age: player.age,
                    grade: player.grade,
                    avatar: player.avatar,
                },
            });
        }));
        console.log("inPutData");
    } catch (error) {
        console.error(error);
    }
}