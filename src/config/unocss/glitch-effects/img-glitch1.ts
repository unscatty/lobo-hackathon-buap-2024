import type { Preset } from 'unocss'
import type { Theme } from './types'

const name = 'img-glitch1'
const effect1Name = `${name}-animation1`
const effect2Name = `${name}-animation2`
const effectFlashName = `${name}-animation-flash`

export const imgGlitch1Preset: Preset<Theme> = {
  name: `${name}-preset`,
  shortcuts: {
    [`${name}-container`]: 'absolute inset-0',
    [`${name}-layer`]: [
      'object-contain absolute bg-no-repeat bg-[0_0] opacity-65% inset-0',
      `[&:nth-child(3n+1)]:(-translate-x-5% animate-${effect1Name})`,
      `[&:nth-child(3n+2)]:(translate-x-3% translate-y-3% animate-${effect2Name})`,
      `[&:nth-child(3n+3)]:(-translate-x-5% animate-${effectFlashName})`,
    ].join(' '),
  },
  theme: {
    animation: {
      durations: {
        [effect1Name]: '1.5s',
        [effect2Name]: '1.7s',
        [effectFlashName]: '750ms',
      },
      counts: {
        [effect1Name]: 'infinite',
        [effect2Name]: 'infinite',
        [effectFlashName]: 'infinite',
      },
      timingFns: {
        [effect1Name]: 'linear alternate',
        [effect2Name]: 'linear alternate',
        [effectFlashName]: 'linear',
      },
      keyframes: {
        [effectFlashName]: /* css */`
          {
            0% {
              opacity: 0.2;
            }
            30%,
            100% {
              opacity: 0;
            }
          }`,
        [effect1Name]: /* css */ `
          {
            0% {
              clip-path: polygon(0 0%, 100% 0%, 100% 5%, 0 5%);
            }
            10% {
              clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
            }
            20% {
              clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
            }
            30% {
              clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
            }
            40% {
              clip-path: polygon(0 35%, 100% 35%, 100% 35%, 0 35%);
            }
            50% {
              clip-path: polygon(0 45%, 100% 45%, 100% 46%, 0 46%);
            }
            60% {
              clip-path: polygon(0 50%, 100% 50%, 100% 70%, 0 70%);
            }
            70% {
              clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
            }
            80% {
              clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
            }
            90% {
              clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
            }
            100% {
              clip-path: polygon(0 60%, 100% 60%, 100% 70%, 0 70%);
            }
          }`,
        [effect2Name]: /* css */`
          {
            0% {
              clip-path: polygon(0 15%, 100% 15%, 100% 30%, 0 30%);
            }
            15% {
              clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
            }
            25% {
              clip-path: polygon(0 8%, 100% 8%, 100% 20%, 0 20%);
            }
            30% {
              clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
            }
            45% {
              clip-path: polygon(0 45%, 100% 45%, 100% 45%, 0 45%);
            }
            50% {
              clip-path: polygon(0 50%, 100% 50%, 100% 57%, 0 57%);
            }
            65% {
              clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
            }
            75% {
              clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
            }
            80% {
              clip-path: polygon(0 40%, 100% 40%, 100% 60%, 0 60%);
            }
            95% {
              clip-path: polygon(0 45%, 100% 45%, 100% 60%, 0 60%);
            }
            100% {
              clip-path: polygon(0 11%, 100% 11%, 100% 15%, 0 15%);
            }
          }`,
      },
    },
  },
}
