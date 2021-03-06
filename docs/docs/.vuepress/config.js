module.exports = {
  title: 'Python Guide',
  description: 'Python学习笔记,Python学习指南',
  base: '/learn-python/',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    sidebar: 'auto',
    lastUpdated: '上次更新', // string | boolean
    nav: [
      { text: '首页', link: '/' },
      { text: '基础语法', link: '/base/' },
      { text: 'Github', link: 'https://github.com/BurNing1993/learn-python/' },
    ]
  },
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/back-to-top',
    '@vuepress/nprogress',
    [
      '@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: true
      }
    ]
  ]
}