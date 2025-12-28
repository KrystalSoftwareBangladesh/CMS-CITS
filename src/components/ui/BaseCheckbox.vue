<script setup lang="ts">
interface Props {
  modelValue?: boolean
  label?: string
  disabled?: boolean
  id?: string
}

withDefaults(defineProps<Props>(), {
  modelValue: false,
  disabled: false
})

defineEmits<{
  'update:modelValue': [value: boolean]
}>()
</script>

<template>
  <label
    :class="[
      'inline-flex items-center gap-2 cursor-pointer',
      disabled ? 'opacity-50 cursor-not-allowed' : ''
    ]"
  >
    <input
      :id="id"
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      class="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2 focus:ring-offset-0"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    />
    <span v-if="label" class="text-sm text-gray-700">{{ label }}</span>
    <slot />
  </label>
</template>
