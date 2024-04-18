<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const { source } = defineProps<{ source: string }>()

const { copy, copied, isSupported } = useClipboard({ source, copiedDuring: 3_000 })
</script>

<template>
  <div flex items-center justify-evenly py-8 text-success-600 border="3 success">
    <p w-max text-lg font-bold font-mono>
      {{ source }}
    </p>
    <template v-if="isSupported">
      <button @click="copy(source)">
        <div
          hw-8
          :class="
            copied
              ? 'i-solar:clipboard-check-broken animate-shake-y'
              : 'i-solar:clipboard-add-broken'
          "
        />
      </button>
    </template>
  </div>
</template>
