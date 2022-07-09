<template>
  <div class="vp-checkout-shipping">
    <h2 class="font-bold text-xl mb-2">Shipping</h2>
    <div class="grid grid-cols-6">
      <div class="col-span-6">
        <h2 class="">Shipping Method</h2>
      </div>
      <div class="col-span-6 md:col-span-3">
        <shipping-method></shipping-method>
        {{ shippingMethod }}
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
        <button class="bg-blue-400 px-2 py-2 border border-black">back</button>
        <button
          class="bg-blue-400 px-2 py-2 border border-black"
          @click="nextStep()"
        >
          Nächster Schritt
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import ShippingMethod from "@/components/shipping/method.vue";
import ShippingAddress from "@/components/shipping/address.vue";
import BillingAddress from "@/components/billing/address.vue";
import PersonalInformation from "@/components/personal/information.vue";
import PickupStore from "@/components/pickup/store.vue";
import UserSavedAddress from "@/components/user/saved/address.vue";

import { useCheckoutShippingStore } from "@/store/checkout/shipping.js";
import { useCheckoutBillingStore } from "@/store/checkout/billing.js";
import { useCheckoutMethodsStore } from "@/store/checkout/methods.js";
import { useCheckoutPersonalInfoStore } from "@/store/checkout/personal_info.js";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useCheckoutPickupStore } from "../../store/checkout/pickup";

let router = useRouter();
let valid = ref(false);

let store = {
  shipping: useCheckoutShippingStore(),
  billing: useCheckoutBillingStore(),
  methods: useCheckoutMethodsStore(),
  personal_info: useCheckoutPersonalInfoStore(),
  pikcup: useCheckoutPickupStore()
};

store.shipping.reload();
store.billing.reload();
store.methods.reload();
store.personal_info.reload();

let shippingMethod = computed(function () {
  return store.methods.shipping;
});

let nextStep = function () {
  this.valid = this.isValid();
  if (this.valid) {
    router.push("/checkout/payment");
  }
};

let isValid = function () {
  if (store.methods.shipping == "clickAndCollect") {
    let info = store.personal_info.info;
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
    store.personal_info.save();
    store.pikcup.save();
    return true;
  } else if (
    store.methods.shipping == "dhl" ||
    store.methods.shipping == "dhl-express"
  ) {
    let shipping = store.shipping.address;
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

    if (!store.billing.shippingAndBillingSame) {
      let billing = store.billing;
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
      store.billing.save();
      store.shipping.save();
      return true;
    }
    return true;
  }

  return false;
};
</script>
