<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Calendar, Clock, ArrowLeft, Share2, Bookmark, Facebook, Twitter, Linkedin } from 'lucide-vue-next'
import TopNavBarComponent from '@/components/common/TopNavBarComponent.vue'
import FooterComponent from '@/components/common/FooterComponent.vue'
import CallToAction from '@/components/common/CallToAction.vue'
import BlogCard from '@/components/blog/BlogCard.vue'
import { getBlogBySlug, getRelatedPosts } from '@/data/blogData'

const route = useRoute()
const router = useRouter()

const post = computed(() => getBlogBySlug(route.params.slug as string))
const relatedPosts = computed(() => getRelatedPosts(route.params.slug as string))

const goBack = () => router.push('/blog')
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
    <TopNavBarComponent />

    <main v-if="post" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
      <button
        @click="goBack"
        class="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition mb-8"
      >
        <ArrowLeft class="w-4 h-4" />
        Back to Blog
      </button>

      <article class="max-w-4xl mx-auto">
        <header class="mb-8">
          <span class="inline-block px-4 py-1.5 text-sm font-semibold rounded-full bg-primary/10 text-primary mb-4">
            {{ post.category }}
          </span>

          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {{ post.title }}
          </h1>

          <div class="flex flex-wrap items-center gap-6 text-gray-500 dark:text-gray-400">
            <div class="flex items-center gap-3">
              <img
                :src="post.author.avatar"
                :alt="post.author.name"
                class="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p class="font-medium text-gray-900 dark:text-white">{{ post.author.name }}</p>
                <p class="text-sm">{{ post.author.role }}</p>
              </div>
            </div>

            <span class="flex items-center gap-1.5">
              <Calendar class="w-4 h-4" />
              {{ post.date }}
            </span>

            <span class="flex items-center gap-1.5">
              <Clock class="w-4 h-4" />
              {{ post.readTime }}
            </span>
          </div>
        </header>

        <div class="relative rounded-2xl overflow-hidden mb-10">
          <img
            :src="post.image"
            :alt="post.title"
            class="w-full h-64 sm:h-96 lg:h-[500px] object-cover"
          />
        </div>

        <div class="flex gap-4 mb-10">
          <button class="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition shadow-sm">
            <Share2 class="w-4 h-4" />
            Share
          </button>
          <button class="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition shadow-sm">
            <Bookmark class="w-4 h-4" />
            Save
          </button>
          <div class="flex-1"></div>
          <button class="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition">
            <Facebook class="w-4 h-4" />
          </button>
          <button class="p-2 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition">
            <Twitter class="w-4 h-4" />
          </button>
          <button class="p-2 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition">
            <Linkedin class="w-4 h-4" />
          </button>
        </div>

        <div
          class="prose prose-lg dark:prose-invert max-w-none
                 prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
                 prose-p:text-gray-600 dark:prose-p:text-gray-300
                 prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                 prose-strong:text-gray-900 dark:prose-strong:text-white
                 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded"
          v-html="post.content"
        />

        <div class="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div class="flex flex-wrap gap-2">
            <span class="text-gray-500 dark:text-gray-400 mr-2">Tags:</span>
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <div class="mt-10 p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm">
          <div class="flex items-start gap-4">
            <img
              :src="post.author.avatar"
              :alt="post.author.name"
              class="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 class="font-bold text-gray-900 dark:text-white">{{ post.author.name }}</h3>
              <p class="text-primary text-sm mb-2">{{ post.author.role }}</p>
              <p class="text-gray-600 dark:text-gray-400">{{ post.author.bio }}</p>
            </div>
          </div>
        </div>
      </article>

      <section v-if="relatedPosts.length > 0" class="mt-20">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">Related Articles</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogCard
            v-for="relatedPost in relatedPosts"
            :key="relatedPost.id"
            :slug="relatedPost.slug"
            :title="relatedPost.title"
            :excerpt="relatedPost.excerpt"
            :image="relatedPost.image"
            :category="relatedPost.category"
            :author="relatedPost.author"
            :date="relatedPost.date"
            :read-time="relatedPost.readTime"
          />
        </div>
      </section>

      <div class="mt-20">
        <CallToAction
          title="Stay Updated"
          description="Subscribe to our newsletter and never miss an article."
          button-text="Subscribe Now"
          variant="gradient"
        />
      </div>
    </main>

    <main v-else class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Article Not Found</h1>
      <p class="text-gray-600 dark:text-gray-400 mb-8">The article you are looking for does not exist.</p>
      <button
        @click="goBack"
        class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-hover transition"
      >
        <ArrowLeft class="w-4 h-4" />
        Back to Blog
      </button>
    </main>

    <FooterComponent />
  </div>
</template>

<style>
.prose h2 {
  @apply mt-8 mb-4;
}
.prose p {
  @apply mb-4;
}
</style>
