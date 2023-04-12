/*
  Warnings:

  - You are about to drop the column `logTypeId` on the `Log` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Log" DROP COLUMN "logTypeId",
ADD COLUMN     "logType" UUID;
