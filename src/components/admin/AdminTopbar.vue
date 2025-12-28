<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useAdminStore } from '@/stores/admin'
import BaseDropdown from '@/components/ui/BaseDropdown.vue'
import { Menu, Bell, Sun, Moon, User, Settings, LogOut, ChevronRight } from 'lucide-vue-next'

const route = useRoute()
const adminStore = useAdminStore()

const pageTitle = computed(() => {
  return (route.meta.title as string) || 'Dashboard'
})

const breadcrumbs = computed(() => {
  const paths = route.path.split('/').filter(p => p && p !== 'admin')
  return paths.map((path, index) => ({
    label: path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' '),
    to: '/admin/' + paths.slice(0, index + 1).join('/')
  }))
})
</script>

<template>
  <header
    :class="[
      'fixed top-0 right-0 z-30 h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 transition-all duration-300',
      adminStore.sidebarCollapsed ? 'left-16' : 'left-64'
    ]"
  >
    <div class="h-full px-4 flex items-center justify-between">
      <div class="flex items-center gap-4">
        <button
          type="button"
          class="lg:hidden p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
          @click="adminStore.toggleSidebar()"
        >
          <Menu class="w-5 h-5" />
        </button>
        
        <div>
          <h1 class="text-lg font-semibold text-gray-900 dark:text-white">{{ pageTitle }}</h1>
          <nav v-if="breadcrumbs.length > 0" class="flex items-center gap-1 text-sm">
            <RouterLink
              to="/admin/dashboard"
              class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            >
              Admin
            </RouterLink>
            <template v-for="(crumb, index) in breadcrumbs" :key="crumb.to">
              <ChevronRight class="w-4 h-4 text-gray-400" />
              <RouterLink
                v-if="index < breadcrumbs.length - 1"
                :to="crumb.to"
                class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              >
                {{ crumb.label }}
              </RouterLink>
              <span v-else class="text-gray-900 dark:text-white font-medium">{{ crumb.label }}</span>
            </template>
          </nav>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <button
          type="button"
          class="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
          @click="adminStore.toggleTheme()"
        >
          <Sun v-if="adminStore.theme === 'light'" class="w-5 h-5" />
          <Moon v-else class="w-5 h-5" />
        </button>

        <button
          type="button"
          class="relative p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
        >
          <Bell class="w-5 h-5" />
          <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        <BaseDropdown align="right" width="w-56">
          <template #trigger>
            <button
              type="button"
              class="flex items-center gap-2 p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            >
              <img
                :src="adminStore.currentUser?.avatar"
                :alt="adminStore.currentUser?.name"
                class="w-8 h-8 rounded-full"
              />
              <div class="hidden sm:block text-left">
                <p class="text-sm font-medium text-gray-900 dark:text-white">{{ adminStore.currentUser?.name }}</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">{{ adminStore.currentUser?.role }}</p>
              </div>
            </button>
          </template>

          <div class="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
            <p class="text-sm font-medium text-gray-900 dark:text-white">{{ adminStore.currentUser?.name }}</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">{{ adminStore.currentUser?.email }}</p>
          </div>

          <RouterLink
            to="/admin/profile"
            class="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <User class="w-4 h-4" />
            Profile
          </RouterLink>
          <RouterLink
            to="/admin/settings"
            class="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Settings class="w-4 h-4" />
            Settings
          </RouterLink>
          <div class="border-t border-gray-100 dark:border-gray-700">
            <button
              type="button"
              class="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <LogOut class="w-4 h-4" />
              Sign out
            </button>
          </div>
        </BaseDropdown>
      </div>
    </div>
  </header>
</template>
