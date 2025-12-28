import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export interface User {
  id: string
  name: string
  email: string
  avatar: string
  role: string
}

function getInitialTheme(): 'light' | 'dark' {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('admin-theme')
    if (stored === 'dark' || stored === 'light') return stored
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
  }
  return 'light'
}

function applyTheme(theme: 'light' | 'dark') {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('admin-theme', theme)
  }
}

export const useAdminStore = defineStore('admin', () => {
  const sidebarCollapsed = ref(false)
  const theme = ref<'light' | 'dark'>(getInitialTheme())
  
  const currentUser = ref<User>({
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=john',
    role: 'Administrator'
  })

  applyTheme(theme.value)

  watch(theme, (newTheme) => {
    applyTheme(newTheme)
  })

  function toggleSidebar() {
    sidebarCollapsed.value = !sidebarCollapsed.value
  }

  function setSidebarCollapsed(collapsed: boolean) {
    sidebarCollapsed.value = collapsed
  }

  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  function setTheme(newTheme: 'light' | 'dark') {
    theme.value = newTheme
  }

  return {
    sidebarCollapsed,
    theme,
    currentUser,
    toggleSidebar,
    setSidebarCollapsed,
    toggleTheme,
    setTheme
  }
})
