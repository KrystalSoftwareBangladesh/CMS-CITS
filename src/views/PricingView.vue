<script setup lang="ts">
import PageHero from '@/components/common/PageHero.vue';
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
    <PageHero badge="Simple & Transparent Pricing" title="Pricing That Fits" highlight="Your Growth" description="Flexible pricing plans designed for startups, creators,
    and growing businesses." />

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
