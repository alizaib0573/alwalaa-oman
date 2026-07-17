/*
  Warnings:

  - You are about to drop the column `email` on the `agents` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "public"."agents_email_key";

-- AlterTable
ALTER TABLE "public"."agents" DROP COLUMN "email";
