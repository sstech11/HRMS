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
import { SelfServiceService } from "../selfService.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SelfServiceCreateInput } from "./SelfServiceCreateInput";
import { SelfService } from "./SelfService";
import { SelfServiceFindManyArgs } from "./SelfServiceFindManyArgs";
import { SelfServiceWhereUniqueInput } from "./SelfServiceWhereUniqueInput";
import { SelfServiceUpdateInput } from "./SelfServiceUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SelfServiceControllerBase {
  constructor(
    protected readonly service: SelfServiceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SelfService })
  @nestAccessControl.UseRoles({
    resource: "SelfService",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: SelfServiceCreateInput,
  })
  async createSelfService(
    @common.Body() data: SelfServiceCreateInput
  ): Promise<SelfService> {
    return await this.service.createSelfService({
      data: {
        ...data,

        employee: data.employee
          ? {
              connect: data.employee,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        employee: {
          select: {
            id: true,
          },
        },

        functionality: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [SelfService] })
  @ApiNestedQuery(SelfServiceFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SelfService",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async selfServices(@common.Req() request: Request): Promise<SelfService[]> {
    const args = plainToClass(SelfServiceFindManyArgs, request.query);
    return this.service.selfServices({
      ...args,
      select: {
        createdAt: true,

        employee: {
          select: {
            id: true,
          },
        },

        functionality: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SelfService })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SelfService",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async selfService(
    @common.Param() params: SelfServiceWhereUniqueInput
  ): Promise<SelfService | null> {
    const result = await this.service.selfService({
      where: params,
      select: {
        createdAt: true,

        employee: {
          select: {
            id: true,
          },
        },

        functionality: true,
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
  @swagger.ApiOkResponse({ type: SelfService })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SelfService",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: SelfServiceUpdateInput,
  })
  async updateSelfService(
    @common.Param() params: SelfServiceWhereUniqueInput,
    @common.Body() data: SelfServiceUpdateInput
  ): Promise<SelfService | null> {
    try {
      return await this.service.updateSelfService({
        where: params,
        data: {
          ...data,

          employee: data.employee
            ? {
                connect: data.employee,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          employee: {
            select: {
              id: true,
            },
          },

          functionality: true,
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
  @swagger.ApiOkResponse({ type: SelfService })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SelfService",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSelfService(
    @common.Param() params: SelfServiceWhereUniqueInput
  ): Promise<SelfService | null> {
    try {
      return await this.service.deleteSelfService({
        where: params,
        select: {
          createdAt: true,

          employee: {
            select: {
              id: true,
            },
          },

          functionality: true,
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
