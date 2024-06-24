/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Tax as PrismaTax } from "@prisma/client";

export class TaxServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.TaxCountArgs, "select">): Promise<number> {
    return this.prisma.tax.count(args);
  }

  async taxes(args: Prisma.TaxFindManyArgs): Promise<PrismaTax[]> {
    return this.prisma.tax.findMany(args);
  }
  async tax(args: Prisma.TaxFindUniqueArgs): Promise<PrismaTax | null> {
    return this.prisma.tax.findUnique(args);
  }
  async createTax(args: Prisma.TaxCreateArgs): Promise<PrismaTax> {
    return this.prisma.tax.create(args);
  }
  async updateTax(args: Prisma.TaxUpdateArgs): Promise<PrismaTax> {
    return this.prisma.tax.update(args);
  }
  async deleteTax(args: Prisma.TaxDeleteArgs): Promise<PrismaTax> {
    return this.prisma.tax.delete(args);
  }
}