<template>
  <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
    <div class="mb-4">
      <slot name="icon" />
    </div>

    <h3 class="text-lg font-semibold text-gray-900">
      {{ title }}
    </h3>

    <p class="mt-2 text-sm text-gray-600">
      {{ description }}
    </p>

    <div v-if="features?.length" class="mt-4">
      <ul class="space-y-2 text-sm text-gray-600">
        <li v-for="(feature, index) in features" :key="index" class="flex items-start gap-2">
          <span class="text-blue-600 mt-1">•</span>
          <span>{{ feature }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  features?: string[]
}>()
</script>
