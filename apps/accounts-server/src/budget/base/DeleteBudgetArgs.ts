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
import { BudgetWhereUniqueInput } from "./BudgetWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteBudgetArgs {
  @ApiProperty({
    required: true,
    type: () => BudgetWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BudgetWhereUniqueInput)
  @Field(() => BudgetWhereUniqueInput, { nullable: false })
  where!: BudgetWhereUniqueInput;
}

export { DeleteBudgetArgs as DeleteBudgetArgs };
