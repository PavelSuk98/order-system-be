-- CreateTable
CREATE TABLE "TableState" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" TEXT NOT NULL,
    "deleted" TIMESTAMP(3),

    CONSTRAINT "TableState_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TableArea" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" TEXT NOT NULL,
    "deleted" TIMESTAMP(3),

    CONSTRAINT "TableArea_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Table" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "qrKey" TEXT NOT NULL,
    "tableStateId" UUID NOT NULL,
    "tableAreaId" UUID NOT NULL,

    CONSTRAINT "Table_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Table" ADD CONSTRAINT "Table_tableStateId_fkey" FOREIGN KEY ("tableStateId") REFERENCES "TableState"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Table" ADD CONSTRAINT "Table_tableAreaId_fkey" FOREIGN KEY ("tableAreaId") REFERENCES "TableArea"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
