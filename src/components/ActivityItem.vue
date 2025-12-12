<template>
  <div class="p-4 hover:bg-gray-50 transition cursor-pointer">
    <div class="flex items-start justify-between">
      <div>
        <h3 class="font-medium text-gray-900">{{ title }}</h3>
        <p class="text-sm text-gray-600 mt-1">By {{ author }} • {{ date }}</p>
      </div>
      <span :class="status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'"
        class="px-2 py-1 text-xs font-medium rounded-full">
        {{ status }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  author: string
  date: string
  status: 'Published' | 'Draft'
}

defineProps<Props>()
</script>
