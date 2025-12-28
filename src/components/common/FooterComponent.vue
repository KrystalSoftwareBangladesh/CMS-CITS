<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-vue-next'
import { SITE_CONFIG } from '@/config/site'

const year = new Date().getFullYear()

const socials = [
  {
    name: 'Facebook',
    icon: Facebook,
    url: '#'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    url: '#'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: '#'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: '#'
  }
]
</script>

<template>
  <footer class="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
    <div class="max-w-7xl mx-auto px-4 py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <img src="/logo.png" alt="Company Logo" class="w-48 h-12 rounded-full dark:brightness-110" />

          <p class="mt-4 text-sm text-gray-600 dark:text-gray-400 max-w-xs">
            We help SaaS companies and brands grow with high-impact
            video and creative content.
          </p>

          <div class="mt-4 flex items-center gap-3">
            <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center justify-center
                     w-9 h-9 rounded-full
                     bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600
                     text-gray-600 dark:text-gray-400
                     hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-500
                     transition" :aria-label="social.name">
              <component :is="social.icon" class="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-4">
            Company
          </h4>
          <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>
              <RouterLink to="/about" class="hover:text-gray-900 dark:hover:text-white transition">
                About
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/services" class="hover:text-gray-900 dark:hover:text-white transition">
                Service
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/pricing" class="hover:text-gray-900 dark:hover:text-white transition">
                Pricing
              </RouterLink>
            </li>

            <li>
              <RouterLink to="/contact" class="hover:text-gray-900 dark:hover:text-white transition">
                Contact
              </RouterLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-4">
            Services
          </h4>
          <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li><a href="#" class="hover:text-gray-900 dark:hover:text-white">Video Editing</a></li>
            <li><a href="#" class="hover:text-gray-900 dark:hover:text-white">Explainer Videos</a></li>
            <li><a href="#" class="hover:text-gray-900 dark:hover:text-white">Social Media Ads</a></li>
            <li><a href="#" class="hover:text-gray-900 dark:hover:text-white">Photo Editing</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-4">
            Let's Work Together
          </h4>

          <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Ready to grow your brand with high-quality visuals?
          </p>

          <button class="inline-flex items-center justify-center
                   px-5 py-2.5 rounded-full
                   bg-primary hover:bg-primary-hover
                   text-white text-sm font-semibold transition">
            <RouterLink to="/contact">
              Book a Free Call
            </RouterLink>
          </button>
        </div>
      </div>

      <div class="mt-12 border-t border-gray-200 dark:border-gray-700 pt-6
               flex flex-col md:flex-row
               justify-between items-center gap-4">
        <p class="text-xs text-gray-500 dark:text-gray-400">
          © {{ year }}
          <a :href="SITE_CONFIG.website" target="_blank" rel="noopener noreferrer"
            class="font-medium hover:text-gray-900 dark:hover:text-white transition">
            {{ SITE_CONFIG.name }}
          </a>.
          {{ SITE_CONFIG.copyright }}
        </p>

        <div class="flex gap-4 text-xs text-gray-500 dark:text-gray-400">
          <RouterLink to="/privacy-policy" class="hover:text-gray-900 dark:hover:text-white transition">
            Privacy Policy
          </RouterLink>
          <RouterLink to="/terms-of-service" class="hover:text-gray-900 dark:hover:text-white transition">
            Terms of Service
          </RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>
