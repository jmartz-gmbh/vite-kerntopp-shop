import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state() {
    return {
      items: [],
    };
  },
  actions: {
    add: function (data) {
      let found = false;

      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].id == data.id) {
          found = true;
          this.items[i].qty += data.qty;
        }
      }

      if (!found) {
        this.items.push(data);
      }

      this.save();
    },
    save: function () {
      localStorage.setItem("cart", JSON.stringify(this.items));
    },
    reload: function () {
      this.items = JSON.parse(localStorage.getItem("cart"));
      if (this.items == null) {
        this.$reset();
      }
      this.save();
    },
    destroy: function () {
      this.items = [];
      this.save();
    },
  },
});
