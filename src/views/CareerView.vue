<script setup lang="ts">
import PageHero from '@/components/common/PageHero.vue'
import PageContainer from '@/components/common/PageContainer.vue'
import JobCard from '@/components/career/JobCard.vue'

const jobs = [
  {
    title: 'Senior Video Editor',
    location: 'Remote',
    type: 'Full-time',
    description:
      'We are looking for a creative and detail-oriented video editor with strong storytelling skills.',
  },
  {
    title: 'Motion Graphics Designer',
    location: 'Remote',
    type: 'Contract',
    description:
      'Create engaging motion graphics for ads, explainers, and social content.',
  },
  {
    title: 'Account Manager',
    location: 'Dhaka / Remote',
    type: 'Full-time',
    description:
      'Work closely with clients to manage projects and ensure successful delivery.',
  },
]
</script>

<template>
  <!-- HERO -->
  <PageHero badge="Careers" title="Join Our" highlight="Creative Team" description="We’re always looking for talented people who love creativity,
    storytelling, and building meaningful work together." />

  <PageContainer>
    <!-- WHY WORK WITH US -->
    <section class="mb-20 text-center">
      <h2 class="text-3xl font-bold text-gray-900">
        Why Work With Us
      </h2>

      <p class="mt-4 max-w-3xl mx-auto text-gray-600">
        We believe great work happens when talented people feel supported,
        trusted, and inspired to grow.
      </p>

      <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="item in [
          'Remote-friendly culture',
          'Creative freedom',
          'Flexible working hours',
          'Growth-focused environment'
        ]" :key="item" class="bg-gray-50 rounded-xl p-6 text-sm text-gray-700 border border-gray-200">
          {{ item }}
        </div>
      </div>
    </section>

    <!-- OPEN POSITIONS -->
    <section class="mb-24">
      <h2 class="text-3xl font-bold text-gray-900 text-center">
        Open Positions
      </h2>

      <div class="mt-12 grid gap-6 max-w-4xl mx-auto">
        <JobCard v-for="job in jobs" :key="job.title" v-bind="job" />
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 text-center bg-gray-50 rounded-2xl">
      <h2 class="text-3xl font-bold text-gray-900">
        Don’t See Your Role?
      </h2>

      <p class="mt-4 text-gray-600">
        We’re always happy to meet talented people.
        Send us your portfolio and tell us how you can contribute.
      </p>

      <RouterLink to="/contact" class="inline-flex items-center justify-center
               mt-6 px-8 py-3 rounded-full
               bg-primary hover:bg-primary-hover
               text-sm font-semibold transition">
        Get in Touch
      </RouterLink>
    </section>
  </PageContainer>
</template>
