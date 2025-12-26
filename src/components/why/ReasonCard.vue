<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <div class="bg-white rounded-xl p-6
           border border-gray-200
           hover:border-gray-300 transition">
    <h3 class="text-lg font-semibold text-gray-900">
      {{ title }}
    </h3>

    <p class="mt-2 text-sm text-gray-600 leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>
