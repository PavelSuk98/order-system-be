/*
  Warnings:

  - You are about to drop the column `createdById` on the `Log` table. All the data in the column will be lost.
  - You are about to drop the column `typeId` on the `Log` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Log" DROP CONSTRAINT "FK_88299ef9a14cb86c9befb535d76";

-- DropForeignKey
ALTER TABLE "Log" DROP CONSTRAINT "FK_c4036eeca8928b5ce7848c3f1c4";

-- AlterTable
ALTER TABLE "Log" DROP COLUMN "createdById",
DROP COLUMN "typeId",
ADD COLUMN     "createdByUserId" UUID,
ADD COLUMN     "logTypeId" UUID;
