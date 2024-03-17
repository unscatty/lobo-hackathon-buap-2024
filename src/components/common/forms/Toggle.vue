<script setup lang="ts">
import { Switch } from '@headlessui/vue'

const { name } = defineProps<{ name: string }>()
const isEnabled = defineModel<boolean, 'isEnabled'>({ default: false })
</script>

<template>
  <Switch
    v-model="isEnabled"
    :name
    :class="[
      isEnabled ? 'bg-secondary' : 'bg-gray-200',
      'relative',
      'inline-flex',
      'h-6',
      'w-11',
      'flex-shrink-0',
      'cursor-pointer',
      'rounded-full',
      'border-2',
      'border-transparent',
      'transition-colors',
      'duration-200',
      'ease-in-out',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-secondary-600',
      'focus:ring-offset-2',
    ]"
  >
    <span class="sr-only">Use setting</span>
    <span
      :class="[
        isEnabled ? 'translate-x-5' : 'translate-x-0',
        'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
      ]"
    >
      <span
        :class="[
          isEnabled ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200',
          'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
        ]"
        aria-hidden="true"
      >
        <svg class="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
          <path
            d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      <span
        :class="[
          isEnabled ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100',
          'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
        ]"
        aria-hidden="true"
      >
        <svg class="h-3 w-3 text-secondary-600" fill="currentColor" viewBox="0 0 12 12">
          <path
            d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
          />
        </svg>
      </span>
    </span>
  </Switch>
</template>
