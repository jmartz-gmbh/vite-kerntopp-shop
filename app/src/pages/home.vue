<template>
  <div class="vp-home">
    <category-preview :limit="3"></category-preview>
  </div>
</template>

<script>
import CategoryPreview from '../components/category/preview.vue';

export default {
  name: "Homepage",
  components: {
    "category-preview": CategoryPreview,
  },
};
</script>
