import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ProductToCategoryUncheckedCreateInput {

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => String, {nullable:false})
    categoryId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}