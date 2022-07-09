import { defineStore } from "pinia";

export const useCheckoutShippingStore = defineStore("shipping", {
  state() {
    return {
      address: {
        surename: "",
        firstname: "",
        lastname: "",
        street: "",
        postcode: "",
        city: "",
        country: "",
      },
    };
  },
  actions: {
    update: function (value) {
      this.address = value;
      this.save();
    },
    save: function () {
      localStorage.setItem("shipping", JSON.stringify(this.address));
    },
    reload: function () {
      let json = localStorage.getItem("shipping");
      if (json == null || json == "undefined") {
        this.$reset();
      } else {
        this.address = JSON.parse(json);
      }
    },
  },
});
