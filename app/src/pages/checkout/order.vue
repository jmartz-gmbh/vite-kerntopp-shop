<template>
  <div class="vp-checkout-order">
    <h2 class="font-bold text-xl mb-2">Order</h2>
    {{ shippingStore.address }} <br />
    {{ billingStore.address }} <br />
    {{ methodsStore.$state }} <br />
    {{ pickupStore.$state }} <br />
    {{ personalInfoStore.info }} <br />
    {{ cartStore.items }} <br />
    {{ billingStore.shippingAndBillingSame }}

    <div class="buttons flex justify-between">
      <button>back</button>
      <button @click="saveOrder()">save Order</button>
    </div>
  </div>
</template>

<script setup>
import { useCheckoutShippingStore } from "../../store/checkout/shipping";
import { useCheckoutBillingStore } from "../../store/checkout/billing";
import { useCheckoutMethodsStore } from "../../store/checkout/methods";
import { onMounted } from "vue";
import { useCheckoutPickupStore } from "../../store/checkout/pickup";
import { useCheckoutPersonalInfoStore } from "../../store/checkout/personal_info";
import { useCartStore } from "@/store/cart.js";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../store/auth";
import { useMessagesStore } from "../../store/messages";

let methodsStore = useCheckoutMethodsStore();
let shippingStore = useCheckoutShippingStore();
let billingStore = useCheckoutBillingStore();
let pickupStore = useCheckoutPickupStore();
let personalInfoStore = useCheckoutPersonalInfoStore();
let cartStore = useCartStore();
let router = useRouter();
let authStore = useAuthStore();
let messageStore = useMessagesStore();

let saveOrder = function () {
  fetch("https://auth.kerntopp.shop/api/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cart: cartStore.items,
      billing: billingStore.address,
      shipping: shippingStore.address,
      paymentMethod: methodsStore.payment,
      shippingMethod: methodsStore.shipping,
      personal_info: personalInfoStore.info,
      shippingAndBillingSame: billingStore.shippingAndBillingSame,
      pickup_store: pickupStore.store,
      token: authStore.token,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      if (json.id) {
        messageStore.add({
          status: "info",
          message: "Bestellung erfolgreich platziert",
        });
        router.push('/');
        cartStore.destroy();
      }
    });
};

onMounted(function () {
  methodsStore.reload();
  billingStore.reload();
  shippingStore.reload();
  pickupStore.reload();
  personalInfoStore.reload();
  cartStore.reload();
});
</script>
