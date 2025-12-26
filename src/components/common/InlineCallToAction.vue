<script setup lang="ts">
import { RouterLink } from 'vue-router'

interface Props {
  title?: string
  description?: string
  buttonText?: string
  to?: string
  externalUrl?: string
}

withDefaults(defineProps<Props>(), {
  title: "Let’s Work Together",
  description: "Ready to grow your brand with high-quality visuals?",
  buttonText: "Book a Free Call"
})
</script>

<template>
  <section class="py-16 text-center">
    <h3 class="text-lg font-semibold text-gray-900">
      {{ title }}
    </h3>

    <p class="mt-2 text-sm text-gray-600">
      {{ description }}
    </p>

    <div class="mt-6">
      <!-- Internal -->
      <RouterLink v-if="to" :to="to" class="inline-flex items-center justify-center
               px-6 py-2.5 rounded-full
               bg-yellow-400 hover:bg-yellow-500
               text-sm font-semibold transition">
        {{ buttonText }}
      </RouterLink>

      <!-- External -->
      <a v-else-if="externalUrl" :href="externalUrl" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center
               px-6 py-2.5 rounded-full
               bg-yellow-400 hover:bg-yellow-500
               text-sm font-semibold transition">
        {{ buttonText }}
      </a>
    </div>
  </section>
</template>
