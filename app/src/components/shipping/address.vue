<template>
  <div class="vc-shipping-address">
    <div class="form shipping border-gray-400 border-2 py-2">
      <h2 class="text-xl font-bold mx-2">Versandadresse</h2>
      <div class="form-group mx-2">
        <label for="countries" class="block mb-2 text-sm">Anrede</label>
        <select
          id="countries"
          v-model="address.surename"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="woman">Frau</option>
          <option value="man">Herr</option>
        </select>
      </div>
      <div class="form-group mx-2">
        <label class="block mb-2 text-sm">Vorname</label>
        <input
          type="text"
          v-model="address.firstname"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Jonathan"
          required
        />
      </div>
      <div class="form-group mx-2">
        <label class="block mb-2 text-sm">Nachname</label>
        <input
          type="text"
          v-model="address.lastname"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Martz"
          required
        />
      </div>
      <div class="form-group mx-2">
        <label class="block mb-2 text-sm">Straße</label>
        <input
          type="text"
          v-model="address.street"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Eckenhagenerstrasse 34"
          required
        />
      </div>
      <div class="form-group mx-2">
        <label class="block mb-2 text-sm">Postleitzahl</label>
        <input
          type="number"
          v-model="address.postcode"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="51702"
          required
        />
      </div>
      <div class="form-group mx-2">
        <label class="block mb-2 text-sm">Stadt</label>
        <input
          type="text"
          v-model="address.city"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Gummersbach"
          required
        />
      </div>
      <div class="form-group mx-2">
        <label class="block mb-2 text-sm">Land</label>
        <input
          type="text"
          v-model="address.country"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Deutschland"
          required
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCheckoutShippingStore } from "../../store/checkout/shipping";

let store = useCheckoutShippingStore();
store.reload();

const { address } = storeToRefs(store);
</script>
