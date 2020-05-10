import React from 'react';
import PropTypes from 'prop-types';

const tabs = [
  'About', 'Work', 'Music', 'Contact'
];

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      < img src = {
        'https://res.cloudinary.com/amarcloud/image/upload/v1588864114/portfolio/images/yo.png'
      }
      />
      {/* <span className="icon fa-diamond" /> */}
    </div>
    <div className="content">
      <div className="inner">
        <h1>Amar Nagargoje</h1>
        <p>Code, music, literature, travel </p>
      </div>
    </div>
    <nav>
      <ul>
        {
          tabs.map(tab => (
            <li>
              <a
                href="javascript:;"
                onClick={() => {
                  props.onOpenArticle(tab.toLowerCase());
                }}
              >
                {tab}
          </a>
            </li>
          ))
        }
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

export default Header;
