<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseSelect from '@/components/ui/BaseSelect.vue'
import BaseTable from '@/components/ui/BaseTable.vue'
import BaseBadge from '@/components/ui/BaseBadge.vue'
import BasePagination from '@/components/ui/BasePagination.vue'
import BaseDropdown from '@/components/ui/BaseDropdown.vue'
import { mockUsers } from '@/data/mockData'
import type { TableColumn, SelectOption } from '@/types/admin'
import { Plus, Search, Filter, MoreVertical, Edit, Trash2, Eye } from 'lucide-vue-next'

const router = useRouter()
const searchQuery = ref('')
const statusFilter = ref('')
const roleFilter = ref('')
const currentPage = ref(1)
const perPage = 5

const statusOptions: SelectOption[] = [
  { label: 'All Status', value: '' },
  { label: 'Active', value: 'active' },
  { label: 'Inactive', value: 'inactive' },
  { label: 'Pending', value: 'pending' }
]

const roleOptions: SelectOption[] = [
  { label: 'All Roles', value: '' },
  { label: 'Admin', value: 'Admin' },
  { label: 'Editor', value: 'Editor' },
  { label: 'Author', value: 'Author' },
  { label: 'Viewer', value: 'Viewer' }
]

const columns: TableColumn[] = [
  { key: 'name', label: 'User', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
  { key: 'role', label: 'Role', sortable: true },
  { key: 'status', label: 'Status', sortable: true },
  { key: 'createdAt', label: 'Created', sortable: true },
  { key: 'actions', label: '', width: '60px' }
]

const filteredUsers = computed(() => {
  return mockUsers.filter(user => {
    const matchesSearch = !searchQuery.value ||
      user.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesStatus = !statusFilter.value || user.status === statusFilter.value
    const matchesRole = !roleFilter.value || user.role === roleFilter.value
    return matchesSearch && matchesStatus && matchesRole
  })
})

const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return filteredUsers.value.slice(start, start + perPage)
})

const totalPages = computed(() => Math.ceil(filteredUsers.value.length / perPage))

function getStatusVariant(status: string): 'success' | 'danger' | 'warning' {
  const variants: Record<string, 'success' | 'danger' | 'warning'> = {
    active: 'success',
    inactive: 'danger',
    pending: 'warning'
  }
  return variants[status] || 'warning'
}

function goToCreateUser() {
  router.push('/admin/users/create')
}

function editUser(id: string) {
  router.push(`/admin/users/${id}/edit`)
}
</script>

<template>
  <div class="space-y-6">
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Users</h1>
        <p class="text-sm text-gray-500 dark:text-gray-400">Manage your users and their permissions</p>
      </div>
      <BaseButton @click="goToCreateUser">
        <Plus class="w-4 h-4 mr-2" />
        Add User
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
              placeholder="Search users..."
              class="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
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
            v-model="roleFilter"
            :options="roleOptions"
            class="w-40"
          />
          <BaseButton variant="outline">
            <Filter class="w-4 h-4 mr-2" />
            More Filters
          </BaseButton>
        </div>
      </div>

      <BaseTable
        :columns="columns"
        :data="paginatedUsers"
        selectable
        @row-click="(row) => editUser(row.id as string)"
      >
        <template #cell-name="{ row }">
          <div class="flex items-center gap-3">
            <img
              :src="row.avatar as string"
              :alt="row.name as string"
              class="w-8 h-8 rounded-full"
            />
            <span class="font-medium text-gray-900 dark:text-white">{{ row.name }}</span>
          </div>
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
                class="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded"
                @click.stop
              >
                <MoreVertical class="w-5 h-5" />
              </button>
            </template>
            <button
              class="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              @click="editUser(row.id as string)"
            >
              <Eye class="w-4 h-4" />
              View
            </button>
            <button
              class="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              @click="editUser(row.id as string)"
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
          :total-items="filteredUsers.length"
          :per-page="perPage"
        />
      </div>
    </BaseCard>
  </div>
</template>
