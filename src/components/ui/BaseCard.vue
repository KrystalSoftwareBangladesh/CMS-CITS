<script setup lang="ts">
interface Props {
  padding?: 'none' | 'sm' | 'md' | 'lg'
  shadow?: boolean
  border?: boolean
  hoverable?: boolean
}

withDefaults(defineProps<Props>(), {
  padding: 'md',
  shadow: true,
  border: true,
  hoverable: false
})

const paddingClasses = {
  none: '',
  sm: 'p-3',
  md: 'p-4 sm:p-6',
  lg: 'p-6 sm:p-8'
}
</script>

<template>
  <div
    :class="[
      'bg-white dark:bg-gray-800 rounded-lg',
      paddingClasses[padding],
      shadow ? 'shadow-sm' : '',
      border ? 'border border-gray-200 dark:border-gray-700' : '',
      hoverable ? 'transition-shadow hover:shadow-md' : ''
    ]"
  >
    <slot />
  </div>
</template>
