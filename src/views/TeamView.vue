<script setup lang="ts">
import PageHero from '@/components/common/PageHero.vue'
import PageContainer from '@/components/common/PageContainer.vue'
import TeamGrid from '@/components/team/TeamGrid.vue'

const team = [
  {
    name: 'Alex Morgan',
    role: 'Creative Director',
    avatar: 'https://i.pravatar.cc/150?img=1',
    slug: 'alex-morgan',
  },
  {
    name: 'Sarah Lee',
    role: 'Video Producer',
    avatar: 'https://i.pravatar.cc/150?img=2',
    slug: 'sarah-lee',
  },
  {
    name: 'James Carter',
    role: 'Editor',
    avatar: 'https://i.pravatar.cc/150?img=3',
    slug: 'james-carter',
  },
]
</script>

<template>
  <PageHero badge="Our Team" title="Meet the" highlight="People Behind the Work" description="A group of creative professionals passionate about
    storytelling, design, and delivering results." />

  <PageContainer>
    <TeamGrid :team="team" />
  </PageContainer>
</template>
