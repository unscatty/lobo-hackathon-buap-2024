import type { Preset } from 'unocss'
import type { Theme } from './types'
import { resolveUnoColor } from '../helpers'

const name = 'btn-glitch1'
// const unglitchName = `${name}-unglitch`
// const glitchName = `${name}-glitch`
const keyframesName = `${name}--glitch-effect`

const pseudoCommonClasses = [
  'content-[attr(data-glitch-text)]',
  'absolute',
  'w-full',
  'text-black',
  'px-0',
  'py-2',
  'left-0',
  'top-0',
  '[-webkit-clip:rect(0px,0px,0px,0px)]',
  '[clip:rect(0px,0px,0px,0px)]',
  'bg-white',
]

export const btnGlitch1Preset: Preset<Theme> = {
  name: `${name}-preset`,
  shortcuts: [
    [
      name,
      [
        'transition-all',
        'duration-[0.2s]',
        'ease-[ease]',
        'before:left-[-3px]',
        'before:shadow-[2px_0_#fff]',
        'before:-top-0.5',
        'after:shadow-[-1px_0_#fff]',
        'after:left-0.5',
        'after:-bottom-0.5',
        `before:(animate-${keyframesName} animate-duration-1.5s animate-alternate-reverse)`,
        `after:(animate-${keyframesName} animate-duration-2s animate-alternate-reverse)`,
        `before:(${pseudoCommonClasses.join(' ')})`,
        `after:(${pseudoCommonClasses.join(' ')})`,
        'before:[text-shadow:2px_0_#fff]',
        'after:[text-shadow:-1px_0_#fff]',
        'bg-white',
      ].join(' '),
    ],
    [
      // Change background, box-shadow and text-shadow color for pseudo elements
      new RegExp(`^${name}-bg-(.+)$`),
      ([_, bg], context) => {
        const resolvedColor = resolveUnoColor(bg, context.theme.colors, context.theme.backgroundColor)

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
    [new RegExp(`^${name}-text-(.+)$`), ([_, textColor]) => `before:text-${textColor} after:text-${textColor}`],
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
        [keyframesName]: `
          {
            0% {
              clip: rect(-3px, 600px, 0px, 0px);
            }
            5.88235% {
              clip: rect(0px, 600px, 0px, 0px);
            }
            11.76471% {
              clip: rect(-3px, 600px, 0px, 0px);
            }
            17.64706% {
              clip: rect(-3px, 600px, 0px, 0px);
            }
            23.52941% {
              clip: rect(100px, 600px, 100px, 0px);
            }
            29.41176% {
              clip: rect(0px, 600px, 600px, 0px);
            }
            35.29412% {
              clip: rect(100px, 600px, 0px, 0px);
            }
            41.17647% {
              clip: rect(0px, 600px, 600px, 0px);
            }
            47.05882% {
              clip: rect(100px, 600px, 0px, 0px);
            }
            52.94118% {
              clip: rect(-3px, 600px, 0px, 0px);
            }
            58.82353% {
              clip: rect(100px, 450px, 100px, 0px);
            }
            64.70588% {
              clip: rect(0px, 450px, 0px, 0px);
            }
            70.58824% {
              clip: rect(100px, 450px, 100px, 0px);
            }
            76.47059% {
              clip: rect(0px, 450px, 0px, 0px);
            }
            82.35294% {
              clip: rect(0px, 450px, 0px, 0px);
            }
            88.23529% {
              clip: rect(0px, 450px, 0px, 0px);
            }
            94.11765% {
              clip: rect(0px, 450px, 0px, 0px);
            }
            100% {
              clip: rect(0px, 450px, 0px, 0px);
            }
          }`,
      },
    },
  },
}
