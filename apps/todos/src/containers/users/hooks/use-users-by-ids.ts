import { useLazyLoadQuery, usePaginationFragment } from "react-relay";
import { UsersByIdsQuery } from "containers/users/graphql/Users.queries";
import { UsersByIdsQuery as TUsersByIdsQuery } from "containers/users/graphql/__generated__/UsersByIdsQuery.graphql";
import { UsersByIdsPaginationFrgament } from "containers/users/graphql/__generated__/UsersByIdsPaginationFrgament.graphql";
import { UsersByIdsFragment } from "containers/users/graphql/Users.fragment";
import { UsersByIdsFragment$key } from "containers/users/graphql/__generated__/UsersByIdsFragment.graphql";
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
