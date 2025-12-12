<template>
  <section
    class="relative w-full h-[400px] md:h-[480px] flex items-center justify-center overflow-hidden shadow-lg">
    <!-- Static Banner Image -->
    <img src="/images/banner.webp" alt="Banner" class="absolute inset-0 w-full h-full object-cover" />

    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-black/40"></div>

    <!-- Banner Text -->
    <div class="relative z-10 text-center text-white px-4">
      <h1 class="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
        Welcome to CMS
      </h1>

      <p class="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
        Manage your content with speed, simplicity, and flexibility.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
