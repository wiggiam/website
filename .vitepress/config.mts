import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Wiggiam & Company",
  description: "wiggiam website",
  head: [
    ['link', { rel: 'icon', href: '/catto.png' }]
  ],
  themeConfig: {
    logo: '/catto.png',

    nav: [
      { text: 'home', link: '/' },
      { text: 'games', link: '/spreadsheet-stuff' },
      { text: 'docs', link: '/maths-docs' },
      { text: 'about', link: '/site-info' },
    ],

    sidebar: [
      {
        text: 'documents',
        items: [
          { text: 'site info', link: '/site-info' },
          { text: 'games & more', link: '/spreadsheet-stuff' },
          { text: 'maths docs', link: '/maths-docs' },
          { text: 'further maths docs', link: '/further-maths-docs' },
          { text: 'random page', link: '/random' },
        ]
      }
    ],

    footer: {
      message: `shhh, don't tell anyone about this 🤫`,
      copyright: 'Copyright © 2026 Wiggiam & Company. All rights reserved.'
    }
  }
})