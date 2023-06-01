/*
  Warnings:

  - Added the required column `orderId` to the `OrderTableProduct` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OrderTableProduct" ADD COLUMN     "orderId" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "OrderTableProduct" ADD CONSTRAINT "OrderTableProduct_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
