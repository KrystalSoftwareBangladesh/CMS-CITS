<script setup lang="ts">
interface Props {
  modelValue?: string | number
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'
  label?: string
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  error?: string
  hint?: string
  required?: boolean
  id?: string
}

withDefaults(defineProps<Props>(), {
  modelValue: '',
  type: 'text',
  disabled: false,
  readonly: false,
  required: false
})

defineEmits<{
  'update:modelValue': [value: string | number]
}>()
</script>

<template>
  <div class="w-full">
    <label
      v-if="label"
      :for="id"
      class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
    >
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :required="required"
      :class="[
        'block w-full px-3 py-2 border rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors duration-200',
        'focus:outline-none focus:ring-2 focus:ring-offset-0 dark:focus:ring-offset-gray-800',
        error
          ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50'
          : 'border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary/50',
        disabled ? 'bg-gray-100 dark:bg-gray-700 cursor-not-allowed' : 'bg-white dark:bg-gray-800'
      ]"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <p v-if="error" class="mt-1 text-sm text-red-500">{{ error }}</p>
    <p v-else-if="hint" class="mt-1 text-sm text-gray-500 dark:text-gray-400">{{ hint }}</p>
  </div>
</template>
