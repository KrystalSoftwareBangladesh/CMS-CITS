<!-- views/HomeView.vue -->
<script setup lang="ts">
import HeroBanner from '@/components/common/HeroBanner.vue'
import StatsSection from '@/components/home/StatsSection.vue';
import ServicesPreview from '@/components/home/ServicesPreview.vue';
import WhyUsSection from '@/components/home/WhyUsSection.vue';
import ProcessSection from '@/components/home/ProcessSection.vue';
import FeaturedWork from '@/components/home/FeaturedWork.vue';
import TestimonialsSection from '@/components/home/TestimonialsSection.vue';
import FinalCTA from '@/components/home/FinalCTA.vue';
</script>

<template>
  <main>
    <HeroBanner />
    <StatsSection />
    <ServicesPreview />
    <WhyUsSection />
    <ProcessSection />
    <FeaturedWork />
    <TestimonialsSection />
    <FinalCTA />
  </main>
</template>
