require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const pluginConfig = [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/content/blog`,
      name: `blog`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/content/assets`,
      name: `assets`,
    },
  },
  {
    resolve: `gatsby-plugin-prefetch-google-fonts`,
    options: {
      fonts: [
        {
          family: `Nunito Sans`,
          variants: [`400`, `600`, `700`, `800`],
        },
      ],
    },
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 590,
          },
        },
        {
          resolve: `gatsby-remark-prismjs`,
          options: {
            languageExtensions: [
              {
                language: 'superscript',
                extend: 'javascript',
                definition: {
                  superscript_types: /(SuperType)/,
                },
                insertBefore: {
                  function: {
                    superscript_keywords: /(superif|superelse)/,
                  },
                },
              },
            ],
            prompt: {
              user: 'root',
              host: 'localhost',
              global: false,
            },
          },
        },
      ],
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Maurício Mutte`,
      short_name: `Maurício Mutte`,
      start_url: `/`,
      background_color: `#101723`,
      theme_color: `#101723`,
      display: `standalone`,
      icon: `static/favicon.png`,
    },
  },
  `gatsby-plugin-offline`,
  `gatsby-plugin-react-helmet`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  `gatsby-plugin-styled-components`,
];

const analytics = {
  resolve: `gatsby-plugin-google-analytics`,
  options: {
    trackingId: process.env.GOOGLE_ANALYTICS_ID,
    head: false,
  },
};

pluginConfig.push(analytics);

module.exports = {
  siteMetadata: {
    title: `Maurício Mutte`,
    author: `Maurício Mutte`,
    description: `Meu nome é Maurício Mutte, sou um Frontend Developer de Porto Alegre/RS em início de carreira.`,
    siteUrl: `https://mauriciomutte.github.io`,
    social: {
      twitter: `mauriciomutte`,
    },
  },
  pathPrefix: '/',
  plugins: pluginConfig,
};
