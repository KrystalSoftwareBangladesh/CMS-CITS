<template>
  <header class="fixed top-4 left-0 right-0 z-50">
    <div class="max-w-7xl mx-auto px-4">
      <nav class="flex items-center justify-between
               bg-white rounded-full shadow-md
               px-4 py-2">
        <!-- Logo (Avatar Image) -->
        <div class="flex items-center">
          <img src="https://i.pravatar.cc/40" alt="Logo" class="w-10 h-10 rounded-full object-cover" />
        </div>

        <!-- Menu -->
        <ul class="hidden md:flex items-center gap-2">
          <li v-for="item in menuItems" :key="item.key">
            <button @click="navigate(item)" class="px-4 py-2 text-sm font-medium rounded-full transition" :class="activeKey === item.key
              ? 'bg-gray-100 text-gray-900'
              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              ">
              {{ item.label }}
            </button>
          </li>
        </ul>

        <!-- CTA -->
        <div class="flex items-center gap-2">
          <button class="hidden sm:inline-flex items-center gap-2
                   px-4 py-2 rounded-full text-sm font-semibold
                   bg-yellow-400 hover:bg-yellow-500 transition">
            📞 Schedule a Call
          </button>

          <!-- Mobile Menu Button (optional later) -->
          <button class="md:hidden p-2 rounded-full hover:bg-gray-100">
            ☰
          </button>
        </div>
      </nav>
    </div>
  </header>
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
const activeKey = ref('home')

const menuItems: MenuItem[] = [
  { key: 'home', label: 'Home', route: '/' },
  { key: 'about', label: 'Company', route: '/about' },
  { key: 'services', label: 'Services', route: '/services' },
  { key: 'pricing', label: 'Pricing', route: '/pricing' },
  { key: 'contact', label: 'Contact Us', route: '/contact' },
]

const navigate = (item: MenuItem) => {
  activeKey.value = item.key
  router.push(item.route)
}
</script>
