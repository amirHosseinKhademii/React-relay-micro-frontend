import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { NodeResolver } from './node.resolver';
import { mainContext, subscriptionsConfig, typeormConfig } from 'src/utils';
import { User, UserModule } from 'src/user';

import { Feed, FeedModule } from 'src/feed';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      ...typeormConfig,
      entities: [User, Feed],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      driver: ApolloDriver,
      installSubscriptionHandlers: true,
      subscriptions: subscriptionsConfig,
      context: mainContext,
    }),
    UserModule,
    FeedModule,
  ],
  providers: [NodeResolver],
})
export class AppModule {}
