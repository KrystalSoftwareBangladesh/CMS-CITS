<script setup lang="ts">
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseTable from '@/components/ui/BaseTable.vue'
import BaseBadge from '@/components/ui/BaseBadge.vue'
import { dashboardStats, recentActivity } from '@/data/mockData'
import type { TableColumn } from '@/types/admin'
import { Users, FileText, Eye, Activity, TrendingUp, TrendingDown } from 'lucide-vue-next'

const iconComponents: Record<string, unknown> = {
  Users,
  FileText,
  Eye,
  Activity
}

const activityColumns: TableColumn[] = [
  { key: 'action', label: 'Action' },
  { key: 'user', label: 'User' },
  { key: 'target', label: 'Target' },
  { key: 'timestamp', label: 'Time' }
]

function getActivityBadgeVariant(type: string): 'success' | 'info' | 'danger' | 'warning' {
  const variants: Record<string, 'success' | 'info' | 'danger' | 'warning'> = {
    create: 'success',
    update: 'info',
    delete: 'danger',
    login: 'warning'
  }
  return variants[type] || 'info'
}
</script>

<template>
  <div class="space-y-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <BaseCard
        v-for="stat in dashboardStats"
        :key="stat.label"
        class="relative overflow-hidden"
      >
        <div class="flex items-start justify-between">
          <div>
            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">{{ stat.label }}</p>
            <p class="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">{{ stat.value }}</p>
            <div class="mt-2 flex items-center gap-1 text-sm">
              <TrendingUp
                v-if="stat.trend === 'up'"
                class="w-4 h-4 text-green-500"
              />
              <TrendingDown
                v-else-if="stat.trend === 'down'"
                class="w-4 h-4 text-red-500"
              />
              <span
                :class="[
                  stat.trend === 'up' ? 'text-green-600 dark:text-green-400' : stat.trend === 'down' ? 'text-red-600 dark:text-red-400' : 'text-gray-500'
                ]"
              >
                {{ stat.change }}
              </span>
              <span class="text-gray-400 dark:text-gray-500">vs last month</span>
            </div>
          </div>
          <div class="p-3 bg-primary-soft dark:bg-primary/20 rounded-lg">
            <component
              :is="iconComponents[stat.icon]"
              class="w-6 h-6 text-primary"
            />
          </div>
        </div>
      </BaseCard>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <BaseCard class="lg:col-span-2" padding="none">
        <div class="p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 class="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h2>
        </div>
        <BaseTable
          :columns="activityColumns"
          :data="recentActivity"
          :hoverable="false"
        >
          <template #cell-action="{ row }">
            <BaseBadge :variant="getActivityBadgeVariant(row.type as string)">
              {{ row.action }}
            </BaseBadge>
          </template>
          <template #cell-user="{ value }">
            <span class="font-medium text-gray-900 dark:text-white">{{ value }}</span>
          </template>
          <template #cell-timestamp="{ value }">
            <span class="text-gray-500 dark:text-gray-400">{{ value }}</span>
          </template>
        </BaseTable>
      </BaseCard>

      <BaseCard padding="none">
        <div class="p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 class="text-lg font-semibold text-gray-900 dark:text-white">Quick Actions</h2>
        </div>
        <div class="p-4 space-y-3">
          <button
            class="w-full flex items-center gap-3 p-3 text-left rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <div class="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <FileText class="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p class="text-sm font-medium text-gray-900 dark:text-white">New Post</p>
              <p class="text-xs text-gray-500 dark:text-gray-400">Create a new blog post</p>
            </div>
          </button>
          <button
            class="w-full flex items-center gap-3 p-3 text-left rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <div class="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <Users class="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p class="text-sm font-medium text-gray-900 dark:text-white">Add User</p>
              <p class="text-xs text-gray-500 dark:text-gray-400">Invite a new team member</p>
            </div>
          </button>
          <button
            class="w-full flex items-center gap-3 p-3 text-left rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <div class="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
              <Eye class="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p class="text-sm font-medium text-gray-900 dark:text-white">View Analytics</p>
              <p class="text-xs text-gray-500 dark:text-gray-400">Check performance metrics</p>
            </div>
          </button>
        </div>
      </BaseCard>
    </div>

    <BaseCard padding="none">
      <div class="p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 class="text-lg font-semibold text-gray-900 dark:text-white">Traffic Overview</h2>
      </div>
      <div class="p-4">
        <div class="h-64 flex items-center justify-center bg-gray-50 dark:bg-gray-700/50 rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-600">
          <div class="text-center">
            <Activity class="w-12 h-12 text-gray-300 dark:text-gray-500 mx-auto mb-2" />
            <p class="text-sm text-gray-500 dark:text-gray-400">Chart placeholder</p>
            <p class="text-xs text-gray-400 dark:text-gray-500">Connect analytics to view real data</p>
          </div>
        </div>
      </div>
    </BaseCard>
  </div>
</template>
