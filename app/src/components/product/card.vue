<template>
  <div v-if="product.attributes" class="vc-product-card">
    <div class="card">
      <img
        :src="
          'https://catalog.kerntopp.shop' +
          product.attributes.media.data[0].attributes.url
        "
        alt=""
      />
      <h2>{{ product.attributes.name }}</h2>
      <div class="buttons">
        <button @click="addToCart(product.id, 1)">add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  data() {
    return {
      product: {},
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    addToCart: function (id, qty) {
      this.$store.commit("product-add-to-cart", {
        that: this,
        id: id,
        qty: qty,
      });
    },
    load: function () {
      const that = this;
      fetch(
        "https://catalog.kerntopp.shop/api/products/" +
          this.identifier +
          "?populate=media"
      )
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          that.product = json.data;
        });
    },
  },
  props: {
    identifier: {
      required: true,
      typ: Number,
    },
  },
};
</script>
