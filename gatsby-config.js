module.exports = {
  siteMetadata: {
    title: "Yi Jeongah",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `jobs`,
        path: `${__dirname}/content/jobs`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      }
    },
    "gatsby-plugin-sass",
    "gatsby-transformer-remark",
  ],
};
