<!-- App.vue -->
<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBarComponent from "./components/common/NavBarComponent.vue";
import FooterComponent from "./components/common/FooterComponent.vue";
</script>

<template>
  <div id="app" class="min-h-screen flex flex-col">
    <NavBarComponent />
    <main class="flex-1 box-border pt-16 pb-14 overflow-auto">
      <RouterView />
    </main>
    <FooterComponent />
  </div>
</template>

<style scoped></style>
