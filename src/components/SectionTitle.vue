<template>
  <header :class="[
    'w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8',
    containerPaddingClass
  ]" aria-labelledby="section-title">
    <div :class="[
      'flex flex-col gap-3 items-start',
      alignmentContainerClass
    ]">
      <!-- Title -->
      <h2 id="section-title"
        class="font-semibold leading-tight tracking-tight transition-transform duration-700 ease-out transform-gpu"
        :class="[titleSizeClass, titleColorClass, visibilityTransformClass]">
        {{ title }}
      </h2>

      <!-- Decorative element / underline -->
      <div v-if="decoration !== 'none'" class="w-full flex">
        <div :class="[
          decorationWrapperAlignmentClass,
          'overflow-hidden'
        ]">
          <span class="block h-1 rounded-full origin-left transition-all duration-700 ease-out" :style="decorationStyle"
            :class="[decorationBgClass, visibilityBarClass]" />
        </div>
      </div>

      <!-- Subtitle / description -->
      <p v-if="subtitle" class="max-w-3xl leading-relaxed text-sm md:text-base transition-opacity duration-700"
        :class="[subtitleColorClass, subtitleVisibilityClass]">
        {{ subtitle }}
      </p>

      <!-- optional slot for extra controls (CTA, small nav, etc.) -->
      <div v-if="$slots.actions" :class="actionsContainerClass">
        <slot name="actions" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
// import type { PropType } from 'vue';

/* -------------------------
   Props & Types
   ------------------------- */
type Align = 'left' | 'center' | 'right';
type Theme = 'light' | 'dark' | 'primary';
type Decoration = 'underline' | 'accent' | 'none';

const props = withDefaults(defineProps<{
  title: string;
  subtitle?: string;
  align?: Align;
  theme?: Theme;
  decoration?: Decoration;
  /**
   * Width of the decoration bar on large screens (e.g. 'w-24' or numeric px)
   * Accepts Tailwind width classes (like 'w-16', 'w-24') or a CSS value string like '120px'
   */
  decorationWidth?: string;
}>(), {
  align: 'center',
  theme: 'light',
  decoration: 'underline',
  decorationWidth: 'w-24'
});

/* -------------------------
   Reactive state for reveal animation
   ------------------------- */
const isVisible = ref(false);
let observer: IntersectionObserver | null = null;
const rootEl = ref<HTMLElement | null>(null);

/* On mount use IntersectionObserver to reveal on scroll; fallback to simple mount animation */
onMounted(() => {
  // Try to observe the header element for on-scroll reveal
  rootEl.value = document.getElementById('section-title')?.closest('header') ?? null;

  if (rootEl.value && 'IntersectionObserver' in window) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true;
            if (observer) {
              observer.disconnect();
              observer = null;
            }
          }
        });
      },
      { threshold: 0.12 }
    );
    observer.observe(rootEl.value);
  } else {
    // fallback: mark visible on mount for environments without IntersectionObserver
    isVisible.value = true;
  }
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
    observer = null;
  }
});

/* -------------------------
   Computed classes & styles
   ------------------------- */
const alignmentContainerClass = computed(() => {
  return props.align === 'left'
    ? 'items-start text-left'
    : props.align === 'right'
      ? 'items-end text-right'
      : 'items-center text-center';
});

const decorationWrapperAlignmentClass = computed(() => {
  return props.align === 'left'
    ? 'justify-start'
    : props.align === 'right'
      ? 'justify-end'
      : 'justify-center';
});

const titleSizeClass = computed(() => {
  // responsive heading sizes
  return 'text-2xl sm:text-3xl md:text-4xl';
});

const containerPaddingClass = computed(() => {
  // small extra vertical padding for sections
  return 'py-8 md:py-12';
});

/* Theme colors (works for light and dark backgrounds) */
const titleColorClass = computed(() => {
  switch (props.theme) {
    case 'dark':
      return 'text-white';
    case 'primary':
      return 'text-sky-700 dark:text-sky-400';
    default:
      return 'text-slate-900 dark:text-white';
  }
});

const subtitleColorClass = computed(() => {
  switch (props.theme) {
    case 'dark':
      return 'text-slate-200';
    case 'primary':
      return 'text-slate-600 dark:text-slate-300';
    default:
      return 'text-slate-600 dark:text-slate-300';
  }
});

const decorationBgClass = computed(() => {
  switch (props.theme) {
    case 'dark':
      return 'bg-white/90';
    case 'primary':
      return 'bg-sky-600';
    default:
      return 'bg-slate-900';
  }
});

/* animation classes derived from visibility state */
const visibilityTransformClass = computed(() =>
  isVisible.value ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
);
const visibilityBarClass = computed(() =>
  isVisible.value ? 'scale-x-100' : 'scale-x-0'
);
const subtitleVisibilityClass = computed(() =>
  isVisible.value ? 'opacity-100 delay-150' : 'opacity-0'
);

/* decoration style: allow tailwind width class or raw CSS value */
const decorationStyle = computed(() => {
  const val = props.decorationWidth ?? 'w-24';
  // if looks like a Tailwind width class (starts with 'w-'), don't set style width here
  if (typeof val === 'string' && val.startsWith('w-')) {
    // leave width to class — convert to class string
    return {};
  }
  // else treat as raw CSS width ('120px', '6rem', etc)
  return { width: String(val) };
});

/* For actions slot alignment */
const actionsContainerClass = computed(() => {
  return props.align === 'left'
    ? 'mt-2 self-start'
    : props.align === 'right'
      ? 'mt-2 self-end'
      : 'mt-2 self-center';
});
</script>

<style scoped>
/* extra transforms for smooth decorative bar reveal */
span[role="decoration"] {
  transform-origin: left;
}

/* We use scaleX for animation via the visibilityBarClass (Tailwind scale-x utilities exist in JIT).
   If your Tailwind config doesn't include scale-x utilities add:
    .scale-x-0 { transform: scaleX(0); }
    .scale-x-100 { transform: scaleX(1); }
*/
</style>
