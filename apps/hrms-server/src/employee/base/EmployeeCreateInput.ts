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
import { AttendanceCreateNestedManyWithoutEmployeesInput } from "./AttendanceCreateNestedManyWithoutEmployeesInput";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { BenefitCreateNestedManyWithoutEmployeesInput } from "./BenefitCreateNestedManyWithoutEmployeesInput";
import { LeaveCreateNestedManyWithoutEmployeesInput } from "./LeaveCreateNestedManyWithoutEmployeesInput";
import { PayrollCreateNestedManyWithoutEmployeesInput } from "./PayrollCreateNestedManyWithoutEmployeesInput";
import { PerformanceCreateNestedManyWithoutEmployeesInput } from "./PerformanceCreateNestedManyWithoutEmployeesInput";
import { SelfServiceCreateNestedManyWithoutEmployeesInput } from "./SelfServiceCreateNestedManyWithoutEmployeesInput";
import { TalentCreateNestedManyWithoutEmployeesInput } from "./TalentCreateNestedManyWithoutEmployeesInput";
import { WorkforceCreateNestedManyWithoutEmployeesInput } from "./WorkforceCreateNestedManyWithoutEmployeesInput";

@InputType()
class EmployeeCreateInput {
  @ApiProperty({
    required: false,
    type: () => AttendanceCreateNestedManyWithoutEmployeesInput,
  })
  @ValidateNested()
  @Type(() => AttendanceCreateNestedManyWithoutEmployeesInput)
  @IsOptional()
  @Field(() => AttendanceCreateNestedManyWithoutEmployeesInput, {
    nullable: true,
  })
  attendances?: AttendanceCreateNestedManyWithoutEmployeesInput;

  @ApiProperty({
    required: false,
    type: () => BenefitCreateNestedManyWithoutEmployeesInput,
  })
  @ValidateNested()
  @Type(() => BenefitCreateNestedManyWithoutEmployeesInput)
  @IsOptional()
  @Field(() => BenefitCreateNestedManyWithoutEmployeesInput, {
    nullable: true,
  })
  benefits?: BenefitCreateNestedManyWithoutEmployeesInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dateOfBirth?: Date | null;

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
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  hireDate?: Date | null;

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
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: () => LeaveCreateNestedManyWithoutEmployeesInput,
  })
  @ValidateNested()
  @Type(() => LeaveCreateNestedManyWithoutEmployeesInput)
  @IsOptional()
  @Field(() => LeaveCreateNestedManyWithoutEmployeesInput, {
    nullable: true,
  })
  leaves?: LeaveCreateNestedManyWithoutEmployeesInput;

  @ApiProperty({
    required: false,
    type: () => PayrollCreateNestedManyWithoutEmployeesInput,
  })
  @ValidateNested()
  @Type(() => PayrollCreateNestedManyWithoutEmployeesInput)
  @IsOptional()
  @Field(() => PayrollCreateNestedManyWithoutEmployeesInput, {
    nullable: true,
  })
  payrolls?: PayrollCreateNestedManyWithoutEmployeesInput;

  @ApiProperty({
    required: false,
    type: () => PerformanceCreateNestedManyWithoutEmployeesInput,
  })
  @ValidateNested()
  @Type(() => PerformanceCreateNestedManyWithoutEmployeesInput)
  @IsOptional()
  @Field(() => PerformanceCreateNestedManyWithoutEmployeesInput, {
    nullable: true,
  })
  performances?: PerformanceCreateNestedManyWithoutEmployeesInput;

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
  phone?: string | null;

  @ApiProperty({
    required: false,
    type: () => SelfServiceCreateNestedManyWithoutEmployeesInput,
  })
  @ValidateNested()
  @Type(() => SelfServiceCreateNestedManyWithoutEmployeesInput)
  @IsOptional()
  @Field(() => SelfServiceCreateNestedManyWithoutEmployeesInput, {
    nullable: true,
  })
  selfServices?: SelfServiceCreateNestedManyWithoutEmployeesInput;

  @ApiProperty({
    required: false,
    type: () => TalentCreateNestedManyWithoutEmployeesInput,
  })
  @ValidateNested()
  @Type(() => TalentCreateNestedManyWithoutEmployeesInput)
  @IsOptional()
  @Field(() => TalentCreateNestedManyWithoutEmployeesInput, {
    nullable: true,
  })
  talents?: TalentCreateNestedManyWithoutEmployeesInput;

  @ApiProperty({
    required: false,
    type: () => WorkforceCreateNestedManyWithoutEmployeesInput,
  })
  @ValidateNested()
  @Type(() => WorkforceCreateNestedManyWithoutEmployeesInput)
  @IsOptional()
  @Field(() => WorkforceCreateNestedManyWithoutEmployeesInput, {
    nullable: true,
  })
  workforces?: WorkforceCreateNestedManyWithoutEmployeesInput;
}

export { EmployeeCreateInput as EmployeeCreateInput };
