export interface UnoColors {
  [key: string]:
    | (UnoColors & {
        DEFAULT?: string
      })
    | string
}

export const resolveUnoColor = (
  stringColor: string,
  ...colorCollections: Array<UnoColors | undefined>
) => {
  let resolvedColor: string = ''

  if (stringColor.startsWith('[') && stringColor.endsWith(']')) {
    // Arbitrary color
    resolvedColor = stringColor.slice(1, -1)
  } else {
    const [color, bgVariantOrUndefined] = stringColor.split('-')
    const variant = bgVariantOrUndefined ?? ('DEFAULT' as const)

    for (const colorCollection of colorCollections) {
      if (!colorCollection) continue

      if (colorCollection[color]) {
        const contextColor = colorCollection[color]

        if (typeof contextColor === 'string') {
          resolvedColor = contextColor
        } else if (typeof contextColor === 'object') {
          if (contextColor[variant] && typeof contextColor[variant] === 'string') {
            resolvedColor = contextColor[variant] as string
          } else {
            resolvedColor = ''
          }
        }
      }
    }
  }

  return resolvedColor
}
