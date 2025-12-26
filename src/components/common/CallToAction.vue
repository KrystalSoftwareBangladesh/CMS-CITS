<script setup lang="ts">
import { RouterLink } from 'vue-router'

interface Props {
  title?: string
  description?: string
  buttonText?: string
  to?: string
  externalUrl?: string
  variant?: 'default' | 'subtle'
}

withDefaults(defineProps<Props>(), {
  title: 'Ready to grow your business?',
  description: 'Book a free call and let’s discuss how we can help you.',
  buttonText: 'Book a Free Call',
  variant: 'default'
})
</script>

<template>
  <section class="rounded-2xl px-6 py-12 sm:px-12 text-center" :class="variant === 'default'
    ? 'bg-yellow-100'
    : 'bg-gray-50 border border-gray-200'">
    <h2 class="text-2xl sm:text-3xl font-extrabold text-gray-900">
      {{ title }}
    </h2>

    <p v-if="description" class="mt-4 max-w-2xl mx-auto text-gray-600">
      {{ description }}
    </p>

    <div class="mt-8 flex justify-center">
      <!-- Internal Route -->
      <RouterLink v-if="to" :to="to" class="inline-flex items-center justify-center
               px-6 py-3 rounded-full
               bg-yellow-400 hover:bg-yellow-500
               text-sm font-semibold
               transition">
        {{ buttonText }}
      </RouterLink>

      <!-- External Booking -->
      <a v-else-if="externalUrl" :href="externalUrl" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center
               px-6 py-3 rounded-full
               bg-yellow-400 hover:bg-yellow-500
               text-sm font-semibold
               transition">
        {{ buttonText }}
      </a>
    </div>
  </section>
</template>
