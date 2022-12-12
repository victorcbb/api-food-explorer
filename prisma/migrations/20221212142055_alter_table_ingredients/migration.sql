/*
  Warnings:

  - Added the required column `image` to the `ingredients` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ingredients" ADD COLUMN     "image" TEXT NOT NULL;
