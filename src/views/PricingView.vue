<script setup lang="ts">
import PricingCard from '@/components/pricing/PricingCard.vue';

interface PricingPlan {
  name: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
}

const plans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$299 / project',
    description: 'Perfect for small businesses and creators.',
    features: [
      '1 video or photo project',
      'Basic editing',
      '2 revisions',
      '3–5 days delivery',
    ],
  },
  {
    name: 'Growth',
    price: '$999 / month',
    description: 'Best for growing brands and startups.',
    highlighted: true,
    features: [
      'Up to 8 videos or edits',
      'Advanced editing & motion graphics',
      'Unlimited revisions',
      'Priority delivery',
    ],
  },
  {
    name: 'Scale',
    price: 'Custom',
    description: 'For teams that need ongoing creative support.',
    features: [
      'Dedicated creative team',
      'Unlimited projects',
      'Fast turnaround',
      'Dedicated account manager',
    ],
  },
]

const included: string[] = [
  'Dedicated project manager',
  'Clear communication',
  'High-quality output',
  'Commercial usage rights',
]
</script>

<template>
  <div class="max-w-7xl mx-auto px-4">
    <!-- HERO -->
    <section class="pt-32 pb-20 text-center">
      <div class="inline-flex items-center gap-2
               px-4 py-1.5 rounded-full
               bg-gray-100 text-sm text-gray-600">
        <span class="w-2 h-2 rounded-full bg-blue-500"></span>
        Simple & Transparent Pricing
      </div>

      <h1 class="mt-6 text-4xl sm:text-5xl font-extrabold text-gray-900">
        Pricing That Fits
        <span class="relative inline-block ml-2">
          <span class="relative z-10 px-2">Your Growth</span>
          <span class="absolute inset-0 bg-yellow-200 rounded-lg -z-0"></span>
        </span>
      </h1>

      <p class="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
        Flexible pricing plans designed for startups, creators,
        and growing businesses.
      </p>
    </section>

    <!-- PRICING CARDS -->
    <section class="pb-20">
      <div class="grid md:grid-cols-3 gap-8">
        <PricingCard v-for="plan in plans" :key="plan.name" :plan="plan" />
      </div>
    </section>

    <!-- WHAT’S INCLUDED -->
    <section class="py-20 bg-gray-50 rounded-2xl">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold text-gray-900">
          What’s Included in Every Plan
        </h2>

        <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="item in included" :key="item" class="bg-white border border-gray-200 rounded-xl p-6">
            <span class="text-green-500 text-xl">✔</span>
            <p class="mt-3 text-sm text-gray-700">
              {{ item }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CUSTOM PLAN -->
    <section class="py-24 text-center">
      <h2 class="text-3xl font-bold text-gray-900">
        Need a Custom Plan?
      </h2>
      <p class="mt-4 text-gray-600 max-w-xl mx-auto">
        Large projects, monthly retainers, or agency partnerships?
        Let’s talk and build something tailored for you.
      </p>

      <button class="mt-6 px-8 py-3 rounded-full
               bg-yellow-400 hover:bg-yellow-500
               text-sm font-semibold transition">
        Book a Free Call
      </button>
    </section>
  </div>
</template>
