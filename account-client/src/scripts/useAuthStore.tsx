import create from 'zustand';
import axios from 'axios';
import { SetState } from 'zustand';
import { FormikHelpers } from 'formik';

interface UserData {
  name: string;
  lastname: string;
  email: string;
  gender: boolean;
  password: string;
  confirmpassword: string;
  contactnumber: string;
}

interface AuthStore {
  isAuthenticated: boolean;
  registrationError: string | null;
  register: (userData: UserData, formikHelpers: FormikHelpers<UserData>) => Promise<void>;
}

const useAuthStore = create<AuthStore>((set: SetState<AuthStore>) => ({
  isAuthenticated: false,
  registrationError: null,
  register: async (userData: UserData, formikHelpers: FormikHelpers<UserData>) => {
    try {
      const response = await axios.post( 'https://localhost:7000/api/account/register', userData);

      if (response.status === 200) {
        set({ isAuthenticated: true, registrationError: null });
        formikHelpers.resetForm(); // Reset the form on successful registration
      } else {
        set({ isAuthenticated: false, registrationError: response.data.error || 'An error occurred during registration.' });
      }
    } catch (error) {
      console.error('Error during registration:', error);
      set({ isAuthenticated: false, registrationError: 'An error occurred during registration.' });
    }
  },
}));

export default useAuthStore;
