<template>
  <div class="vc-header flex justify-between mt-2">
    <span
      ><router-link to="/" class="font-bold text-white text-xl ml-2"
        >kerntopp.shop</router-link
      ></span
    >
    <nav class="mt-2 flex">
      <ul class="hidden md:flex space-x-3 text-white mr-2">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li><router-link to="/impressum">Impressum</router-link></li>
      </ul>
      <router-link to="/cart" class="ml-2"> <fa icon="cart-shopping" /></router-link>
      <button>
        <fa icon="bars" class="ml-2 block md:hidden" @click="$store.commit('nav-toggle')" />
      </button>
    </nav>
  </div>
</template>
