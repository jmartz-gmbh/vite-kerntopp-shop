import { defineStore } from "pinia";

export const useMessagesStore = defineStore("messages", {
  state() {
    return {
      items: [],
    };
  },
  actions: {
    add: function (item) {
      this.items.push(item);
    },
    close: function (index) {
      this.items.splice(index, 1);
    },
  },
});
