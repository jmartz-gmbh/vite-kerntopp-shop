<template>
  <div class="vc-pickup-store">
    <h2 class="font-bold text-xl">Pickup Store</h2>
    <div class="form p-3 border-gray-400 border-2">
      <div class="form-group w-full px-2 py-2">
        <label class="mr-2">Store</label>
        <select v-model="selected" class="px-2 py-2 bg-gray-400">
          <option v-for="(store, index) in stores" :value="store.id">
            {{ store.name }} - {{ store.city }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PickupStore",
  data() {
    return {
      selected: 0,
      stores: [
        {
          id: 0,
          name: "Test Store",
          street: "Eckenhagenerstrasse 34",
          postcode: "51645",
          city: "Gummersbach",
        },
        {
          id: 1,
          name: "Test Store",
          street: "Eckenhagenerstrasse 35",
          postcode: "51645",
          city: "Gummersbach",
        },
      ],
    };
  },
  mounted() {
    this.$store.commit("checkout-load-pickup-store");
    this.selected = this.$store.state.checkout.pickup_store;
  },
  watch: {
    selected: function (value) {
      this.$store.commit("checkout-update-pickup-store", {
        that: this,
        info: value,
      });
    },
  },
};
</script>
