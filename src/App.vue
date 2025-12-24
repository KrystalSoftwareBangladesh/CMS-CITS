<!-- App.vue -->
<script setup lang="ts">
import { RouterView } from "vue-router";
import TopNavBarComponent from "./components/common/TopNavBarComponent.vue";
import FooterComponent from "./components/common/FooterComponent.vue";
</script>

<template>
  <div id="app" class="min-h-screen flex flex-col">
    <TopNavBarComponent />
    <div class="pt-24">
      <!-- Main Content -->
      <main class="flex-1 box-border pb-14 overflow-auto">
        <RouterView />
      </main>
    </div>
    <FooterComponent />
  </div>
</template>

<style scoped></style>
