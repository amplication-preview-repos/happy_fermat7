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
import { BotUserWhereInput } from "./BotUserWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BotUserOrderByInput } from "./BotUserOrderByInput";

@ArgsType()
class BotUserFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BotUserWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BotUserWhereInput, { nullable: true })
  @Type(() => BotUserWhereInput)
  where?: BotUserWhereInput;

  @ApiProperty({
    required: false,
    type: [BotUserOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BotUserOrderByInput], { nullable: true })
  @Type(() => BotUserOrderByInput)
  orderBy?: Array<BotUserOrderByInput>;

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

export { BotUserFindManyArgs as BotUserFindManyArgs };
