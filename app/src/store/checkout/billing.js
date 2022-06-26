export default {
  "checkout-update-billing-address": function (state, { that, address }) {
    state.shipping = address;
    that.$store.commit("checkout-save-billing-address");
  },
  "checkout-load-billing-address": function (state) {
    state.billing = JSON.parse(localStorage.getItem("billing"));

    if (state.billing == null) {
      state.billing = {
        surename: "woman",
        firstname: "f",
        lastname: "",
        street: "",
        postcode: "",
        country: "",
        city: "",
      };
    }
  },
  "checkout-save-billing-address": function (state) {
    localStorage.setItem("billing", JSON.stringify(state.billing));
  },
  "checkout-remove-billing": function (state) {
    localStorage.setItem("billing", JSON.stringify({}));
  },
};
