<script setup lang="ts">
defineProps<{
  name: string
  role: string
  avatar: string
}>()
</script>

<template>
  <div class="bg-white rounded-xl p-6 border border-gray-200 text-center">
    <img :src="avatar" alt="Team member" class="w-20 h-20 rounded-full mx-auto" />

    <h3 class="mt-4 font-semibold text-gray-900">
      {{ name }}
    </h3>

    <p class="text-sm text-gray-500">
      {{ role }}
    </p>
  </div>
</template>
