<script setup lang="ts">
import { ref } from 'vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseEmptyState from '@/components/ui/BaseEmptyState.vue'
import { Upload, Search, Grid, List, Image, File, Trash2, Download, MoreVertical } from 'lucide-vue-next'

const viewMode = ref<'grid' | 'list'>('grid')
const searchQuery = ref('')

const mockMedia = [
  { id: '1', name: 'hero-image.jpg', type: 'image', size: '2.4 MB', date: '2024-06-15', url: 'https://picsum.photos/seed/1/400/300' },
  { id: '2', name: 'logo.png', type: 'image', size: '156 KB', date: '2024-06-14', url: 'https://picsum.photos/seed/2/400/300' },
  { id: '3', name: 'banner.jpg', type: 'image', size: '1.8 MB', date: '2024-06-12', url: 'https://picsum.photos/seed/3/400/300' },
  { id: '4', name: 'product-1.jpg', type: 'image', size: '890 KB', date: '2024-06-10', url: 'https://picsum.photos/seed/4/400/300' },
  { id: '5', name: 'product-2.jpg', type: 'image', size: '1.2 MB', date: '2024-06-08', url: 'https://picsum.photos/seed/5/400/300' },
  { id: '6', name: 'document.pdf', type: 'document', size: '4.5 MB', date: '2024-06-05', url: '' }
]

const selectedItems = ref<string[]>([])

function toggleSelect(id: string) {
  const index = selectedItems.value.indexOf(id)
  if (index === -1) {
    selectedItems.value.push(id)
  } else {
    selectedItems.value.splice(index, 1)
  }
}

function isSelected(id: string) {
  return selectedItems.value.includes(id)
}
</script>

<template>
  <div class="space-y-6">
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Media Library</h1>
        <p class="text-sm text-gray-500">Manage your images, documents, and other files</p>
      </div>
      <BaseButton>
        <Upload class="w-4 h-4 mr-2" />
        Upload Files
      </BaseButton>
    </div>

    <BaseCard>
      <div class="flex flex-col lg:flex-row gap-4 mb-6">
        <div class="flex-1">
          <div class="relative">
            <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search files..."
              class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            />
          </div>
        </div>
        <div class="flex items-center gap-2">
          <div class="flex border border-gray-300 rounded-lg overflow-hidden">
            <button
              :class="[
                'p-2 transition-colors',
                viewMode === 'grid' ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:bg-gray-50'
              ]"
              @click="viewMode = 'grid'"
            >
              <Grid class="w-5 h-5" />
            </button>
            <button
              :class="[
                'p-2 transition-colors',
                viewMode === 'list' ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:bg-gray-50'
              ]"
              @click="viewMode = 'list'"
            >
              <List class="w-5 h-5" />
            </button>
          </div>
          <BaseButton
            v-if="selectedItems.length > 0"
            variant="danger"
            size="sm"
          >
            <Trash2 class="w-4 h-4 mr-1" />
            Delete ({{ selectedItems.length }})
          </BaseButton>
        </div>
      </div>

      <div v-if="viewMode === 'grid'" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <div
          v-for="item in mockMedia"
          :key="item.id"
          :class="[
            'group relative rounded-lg border-2 overflow-hidden cursor-pointer transition-all',
            isSelected(item.id) ? 'border-primary ring-2 ring-primary/20' : 'border-gray-200 hover:border-gray-300'
          ]"
          @click="toggleSelect(item.id)"
        >
          <div class="aspect-square bg-gray-100 flex items-center justify-center">
            <img
              v-if="item.type === 'image'"
              :src="item.url"
              :alt="item.name"
              class="w-full h-full object-cover"
            />
            <File v-else class="w-12 h-12 text-gray-400" />
          </div>
          <div class="p-2">
            <p class="text-sm font-medium text-gray-900 truncate">{{ item.name }}</p>
            <p class="text-xs text-gray-500">{{ item.size }}</p>
          </div>
          <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              class="p-1 bg-white rounded shadow hover:bg-gray-50"
              @click.stop
            >
              <MoreVertical class="w-4 h-4 text-gray-500" />
            </button>
          </div>
          <div
            v-if="isSelected(item.id)"
            class="absolute top-2 left-2 w-5 h-5 bg-primary rounded flex items-center justify-center"
          >
            <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      <div v-else class="space-y-2">
        <div
          v-for="item in mockMedia"
          :key="item.id"
          :class="[
            'flex items-center gap-4 p-3 rounded-lg border-2 cursor-pointer transition-all',
            isSelected(item.id) ? 'border-primary bg-primary-soft/30' : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
          ]"
          @click="toggleSelect(item.id)"
        >
          <div class="w-12 h-12 rounded bg-gray-100 flex items-center justify-center overflow-hidden">
            <img
              v-if="item.type === 'image'"
              :src="item.url"
              :alt="item.name"
              class="w-full h-full object-cover"
            />
            <File v-else class="w-6 h-6 text-gray-400" />
          </div>
          <div class="flex-1 min-w-0">
            <p class="font-medium text-gray-900 truncate">{{ item.name }}</p>
            <p class="text-sm text-gray-500">{{ item.size }} - {{ item.date }}</p>
          </div>
          <div class="flex items-center gap-2">
            <button class="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded">
              <Download class="w-4 h-4" />
            </button>
            <button class="p-1.5 text-gray-400 hover:text-red-600 hover:bg-gray-100 rounded">
              <Trash2 class="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </BaseCard>
  </div>
</template>
