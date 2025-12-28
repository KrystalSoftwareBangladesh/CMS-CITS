<script setup lang="ts">
import { Calendar, Clock, ArrowRight } from 'lucide-vue-next'

interface Props {
  slug: string
  title: string
  excerpt: string
  image: string
  category: string
  author: {
    name: string
    avatar: string
  }
  date: string
  readTime: string
  featured?: boolean
}

defineProps<Props>()
</script>

<template>
  <RouterLink
    :to="`/blog/${slug}`"
    class="group block bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
    :class="{ 'md:col-span-2 md:grid md:grid-cols-2': featured }"
  >
    <div class="relative overflow-hidden" :class="featured ? 'h-64 md:h-full' : 'h-48'">
      <img
        :src="image"
        :alt="title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div class="absolute top-4 left-4">
        <span class="px-3 py-1 text-xs font-semibold rounded-full bg-primary text-white">
          {{ category }}
        </span>
      </div>
    </div>

    <div class="p-6">
      <div class="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
        <span class="flex items-center gap-1">
          <Calendar class="w-4 h-4" />
          {{ date }}
        </span>
        <span class="flex items-center gap-1">
          <Clock class="w-4 h-4" />
          {{ readTime }}
        </span>
      </div>

      <h3
        class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors mb-3"
        :class="{ 'text-2xl': featured }"
      >
        {{ title }}
      </h3>

      <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2" :class="{ 'line-clamp-3': featured }">
        {{ excerpt }}
      </p>

      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <img :src="author.avatar" :alt="author.name" class="w-8 h-8 rounded-full object-cover" />
          <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ author.name }}</span>
        </div>

        <span class="flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all">
          Read More
          <ArrowRight class="w-4 h-4" />
        </span>
      </div>
    </div>
  </RouterLink>
</template>
