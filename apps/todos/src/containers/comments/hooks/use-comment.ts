import { useId, useState } from "react";
import { useMutation } from "react-relay";
import { CommentDeleteMutation as TCommentDeleteMutation } from "containers/comments/graphql/__generated__/CommentDeleteMutation.graphql";
import {
  CommentDeleteMutation,
  CommentLikeMutation,
} from "containers/comments/graphql/Comment.mutation";
import { CommentLikeMutation as TCommentLikeMutation } from "containers/comments/graphql/__generated__/CommentLikeMutation.graphql";

export type TComment = {
  __id?: string;
  comment: {
    readonly node: {
      readonly created_at: any;
      readonly description: string | null;
      readonly id: string;
      readonly title: string;
      readonly updated_at: any;
      readonly likes: readonly string[];
    } | null;
  };
};

export const useComment = ({ __id }: TComment) => {
  const [deleteComment] = useMutation<TCommentDeleteMutation>(
    CommentDeleteMutation
  );

  const [likeComment] = useMutation<TCommentLikeMutation>(CommentLikeMutation);

  const clientMutationId = useId();

  const [isUsers, setIsUsersOpen] = useState(false);

  const onUsersToggle = (e: any) => {
    e.stopPropagation();
    setIsUsersOpen((prev) => !prev);
  };

  return {
    isUsers,
    onUsersToggle,
    onDelete: (id: string) => {
      deleteComment({
        variables: {
          connections: [__id!],
          input: {
            id,
            clientMutationId,
          },
        },
        optimisticResponse: {
          deleteComment: {
            id,
            clientMutationId,
          },
        },
      });
    },
    onLike: (comment: TComment["comment"]) => {
      likeComment({
        variables: {
          input: {
            id: comment.node?.id!,
            clientMutationId,
          },
        },
        optimisticResponse: {
          likeComment: {
            comment: {
              created_at: comment.node?.created_at,
              description: comment.node?.description,
              id: comment.node?.id!,
              title: comment.node?.title,
              updated_at: comment.node?.updated_at,
              likes: [...comment.node?.likes!, "1"],
            },
            clientMutationId,
          },
        },
      });
    },
  };
};
