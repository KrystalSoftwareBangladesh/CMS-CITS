<template>
  <nav class="bg-white border-b border-gray-200">
    <div class="px-4">
      <ul class="flex space-x-6 overflow-x-auto">
        <li v-for="item in menuItems" :key="item.key">
          <button @click="navigate(item)" class="py-3 text-sm font-medium border-b-2 transition" :class="[
            activeKey === item.key
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
          ]">
            {{ item.label }}
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

interface MenuItem {
  key: string
  label: string
  route: string
}

const router = useRouter()
const activeKey = ref<string>('home')

const menuItems: MenuItem[] = [
  { key: 'home', label: 'Home', route: '/' },
  { key: 'about', label: 'About', route: '/about' },
  { key: 'dashboard', label: 'Dashboard', route: '/dashboard' },
  { key: 'content', label: 'Content', route: '/content' },
  { key: 'media', label: 'Media', route: '/media' },
  { key: 'users', label: 'Users', route: '/users' },
  { key: 'contact', label: 'Contact', route: '/contact' },
  { key: 'settings', label: 'Settings', route: '/settings' },
]

const navigate = (item: MenuItem): void => {
  activeKey.value = item.key
  router.push(item.route)
}
</script>
