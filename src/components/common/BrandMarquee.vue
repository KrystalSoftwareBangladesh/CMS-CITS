<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  brands: string[]
}>()

/**
 * Duplicate brands to create seamless loop
 */
const track = computed(() => [...props.brands, ...props.brands])
</script>

<template>
  <div class="overflow-hidden w-full">
    <div class="flex items-center gap-8
             animate-marquee">
      <img v-for="(logo, index) in track" :key="index" :src="logo" alt="Brand logo"
        class="h-6 object-contain opacity-70 shrink-0" />
    </div>
  </div>
</template>
