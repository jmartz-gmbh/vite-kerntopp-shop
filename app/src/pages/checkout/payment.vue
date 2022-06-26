<template>
  <div class="vp-checkout-payment">
    <h2 class="text-xl font-bold">Payment</h2>
    <div v-for="(payment, index) in payments" class="grid grid-cols-6 mt-5">
      <div class="col-span-6 md:col-span-4">
        <h2 class="font-bold text-lg">{{ payment.name }}</h2>
        <p>{{ payment.desc }}</p>
      </div>
      <div class="card col-span-6 md:col-span-2 text-center">
        <fa :icon="payment.icon" class="fa-3x block mx-auto mb-3" />
        <fa icon="circle" v-if="selected == payment.selector" class="fa-2x" />
        <fa
          icon="circle-dot"
          v-else
          class="fa-2x"
          @click="selected = payment.selector"
        />
      </div>
    </div>
    <div class="buttons flex justify-between">
      <button @click="$router.go(-1)">back</button>
      <button @click="$router.push('/checkout/order')">Nächster Schritt</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckoutPayment",
  data() {
    return {
      selected: "vorkasse",
      payments: [
        {
          name: "Vorkasse",
          icon: ["fa", "money-bill"],
          selector: "vorkasse",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, distinctio! Sequi tempore eius voluptates accusantium culpa tenetur pariatur necessitatibus animi exercitationem saepe, atque laudantium, quasi ad in dolore reiciendis officia.",
        },
        {
          name: "Paypal",
          icon: ["fab", "paypal"],
          selector: "paypal",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, distinctio! Sequi tempore eius voluptates accusantium culpa tenetur pariatur necessitatibus animi exercitationem saepe, atque laudantium, quasi ad in dolore reiciendis officia.",
        },
      ],
    };
  },
};
</script>
