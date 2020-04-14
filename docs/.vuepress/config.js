module.exports = {
  title: "远程工作",
  description: "定义新时代的工作方式",
  head: [["link", { rel: "icon", href: "icons/favicon.png" }]],
  base: "/kb/",
  themeConfig: {
    displayAllHeaders: true,
    logo: "/images/logo.png",
    nav: [
      { text: "首页", link: "/" },
      {
        text: "文档",
        ariaLabel: "content",
        items: [
          { text: "develop", link: "/develop/" },
          { text: "test", link: "/test/" }
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
