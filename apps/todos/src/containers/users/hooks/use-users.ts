import { useLazyLoadQuery, usePaginationFragment } from "react-relay";
import { UsersQuery } from "containers/users/graphql/Users.queries";
import { UsersQuery as TUsersQuery } from "containers/users/graphql/__generated__/UsersQuery.graphql";
import { UsersPaginationFrgament } from "containers/users/graphql/__generated__/UsersPaginationFrgament.graphql";
import { UsersFragment } from "containers/users/graphql/Users.fragment";
import { UsersFragment$key } from "containers/users/graphql/__generated__/UsersFragment.graphql";
import { useTransition } from "react";

export const useUsers = () => {
  const [isPending, startTransition] = useTransition();

  const users = useLazyLoadQuery<TUsersQuery>(UsersQuery, {
    first: 5,
  });

  const { data, loadNext } = usePaginationFragment<
    UsersPaginationFrgament,
    UsersFragment$key
  >(UsersFragment, users);

  return {
    isPending,
    data,
    onLoadMore: () =>
      startTransition(() => {
        loadNext(2);
      }),
  };
};
