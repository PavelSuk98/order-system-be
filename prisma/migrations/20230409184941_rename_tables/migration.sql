/*
  Warnings:

  - You are about to drop the `log_type_entity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `product_category_entity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `product_category_type_entity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `product_entity` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Log" DROP CONSTRAINT "FK_a47b7680906e07270c2ee190569";

-- DropForeignKey
ALTER TABLE "Log" DROP CONSTRAINT "FK_c4036eeca8928b5ce7848c3f1c4";

-- DropForeignKey
ALTER TABLE "product_category_entity" DROP CONSTRAINT "FK_3396a6ae1dbd72159a63978fccf";

-- DropForeignKey
ALTER TABLE "product_entity" DROP CONSTRAINT "FK_641188cadea80dfe98d4c769ebf";

-- DropTable
DROP TABLE "log_type_entity";

-- DropTable
DROP TABLE "product_category_entity";

-- DropTable
DROP TABLE "product_category_type_entity";

-- DropTable
DROP TABLE "product_entity";

-- CreateTable
CREATE TABLE "LogType" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" VARCHAR NOT NULL,

    CONSTRAINT "PK_a7cfdf632ad7bb014e67183da00" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductCategory" (
    "createdDate" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" VARCHAR NOT NULL,
    "order" INTEGER NOT NULL,
    "typeId" UUID,

    CONSTRAINT "PK_e92698845b7004ef04fe046816f" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductCategoryType" (
    "createdDate" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" VARCHAR NOT NULL,

    CONSTRAINT "PK_d2efbbbac2d3f39560f7cf497da" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "createdDate" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" VARCHAR NOT NULL,
    "description" VARCHAR NOT NULL,
    "imgUrl" VARCHAR NOT NULL,
    "order" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "categoryId" UUID,

    CONSTRAINT "PK_6e8f75045ddcd1c389c765c896e" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Log" ADD CONSTRAINT "FK_a47b7680906e07270c2ee190569" FOREIGN KEY ("productCategoryId") REFERENCES "ProductCategory"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Log" ADD CONSTRAINT "FK_c4036eeca8928b5ce7848c3f1c4" FOREIGN KEY ("typeId") REFERENCES "LogType"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ProductCategory" ADD CONSTRAINT "FK_3396a6ae1dbd72159a63978fccf" FOREIGN KEY ("typeId") REFERENCES "ProductCategoryType"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "FK_641188cadea80dfe98d4c769ebf" FOREIGN KEY ("categoryId") REFERENCES "ProductCategory"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
