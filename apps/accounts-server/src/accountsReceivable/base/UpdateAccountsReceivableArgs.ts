/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AccountsReceivableWhereUniqueInput } from "./AccountsReceivableWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AccountsReceivableUpdateInput } from "./AccountsReceivableUpdateInput";

@ArgsType()
class UpdateAccountsReceivableArgs {
  @ApiProperty({
    required: true,
    type: () => AccountsReceivableWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AccountsReceivableWhereUniqueInput)
  @Field(() => AccountsReceivableWhereUniqueInput, { nullable: false })
  where!: AccountsReceivableWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AccountsReceivableUpdateInput,
  })
  @ValidateNested()
  @Type(() => AccountsReceivableUpdateInput)
  @Field(() => AccountsReceivableUpdateInput, { nullable: false })
  data!: AccountsReceivableUpdateInput;
}

export { UpdateAccountsReceivableArgs as UpdateAccountsReceivableArgs };
