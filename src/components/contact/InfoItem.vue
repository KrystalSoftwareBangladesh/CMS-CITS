<template>
  <div class="flex gap-4 items-start">
    <span class="text-2xl">{{ icon }}</span>
    <div>
      <p class="font-medium text-gray-900">{{ title }}</p>
      <p class="text-sm text-gray-600">{{ value }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  value: string
}>()
</script>
