<template>
  <div class="vp-home">
    <div v-for="(cat, index) in categories" class="categories">
      <h2 class="font-bold text-xl mb-2">Kategorie {{ cat }}</h2>
      <category-preview :identifier="cat" :limit="3"></category-preview>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CategoryPreview from "../components/category/preview.vue";

let categories = ref([1, 2, 3]);
</script>
