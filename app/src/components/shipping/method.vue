<template>
  <div class="vc-shipping-method">
    <div class="grid grid-cols-6 gap-2">
      <div class="col-span-6 text-center mt-5">
        <h2 class="font-bold text-xl">Click & Collect</h2>
        <h3 class="text-sm">0€</h3>
        <div class="card">
          <fa icon="box" class="fa-3x" />
          <p>Einfach selber abholen</p>
          <fa
            icon="circle"
            v-if="shipping == 'clickAndCollect'"
            class="fa-2x"
          />
          <fa
            icon="circle-dot"
            v-else
            class="fa-2x"
            @click="store.updateShipping('clickAndCollect')"
          />
        </div>
      </div>
      <div class="col-span-6 text-center mt-5">
        <h2 class="font-bold text-xl">DHL</h2>
        <h3 class="text-sm">5€</h3>
        <div class="card">
          <fa :icon="['fab', 'dhl']" class="fa-3x" />
          <p>Bequem per Lieferservice</p>
          <fa icon="circle" v-if="shipping == 'dhl'" class="fa-2x" />
          <fa
            icon="circle-dot"
            v-else
            class="fa-2x"
            @click="store.updateShipping('dhl')"
          />
        </div>
      </div>
      <div class="col-span-6 text-center mt-5">
        <h2 class="font-bold text-xl">DHL Express</h2>
        <h3 class="text-sm">10€</h3>
        <div class="card">
          <fa :icon="['fab', 'dhl']" class="fa-3x" />
          <p>Bequem per Lieferservice</p>
          <fa
            icon="circle"
            v-if="shipping == 'dhlExpress'"
            class="fa-2x"
          />
          <fa
            icon="circle-dot"
            v-else
            class="fa-2x"
            @click="store.updateShipping('dhlExpress')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCheckoutMethodsStore } from "@/store/checkout/methods";
import { storeToRefs } from "pinia";

let store = useCheckoutMethodsStore();
store.reload();
const { shipping } = storeToRefs(store);
</script>
