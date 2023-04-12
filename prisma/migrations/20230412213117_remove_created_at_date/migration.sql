/*
  Warnings:

  - You are about to drop the column `createdDate` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `createdDate` on the `ProductCategory` table. All the data in the column will be lost.
  - You are about to drop the column `createdDate` on the `ProductCategoryType` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "createdDate";

-- AlterTable
ALTER TABLE "ProductCategory" DROP COLUMN "createdDate";

-- AlterTable
ALTER TABLE "ProductCategoryType" DROP COLUMN "createdDate";
