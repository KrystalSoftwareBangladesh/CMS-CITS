<script setup lang="ts">
defineProps<{
  title: string
  location: string
  type: string
  description: string
}>()
</script>

<template>
  <div class="bg-white rounded-xl p-6
           border border-gray-200
           hover:border-gray-300 transition">
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h3 class="text-lg font-semibold text-gray-900">
          {{ title }}
        </h3>

        <p class="mt-1 text-sm text-gray-500">
          {{ location }} · {{ type }}
        </p>
      </div>

      <RouterLink to="/contact" class="inline-flex items-center justify-center
               px-5 py-2 rounded-full
               bg-gray-100 hover:bg-gray-200
               text-sm font-medium transition">
        Apply Now
      </RouterLink>
    </div>

    <p class="mt-4 text-sm text-gray-600">
      {{ description }}
    </p>
  </div>
</template>
