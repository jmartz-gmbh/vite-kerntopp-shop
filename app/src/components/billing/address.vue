<template>
  <div class="vc-billing-address">
    <h2 class="text-xl font-bold mx-2">Rechnungsadresse</h2>
    <div class="form-group mx-2">
      <label>Gleiche Adresse verwenden</label>
      <input type="checkbox" v-model="same" />
    </div>
    <div v-if="same" class="same-address-note">
      <p
        class="w-full px-2 py-2 border-2 border-gray-400 rounded-lg text-center mt-2"
      >
        Versandadress entspricht Rechnungsadresse
      </p>
    </div>
    <div v-else class="form billing border-gray-400 border-2">
      <div class="form-group w-full px-2 py-2">
        <label class="mr-2">Anrede</label>
        <select v-model="address.surename" class="px-2 py-2 bg-gray-400">
          <option value="man">Herr</option>
          <option value="woman">Frau</option>
        </select>
      </div>
      <div class="form-group w-full px-2 py-2">
        <label class="mr-2">Firstname</label>
        <input
          type="text"
          placeholder="Jonathan"
          v-model="address.firstname"
          class="px-2 py-2 bg-gray-400"
        />
      </div>
      <div class="form-group w-full px-2 py-2">
        <label>Lastname</label>
        <input
          type="text"
          placeholder="Martz"
          v-model="address.lastname"
          class="px-2 py-2 bg-gray-400"
        />
      </div>
      <div class="form-group w-full px-2 py-2">
        <label>Street with Number</label>
        <input
          type="text"
          v-model="address.street"
          placeholder="Eckenhagenerstrasse 34"
          class="px-2 py-2 bg-gray-400"
        />
      </div>
      <div class="form-group w-full px-2 py-2">
        <label>Postcode</label>
        <input
          type="text"
          v-model="address.postcode"
          placeholder="51645"
          class="px-2 py-2 bg-gray-400 text-white"
        />
      </div>
      <div class="form-group w-full px-2 py-2">
        <label>Stadt</label>
        <input
          type="text"
          v-model="address.city"
          placeholder="Gummersbach"
          class="px-2 py-2 bg-gray-400"
        />
      </div>
      <div class="form-group w-full px-2 py-2">
        <label>Country</label>
        <input
          type="text"
          v-model="address.country"
          placeholder="Deutschland"
          class="px-2 py-2 bg-gray-400"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCheckoutBillingStore } from "../../store/checkout/billing";
import { storeToRefs } from "pinia";
import { ref } from "vue";

let store = useCheckoutBillingStore();
const { address } = storeToRefs(store);

let same = ref(true);
let selected = ref(0);
</script>
