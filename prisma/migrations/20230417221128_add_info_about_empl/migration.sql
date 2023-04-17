/*
  Warnings:

  - Added the required column `managedByEmployeeId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `managedByEmployeeId` to the `OrderTableProduct` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "managedByEmployeeId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "OrderTableProduct" ADD COLUMN     "managedByEmployeeId" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "OrderTableProduct" ADD CONSTRAINT "OrderTableProduct_managedByEmployeeId_fkey" FOREIGN KEY ("managedByEmployeeId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_managedByEmployeeId_fkey" FOREIGN KEY ("managedByEmployeeId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
