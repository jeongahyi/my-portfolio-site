module.exports = {
  siteMetadata: {
    title: "My Portfolio Site",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `item`,
        path: `${__dirname}/item`,
      }
    },
    "gatsby-plugin-sass"
  ],
};
