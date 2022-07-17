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
      <h2>{{ product.attributes.name }} - {{ product.attributes.price }} €</h2>
      <p>{{ product.attributes.desc }}</p>
      <div class="buttons">
        <button
          @click="addToCart(product.id, 1)"
          class="float-right bg-blue-400 border border-black px-2 py-2"
        >
          add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import { useCartStore } from "../../store/cart";
import { useMessagesStore } from "@/store/messages";

let props = defineProps({
  identifier: {
    required: true,
    Typ: Number,
  },
});

let store = useCartStore();
const { items } = storeToRefs(store);
let messageStore = useMessagesStore();

let product = ref({});

let addToCart = function (id, qty) {
  store.add({
    id: id,
    qty: qty,
  });
  messageStore.add({
    stauts: "info",
    message: "Produkt erfolgreich zum Warenkorb hinzugefügt.",
  });
};

let load = function (id, qty) {
  fetch(
    "https://catalog.kerntopp.shop/api/products/" +
      props.identifier +
      "?populate=media"
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      product.value = json.data;
      localStorage.setItem(
        "product-" + props.identifier,
        JSON.stringify(json.data)
      );
    });
};

onMounted(function () {
  load();
});
</script>
