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
<script>
import header from "./components/header.vue";
import footer from "./components/footer.vue";
import breadcrumb from "./components/breadcrumb.vue";
import messages from "./components/messages.vue";
import navContent from "./components/nav/content.vue";

import "./tailwind.css";
export default {
  name: "App",
  components: {
    "header-general": header,
    "footer-general": footer,
    breadcrumb,
    messages,
    navContent,
  },
  watch: {
    $route: function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
  mounted() {
    this.$store.commit("cart-items-load");
    this.$store.commit("auth-token-load");
    this.$store.commit("messages-add", {
        status: "warning",
        message: "Dies ist keine offizielle Webseite der Kerntopp Autoteile GmbH !!!",
      });
  },
};
</script>

<style lang="less">
.app {
  background: linear-gradient(-45deg, red, orange);
  background-size: auto;
}
</style>
