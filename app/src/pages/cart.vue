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
        <div class="col col-span-12 md:col-span-2">Name</div>
        <div class="col col-span-12 md:col-span-2">Menge</div>
        <div class="col col-span-12 md:col-span-2">Preis</div>
        <div class="col col-span-12 md:col-span-2">Aktion</div>
      </div>
      <div
        v-for="(item, index) in $store.state.cart.items"
        class="row grid grid-cols-12 font-bold px-2 py-2"
      >
        <div class="col col-span-12 md:col-span-2">{{ item.id }}</div>
        <div class="col col-span-12 md:col-span-2">{{ name[item.id] }}</div>
        <div class="col col-span-12 md:col-span-2">{{ item.qty }}</div>
        <div class="col col-span-12 md:col-span-2">{{ price[item.id] }}</div>
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

<script>
export default {
  name: "Cart",
  data() {
    return {
      name: [],
      price: [],
    };
  },
  computed: {
    total: function () {
      let tmp = 0;
      for (let i = 0; i < this.$store.state.cart.items.length; i++) {
        tmp +=
          this.$store.state.cart.items[i].qty *
          this.price[this.$store.state.cart.items[i].id];
      }
      return tmp;
    },
  },
  mounted() {
    this.loadPrices();
    if (this.$store.state.cart.items.length <= 0) {
      this.$router.push("/");
    }
  },
  methods: {
    loadPrices: function () {
      const that = this;
      fetch("https://catalog.kerntopp.shop/api/products", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((json) => {
          for (let i = 0; i < json.data.length; i++) {
            that.price[json.data[i].id] = json.data[i].attributes.price;
            that.name[json.data[i].id] = json.data[i].attributes.name;
          }
        });
    },
    remove: function (id) {
      this.$store.commit("cart-item-remove", {
        that: this,
        id: id,
      });
    },
  },
};
</script>
