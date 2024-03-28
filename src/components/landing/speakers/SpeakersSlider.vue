<script setup lang="ts">
import { theme } from '@/config/unocss/theme'
import { type Speaker } from '@/schemas/speaker.schema'
import { onClickOutside, useBreakpoints } from '@vueuse/core'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider, type KeenSliderOptions } from 'keen-slider/vue.es'
import { computed, onMounted, ref, watch } from 'vue'
import SpeakerSlide from './SpeakerSlide.vue'

interface SlideWidth {
  width: string
  maxWidth: string
  minWidth: string
}

interface SlideProps {
  slideWidth: SlideWidth
  isSelected?: boolean
}

type Slide = SlideProps & Speaker

const { speakersInfo } = defineProps<{
  speakersInfo: Speaker[]
}>()

const breakpoints = useBreakpoints(theme.breakpoints)
const activeBreakpoint = breakpoints.active()

const slidesConfig = computed(() => {
  switch (activeBreakpoint.value) {
    case 'sm':
    case 'md':
      return {
        perView: 2,
        spacing: 4,
      }
    case 'lg':
      return {
        perView: 3,
        spacing: 8,
      }
    case 'xl':
    case '2xl':
      return {
        perView: 5,
        spacing: 10,
      }
    default:
      // Smaller than 'sm'
      return {
        perView: 2,
        spacing: 4,
      }
  }
})

const isTouchDevice = ref(false)

onMounted(() => {
  // Detect if the device supports touch events
  isTouchDevice.value = 'ontouchstart' in document.documentElement
})

const selectedSlideSize = computed(() => {
  switch (activeBreakpoint.value) {
    case 'sm':
    case 'md':
      return 100
    case 'lg':
      return 75
    case 'xl':
    case '2xl':
      return 50
    default:
      // Smaller than 'sm'
      return 100
  }
})

const baseWidth = computed(() => {
  return `calc((100% - ${slidesConfig.value.spacing * (slidesConfig.value.perView - 1)}px) / ${slidesConfig.value.perView})`
})

const baseSlideWidth = computed<SlideWidth>(() => {
  return {
    width: baseWidth.value,
    maxWidth: baseWidth.value,
    minWidth: baseWidth.value,
  }
})

const slides = ref<Slide[]>(
  speakersInfo.map((speaker) => {
    return {
      ...speaker,
      slideWidth: baseSlideWidth.value,
      isHovered: false,
    }
  })
)

const selectedSlideIndex = ref(-1)

const sliderOptions = computed<KeenSliderOptions>(() => ({
  loop: false,
  mode: 'snap',
  rtl: false,
  slides: slidesConfig.value,
  dragged: () => {
    if (selectedSlideIndex.value !== -1) {
      restoreAllSlides(slides.value)
    }
  },
}))

const [sliderRef, slider] = useKeenSlider(sliderOptions)

onClickOutside(sliderRef, () => {
  if (selectedSlideIndex.value !== -1) {
    restoreAllSlides(slides.value)
  }
})

watch(sliderOptions, () => {
  slider.value?.update()

  restoreAllSlides(slides.value)
})

const selectedSlideWidth = computed(() => {
  // Calculate width for selected slide
  let _selectedSlideWidth = selectedSlideSize.value + '%'
  const { perView, spacing } = slidesConfig.value

  // Calculate width for other slides substituting selected slide width and considering spacing
  let otherSlidesWidth = `calc((100% - ${_selectedSlideWidth} - ${spacing * (perView - 1)}px) / ${perView - 1})`

  if (selectedSlideSize.value === 100) {
    _selectedSlideWidth = `calc(100% - ${spacing * 2}px)`
    otherSlidesWidth = '0px'
  }

  return {
    hovered: {
      width: _selectedSlideWidth,
      maxWidth: _selectedSlideWidth,
      minWidth: _selectedSlideWidth,
    },
    other: {
      width: otherSlidesWidth,
      maxWidth: otherSlidesWidth,
      minWidth: otherSlidesWidth,
    },
  }
})

const restoreAllSlides = (slides: SlideProps[]) => {
  selectedSlideIndex.value = -1

  slides.forEach((slide) => {
    slide.slideWidth = baseSlideWidth.value

    slide.isSelected = false
  })
}

