import { path } from '@vuepress/utils'

const KnznTheme = (options) => {
  return (app) => {
    return {
      name: 'vuepress-theme-knzn',
      layouts: {
        Layout: path.resolve(__dirname, '../client/layouts/Layout.vue'),
        404: path.resolve(__dirname, '../client/layouts/404.vue'),
      },
      clientConfigFile: path.resolve(__dirname, '../client/clientConfig.ts'),
      plugins: [],
      // ...
    }
  }
}

export * from './types'
export default KnznTheme
