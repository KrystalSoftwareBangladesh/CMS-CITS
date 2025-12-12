<script setup lang="ts">
import { computed } from "vue";
import CopyRightComponent from "./CopyRightComponent.vue";

type LinkItem = { title: string; url: string; external?: boolean };
type Column = { heading?: string; items: LinkItem[] };

const props = defineProps({
  companyName: { type: String, default: "Your Company" },
  description: {
    type: String,
    default:
      "Empowering people with great products. Empowering people with great products.",
  },
  // columns that will render inside the right side. It's dynamic.
  columns: {
    type: Array as () => Column[],
    default: () => [
      {
        heading: "Site Map",
        items: [
          { title: "Homepage", url: "/" },
          { title: "Technology", url: "/technology" },
          { title: "Resources & News", url: "/resources" },
          { title: "Careers", url: "/careers" }
        ],
      },
      {
        heading: "Legal",
        items: [
          { title: "Privacy Policy", url: "/privacy-policy" },
          { title: "Terms of Service", url: "/terms" },
        ],
      },
      // add more columns as needed...
    ],
  },
  social: {
    type: Array as () => LinkItem[],
    default: () => [
      { title: "X", url: "https://x.example", external: true },
      { title: "LinkedIn", url: "https://linkedin.example", external: true }
    ],
  },
  // maximum number of columns to split the right side into (avoid too many)
  maxRightColumns: { type: Number, default: 4 },
});

const year = new Date().getFullYear();

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// compute how many columns the right grid should show (clamped between 1 and maxRightColumns)
const rightColsCount = computed(() => {
  const n = Array.isArray(props.columns) ? props.columns.length : 0;
  return Math.max(1, Math.min(n, props.maxRightColumns));
});

// produce css grid-template-columns string like "repeat(3, minmax(0,1fr))"
const rightGridTemplate = computed(() => `repeat(${rightColsCount.value}, minmax(0, 1fr))`);
</script>

<template>
  <footer class="w-full bg-transparent" role="contentinfo" aria-label="Site footer">
    <div class="mx-auto max-w-7xl p-6 md:p-10 rounded-lg border border-opacity-10 shadow-sm"
      style="background-color: transparent;">
      <!-- outer grid: 2 columns on md+, left is bigger -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        <!-- LEFT: brand/description/social (takes more space: 5/12 for md+) -->
        <div class="md:col-span-5">
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-3">
              <!-- Brand logo icon (uses currentColor) -->
              <svg class="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2 L22 8 L12 22 L2 8 Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
              </svg>
              <span class="text-base font-semibold leading-none">{{ props.companyName }}</span>
            </div>

            <p class="text-sm leading-relaxed">
              {{ props.description }}
            </p>

            <nav aria-label="Social links" class="flex gap-3">
              <a v-for="(s, i) in props.social" :key="i" :href="s.url" :target="s.external ? '_blank' : undefined"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center h-9 w-9 rounded-md focus:outline-none focus-visible:ring focus-visible:ring-opacity-60">
                <span class="sr-only">{{ s.title }}</span>
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" stroke-width="1.2" />
                </svg>
              </a>
            </nav>

            <div>
              <button @click="scrollToTop" aria-label="Back to top"
                class="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-opacity-10 focus:outline-none focus-visible:ring focus-visible:ring-opacity-60 text-sm">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 5v14M5 12l7-7 7 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
                Back to top
              </button>
            </div>
          </div>
        </div>

        <!-- RIGHT: dynamic inner grid (takes 7/12 for md+) -->
        <div class="md:col-span-7">
          <!-- Use inline style to create exactly N columns in the right side -->
          <div class="grid gap-6" :style="{ gridTemplateColumns: rightGridTemplate }">
            <template v-for="(col, colIndex) in props.columns" :key="colIndex">
              <div class="space-y-3">
                <h3 v-if="col.heading" class="text-sm font-medium tracking-wide">{{ col.heading }}</h3>
                <ul class="space-y-1 text-sm">
                  <li v-for="(item, i) in col.items" :key="i">
                    <a :href="item.url" :target="item.external ? '_blank' : undefined" rel="noopener noreferrer"
                      class="inline-block text-sm leading-relaxed hover:underline focus:outline-none focus-visible:ring focus-visible:ring-opacity-60">
                      {{ item.title }}
                    </a>
                  </li>
                </ul>
              </div>
            </template>
          </div>
        </div>
      </div>

      <!-- bottom copyright / links -->
       <CopyRightComponent />
    </div>
  </footer>
</template>

<style scoped>
/* nothing color-specific here; keep visuals neutral.
   You can set `color` or add Tailwind color utilities where you render this component. */
</style>
