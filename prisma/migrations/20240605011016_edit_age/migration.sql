-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Player" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "avatar" TEXT NOT NULL DEFAULT 'https://imagedelivery.net/H_vtnjYSM5axKm4PivHM5g/54f8e178-686c-4184-811c-eeb72f96ba00/avatar',
    "age" INTEGER NOT NULL DEFAULT 0,
    "grade" TEXT NOT NULL DEFAULT 'X',
    "mmr" INTEGER NOT NULL DEFAULT 1000,
    "clubId" INTEGER NOT NULL DEFAULT 1,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Player_clubId_fkey" FOREIGN KEY ("clubId") REFERENCES "Club" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Player" ("age", "avatar", "clubId", "createdAt", "grade", "id", "mmr", "name", "updatedAt") SELECT "age", coalesce("avatar", 'https://imagedelivery.net/H_vtnjYSM5axKm4PivHM5g/54f8e178-686c-4184-811c-eeb72f96ba00/avatar') AS "avatar", coalesce("clubId", 1) AS "clubId", "createdAt", "grade", "id", "mmr", "name", "updatedAt" FROM "Player";
DROP TABLE "Player";
ALTER TABLE "new_Player" RENAME TO "Player";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
