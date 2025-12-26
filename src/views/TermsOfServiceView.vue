<script setup lang="ts">
import PageHero from '@/components/common/PageHero.vue'
import PageContainer from '@/components/common/PageContainer.vue'
import PolicySection from '@/components/policy/PolicySection.vue'
</script>

<template>
  <PageHero badge="Legal" title="Terms of Service" highlight="Please Read Carefully" description="These Terms of Service govern your use of our website
    and services. By using our services, you agree to these terms." />

  <PageContainer>
    <PolicySection title="Acceptance of Terms">
      By accessing or using our website and services, you agree to be
      bound by these Terms of Service. If you do not agree, please do
      not use our services.
    </PolicySection>

    <PolicySection title="Services">
      We provide creative services including video editing, photo editing,
      and related visual content solutions. All services are subject to
      availability and agreement.
    </PolicySection>

    <PolicySection title="User Responsibilities">
      You agree to provide accurate information, respect intellectual
      property rights, and not misuse our services for unlawful activities.
    </PolicySection>

    <PolicySection title="Payments & Billing">
      Fees for services will be communicated before project initiation.
      Payments must be made according to the agreed terms and timelines.
    </PolicySection>

    <PolicySection title="Intellectual Property">
      All content, materials, and deliverables remain the intellectual
      property of our company until full payment is received, unless
      otherwise agreed in writing.
    </PolicySection>

    <PolicySection title="Limitation of Liability">
      We are not liable for indirect, incidental, or consequential damages
      arising from the use of our services.
    </PolicySection>

    <PolicySection title="Termination">
      We reserve the right to suspend or terminate services if these
      terms are violated or misused.
    </PolicySection>

    <PolicySection title="Changes to Terms">
      We may update these Terms of Service at any time. Continued use of
      our services constitutes acceptance of the updated terms.
    </PolicySection>

    <PolicySection title="Contact Information">
      For questions regarding these Terms of Service, please contact us
      through our website.
    </PolicySection>
  </PageContainer>
</template>
