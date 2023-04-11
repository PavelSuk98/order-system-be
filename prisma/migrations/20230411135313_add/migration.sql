/*
  Warnings:

  - Added the required column `newObject` to the `Log` table without a default value. This is not possible if the table is not empty.
  - Added the required column `oldObject` to the `Log` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Log" ADD COLUMN     "newObject" JSONB NOT NULL,
ADD COLUMN     "oldObject" JSONB NOT NULL;
