<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import type { Swiper as SwiperInstance } from 'swiper'
import 'swiper/css'

import TeamMemberCard from './TeamMemberCard.vue'

defineProps<{
  title?: string
  team: {
    name: string
    role: string
    avatar: string
    slug: string
  }[]
}>()

const router = useRouter()

// ✅ Correct typing
const swiperRef = ref<SwiperInstance | null>(null)

const onMouseEnter = () => {
  swiperRef.value?.autoplay?.stop()
}

const onMouseLeave = () => {
  swiperRef.value?.autoplay?.start()
}

const goToMember = (slug: string) => {
  router.push(`/team/${slug}`)
}
</script>


<template>
  <section class="py-20 bg-gray-50 rounded-2xl">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold text-gray-900">
        {{ title ?? 'Meet the Team' }}
      </h2>

      <Swiper class="mt-12" :modules="[Autoplay]" :loop="true" :space-between="24" :slides-per-view="4" :speed="4000"
        :autoplay="{
          delay: 0,
          disableOnInteraction: false
        }" :breakpoints="{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 }
        }" @swiper="swiperRef = $event" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
        <SwiperSlide v-for="member in team" :key="member.slug" class="cursor-pointer" @click="goToMember(member.slug)">
          <TeamMemberCard v-bind="member" />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
