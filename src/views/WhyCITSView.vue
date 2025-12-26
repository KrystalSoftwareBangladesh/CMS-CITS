<script setup lang="ts">
import PageHero from '@/components/common/PageHero.vue'
import PageContainer from '@/components/common/PageContainer.vue'
import ReasonCard from '@/components/why/ReasonCard.vue'
</script>

<template>
  <!-- HERO -->
  <PageHero badge="Why Choose Us" title="Why" highlight="CITS" description="Catalyst IT Solutions helps businesses grow through
    reliable technology, clear communication, and long-term partnerships." />

  <PageContainer>
    <!-- INTRO -->
    <section class="mb-20 text-center">
      <h2 class="text-3xl font-bold text-gray-900">
        Built on Trust, Driven by Results
      </h2>

      <p class="mt-4 max-w-3xl mx-auto text-gray-600">
        At Catalyst IT Solutions (CITS), we don’t just deliver services —
        we become a technology partner you can rely on.
      </p>
    </section>

    <!-- REASONS -->
    <section class="mb-24">
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ReasonCard title="Experienced & Reliable" description="Years of experience delivering scalable IT solutions
          for businesses of all sizes." />

        <ReasonCard title="Clear Communication" description="We believe transparency and clarity are the foundation
          of successful partnerships." />

        <ReasonCard title="Client-Centric Approach" description="Your goals drive our solutions. We tailor everything
          to your specific business needs." />

        <ReasonCard title="Quality Over Quantity" description="We focus on delivering high-quality solutions rather
          than rushing through projects." />

        <ReasonCard title="Long-Term Partnership" description="Our goal is not one-off projects, but long-term
          collaboration and growth." />

        <ReasonCard title="Modern Technology Stack" description="We use proven, modern technologies to ensure
          performance, security, and scalability." />
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 text-center bg-gray-50 rounded-2xl">
      <h2 class="text-3xl font-bold text-gray-900">
        Ready to Work with CITS?
      </h2>

      <p class="mt-4 text-gray-600">
        Let’s discuss how Catalyst IT Solutions can help
        your business grow with confidence.
      </p>

      <RouterLink to="/contact" class="inline-flex items-center justify-center
               mt-6 px-8 py-3 rounded-full
               bg-yellow-400 hover:bg-yellow-500
               text-sm font-semibold transition">
        Book a Free Call
      </RouterLink>
    </section>
  </PageContainer>
</template>
