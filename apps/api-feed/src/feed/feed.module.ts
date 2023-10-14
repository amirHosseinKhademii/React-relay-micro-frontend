import { Module } from '@nestjs/common';
import { FeedService } from './feed.service';
import { FeedResolver } from './feed.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feed } from './types';

import { UserModule } from 'src/user';

@Module({
  imports: [TypeOrmModule.forFeature([Feed]), UserModule],
  providers: [FeedService, FeedResolver],
  exports: [FeedService],
})
export class FeedModule {}
