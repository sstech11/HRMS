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
import { FinancialReportWhereInput } from "./FinancialReportWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class FinancialReportCountArgs {
  @ApiProperty({
    required: false,
    type: () => FinancialReportWhereInput,
  })
  @Field(() => FinancialReportWhereInput, { nullable: true })
  @Type(() => FinancialReportWhereInput)
  where?: FinancialReportWhereInput;
}

export { FinancialReportCountArgs as FinancialReportCountArgs };