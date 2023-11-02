-- CreateTable
CREATE TABLE "cropTypes" (
    "id" SERIAL NOT NULL,
    "crop_type" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cropTypes_pkey" PRIMARY KEY ("id")
);
