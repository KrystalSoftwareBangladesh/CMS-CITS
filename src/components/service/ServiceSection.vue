<template>
  <section class="py-16">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-gray-900">
        {{ title }}
      </h2>
      <p class="mt-3 text-gray-600 max-w-2xl mx-auto">
        {{ subtitle }}
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>
