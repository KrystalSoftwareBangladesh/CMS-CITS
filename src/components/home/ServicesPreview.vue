<template>
  <section class="py-20">
    <div class="max-w-7xl mx-auto px-4">
      <div class="mb-12 text-center">
        <h2 class="text-3xl font-bold text-gray-900">
          Services That Drive Results
        </h2>
        <p class="mt-3 text-gray-600">
          Video & photo solutions built to convert.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="service in services" :key="service.title"
          class="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition">
          <div class="text-3xl mb-4">{{ service.icon }}</div>
          <h3 class="font-semibold text-gray-900">
            {{ service.title }}
          </h3>
          <p class="mt-2 text-sm text-gray-600">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Service {
  icon: string
  title: string
  description: string
}

const services: Service[] = [
  { icon: '🎬', title: 'Explainer Videos', description: 'Explain your product clearly.' },
  { icon: '📱', title: 'Social Media Ads', description: 'Scroll-stopping ad creatives.' },
  { icon: '📸', title: 'Photo Editing', description: 'High-end photo retouching.' },
  { icon: '✨', title: 'Brand Videos', description: 'Build trust & authority.' },
]
</script>
