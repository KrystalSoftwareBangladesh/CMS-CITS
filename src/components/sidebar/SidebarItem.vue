<template>
  <li>
    <a :href="to" :class="active ? 'bg-blue-600' : 'hover:bg-gray-800'"
      class="flex items-center space-x-3 px-4 py-3 rounded-lg transition" @click.prevent="handleClick">
      <span class="text-xl">{{ icon }}</span>
      <span class="font-medium">{{ label }}</span>
    </a>
  </li>
</template>

<script setup lang="ts">
interface Props {
  icon: string
  label: string
  to: string
  active?: boolean
}

const props = defineProps<Props>()

const handleClick = (): void => {
  console.log('Navigate to:', props.to)
  // Handle navigation with Vue Router
}
</script>
