const nav = require('../nav')
const sidebar = require('../sidebar')

module.exports = {
  title: "远程工作",
  description: "定义新时代的工作方式",
  head: [["link", { rel: "icon", href: "icons/favicon.png" }]],
  host: "localhost",
  base: "/",
  themeConfig: {
    repo: "telework-club/kb",
    editLinks: true,
    docsDir: "docs",
    editLinkText: "在 GitHub 上编辑此页",
    // lastUpdated: "上次更新",
    smoothScroll: true,
    logo: "/images/logo.png",
    nav: nav,
    sidebar: sidebar
  },
  plugins: [
    ["@vuepress/back-to-top", true],
    ["@vuepress/medium-zoom", true],
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-163087830-1",
      },
    ],
    [
      "@vssue/vuepress-plugin-vssue",
      {
        platform: "github",
        owner: "telework-club",
        repo: "kb",
        clientId: "7d466ab52a988d4a3560",
        clientSecret: "92440a7c8bbf7b27ac30b8e41ae393063abb15ff",
        locale: "zh",
        autoCreateIssue: true,
        admins: ["nanhapy", "lurongkai", "sinhbv", "likeconan"],
      },
    ],
    [
      "sitemap",
      {
        hostname: 'https://kb.telework.club'
      }
    ],
  ],
  extraWatchFiles: [
    'nav.js',
    'sidebar.js'
  ]
};
