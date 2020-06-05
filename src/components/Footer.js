import React from 'react';
import PropTypes from 'prop-types';

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
      <p className='copyright'>Hosted  on 
        <a className = 'copyright' target="_blank"
        href = "https://github.com/iaamar"> NETLIFY </a>
        </p>
  </footer>
);

Footer.propTypes = {
  timeout: PropTypes.bool,
};

export default Footer;
