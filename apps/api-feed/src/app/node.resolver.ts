// import { Resolver } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { fromGlobalId } from 'graphql-relay';
import { NodeFieldResolver, NodeInterface } from 'src/utils/relay';
import { FeedService } from 'src/modules/feed';
@Resolver(NodeInterface)
export class NodeResolver extends NodeFieldResolver {
  constructor(private FeedService: FeedService) {
    super();
  }
  resolveNode(gid: string) {
    const { type } = fromGlobalId(gid);
    switch (type) {
      case 'Feed':
        return this.FeedService.findFeedById(gid);
      default:
        return null;
    }
  }
}
