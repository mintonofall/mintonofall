-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_WatingBoard" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "place" INTEGER NOT NULL,
    "playerId" INTEGER,
    "clubId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "WatingBoard_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "WatingBoard_clubId_fkey" FOREIGN KEY ("clubId") REFERENCES "Club" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_WatingBoard" ("clubId", "createdAt", "id", "place", "playerId", "updatedAt") SELECT "clubId", "createdAt", "id", "place", "playerId", "updatedAt" FROM "WatingBoard";
DROP TABLE "WatingBoard";
ALTER TABLE "new_WatingBoard" RENAME TO "WatingBoard";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
