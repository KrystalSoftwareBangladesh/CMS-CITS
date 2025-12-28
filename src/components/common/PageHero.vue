<script setup lang="ts">
interface Props {
  badge?: string
  title: string
  highlight?: string
  description?: string
}

defineProps<Props>()
</script>

<template>
  <section class="pt-32 pb-20 text-center">
    <div v-if="badge" class="inline-flex items-center gap-2
             px-4 py-1.5 rounded-full
             bg-gray-100 dark:bg-gray-800 text-sm text-gray-600 dark:text-gray-400">
      <span class="w-2 h-2 rounded-full bg-blue-500"></span>
      {{ badge }}
    </div>

    <h1 class="mt-6 text-4xl sm:text-5xl
             font-extrabold text-gray-900 dark:text-white">
      {{ title }}
      <template v-if="highlight">
        <span class="relative inline-block ml-2">
          <span class="relative z-10 px-2">
            {{ highlight }}
          </span>
          <span class="absolute inset-0 bg-primary-soft dark:bg-primary/30
                   rounded-lg -z-0"></span>
        </span>
      </template>
    </h1>

    <p v-if="description" class="mt-6 max-w-3xl mx-auto
             text-lg text-gray-600 dark:text-gray-400">
      {{ description }}
    </p>
  </section>
</template>
