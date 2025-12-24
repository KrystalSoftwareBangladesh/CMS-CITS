<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div v-for="stat in stats" :key="stat.label">
          <h3 class="text-3xl font-bold text-gray-900">
            {{ stat.value }}
          </h3>
          <p class="mt-1 text-sm text-gray-600">
            {{ stat.label }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Stat {
  value: string
  label: string
}

const stats: Stat[] = [
  { value: '1200+', label: 'Videos Produced' },
  { value: '650+', label: 'Happy Clients' },
  { value: '5★', label: 'Client Rating' },
  { value: '100%', label: 'Satisfaction' },
]
</script>
