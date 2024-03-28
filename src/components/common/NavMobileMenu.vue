<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
</script>

<template>
  <Popover v-slot="{ open }" class="relative">
    <PopoverButton class="focus:outline-none">
      <div
        class="hw-6"
        :class="open ? 'i-solar:close-square-broken' : 'i-solar:menu-dots-square-broken'"
        aria-hidden="true"
      />
    </PopoverButton>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <PopoverPanel class="absolute right-0 z-10 mt-2 max-w-sm w-90vw" sm="px-0">
        <div
          class="overflow-visible border-2 border-primary rounded-none bg-base/75 backdrop-blur-3"
        >
          <div class="relative p-0">
            <slot />
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>
