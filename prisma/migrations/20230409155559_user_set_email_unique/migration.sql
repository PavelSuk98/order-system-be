CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CreateTable
CREATE TABLE "Role" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" VARCHAR NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "PK_9309532197a7397548e341e5536" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "createdDate" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "userName" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,
    "password" VARCHAR NOT NULL,
    "roleId" UUID,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "log_entity" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "typeId" UUID,
    "productCategoryId" UUID,
    "createdById" UUID,
    "createdDate" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "PK_db6e55781ba6e3d4fd6485cca24" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "log_type_entity" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" VARCHAR NOT NULL,

    CONSTRAINT "PK_a7cfdf632ad7bb014e67183da00" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "migrations" (
    "id" SERIAL NOT NULL,
    "timestamp" BIGINT NOT NULL,
    "name" VARCHAR NOT NULL,

    CONSTRAINT "PK_8c82d7f526340ab734260ea46be" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_category_entity" (
    "createdDate" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" VARCHAR NOT NULL,
    "order" INTEGER NOT NULL,
    "typeId" UUID,

    CONSTRAINT "PK_e92698845b7004ef04fe046816f" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_category_type_entity" (
    "createdDate" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" VARCHAR NOT NULL,

    CONSTRAINT "PK_d2efbbbac2d3f39560f7cf497da" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_entity" (
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

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "FK_0b8c60cc29663fa5b9fb108edd7" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "log_entity" ADD CONSTRAINT "FK_88299ef9a14cb86c9befb535d76" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "log_entity" ADD CONSTRAINT "FK_a47b7680906e07270c2ee190569" FOREIGN KEY ("productCategoryId") REFERENCES "product_category_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "log_entity" ADD CONSTRAINT "FK_c4036eeca8928b5ce7848c3f1c4" FOREIGN KEY ("typeId") REFERENCES "log_type_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product_category_entity" ADD CONSTRAINT "FK_3396a6ae1dbd72159a63978fccf" FOREIGN KEY ("typeId") REFERENCES "product_category_type_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product_entity" ADD CONSTRAINT "FK_641188cadea80dfe98d4c769ebf" FOREIGN KEY ("categoryId") REFERENCES "product_category_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
