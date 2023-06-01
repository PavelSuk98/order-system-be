-- DropForeignKey
ALTER TABLE "OrderTableProduct" DROP CONSTRAINT "OrderTableProduct_orderId_fkey";

-- AlterTable
ALTER TABLE "OrderTableProduct" ALTER COLUMN "orderId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "OrderTableProduct" ADD CONSTRAINT "OrderTableProduct_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;
