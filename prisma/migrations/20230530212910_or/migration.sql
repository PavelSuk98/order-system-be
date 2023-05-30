-- AlterTable
ALTER TABLE "OrderTableProductPayment" ADD COLUMN     "orderId" UUID;

-- AddForeignKey
ALTER TABLE "OrderTableProductPayment" ADD CONSTRAINT "OrderTableProductPayment_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;
