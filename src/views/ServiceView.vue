<template>
  <div class="max-w-7xl mx-auto px-4">
    <!-- Hero -->
    <section class="py-20 text-center">
      <h1 class="text-4xl font-bold text-gray-900">
        Our Services
      </h1>
      <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
        We help brands and creators bring their visuals to life through
        professional video editing, photo editing, and creative services.
      </p>
    </section>

    <!-- Video Services -->
    <ServiceSection title="Video Editing Services"
      subtitle="High-quality video editing tailored for creators, brands, and businesses.">
      <ServiceCard title="YouTube Video Editing" description="Professional edits to keep your audience engaged."
        :features="[
          'Jump cuts & pacing',
          'Color correction',
          'Sound enhancement',
          'Motion graphics'
        ]">
        <template #icon>
          🎬
        </template>
      </ServiceCard>

      <ServiceCard title="Reels & Shorts" description="Fast-paced vertical videos optimized for social platforms."
        :features="[
          'Instagram & TikTok formats',
          'Captions & emojis',
          'Trending transitions'
        ]">
        <template #icon>
          📱
        </template>
      </ServiceCard>

      <ServiceCard title="Corporate Videos" description="Clean and professional videos for business communication."
        :features="[
          'Brand consistency',
          'Subtitles',
          'Presentation videos'
        ]">
        <template #icon>
          🏢
        </template>
      </ServiceCard>
    </ServiceSection>

    <!-- Photo Services -->
    <ServiceSection title="Photo Editing Services" subtitle="Enhance images with precision and creativity.">
      <ServiceCard title="Product Photo Editing"
        description="Make your products stand out with clean and sharp visuals." :features="[
          'Background removal',
          'Color correction',
          'Shadow & reflection'
        ]">
        <template #icon>
          📸
        </template>
      </ServiceCard>

      <ServiceCard title="Portrait Retouching" description="Natural-looking retouching while preserving realism."
        :features="[
          'Skin retouching',
          'Color grading',
          'Lighting enhancement'
        ]">
        <template #icon>
          🧑‍🎨
        </template>
      </ServiceCard>

      <ServiceCard title="Photo Manipulation" description="Creative photo compositions for marketing and branding."
        :features="[
          'Composite images',
          'Creative effects',
          'Advertising visuals'
        ]">
        <template #icon>
          ✨
        </template>
      </ServiceCard>
    </ServiceSection>

    <!-- CTA -->
    <section class="py-20 text-center">
      <h2 class="text-3xl font-bold text-gray-900">
        Ready to get started?
      </h2>
      <p class="mt-3 text-gray-600">
        Let’s discuss your project and bring your ideas to life.
      </p>

      <div class="mt-6">
        <button class="px-8 py-3 rounded-lg text-sm font-medium text-white
                 bg-blue-600 hover:bg-blue-700 transition">
          Contact Us
        </button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import ServiceCard from '@/components/service/ServiceCard.vue'
import ServiceSection from '@/components/service/ServiceSection.vue'
</script>
