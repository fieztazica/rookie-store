import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { OrderItemUncheckedUpdateManyWithoutProductNestedInput } from '../order-item/order-item-unchecked-update-many-without-product-nested.input';
import { FeedbackUncheckedUpdateManyWithoutProductNestedInput } from '../feedback/feedback-unchecked-update-many-without-product-nested.input';
import { ImageUncheckedUpdateManyWithoutProductNestedInput } from '../image/image-unchecked-update-many-without-product-nested.input';

@InputType()
export class ProductUncheckedUpdateWithoutCategoriesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    displayName?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    price?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    salePrice?: Decimal;

    @Field(() => String, {nullable:true})
    accountId?: string;

    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => OrderItemUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    @Type(() => OrderItemUncheckedUpdateManyWithoutProductNestedInput)
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput;

    @Field(() => FeedbackUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    @Type(() => FeedbackUncheckedUpdateManyWithoutProductNestedInput)
    feedbacks?: FeedbackUncheckedUpdateManyWithoutProductNestedInput;

    @Field(() => ImageUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    @Type(() => ImageUncheckedUpdateManyWithoutProductNestedInput)
    images?: ImageUncheckedUpdateManyWithoutProductNestedInput;
}
