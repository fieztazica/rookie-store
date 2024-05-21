import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Gender } from '../prisma/gender.enum';
import { OrderUpdateManyWithoutCustomerNestedInput } from '../order/order-update-many-without-customer-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class CustomerUpdateWithoutFeedbackInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    username?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    phoneNumber?: string;

    @Field(() => String, {nullable:true})
    firstName?: string;

    @Field(() => String, {nullable:true})
    lastName?: string;

    @Field(() => String, {nullable:true})
    displayName?: string;

    @Field(() => Gender, {nullable:true})
    gender?: keyof typeof Gender;

    @Field(() => String, {nullable:true})
    accountId?: string;

    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => OrderUpdateManyWithoutCustomerNestedInput, {nullable:true})
    @Type(() => OrderUpdateManyWithoutCustomerNestedInput)
    orders?: OrderUpdateManyWithoutCustomerNestedInput;
}
