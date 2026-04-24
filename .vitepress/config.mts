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
      { text: 'games', link: '/games' },
      { text: 'docs', link: '/maths' },
      { text: 'about', link: '/about' },
    ],

    sidebar: [
      {
        text: 'Pages',
        items: [
          { text: 'about', link: '/about' },
          { text: 'games & more', link: '/games' },
          { text: 'Maths', link: '/maths' },
          { text: 'Further Maths', link: '/further-maths' },
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