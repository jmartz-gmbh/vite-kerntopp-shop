import billing from "./checkout/billing";
import shipping from "./checkout/shipping";
import personal_info from "./checkout/personal-info";
import shipping_method from "./checkout/shipping-method";
import pickup_store from "./checkout/pickup-store";
import saved_address from "./checkout/saved-address";

export default {
  state: () => ({
    shipping: {
      surename: "woman",
      firstname: "c",
      lastname: "",
      street: "",
      postcode: "",
      country: "",
      city: "",
    },
    shippingMethod: "",
    saved_address: false,
    selected_address: 0,
    shippingAndBillingSame: true,
    billing: {
      surename: "woman",
      firstname: "d",
      lastname: "",
      street: "",
      postcode: "",
      country: "",
      city: "",
    },
    pickup_store: 0,
    personal_info: {
      surename: "woman",
      firstname: "g",
      lastname: "",
      phone: "",
    },
  }),
  mutations: {
    ...{
      "checkout-same-toggle": function (state) {
        state.shippingAndBillingSame = !state.shippingAndBillingSame;
        if (!state.shipping) {
          state.shipping = {
            surename: "woman",
            firstname: "b",
            lastname: "",
            street: "",
            postcode: "",
            country: "",
            city: "",
          };
        }
      },
      "checkout-load-selected-address": function (state) {
        state.selected_address = localStorage.getItem("selected_address");
        if (state.selected_address == null) {
          state.selected_address = 0;
        }
      },
      "checkout-save-selected-address": function (state) {
        localStorage.setItem("selected_address", this.selected_address);
      },
      "checkout-update-selected-address": function (state, { that, selected }) {
        this.selected_address = selected;
        that.$store.commit("checkout-save-selected-address");
      },
    },
    ...billing,
    ...shipping,
    ...personal_info,
    ...shipping_method,
    ...saved_address,
    ...pickup_store,
  },
};
