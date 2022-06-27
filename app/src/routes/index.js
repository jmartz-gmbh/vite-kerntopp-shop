import { createWebHistory, createRouter } from "vue-router";

import Home from "../pages/home.vue";
import Cart from "../pages/cart.vue";
import Impressum from "../pages/impressum.vue";
import CheckoutAccont from "../pages/checkout/account.vue";
import CheckoutThanks from "../pages/checkout/thanks.vue";
import CheckoutShipping from "../pages/checkout/shipping.vue";
import CheckoutPayment from "../pages/checkout/payment.vue";
import CheckoutOrder from "../pages/checkout/order.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/impressum", component: Impressum },
  { path: "/checkout/account", component: CheckoutAccont },
  { path: "/checkout/shipping", component: CheckoutShipping },
  { path: "/checkout/payment", component: CheckoutPayment },
  { path: "/checkout/order", component: CheckoutOrder },
  { path: "/checkout/thanks/", component: CheckoutThanks },
  { path: "/cart", component: Cart },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
