/*
  Warnings:

  - You are about to drop the column `orderDate` on the `OrderTableProduct` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "OrderTableProduct" DROP COLUMN "orderDate",
ADD COLUMN     "productOrderDate" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "productPreparedDate" TIMESTAMP(3);
