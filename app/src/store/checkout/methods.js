import { defineStore } from "pinia";

export const useCheckoutMethodsStore = defineStore("methods", {
  state() {
    return {
      payment: "vorkasse",
      shipping: "clickAndCollect",
    };
  },
  actions: {
    updatePayment: function (label) {
      this.payment = label;
      this.save();
    },
    updateShipping: function (label) {
      this.shipping = label;
      this.save();
    },
    save: function () {
      localStorage.setItem("shipping-method", this.shipping);
      localStorage.setItem("payment-method", this.payment);
    },
    reload: function () {
      this.shipping = localStorage.getItem("shipping-method");
      if (this.shipping == null) {
        this.shipping = "clickAndCollect";
      }
      this.payment = localStorage.getItem("payment-method");
      if (this.payment == null) {
        this.payment = "vorkasse";
      }
    },
  },
});
