import { create } from "zustand";
import api from "./api";
import User from "@/components/ui/userInterface";

interface UserStore {
    users: User[];
    setUsers: (users: User[]) => void;
    getAllUsers: () => void;
    setSelectedUser: (user: User | null) => void;
    getUserById: (id: number) => Promise<User | null>;
    selectedUser: User | null;
  }

const useUserStore = create<UserStore>((set) => ({
    users: [],
    setUsers: (users) => set({ users }),
    getAllUsers: async () => {
      try {
        const response = await api.get('/account/all');
        const users = response.data;
        set({ users });
      } catch (error) {
        console.error('no data', error);
      }
    },
    setSelectedUser: (user) => set({ selectedUser: user }),
    selectedUser: null,
    getUserById: async (id: number) => {
        try {
            const response = await api.get(`/account/${id}`);
            const user = response.data;
            return user;
        } catch (error) {
            console.error('no data', error);
        }
    }
    
  }));

  export default useUserStore;
