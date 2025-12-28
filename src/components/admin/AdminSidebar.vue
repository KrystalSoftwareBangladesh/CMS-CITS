<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useAdminStore } from '@/stores/admin'
import { adminMenuGroups } from '@/data/adminMenu'
import {
  LayoutDashboard,
  Users,
  Shield,
  Key,
  FileText,
  Newspaper,
  FolderTree,
  Image,
  Settings,
  Sliders,
  Palette,
  Lock,
  ChevronLeft,
  ChevronRight
} from 'lucide-vue-next'

const route = useRoute()
const adminStore = useAdminStore()

const isCollapsed = computed(() => adminStore.sidebarCollapsed)

const iconComponents: Record<string, unknown> = {
  LayoutDashboard,
  Users,
  Shield,
  Key,
  FileText,
  Newspaper,
  FolderTree,
  Image,
  Settings,
  Sliders,
  Palette,
  Lock
}

function isActiveRoute(path: string): boolean {
  return route.path === path || route.path.startsWith(path + '/')
}
</script>

<template>
  <aside
    :class="[
      'fixed top-0 left-0 z-40 h-screen bg-white border-r border-gray-200 transition-all duration-300',
      isCollapsed ? 'w-16' : 'w-64'
    ]"
  >
    <div class="h-full flex flex-col">
      <div class="flex items-center justify-between h-16 px-4 border-b border-gray-200">
        <RouterLink
          to="/admin/dashboard"
          class="flex items-center gap-2"
        >
          <div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-sm">C</span>
          </div>
          <span
            v-if="!isCollapsed"
            class="font-semibold text-gray-900 whitespace-nowrap"
          >
            CMS Admin
          </span>
        </RouterLink>
        <button
          v-if="!isCollapsed"
          type="button"
          class="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg"
          @click="adminStore.toggleSidebar()"
        >
          <ChevronLeft class="w-5 h-5" />
        </button>
      </div>

      <nav class="flex-1 overflow-y-auto py-4 px-3">
        <template v-for="group in adminMenuGroups" :key="group.title">
          <div v-if="!isCollapsed" class="mb-4">
            <h3 class="px-3 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              {{ group.title }}
            </h3>
            <ul class="space-y-1">
              <li v-for="item in group.items" :key="item.label">
                <RouterLink
                  v-if="item.to"
                  :to="item.to"
                  :class="[
                    'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                    isActiveRoute(item.to)
                      ? 'bg-primary-soft text-primary'
                      : 'text-gray-700 hover:bg-gray-100'
                  ]"
                >
                  <component
                    :is="iconComponents[item.icon]"
                    class="w-5 h-5 flex-shrink-0"
                  />
                  <span>{{ item.label }}</span>
                </RouterLink>
                <template v-if="item.children">
                  <ul class="mt-1 ml-8 space-y-1">
                    <li v-for="child in item.children" :key="child.label">
                      <RouterLink
                        v-if="child.to"
                        :to="child.to"
                        :class="[
                          'flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-colors',
                          isActiveRoute(child.to)
                            ? 'text-primary font-medium'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        ]"
                      >
                        {{ child.label }}
                      </RouterLink>
                    </li>
                  </ul>
                </template>
              </li>
            </ul>
          </div>
          <div v-else class="mb-4">
            <ul class="space-y-1">
              <li v-for="item in group.items" :key="item.label">
                <RouterLink
                  v-if="item.to"
                  :to="item.to"
                  :class="[
                    'flex items-center justify-center p-2 rounded-lg transition-colors',
                    isActiveRoute(item.to)
                      ? 'bg-primary-soft text-primary'
                      : 'text-gray-700 hover:bg-gray-100'
                  ]"
                  :title="item.label"
                >
                  <component
                    :is="iconComponents[item.icon]"
                    class="w-5 h-5"
                  />
                </RouterLink>
              </li>
            </ul>
          </div>
        </template>
      </nav>

      <div class="p-3 border-t border-gray-200">
        <button
          v-if="isCollapsed"
          type="button"
          class="w-full p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg flex items-center justify-center"
          @click="adminStore.toggleSidebar()"
        >
          <ChevronRight class="w-5 h-5" />
        </button>
      </div>
    </div>
  </aside>
</template>
