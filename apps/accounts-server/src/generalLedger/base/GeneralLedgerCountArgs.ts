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
import { GeneralLedgerWhereInput } from "./GeneralLedgerWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class GeneralLedgerCountArgs {
  @ApiProperty({
    required: false,
    type: () => GeneralLedgerWhereInput,
  })
  @Field(() => GeneralLedgerWhereInput, { nullable: true })
  @Type(() => GeneralLedgerWhereInput)
  where?: GeneralLedgerWhereInput;
}

export { GeneralLedgerCountArgs as GeneralLedgerCountArgs };
