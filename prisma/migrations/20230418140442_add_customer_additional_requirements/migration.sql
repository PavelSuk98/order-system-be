/*
  Warnings:

  - Added the required column `customerAdditionalRequirements` to the `OrderTableProduct` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OrderTableProduct" ADD COLUMN     "customerAdditionalRequirements" TEXT NOT NULL;
