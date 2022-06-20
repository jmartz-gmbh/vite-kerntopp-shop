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
        <pickup-store v-if="shippingMethod == 'clickAndCollect'">
        </pickup-store>
        <personal-information
          v-if="shippingMethod == 'clickAndCollect'"
        ></personal-information>
        <shipping-address
          v-if="shippingMethod != 'clickAndCollect'"
        ></shipping-address>
        <billing-address
          v-if="shippingMethod != 'clickAndCollect'"
        ></billing-address>
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
import PersonalInformation from "../../components/personal/information.vue";
import PickupStore from "../../components/pickup/store.vue";

export default {
  name: "CheckoutShipping",
  data() {
    return {};
  },
  mounted() {
    if (
      this.$store.state.auth.token == null ||
      this.$store.state.auth.token == ""
    ) {
      this.$router.push("/checkout/account");
    }
    this.$store.commit("checkout-change-shipping-method", {
      that: this,
      method: "clickAndCollect",
    });
  },
  components: {
    "shipping-address": ShippingAddress,
    "shipping-method": ShippingMethod,
    "billing-address": BillingAddress,
    "personal-information": PersonalInformation,
    "pickup-store": PickupStore,
  },
  computed: {
    shippingMethod: function () {
      return this.$store.state.checkout.shippingMethod;
    },
  },
};
</script>
