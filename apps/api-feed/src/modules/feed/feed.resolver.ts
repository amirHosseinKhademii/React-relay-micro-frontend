import { UseGuards } from '@nestjs/common';
import {
  Args,
  ID,
  Parent,
  Query,
  ResolveField,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

import { ConnectionArgs, InputArg, RelayMutation } from 'src/utils/relay';
import { AuthGraphGuard, GetUser, User } from 'src/user';
import { UserService } from 'src/user/user.service';
import { FeedService } from './feed.service';
import {
  CreateFeedInput,
  DeleteFeedInput,
  UpdateFeedInput,
} from './types/feed';
import { Feed, FeedConnection } from './types/feed.types';
import {
  AddFeedPayload,
  DeleteFeedPayload,
  FeedResponseEdge,
  UpdateFeedPayload,
} from './types/feed.response';

const pubSub = new PubSub();
@Resolver(() => Feed)
@UseGuards(new AuthGraphGuard())
export class FeedResolver {
  constructor(
    private service: FeedService,

    private userService: UserService,
  ) {}

  @Query(() => FeedConnection, { name: 'feeds' })
  Feeds(
    @GetUser() user: User,
    @Args() args: ConnectionArgs,
    @Args('query', { nullable: true }) query?: string,
  ): Promise<FeedConnection> {
    return this.service.findAllFeeds(args, user.id);
  }

  @Query(() => Feed, { name: 'feed' })
  Feed(@Args({ type: () => ID, name: 'id' }) id: string): Promise<Feed> {
    return this.service.findFeedById(id);
  }

  @RelayMutation(() => AddFeedPayload)
  async addFeed(
    @GetUser() user: User,
    @InputArg(() => CreateFeedInput) input: CreateFeedInput,
  ): Promise<AddFeedPayload> {
    const Feed = this.service.addFeed(input, user.id);
    pubSub.publish('FeedAdded', {
      FeedAdded: (await Feed).addFeedEdge,
    });
    return Feed;
  }

  @RelayMutation(() => UpdateFeedPayload)
  async updateFeed(@InputArg(() => UpdateFeedInput) input: UpdateFeedInput) {
    const Feed = this.service.updateFeed(input);
    pubSub.publish('FeedUpdated', {
      FeedUpdated: (await Feed).Feed,
    });
    return Feed;
  }

  @RelayMutation(() => DeleteFeedPayload)
  async deleteFeed(@InputArg(() => DeleteFeedInput) id: string) {
    await this.service.deleteFeedById(id);
    return id;
  }

  @ResolveField()
  user(@Parent() Feed: Feed): Promise<User> {
    return this.userService.finduserById(Feed.user);
  }

  @Subscription(() => FeedResponseEdge, { name: 'FeedAdded' })
  FeedAdded() {
    return pubSub.asyncIterator('FeedAdded');
  }

  @Subscription(() => Feed, { name: 'FeedUpdated' })
  FeedUpdated() {
    return pubSub.asyncIterator('FeedUpdated');
  }
}
