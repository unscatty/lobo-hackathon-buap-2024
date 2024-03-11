<script setup lang="ts">
import type { SpeakerInfo } from '@/schemas/speaker.schema'
import { toRefs } from 'vue'

const { speakerData, isSelected = false } = defineProps<{
  speakerData: SpeakerInfo
  isSelected?: boolean
}>()

const { name, occupation, description, socials, alias } = toRefs(speakerData)

const cornerStrokeWidth = 'stroke-width-2% sm:stroke-width-2%'
</script>

<template>
  <div
    :class="[
      'font-vt323',
      'text-console-green-200',
      'hidden',
      'bg-[#383838]/72',
      { 'screen-grow !block': isSelected },
    ]"
  >
    <div class="pointer-events-none absolute inset-0 text-console-green">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <!-- Top-left corner -->
        <line x1="0" y1="0" x2="0" y2="12%" stroke="currentColor" :class="cornerStrokeWidth" />
        <line x1="0" y1="0" x2="12%" y2="0" stroke="currentColor" :class="cornerStrokeWidth" />

        <!-- Bottom-right corner -->
        <line
          x1="88%"
          y1="100%"
          x2="100%"
          y2="100%"
          stroke="currentColor"
          :class="cornerStrokeWidth"
        />
        <line
          x1="100%"
          y1="88%"
          x2="100%"
          y2="100%"
          stroke="currentColor"
          :class="cornerStrokeWidth"
        />
      </svg>
    </div>
    <div class="block h-full overflow-y-scroll px-3 py-1.5">
      <!-- Header -->
      <div>
        <div class="border-b-2 border-console-green border-dashed text-xs line-height-4.5">
          <p flex justify-between uppercase>
            <span> LHB Systems (tm) </span>
            <span>Lobo Hackathon Buap</span>
          </p>
        </div>
        <div text-sm line-height-3.5>
          <p flex justify-between>
            <span>HEROS v 1.0.0</span>
            <span>(C)2024 LHB Industries</span>
          </p>
          <p text-center line-height-2>- Server 591 -</p>
        </div>
      </div>
      <!-- Speaker data -->
      <div class="mt-2 flex flex-col gap-1.5 text-xl line-height-4">
        <div v-if="alias" text-lg line-height-2>
          <p>{{ '> ' }}info --for={{ alias }} --format</p>
        </div>
        <div class="flex flex-col gap-0.66 pl-2">
          <div>
            <p>
              <span font-bold uppercase>Nombre:</span>
              {{ ' ' }}
              <span>
                {{ name }}
              </span>
            </p>
          </div>
          <div>
            <p>
              <span font-bold uppercase>Ocupación:</span>
              {{ ' ' }}
              <span>
                {{ occupation }}
              </span>
            </p>
          </div>
          <div>
            <p text-lg line-height-4 tracking-tighter>
              <span font-bold uppercase>Descripción:</span>
              {{ ' ' }}
              <span text-justify>
                {{ description }}
              </span>
            </p>
          </div>
          <div v-if="socials && socials.length > 1">
            <p>
              <span font-bold uppercase>Redes:</span>
            </p>
            <div flex justify-around gap-1>
              <a
                v-for="social in socials"
                :key="social.name"
                :href="social.url"
                alt="Social link"
                target="_blank"
                rel="noopener noreferrer"
                class="icon-glow text-console-green-200 hover:text-console-green-100"
              >
                <div v-if="social.icon" :class="social.icon" class="h-8 w-8" />
                <span v-else class="underline">{{ social.alias ?? social.name }}</span>
              </a>
            </div>
          </div>
          <div>
            <p>
              <span> > </span>
              <span class="animate-blink"> _ </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.screen-grow {
  animation: grow 300ms ease-in-out forwards;
  /* animation-delay: 500ms; */
}

.icon-glow {
  filter: drop-shadow(rgba(0, 255, 125, 1) 0 0 5px) drop-shadow(rgba(60, 255, 125, 0.5) 0 0 20px)
    drop-shadow(rgba(0, 175, 200, 1) 0 0 8px);
}

@keyframes grow {
  0% {
    visibility: visible;
    transform: scale(0.1);
  }
  100% {
    visibility: visible;
    transform: scale(1);
  }
}
</style>
