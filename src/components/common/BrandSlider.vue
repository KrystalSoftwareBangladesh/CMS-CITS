<script setup lang="ts">
import { computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const props = defineProps<{
  brands: string[]
}>()

/**
 * Duplicate slides so Swiper always has enough
 * This prevents loop warnings and pauses
 */
const slides = computed(() => [
  ...props.brands,
  ...props.brands,
  ...props.brands, // triple for safety
])
</script>

<template>
  <Swiper class="w-full" :modules="[Autoplay]" :loop="true" :slides-per-view="'auto'" :space-between="32" :speed="9000"
    :allow-touch-move="false" :autoplay="{
      delay: 0,
      disableOnInteraction: false,
      waitForTransition: false
    }">
    <SwiperSlide v-for="(logo, index) in slides" :key="index" class="!w-auto flex items-center">
      <img :src="logo" alt="Brand logo" class="h-6 object-contain opacity-70" />
    </SwiperSlide>
  </Swiper>
</template>
