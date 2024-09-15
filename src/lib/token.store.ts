import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import cookiesStorage from './cookieStorage';

export type Token = string
export type JWTTokens = {
  access: Token;
  refresh: Token;
} | undefined

export type State = {
  tokens: JWTTokens
  set: (tokens: JWTTokens) => void
  clear: () => void
};

const key = 'token'
export const useTokenStore = create(
  persist<State>(
    (set, get) => {
      let tokens = undefined
      if (typeof window !== 'undefined') {
        const buff = localStorage.getItem(key)
        if (buff) tokens = JSON.parse(buff).state.tokens
      }
      return {
        tokens,
        set: (tokens: JWTTokens) => set(_ => ({ tokens })),
        clear: () => set(_ => ({ tokens: undefined }))
      }
    },
    {
      name: key,
      storage: createJSONStorage(() => cookiesStorage)
    }
  ));
