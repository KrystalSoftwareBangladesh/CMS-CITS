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
      'inline-flex items-center gap-3 cursor-pointer',
      disabled ? 'opacity-50 cursor-not-allowed' : ''
    ]"
  >
    <button
      :id="id"
      type="button"
      role="switch"
      :aria-checked="modelValue"
      :disabled="disabled"
      :class="[
        'relative inline-flex h-6 w-11 flex-shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
        modelValue ? 'bg-primary' : 'bg-gray-200'
      ]"
      @click="$emit('update:modelValue', !modelValue)"
    >
      <span
        :class="[
          'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
          modelValue ? 'translate-x-5' : 'translate-x-0'
        ]"
      />
    </button>
    <span v-if="label" class="text-sm text-gray-700">{{ label }}</span>
    <slot />
  </label>
</template>
