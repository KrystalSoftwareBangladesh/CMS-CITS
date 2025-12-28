<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  currentPage: number
  totalPages: number
  totalItems?: number
  perPage?: number
  showInfo?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showInfo: true,
  perPage: 10
})

const emit = defineEmits<{
  'update:currentPage': [page: number]
}>()

const pages = computed(() => {
  const result: (number | string)[] = []
  const total = props.totalPages
  const current = props.currentPage

  if (total <= 7) {
    for (let i = 1; i <= total; i++) {
      result.push(i)
    }
  } else {
    result.push(1)

    if (current > 3) {
      result.push('...')
    }

    const start = Math.max(2, current - 1)
    const end = Math.min(total - 1, current + 1)

    for (let i = start; i <= end; i++) {
      result.push(i)
    }

    if (current < total - 2) {
      result.push('...')
    }

    result.push(total)
  }

  return result
})

function goToPage(page: number) {
  if (page >= 1 && page <= props.totalPages) {
    emit('update:currentPage', page)
  }
}
</script>

<template>
  <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
    <div v-if="showInfo && totalItems" class="text-sm text-gray-500">
      Showing {{ (currentPage - 1) * perPage + 1 }} to {{ Math.min(currentPage * perPage, totalItems) }} of {{ totalItems }} results
    </div>
    <nav class="flex items-center gap-1">
      <button
        type="button"
        :disabled="currentPage === 1"
        class="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        @click="goToPage(currentPage - 1)"
      >
        Previous
      </button>
      <template v-for="page in pages" :key="page">
        <span
          v-if="page === '...'"
          class="px-3 py-2 text-sm text-gray-500"
        >
          ...
        </span>
        <button
          v-else
          type="button"
          :class="[
            'px-3 py-2 text-sm font-medium rounded-lg',
            page === currentPage
              ? 'bg-primary text-white'
              : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
          ]"
          @click="goToPage(page as number)"
        >
          {{ page }}
        </button>
      </template>
      <button
        type="button"
        :disabled="currentPage === totalPages"
        class="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        @click="goToPage(currentPage + 1)"
      >
        Next
      </button>
    </nav>
  </div>
</template>
