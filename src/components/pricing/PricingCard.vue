<template>
  <div class="rounded-2xl p-8 border transition
           flex flex-col justify-between" :class="plan.highlighted
            ? 'border-yellow-400 bg-yellow-50 shadow-lg'
            : 'border-gray-200 bg-white'
            ">
    <div>
      <h3 class="text-xl font-semibold text-gray-900">
        {{ plan.name }}
      </h3>

      <p class="mt-2 text-sm text-gray-600">
        {{ plan.description }}
      </p>

      <div class="mt-6 text-3xl font-bold text-gray-900">
        {{ plan.price }}
      </div>

      <ul class="mt-6 space-y-3">
        <li v-for="feature in plan.features" :key="feature" class="flex gap-3 text-sm text-gray-700">
          <span class="text-green-500">✔</span>
          <span>{{ feature }}</span>
        </li>
      </ul>
    </div>

    <button class="mt-8 w-full py-3 rounded-full text-sm font-semibold transition" :class="plan.highlighted
      ? 'bg-black text-white hover:bg-gray-800'
      : 'bg-gray-100 hover:bg-gray-200'
      ">
      {{ plan.price === 'Custom' ? 'Contact Us' : 'Get Started' }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  plan: {
    name: string
    price: string
    description: string
    features: string[]
    highlighted?: boolean
  }
}>()
</script>
