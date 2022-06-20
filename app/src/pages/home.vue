<template>
  <div class="vp-home">
    <h2 class="font-bold text-xl mb-2">Produkte</h2>
    <category-preview :limit="6"></category-preview>
  </div>
</template>

<script>
import CategoryPreview from "../components/category/preview.vue";

export default {
  name: "Homepage",
  components: {
    "category-preview": CategoryPreview,
  },
};
</script>
