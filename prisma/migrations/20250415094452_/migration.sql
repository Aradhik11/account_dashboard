/*
  Warnings:

  - You are about to alter the column `firstName` on the `AccountHolder` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `lastName` on the `AccountHolder` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `occupation` on the `AccountHolder` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - A unique constraint covering the columns `[email]` on the table `AccountHolder` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `createdBy` to the `AccountHolder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AccountHolder" ADD COLUMN     "createdBy" VARCHAR(100) NOT NULL,
ADD COLUMN     "email" VARCHAR(255),
ADD COLUMN     "status" VARCHAR(20) NOT NULL DEFAULT 'active',
ALTER COLUMN "firstName" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "lastName" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "occupation" SET DATA TYPE VARCHAR(100);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user',
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "AccountHolder_email_key" ON "AccountHolder"("email");

-- CreateIndex
CREATE INDEX "AccountHolder_email_idx" ON "AccountHolder"("email");

-- CreateIndex
CREATE INDEX "AccountHolder_status_idx" ON "AccountHolder"("status");
