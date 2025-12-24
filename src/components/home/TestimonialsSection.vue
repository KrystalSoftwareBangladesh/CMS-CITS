<template>
  <section class="py-20">
    <div class="max-w-6xl mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold text-gray-900">
        What Clients Say
      </h2>

      <div class="mt-12 grid md:grid-cols-3 gap-6">
        <div v-for="t in testimonials" :key="t.name" class="bg-white border rounded-xl p-6">
          <p class="text-gray-600 text-sm">
            “{{ t.message }}”
          </p>
          <div class="mt-4 font-semibold text-gray-900">
            {{ t.name }}
          </div>
          <div class="text-xs text-gray-500">
            {{ t.company }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  { name: 'John Doe', company: 'SaaS Corp', message: 'Best video team we’ve worked with.' },
  { name: 'Jane Smith', company: 'Startup X', message: 'Clear process and amazing results.' },
  { name: 'Alex Ray', company: 'Brandly', message: 'Highly recommended creative partner.' },
]
</script>
