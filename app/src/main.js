import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import routes from "./routes";

import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faPlus,
  faEdit,
  faBars,
  faBox,
  faTrash,
  faCircle,
  faCircleDot,
  faCartShopping,
  faMoneyBill,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import { faDhl,faPaypal } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faEdit,
  faPlus,
  faBars,
  faCartShopping,
  faTrash,
  faDhl,
  faBox,
  faCircle,
  faRightFromBracket,
  faCircleDot,
  faMoneyBill,
  faPaypal
);

import plausible from "./plugins/plausible";

const plausibleOptions = {
  domain: "shop.kerntopp.shop",
  apiHost: "https://tracking.jmartz.gmbh",
  hashMode: false,
  trackLocalhost: false,
};

const app = createApp(App);

app.use(plausible, plausibleOptions);
app.component("fa", FontAwesomeIcon);
app.use(routes);
app.use(store);
app.mount("#app");
