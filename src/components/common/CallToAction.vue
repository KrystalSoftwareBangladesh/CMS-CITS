<script setup lang="ts">
import { RouterLink } from 'vue-router'

interface Props {
  title?: string
  description?: string
  buttonText?: string
  to?: string
  externalUrl?: string
  variant?: 'default' | 'subtle' | 'gradient'
}

withDefaults(defineProps<Props>(), {
  title: 'Ready to grow your business?',
  description: "Book a free call and let's discuss how we can help you.",
  buttonText: 'Book a Free Call',
  variant: 'default'
})
</script>

<template>
  <section class="rounded-2xl px-6 py-12 sm:px-12 text-center" :class="{
    'bg-yellow-100 dark:bg-yellow-900/30': variant === 'default',
    'bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700': variant === 'subtle',
    'bg-gradient-to-r from-primary to-blue-600': variant === 'gradient'
  }">
    <h2 class="text-2xl sm:text-3xl font-extrabold" :class="variant === 'gradient' ? 'text-white' : 'text-gray-900 dark:text-white'">
      {{ title }}
    </h2>

    <p v-if="description" class="mt-4 max-w-2xl mx-auto" :class="variant === 'gradient' ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'">
      {{ description }}
    </p>

    <div class="mt-8 flex justify-center">
      <RouterLink v-if="to" :to="to" :class="variant === 'gradient'
        ? 'bg-white text-primary hover:bg-gray-100'
        : 'bg-primary hover:bg-primary-hover text-white'"
        class="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold transition">
        {{ buttonText }}
      </RouterLink>

      <a v-else-if="externalUrl" :href="externalUrl" target="_blank" rel="noopener noreferrer" :class="variant === 'gradient'
        ? 'bg-white text-primary hover:bg-gray-100'
        : 'bg-primary hover:bg-primary-hover text-white'"
        class="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold transition">
        {{ buttonText }}
      </a>
    </div>
  </section>
</template>
