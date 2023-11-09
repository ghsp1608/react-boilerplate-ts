import { create } from "zustand";

interface User {
  name: string;
  role: string;
}

interface AuthStore {
  user: User;
  login: (username: User) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: {} as User,
  login: (user) =>
    set(() => {
      return {
        user: {
          name: user.name,
          role: user.role,
        },
      };
    }),
  logout: () =>
    set(() => {
      return {
        user: {
          name: "",
          role: "",
        },
      };
    }),
}));

export default useAuthStore;
