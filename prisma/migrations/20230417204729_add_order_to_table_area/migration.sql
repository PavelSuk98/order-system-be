/*
  Warnings:

  - Added the required column `order` to the `TableArea` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TableArea" ADD COLUMN "order" INTEGER default(0);
