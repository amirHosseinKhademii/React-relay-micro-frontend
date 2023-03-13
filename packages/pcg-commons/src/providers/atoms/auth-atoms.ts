import { atom } from "recoil";

export const authAtom = atom<{ user: string | null; token: string | null }>({
  default: { user: null, token: null },
  key: "AUTH_ATOM_COMMON",
});
