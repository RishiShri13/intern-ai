import { create } from "zustand";

export type UserRole = "ADMIN" | "COMPANY" | "MENTOR" | "INTERN";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

interface AuthState {
  user: User | null;
  token: string | null;

  setAuth: (user: User, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,

  setAuth: (user, token) =>
    set(() => ({
      user,
      token,
    })),

  logout: () =>
    set(() => {
      localStorage.removeItem("token");
      return { user: null, token: null };
    }),
}));