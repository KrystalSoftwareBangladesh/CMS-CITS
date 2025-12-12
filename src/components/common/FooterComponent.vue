<template>
  <footer class="bg-white border-t border-gray-200 mt-auto lg:ml-64">
    <div class="px-6 py-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="text-gray-600 text-sm">
          © {{ currentYear }} CMS Project. All rights reserved.
        </div>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <a v-for="link in footerLinks" :key="link.label" :href="link.url"
            class="text-gray-600 hover:text-gray-900 text-sm" @click.prevent="handleLinkClick(link.url)">
            {{ link.label }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface FooterLink {
  label: string
  url: string
}

const currentYear = computed<number>(() => new Date().getFullYear())

const footerLinks = ref<FooterLink[]>([
  { label: 'Documentation', url: '/docs' },
  { label: 'Support', url: '/support' },
  { label: 'Privacy Policy', url: '/privacy' },
  { label: 'Terms', url: '/terms' }
])

const handleLinkClick = (url: string): void => {
  console.log('Navigate to:', url)
  // Handle navigation
}
</script>
