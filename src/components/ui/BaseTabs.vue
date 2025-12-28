<script setup lang="ts">
import type { TabItem } from '@/types/admin'

interface Props {
  modelValue: string
  tabs: TabItem[]
  variant?: 'underline' | 'pills'
}

withDefaults(defineProps<Props>(), {
  variant: 'underline'
})

defineEmits<{
  'update:modelValue': [id: string]
}>()
</script>

<template>
  <div>
    <div
      :class="[
        variant === 'underline' ? 'border-b border-gray-200' : ''
      ]"
    >
      <nav
        :class="[
          'flex gap-1',
          variant === 'underline' ? '-mb-px' : ''
        ]"
      >
        <button
          v-for="tab in tabs"
          :key="tab.id"
          type="button"
          :class="[
            'flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors',
            variant === 'underline'
              ? [
                  'border-b-2',
                  modelValue === tab.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                ]
              : [
                  'rounded-lg',
                  modelValue === tab.id
                    ? 'bg-primary text-white'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                ]
          ]"
          @click="$emit('update:modelValue', tab.id)"
        >
          {{ tab.label }}
        </button>
      </nav>
    </div>
    <div class="mt-4">
      <slot :active-tab="modelValue" />
    </div>
  </div>
</template>
