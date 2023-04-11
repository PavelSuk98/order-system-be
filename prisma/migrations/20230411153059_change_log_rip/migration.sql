/*
  Warnings:

  - You are about to drop the column `newObject` on the `Log` table. All the data in the column will be lost.
  - You are about to drop the column `oldObject` on the `Log` table. All the data in the column will be lost.
  - You are about to drop the column `productCategoryId` on the `Log` table. All the data in the column will be lost.
  - Added the required column `entityId` to the `Log` table without a default value. This is not possible if the table is not empty.
  - Added the required column `entityObject` to the `Log` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Log" DROP CONSTRAINT "FK_a47b7680906e07270c2ee190569";

-- AlterTable
ALTER TABLE "Log" DROP COLUMN "newObject",
DROP COLUMN "oldObject",
DROP COLUMN "productCategoryId",
ADD COLUMN     "entityId" UUID NOT NULL,
ADD COLUMN     "entityObject" JSONB NOT NULL;
