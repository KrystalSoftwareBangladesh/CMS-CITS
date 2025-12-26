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
  <footer class="bg-gray-50 border-t border-gray-200">
    <div class="max-w-7xl mx-auto px-4 py-16">
      <!-- Top Grid -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
        <!-- Brand -->
        <div>
          <!-- <img src="/logo.png" alt="Company Logo" class="w-12 h-12 rounded-full" /> -->
           <img src="/logo.png" alt="Company Logo" class="w-48 h-12 rounded-full" />

          <p class="mt-4 text-sm text-gray-600 max-w-xs">
            We help SaaS companies and brands grow with high-impact
            video and creative content.
          </p>

          <!-- Social Icons -->
          <div class="mt-4 flex items-center gap-3">
            <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center justify-center
                     w-9 h-9 rounded-full
                     bg-white border border-gray-200
                     text-gray-600
                     hover:text-gray-900 hover:border-gray-300
                     transition" :aria-label="social.name">
              <component :is="social.icon" class="w-4 h-4" />
            </a>
          </div>
        </div>

        <!-- Navigation -->
        <div>
          <h4 class="text-sm font-semibold text-gray-900 mb-4">
            Company
          </h4>
          <ul class="space-y-2 text-sm text-gray-600">
            <li>
              <RouterLink to="/about" class="hover:text-gray-900 transition">
                About
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/services" class="hover:text-gray-900 transition">
                Service
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/pricing" class="hover:text-gray-900 transition">
                Pricing
              </RouterLink>
            </li>

            <li>
              <RouterLink to="/contact" class="hover:text-gray-900 transition">
                Contact
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-sm font-semibold text-gray-900 mb-4">
            Services
          </h4>
          <ul class="space-y-2 text-sm text-gray-600">
            <li><a href="#" class="hover:text-gray-900">Video Editing</a></li>
            <li><a href="#" class="hover:text-gray-900">Explainer Videos</a></li>
            <li><a href="#" class="hover:text-gray-900">Social Media Ads</a></li>
            <li><a href="#" class="hover:text-gray-900">Photo Editing</a></li>
          </ul>
        </div>

        <!-- CTA -->
        <div>
          <h4 class="text-sm font-semibold text-gray-900 mb-4">
            Let’s Work Together
          </h4>

          <p class="text-sm text-gray-600 mb-4">
            Ready to grow your brand with high-quality visuals?
          </p>

          <button class="inline-flex items-center justify-center
                   px-5 py-2.5 rounded-full
                   bg-primary hover:bg-primary-hover
                   text-sm font-semibold transition">
            <RouterLink to="/contact">
              Book a Free Call
            </RouterLink>
          </button>
        </div>
      </div>

      <!-- Divider -->
      <div class="mt-12 border-t border-gray-200 pt-6
               flex flex-col md:flex-row
               justify-between items-center gap-4">
        <p class="text-xs text-gray-500">
          © {{ year }}
          <a :href="SITE_CONFIG.website" target="_blank" rel="noopener noreferrer"
            class="font-medium hover:text-gray-900 transition">
            {{ SITE_CONFIG.name }}
          </a>.
          {{ SITE_CONFIG.copyright }}
        </p>

        <div class="flex gap-4 text-xs text-gray-500">
          <RouterLink to="/privacy-policy" class="hover:text-gray-900 transition">
            Privacy Policy
          </RouterLink>
          <RouterLink to="/terms-of-service" class="hover:text-gray-900 transition">
            Terms of Service
          </RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>
