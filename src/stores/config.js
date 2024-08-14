import { defineStore } from "pinia";

export const useConfigStore = defineStore({
  id: "config",
  state: () => ({
    sidebar: false,
    dark: JSON.parse(localStorage.getItem('dark')) || false,
    activeMenuItem: null,
    chatId: JSON.parse(localStorage.getItem('mid'))
  }),
  actions: {
    async setChatId(value) {
      localStorage.setItem('mid', JSON.stringify(value))
      this.chatId = value
    },
    async removeChatId() {
      localStorage.setItem('mid', JSON.stringify(''))
    },
    async setDarkMode(value) {
      localStorage.setItem('dark', JSON.stringify(value))
      this.dark = value
    },
  },
});
