import { Field, ID, ObjectType } from '@nestjs/graphql';

import { Feed } from './feed.types';

import { Edge, ConnectionCursor } from 'graphql-relay';
import { NodeInterface } from 'src/utils/relay';

@ObjectType()
export class UpdateFeedPayload {
  @Field(() => Feed)
  Feed: Feed;

  @Field(() => String)
  clientMutationId: string;
}

@ObjectType(`FeedResponseEdge`, { isAbstract: true })
export class FeedResponseEdge implements Edge<Feed> {
  @Field({ nullable: true })
  public cursor: ConnectionCursor;

  @Field(() => Feed, { nullable: true })
  public node!: Feed;
}

@ObjectType()
export class AddFeedPayload {
  @Field(() => FeedResponseEdge)
  addFeedEdge: FeedResponseEdge;

  @Field(() => String)
  clientMutationId: string;
}

@ObjectType()
export class DeleteFeedPayload {
  @Field(() => ID)
  id: NodeInterface;

  @Field(() => String)
  clientMutationId: string;
}
