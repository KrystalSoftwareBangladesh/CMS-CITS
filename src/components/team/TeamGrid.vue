<script setup lang="ts">
import TeamMemberCard from './TeamMemberCard.vue'

defineProps<{
  team: {
    name: string
    role: string
    avatar: string
    slug: string
  }[]
}>()
</script>

<template>
  <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <RouterLink v-for="member in team" :key="member.slug" :to="`/team/${member.slug}`" class="group">
      <TeamMemberCard :name="member.name" :role="member.role" :avatar="member.avatar" />
    </RouterLink>
  </div>
</template>
