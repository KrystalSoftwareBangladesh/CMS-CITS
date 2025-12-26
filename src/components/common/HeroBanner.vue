<!-- src/components/common/HeroBanner.vue -->
<template>
  <section class="pt-32 pb-24">
    <div class="max-w-6xl mx-auto px-4 text-center">
      <!-- Eyebrow -->
      <div class="inline-flex items-center gap-2
               px-4 py-1.5 rounded-full
               bg-gray-100 text-sm text-gray-600">
        <span class="w-2 h-2 rounded-full bg-blue-500"></span>
        What a Story · Video Production Company
      </div>

      <!-- Headline -->
      <h1 class="mt-6 text-4xl sm:text-5xl lg:text-6xl
               font-extrabold tracking-tight text-gray-900">
        CREATE A BIGGER
        <br />
        IMPACT WITH
        <span class="relative inline-block">
          <span class="relative z-10 px-2">
            VIDEOS
          </span>
          <!-- Highlight box -->
          <span class="absolute inset-0 bg-primary-soft rounded-lg -z-0"></span>
        </span>
      </h1>

      <!-- Description -->
      <p class="mt-6 max-w-2xl mx-auto
               text-lg text-gray-600">
        We help SaaS companies and brands grow faster with
        conversion-focused video content that actually delivers results.
      </p>

      <!-- CTA Buttons -->
      <div class="mt-8 flex flex-col sm:flex-row
               items-center justify-center gap-4">
        <button class="inline-flex items-center gap-2
                 px-6 py-3 rounded-full
                 bg-primary hover:bg-primary-hover
                 text-sm font-semibold transition">
          <RouterLink to="/contact">
            📞 Book a Call
          </RouterLink>
        </button>

        <button class="inline-flex items-center gap-2
                 px-6 py-3 rounded-full
                 bg-gray-100 hover:bg-gray-200
                 text-sm font-medium text-gray-800 transition">
          ▶ Understand How
        </button>
      </div>
      <!-- Brands -->
      <div class="mt-14">
        <p class="text-sm text-gray-500 mb-4">
          Brands we’ve partnered with
        </p>
        <BrandMarquee :brands="brands" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BrandMarquee from './BrandMarquee.vue';
const brands: string[] = [
  'https://dummyimage.com/100x40/ddd/000&text=Envato',
  'https://dummyimage.com/100x40/ddd/000&text=Deloitte',
  'https://dummyimage.com/100x40/ddd/000&text=Uber',
  'https://dummyimage.com/100x40/ddd/000&text=JustCall',
  'https://dummyimage.com/100x40/ddd/000&text=Shell',
  'https://dummyimage.com/100x40/ddd/000&text=Pathao',
  'https://dummyimage.com/100x40/ddd/000&text=bKash',
  'https://dummyimage.com/100x40/ddd/000&text=EBL',
  'https://dummyimage.com/100x40/ddd/000&text=DBBL',
  'https://dummyimage.com/100x40/ddd/000&text=Gucci',
  'https://dummyimage.com/100x40/ddd/000&text=Nike',
  'https://dummyimage.com/100x40/ddd/000&text=LV',
  'https://dummyimage.com/100x40/ddd/000&text=Yamaha',
  'https://dummyimage.com/100x40/ddd/000&text=Suzuki',
  'https://dummyimage.com/100x40/ddd/000&text=BMW',
  'https://dummyimage.com/100x40/ddd/000&text=Mercedes',
]
</script>
