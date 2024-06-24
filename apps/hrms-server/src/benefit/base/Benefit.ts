/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumBenefitBenefitType } from "./EnumBenefitBenefitType";
import {
  IsEnum,
  IsOptional,
  IsDate,
  ValidateNested,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { Employee } from "../../employee/base/Employee";

@ObjectType()
class Benefit {
  @ApiProperty({
    required: false,
    enum: EnumBenefitBenefitType,
  })
  @IsEnum(EnumBenefitBenefitType)
  @IsOptional()
  @Field(() => EnumBenefitBenefitType, {
    nullable: true,
  })
  benefitType?: "Option1" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => Employee,
  })
  @ValidateNested()
  @Type(() => Employee)
  @IsOptional()
  employee?: Employee | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endDate!: Date | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startDate!: Date | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Benefit as Benefit };
