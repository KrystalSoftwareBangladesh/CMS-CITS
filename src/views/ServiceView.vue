<template>
  <div class="max-w-7xl mx-auto px-4">
    <!-- HERO -->
     <PageHero badge="What We Do Best" title="Creative Services That" highlight="Drive Results" description="From high-impact videos to pixel-perfect photo editing,
    we help brands tell stories that convert." />

    <!-- VIDEO SERVICES -->
    <ServiceSection title="Video Editing Services"
      subtitle="High-quality video content built for engagement, clarity, and growth.">
      <ServiceCard title="YouTube Video Editing"
        description="Retention-focused editing designed to keep viewers watching." :features="[
          'Jump cuts & pacing',
          'Color correction',
          'Sound enhancement',
          'Motion graphics'
        ]">
        <template #icon>🎬</template>
      </ServiceCard>

      <ServiceCard title="Short-form Reels & Shorts"
        description="Fast, engaging vertical videos optimized for social platforms." :features="[
          'Instagram, TikTok & Shorts',
          'Captions & emojis',
          'Trend-based transitions'
        ]">
        <template #icon>📱</template>
      </ServiceCard>

      <ServiceCard title="Corporate & SaaS Videos"
        description="Professional videos that communicate value and build trust." :features="[
          'Brand consistency',
          'Subtitles & voice-over',
          'Product & pitch videos'
        ]">
        <template #icon>🏢</template>
      </ServiceCard>
    </ServiceSection>

    <!-- PHOTO SERVICES -->
    <ServiceSection title="Photo Editing Services" subtitle="Clean, creative, and conversion-focused image editing."
      class="mt-24">
      <ServiceCard title="Product Photo Editing" description="Make your products stand out with clean, sharp visuals."
        :features="[
          'Background removal',
          'Color correction',
          'Shadow & reflection'
        ]">
        <template #icon>📸</template>
      </ServiceCard>

      <ServiceCard title="Portrait Retouching" description="Natural-looking retouching that preserves realism."
        :features="[
          'Skin retouching',
          'Color grading',
          'Lighting enhancement'
        ]">
        <template #icon>🧑‍🎨</template>
      </ServiceCard>

      <ServiceCard title="Creative Photo Manipulation" description="Eye-catching visuals for marketing and advertising."
        :features="[
          'Composite images',
          'Creative effects',
          'Campaign visuals'
        ]">
        <template #icon>✨</template>
      </ServiceCard>
    </ServiceSection>

    <!-- WHY OUR SERVICES -->
    <section class="py-24 bg-gray-50 rounded-2xl mt-24">
      <div class="max-w-5xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold text-gray-900">
          Why Our Services Work
        </h2>

        <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="item in benefits" :key="item.title" class="bg-white border border-gray-200 rounded-xl p-6">
            <div class="text-3xl mb-4">{{ item.icon }}</div>
            <h3 class="font-semibold text-gray-900">
              {{ item.title }}
            </h3>
            <p class="mt-2 text-sm text-gray-600">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 text-center">
      <h2 class="text-3xl font-bold text-gray-900">
        Ready to Start Your Project?
      </h2>
      <p class="mt-4 text-gray-600 max-w-xl mx-auto">
        Tell us about your goals and we’ll help you choose the right service.
      </p>

      <button class="mt-6 px-8 py-3 rounded-full
               bg-primary hover:bg-primary-hover
               text-sm font-semibold transition">
        <RouterLink to="/contact">
          Contact Us
        </RouterLink>
      </button>
    </section>
  </div>
</template>

<script setup lang="ts">
import PageHero from '@/components/common/PageHero.vue';
import ServiceCard from '@/components/service/ServiceCard.vue'
import ServiceSection from '@/components/service/ServiceSection.vue'

const benefits = [
  {
    icon: '🎯',
    title: 'Results Focused',
    description: 'Every service is designed to drive engagement and conversions.',
  },
  {
    icon: '⚡',
    title: 'Fast Turnaround',
    description: 'Quick delivery without compromising quality.',
  },
  {
    icon: '🤝',
    title: 'Dedicated Support',
    description: 'Clear communication and unlimited revisions.',
  },
  {
    icon: '✨',
    title: 'Premium Quality',
    description: 'High-end visuals that elevate your brand.',
  },
]
</script>
