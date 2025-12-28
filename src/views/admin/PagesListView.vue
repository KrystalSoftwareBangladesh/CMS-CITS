<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseTable from '@/components/ui/BaseTable.vue'
import BaseBadge from '@/components/ui/BaseBadge.vue'
import BasePagination from '@/components/ui/BasePagination.vue'
import BaseDropdown from '@/components/ui/BaseDropdown.vue'
import { mockPages } from '@/data/mockData'
import type { TableColumn } from '@/types/admin'
import { Plus, Search, MoreVertical, Edit, Trash2, Eye, ExternalLink } from 'lucide-vue-next'

const searchQuery = ref('')
const currentPage = ref(1)
const perPage = 5

const columns: TableColumn[] = [
  { key: 'title', label: 'Title', sortable: true },
  { key: 'slug', label: 'Slug' },
  { key: 'author', label: 'Author', sortable: true },
  { key: 'status', label: 'Status', sortable: true },
  { key: 'updatedAt', label: 'Last Updated', sortable: true },
  { key: 'actions', label: '', width: '60px' }
]

const filteredPages = computed(() => {
  return mockPages.filter(page => {
    return !searchQuery.value ||
      page.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  })
})

const paginatedPages = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return filteredPages.value.slice(start, start + perPage)
})

const totalPages = computed(() => Math.ceil(filteredPages.value.length / perPage))

function getStatusVariant(status: string): 'success' | 'warning' {
  return status === 'published' ? 'success' : 'warning'
}
</script>

<template>
  <div class="space-y-6">
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Pages</h1>
        <p class="text-sm text-gray-500">Manage your website pages</p>
      </div>
      <BaseButton>
        <Plus class="w-4 h-4 mr-2" />
        New Page
      </BaseButton>
    </div>

    <BaseCard>
      <div class="flex flex-col lg:flex-row gap-4 mb-6">
        <div class="flex-1">
          <div class="relative">
            <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search pages..."
              class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            />
          </div>
        </div>
      </div>

      <BaseTable
        :columns="columns"
        :data="paginatedPages"
        selectable
      >
        <template #cell-title="{ value }">
          <span class="font-medium text-gray-900">{{ value }}</span>
        </template>
        <template #cell-slug="{ value }">
          <code class="text-sm text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded">{{ value }}</code>
        </template>
        <template #cell-status="{ value }">
          <BaseBadge :variant="getStatusVariant(value as string)">
            {{ value }}
          </BaseBadge>
        </template>
        <template #cell-actions="{ row }">
          <BaseDropdown align="right">
            <template #trigger>
              <button
                type="button"
                class="p-1 text-gray-400 hover:text-gray-600 rounded"
                @click.stop
              >
                <MoreVertical class="w-5 h-5" />
              </button>
            </template>
            <button
              class="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <ExternalLink class="w-4 h-4" />
              View Page
            </button>
            <button
              class="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <Edit class="w-4 h-4" />
              Edit
            </button>
            <button
              class="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
            >
              <Trash2 class="w-4 h-4" />
              Delete
            </button>
          </BaseDropdown>
        </template>
      </BaseTable>

      <div class="mt-4">
        <BasePagination
          v-model:current-page="currentPage"
          :total-pages="totalPages"
          :total-items="filteredPages.length"
          :per-page="perPage"
        />
      </div>
    </BaseCard>
  </div>
</template>
