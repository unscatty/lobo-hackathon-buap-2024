import type { AstroBuiltinAttributes } from 'astro'

export interface ClassyComponentProps {
  class?: string
  'class:list'?: AstroBuiltinAttributes['class:list']
}
