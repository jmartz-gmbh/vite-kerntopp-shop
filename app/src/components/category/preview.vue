<template>
  <div class="vc-category-preview">
    <div class="grid grid-cols-6 gap-2">
      <div
        v-for="(product, index) in products"
        class="col-span-6 md:col-span-2"
      >
        <product-card :identifier="product.id"></product-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import ProductCard from "../product/card.vue";

let props = defineProps({
  limit: {
    required: true,
    Typ: Number,
  },
  identifier: {
    required: true,
    Typ: Number,
  },
});

let products = ref([]);

let load = function () {
  fetch(
    "https://catalog.kerntopp.shop/api/categories/" +
      props.identifier +
      "?populate=products"
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      if (json.data) {
        products.value = json.data.attributes.products.data.reverse().splice(-3);
      }
    });
};

onMounted(function () {
  load();
});
</script>
