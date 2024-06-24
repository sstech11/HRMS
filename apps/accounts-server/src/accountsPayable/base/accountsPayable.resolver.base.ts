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
import { AccountsPayable } from "./AccountsPayable";
import { AccountsPayableCountArgs } from "./AccountsPayableCountArgs";
import { AccountsPayableFindManyArgs } from "./AccountsPayableFindManyArgs";
import { AccountsPayableFindUniqueArgs } from "./AccountsPayableFindUniqueArgs";
import { CreateAccountsPayableArgs } from "./CreateAccountsPayableArgs";
import { UpdateAccountsPayableArgs } from "./UpdateAccountsPayableArgs";
import { DeleteAccountsPayableArgs } from "./DeleteAccountsPayableArgs";
import { AccountsPayableService } from "../accountsPayable.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AccountsPayable)
export class AccountsPayableResolverBase {
  constructor(
    protected readonly service: AccountsPayableService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "AccountsPayable",
    action: "read",
    possession: "any",
  })
  async _accountsPayablesMeta(
    @graphql.Args() args: AccountsPayableCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [AccountsPayable])
  @nestAccessControl.UseRoles({
    resource: "AccountsPayable",
    action: "read",
    possession: "any",
  })
  async accountsPayables(
    @graphql.Args() args: AccountsPayableFindManyArgs
  ): Promise<AccountsPayable[]> {
    return this.service.accountsPayables(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => AccountsPayable, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "AccountsPayable",
    action: "read",
    possession: "own",
  })
  async accountsPayable(
    @graphql.Args() args: AccountsPayableFindUniqueArgs
  ): Promise<AccountsPayable | null> {
    const result = await this.service.accountsPayable(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => AccountsPayable)
  @nestAccessControl.UseRoles({
    resource: "AccountsPayable",
    action: "create",
    possession: "any",
  })
  async createAccountsPayable(
    @graphql.Args() args: CreateAccountsPayableArgs
  ): Promise<AccountsPayable> {
    return await this.service.createAccountsPayable({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => AccountsPayable)
  @nestAccessControl.UseRoles({
    resource: "AccountsPayable",
    action: "update",
    possession: "any",
  })
  async updateAccountsPayable(
    @graphql.Args() args: UpdateAccountsPayableArgs
  ): Promise<AccountsPayable | null> {
    try {
      return await this.service.updateAccountsPayable({
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

  @graphql.Mutation(() => AccountsPayable)
  @nestAccessControl.UseRoles({
    resource: "AccountsPayable",
    action: "delete",
    possession: "any",
  })
  async deleteAccountsPayable(
    @graphql.Args() args: DeleteAccountsPayableArgs
  ): Promise<AccountsPayable | null> {
    try {
      return await this.service.deleteAccountsPayable(args);
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
