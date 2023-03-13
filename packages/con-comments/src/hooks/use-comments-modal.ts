import { useId } from "react";
import { useMutation } from "react-relay";

import { CommentAddMutation } from "../graphql/Comment.mutation";
import { CommentAddMutation as TCommentAddMutation } from "../graphql/__generated__/CommentAddMutation.graphql";

export type TUseCommentModal = {
  onClose: () => void;
  __id: string;
  cardId: string;
};

export const useCommentsModal = ({
  onClose,
  __id,
  cardId,
}: TUseCommentModal) => {
  const [mutate] = useMutation<TCommentAddMutation>(CommentAddMutation);

  const clientMutationId = useId();

  return {
    onSubmit: (e: any) => {
      e.preventDefault();
      const title: string = e.target.title.value;
      const description: string = e.target.description.value;
      mutate({
        variables: {
          connections: [__id],
          input: {
            cardId,
            title,
            description,
            clientMutationId,
          },
        },
        optimisticResponse: {
          addComment: {
            addCommentEdge: {
              node: {
                id: clientMutationId,
                title,
                description,
                likes: [],
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
              },
              cursor: clientMutationId,
            },
            clientMutationId,
          },
        },
        optimisticUpdater: onClose,
      });
    },
  };
};
