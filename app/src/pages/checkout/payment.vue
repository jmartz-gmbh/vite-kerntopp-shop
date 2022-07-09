<template>
  <div class="vp-checkout-payment">
    <h2 class="text-xl font-bold">Payment</h2>
    <div class="grid grid-cols-6">
      <div class="col-span-6 md:col-span-3 text-center">
        <fa
          v-if="methodsStore.payment == 'vorkasse'"
          icon="circle-dot"
          class="fa-2x"
        />
        <fa
          v-else
          icon="circle"
          @click="methodsStore.updatePayment('vorkasse')"
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
          v-if="methodsStore.payment == 'paypal'"
          icon="circle-dot"
          class="fa-2x"
        />
        <fa
          v-else
          icon="circle"
          @click="methodsStore.updatePayment('paypal')"
          class="fa-2x"
        />
        <h3>Paypal</h3>
        <div v-if="!paypalInfo" id="paypal-button-container"></div>
        <div v-else class="payment-success">
          Payment Successfull
          {{ paypalInfo }}
        </div>
      </div>
    </div>

    <div class="buttons flex justify-between">
      <button @click="router.go(-1)">back</button>
      <button @click="nextStep()">Nächster Schritt</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useCheckoutMethodsStore } from "@/store/checkout/methods.js";

let router = useRouter();
let methodsStore = useCheckoutMethodsStore();
let paypalInfo = ref(false);

let paypalButtons = function () {
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
            paypalInfo.value = details;
          });
        },
        onCancel: function (data) {
          console.log(data);
        },
        onError: function (error) {
          console.log(error);
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
};
onMounted(function () {
  paypalButtons();
});
let isValid = function () {
  if (
    methodsStore.payment == "vorkasse" ||
    (methodsStore.payment == "paypal" && this.paypalInfo.status == "COMPLETED")
  ) {
    return true;
  }
  return false;
};
let nextStep = function () {
  this.valid = this.isValid();
  if (this.valid) {
    router.push("/checkout/order");
  }
};
</script>
