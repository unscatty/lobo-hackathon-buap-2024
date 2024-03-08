import type { Preset } from 'unocss'
import { resolveUnoColor } from '../helpers'
import type { Theme } from './types'

const name = 'btn-glitch1'
// const unglitchName = `${name}-unglitch`
// const glitchName = `${name}-glitch`
const keyframesName = `${name}--glitch-effect`

const pseudoCommonClasses = [
  'content-[attr(data-glitch-text)]',
  'absolute',
  'w-full',
  'text-black',
  'flex',
  'items-center',
  'justify-center',
  'inset-0',
  'bg-white',
]

export const btnGlitch1Preset: Preset<Theme> = {
  name: `${name}-preset`,
  shortcuts: [
    [
      name,
      [
        'transition-all',
        'relative',
        'duration-[0.2s]',
        'ease-[ease]',
        'before:(-left-3% -top-9% shadow-[2px_0_#fff] [text-shadow:2px_0_#fff])',
        `before:(animate-${keyframesName} animate-duration-500ms animate-alternate-reverse)`,
        `before:(${pseudoCommonClasses.join(' ')})`,
        'after:(left-3% -bottom-9% shadow-[-1px_0_#fff] [text-shadow:-1px_0_#fff])',
        `after:(animate-${keyframesName} animate-duration-800ms animate-alternate-reverse)`,
        `after:(${pseudoCommonClasses.join(' ')})`,
        'bg-white',
      ].join(' '),
    ],
    [
      // Change background, box-shadow and text-shadow color for pseudo elements
      new RegExp(`^${name}-bg-(.+)$`),
      ([_, bg], context) => {
        const resolvedColor = resolveUnoColor(
          bg,
          context.theme.colors,
          context.theme.backgroundColor
        )

        if (resolvedColor === '') {
          return ''
        }

        return [
          `bg-[${resolvedColor}]`,
          `before:(shadow-[2px_0_${resolvedColor}] bg-[${resolvedColor}] [text-shadow:2px_0_${resolvedColor}])`,
          `after:(shadow-[-1px_0_${resolvedColor}] bg-[${resolvedColor}] [text-shadow:-1px_0_${resolvedColor}])`,
        ].join(' ')
      },
    ],
    // Change text color for pseudo elements
    [
      new RegExp(`^${name}-text-(.+)$`),
      ([_, textColor]) => `before:text-${textColor} after:text-${textColor}`,
    ],
  ],
  theme: {
    animation: {
      durations: {
        [keyframesName]: '1s',
      },
      timingFns: {
        [keyframesName]: 'linear',
      },
      counts: {
        [keyframesName]: 'infinite',
      },
      keyframes: {
        [keyframesName]: /* css */ `
          {
            0% {
              clip-path: inset(0% 0 0% 0);
              opacity: 0%;
            }
            17.5% {
              clip-path: inset(0% 0 0% 0);
              opacity: 0%;
            }
            17.64706% {
              clip-path: polygon(0% 0%, 100% 0%, 100% 10%, 0% 10%);
              opacity: 100%;
            }
            26.346213% {
              clip-path: polygon(0% 94%, 100% 94%, 100% 100%, 0% 100%);
              opacity: 100%;
            }
            26.5% {
              opacity: 0%;
            }
            41% {
              opacity: 0%;
            }
            41.17647% {
              clip-path: polygon(0% 95%, 100% 95%, 100% 100%, 0% 100%);
              opacity: 100%;
            }
            47.05882% {
              clip-path: polygon(0% 100%, 100% 100%, 100% 10%, 0% 10%);
              opacity: 100%;
            }
            52.94118% {
              clip-path: polygon(0% 95%, 100% 95%, 100% 100%, 0% 100%);
              opacity: 100%;
            }
            53% {
              opacity: 0%;
            }
            100% {
              opacity: 0%;
            }
          }`,
      },
    },
  },
}
