export default {
  "checkout-load-shipping-method": function (state) {
    state.shippingMethod = JSON.parse(localStorage.getItem("shipping-method"));
  },
  "checkout-save-shipping-method": function (state) {
    localStorage.setItem(
      "shipping-method",
      JSON.stringify(state.shippingMethod)
    );
  },
  "checkout-change-shipping-method": function (state, { that, method }) {
    state.shippingMethod = method;
    that.$store.commit("checkout-save-shipping-method");
  },
};
