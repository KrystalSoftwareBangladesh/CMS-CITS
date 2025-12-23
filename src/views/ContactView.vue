<template>
  <section class="max-w-5xl mx-auto px-4 py-12">
    <!-- Header -->
    <div class="text-center mb-10">
      <h1 class="text-3xl font-bold text-gray-900">Contact Us</h1>
      <p class="mt-3 text-gray-600">
        Have a question or need help? Fill out the form and we’ll get back to you.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Contact Info -->
      <div class="space-y-6">
        <div>
          <h2 class="text-lg font-semibold text-gray-800">Our Office</h2>
          <p class="mt-2 text-gray-600">
            123 CMS Street<br />
            Dhaka, Bangladesh
          </p>
        </div>

        <div>
          <h2 class="text-lg font-semibold text-gray-800">Email</h2>
          <p class="mt-2 text-gray-600">support@cms.com</p>
        </div>

        <div>
          <h2 class="text-lg font-semibold text-gray-800">Phone</h2>
          <p class="mt-2 text-gray-600">+880 1234 567890</p>
        </div>

        <div>
          <h2 class="text-lg font-semibold text-gray-800">Working Hours</h2>
          <p class="mt-2 text-gray-600">
            Sunday – Thursday<br />
            9:00 AM – 6:00 PM
          </p>
        </div>
      </div>

      <!-- Contact Form -->
      <form class="bg-white border border-gray-200 rounded-lg p-6 space-y-5" @submit.prevent="handleSubmit">
        <div>
          <label class="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input v-model="form.name" type="text" required
            class="mt-1 w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input v-model="form.email" type="email" required
            class="mt-1 w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">
            Subject
          </label>
          <input v-model="form.subject" type="text"
            class="mt-1 w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea v-model="form.message" rows="4" required
            class="mt-1 w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <div class="pt-2">
          <button type="submit" :disabled="loading" class="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-lg
                   text-white bg-blue-600 hover:bg-blue-700 transition disabled:opacity-50">
            {{ loading ? 'Sending...' : 'Send Message' }}
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

const loading = ref(false)

const form = reactive<ContactForm>({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const handleSubmit = async (): Promise<void> => {
  loading.value = true

  try {
    // TODO: Replace with API call
    console.log('Contact form submitted:', { ...form })

    // Simulate request
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Reset form
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''

    alert('Message sent successfully!')
  } catch (error) {
    console.error(error)
    alert('Something went wrong. Please try again.')
  } finally {
    loading.value = false
  }
}
</script>
