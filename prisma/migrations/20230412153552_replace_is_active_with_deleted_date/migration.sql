/*
  Warnings:

  - You are about to drop the column `isActive` on the `Log` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `ProductCategory` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `ProductCategoryType` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `ProductState` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `Role` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Log" DROP COLUMN "isActive",
ADD COLUMN     "deleted" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "isActive",
ADD COLUMN     "deleted" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "ProductCategory" DROP COLUMN "isActive",
ADD COLUMN     "deleted" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "ProductCategoryType" DROP COLUMN "isActive",
ADD COLUMN     "deleted" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "ProductState" DROP COLUMN "isActive",
ADD COLUMN     "deleted" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Role" DROP COLUMN "isActive",
ADD COLUMN     "deleted" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "User" DROP COLUMN "isActive",
ADD COLUMN     "deleted" TIMESTAMP(3);
