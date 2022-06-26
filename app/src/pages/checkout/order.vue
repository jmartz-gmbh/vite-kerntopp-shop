<template>
  <div class="vp-checkout-order">
    <h2 class="font-bold text-xl mb-2">Order</h2>
    <p>{{ shipping }}</p>
    <p>{{ shippingMethod }}</p>
    <div v-if="shippingMethod == 'clickAndCollect'">
      <p>{{ pickup_store }}</p>
      <p>{{ personal_info }}</p>
    </div>
    <div v-else-if="shippingMethod == 'dhl' || shippingMethod == 'dhlExpress'">
      <p>{{ shippingAndBillingSame }}</p>
      <p>{{ billing }}</p>
    </div>
    <p>{{ paymentMethod }}</p>
    <p>{{ cart }}</p>
  </div>
</template>

<script>
export default {
  name: "CheckoutOrder",
  mounted() {
    this.$store.commit("checkout-load-shipping-address");
    this.$store.commit("checkout-load-billing-address");
    this.$store.commit("checkout-load-payment-method");
    this.$store.commit("checkout-load-shipping-method");
    this.$store.commit("checkout-load-personal-info");
    this.$store.commit("checkout-load-pickup-store");
  },
  computed: {
    shipping: function () {
      return this.$store.state.checkout.shipping;
    },
    shippingMethod: function () {
      return this.$store.state.checkout.shippingMethod;
    },
    billing: function () {
      return this.$store.state.checkout.billing;
    },
    pickup_store: function () {
      return this.$store.state.checkout.pickup_store;
    },
    personal_info: function () {
      return this.$store.state.checkout.personal_info;
    },
    paymentMethod: function () {
      return this.$store.state.checkout.paymentMethod;
    },
    cart: function () {
      return this.$store.state.cart.items;
    },
    shippingAndBillingSame: function () {
      return this.$store.state.checkout.shippingAndBillingSame;
    },
  },
};
</script>
