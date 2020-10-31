module.exports = {
    siteMetadata: {
      description: "Personal page of Diego Tardio",
      locale: "en",
      title: "Diego Tardio",
    },
    plugins: [
      {
        resolve: "@wkocjan/gatsby-theme-intro",
        options: {
          basePath: "/",
          contentPath: "content/",
          showThemeLogo: false,
          theme: "dark-pink",
        },
      },
    ],
  }