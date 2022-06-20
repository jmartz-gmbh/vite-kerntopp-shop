export default {
  state: () => ({
    shipping: {
      surename: "woman",
      firstname: "",
      lastname: "",
      street: "",
      postcode: "",
      country: "",
      city: "",
    },
    shippingMethod: "",
    shippingAndBillingSame: true,
    billing: {
      surename: "woman",
      firstname: "",
      lastname: "",
      street: "",
      postcode: "",
      country: "",
      city: "",
    },
  }),
  mutations: {
    "checkout-same-toggle": function (state) {
      state.shippingAndBillingSame = !state.shippingAndBillingSame;
      if (!state.shipping) {
        state.shipping = {
          surename: "woman",
          firstname: "",
          lastname: "",
          street: "",
          postcode: "",
          country: "",
          city: "",
        };
      }
    },
    "checkout-load-shipping-address": function (state) {
      state.shipping = JSON.parse(localStorage.getItem("shipping"));
      if (state.shipping == null) {
        state.shipping = {
          surename: "woman",
          firstname: "",
          lastname: "",
          street: "",
          postcode: "",
          country: "",
          city: "",
        };
      }
    },
    "checkout-load-shipping-method": function (state) {
      state.shippingMethod = JSON.parse(
        localStorage.getItem("shipping-method")
      );
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
    "checkout-save-shipping-address": function (state) {
      localStorage.setItem("shipping", JSON.stringify(state.shipping));
    },
    "checkout-update-shipping-address": function (state, { that, address }) {
      state.shipping = address;
      that.$store.commit("checkout-save-shipping-address");
    },
    "checkout-load-billing-address": function (state) {
      state.billing = JSON.parse(localStorage.getItem("billing"));

      if (state.billing == null) {
        state.billing = {
          surename: "woman",
          firstname: "",
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
    "checkout-update-billing-address": function (state, { that, address }) {
      state.shipping = address;
      that.$store.commit("checkout-save-billing-address");
    },
  },
};
