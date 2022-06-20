<template>
  <div class="vc-pickup-store">
    <h2 class="font-bold text-xl">Personal Informationen</h2>
    <div class="form p-3 border-gray-400 border-2">
      <div class="form-group w-full px-2 py-2">
        <label class="mr-2">Store</label>
        <select v-model="form.store" class="px-2 py-2 bg-gray-400">
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
      form: {
        store: 0,
      },
      stores: [
        {
          id: 0,
          name: "Test Store",
          street: "Eckenhagenerstrasse 34",
          postcode: "51645",
          city: "Gummersbach",
        },
      ],
    };
  },
};
</script>
