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
import { FixedAsset } from "./FixedAsset";
import { FixedAssetCountArgs } from "./FixedAssetCountArgs";
import { FixedAssetFindManyArgs } from "./FixedAssetFindManyArgs";
import { FixedAssetFindUniqueArgs } from "./FixedAssetFindUniqueArgs";
import { CreateFixedAssetArgs } from "./CreateFixedAssetArgs";
import { UpdateFixedAssetArgs } from "./UpdateFixedAssetArgs";
import { DeleteFixedAssetArgs } from "./DeleteFixedAssetArgs";
import { FixedAssetService } from "../fixedAsset.service";
@graphql.Resolver(() => FixedAsset)
export class FixedAssetResolverBase {
  constructor(protected readonly service: FixedAssetService) {}

  async _fixedAssetsMeta(
    @graphql.Args() args: FixedAssetCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [FixedAsset])
  async fixedAssets(
    @graphql.Args() args: FixedAssetFindManyArgs
  ): Promise<FixedAsset[]> {
    return this.service.fixedAssets(args);
  }

  @graphql.Query(() => FixedAsset, { nullable: true })
  async fixedAsset(
    @graphql.Args() args: FixedAssetFindUniqueArgs
  ): Promise<FixedAsset | null> {
    const result = await this.service.fixedAsset(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => FixedAsset)
  async createFixedAsset(
    @graphql.Args() args: CreateFixedAssetArgs
  ): Promise<FixedAsset> {
    return await this.service.createFixedAsset({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => FixedAsset)
  async updateFixedAsset(
    @graphql.Args() args: UpdateFixedAssetArgs
  ): Promise<FixedAsset | null> {
    try {
      return await this.service.updateFixedAsset({
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

  @graphql.Mutation(() => FixedAsset)
  async deleteFixedAsset(
    @graphql.Args() args: DeleteFixedAssetArgs
  ): Promise<FixedAsset | null> {
    try {
      return await this.service.deleteFixedAsset(args);
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
