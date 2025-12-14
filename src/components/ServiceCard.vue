<template>
  <article ref="cardRef" :class="[
    'group relative flex flex-col p-6 rounded-2xl border transition-all duration-300 shadow-sm',
    'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700',
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
  ]">
    <!-- Icon -->
    <div v-if="icon" class="mb-4">
      <img :src="icon" :alt="title + ' icon'"
        class="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110" />
    </div>

    <!-- Title -->
    <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-2
             transition-colors duration-300 group-hover:text-primary-600">
      {{ title }}
    </h3>

    <!-- Description -->
    <p class="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
      {{ description }}
    </p>

    <!-- CTA -->
    <div v-if="ctaText" class="mt-auto">
      <button class="inline-flex items-center gap-1 text-primary-600 dark:text-primary-400
               font-medium transition-all duration-300 group-hover:gap-2">
        {{ ctaText }}
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

interface Props {
  title: string;
  description: string;
  icon?: string;
  ctaText?: string;
}

defineProps<Props>(); // No "unused variable" warning

const cardRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);
let observer: IntersectionObserver | null = null;

onMounted(() => {
  if (cardRef.value) {
    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          isVisible.value = true;
          observer?.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(cardRef.value);
  }

  // Fallback: ensure card becomes visible even if observer fails
  setTimeout(() => {
    if (!isVisible.value) isVisible.value = true;
  }, 300);
});

onBeforeUnmount(() => {
  observer?.disconnect();
});
</script>
