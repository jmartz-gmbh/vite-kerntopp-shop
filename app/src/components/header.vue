<template>
  <div class="vc-header flex justify-between mt-2">
    <span
      ><router-link to="/" class="font-bold text-white text-xl ml-2"
        >kerntopp.shop</router-link
      ></span
    >
    <nav class="mt-2 flex">
      <ul class="hidden md:flex space-x-3 text-white mr-2">
        <li><router-link to="/impressum">Impressum</router-link></li>
      </ul>
      <router-link to="/cart" class="ml-2">
        <fa icon="cart-shopping"
      /></router-link>
      <button v-if="authStore.token != ''" @click="logout()">
      <fa icon="arrow-right-from-bracket" class="ml-2"/>
      </button>
      <button>
        <fa icon="bars" class="ml-2 block md:hidden" @click="nav.toggle()" />
      </button>
    </nav>
  </div>
</template>

<script setup>
import { useNavStore } from "../store/nav";
import { useAuthStore } from "../store/auth";
import { useCartStore } from "../store/cart";

let nav = useNavStore();
let authStore = useAuthStore();
let cartStore = useCartStore();

let logout = function(){
  authStore.logout();
  cartStore.destroy();
}
</script>
