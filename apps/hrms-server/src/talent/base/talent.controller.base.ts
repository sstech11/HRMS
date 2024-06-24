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
import { TalentService } from "../talent.service";
import { TalentCreateInput } from "./TalentCreateInput";
import { Talent } from "./Talent";
import { TalentFindManyArgs } from "./TalentFindManyArgs";
import { TalentWhereUniqueInput } from "./TalentWhereUniqueInput";
import { TalentUpdateInput } from "./TalentUpdateInput";

export class TalentControllerBase {
  constructor(protected readonly service: TalentService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Talent })
  async createTalent(@common.Body() data: TalentCreateInput): Promise<Talent> {
    return await this.service.createTalent({
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

        goal: true,
        id: true,
        position: true,
        potential: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Talent] })
  @ApiNestedQuery(TalentFindManyArgs)
  async talents(@common.Req() request: Request): Promise<Talent[]> {
    const args = plainToClass(TalentFindManyArgs, request.query);
    return this.service.talents({
      ...args,
      select: {
        createdAt: true,

        employee: {
          select: {
            id: true,
          },
        },

        goal: true,
        id: true,
        position: true,
        potential: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Talent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async talent(
    @common.Param() params: TalentWhereUniqueInput
  ): Promise<Talent | null> {
    const result = await this.service.talent({
      where: params,
      select: {
        createdAt: true,

        employee: {
          select: {
            id: true,
          },
        },

        goal: true,
        id: true,
        position: true,
        potential: true,
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

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Talent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateTalent(
    @common.Param() params: TalentWhereUniqueInput,
    @common.Body() data: TalentUpdateInput
  ): Promise<Talent | null> {
    try {
      return await this.service.updateTalent({
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

          goal: true,
          id: true,
          position: true,
          potential: true,
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
  @swagger.ApiOkResponse({ type: Talent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteTalent(
    @common.Param() params: TalentWhereUniqueInput
  ): Promise<Talent | null> {
    try {
      return await this.service.deleteTalent({
        where: params,
        select: {
          createdAt: true,

          employee: {
            select: {
              id: true,
            },
          },

          goal: true,
          id: true,
          position: true,
          potential: true,
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
