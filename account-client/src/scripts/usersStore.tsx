import { create } from "zustand";
import api from "./api";
import User from "@/components/ui/userInterface";
import { FormikHelpers } from "formik";
import { EditUserInterface } from "@/components/ui/AdminPanel/editUserinterface";

interface UserStore {
    users: User[];
    setUsers: (users: User[]) => void;
    getAllUsers: () => void;
    setSelectedUser: (user: User | null) => void;
    getUserById: (id: number) => Promise<User | null>;
    selectedUser: User | null;
    deleteUser: (id: number) => Promise<void>;
    editUser: (userData: EditUserInterface, formikHelpers: FormikHelpers<EditUserInterface>) => Promise<void>;
    isAuthenticated: boolean;
    editError: string | null;
    
  }

const useUserStore = create<UserStore>((set) => ({
    isAuthenticated: false,
    editError: null,

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
    ,
    deleteUser: async (id: number) => {  return api.delete(`/profile/${id}`) },
    editUser: async (userData: EditUserInterface, formikHelpers: FormikHelpers<EditUserInterface>) => {
      try {
        const response = await api.post( '/account/edit/${id}', userData);

        if (response.status === 200) {
          set({ isAuthenticated: true, editError: null });
          formikHelpers.resetForm(); // Reset the form on successful registration
        } else {
          set({ isAuthenticated: false, editError: response.data.error || 'An error occurred during registration.' });
        }
      } catch (error) {
        console.error('Error during registration:', error);
        set({ isAuthenticated: false, editError: 'An error occurred during registration.' });
      }
    },
  }));

  export default useUserStore;
