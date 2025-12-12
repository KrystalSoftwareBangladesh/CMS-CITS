<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<template>
  <div class="w-full text-center text-sm text-gray-500 py-4 border-t bg-white">
    © {{ year }} <a href="https://github.com/KrystalSoftwareBangladesh" target="_blank"><span class="font-semibold">Krystal Software Bangladesh</span></a>.
    All rights reserved.
    <!-- <div class="mt-1 space-x-4">
      <a href="/privacy-policy" class="hover:underline">Privacy Policy</a>
      <a href="/terms-of-service" class="hover:underline">Terms of Service</a>
      <a href="/contact" class="hover:underline">Contact</a>
    </div> -->
  </div>
</template>
