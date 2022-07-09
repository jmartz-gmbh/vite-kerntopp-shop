<template>
  <div class="vc-breadcrumbs">
    <div
      class="border border-black bg-gray-600 text-white px-2 py-2 block items mb-2"
    >
      <router-link
        :to="item.link"
        class="item mr-2"
        v-for="(item, index) in store.items"
        >{{ item.label }}</router-link
      >
    </div>
  </div>
</template>
<script setup>
import { useBreadcrumbStore } from "@/store/breadcrumb.js";
import { watch } from "vue";
import { useRoute } from "vue-router";

let store = useBreadcrumbStore();
let route = useRoute();

watch(route, function (value) {
  store.$reset();
  store.add({ link: "/", label: "Home" });
});
</script>

<style lang="less">
.items {
  .item:before {
    content: ">";
    padding-right: 5px;
  }
  .item:first-child:before {
    content: "";
    padding-right: 0;
  }
}
</style>
