import { defineStore } from "pinia";

export const useBreadcrumbStore = defineStore("breadcrumb", {
  state() {
    return {
      items: [],
    };
  },
  actions: {
    add: function (item) {
      this.items.push(item);
    },
  },
});
