export default {
  "checkout-load-pickup-store": function (state) {
    state.pickup_store = JSON.parse(localStorage.getItem("pickup_store"));
    if (state.pickup_store === null) {
      state.pickup_store = 0;
    }
  },
  "checkout-update-pickup-store": function (state, { that, info }) {
    state.pickup_store = info;
    localStorage.setItem("pickup_store", JSON.stringify(info));
  },
};
