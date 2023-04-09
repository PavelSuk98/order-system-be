/*
  Warnings:

  - You are about to drop the column `userName` on the `User` table. All the data in the column will be lost.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `roleId` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "userName",
ADD COLUMN     "firstName" VARCHAR NOT NULL,
ADD COLUMN     "lastName" VARCHAR NOT NULL,
ALTER COLUMN "roleId" SET NOT NULL;
