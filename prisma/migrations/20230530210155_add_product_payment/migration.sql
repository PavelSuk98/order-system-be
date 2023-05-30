-- CreateTable
CREATE TABLE "OrderTableProductPayment" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "orderTableProductId" UUID NOT NULL,
    "createdDate" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "totalPaid" DOUBLE PRECISION NOT NULL,
    "customerId" UUID,

    CONSTRAINT "OrderTableProductPayment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OrderTableProductPayment" ADD CONSTRAINT "OrderTableProductPayment_orderTableProductId_fkey" FOREIGN KEY ("orderTableProductId") REFERENCES "OrderTableProduct"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
