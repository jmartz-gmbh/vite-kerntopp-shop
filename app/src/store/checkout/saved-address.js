export default {
  "checkout-save-saved-address": function (state) {
    localStorage.setItem("saved_address", state.saved_address);
  },
  "checkout-change-saved-address": function (state, { that, selected }) {
    state.saved_address = selected;
    that.$store.commit("checkout-save-saved-address");
  },
  "checkout-toggle-saved-address": function (state, { that }) {
    state.saved_address = !state.saved_address;
    that.$store.commit("checkout-save-saved-address");
  },
  "checkout-load-saved-address": function (state) {
    state.saved_address = JSON.parse(localStorage.getItem("saved_address"));
    if (state.saved_address === null) {
      state.saved_address = 0;
    }
  },
};
