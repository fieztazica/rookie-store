import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneProductArgs {
  @Field(() => ProductWhereUniqueInput, { nullable: false })
  @Type(() => ProductWhereUniqueInput)
  where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>;
}
