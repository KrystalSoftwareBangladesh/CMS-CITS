<!-- App.vue -->
<script setup lang="ts">
import { computed } from "vue";
import { RouterView, useRoute } from "vue-router";
import TopNavBarComponent from "./components/common/TopNavBarComponent.vue";
import FooterComponent from "./components/common/FooterComponent.vue";

const route = useRoute();

const isAdminRoute = computed(() => route.path.startsWith('/admin'));
</script>

<template>
  <div id="app" class="min-h-screen flex flex-col">
    <template v-if="isAdminRoute">
      <RouterView />
    </template>
    <template v-else>
      <TopNavBarComponent />
      <div class="pt-24">
        <main class="flex-1 box-border pb-14 overflow-auto">
          <RouterView />
        </main>
      </div>
      <FooterComponent />
    </template>
  </div>
</template>

<style scoped></style>
