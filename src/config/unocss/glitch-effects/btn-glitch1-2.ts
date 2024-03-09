import type { DynamicShortcutMatcher, Preset } from 'unocss'
import { resolveUnoColor } from '../helpers'
import type { Theme } from '../types'

const name1 = 'btn-glitch1'
const keyframesName1 = `${name1}--glitch-effect`

const name2 = 'btn-glitch2'
const keyframesName2 = `${name2}--glitch-effect`

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

const commonShortcuts = (animationName: string) =>
  [
    'transition-all',
    'relative',
    'duration-[0.2s]',
    'ease-[ease]',
    'before:(-left-3% -top-9% shadow-[2px_0_#fff] [text-shadow:2px_0_#fff])',
    `before:(animate-${animationName} animate-duration-500ms animate-alternate-reverse)`,
    `before:(${pseudoCommonClasses.join(' ')})`,
    'after:(left-3% -bottom-9% shadow-[-1px_0_#fff] [text-shadow:-1px_0_#fff])',
    `after:(animate-${animationName} animate-duration-800ms animate-alternate-reverse)`,
    `after:(${pseudoCommonClasses.join(' ')})`,
    'bg-white',
  ].join(' ')

const commonBgShortcutMatcher: DynamicShortcutMatcher<Theme> = ([_, bg], context) => {
  const resolvedColor = resolveUnoColor(bg, context.theme.colors, context.theme.backgroundColor)

  if (resolvedColor === '') {
    return ''
  }

  return [
    `bg-[${resolvedColor}]`,
    `before:(shadow-[2px_0_${resolvedColor}] bg-[${resolvedColor}] [text-shadow:2px_0_${resolvedColor}])`,
    `after:(shadow-[-1px_0_${resolvedColor}] bg-[${resolvedColor}] [text-shadow:-1px_0_${resolvedColor}])`,
  ].join(' ')
}

const commonTextShortcutMatcher: DynamicShortcutMatcher<Theme> = ([_, textColor]) =>
  `before:text-${textColor} after:text-${textColor}`

const presetName = 'btn-glitch1-2-preset'
export const btnGlitch1_2Preset: Preset<Theme> = {
  name: presetName,
  shortcuts: [
    // btn-glitch1
    [name1, commonShortcuts(keyframesName1)],
    [
      // Change background, box-shadow and text-shadow color for pseudo elements
      new RegExp(`^${name1}-bg-(.+)$`),
      commonBgShortcutMatcher,
    ],
    // Change text color for pseudo elements
    [new RegExp(`^${name1}-text-(.+)$`), commonTextShortcutMatcher],

    // btn-glitch2
    [name2, commonShortcuts(keyframesName2)],
    [
      // Change background, box-shadow and text-shadow color for pseudo elements
      new RegExp(`^${name2}-bg-(.+)$`),
      commonBgShortcutMatcher,
    ],
    // Change text color for pseudo elements
    [new RegExp(`^${name2}-text-(.+)$`), commonTextShortcutMatcher],
  ],
  theme: {
    animation: {
      durations: {
        [keyframesName1]: '1s',
        [keyframesName2]: '1s',
      },
      timingFns: {
        [keyframesName1]: 'linear',
        [keyframesName2]: 'linear',
      },
      counts: {
        [keyframesName1]: 'infinite',
        [keyframesName2]: 'infinite',
      },
      keyframes: {
        [keyframesName1]: /* css */ `
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
        [keyframesName2]: /* css */ `
          {
            0% {
              left: 0;
              clip-path: inset(0% 0 0% 0);
            }
            9% {
              left: 0;
              clip-path: inset(0% 0 0% 0);
            }
            10% {
              left: 1%;
              clip-path: inset(21% 0 5% 0);
            }
            19% {
              left: 1%;
              clip-path: inset(21% 0 5% 0);
            }
            20% {
              left: 6%;
              clip-path: inset(72% 0 55% 0);
            }
            29% {
              left: 6%;
              clip-path: inset(72% 0 55% 0);
            }
            30% {
              left: 0;
              clip-path: inset(12% 0 -52% 0);
            }
            39% {
              left: 0;
              clip-path: inset(12% 0 -52% 0);
            }
            40% {
              left: -5%;
              clip-path: inset(-80% 0 12% 0);
            }
            49% {
              left: -5%;
              clip-path: inset(-80% 0 12% 0);
            }
            50% {
              left: 0;
              clip-path: inset(95% 0 32% 0);
            }
            59% {
              left: 0;
              clip-path: inset(95% 0 32% 0);
            }
            60% {
              left: 2%;
              clip-path: inset(4% 0 27% 0);
            }
            69% {
              left: 2%;
              clip-path: inset(4% 0 27% 0);
            }
            70% {
              left: 0;
              clip-path: inset(-64% 0 -77% 0);
            }
            79% {
              left: 0;
              clip-path: inset(-64% 0 -77% 0);
            }
            80% {
              left: -8%;
              clip-path: inset(75% 0 -4% 0);
            }
            89% {
              left: -8%;
              clip-path: inset(75% 0 -4% 0);
            }
            90% {
              left: 0;
              clip-path: inset(-33% 0 96% 0);
            }
            99% {
              left: 0;
              clip-path: inset(-33% 0 96% 0);
            }
            100% {
              left: 3%;
              clip-path: inset(48% 0 50% 0);
            }
          }`,
      },
    },
  },
}
