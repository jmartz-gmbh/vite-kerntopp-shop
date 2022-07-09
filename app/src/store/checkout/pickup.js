import { defineStore } from "pinia";

export const useCheckoutPickupStore = defineStore("pickup", {
  state() {
    return {
      store: 0,
    };
  },
  actions: {
    update: function (value) {
      this.store = value;
      this.save();
    },
    save: function () {
      localStorage.setItem("store", this.store);
    },
    reload: function () {
      let value = localStorage.getItem("store");
      if (value == null || value == "undefined") {
        this.store = 0;
      } else {
        this.store = value;
      }

      this.save();
    },
  },
});
