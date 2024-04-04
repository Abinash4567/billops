-- CreateTable
CREATE TABLE "OrgModel" (
    "id" SERIAL NOT NULL,
    "orgName" TEXT NOT NULL,
    "APIKey" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "address" TEXT,
    "workEmail" TEXT NOT NULL,
    "contact" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OrgModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubModel" (
    "id" SERIAL NOT NULL,
    "organizationId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "intendedAudience" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "features" JSONB NOT NULL,
    "couponCodes" JSONB NOT NULL,
    "validity" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SubModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserModel" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "planExpiry" TIMESTAMP(3),
    "planId" INTEGER NOT NULL,

    CONSTRAINT "UserModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TranscationModel" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "subId" INTEGER NOT NULL,
    "receipt" JSONB,
    "amount" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL,
    "orderId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TranscationModel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OrgModel_orgName_key" ON "OrgModel"("orgName");

-- CreateIndex
CREATE UNIQUE INDEX "OrgModel_APIKey_key" ON "OrgModel"("APIKey");

-- CreateIndex
CREATE UNIQUE INDEX "OrgModel_contact_key" ON "OrgModel"("contact");

-- CreateIndex
CREATE INDEX "OrgModel_orgName_idx" ON "OrgModel"("orgName");

-- CreateIndex
CREATE INDEX "SubModel_organizationId_idx" ON "SubModel"("organizationId");

-- CreateIndex
CREATE INDEX "UserModel_name_idx" ON "UserModel"("name");

-- CreateIndex
CREATE INDEX "TranscationModel_userId_subId_idx" ON "TranscationModel"("userId", "subId");

-- AddForeignKey
ALTER TABLE "SubModel" ADD CONSTRAINT "SubModel_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "OrgModel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserModel" ADD CONSTRAINT "UserModel_planId_fkey" FOREIGN KEY ("planId") REFERENCES "SubModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TranscationModel" ADD CONSTRAINT "TranscationModel_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TranscationModel" ADD CONSTRAINT "TranscationModel_subId_fkey" FOREIGN KEY ("subId") REFERENCES "SubModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
