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
import { FinancialReportWhereUniqueInput } from "./FinancialReportWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { FinancialReportUpdateInput } from "./FinancialReportUpdateInput";

@ArgsType()
class UpdateFinancialReportArgs {
  @ApiProperty({
    required: true,
    type: () => FinancialReportWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FinancialReportWhereUniqueInput)
  @Field(() => FinancialReportWhereUniqueInput, { nullable: false })
  where!: FinancialReportWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => FinancialReportUpdateInput,
  })
  @ValidateNested()
  @Type(() => FinancialReportUpdateInput)
  @Field(() => FinancialReportUpdateInput, { nullable: false })
  data!: FinancialReportUpdateInput;
}

export { UpdateFinancialReportArgs as UpdateFinancialReportArgs };
