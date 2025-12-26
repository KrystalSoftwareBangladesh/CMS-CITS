<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <section class="mb-10">
    <h2 class="text-lg font-semibold text-gray-900 mb-3">
      {{ title }}
    </h2>

    <p class="text-gray-600 leading-relaxed">
      <slot />
    </p>
  </section>
</template>
