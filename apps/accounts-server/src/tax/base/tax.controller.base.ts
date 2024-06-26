/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { TaxService } from "../tax.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TaxCreateInput } from "./TaxCreateInput";
import { Tax } from "./Tax";
import { TaxFindManyArgs } from "./TaxFindManyArgs";
import { TaxWhereUniqueInput } from "./TaxWhereUniqueInput";
import { TaxUpdateInput } from "./TaxUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TaxControllerBase {
  constructor(
    protected readonly service: TaxService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Tax })
  @nestAccessControl.UseRoles({
    resource: "Tax",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: TaxCreateInput,
  })
  async createTax(@common.Body() data: TaxCreateInput): Promise<Tax> {
    return await this.service.createTax({
      data: data,
      select: {
        amount: true,
        createdAt: true,
        id: true,
        rate: true,
        taxName: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Tax] })
  @ApiNestedQuery(TaxFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Tax",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async taxes(@common.Req() request: Request): Promise<Tax[]> {
    const args = plainToClass(TaxFindManyArgs, request.query);
    return this.service.taxes({
      ...args,
      select: {
        amount: true,
        createdAt: true,
        id: true,
        rate: true,
        taxName: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Tax })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Tax",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async tax(@common.Param() params: TaxWhereUniqueInput): Promise<Tax | null> {
    const result = await this.service.tax({
      where: params,
      select: {
        amount: true,
        createdAt: true,
        id: true,
        rate: true,
        taxName: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Tax })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Tax",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: TaxUpdateInput,
  })
  async updateTax(
    @common.Param() params: TaxWhereUniqueInput,
    @common.Body() data: TaxUpdateInput
  ): Promise<Tax | null> {
    try {
      return await this.service.updateTax({
        where: params,
        data: data,
        select: {
          amount: true,
          createdAt: true,
          id: true,
          rate: true,
          taxName: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Tax })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Tax",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteTax(
    @common.Param() params: TaxWhereUniqueInput
  ): Promise<Tax | null> {
    try {
      return await this.service.deleteTax({
        where: params,
        select: {
          amount: true,
          createdAt: true,
          id: true,
          rate: true,
          taxName: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
