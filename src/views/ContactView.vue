<template>
  <div class="max-w-7xl mx-auto px-4">
    <!-- HERO -->
    <PageHero badge="Get in Touch" title="Let’s Talk About" highlight="Your Project" description="Whether you need video editing, photo editing, or a full creative
    strategy — we’re here to help." />

    <!-- CONTACT + FORM -->
    <section class="pb-20 grid lg:grid-cols-2 gap-12">
      <!-- LEFT -->
      <div class="space-y-8">
        <div>
          <h2 class="text-2xl font-bold text-gray-900">
            Contact Information
          </h2>
          <p class="mt-3 text-gray-600">
            Reach out directly or leave us a message — we usually reply within 24 hours.
          </p>
        </div>

        <div class="space-y-6">
          <InfoItem icon="📧" title="Email" value="hello@yourcompany.com" />
          <InfoItem icon="📞" title="Phone" value="+880 1234 567 890" />
          <InfoItem icon="📍" title="Location" value="Dhaka, Bangladesh — Serving clients worldwide" />
        </div>

        <!-- QUICK CTA -->
        <div class="bg-gray-50 rounded-2xl p-6 border border-gray-200">
          <h3 class="font-semibold text-gray-900">
            Prefer a quick call?
          </h3>
          <p class="mt-2 text-sm text-gray-600">
            Book a free 15-minute call and let’s discuss your goals.
          </p>

          <button class="mt-4 px-6 py-2.5 rounded-full
                   bg-yellow-400 hover:bg-yellow-500
                   text-sm font-semibold transition">
            Book a Free Call
          </button>
        </div>
      </div>

      <!-- RIGHT: FORM -->
      <div class="bg-white border border-gray-200 rounded-2xl p-8">
        <h2 class="text-2xl font-bold text-gray-900">
          Send Us a Message
        </h2>

        <!-- <form class="mt-6 space-y-5" @submit.prevent="submit">
          <FormInput label="Full Name" v-model="form.name" required />
          <FormInput label="Email Address" type="email" v-model="form.email" required />
          <FormInput label="Subject" v-model="form.subject" />
          <FormTextarea label="Message" v-model="form.message" required />

          <button type="submit" :disabled="loading" class="w-full py-3 rounded-full
                   bg-black text-white
                   text-sm font-semibold
                   hover:bg-gray-800 transition
                   disabled:opacity-50">
            {{ loading ? 'Sending...' : 'Send Message' }}
          </button>
        </form> -->
        <form class="mt-6 space-y-5" @submit.prevent="submit">
          <FormInput label="Full Name" v-model="form.name" required />

          <FormInput label="Email Address" type="email" v-model="form.email" required />

          <FormInput label="Subject" v-model="form.subject" />

          <FormTextArea label="Message" v-model="form.message" required />

          <button type="submit" :disabled="loading" class="w-full py-3 rounded-full
           bg-black text-white
           text-sm font-semibold
           hover:bg-gray-800 transition
           disabled:opacity-50">
            {{ loading ? 'Sending...' : 'Send Message' }}
          </button>
        </form>
      </div>
    </section>

    <!-- MAP + CALENDAR -->
    <section class="pb-24 grid lg:grid-cols-2 gap-12">
      <!-- MAP -->
      <div class="rounded-2xl overflow-hidden border border-gray-200">
        <iframe title="Google Map" class="w-full h-[380px]" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Dhaka%20Bangladesh&output=embed" />
      </div>

      <!-- CALENDAR -->
      <div class="rounded-2xl overflow-hidden border border-gray-200 bg-white">
        <iframe title="Schedule a Call" class="w-full h-[380px]" src="https://calendly.com/acmeschedule/15min" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

import PageHero from '@/components/common/PageHero.vue';
import FormInput from '@/components/contact/FormInput.vue'
import FormTextArea from '@/components/contact/FormTextArea.vue'
import InfoItem from '@/components/contact/InfoItem.vue'

const loading = ref(false)

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const submit = async () => {
  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))
  loading.value = false
}
</script>
