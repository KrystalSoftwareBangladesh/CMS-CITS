<template>
  <section class="py-20">
    <div class="max-w-6xl mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold text-gray-900">
        How It Works
      </h2>

      <div class="mt-12 grid md:grid-cols-3 gap-8">
        <div v-for="step in steps" :key="step.title">
          <div class="text-4xl font-bold text-yellow-400">
            {{ step.number }}
          </div>
          <h3 class="mt-4 font-semibold text-gray-900">
            {{ step.title }}
          </h3>
          <p class="mt-2 text-gray-600 text-sm">
            {{ step.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  { number: '01', title: 'Book a Call', description: 'Tell us about your goals.' },
  { number: '02', title: 'We Create', description: 'Strategy, script & production.' },
  { number: '03', title: 'You Grow', description: 'Get content that converts.' },
]
</script>
