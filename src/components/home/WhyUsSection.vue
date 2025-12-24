<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 class="text-3xl font-bold text-gray-900">
          Why Clients Choose Us
        </h2>
        <p class="mt-4 text-gray-600">
          We don’t just edit videos. We help you grow.
        </p>

        <ul class="mt-6 space-y-4">
          <li v-for="item in points" :key="item" class="flex gap-3">
            <span class="text-green-500">✔</span>
            <span class="text-gray-700">{{ item }}</span>
          </li>
        </ul>
      </div>

      <img src="https://dummyimage.com/600x400/e5e7eb/000" alt="Why us" class="rounded-xl" />
    </div>
  </section>
</template>

<script setup lang="ts">
const points: string[] = [
  'Dedicated creative director',
  'Fast turnaround time',
  'SaaS-focused storytelling',
  'Unlimited revisions',
]
</script>
