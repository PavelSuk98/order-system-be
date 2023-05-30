/*
  Warnings:

  - You are about to drop the column `managedByEmployeeId` on the `OrderTableProduct` table. All the data in the column will be lost.
  - You are about to drop the column `orderId` on the `OrderTableProduct` table. All the data in the column will be lost.
  - Added the required column `createdByEmployeeId` to the `OrderTableProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `managedByEmployeeId` to the `OrderTableProductPayment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "OrderTableProduct" DROP CONSTRAINT "OrderTableProduct_managedByEmployeeId_fkey";

-- DropForeignKey
ALTER TABLE "OrderTableProduct" DROP CONSTRAINT "OrderTableProduct_orderId_fkey";

-- AlterTable
ALTER TABLE "OrderTableProduct" DROP COLUMN "managedByEmployeeId",
DROP COLUMN "orderId",
ADD COLUMN     "createdByEmployeeId" UUID NOT NULL,
ADD COLUMN     "customerId" UUID,
ADD COLUMN     "paid" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "preparedByEmployeeId" UUID;

-- AlterTable
ALTER TABLE "OrderTableProductPayment" ADD COLUMN     "managedByEmployeeId" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "OrderTableProductPayment" ADD CONSTRAINT "OrderTableProductPayment_managedByEmployeeId_fkey" FOREIGN KEY ("managedByEmployeeId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderTableProductPayment" ADD CONSTRAINT "OrderTableProductPayment_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderTableProduct" ADD CONSTRAINT "OrderTableProduct_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderTableProduct" ADD CONSTRAINT "OrderTableProduct_createdByEmployeeId_fkey" FOREIGN KEY ("createdByEmployeeId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderTableProduct" ADD CONSTRAINT "OrderTableProduct_preparedByEmployeeId_fkey" FOREIGN KEY ("preparedByEmployeeId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
