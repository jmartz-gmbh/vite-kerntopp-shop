import { createStore } from "vuex";
import nav from "./nav";
import url from "./url";
import cart from "./cart";
import checkout from "./checkout";
import messages from "./messages";
import breadcrumb from "./breadcrumb";
import auth from "./auth";

const store = createStore({
  modules: {
    checkout: checkout,
    breadcrumb: breadcrumb,
    messages: messages,
    auth: auth,
    cart: cart,
    url: url,
    nav: nav,
  },
});

export default store;
