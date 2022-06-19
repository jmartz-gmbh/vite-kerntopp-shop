<template>
  <div class="vc-header flex justify-between mt-2">
    <span
      ><router-link to="/" class="font-bold text-white text-xl ml-2"
        >www.kerntopp.shop</router-link
      ></span
    >
    <nav class="mt-2">
      <ul>
        <li>Test</li>
      </ul>
      <div class="mini-cart">
        <router-link to="/cart"> <fa icon="cart-shopping" /></router-link>
        {{ $store.state.cart.qty }}
      </div>
    </nav>
  </div>
</template>
