import {createStore} from "vuex";
import nav from "./nav";
import url from "./url";
import cart from "./cart";

const store = createStore({
    modules: {
      cart: cart,
      url: url,
      nav: nav,
    },
  });

export default store;
