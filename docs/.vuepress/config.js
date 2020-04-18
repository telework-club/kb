module.exports = {
  title: "远程工作",
  description: "定义新时代的工作方式",
  head: [["link", { rel: "icon", href: "icons/favicon.png" }]],
  host: 'localhost',
  base: "/kb/",
  themeConfig: {
    displayAllHeaders: true,
    smoothScroll: true,
    logo: "/images/logo.png",
    nav: [
      { text: "首页", link: "/" },
      {
        text: "文档",
        ariaLabel: "content",
        items: [
          { text: "项目经理", link: "/pm" },
          { text: "产品主管", link: "/po" },
          { text: "Scrum Master", link: "/sm" },
          { text: "设计", link: "/ui" },
          { text: "开发", link: "/developer" },
          { text: "测试", link: "/qa" }
        ]
      },
      { text: "关于", link: "/about/" },
      { text: "主站", link: "https://telework.club/" }
    ],
    sidebar: {
      "/develop/": ["", "demo"],
      "/test/": ["", "demo"]
    }
  }
};
