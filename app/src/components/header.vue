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
      <div class="mini-cart flex space-x-3">
        <router-link to="/cart"> <fa icon="cart-shopping" /></router-link>
        <span> {{ $store.state.cart.qty }}</span>
        <button v-if="$store.state.auth.token != ''"  @click="$store.commit('user-logout', { that: this })">
          <fa icon="right-from-bracket" />
        </button>
      </div>
    </nav>
  </div>
</template>
