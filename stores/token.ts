// store/filters.ts
import { defineStore } from 'pinia'

export const useTokenStore = defineStore({
  id: 'token-store',
  state: () => {
    return {
      token: "",
      role: "",
    }
  },
  actions: {
    saveToken(value: string) {
      this.token = value
    },
    setRole(value: string) {
      this.role = value
    },
  },
  getters: {
    userToken: state => state.token,
    userRole: state => state.role,
  },
})
