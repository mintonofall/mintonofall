/*
  Warnings:

  - Added the required column `place` to the `WatingPlayer` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_WatingPlayer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "place" INTEGER NOT NULL,
    "playerId" INTEGER,
    "clubId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "WatingPlayer_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "WatingPlayer_clubId_fkey" FOREIGN KEY ("clubId") REFERENCES "Club" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_WatingPlayer" ("clubId", "createdAt", "id", "playerId", "updatedAt") SELECT "clubId", "createdAt", "id", "playerId", "updatedAt" FROM "WatingPlayer";
DROP TABLE "WatingPlayer";
ALTER TABLE "new_WatingPlayer" RENAME TO "WatingPlayer";
PRAGMA foreign_key_check("WatingPlayer");
PRAGMA foreign_keys=ON;
