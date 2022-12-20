/*
  Warnings:

  - Added the required column `category` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('MAIN', 'DESSERT', 'DRINK');

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "category" "Category" NOT NULL;
