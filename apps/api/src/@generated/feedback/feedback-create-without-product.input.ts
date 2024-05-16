import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CustomerCreateNestedOneWithoutFeedbackInput } from '../customer/customer-create-nested-one-without-feedback.input';
import { Type } from 'class-transformer';

@InputType()
export class FeedbackCreateWithoutProductInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    message!: string;

    @Field(() => Int, {nullable:false})
    rating!: number;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CustomerCreateNestedOneWithoutFeedbackInput, {nullable:false})
    @Type(() => CustomerCreateNestedOneWithoutFeedbackInput)
    customer!: CustomerCreateNestedOneWithoutFeedbackInput;
}