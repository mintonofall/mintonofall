-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Player" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "avatar" TEXT,
    "age" INTEGER NOT NULL DEFAULT 0,
    "grade" TEXT,
    "mmr" INTEGER NOT NULL DEFAULT 1000,
    "clubId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Player_clubId_fkey" FOREIGN KEY ("clubId") REFERENCES "Club" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Player" ("age", "avatar", "clubId", "createdAt", "grade", "id", "mmr", "name", "updatedAt") SELECT coalesce("age", 0) AS "age", "avatar", "clubId", "createdAt", "grade", "id", "mmr", "name", "updatedAt" FROM "Player";
DROP TABLE "Player";
ALTER TABLE "new_Player" RENAME TO "Player";
PRAGMA foreign_key_check("Player");
PRAGMA foreign_keys=ON;
