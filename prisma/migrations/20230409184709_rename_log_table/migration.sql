/*
  Warnings:

  - You are about to drop the `log_entity` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "log_entity" DROP CONSTRAINT "FK_88299ef9a14cb86c9befb535d76";

-- DropForeignKey
ALTER TABLE "log_entity" DROP CONSTRAINT "FK_a47b7680906e07270c2ee190569";

-- DropForeignKey
ALTER TABLE "log_entity" DROP CONSTRAINT "FK_c4036eeca8928b5ce7848c3f1c4";

-- DropTable
DROP TABLE "log_entity";

-- CreateTable
CREATE TABLE "Log" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "typeId" UUID,
    "productCategoryId" UUID,
    "createdById" UUID,
    "createdDate" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "PK_db6e55781ba6e3d4fd6485cca24" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Log" ADD CONSTRAINT "FK_88299ef9a14cb86c9befb535d76" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Log" ADD CONSTRAINT "FK_a47b7680906e07270c2ee190569" FOREIGN KEY ("productCategoryId") REFERENCES "product_category_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Log" ADD CONSTRAINT "FK_c4036eeca8928b5ce7848c3f1c4" FOREIGN KEY ("typeId") REFERENCES "log_type_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
