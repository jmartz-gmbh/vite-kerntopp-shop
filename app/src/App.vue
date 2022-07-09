<template>
  <div class="app">
    <header class="mx-auto max-w-5xl px-2 py-2">
      <header-general></header-general>
    </header>
    <nav-content class="mx-auto max-w-5xl my-3"></nav-content>
    <main class="mx-auto max-w-5xl bg-white px-2 py-2 mt-2 min-h-screen">
      <breadcrumb></breadcrumb>
      <messages></messages>
      <router-view></router-view>
    </main>
    <footer class="mx-auto max-w-5xl px-2 py-2 mt-2">
      <footer-general></footer-general>
    </footer>
  </div>
</template>
<script setup>
import { onMounted, watch } from "vue";
import headerGeneral from "./components/header.vue";
import footerGeneral from "./components/footer.vue";
import breadcrumb from "./components/breadcrumb.vue";
import messages from "./components/messages.vue";
import navContent from "./components/nav/content.vue";
import "./tailwind.css";
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "@/store/auth.js";
import { useMessagesStore } from "./store/messages";

let router = useRouter();
let route = useRoute();
let authStore = useAuthStore();
let messageStore = useMessagesStore();

watch(
  () => route,
  () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    messageStore.$reset();
  }
);
onMounted(function () {
  messageStore.add({
    status: "warning",
    message:
      "Dies ist keine offizielle Webseite der Kerntopp Autoteile GmbH !!!",
  });
  authStore.refresh();
});
</script>

<style lang="less">
.app {
  background: linear-gradient(-45deg, red, orange);
  background-size: auto;
}
</style>
