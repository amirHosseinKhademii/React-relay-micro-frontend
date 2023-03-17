import { ReactNode, useId, useState } from "react";
import { useFragment, useMutation } from "react-relay";
import { CommentDeleteMutation as TCommentDeleteMutation } from "../graphql/__generated__/CommentDeleteMutation.graphql";
import {
  CommentDeleteMutation,
  CommentLikeMutation,
} from "../graphql/Comment.mutation";
import { CommentLikeMutation as TCommentLikeMutation } from "../graphql/__generated__/CommentLikeMutation.graphql";
import { useRecoilValue } from "recoil";
import { authAtom } from "pcg-commons";
import { FragmentRefs } from "relay-runtime";
import { CommentFragment } from "../graphql/Comment.fragment";
import { CommentFragment$key } from "../graphql/__generated__/CommentFragment.graphql";

export type TComment = {
  __id?: string;
  comment: {
    readonly cursor: string | null;
    readonly node: {
      readonly " $fragmentSpreads": FragmentRefs<
        "CommentDateFragment" | "CommentFragment"
      >;
    } | null;
  };
  children?: ReactNode;
};

export const useComment = ({ __id, comment }: TComment) => {
  const { user } = useRecoilValue(authAtom);

  const commentFragment = useFragment<CommentFragment$key>(
    CommentFragment,
    comment.node
  );

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

  const isLiked = commentFragment?.likes?.includes(user!);

  return {
    commentFragment,
    isUsers,
    onUsersToggle,
    isLiked,
    onDelete: () => {
      deleteComment({
        variables: {
          connections: [__id!],
          input: {
            id: commentFragment?.id!,
            clientMutationId,
          },
        },
        optimisticResponse: {
          deleteComment: {
            id: commentFragment?.id!,
            clientMutationId,
          },
        },
      });
    },
    onLike: () => {
      const likes = isLiked
        ? commentFragment?.likes?.filter((like) => like !== user!)
        : [...commentFragment?.likes!, user!];
      likeComment({
        variables: {
          input: {
            id: commentFragment?.id!,
            clientMutationId,
          },
        },
        optimisticResponse: {
          likeComment: {
            comment: {
              description: commentFragment?.description,
              id: commentFragment?.id!,
              title: commentFragment?.title,
              likes,
            },
            clientMutationId,
          },
        },
      });
    },
  };
};
