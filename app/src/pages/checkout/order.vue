<template>
  <div class="vp-checkout-order">
    <h2 class="font-bold text-xl mb-2">Order</h2>
    <p>{{ shipping }}</p>
    <p>{{ shippingMethod }}</p>
    <div v-if="shippingMethod == 'clickAndCollect'">
      <p>{{ pickup_store }}</p>
      <p>{{ personal_info }}</p>
    </div>
    <div v-else-if="shippingMethod == 'dhl' || shippingMethod == 'dhlExpress'">
      <p>{{ shippingAndBillingSame }}</p>
      <p>{{ billing }}</p>
    </div>
    <p>{{ paymentMethod }}</p>
    <p>{{ cart }}</p>
    <div class="buttons flex justify-between">
      <button>back</button>
      <button @click="saveOrder()">save Order</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckoutOrder",
  mounted() {
    this.$store.commit("checkout-load-shipping-address");
    this.$store.commit("checkout-load-billing-address");
    this.$store.commit("checkout-load-payment-method");
    this.$store.commit("checkout-load-shipping-method");
    this.$store.commit("checkout-load-personal-info");
    this.$store.commit("checkout-load-pickup-store");
  },
  methods: {
    isValid: function () {
      if (this.paymentMethod == "vorkasse") {
        return true;
      } else if (this.paymentMethod == "paypal") {
        return true;
      }
      return false;
    },
    saveOrder: function () {
      const that = this;
      this.valid = this.isValid();
      console.log(this.valid);
      if (this.valid) {
        fetch("https://auth.kerntopp.shop/api/order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token: this.$store.state.auth.token,
            shipping: this.shipping,
            shippingMethod: this.shippingMethod,
            shippingAndBillingSame: this.shippingAndBillingSame,
            billing: this.billing,
            pickup_store: this.pickup_store,
            personal_info: this.personal_info,
            paymentMethod: this.paymentMethod,
            cart: this.cart,
          }),
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (json) {
            console.log(json);
            if (json.id) {
              that.$router.push("/checkout/thanks/");
              that.$store.commit("cart-destroy", { that: that });
            }
          });
      }
    },
  },
  computed: {
    shipping: function () {
      return this.$store.state.checkout.shipping;
    },
    shippingMethod: function () {
      return this.$store.state.checkout.shippingMethod;
    },
    billing: function () {
      return this.$store.state.checkout.billing;
    },
    pickup_store: function () {
      return this.$store.state.checkout.pickup_store;
    },
    personal_info: function () {
      return this.$store.state.checkout.personal_info;
    },
    paymentMethod: function () {
      return this.$store.state.checkout.paymentMethod;
    },
    cart: function () {
      return this.$store.state.cart.items;
    },
    shippingAndBillingSame: function () {
      return this.$store.state.checkout.shippingAndBillingSame;
    },
  },
};
</script>
