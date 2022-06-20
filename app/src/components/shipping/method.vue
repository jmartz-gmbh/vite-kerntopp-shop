<template>
  <div class="vc-shipping-method">
    <div class="grid grid-cols-6 gap-2">
      <div class="col-span-6 text-center mt-5">
        <h2 class="font-bold text-xl">Click & Collect</h2>
        <div class="card">
          <fa icon="box" class="fa-3x" />
          <p>Einfach selber abholen</p>
          <fa
            icon="circle"
            v-if="shippingMethod == 'clickAndCollect'"
            class="fa-2x"
          />
          <fa
            icon="circle-dot"
            v-else
            class="fa-2x"
            @click="shippingMethod = 'clickAndCollect'"
          />
        </div>
      </div>
      <div class="col-span-6 text-center mt-5">
        <h2 class="font-bold text-xl">DHL</h2>
        <div class="card">
          <fa :icon="['fab', 'dhl']" class="fa-3x" />
          <p>Bequem per Lieferservice</p>
          <fa icon="circle" v-if="shippingMethod == 'dhl'" class="fa-2x" />
          <fa
            icon="circle-dot"
            v-else
            class="fa-2x"
            @click="shippingMethod = 'dhl'"
          />
        </div>
      </div>
      <div class="col-span-6 text-center mt-5">
        <h2 class="font-bold text-xl">DHL Express</h2>
        <div class="card">
          <fa :icon="['fab', 'dhl']" class="fa-3x" />
          <p>Bequem per Lieferservice</p>
          <fa
            icon="circle"
            v-if="shippingMethod == 'dhlExpress'"
            class="fa-2x"
          />
          <fa
            icon="circle-dot"
            v-else
            class="fa-2x"
            @click="shippingMethod = 'dhlExpress'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShippingMethod",
  data() {
    return {
      shippingMethod: "clickAndCollect",
    };
  },
};
</script>