const restoreSlidesInRange = (
  slides: SlideProps[],
  sliderRelativeIndex: number | undefined = slider.value?.track.details.rel,
  slidesPerView: number = slidesConfig.value.perView
) => {
  if (sliderRelativeIndex === undefined) {
    return
  }

  selectedSlideIndex.value = -1

  for (let i = 0; i < slidesPerView; i++) {
    const relativeIndex = sliderRelativeIndex + i

    slides[relativeIndex].slideWidth = baseSlideWidth.value

    slides[relativeIndex].isSelected = false
  }
}

const expandSlide = (slides: SlideProps[], index: number) => {
  if (selectedSlideIndex.value === index) {
    // Do nothing if the slide is already expanded
    return
  }

  selectedSlideIndex.value = index

  if (slides[index].isSelected) {
    return
  }

  slides[index].slideWidth = selectedSlideWidth.value.hovered
  slides[index].isSelected = true

  for (let i = 0; i < slidesConfig.value.perView; i++) {
    const relativeIndex = (slider.value?.track.details.rel ?? 0) + i

    if (relativeIndex !== index) {
      slides[relativeIndex].slideWidth = selectedSlideWidth.value.other
    }
  }
}

const onSlideClick = (slides: SlideProps[], index: number, sliderRelativeIndex?: number) => {
  if (selectedSlideIndex.value !== -1) {
    if (selectedSlideIndex.value === index) {
      // Do nothing if the slide is already expanded
      return
    }

    restoreSlidesInRange(slides, sliderRelativeIndex)
  }

  expandSlide(slides, index)
}

const overSlides = computed(() => {
  return slides.value.length > slidesConfig.value.perView
})

const nextSlide = () => {
  slider.value?.next()
}

const prevSlide = () => {
  slider.value?.prev()
}

const arrowsStrokeWidth = 2
</script>

<template>
  <div class="h-full w-full flex items-stretch justify-center gap-2">
    <button
      v-if="overSlides"
      class="hidden w-10 text-primary-600/75"
      md="flex items-center"
      hover="bg-primary-200/10 text-primary"
      @click="prevSlide"
    >
      <svg class="h-auto w-24" viewBox="2 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.1897 7.94141L8.56969 10.5614C7.79969 11.3314 7.79969 12.5914 8.56969 13.3614L15.0897 19.8814"
          stroke="currentColor"
          :stroke-width="arrowsStrokeWidth"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15.0908 4.03906L14.0508 5.07906"
          stroke="currentColor"
          :stroke-width="arrowsStrokeWidth"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <div ref="sliderRef" class="keen-slider bg-transparent">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        :class="[
          'keen-slider__slide',
          'h-full',
          'max-h-full',
          'flex',
          'items-center',
          'justify-center',
          'text-lg',
          'text-primary',
          'font-bold',
          'transition-property-[min-width,padding-top,padding-bottom]',
          'transition-duration-500',
          'ease-in-out',
          'even:pt-10',
          'odd:pb-10',
          // 'sm:even:pt-2.5%',
          // 'sm:odd:pb-2.5%',
          { '!py-0': slide.isSelected },
        ]"
        :style="{
          width: slide.slideWidth.width,
          maxWidth: slide.slideWidth.maxWidth,
          minWidth: slide.slideWidth.minWidth,
        }"
        @mouseenter="() => (isTouchDevice ? null : expandSlide(slides, index))"
        @mouseleave="
          () => (isTouchDevice ? null : restoreSlidesInRange(slides, slider?.track.details.rel))
        "
        @click="onSlideClick(slides, index, slider?.track.details.rel)"
      >
        <Suspense>
          <SpeakerSlide :speaker="slide" :is-selected="slide.isSelected" />
        </Suspense>
      </div>
    </div>

    <button
      v-if="overSlides"
      class="hidden w-10 text-primary-600/75"
      md="flex items-center"
      hover="bg-primary-200/10 text-primary"
      @click="nextSlide"
    >
      <svg class="h-auto w-10" viewBox="4 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12.9 7.94141L15.52 10.5614C16.29 11.3314 16.29 12.5914 15.52 13.3614L9 19.8714"
          stroke="currentColor"
          :stroke-width="arrowsStrokeWidth"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9 4.03906L10.04 5.07906"
          stroke="currentColor"
          :stroke-width="arrowsStrokeWidth"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>
