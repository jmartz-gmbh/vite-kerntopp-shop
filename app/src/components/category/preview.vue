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

<script>
import ProductCard from "../product/card.vue";

export default {
  name: "CategoryPreview",
  components: {
    "product-card": ProductCard,
  },
  data() {
    return {
      products: {},
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load: function () {
      const that = this;
      fetch("https://catalog.kerntopp.shop/api/products?populate=categories")
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          that.products = json.data.splice(-1 * that.limit);
        });
    },
  },
  props: {
    limit: {
      required: true,
      Typ: Number,
    },
  },
};
</script>
