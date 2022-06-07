/**
 * 获取所有文章
 */
import { usePagesData } from '@vuepress/client'
import type { ThemePageData } from '../../node'
import { inject } from 'vue'
import type { App, InjectionKey } from 'vue'

type ThemePages = ThemePageData[]
let pages: ThemePages = []
const pagesSymbol: InjectionKey<ThemePages> = Symbol('pages')

export const usePages = (): ThemePages => {
  const pages = inject(pagesSymbol)
  if (!pages) {
    throw new Error(`pages InjectionK is called without provider.`)
  }
  return pages
}

export async function setupPages(app: App): Promise<void> {
  const pagesData = usePagesData()
  pages = await Promise.all(
    Object.keys(pagesData.value).map((key) => (pagesData.value[key] as any)())
  )
  app.provide(pagesSymbol, pages)
}
