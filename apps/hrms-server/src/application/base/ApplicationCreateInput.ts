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
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
  IsEnum,
} from "class-validator";
import { JobWhereUniqueInput } from "../../job/base/JobWhereUniqueInput";
import { Type } from "class-transformer";
import { EnumApplicationStatus } from "./EnumApplicationStatus";

@InputType()
class ApplicationCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  applicantName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: () => JobWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => JobWhereUniqueInput)
  @IsOptional()
  @Field(() => JobWhereUniqueInput, {
    nullable: true,
  })
  job?: JobWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumApplicationStatus,
  })
  @IsEnum(EnumApplicationStatus)
  @IsOptional()
  @Field(() => EnumApplicationStatus, {
    nullable: true,
  })
  status?: "Option1" | null;
}

export { ApplicationCreateInput as ApplicationCreateInput };
