import { defineStore } from "pinia";

export const useCheckoutBillingStore = defineStore("billing", {
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
      shippingAndBillingSame: true,
    };
  },
  actions: {
    reload: function () {
      this.address = JSON.parse(localStorage.getItem("billing"));
      if (this.address == null) {
        this.$reset();
      }
    },
  },
});
