<script setup lang="ts">
import { ref, computed } from 'vue'
import { Search } from 'lucide-vue-next'
import TopNavBarComponent from '@/components/common/TopNavBarComponent.vue'
import FooterComponent from '@/components/common/FooterComponent.vue'
import PageHero from '@/components/common/PageHero.vue'
import CallToAction from '@/components/common/CallToAction.vue'
import BlogCard from '@/components/blog/BlogCard.vue'
import { blogPosts, categories } from '@/data/blogData'

const searchQuery = ref('')
const activeCategory = ref('All')

const filteredPosts = computed(() => {
  let posts = blogPosts

  if (activeCategory.value !== 'All') {
    posts = posts.filter(post => post.category === activeCategory.value)
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    posts = posts.filter(post =>
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.tags.some(tag => tag.toLowerCase().includes(query))
    )
  }

  return posts
})

const featuredPost = computed(() => blogPosts.find(post => post.featured))
const regularPosts = computed(() => filteredPosts.value.filter(post => !post.featured))
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
    <TopNavBarComponent />

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <PageHero
        badge="Our Blog"
        title="Insights &"
        highlight="Stories"
        description="Discover the latest articles, tutorials, and insights from our team of experts."
      />

      <section class="pb-8">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div class="relative flex-1 max-w-md">
            <Search class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search articles..."
              class="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            />
          </div>

          <div class="flex flex-wrap gap-2">
            <button
              v-for="category in categories"
              :key="category"
              @click="activeCategory = category"
              class="px-4 py-2 text-sm font-medium rounded-full transition-all"
              :class="activeCategory === category
                ? 'bg-primary text-white'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'"
            >
              {{ category }}
            </button>
          </div>
        </div>
      </section>

      <section v-if="featuredPost && activeCategory === 'All' && !searchQuery" class="pb-12">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Featured Article</h2>
        <BlogCard
          :slug="featuredPost.slug"
          :title="featuredPost.title"
          :excerpt="featuredPost.excerpt"
          :image="featuredPost.image"
          :category="featuredPost.category"
          :author="featuredPost.author"
          :date="featuredPost.date"
          :read-time="featuredPost.readTime"
          :featured="true"
        />
      </section>

      <section class="pb-20">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          {{ activeCategory === 'All' ? 'Latest Articles' : activeCategory }}
        </h2>

        <div v-if="regularPosts.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogCard
            v-for="post in regularPosts"
            :key="post.id"
            :slug="post.slug"
            :title="post.title"
            :excerpt="post.excerpt"
            :image="post.image"
            :category="post.category"
            :author="post.author"
            :date="post.date"
            :read-time="post.readTime"
          />
        </div>

        <div v-else class="text-center py-12">
          <p class="text-gray-500 dark:text-gray-400 text-lg">
            No articles found matching your criteria.
          </p>
          <button
            @click="searchQuery = ''; activeCategory = 'All'"
            class="mt-4 px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-hover transition"
          >
            Clear Filters
          </button>
        </div>
      </section>

      <CallToAction
        title="Want to contribute?"
        description="Share your knowledge and insights with our community. We are always looking for talented writers."
        button-text="Become a Writer"
        variant="gradient"
      />
    </main>

    <FooterComponent />
  </div>
</template>
