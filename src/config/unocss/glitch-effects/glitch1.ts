import type { Preset } from 'unocss'
import type { Theme } from './types'

const name = 'glitch1'

const containerName = `${name}-container`
const glitchName = `${name}-glitch`
const unglitchName = `${name}-unglitch`
const glitchTextName = `${name}-glitch-text`

const pseudoCommonClasses = [
  'opacity-100',
  'mix-blend-screen',
  'content-[attr(data-glitch-text)]',
  'absolute',
  'z-2',
  'w-full',
  'h-full',
  'top-0',
]

export const glitch1Preset: Preset<Theme> = {
  name: `${name}-preset`,
  shortcuts: [
    [containerName, 'visible'],
    // Change color of :after pseudo element
    [
      new RegExp(`^${name}-(after|before)-(.*)$`),
      ([, pseudo, color]) => `${pseudo}:!text-${color}`,
    ],
    // Class to apply to the parent element when glitch is not active
    [
      unglitchName,
      [
        'relative',
        `[.${containerName}:hover_&:before,.${containerName}:hover_&:after]:(content-[attr(data-glitch-text)] block)`,
      ].join(' '),
    ],
    // Class to apply to the parent element when glitch is active (:hover, :focus, etc.)
    [
      glitchName,
      [
        'before:text-[#FF0000]',
        'after:text-[#00FF00]',
        `before:(-left-5% [clip:rect(0,1350px,140px,0)] animate-${name}--glitch-layer-before ${pseudoCommonClasses.join(' ')})`,
        `after:(left-5% [clip:rect(0,1350px,50px,0)] animate-${name}--glitch-layer-after ${pseudoCommonClasses.join(' ')})`,
      ].join(' '),
    ],
    // Applies the glitch effect on hover (must add `group/${name}` to a parent element`)
    [`${glitchName}-hover`, [unglitchName, `group-hover/${name}:${glitchName}`]],
    // Class to apply to the text element
    [
      glitchTextName,
      ['relative', 'z-1', '[clip:rect(0,900px,722px,56px)]', `animate-${name}--glitch-layer-main`],
    ],
    // Applies the glitch effect on hover (must add `group-hover/${name}` to a parent element`)
    [`${glitchTextName}-hover`, [`group-hover/${name}:${glitchTextName}`]],
  ],
  theme: {
    animation: {
      durations: {
        [`${name}--glitch-layer-before`]: '1s',
        [`${name}--glitch-layer-after`]: '1s',
        [`${name}--glitch-layer-main`]: '3s',
      },
      timingFns: {
        [`${name}--glitch-layer-before`]: 'linear',
        [`${name}--glitch-layer-after`]: 'linear',
        [`${name}--glitch-layer-main`]: 'linear',
      },
      counts: {
        [`${name}--glitch-layer-before`]: 'infinite',
        [`${name}--glitch-layer-after`]: 'infinite',
        [`${name}--glitch-layer-main`]: 'infinite',
      },
      keyframes: {
        [`${name}--glitch-layer-before`]: `
      {
        0% {
          left: 0;
          clip-path: inset(0% 0 0% 0); }
        9% {
          left: 0;
          clip-path: inset(0% 0 0% 0); }
        10% {
          left: 1%;
          clip-path: inset(21% 0 5% 0); }
        19% {
          left: 1%;
          clip-path: inset(21% 0 5% 0); }
        20% {
          left: 6%;
          clip-path: inset(72% 0 55% 0); }
        29% {
          left: 6%;
          clip-path: inset(72% 0 55% 0); }
        30% {
          left: 0;
          clip-path: inset(12% 0 -52% 0); }
        39% {
          left: 0;
          clip-path: inset(12% 0 -52% 0); }
        40% {
          left: -5%;
          clip-path: inset(-80% 0 12% 0); }
        49% {
          left: -5%;
          clip-path: inset(-80% 0 12% 0); }
        50% {
          left: 0;
          clip-path: inset(95% 0 32% 0); }
        59% {
          left: 0;
          clip-path: inset(95% 0 32% 0); }
        60% {
          left: 2%;
          clip-path: inset(4% 0 27% 0); }
        69% {
          left: 2%;
          clip-path: inset(4% 0 27% 0); }
        70% {
          left: 0;
          clip-path: inset(-64% 0 -77% 0); }
        79% {
          left: 0;
          clip-path: inset(-64% 0 -77% 0); }
        80% {
          left: -8%;
          clip-path: inset(75% 0 -4% 0); }
        89% {
          left: -8%;
          clip-path: inset(75% 0 -4% 0); }
        90% {
          left: 0;
          clip-path: inset(-33% 0 96% 0); }
        99% {
          left: 0;
          clip-path: inset(-33% 0 96% 0); }
        100% {
          left: 3%;
          clip-path: inset(48% 0 50% 0); }
      }`,
        [`${name}--glitch-layer-after`]: `
      {
        0% {
          left: 0;
          clip-path: inset(0% 0 0% 0); }
        9% {
          left: 0;
          clip-path: inset(0% 0 0% 0); }
        10% {
          left: -2%;
          clip-path: inset(41% 0 -15% 0); }
        19% {
          left: -2%;
          clip-path: inset(41% 0 -15% 0); }
        20% {
          left: -4%;
          clip-path: inset(-72% 0 75% 0); }
        29% {
          left: -4%;
          clip-path: inset(-72% 0 75% 0); }
        30% {
          left: 0;
          clip-path: inset(62% 0 4% 0); }
        39% {
          left: 0;
          clip-path: inset(62% 0 4% 0); }
        40% {
          left: 7%;
          clip-path: inset(80% 0 -12% 0); }
        49% {
          left: 7%;
          clip-path: inset(80% 0 -12% 0); }
        50% {
          left: 0;
          clip-path: inset(5% 0 55% 0); }
        59% {
          left: 0;
          clip-path: inset(5% 0 55% 0); }
        60% {
          left: -5%;
          clip-path: inset(-47% 0 36% 0); }
        69% {
          left: -5%;
          clip-path: inset(-47% 0 36% 0); }
        70% {
          left: 0;
          clip-path: inset(24% 0 -7% 0); }
        79% {
          left: 0;
          clip-path: inset(24% 0 -7% 0); }
        80% {
          left: 5%;
          clip-path: inset(-75% 0 4% 0); }
        89% {
          left: 5%;
          clip-path: inset(-75% 0 4% 0); }
        90% {
          left: 0;
          clip-path: inset(3% 0 -96% 0); }
        99% {
          left: 0;
          clip-path: inset(3% 0 -96% 0); }
        100% {
          left: -3%;
          clip-path: inset(98% 0 -50% 0); }
      }`,
        [`${name}--glitch-layer-main`]: `
      {
        0% {
          clip-path: inset(0% 0 0% 0); }
        9% {
          clip-path: inset(0% 0 0% 0); }
        10% {
          clip-path: inset(41% 0 -15% 0); }
        19% {
          clip-path: inset(41% 0 -15% 0); }
        20% {
          clip-path: inset(-72% 0 75% 0); }
        29% {
          clip-path: inset(-72% 0 75% 0); }
        30% {
          clip-path: inset(62% 0 4% 0); }
        39% {
          clip-path: inset(62% 0 4% 0); }
        40% {
          clip-path: inset(80% 0 -12% 0); }
        49% {
          clip-path: inset(80% 0 -12% 0); }
        50% {
          clip-path: inset(5% 0 55% 0); }
        59% {
          clip-path: inset(5% 0 55% 0); }
        60% {
          clip-path: inset(-47% 0 36% 0); }
        69% {
          clip-path: inset(-47% 0 36% 0); }
        70% {
          clip-path: inset(24% 0 -7% 0); }
        79% {
          clip-path: inset(24% 0 -7% 0); }
        80% {
          clip-path: inset(-75% 0 4% 0); }
        89% {
          clip-path: inset(-75% 0 4% 0); }
        90% {
          clip-path: inset(3% 0 -96% 0); }
        99% {
          clip-path: inset(3% 0 -96% 0); }
        100% {
          clip-path: inset(98% 0 -50% 0); }
      }`,
      },
    },
  },
}
