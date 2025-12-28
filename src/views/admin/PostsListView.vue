<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseSelect from '@/components/ui/BaseSelect.vue'
import BaseTable from '@/components/ui/BaseTable.vue'
import BaseBadge from '@/components/ui/BaseBadge.vue'
import BasePagination from '@/components/ui/BasePagination.vue'
import BaseDropdown from '@/components/ui/BaseDropdown.vue'
import { mockPosts } from '@/data/mockData'
import type { TableColumn, SelectOption } from '@/types/admin'
import { Plus, Search, MoreVertical, Edit, Trash2, Eye, Copy } from 'lucide-vue-next'

const router = useRouter()
const searchQuery = ref('')
const statusFilter = ref('')
const categoryFilter = ref('')
const currentPage = ref(1)
const perPage = 5

const statusOptions: SelectOption[] = [
  { label: 'All Status', value: '' },
  { label: 'Published', value: 'published' },
  { label: 'Draft', value: 'draft' },
  { label: 'Archived', value: 'archived' }
]

const categoryOptions: SelectOption[] = [
  { label: 'All Categories', value: '' },
  { label: 'Tutorial', value: 'Tutorial' },
  { label: 'Development', value: 'Development' },
  { label: 'Design', value: 'Design' }
]

const columns: TableColumn[] = [
  { key: 'title', label: 'Title', sortable: true },
  { key: 'author', label: 'Author', sortable: true },
  { key: 'category', label: 'Category', sortable: true },
  { key: 'status', label: 'Status', sortable: true },
  { key: 'updatedAt', label: 'Last Updated', sortable: true },
  { key: 'actions', label: '', width: '60px' }
]

const filteredPosts = computed(() => {
  return mockPosts.filter(post => {
    const matchesSearch = !searchQuery.value ||
      post.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesStatus = !statusFilter.value || post.status === statusFilter.value
    const matchesCategory = !categoryFilter.value || post.category === categoryFilter.value
    return matchesSearch && matchesStatus && matchesCategory
  })
})

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return filteredPosts.value.slice(start, start + perPage)
})

const totalPages = computed(() => Math.ceil(filteredPosts.value.length / perPage))

function getStatusVariant(status: string): 'success' | 'warning' | 'default' {
  const variants: Record<string, 'success' | 'warning' | 'default'> = {
    published: 'success',
    draft: 'warning',
    archived: 'default'
  }
  return variants[status] || 'default'
}

function goToCreatePost() {
  router.push('/admin/content/posts/create')
}

function editPost(id: string) {
  router.push(`/admin/content/posts/${id}/edit`)
}
</script>

<template>
  <div class="space-y-6">
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Posts</h1>
        <p class="text-sm text-gray-500">Create and manage your blog posts</p>
      </div>
      <BaseButton @click="goToCreatePost">
        <Plus class="w-4 h-4 mr-2" />
        New Post
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
              placeholder="Search posts..."
              class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            />
          </div>
        </div>
        <div class="flex gap-3">
          <BaseSelect
            v-model="statusFilter"
            :options="statusOptions"
            class="w-40"
          />
          <BaseSelect
            v-model="categoryFilter"
            :options="categoryOptions"
            class="w-40"
          />
        </div>
      </div>

      <BaseTable
        :columns="columns"
        :data="paginatedPosts"
        selectable
        @row-click="(row) => editPost(row.id as string)"
      >
        <template #cell-title="{ value }">
          <span class="font-medium text-gray-900">{{ value }}</span>
        </template>
        <template #cell-category="{ value }">
          <BaseBadge variant="info">{{ value }}</BaseBadge>
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
              <Eye class="w-4 h-4" />
              Preview
            </button>
            <button
              class="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              @click="editPost(row.id as string)"
            >
              <Edit class="w-4 h-4" />
              Edit
            </button>
            <button
              class="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <Copy class="w-4 h-4" />
              Duplicate
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
          :total-items="filteredPosts.length"
          :per-page="perPage"
        />
      </div>
    </BaseCard>
  </div>
</template>
