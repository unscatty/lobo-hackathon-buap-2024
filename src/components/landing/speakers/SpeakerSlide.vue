<script setup lang="ts">
import { type Speaker } from '@/schemas/speaker.schema'
import { onMounted, ref, toRefs, computed } from 'vue'
import { useTimeoutPoll } from '@vueuse/core'
import hackerImage from '@assets/images/hacker.png'
import SpeakerInfoCard from './SpeakerInfoCard.vue'
import SpeakerUnknown from './SpeakerUnknown.vue'

const { speaker, isSelected = false } = defineProps<{
  speaker: Speaker
  isSelected?: boolean
}>()

const { isShown, revealDate, showCountdown } = toRefs(speaker)

const isRevealed = ref(isShown?.value || false)

const imageUrl = computed(() => (isRevealed.value ? speaker.imageUrl : hackerImage.src))

const remainingTime = ref<{
  hours: number
  minutes: number
  seconds: number
}>({
  hours: Infinity,
  minutes: Infinity,
  seconds: Infinity,
})

const checkRevealed = () => {
  if (isRevealed.value) {
    return
  }

  const currentDate = new Date()

  if (revealDate?.value) {
    const diff = revealDate.value.getTime() - currentDate.getTime()

    if (showCountdown?.value) {
      remainingTime.value = {
        hours: Math.floor(diff / (1000 * 60 * 60)),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      }
    }

    if (diff <= 0) {
      isRevealed.value = true
      showCountdown.value = false
      pause()
    }
  }
}

const { pause, resume } = useTimeoutPoll(checkRevealed, 1000)

onMounted(() => {
  if (isShown?.value || !revealDate?.value) {
    // Ignore the countdown if the speaker is already shown
    pause()
  } else {
    // Initialize the countdown
    resume()
  }
})
</script>

<template>
  <div
    :class="[
      'relative',
      'bg-cover',
      'bg-no-repeat',
      'bg-center',
      'overflow-hidden',
      'flex',
      'justify-center',
      'items-end',
      'h-full',
      'max-h-full',
      'w-full',
      'border border-primary border-3',
      'box-border',
      // Grey filter
      isSelected ? 'filter-none' : 'filter grayscale',
    ]"
    :style="{ backgroundImage: `url('${imageUrl}')` }"
  >
    <!-- Speaker info -->
    <div v-if="isRevealed" class="h-4/7 w-full flex items-end p-2 sm:p-4">
      <div class="relative h-full w-full">
        <SpeakerInfoCard :speaker-data="speaker" :is-selected class="absolute inset-0" />
      </div>
    </div>
    <!-- Unknown speaker -->
    <SpeakerUnknown v-else :is-selected :show-countdown :remaining-time />

    <!-- Overlay -->
    <div
      class="crt pointer-events-none absolute inset-0 bg-black bg-opacity-65"
      :class="{ 'bg-opacity-0 crt-move': isSelected }"
    />
  </div>
</template>

<style scoped>
.crt {
  overflow: hidden;
}

.crt-move {
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.15) 50%),
    linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
  background-size:
    100% 2px,
    33% 100%;
  animation: scan-crt 15s linear infinite;
}

.crt::before,
.crt::after {
  content: ' ';
  display: block;
  position: absolute;
  pointer-events: none;
}

.crt::before {
  width: 100%;
  height: 0.4rem;
  opacity: 0.75;
}

.crt-move::before {
  background: rgba(0, 0, 0, 0.33333);
  animation: scan-moving 5s cubic-bezier(0.56, 0.82, 0.465, 0.865) infinite;
}

.crt::after {
  inset: 0;
  background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.1) 51%);
  background-size: 100% 0.8rem;
}

.crt-move::after {
  animation: scan-crt 15s linear infinite;
}

@keyframes scan-moving {
  20% {
    bottom: -0.4rem;
  }
  80% {
    bottom: calc(100% + 0.4rem);
  }
}

@keyframes scan-crt {
  0% {
    background-position: 0 100%;
  }
}
</style>
