/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Problem` table. All the data in the column will be lost.
  - Added the required column `weekId` to the `Problem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Problem" DROP COLUMN "createdAt",
ADD COLUMN     "weekId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "public"."Week" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Week_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Problem" ADD CONSTRAINT "Problem_weekId_fkey" FOREIGN KEY ("weekId") REFERENCES "public"."Week"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
