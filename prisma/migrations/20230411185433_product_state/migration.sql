/*
  Warnings:

  - Added the required column `productStateId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "productStateId" UUID NOT NULL;

-- CreateTable
CREATE TABLE "ProductState" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "ProductState_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_productStateId_fkey" FOREIGN KEY ("productStateId") REFERENCES "ProductState"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
