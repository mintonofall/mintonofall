/*
  Warnings:

  - Added the required column `clubId` to the `PlayingGames` table without a default value. This is not possible if the table is not empty.
  - Added the required column `player1Id` to the `PlayingGames` table without a default value. This is not possible if the table is not empty.
  - Added the required column `player2Id` to the `PlayingGames` table without a default value. This is not possible if the table is not empty.
  - Added the required column `player3Id` to the `PlayingGames` table without a default value. This is not possible if the table is not empty.
  - Added the required column `player4Id` to the `PlayingGames` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PlayingGames" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "clubId" INTEGER NOT NULL,
    "courtNumber" INTEGER NOT NULL,
    "player1Id" INTEGER NOT NULL,
    "player2Id" INTEGER NOT NULL,
    "player3Id" INTEGER NOT NULL,
    "player4Id" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "PlayingGames_clubId_fkey" FOREIGN KEY ("clubId") REFERENCES "Club" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PlayingGames" ("courtNumber", "createdAt", "id", "updatedAt") SELECT "courtNumber", "createdAt", "id", "updatedAt" FROM "PlayingGames";
DROP TABLE "PlayingGames";
ALTER TABLE "new_PlayingGames" RENAME TO "PlayingGames";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
