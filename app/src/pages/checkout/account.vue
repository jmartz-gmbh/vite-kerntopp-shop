<template>
  <div class="vp-checkout-account">
    <div class="grid grid-cols-6">
      <div class="col-span-6 md:col-span-2">
        <h2>Login</h2>
        <div class="form login">
          <div class="form-group">
            <label>Username</label>
            <input type="text" v-model="form.login.username" />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" v-model="form.login.password" />
          </div>
          <div class="form-group"><button @click="login()">Login</button></div>
        </div>
      </div>
      <div class="col-span-6 md:col-span-2">
        <h2>Register</h2>
        <div class="form register">
          <div class="form-group">
            <label>Username</label>
            <input type="text" v-model="form.register.username" />
          </div>
          <div class="form-group">
            <label>email</label>
            <input type="email" v-model="form.register.email" />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" v-model="form.register.password" />
          </div>
          <div class="form-group">
            <button @click="register()">Register</button>
          </div>
        </div>
      </div>
      <div class="col-span-6 md:col-span-2">
        <h2>Guest Order</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";

import { useAuthStore } from "@/store/auth.js";
import { useCartStore } from "@/store/cart.js";
import { useRouter } from "vue-router";

let authStore = useAuthStore();
let cartStore = useCartStore();
let router = useRouter();

let form = reactive({
  register: {
    username: "",
    email: "",
    password: "",
  },
  login: {
    username: "",
    password: "",
  },
});

let register = function () {
  const that = this;
  fetch("https://auth.kerntopp.shop/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: that.form.register.email,
      password: that.form.register.password,
      username: that.form.register.username,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      that.$router.go();
    });
};
let login = function () {
  const that = this;
  fetch("https://auth.kerntopp.shop/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: that.form.login.username,
      password: that.form.login.password,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      if (json.token) {
        authStore.update(json.token);
        router.go();
      }
    });
};

onMounted(function () {
  authStore.refresh();
  if (authStore.token != null && authStore.token != "") {
    router.push("/checkout/shipping");
  }
  if (cartStore.items.length <= 0) {
    router.push("/");
  }
});
</script>
