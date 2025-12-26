<script setup lang="ts">
import { useRoute } from 'vue-router'
import PageHero from '@/components/common/PageHero.vue'
import PageContainer from '@/components/common/PageContainer.vue'

const route = useRoute()

/**
 * Temporary mock (later from API)
 */
const teamMembers = [
  {
    slug: 'alex-morgan',
    name: 'Alex Morgan',
    role: 'Creative Director',
    avatar: 'https://i.pravatar.cc/200?img=1',
    bio: 'Alex leads the creative vision and ensures every project delivers impact and results.',
    skills: ['Creative Direction', 'Storytelling', 'Brand Strategy'],
  },
  {
    slug: 'sarah-lee',
    name: 'Sarah Lee',
    role: 'Video Producer',
    avatar: 'https://i.pravatar.cc/150?img=2',
    bio: 'Sarah leads the creative vision and ensures every project delivers impact and results.',
    skills: ['Creative Direction', 'Storytelling', 'Brand Strategy'],
  },
  {
    slug: 'james-carter',
    name: 'James Carter',
    role: 'Editor',
    avatar: 'https://i.pravatar.cc/150?img=3',
    bio: 'James leads the creative vision and ensures every project delivers impact and results.',
    skills: ['Creative Direction', 'Storytelling', 'Brand Strategy'],
  },
]

const member = teamMembers.find(m => m.slug === route.params.slug)
</script>

<template>
  <PageHero v-if="member" badge="Team Member" :title="member.name" :highlight="member.role"
    description="Meet the people who make our work possible." />

  <PageContainer v-if="member">
    <div class="grid md:grid-cols-3 gap-10 items-start">
      <!-- Profile -->
      <div class="md:col-span-1 text-center">
        <img :src="member.avatar" alt="" class="w-40 h-40 rounded-full mx-auto" />
      </div>

      <!-- Details -->
      <div class="md:col-span-2">
        <h2 class="text-2xl font-bold text-gray-900">
          About {{ member.name }}
        </h2>

        <p class="mt-4 text-gray-600 leading-relaxed">
          {{ member.bio }}
        </p>

        <div class="mt-6">
          <h3 class="font-semibold text-gray-900 mb-2">
            Skills & Expertise
          </h3>

          <div class="flex flex-wrap gap-2">
            <span v-for="skill in member.skills" :key="skill" class="px-3 py-1 rounded-full
                     bg-gray-100 text-sm text-gray-700">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </PageContainer>
</template>
