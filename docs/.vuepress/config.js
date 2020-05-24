module.exports = {
  title: "远程工作",
  description: "定义新时代的工作方式",
  head: [["link", { rel: "icon", href: "icons/favicon.png" }]],
  host: "localhost",
  base: "/kb/",
  themeConfig: {
    repo: "telework-club/kb",
    editLinks: true,
    docsDir: "docs",
    editLinkText: "在 GitHub 上编辑此页",
    lastUpdated: "上次更新",
    displayAllHeaders: true,
    smoothScroll: true,
    logo: "/images/logo.png",
    nav: [
      { text: "首页", link: "/" },
      {
        text: "文档",
        ariaLabel: "content",
        items: [
          { text: "项目经理", link: "/pm/" },
          { text: "产品主管", link: "/po/" },
          { text: "Scrum Master", link: "/sm/" },
          { text: "设计", link: "/ui/" },
          { text: "开发", link: "/developer/" },
          { text: "测试", link: "/qa/" },
        ],
      },
      { text: "关于", link: "/about/" },
      { text: "主站", link: "https://telework.club/" },
    ],
    sidebar: {
      "/pm/": [""],
      "/po/": [""],
      "/sm/": [""],
      "/ui/": [""],
      "/developer/": [""],
      "/qa/": [""],
    },
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
        hostname: 'https://telework.club/kb'
      }
    ],
  ],
};
