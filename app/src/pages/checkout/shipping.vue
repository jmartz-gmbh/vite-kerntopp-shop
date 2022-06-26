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
        <user-saved-address v-if="shippingMethod != 'clickAndCollect'">
        </user-saved-address>
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
      <div class="buttons flex justify-between mt-2">
        <button class="bg-blue-400 px-2 py-2 boder border-black">back</button>
        <button
          class="bg-blue-400 px-2 py-2 boder border-black"
          @click="nextStep()"
        >
          Nächster Schritt
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
import UserSavedAddress from "../../components/user/saved/address.vue";

export default {
  name: "CheckoutShipping",
  data() {
    return {
      valid: false,
    };
  },
  mounted() {
    const that = this;
    if (
      this.$store.state.auth.token == null ||
      this.$store.state.auth.token == ""
    ) {
      this.$router.push("/checkout/account");
    }
    this.$store.commit("checkout-load-shipping-method");
  },
  components: {
    "shipping-address": ShippingAddress,
    "shipping-method": ShippingMethod,
    "billing-address": BillingAddress,
    "personal-information": PersonalInformation,
    "pickup-store": PickupStore,
    "user-saved-address": UserSavedAddress,
  },
  computed: {
    shippingMethod: function () {
      return this.$store.state.checkout.shippingMethod;
    },
  },
  methods: {
    nextStep: function () {
      this.valid = this.isValid();
      console.log(this.valid);
      if (this.valid) {
        this.$router.push("/checkout/payment");
      }
    },
    isValid: function () {
      this.$store.commit("checkout-save-shipping-address");
      this.$store.commit("checkout-save-billing-address");

      if (this.shippingMethod == "clickAndCollect") {
        let info = this.$store.state.checkout.personal_info;
        if (info.surename == "") {
          return false;
        }
        if (info.firstname == "") {
          return false;
        }
        if (info.lastname == "") {
          return false;
        }
        if (info.phone == "") {
          return false;
        }
        return true;
      } else if (
        this.shippingMethod == "dhl" ||
        this.shippingMethod == "dhl-express"
      ) {
        let shipping = this.$store.state.checkout.shipping;
        if (shipping.surename == "") {
          return false;
        }
        if (shipping.firstname == "") {
          return false;
        }
        if (shipping.lastname == "") {
          return false;
        }
        if (shipping.street == "") {
          return false;
        }
        if (shipping.city == "") {
          return false;
        }
        if (shipping.postcode == "") {
          return false;
        }
        if (shipping.country == "") {
          return false;
        }

        if (!this.$store.state.checkout.shippingAndBillingSame) {
          let billing = this.$store.state.checkout.billing;
          if (billing.surename == "") {
            return false;
          }
          if (billing.firstname == "") {
            return false;
          }
          if (billing.lastname == "") {
            return false;
          }
          if (billing.street == "") {
            return false;
          }
          if (billing.city == "") {
            return false;
          }
          if (billing.postcode == "") {
            return false;
          }
          if (billing.country == "") {
            return false;
          }
          return true;
        }
        return true;
      }

      return false;
    },
  },
};
</script>
