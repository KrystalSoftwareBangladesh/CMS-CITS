<template>
  <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
    <div class="flex items-center justify-between mb-4">
      <span class="text-3xl">{{ icon }}</span>
      <span :class="trend === 'up' ? 'text-green-600' : 'text-red-600'" class="text-sm font-medium">
        {{ change }}
      </span>
    </div>
    <h3 class="text-gray-600 text-sm font-medium">{{ title }}</h3>
    <p class="text-2xl font-bold text-gray-900 mt-1">{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  value: string
  change: string
  trend: 'up' | 'down'
  icon: string
}

defineProps<Props>()
</script>
