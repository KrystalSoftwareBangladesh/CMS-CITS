<template>
  <section class="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
    <h1 class="text-6xl font-bold text-gray-900">404</h1>

    <p class="mt-4 text-lg text-gray-600">
      Sorry, the page you are looking for doesn’t exist.
    </p>

    <p class="mt-2 text-sm text-gray-500">
      <span class="font-mono">{{ path }}</span> was not found
    </p>

    <div class="mt-6">
      <RouterLink to="/" class="inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-lg
               text-white bg-blue-600 hover:bg-blue-700 transition">
        Go back home
      </RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
defineProps<{
  path: string
}>()
</script>
