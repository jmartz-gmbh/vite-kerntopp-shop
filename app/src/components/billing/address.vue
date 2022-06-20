<template>
  <div class="vc-billing-address">
    <input type="checkbox" v-model="same" />
    <div v-if="same" class="same-address-note">beide Gleich</div>
    <div v-else class="form">
      <div class="form-group w-full px-2 py-2">
        <label class="mr-2">Anrede</label>
        <select v-model="billing.surename" class="px-2 py-2 bg-gray-400">
          <option value="man">Herr</option>
          <option value="woman">Frau</option>
        </select>
      </div>
      <div class="form-group w-full px-2 py-2">
        <label class="mr-2">Firstname</label>
        <input
          type="text"
          placeholder="Jonathan"
          v-model="billing.firstname"
          class="px-2 py-2 bg-gray-400"
        />
      </div>
      <div class="form-group w-full px-2 py-2">
        <label>Lastname</label>
        <input
          type="text"
          placeholder="Martz"
          v-model="billing.lastname"
          class="px-2 py-2 bg-gray-400"
        />
      </div>
      <div class="form-group w-full px-2 py-2">
        <label>Street with Number</label>
        <input
          type="text"
          v-model="billing.street"
          placeholder="Eckenhagenerstrasse 34"
          class="px-2 py-2 bg-gray-400"
        />
      </div>
      <div class="form-group w-full px-2 py-2">
        <label>Postcode</label>
        <input
          type="text"
          v-model="billing.postcode"
          placeholder="51645"
          class="px-2 py-2 bg-gray-400 text-white"
        />
      </div>
      <div class="form-group w-full px-2 py-2">
        <label>City</label>
        <input
          type="text"
          v-model="billing.city"
          placeholder="Gummersbach"
          class="px-2 py-2 bg-gray-400"
        />
      </div>
      <div class="form-group w-full px-2 py-2">
        <label>Country</label>
        <input
          type="text"
          v-model="billing.country"
          placeholder="Deutschland"
          class="px-2 py-2 bg-gray-400"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BillingAddress",
  mounted() {
    this.same = true;
  },
  watch: {
    same: function (value) {
      if (value) {
        this.billing = this.$store.state.checkout.shipping;
      } else {
        this.billing = {
          surename: "Herr",
          firstname: "",
          lastname: "",
          street: "",
          postcode: "",
          country: "",
          city: "",
        };
      }
    },
  },
  data() {
    return {
      same: false,
      billing: {
        surename: "",
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
