-- DropForeignKey
ALTER TABLE "OrderTableProduct" DROP CONSTRAINT "OrderTableProduct_tableId_fkey";

-- AlterTable
ALTER TABLE "OrderTableProduct" ALTER COLUMN "tableId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "OrderTableProduct" ADD CONSTRAINT "OrderTableProduct_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "Table"("id") ON DELETE SET NULL ON UPDATE CASCADE;
