<template>
  <div>
    <div class="form-group">
      <label>Gespeichert Adresse auswählen</label>
      <input type="checkbox" :checked="same" @click="same = !same" />
    </div>
    <div v-if="same" class="px-2 py-2 border-2 mb-2 border-gray-400">
      <select
        v-model="selected"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option v-for="(address, index) in addresses" :value="index">
          {{ address.firstname }}
          {{ address.lastname }} -
          {{ address.street }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { useCheckoutUserAddress } from "@/store/checkout/user/address.js";
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";
import { useCheckoutShippingStore } from "../../../store/checkout/shipping";

let same = ref(false);
let selected = ref(0);

const store = useCheckoutUserAddress();
const { addresses } = storeToRefs(store);

const shippingStore = useCheckoutShippingStore();
let { address } = storeToRefs(shippingStore);

watch(same, function (key) {
  if (key) {
    shippingStore.update(addresses.value[selected.value]);
  } else {
    shippingStore.$reset();
  }
});

watch(selected, function (key) {
  shippingStore.update(addresses.value[key]);
});
</script>
