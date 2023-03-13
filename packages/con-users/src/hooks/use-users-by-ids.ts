import { useLazyLoadQuery, usePaginationFragment } from "react-relay";
import { UsersByIdsQuery } from "../graphql/Users.queries";
import { UsersByIdsQuery as TUsersByIdsQuery } from "../graphql/__generated__/UsersByIdsQuery.graphql";
import { UsersByIdsPaginationFrgament } from "../graphql/__generated__/UsersByIdsPaginationFrgament.graphql";
import { UsersByIdsFragment } from "../graphql/Users.fragment";
import { UsersByIdsFragment$key } from "../graphql/__generated__/UsersByIdsFragment.graphql";
import { useTransition } from "react";

export type TUseUsersByIds = { ids: readonly string[] };

export const useUsersByIds = ({ ids }: TUseUsersByIds) => {
  const [isPending, startTransition] = useTransition();

  const users = useLazyLoadQuery<TUsersByIdsQuery>(UsersByIdsQuery, {
    ids,
    first: 2,
  });

  const { data, loadNext } = usePaginationFragment<
    UsersByIdsPaginationFrgament,
    UsersByIdsFragment$key
  >(UsersByIdsFragment, users);

  return {
    isPending,
    data,
    onLoadMore: () =>
      startTransition(() => {
        loadNext(2);
      }),
  };
};
