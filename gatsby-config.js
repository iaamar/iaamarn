module.exports = {
  siteMetadata: {
    title: "Amar Nagargoje",
    author: "Amar Nagargoje",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Portfolio',
        short_name: 'app',
        start_url: 'http://127.0.0.1:5502/',  
        background_color: '#000000',
        theme_color: '#000000',
        display: 'minimal-ui',
       icon: 'src/images/yo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
