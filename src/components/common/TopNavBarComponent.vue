<template>
  <nav class="bg-white border-b border-gray-200 fixed w-full z-30 top-0">
    <div class="px-4 py-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <!-- Mobile Menu Button -->
          <button @click="toggleMobileSidebar" class="lg:hidden text-gray-600 hover:text-gray-900 focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <!-- Logo -->
          <div class="flex items-center">
            <span class="text-2xl font-bold text-blue-600">CMS</span>
            <span class="ml-2 text-gray-600 hidden sm:block">Content Management</span>
          </div>
        </div>

        <!-- Right Side -->
        <div class="flex items-center space-x-4">
          <!-- Search -->
          <div class="hidden md:block">
            <input v-model="searchQuery" type="text" placeholder="Search..."
              class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              @keyup.enter="handleSearch" />
          </div>

          <!-- Notifications -->
          <button class="relative text-gray-600 hover:text-gray-900" @click="handleNotifications">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span v-if="unreadCount > 0" class="absolute top-0 right-0 block h-2 w-2 bg-red-500 rounded-full"></span>
          </button>

          <!-- User Menu -->
          <div class="relative">
            <button @click="toggleUserMenu" class="flex items-center space-x-2 focus:outline-none">
              <img :src="userAvatar" :alt="userName" class="w-8 h-8 rounded-full" />
              <span class="hidden md:block text-gray-700 font-medium">{{ userName }}</span>
              <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <!-- Dropdown -->
            <div v-if="showUserMenu"
              class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1">
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                @click.prevent="handleProfile">Profile</a>
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                @click.prevent="handleSettings">Settings</a>
              <hr class="my-1" />
              <a href="#" class="block px-4 py-2 text-red-600 hover:bg-gray-100"
                @click.prevent="handleLogout">Logout</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showUserMenu = ref<boolean>(false)
const searchQuery = ref<string>('')
const userName = ref<string>('Admin User')
const userAvatar = ref<string>('https://ui-avatars.com/api/?name=Admin+User&background=3b82f6&color=fff')
const unreadCount = ref<number>(3)

const toggleUserMenu = (): void => {
  showUserMenu.value = !showUserMenu.value
}

const toggleMobileSidebar = (): void => {
  // Emit event to parent or use a store to toggle sidebar
  console.log('Toggle mobile sidebar')
}

const handleSearch = (): void => {
  console.log('Search for:', searchQuery.value)
}

const handleNotifications = (): void => {
  console.log('Show notifications')
}

const handleProfile = (): void => {
  console.log('Go to profile')
  showUserMenu.value = false
}

const handleSettings = (): void => {
  console.log('Go to settings')
  showUserMenu.value = false
}

const handleLogout = (): void => {
  console.log('Logout')
  showUserMenu.value = false
}
</script>
