<template>
  <footer class="bg-gray-50 border-t border-gray-200">
    <div class="max-w-7xl mx-auto px-4 py-16">
      <!-- Top Grid -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
        <!-- Brand -->
        <div>
          <img src="https://i.pravatar.cc/48" alt="Company Logo" class="w-12 h-12 rounded-full" />

          <p class="mt-4 text-sm text-gray-600 max-w-xs">
            We help SaaS companies and brands grow with high-impact
            video and creative content.
          </p>
        </div>

        <!-- Navigation -->
        <div>
          <h4 class="text-sm font-semibold text-gray-900 mb-4">
            Company
          </h4>
          <ul class="space-y-2 text-sm text-gray-600">
            <li><a href="#" class="hover:text-gray-900">About</a></li>
            <li><a href="#" class="hover:text-gray-900">Services</a></li>
            <li><a href="#" class="hover:text-gray-900">Pricing</a></li>
            <li><a href="#" class="hover:text-gray-900">Contact</a></li>
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
                   bg-yellow-400 hover:bg-yellow-500
                   text-sm font-semibold transition">
            Book a Free Call
          </button>
        </div>
      </div>

      <!-- Divider -->
      <div class="mt-12 border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-xs text-gray-500">
          © {{ year }} Your Company. All rights reserved.
        </p>

        <div class="flex gap-4 text-xs text-gray-500">
          <a href="#" class="hover:text-gray-900">Privacy Policy</a>
          <a href="#" class="hover:text-gray-900">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
