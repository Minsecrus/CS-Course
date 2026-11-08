import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import markdownItKatex from '@iktakahiro/markdown-it-katex'

export default withMermaid(
  defineConfig({
    title: '计算机科学个人体系',
    description: '10 本经典教材 + 2 门自创进阶贯通课',
    lang: 'zh-CN',
    base: process.env.GITHUB_ACTIONS ? '/CS-Course/' : '/',

    markdown: {
      lineNumbers: true,
      config: (md) => {
        md.use(markdownItKatex)
      }
    },

    head: [
      ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css' }]
    ],

    mermaid: {
      theme: 'default',
      look: 'classic',
      htmlLabels: false,
      markdownAutoWrap: false,
      flowchart: {
        htmlLabels: false,
        wrappingWidth: 400,
        nodeSpacing: 24,
        rankSpacing: 48
      }
    },

    themeConfig: {
      logo: '💻',
      siteTitle: 'CS 学习体系 (10+2)',

      socialLinks: [
        { icon: 'github', link: 'https://github.com/Minsecrus/CS-Course' }
      ],

      // 顶部不重复放与首页按钮重叠的操作入口，保持纯粹简洁
      nav: [],

      // 全局统一侧边栏，涵盖整站所有核心页面，进入内页后可无缝穿梭
      sidebar: [
        {
          text: '体系总览',
          collapsed: false,
          items: [
            { text: '10+2 全局指南与依赖图', link: '/guide' },
            { text: '定制学习路线', link: '/路线/' },
            { text: '└─ UI 审美与交互工程路线', link: '/路线/UI审美与交互工程路线' }
          ]
        },
        {
          text: '经典教材导读',
          collapsed: false,
          items: [
            { text: '导读总览与心路历程', link: '/导读/' },
            { text: '01. SICP 导读', link: '/导读/SICP' }
          ]
        },
        {
          text: '自创课一：计算机系统演化',
          collapsed: false,
          items: [
            { text: '课程总纲与考核标准', link: '/计算机系统演化_抽象与妥协/' },
            { text: '16 周教学与沙盒实验大纲', link: '/计算机系统演化_抽象与妥协/16周完整教学与沙盒实验大纲' }
          ]
        },
        {
          text: '自创课二：现代 UI/UX 工程',
          collapsed: false,
          items: [
            { text: '课程总纲与考核标准', link: '/人机状态边界与现代UI工程/' },
            { text: '16 周教学与实战工坊大纲', link: '/人机状态边界与现代UI工程/16周完整教学与对抗工坊大纲' }
          ]
        }
      ],

      docFooter: {
        prev: '上一篇',
        next: '下一篇'
      },

      outline: {
        level: [2, 3],
        label: '本页目录'
      },

      search: {
        provider: 'local'
      }
    }
  })
)
