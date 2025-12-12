<template>
  <aside class="bg-gray-900 text-white w-64 fixed left-0 top-0 h-full pt-16 hidden lg:block">
    <nav class="px-4 py-6">
      <ul class="space-y-2">
        <SidebarItem v-for="item in mainMenuItems" :key="item.label" :icon="item.icon" :label="item.label"
          :active="item.active" :to="item.to" />

        <li class="pt-4 pb-2">
          <span class="text-xs uppercase text-gray-400 font-semibold">Settings</span>
        </li>

        <SidebarItem v-for="item in settingsMenuItems" :key="item.label" :icon="item.icon" :label="item.label"
          :to="item.to" />
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SidebarItem from '@/components/sidebar/SidebarItem.vue'

interface MenuItem {
  icon: string
  label: string
  to: string
  active?: boolean
}

const mainMenuItems = ref<MenuItem[]>([
  { icon: '📊', label: 'Dashboard', to: '/dashboard', active: true },
  { icon: '📝', label: 'Content', to: '/content' },
  { icon: '🖼️', label: 'Media Library', to: '/media' },
  { icon: '👥', label: 'Users', to: '/users' },
  { icon: '📄', label: 'Pages', to: '/pages' },
  { icon: '💬', label: 'Comments', to: '/comments' }
])

const settingsMenuItems = ref<MenuItem[]>([
  { icon: '⚙️', label: 'General', to: '/settings' },
  { icon: '🔌', label: 'Plugins', to: '/plugins' },
  { icon: '🎨', label: 'Appearance', to: '/appearance' }
])
</script>
