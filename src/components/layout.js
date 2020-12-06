import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/scss/main.scss';

const Layout = ({ children, location }) => {
  let content;

  if (location && location.pathname === '/') {
    content = <div>{children}</div>;
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>{children}</div>
      </div>
    );
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {
                name: 'description',
                content: 'Amar Nagargoje'
              },
              { name: 'keywords', content: 'sample, something' },
              {
                name: 'og:image',
                // content:    
                // 'https://res.cloudinary.com/amarcloud/image/upload/v1588864033/portfolio/images/bg_compressed.jpg'
              }
            ]}
          >
            <html lang="en">
            <head>
    <link rel="stylesheet" href="../assets/asset/css/main.css" />
  </head>
  <body>
    <div id="particles-js">
      <div class="header">
        <h2>
        {content}
        </h2>
    </div>
</div>   
    <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
    <script src="../assets/asset/js/sweet-scroll.min.js"></script>
    <script src="../assets/asset/js/google-analytics.js"></script>
    <script src="../assets/asset/js/main.js"></script>
  </body>
            </html>
          </Helmet>
          {content}
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout; 
