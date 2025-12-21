<template>
  <div class="min-h-screen bg-gray-50">
    <TopNavBarComponent />
    <div class="flex">
      <SideBar />
      <main class="flex-1 p-6 lg:ml-64">
        <div class="max-w-7xl mx-auto">
          <!-- Page Header -->
          <div class="mb-8">
            <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p class="text-gray-600 mt-1">Welcome back! Here's what's happening today.</p>
          </div>

          <!-- Stats Cards -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              v-for="stat in stats"
              :key="stat.title"
              :title="stat.title"
              :value="stat.value"
              :change="stat.change"
              :trend="stat.trend"
              :icon="stat.icon"
            />
          </div>

          <!-- Recent Activity & Quick Actions -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Recent Posts -->
            <div class="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200">
              <div class="p-6 border-b border-gray-200">
                <h2 class="text-lg font-semibold text-gray-900">Recent Posts</h2>
              </div>
              <div class="divide-y divide-gray-200">
                <ActivityItem
                  v-for="activity in recentPosts"
                  :key="activity.title"
                  :title="activity.title"
                  :author="activity.author"
                  :date="activity.date"
                  :status="activity.status"
                />
              </div>
            </div>

            <!-- Quick Actions -->
            <div class="bg-white rounded-lg shadow-sm border border-gray-200">
              <div class="p-6 border-b border-gray-200">
                <h2 class="text-lg font-semibold text-gray-900">Quick Actions</h2>
              </div>
              <div class="p-6 space-y-3">
                <button
                  v-for="action in quickActions"
                  :key="action.label"
                  :class="action.primary ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'"
                  class="w-full py-2 px-4 rounded-lg transition"
                  @click="handleAction(action.action)"
                >
                  {{ action.label }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TopNavBarComponent from '@/components/common/TopNavBarComponent.vue'
import SideBar from '@/components/common/SideBar.vue'
import Footer from '@/components/common/FooterComponent.vue'
import StatsCard from '@/components/StatsCard.vue'
import ActivityItem from '@/components/ActivityItem.vue'

interface Stat {
  title: string
  value: string
  change: string
  trend: 'up' | 'down'
  icon: string
}

interface Activity {
  title: string
  author: string
  date: string
  status: 'Published' | 'Draft'
}

interface QuickAction {
  label: string
  action: string
  primary?: boolean
}

const stats = ref<Stat[]>([
  { title: 'Total Posts', value: '245', change: '+12%', trend: 'up', icon: '📝' },
  { title: 'Total Users', value: '1,429', change: '+8%', trend: 'up', icon: '👥' },
  { title: 'Media Files', value: '892', change: '+23%', trend: 'up', icon: '🖼️' },
  { title: 'Page Views', value: '45.2K', change: '-2%', trend: 'down', icon: '📊' }
])

const recentPosts = ref<Activity[]>([
  { title: 'Getting Started with Vue 3', author: 'John Doe', date: '2 hours ago', status: 'Published' },
  { title: 'Understanding Composition API', author: 'Jane Smith', date: '5 hours ago', status: 'Draft' },
  { title: 'Tailwind CSS Best Practices', author: 'Mike Johnson', date: '1 day ago', status: 'Published' }
])

const quickActions = ref<QuickAction[]>([
  { label: 'Create New Post', action: 'createPost', primary: true },
  { label: 'Upload Media', action: 'uploadMedia' },
  { label: 'Manage Users', action: 'manageUsers' },
  { label: 'View Analytics', action: 'viewAnalytics' }
])

const handleAction = (action: string) => {
  console.log(`Action triggered: ${action}`)
  // Handle navigation or actions here
}
</script>
