<!-- views/HomeView.vue -->
<script setup lang="ts">
// import BannerComponent from '@/components/BannerComponent.vue';
import HeroBanner from '@/components/common/HeroBanner.vue'
// import SectionTitle from '@/components/SectionTitle.vue';
// import ServiceCard from '@/components/ServiceCard.vue';

// const services = [
//   {
//     title: "Web Development",
//     description: "High-performance websites built with modern technologies.",
//     icon: "/icons/web.svg",
//     ctaText: "Learn More"
//   },
//   {
//     title: "Mobile App Development",
//     description: "iOS & Android apps with beautiful UI and powerful backend.",
//     icon: "/icons/mobile.svg",
//     ctaText: "Learn More"
//   },
//   {
//     title: "Cloud Solutions",
//     description: "Scalable cloud infrastructure for enterprise workloads.",
//     icon: "/icons/cloud.svg"
//   }
// ];
</script>

<template>
  <main>
    <HeroBanner />
    <!-- <BannerComponent /> -->
     <!-- <section class="bg-slate-900 py-16">
      <SectionTitle
        title="OUR PRODUCTS & SERVICES"
        subtitle="A secure, compliant, high-performance platform for your needs."
        align="center"
        theme="dark"
      />
    </section>
      <section class="py-16">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard v-for="(service, index) in services" :key="index" :title="service.title"
            :description="service.description" :icon="service.icon" :cta-text="service.ctaText" />
        </div>
      </section> -->
  </main>
</template>
