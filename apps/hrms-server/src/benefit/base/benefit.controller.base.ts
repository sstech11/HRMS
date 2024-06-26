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
import { BenefitService } from "../benefit.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { BenefitCreateInput } from "./BenefitCreateInput";
import { Benefit } from "./Benefit";
import { BenefitFindManyArgs } from "./BenefitFindManyArgs";
import { BenefitWhereUniqueInput } from "./BenefitWhereUniqueInput";
import { BenefitUpdateInput } from "./BenefitUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class BenefitControllerBase {
  constructor(
    protected readonly service: BenefitService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Benefit })
  @nestAccessControl.UseRoles({
    resource: "Benefit",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: BenefitCreateInput,
  })
  async createBenefit(
    @common.Body() data: BenefitCreateInput
  ): Promise<Benefit> {
    return await this.service.createBenefit({
      data: {
        ...data,

        employee: data.employee
          ? {
              connect: data.employee,
            }
          : undefined,
      },
      select: {
        benefitType: true,
        createdAt: true,

        employee: {
          select: {
            id: true,
          },
        },

        endDate: true,
        id: true,
        startDate: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Benefit] })
  @ApiNestedQuery(BenefitFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Benefit",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async benefits(@common.Req() request: Request): Promise<Benefit[]> {
    const args = plainToClass(BenefitFindManyArgs, request.query);
    return this.service.benefits({
      ...args,
      select: {
        benefitType: true,
        createdAt: true,

        employee: {
          select: {
            id: true,
          },
        },

        endDate: true,
        id: true,
        startDate: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Benefit })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Benefit",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async benefit(
    @common.Param() params: BenefitWhereUniqueInput
  ): Promise<Benefit | null> {
    const result = await this.service.benefit({
      where: params,
      select: {
        benefitType: true,
        createdAt: true,

        employee: {
          select: {
            id: true,
          },
        },

        endDate: true,
        id: true,
        startDate: true,
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
  @swagger.ApiOkResponse({ type: Benefit })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Benefit",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: BenefitUpdateInput,
  })
  async updateBenefit(
    @common.Param() params: BenefitWhereUniqueInput,
    @common.Body() data: BenefitUpdateInput
  ): Promise<Benefit | null> {
    try {
      return await this.service.updateBenefit({
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
          benefitType: true,
          createdAt: true,

          employee: {
            select: {
              id: true,
            },
          },

          endDate: true,
          id: true,
          startDate: true,
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
  @swagger.ApiOkResponse({ type: Benefit })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Benefit",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteBenefit(
    @common.Param() params: BenefitWhereUniqueInput
  ): Promise<Benefit | null> {
    try {
      return await this.service.deleteBenefit({
        where: params,
        select: {
          benefitType: true,
          createdAt: true,

          employee: {
            select: {
              id: true,
            },
          },

          endDate: true,
          id: true,
          startDate: true,
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
