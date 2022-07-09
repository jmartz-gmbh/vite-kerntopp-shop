<template>
  <div class="vp-cart">
    <h2 class="mb-2 flex justify-between">
      <span class="font-bold text-xl">Warenkorb</span>
      <div class="right flex space-x-2">
        <h2>Gesamtbetrag:</h2>
        <span>{{ total }}</span>
      </div>
    </h2>
    <div class="tw-table block border border-black">
      <div class="row grid grid-cols-12 bg-gray-300 font-bold px-2 py-2">
        <div class="col col-span-12 md:col-span-2">Id</div>
        <div class="col col-span-12 md:col-span-2">Menge</div>
        <div class="col col-span-12 md:col-span-2">Aktion</div>
      </div>
      <div
        v-for="(item, index) in items"
        class="row grid grid-cols-12 font-bold px-2 py-2"
      >
        <div class="col col-span-12 md:col-span-2">{{ item.id }}</div>
        <div class="col col-span-12 md:col-span-2">{{ item.qty }}</div>
        <div class="col col-span-12 md:col-span-2">
          <button @click="remove(item.id)">
            <fa icon="trash" />
          </button>
        </div>
      </div>
    </div>
    <div class="to-checkout mt-5">
      <button class="float-right bg-blue-400 border border-black px-2 py-2">
        <router-link to="/checkout/account">Zur Kasse</router-link>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "@/store/cart.js";
import { storeToRefs } from "pinia";
import { computed, onMounted } from "vue";

let store = useCartStore();
const { items } = storeToRefs(store);

let total = computed(function () {
  let tmp = 0;
  for (let i = 0; i < items.length; i++) {
    tmp += 10 * items[i].qty;
  }
  return tmp;
});

let remove = function (id) {
  this.items.map(function (item) {
    if (item.id != id) {
      return item;
    }
  });
};

onMounted(function () {
  store.reload();
});
</script>
