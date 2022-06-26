<template>
  <div>
    <div class="form-group">
      <label>Gespeichert Adresse auswählen</label>
      <input type="checkbox" :checked="use" @click="toggleUse()" />
    </div>
    <div v-if="use" class="px-2 py-2 border-2 mb-2 border-gray-400">
      <select
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option
          v-for="(address, index) in addresses"
          :value="index"
          :selected="index == selected"
          @click="updateSelected(index)"
        >
          {{ address.firstname }}
          {{ address.lastname }} -
          {{ address.street }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addresses: [
        {
          surename: "man",
          firstname: "Jonathan",
          lastname: "Martz",
          street: "Othestrasse 2",
          postcode: "51702",
          country: "Deutschland",
          city: "Bergneustadt",
        },
        {
          surename: "man",
          firstname: "Jonathan",
          lastname: "Martz",
          street: "Eckenhagenerstrasse 34",
          postcode: "51645",
          country: "Deutschland",
          city: "Gummersbach",
        },
      ],
    };
  },
  mounted() {
    const that = this;
    this.$store.commit("checkout-update-selected-address", {
      that: this,
      selected: 0,
    });
    this.$store.commit("checkout-load-selected-address");
    this.$store.commit("checkout-load-saved-address");
  },
  methods: {
    toggleUse: function () {
      this.$store.commit("checkout-toggle-saved-address", {
        that: this,
      });
    },
    updateSelected: function (index) {
      this.$store.commit("checkout-update-selected-address", {
        that: this,
        selected: index,
      });
      this.$store.commit("checkout-update-shipping-address", {
        that: this,
        address: this.addresses[index],
      });
      this.$store.commit("checkout-load-selected-address");
      this.$store.commit("checkout-load-shipping-address");
    },
  },
  computed: {
    selected: function () {
      return this.$store.state.checkout.selected_address;
    },
    use: function () {
      if (this.$store.state.checkout.saved_address) {
        this.$store.commit("checkout-update-shipping-address", {
          that: this,
          address: this.addresses[this.selected],
        });
      } else {
        this.$store.commit("checkout-update-shipping-address", {
          that: this,
          address: {
            surename: "woman",
            firstname: "",
            lastname: "",
            postcode: "",
            city: "",
            country: "",
          },
        });
      }
      return this.$store.state.checkout.saved_address;
    },
  },
};
</script>
