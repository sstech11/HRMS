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
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { FinancialReport } from "./FinancialReport";
import { FinancialReportCountArgs } from "./FinancialReportCountArgs";
import { FinancialReportFindManyArgs } from "./FinancialReportFindManyArgs";
import { FinancialReportFindUniqueArgs } from "./FinancialReportFindUniqueArgs";
import { CreateFinancialReportArgs } from "./CreateFinancialReportArgs";
import { UpdateFinancialReportArgs } from "./UpdateFinancialReportArgs";
import { DeleteFinancialReportArgs } from "./DeleteFinancialReportArgs";
import { FinancialReportService } from "../financialReport.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FinancialReport)
export class FinancialReportResolverBase {
  constructor(
    protected readonly service: FinancialReportService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "FinancialReport",
    action: "read",
    possession: "any",
  })
  async _financialReportsMeta(
    @graphql.Args() args: FinancialReportCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [FinancialReport])
  @nestAccessControl.UseRoles({
    resource: "FinancialReport",
    action: "read",
    possession: "any",
  })
  async financialReports(
    @graphql.Args() args: FinancialReportFindManyArgs
  ): Promise<FinancialReport[]> {
    return this.service.financialReports(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => FinancialReport, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "FinancialReport",
    action: "read",
    possession: "own",
  })
  async financialReport(
    @graphql.Args() args: FinancialReportFindUniqueArgs
  ): Promise<FinancialReport | null> {
    const result = await this.service.financialReport(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => FinancialReport)
  @nestAccessControl.UseRoles({
    resource: "FinancialReport",
    action: "create",
    possession: "any",
  })
  async createFinancialReport(
    @graphql.Args() args: CreateFinancialReportArgs
  ): Promise<FinancialReport> {
    return await this.service.createFinancialReport({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => FinancialReport)
  @nestAccessControl.UseRoles({
    resource: "FinancialReport",
    action: "update",
    possession: "any",
  })
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
  @nestAccessControl.UseRoles({
    resource: "FinancialReport",
    action: "delete",
    possession: "any",
  })
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
