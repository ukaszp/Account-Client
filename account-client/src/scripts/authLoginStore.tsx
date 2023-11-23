import create, { State } from 'zustand';

interface User {
  id: number;
  name: string;
  lastName: string;
  email: string;
  passwordHash: string;
  contactNumber: string;
  gender: boolean;
  whenJoined: string;
  dateOfBirth: string;
  roleId: number;
  role: {
    id: number;
    name: string;
    description: string;
  };
}

interface AuthStore {
  user:  User  | null;
  token: string | null;
  login: (user:  User , token: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  token: null,
  login: (user, token) => set({ user, token }),
  logout: () => set({ user: null, token: null }),
  
}));

export default useAuthStore;