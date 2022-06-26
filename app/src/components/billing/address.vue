<template>
  <div class="vc-billing-address">
    <h2 class="text-xl font-bold mx-2">Rechnungsadresse</h2>
    <div class="form-group mx-2">
      <label>Gleiche Adresse verwenden</label>
      <input type="checkbox" v-model="same" />
    </div>
    <div
      v-if="$store.state.checkout.shippingAndBillingSame"
      class="same-address-note"
    >
      <p
        class="w-full px-2 py-2 border-2 border-gray-400 rounded-lg text-center mt-2"
      >
        Versandadress entspricht Rechnungsadresse
      </p>
    </div>
    <div v-else class="form billing border-gray-400 border-2">
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
        <label>Stadt</label>
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
  computed: {
    shippingAndBillingSame: function () {
      return this.$store.state.checkout.shippingAndBillingSame;
    },
    shippingMethod: function () {
      return this.$store.state.checkout.shippingMethod;
    },
  },
  mounted() {
    this.$store.commit("checkout-load-billing-address", {
      that: this,
    });
    this.billing = this.$store.state.checkout.billing;
  },
  watch: {
    same: function (value) {
      this.$store.commit("checkout-same-toggle");

      if (value) {
        this.$store.commit("checkout-remove-billing");
        this.billing = {
          surename: "woman",
          firstname: "k",
          lastname: "",
          street: "",
          postcode: "",
          country: "",
          city: "",
        };
      }
    },
    billing: {
      handler(value) {
        this.$store.commit("checkout-update-billing-address", {
          that: this,
          address: value,
        });
      },
      deep: true,
    },
  },
  data() {
    return {
      same: true,
      billing: {
        surename: "woman",
        firstname: "h",
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
