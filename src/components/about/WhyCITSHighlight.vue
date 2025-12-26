<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  title?: string
  description?: string
}>()
</script>

<template>
  <section class="mt-20 bg-gray-50 rounded-2xl
           px-8 py-12 text-center">
    <h3 class="text-2xl font-bold text-gray-900">
      {{ title ?? 'Why Choose CITS?' }}
    </h3>

    <p class="mt-4 max-w-3xl mx-auto text-gray-600">
      {{ description ??
        'Discover what sets Catalyst IT Solutions apart — our values, our approach, and why clients trust us as a long - term technology partner.'
      }}
    </p>

    <RouterLink to="/why-cits" class="inline-flex items-center justify-center
             mt-6 px-6 py-3 rounded-full
             bg-gray-100 hover:bg-gray-200
             text-sm font-medium text-gray-900 transition">
      Learn Why CITS
      <span class="ml-2">→</span>
    </RouterLink>
  </section>
</template>
