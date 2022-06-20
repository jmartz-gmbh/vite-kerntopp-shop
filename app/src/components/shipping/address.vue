<template>
  <div class="vc-shipping-address">
    <div class="form shipping">
      <div class="form-group w-full px-2 py-2">
        <label class="mr-2">Anrede</label>
        <select v-model="shipping.surename" class="px-2 py-2 bg-gray-400">
          <option value="man">Herr</option>
          <option value="woman">Frau</option>
        </select>
      </div>
      <div class="form-group w-full px-2 py-2">
        <label class="mr-2">Firstname</label>
        <input
          type="text"
          placeholder="Jonathan"
          v-model="shipping.firstname"
          class="px-2 py-2 bg-gray-400"
        />
      </div>
      <div class="form-group w-full px-2 py-2">
        <label>Lastname</label>
        <input
          type="text"
          placeholder="Martz"
          v-model="shipping.lastname"
          class="px-2 py-2 bg-gray-400"
        />
      </div>
      <div class="form-group w-full px-2 py-2">
        <label>Street with Number</label>
        <input
          type="text"
          v-model="shipping.street"
          placeholder="Eckenhagenerstrasse 34"
          class="px-2 py-2 bg-gray-400"
        />
      </div>
      <div class="form-group w-full px-2 py-2">
        <label>Postcode</label>
        <input
          type="text"
          v-model="shipping.postcode"
          placeholder="51645"
          class="px-2 py-2 bg-gray-400 text-white"
        />
      </div>
      <div class="form-group w-full px-2 py-2">
        <label>City</label>
        <input
          type="text"
          v-model="shipping.city"
          placeholder="Gummersbach"
          class="px-2 py-2 bg-gray-400"
        />
      </div>
      <div class="form-group w-full px-2 py-2">
        <label>Country</label>
        <input
          type="text"
          v-model="shipping.country"
          placeholder="Deutschland"
          class="px-2 py-2 bg-gray-400"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShippingAddress",
  data() {
    return {
      shipping: {
        surename: "Herr",
        firstname: "",
        lastname: "",
        street: "",
        postcode: "",
        country: "",
        city: "",
      },
    };
  },
};
</script>
