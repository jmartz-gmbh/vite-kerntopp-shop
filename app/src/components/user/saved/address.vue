<template>
  <div class="vc-user-saved-address mx-2 my-2">
    Wähle eine Adresse von deinem Konto:
    <input type="checkbox" v-model="use" />
    <div v-if="use" class="more">
      <select
        v-model="selected"
        @change="update()"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option v-for="(address, index) in addresses" :value="index">
          {{ address.firstname + " " + address.lastname }}
          -
          {{ address.street }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserSavedAddress",
  data() {
    return {
      use: false,
      selected: 0,
      addresses: [
        {
          surename: "man",
          firstname: "Jonathan",
          lastname: "Martz",
          street: "Othestrasse 2",
          postcode: "51702",
          city: "Bergneustadt",
          country: "Deutschland",
        },
        {
          surename: "man",
          firstname: "Jonathan",
          lastname: "Martz",
          street: "Eckenhagenerstrasse 34",
          postcode: "51645",
          city: "Gummersbach",
          country: "Deutschland",
        },
      ],
    };
  },
  watch: {
    use: function (value) {
      if (value) {
        this.$store.commit("checkout-update-shipping-address", {
          that: this,
          address: this.addresses[this.selected],
        });
        this.$store.commit("checkout-load-shipping-address");
      } else {
        this.$store.commit("checkout-update-shipping-address", {
          that: this,
          address: {
            surename: "woman",
            firstname: "",
            lastname: "",
            street: "",
            postcode: "",
            city: "",
            country: "",
          },
        });
        this.$store.commit("checkout-load-shipping-address");
      }
    },
  },
  mounted() {
    this.load();
  },
  methods: {
    update: function () {
      this.$store.commit("checkout-update-shipping-address", {
        that: this,
        address: this.addresses[this.selected],
      });
      this.$store.commit("checkout-load-shipping-address");
    },
    load: function () {
      const that = this;
      // fetch("https://auth.kerntopp.shop/api/user/addresses")
      //   .then((response) => {
      //     return response.json();
      //   })
      //   .then((json) => {
      //     console.log(json);
      //   });
    },
  },
};
</script>
