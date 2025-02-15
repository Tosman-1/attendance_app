import { create } from "zustand";

const useUserStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  isAuthenticated: () => !!user,
  updateUser: (updates) =>
    set((state) => ({ user: { ...state.user, ...updates } })),
  logout: () => set({ user: null }),
}));

export default useUserStore;
