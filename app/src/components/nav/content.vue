<template>
  <section
    v-if="nav.open"
    id="nav-content"
    class="block py-2 px-2"
  >
    <div class="grid grid-cols-6 gap-2">
      <div class="col-span-6 ml-auto">
        <div class="mini-cart flex space-x-3">
          <router-link to="/cart"> <fa icon="cart-shopping" /></router-link>
          <span> {{ $store.state.cart.qty }}</span>
          <button
            v-if="$store.state.auth.token != ''"
            @click="$store.commit('user-logout', { that: this })"
          >
            <fa icon="right-from-bracket" />
          </button>
        </div>
      </div>
      <div class="col-span-3 md:col-span-2">
        <button
          @click="$router.push('/')"
          class="bg-white border border-blue-400 px-2 py-2 w-full"
        >
          Home
        </button>
      </div>
      <div class="col-span-3 md:col-span-2">
        <button
          @click="$router.push('/impressum')"
          class="bg-white border border-blue-400 px-2 py-2 w-full"
        >
          Impressum
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useNavStore } from '../../store/nav';

let nav = useNavStore();
</script>
