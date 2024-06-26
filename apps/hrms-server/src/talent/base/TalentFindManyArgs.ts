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
import { TalentWhereInput } from "./TalentWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TalentOrderByInput } from "./TalentOrderByInput";

@ArgsType()
class TalentFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TalentWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TalentWhereInput, { nullable: true })
  @Type(() => TalentWhereInput)
  where?: TalentWhereInput;

  @ApiProperty({
    required: false,
    type: [TalentOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TalentOrderByInput], { nullable: true })
  @Type(() => TalentOrderByInput)
  orderBy?: Array<TalentOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TalentFindManyArgs as TalentFindManyArgs };
