import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(
  defineConfig({
    title: '计算机科学个人体系',
    description: '10 本经典教材 + 2 门自创进阶贯通课',
    lang: 'zh-CN',
    base: process.env.GITHUB_ACTIONS ? '/CS-Course/' : '/',

    markdown: {
      math: true,
      lineNumbers: true
    },

    mermaid: {
      // mermaid 自定义配置
    },

    themeConfig: {
      logo: '💻',
      siteTitle: 'CS 学习体系 (10+2)',

      socialLinks: [
        { icon: 'github', link: 'https://github.com/Minsecrus/CS-Course' }
      ],

      nav: [
        { text: '体系总览', link: '/guide' },
        {
          text: '自创课一：系统演化',
          items: [
            { text: '课程总纲', link: '/计算机系统演化_抽象与妥协/' },
            { text: '16周完整大纲', link: '/计算机系统演化_抽象与妥协/16周完整教学与沙盒实验大纲' }
          ]
        },
        {
          text: '自创课二：现代 UI 工程',
          items: [
            { text: '课程总纲', link: '/人机状态边界与现代UI工程/' },
            { text: '16周完整大纲', link: '/人机状态边界与现代UI工程/16周完整教学与对抗工坊大纲' }
          ]
        }
      ],

      sidebar: {
        '/guide': [
          {
            text: '学习指南',
            items: [
              { text: '体系全景与依赖图', link: '/guide#一-课程与书单的前置依赖图' },
              { text: '阅读建议与选书原则', link: '/guide#二-阅读建议-减少语言负担-抓核心章节' },
              { text: '核心十本书精读指南', link: '/guide#三-核心十本书-每本书看什么-略过什么' },
              { text: '推荐学习顺序', link: '/guide#四-推荐学习顺序-四个阶段' }
            ]
          }
        ],
        '/计算机系统演化_抽象与妥协/': [
          {
            text: '计算机系统演化：抽象与妥协',
            items: [
              { text: '课程总纲与考核标准', link: '/计算机系统演化_抽象与妥协/' },
              { text: '16 周教学与沙盒大纲', link: '/计算机系统演化_抽象与妥协/16周完整教学与沙盒实验大纲' }
            ]
          }
        ],
        '/人机状态边界与现代UI工程/': [
          {
            text: '人机状态边界与现代 UI/UX 工程',
            items: [
              { text: '课程总纲与考核标准', link: '/人机状态边界与现代UI工程/' },
              { text: '16 周教学与工坊大纲', link: '/人机状态边界与现代UI工程/16周完整教学与对抗工坊大纲' }
            ]
          }
        ]
      },

      docFooter: {
        prev: '上一篇',
        next: '下一篇'
      },

      outline: {
        level: [2, 3],
        label: '本页大纲'
      },

      search: {
        provider: 'local'
      }
    }
  })
)
