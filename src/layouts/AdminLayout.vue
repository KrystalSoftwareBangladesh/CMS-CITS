<script setup lang="ts">
import { computed } from 'vue'
import { RouterView } from 'vue-router'
import { useAdminStore } from '@/stores/admin'
import AdminSidebar from '@/components/admin/AdminSidebar.vue'
import AdminTopbar from '@/components/admin/AdminTopbar.vue'

const adminStore = useAdminStore()

const mainClass = computed(() => [
  'min-h-screen bg-gray-50 pt-16 transition-all duration-300',
  adminStore.sidebarCollapsed ? 'pl-16' : 'pl-64'
])
</script>

<template>
  <div>
    <AdminSidebar />
    <AdminTopbar />
    <main :class="mainClass">
      <div class="p-6">
        <RouterView />
      </div>
    </main>
  </div>
</template>
