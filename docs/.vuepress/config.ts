import { defineUserConfig } from 'vuepress'
import KnznTheme from '../../knzn/node'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  theme: KnznTheme({}),
})
