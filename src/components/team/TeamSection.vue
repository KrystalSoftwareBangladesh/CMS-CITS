<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

import TeamMemberCard from './TeamMemberCard.vue'

interface TeamMember {
  name: string
  role: string
  avatar: string
}

defineProps<{
  title?: string
  team: TeamMember[]
}>()
</script>

<template>
  <section class="py-20 bg-gray-50 rounded-2xl">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold text-gray-900">
        {{ title ?? 'Meet the Team' }}
      </h2>

      <!-- ALWAYS SLIDER -->
      <Swiper class="mt-12" :modules="[Autoplay]" :loop="true" :space-between="24" :slides-per-view="4" :autoplay="{
        delay: 0,
        disableOnInteraction: false
      }" :speed="4000" :breakpoints="{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 }
        }">
        <SwiperSlide v-for="member in team" :key="member.name">
          <TeamMemberCard v-bind="member" />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
