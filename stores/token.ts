// store/filters.ts
import { defineStore } from "pinia";
const myToken = useCookie("_ga_n", { maxAge: 60 * 15 }); // 1 days 60 * 60 * 24 * 1
const myRole = useCookie("role", { maxAge: 60 * 15 });
export const useTokenStore = defineStore({
  id: "token-store",
  state: () => {
    return {
      token: "" || myToken.value,
      role: "" || myRole.value,
    };
  },
  actions: {
    saveToken(value: string) {
      this.token = myToken.value = value;
    },
    setRole(value: string) {
      this.role = myRole.value = value;
    },
  },
  getters: {
    userToken: (state) => state.token,
    userRole: (state) => state.role,
  },
});
