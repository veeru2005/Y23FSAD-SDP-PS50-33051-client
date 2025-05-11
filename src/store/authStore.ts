import { create } from 'zustand';
import axios from 'axios';
import { User } from '../types';

const API_BASE_URL = "http://localhost:9096/api/auth";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,

  login: async (email, password) => {
    set({ isLoading: true });
    try {
      const res = await axios.post(`${API_BASE_URL}/login`, { email, password });
      const { name, email: userEmail } = res.data;

      localStorage.setItem('user', JSON.stringify({ name, email: userEmail }));
      set({ user: {
        name, email: userEmail,
        id: ''
      }, isAuthenticated: true, isLoading: false });
    } catch (error: any) {
      set({ isLoading: false });
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  },

  register: async (name, email, password) => {
    set({ isLoading: true });
    try {
      const res = await axios.post(`${API_BASE_URL}/register`, { name, email, password });
      const { name: userName, email: userEmail } = res.data;

      localStorage.setItem('user', JSON.stringify({ userName, userEmail }));
      set({ user: {
        name: userName, email: userEmail,
        id: ''
      }, isAuthenticated: true, isLoading: false });
    } catch (error: any) {
      set({ isLoading: false });
      throw new Error(error.response?.data?.message || 'Registration failed');
    }
  },

  logout: () => {
    localStorage.removeItem('user');
    set({ user: null, isAuthenticated: false });
  },
}));