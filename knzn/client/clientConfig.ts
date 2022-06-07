import { defineClientConfig } from '@vuepress/client'

import { setupPages } from './hooks'

export default defineClientConfig({
  async enhance({ app, router, siteData }) {
    await setupPages(app)
  },
  // setup() {},
  rootComponents: [],
})
