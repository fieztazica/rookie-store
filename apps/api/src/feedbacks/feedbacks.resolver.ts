import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FeedbacksService } from './feedbacks.service';
import { Feedback, PaginatedFeedback } from './entities/feedback.entity';
import { CreateFeedbackInput } from './dto/create-feedback.input';
import { UpdateFeedbackInput } from './dto/update-feedback.input';
import { PaginationArgs } from 'src/common/graphql/pagination.args';
import { FindManyFeedbackArgs } from 'src/__generated__/feedback/find-many-feedback.args';

@Resolver(() => Feedback)
export class FeedbacksResolver {
  constructor(private readonly feedbacksService: FeedbacksService) {}

  @Mutation(() => Feedback)
  createFeedback(
    @Args('createFeedbackInput') createFeedbackInput: CreateFeedbackInput,
  ): Promise<Feedback> {
    return this.feedbacksService.create(createFeedbackInput);
  }

  @Query(() => [Feedback], { name: 'feedbacks' })
  async findAll(@Args() options: FindManyFeedbackArgs) {
    return this.feedbacksService.findAll(options);
  }

  @Query(() => PaginatedFeedback, { name: 'paginatedFeedbacks' })
  async paginatedFindAll(@Args() options: PaginationArgs) {
    return this.feedbacksService.paginatedFindAll(options);
  }

  @Query(() => Feedback, { name: 'feedback' })
  findOne(@Args('id', { type: () => String }) id: string): Promise<Feedback> {
    return this.feedbacksService.findOne(id);
  }

  @Mutation(() => Feedback)
  updateFeedback(
    @Args('updateFeedbackInput') updateFeedbackInput: UpdateFeedbackInput,
  ): Promise<Feedback> {
    return this.feedbacksService.update(
      updateFeedbackInput.id,
      updateFeedbackInput,
    );
  }

  @Mutation(() => Feedback)
  removeFeedback(
    @Args('id', { type: () => String }) id: string,
  ): Promise<Feedback> {
    return this.feedbacksService.remove(id);
  }
}
