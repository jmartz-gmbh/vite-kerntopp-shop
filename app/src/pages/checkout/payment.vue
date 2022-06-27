<template>
  <div class="vp-checkout-payment">
    <h2 class="text-xl font-bold">Payment</h2>
    <div class="grid grid-cols-6">
      <div class="col-span-6 md:col-span-3 text-center">
        <fa
          v-if="$store.state.checkout.paymentMethod == 'vorkasse'"
          icon="circle-dot"
          class="fa-2x"
        />
        <fa
          v-else
          icon="circle"
          @click="
            $store.commit('checkout-update-payment-method', {
              that: this,
              selected: 'vorkasse',
            })
          "
          class="fa-2x"
        />

        <fa icon="money-bill" class="fa-4x mx-auto block" />
        <h3>Vorkasse</h3>
        <p>
          Einfach bequem Überweisen <br />
          Es kann einige Tage dauern bis die Überweisung bei uns eingegangen ist
          und bearbeitet wurde. <br />
          Versand erfolgt nach eingang der Zahlung.
        </p>
        <p class="mt-5">
          Empfänger: Jmartz GmbH <br />
          IBAN: <span class="font-bold">DE98 3845 0000 1000 1820 95</span>
          <br />
          Verwendungszweck: Bestellung XYZ
        </p>
      </div>
      <div class="col-span-6 md:col-span-3">
        <fa
          v-if="$store.state.checkout.paymentMethod == 'paypal'"
          icon="circle-dot"
          class="fa-2x"
        />
        <fa
          v-else
          icon="circle"
          @click="
            $store.commit('checkout-update-payment-method', {
              that: this,
              selected: 'paypal',
            })
          "
          class="fa-2x"
        />
        <h3>Paypal</h3>
        <div v-if="!paypal" id="paypal-button-container"></div>
        <div v-else class="payment-success">
          Payment Successfull
          {{ paypal }}
        </div>
      </div>
    </div>

    <div class="buttons flex justify-between">
      <button @click="$router.go(-1)">back</button>
      <button @click="nextStep()">Nächster Schritt</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckoutPayment",
  data() {
    return {
      selected: "vorkasse",
      paypal: false,
    };
  },
  mounted() {
    this.$store.commit("checkout-load-payment-method");
    if (!this.paypal) {
      this.paypalButtons();
    }
  },
  methods: {
    paypalButtons: function () {
      var my_awesome_script = document.createElement("script");
      my_awesome_script.setAttribute(
        "src",
        "https://www.paypal.com/sdk/js?client-id=AVFKm7WX51F145XALYATQFbCucq4MhQQFuOPOuwL8MRRg_xFaosAvp05kfSHvFLQbBQ000l-c_aPit2S&components=buttons&currency=EUR"
      );

      document.head.appendChild(my_awesome_script);
      const that = this;
      setTimeout(function () {
        paypal
          .Buttons({
            onApprove: function (data, actions) {
              return actions.order.capture().then(function (details) {
                that.paypal = details;
                console.log(details);
              });
            },
            onCancel: function (data) {
              that.cancled = true;
            },
            onError: function (error) {
              that.error = true;
            },
            createOrder: function (data, actions) {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: "1",
                    },
                  },
                ],
                application_context: {
                  shipping_preference: "NO_SHIPPING",
                },
              });
            },
          })
          .render("#paypal-button-container");
      }, 2000);
    },
    isValid: function () {
      if (this.paymentMethod == 'vorkasse' || this.paymentMethod == 'paypal' && this.paypal.status == 'COMPLETED') {
        return true;
      }
      return false;
    },
    nextStep: function () {
      this.valid = this.isValid();
      if (this.valid) {
        this.$router.push("/checkout/order");
      }
    },
  },
  computed: {
    paymentMethod: function () {
      return this.$store.state.checkout.paymentMethod;
    },
  },
};
</script>
