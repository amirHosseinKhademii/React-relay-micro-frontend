import { Field, ID, ObjectType } from '@nestjs/graphql';

import { NodeInterface, NodeType, CreateConnectionType } from 'src/utils/relay';
import { User } from 'src/user';
import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectIdColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@NodeType('Feed')
@Entity()
export class Feed implements NodeInterface {
  @ObjectIdColumn({ update: false })
  _id: string;

  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID!)
  id: string;

  @Field()
  @Column()
  title: string;

  @Field({ nullable: true, defaultValue: '' })
  @Column({ nullable: true, default: '' })
  description?: string;

  @Field({ nullable: true, defaultValue: false })
  @Column({ default: false })
  isCompleted: boolean;

  @Field({ nullable: true })
  @CreateDateColumn({ update: false })
  created_at: Date;

  @Field({ nullable: true })
  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  @Field(() => User)
  user: string;
}

@ObjectType()
export class FeedConnection extends CreateConnectionType<Feed>(Feed) {}
