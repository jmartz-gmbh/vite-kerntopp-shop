export default {
  state: () => ({
    items: [],
    qty: 0,
  }),
  mutations: {
    "cart-items-load": function (state) {
      state.items = JSON.parse(localStorage.getItem("cart"));
      if (state.items == null) {
        state.items = [];
      }

      for (let i = 0; i < state.items.length; i++) {
        state.qty += state.items[i].qty;
      }
    },
    "cart-items-save": function (state) {
      localStorage.setItem(
        "cart",
        JSON.stringify(state.items) == null ? [] : JSON.stringify(state.items)
      );
    },
    "cart-item-remove": function (state, data) {
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].id == data.id) {
          state.qty -= state.items[i].qty;
          state.items.splice(i, 1);
          data.that.$store.commit("cart-items-save");
        }
      }
    },
    "product-add-to-cart": function (state, data) {
      let found = false;
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].id == data.id) {
          state.items[i].qty += data.qty;
          found = true;
        }
      }
      if (!found) {
        state.items.push({
          id: data.id,
          qty: data.qty,
        });
      }
      state.qty += data.qty;
      data.that.$store.commit("cart-items-save");
    },
  },
};
