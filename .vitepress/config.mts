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
      { text: 'games', link: '/games-and-more' },
      { text: 'docs', link: '/maths-docs' },
      { text: 'about', link: '/site-info' },
    ],

    sidebar: [
      {
        text: 'Pages',
        items: [
          { text: 'site info', link: '/site-info' },
          { text: 'games & more', link: '/games-and-more' },
          { text: 'Maths', link: '/maths-docs' },
          { text: 'Further Maths', link: '/further-maths-docs' },
          { text: 'random', link: '/random' },
        ]
      }
    ],

    footer: {
      message: `shhh, don't tell anyone about this site 🤫`,
      copyright: 'Copyright © 2026 Wiggiam & Company. All rights reserved.'
    }
  }
})