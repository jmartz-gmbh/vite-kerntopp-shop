<template>
  <div class="vp-checkout-shipping">
    <h2 class="font-bold text-xl mb-2">Shipping</h2>
    <div class="grid grid-cols-6">
      <div class="col-span-6">
        <h2 class="">Shipping Method</h2>
      </div>
      <div class="col-span-6 md:col-span-3">
        <shipping-method></shipping-method>
      </div>
      <div class="col-span-6 md:col-span-3">
        <shipping-address></shipping-address>
        <billing-address></billing-address>
      </div>
    </div>
    <div class="col-span-6">
      <div class="buttons flex justify-between">
        <button class="bg-blue-400 px-2 py-2 boder border-black">back</button>
        <button class="bg-blue-400 px-2 py-2 boder border-black">
          <router-link to="/checkout/payment">next</router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ShippingMethod from "../../components/shipping/method.vue";
import ShippingAddress from "../../components/shipping/address.vue";
import BillingAddress from "../../components/billing/address.vue";

export default {
  name: "CheckoutShipping",
  data() {
    return {
      same: false,
    };
  },
  mounted() {
    this.same = true;
    if (
      this.$store.state.auth.token == null ||
      this.$store.state.auth.token == ""
    ) {
      this.$router.push("/checkout/account");
    }
  },
  components: {
    "shipping-address": ShippingAddress,
    "shipping-method": ShippingMethod,
    "billing-address": BillingAddress,
  },
};
</script>
