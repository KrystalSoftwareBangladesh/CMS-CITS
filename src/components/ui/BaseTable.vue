<script setup lang="ts" generic="T extends object">
import type { TableColumn } from '@/types/admin'

interface Props {
  columns: TableColumn[]
  data: T[]
  loading?: boolean
  selectable?: boolean
  selectedIds?: string[]
  hoverable?: boolean
}

withDefaults(defineProps<Props>(), {
  loading: false,
  selectable: false,
  selectedIds: () => [],
  hoverable: true
})

defineEmits<{
  sort: [key: string]
  'row-click': [row: T]
  'selection-change': [ids: string[]]
}>()
</script>

<template>
  <div class="overflow-x-auto rounded-lg border border-gray-200">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th v-if="selectable" class="w-12 px-4 py-3">
            <input type="checkbox" class="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary" />
          </th>
          <th v-for="column in columns" :key="column.key" :style="column.width ? { width: column.width } : {}" :class="[
            'px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider',
            column.sortable ? 'cursor-pointer hover:bg-gray-100' : ''
          ]" @click="column.sortable && $emit('sort', column.key)">
            <div class="flex items-center gap-1">
              {{ column.label }}
              <svg v-if="column.sortable" class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
            </div>
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <template v-if="loading">
          <tr>
            <td :colspan="selectable ? columns.length + 1 : columns.length" class="px-4 py-8 text-center">
              <div class="flex items-center justify-center gap-2 text-gray-500">
                <svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                  <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Loading...
              </div>
            </td>
          </tr>
        </template>
        <template v-else-if="data.length === 0">
          <tr>
            <td :colspan="selectable ? columns.length + 1 : columns.length" class="px-4 py-8 text-center text-gray-500">
              No data available
            </td>
          </tr>
        </template>
        <template v-else>
          <tr v-for="(row, index) in data" :key="index" :class="[
            hoverable ? 'hover:bg-gray-50 cursor-pointer' : ''
          ]" @click="$emit('row-click', row)">
            <td v-if="selectable" class="w-12 px-4 py-3">
              <input type="checkbox" :checked="selectedIds.includes(String((row as Record<string, unknown>).id))"
                class="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary" @click.stop />
            </td>
            <td v-for="column in columns" :key="column.key" class="px-4 py-3 text-sm text-gray-900">
              <slot :name="`cell-${column.key}`" :row="row" :value="(row as Record<string, unknown>)[column.key]">
                {{ (row as Record<string, unknown>)[column.key] }}
              </slot>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>
