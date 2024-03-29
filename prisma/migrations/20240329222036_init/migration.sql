-- CreateTable
CREATE TABLE "OrgModel" (
    "id" SERIAL NOT NULL,
    "orgName" TEXT NOT NULL,
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
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SubModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "transactions" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "planExpiry" TIMESTAMP(3),
    "planId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OrgModel_orgName_key" ON "OrgModel"("orgName");

-- CreateIndex
CREATE UNIQUE INDEX "OrgModel_contact_key" ON "OrgModel"("contact");

-- CreateIndex
CREATE UNIQUE INDEX "User_userId_key" ON "User"("userId");

-- AddForeignKey
ALTER TABLE "SubModel" ADD CONSTRAINT "SubModel_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "OrgModel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_planId_fkey" FOREIGN KEY ("planId") REFERENCES "SubModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
