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
import { GeneralLedgerService } from "../generalLedger.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { GeneralLedgerCreateInput } from "./GeneralLedgerCreateInput";
import { GeneralLedger } from "./GeneralLedger";
import { GeneralLedgerFindManyArgs } from "./GeneralLedgerFindManyArgs";
import { GeneralLedgerWhereUniqueInput } from "./GeneralLedgerWhereUniqueInput";
import { GeneralLedgerUpdateInput } from "./GeneralLedgerUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class GeneralLedgerControllerBase {
  constructor(
    protected readonly service: GeneralLedgerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: GeneralLedger })
  @nestAccessControl.UseRoles({
    resource: "GeneralLedger",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: GeneralLedgerCreateInput,
  })
  async createGeneralLedger(
    @common.Body() data: GeneralLedgerCreateInput
  ): Promise<GeneralLedger> {
    return await this.service.createGeneralLedger({
      data: data,
      select: {
        accountName: true,
        balance: true,
        createdAt: true,
        description: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [GeneralLedger] })
  @ApiNestedQuery(GeneralLedgerFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "GeneralLedger",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async generalLedgers(
    @common.Req() request: Request
  ): Promise<GeneralLedger[]> {
    const args = plainToClass(GeneralLedgerFindManyArgs, request.query);
    return this.service.generalLedgers({
      ...args,
      select: {
        accountName: true,
        balance: true,
        createdAt: true,
        description: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: GeneralLedger })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GeneralLedger",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async generalLedger(
    @common.Param() params: GeneralLedgerWhereUniqueInput
  ): Promise<GeneralLedger | null> {
    const result = await this.service.generalLedger({
      where: params,
      select: {
        accountName: true,
        balance: true,
        createdAt: true,
        description: true,
        id: true,
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
  @swagger.ApiOkResponse({ type: GeneralLedger })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GeneralLedger",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: GeneralLedgerUpdateInput,
  })
  async updateGeneralLedger(
    @common.Param() params: GeneralLedgerWhereUniqueInput,
    @common.Body() data: GeneralLedgerUpdateInput
  ): Promise<GeneralLedger | null> {
    try {
      return await this.service.updateGeneralLedger({
        where: params,
        data: data,
        select: {
          accountName: true,
          balance: true,
          createdAt: true,
          description: true,
          id: true,
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
  @swagger.ApiOkResponse({ type: GeneralLedger })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GeneralLedger",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteGeneralLedger(
    @common.Param() params: GeneralLedgerWhereUniqueInput
  ): Promise<GeneralLedger | null> {
    try {
      return await this.service.deleteGeneralLedger({
        where: params,
        select: {
          accountName: true,
          balance: true,
          createdAt: true,
          description: true,
          id: true,
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
