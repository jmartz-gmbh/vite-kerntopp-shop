export default {
  "checkout-remove-shipping": function (state) {
    state.shipping = {
      surename: "woman",
      firstname: "a",
      lastname: "",
      street: "",
      postcode: "",
      country: "",
      city: "",
    };
    localStorage.setItem(
      "shipping",
      JSON.stringify({
        surename: "woman",
        firstname: "a",
        lastname: "",
        street: "",
        postcode: "",
        country: "",
        city: "",
      })
    );
  },
  "checkout-save-shipping-address": function (state) {
    localStorage.setItem("shipping", JSON.stringify(state.shipping));
  },
  "checkout-update-shipping-address": function (state, { that, address }) {
    state.shipping = address;
    that.$store.commit("checkout-save-shipping-address");
  },
  "checkout-load-shipping-address": function (state) {
    state.shipping = JSON.parse(localStorage.getItem("shipping"));
    if (state.shipping == null) {
      state.shipping = {
        surename: "woman",
        firstname: "a",
        lastname: "",
        street: "",
        postcode: "",
        country: "",
        city: "",
      };
    }
  },
};
