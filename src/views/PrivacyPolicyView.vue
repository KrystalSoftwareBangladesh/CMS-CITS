<script setup lang="ts">
import PageHero from '@/components/common/PageHero.vue'
import PageContainer from '@/components/common/PageContainer.vue'
import PolicySection from '@/components/policy/PolicySection.vue'
</script>

<template>
  <PageHero badge="Legal" title="Privacy Policy" highlight="Your Data Matters" description="This Privacy Policy explains how we collect, use,
    and protect your personal information." />

  <PageContainer>
    <PolicySection title="Introduction">
      We value your privacy and are committed to protecting your personal
      information. This policy outlines how we handle data when you use
      our website and services.
    </PolicySection>

    <PolicySection title="Information We Collect">
      We may collect personal details such as your name, email address,
      phone number, and project-related information when you contact us
      or use our services.
    </PolicySection>

    <PolicySection title="How We Use Your Information">
      Your information is used to provide services, respond to inquiries,
      improve our offerings, and communicate important updates.
    </PolicySection>

    <PolicySection title="Data Protection">
      We implement appropriate technical and organizational measures to
      safeguard your data against unauthorized access or misuse.
    </PolicySection>

    <PolicySection title="Third-Party Services">
      We may use trusted third-party tools for analytics, hosting, or
      communication. These services only access data necessary to perform
      their functions.
    </PolicySection>

    <PolicySection title="Your Rights">
      You have the right to request access, correction, or deletion of
      your personal data. Contact us anytime regarding privacy concerns.
    </PolicySection>

    <PolicySection title="Policy Updates">
      We may update this Privacy Policy from time to time. Any changes
      will be posted on this page.
    </PolicySection>
  </PageContainer>
</template>
