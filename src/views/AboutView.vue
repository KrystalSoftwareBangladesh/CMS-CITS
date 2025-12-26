<template>
  <div class="max-w-7xl mx-auto px-4">
    <!-- HERO -->
     <PageHero badge="About Our Company" title="We Create Visual Stories" highlight="That Convert" description="We’re a creative video & photo production company helping brands,
    startups, and SaaS companies grow through powerful visual storytelling." />
    <!-- MISSION -->
    <section class="py-20 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 class="text-3xl font-bold text-gray-900">
          Our Mission
        </h2>
        <p class="mt-4 text-gray-600 leading-relaxed">
          Our mission is simple — help businesses communicate their value
          clearly and creatively. We believe great visuals don’t just look
          good, they drive real results.
        </p>

        <ul class="mt-6 space-y-3">
          <li class="flex gap-3">
            <span class="text-green-500">✔</span>
            <span class="text-gray-700">
              Conversion-focused creative strategy
            </span>
          </li>
          <li class="flex gap-3">
            <span class="text-green-500">✔</span>
            <span class="text-gray-700">
              Clear communication & fast turnaround
            </span>
          </li>
          <li class="flex gap-3">
            <span class="text-green-500">✔</span>
            <span class="text-gray-700">
              Long-term creative partnerships
            </span>
          </li>
        </ul>
      </div>

      <img src="https://dummyimage.com/600x420/e5e7eb/000" alt="Our mission" class="rounded-xl" />
    </section>

    <!-- VALUES -->
    <section class="py-20 bg-gray-50 rounded-2xl">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold text-gray-900">
          Our Core Values
        </h2>

        <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="value in values" :key="value.title" class="bg-white rounded-xl p-6 border border-gray-200">
            <div class="text-3xl mb-4">{{ value.icon }}</div>
            <h3 class="font-semibold text-gray-900">
              {{ value.title }}
            </h3>
            <p class="mt-2 text-sm text-gray-600">
              {{ value.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- PROCESS -->
    <section class="py-20 text-center">
      <h2 class="text-3xl font-bold text-gray-900">
        How We Work
      </h2>
      <div class="mt-12 grid md:grid-cols-3 gap-8">
        <div v-for="step in process" :key="step.title">
          <div class="text-4xl font-bold text-yellow-400">
            {{ step.number }}
          </div>
          <h3 class="mt-4 font-semibold text-gray-900">
            {{ step.title }}
          </h3>
          <p class="mt-2 text-gray-600 text-sm">
            {{ step.description }}
          </p>
        </div>
      </div>
    </section>

    <!-- TEAM -->
    <TeamSection title="Meet the Team" :team="team" />
    <WhyCITSHighlight />

    <!-- CTA -->
    <section class="py-24 text-center">
      <h2 class="text-3xl font-bold text-gray-900">
        Want to Work With Us?
      </h2>
      <p class="mt-4 text-gray-600">
        Let’s create something impactful together.
      </p>
      <button class="mt-6 px-8 py-3 rounded-full
               bg-yellow-400 hover:bg-yellow-500
               text-sm font-semibold transition">
        <RouterLink to="/contact">
          Book a Free Call
        </RouterLink>
      </button>
    </section>
  </div>
</template>

<script setup lang="ts">
import PageHero from '@/components/common/PageHero.vue';
import TeamSection from '@/components/team/TeamSection.vue'
import WhyCITSHighlight from '@/components/about/WhyCITSHighlight.vue'

const values = [
  {
    icon: '🎯',
    title: 'Results First',
    description: 'Every creative decision is driven by performance.',
  },
  {
    icon: '🤝',
    title: 'Partnership',
    description: 'We work as an extension of your team.',
  },
  {
    icon: '⚡',
    title: 'Speed',
    description: 'Fast turnaround without sacrificing quality.',
  },
  {
    icon: '✨',
    title: 'Quality',
    description: 'High-end visuals that stand out.',
  },
]

const process = [
  {
    number: '01',
    title: 'Discover',
    description: 'We understand your goals and audience.',
  },
  {
    number: '02',
    title: 'Create',
    description: 'Script, design, and production.',
  },
  {
    number: '03',
    title: 'Deliver',
    description: 'Content optimized for results.',
  },
]

const team = [
  {
    name: 'Alex Morgan',
    role: 'Creative Director',
    avatar: 'https://i.pravatar.cc/100?img=1',
    slug: 'alex-morgan',
  },
  {
    name: 'Sarah Lee',
    role: 'Video Producer',
    avatar: 'https://i.pravatar.cc/100?img=2',
    slug: 'sarah-lee',
  },
  {
    name: 'James Carter',
    role: 'Editor',
    avatar: 'https://i.pravatar.cc/100?img=3',
    slug: 'james-carter',
  },
  {
    name: 'Emily Stone',
    role: 'Client Manager',
    avatar: 'https://i.pravatar.cc/100?img=4',
    slug: 'emily-stone',
  },
  {
    name: 'Tom Cruise',
    role: 'Assistant',
    avatar: 'https://i.pravatar.cc/100?img=5',
    slug: 'tom-cruise',
  },
  {
    name: 'Tom Hardy',
    role: 'Manager',
    avatar: 'https://i.pravatar.cc/100?img=6',
    slug: 'tom-hardy',
  },
  {
    name: 'Angelina Jolie',
    role: 'Consultant',
    avatar: 'https://i.pravatar.cc/100?img=7',
    slug: 'angelina-jolie',
  },
  {
    name: 'Ryan Gauslin',
    role: 'Manager',
    avatar: 'https://i.pravatar.cc/100?img=8',
    slug: 'ryan-gauslin',
  }
]
</script>
