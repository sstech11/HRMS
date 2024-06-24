/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { FinancialReport } from "./FinancialReport";
import { FinancialReportCountArgs } from "./FinancialReportCountArgs";
import { FinancialReportFindManyArgs } from "./FinancialReportFindManyArgs";
import { FinancialReportFindUniqueArgs } from "./FinancialReportFindUniqueArgs";
import { CreateFinancialReportArgs } from "./CreateFinancialReportArgs";
import { UpdateFinancialReportArgs } from "./UpdateFinancialReportArgs";
import { DeleteFinancialReportArgs } from "./DeleteFinancialReportArgs";
import { FinancialReportService } from "../financialReport.service";
@graphql.Resolver(() => FinancialReport)
export class FinancialReportResolverBase {
  constructor(protected readonly service: FinancialReportService) {}

  async _financialReportsMeta(
    @graphql.Args() args: FinancialReportCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [FinancialReport])
  async financialReports(
    @graphql.Args() args: FinancialReportFindManyArgs
  ): Promise<FinancialReport[]> {
    return this.service.financialReports(args);
  }

  @graphql.Query(() => FinancialReport, { nullable: true })
  async financialReport(
    @graphql.Args() args: FinancialReportFindUniqueArgs
  ): Promise<FinancialReport | null> {
    const result = await this.service.financialReport(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => FinancialReport)
  async createFinancialReport(
    @graphql.Args() args: CreateFinancialReportArgs
  ): Promise<FinancialReport> {
    return await this.service.createFinancialReport({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => FinancialReport)
  async updateFinancialReport(
    @graphql.Args() args: UpdateFinancialReportArgs
  ): Promise<FinancialReport | null> {
    try {
      return await this.service.updateFinancialReport({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => FinancialReport)
  async deleteFinancialReport(
    @graphql.Args() args: DeleteFinancialReportArgs
  ): Promise<FinancialReport | null> {
    try {
      return await this.service.deleteFinancialReport(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}