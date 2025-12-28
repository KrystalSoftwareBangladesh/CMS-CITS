<template>
  <header class="fixed top-4 left-0 right-0 z-50">
    <div class="max-w-7xl mx-auto px-4">
      <nav class="flex items-center justify-between
               bg-white dark:bg-gray-800 rounded-full shadow-md dark:shadow-gray-900/30
               px-4 py-2">
        <div class="flex items-center">
          <img src="/logo.png" alt="Logo" class="w-48 h-12 dark:brightness-110" />
        </div>

        <ul class="hidden md:flex items-center gap-2">
          <li v-for="item in menuItems" :key="item.key">
            <button @click="navigate(item)" class="px-4 py-2 text-sm font-medium rounded-full transition" :class="activeKey === item.key
              ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
              ">
              {{ item.label }}
            </button>
          </li>
        </ul>

        <div class="flex items-center gap-2">
          <button
            @click="toggleTheme"
            class="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            :title="theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'"
          >
            <Sun v-if="theme === 'light'" class="w-5 h-5" />
            <Moon v-else class="w-5 h-5" />
          </button>

          <button class="hidden sm:inline-flex items-center gap-2
                   px-4 py-2 rounded-full text-sm font-semibold text-white
                   bg-primary hover:bg-primary-hover transition">
            <RouterLink to="/contact" class="flex items-center gap-2">
              <Phone class="w-4 h-4" />
              Schedule a Call
            </RouterLink>
          </button>

          <button @click="toggleMobileMenu" class="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300">
            <X v-if="mobileMenuOpen" class="w-5 h-5" />
            <Menu v-else class="w-5 h-5" />
          </button>
        </div>
      </nav>

      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="mobileMenuOpen" class="md:hidden mt-2 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4">
          <ul class="space-y-1">
            <li v-for="item in menuItems" :key="item.key">
              <button
                @click="navigate(item); mobileMenuOpen = false"
                class="w-full text-left px-4 py-2 text-sm font-medium rounded-lg transition"
                :class="activeKey === item.key
                  ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'"
              >
                {{ item.label }}
              </button>
            </li>
          </ul>
          <div class="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
            <RouterLink
              to="/contact"
              class="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-full text-sm font-semibold text-white bg-primary hover:bg-primary-hover transition"
              @click="mobileMenuOpen = false"
            >
              <Phone class="w-4 h-4" />
              Schedule a Call
            </RouterLink>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { Sun, Moon, Phone, Menu, X } from 'lucide-vue-next'

interface MenuItem {
  key: string
  label: string
  route: string
}

const router = useRouter()
const activeKey = ref('home')
const mobileMenuOpen = ref(false)
const theme = ref<'light' | 'dark'>('light')

const menuItems: MenuItem[] = [
  { key: 'home', label: 'Home', route: '/' },
  { key: 'about', label: 'Company', route: '/about' },
  { key: 'team', label: 'Team', route: '/team' },
  { key: 'services', label: 'Services', route: '/services' },
  { key: 'pricing', label: 'Pricing', route: '/pricing' },
  { key: 'blog', label: 'Blog', route: '/blog' },
  { key: 'career', label: 'Career', route: '/career' },
  { key: 'contact', label: 'Contact Us', route: '/contact' },
]

function getInitialTheme(): 'light' | 'dark' {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('admin-theme')
    if (stored === 'dark' || stored === 'light') return stored
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
  }
  return 'light'
}

function applyTheme(newTheme: 'light' | 'dark') {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    localStorage.setItem('admin-theme', newTheme)
  }
}

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  applyTheme(theme.value)
}

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const navigate = (item: MenuItem) => {
  activeKey.value = item.key
  router.push(item.route)
}

onMounted(() => {
  theme.value = getInitialTheme()
  applyTheme(theme.value)
})
</script>
