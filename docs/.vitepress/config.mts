import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Uniqbro DOCS",
  description: "Tips for staff",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Главная', link: '/' },
      //{ text: 'Examples', link: '/markdown-examples' },
      { text: 'Отзывы', link: '/guide/reviews' }
    ],

    sidebar: [
      {
        text: 'Общее',
        items: [
          { text: 'Отзывы', link: '/guide/reviews' },
          { text: 'Ресайз', link: '/guide/batch' },
          //{ text: 'Markdown Examples', link: '/markdown-examples' },
          //{ text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tkachev-o/uniqbro-docs' }
    ]
  }
})
