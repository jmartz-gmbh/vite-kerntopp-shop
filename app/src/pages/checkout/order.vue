<template>
  <div class="vp-checkout-order">
    <h2 class="font-bold text-xl mb-2">Order</h2>
    <p>{{ shipping }}</p>
    <p>{{ shippingMethod }}</p>
    <p>{{ shippingAndBillingSame }}</p>
    <p>{{ billing }}</p>
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
