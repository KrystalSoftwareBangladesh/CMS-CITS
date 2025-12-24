<template>
  <div>
    <label class="block text-sm font-medium text-gray-700">
      {{ label }}
    </label>

    <textarea :value="modelValue" @input="onInput" rows="4" :required="required" class="mt-1 w-full rounded-lg border-gray-300
             focus:ring-yellow-400 focus:border-yellow-400" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string
  modelValue: string
  required?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const onInput = (event: Event) => {
  emit(
    'update:modelValue',
    (event.target as HTMLTextAreaElement).value
  )
}
</script>
