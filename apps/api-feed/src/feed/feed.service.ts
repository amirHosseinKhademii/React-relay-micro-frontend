import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { toGlobalId } from 'graphql-relay';
import { ConnectionArgs, nextId } from 'src/utils/relay';
import { Repository } from 'typeorm';
import { CreateFeedInput, UpdateFeedInput } from './types/feed';
import { Feed, FeedConnection } from './types/feed.types';
import { v4 as uuid } from 'uuid';
import { AddFeedPayload } from './types/feed.response';
import { findAll } from 'src/services';

@Injectable()
export class FeedService {
  constructor(@InjectRepository(Feed) private repo: Repository<Feed>) {}

  async findAllFeeds(
    args: ConnectionArgs,
    user: string,
  ): Promise<FeedConnection> {
    return await findAll(args, this.repo);
    // return await findAll(args, this.repo, { user: user });
  }

  async findFeedById(id: string) {
    return await this.repo.findOneBy({ id });
  }

  async addFeed(args: CreateFeedInput, user: string): Promise<AddFeedPayload> {
    const guid = uuid();
    const id = toGlobalId('Feed', guid);
    const Feed = await this.repo.create({ ...args, id, user });
    const result = await this.repo.save(Feed);
    return {
      addFeedEdge: {
        node: result,
        cursor: nextId(id).toString(),
      },
    } as any;
  }

  async updateFeed(args: UpdateFeedInput) {
    const { id, ...body } = args;
    const updated_at = new Date();
    Object.keys(body).forEach((key) => body[key] === null && delete body[key]);
    const Feed = await this.repo.findOneByOrFail({ id });
    const updatedFeed: Feed = { ...Feed, ...body, updated_at };
    const result = await this.repo.save(updatedFeed);
    return { Feed: result };
  }

  // async updateCardsInFeedById({
  //   FeedId,
  //   cardId,
  // }: {
  //   FeedId: string;
  //   cardId: string;
  // }) {
  //   const updated_at = new Date();
  //   const Feed = await this.repo.findOneByOrFail({ id: FeedId });
  //   const cards = Feed.cards ? [...Feed.cards, cardId] : [cardId];
  //   const updatedFeed: Feed = { ...Feed, cards, updated_at };
  //   return await this.repo.save(updatedFeed);
  // }

  async deleteFeedById(id: string) {
    return await this.repo.delete(id);
  }
}
