/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FinancialReportWhereInput } from "./FinancialReportWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FinancialReportListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FinancialReportWhereInput,
  })
  @ValidateNested()
  @Type(() => FinancialReportWhereInput)
  @IsOptional()
  @Field(() => FinancialReportWhereInput, {
    nullable: true,
  })
  every?: FinancialReportWhereInput;

  @ApiProperty({
    required: false,
    type: () => FinancialReportWhereInput,
  })
  @ValidateNested()
  @Type(() => FinancialReportWhereInput)
  @IsOptional()
  @Field(() => FinancialReportWhereInput, {
    nullable: true,
  })
  some?: FinancialReportWhereInput;

  @ApiProperty({
    required: false,
    type: () => FinancialReportWhereInput,
  })
  @ValidateNested()
  @Type(() => FinancialReportWhereInput)
  @IsOptional()
  @Field(() => FinancialReportWhereInput, {
    nullable: true,
  })
  none?: FinancialReportWhereInput;
}
export { FinancialReportListRelationFilter as FinancialReportListRelationFilter };
