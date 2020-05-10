import React from 'react';
import PropTypes from 'prop-types';
import Code from './Code';
import About from './About';

// import pic01 from '../images/pic01.jpg';
import pic02 from '../images/pic02.jpg';
// import pic03 from '../images/pic03.jpg';

class Main extends React.Component {
  render() {
    const {
      onCloseArticle,
      setWrapperRef,
      article,
      articleTimeout,
      timeout,
      handleOpenArticle
    } = this.props;
    let close = (
      <div
        className="close"
        onClick={() => {
          onCloseArticle();
        }}
      />
    );

    return (
      <div
        ref={setWrapperRef}
        id="main"
        style={timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <About
          close={close}
          article={article}
          handleOpenArticle={handleOpenArticle}
          articleTimeout={articleTimeout}
          />

        <Code
          close={close}
          handleOpenArticle={handleOpenArticle}
          imgSrc={pic02}
          article={article}
          articleTimeout={articleTimeout}
        />

        <article
          id="music"
          className={`${article === 'music' ? 'active' : ''} ${
            articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none', overflow: 'hidden' }}
        >
          <h1 className="major">Music</h1>
          {/* <h3 className="major">Production</h3> */}
          <p>
          Playlists 
          </p>
                  
          <iframe src="https://open.spotify.com/embed/playlist/1A9AzUyL464dGxEfCpGjvE" width="300" height="200" frameborder="0"
            scrolling="auto"
            style={{ border: 'none', overflow: 'hidden' }}
            allowtransparency="true" allow="encrypted-media"></iframe>
          <p>
          Artists 
          </p>
          <iframe
            src = "https://open.spotify.com/follow/1/?uri=spotify:artist:5GnnSrwNCGyfAU4zuIytiS&size=detail&theme=dark"
            width="300"
            height="56"
            scrolling="no"
            frameborder="0"
            style={{ border: 'none', overflow: 'hidden' }}
            allowtransparency="true"
          />  
           <iframe
            src = "https://open.spotify.com/follow/1/?uri=spotify:artist:7qHsapL39aTQsPhixtzVvy&size=detail&theme=dark"
            width="300"
            height="56"
            scrolling="no"
            frameborder="0"
            style={{ border: 'none', overflow: 'hidden' }}
            allowtransparency="true"
          /> 
         
          <iframe
            src = "https://open.spotify.com/follow/1/?uri=spotify:artist:7naAJDAh7AZnf18YYfQruM&size=detail&theme=dark"
            width="300"
            height="56"
            scrolling="no"
            frameborder="0"
            style={{ border: 'none', overflow: 'hidden' }}
            allowtransparency="true"
          />
          
           <iframe
            src = "https://open.spotify.com/follow/1/?uri=spotify:artist:7n2wHs1TKAczGzO7Dd2rGr&size=detail&theme=dark"
            width="300"
            height="56"
            scrolling="no"
            frameborder="0"
            style={{ border: 'none', overflow: 'hidden' }}
            allowtransparency="true"
          />
          <iframe
            src = "https://open.spotify.com/follow/1/?uri=spotify:artist:4nDoRrQiYLoBzwC5BhVJzF&size=detail&theme=dark"
            width="300"
            height="56"
            scrolling="no"
            frameborder="0"
            style={{ border: 'none', overflow: 'hidden' }}
            allowtransparency="true"
          />
                
          <iframe
            src = "https://open.spotify.com/follow/1/?uri=spotify:artist:72beYOeW2sb2yfcS4JsRvb&size=detail&theme=dark"
            width="300"
            height="56"
            scrolling="no"
            frameborder="0"
            style={{ border: 'none', overflow: 'hidden' }}
            allowtransparency="true"
          />
          <iframe
            src = "https://open.spotify.com/follow/1/?uri=spotify:artist:1SJOL9HJ08YOn92lFcYf8a&size=detail&theme=dark"
            width="300"
            height="56"
            scrolling="no"
            frameborder="0"
            style={{ border: 'none', overflow: 'hidden' }}
            allowtransparency="true"
          />
          
{
  /* spotify:artist:4nDoRrQiYLoBzwC5BhVJzF
          <h3 className="major">Mixes</h3>
          <p>
            I also release weekly mixes under the brand{' '}
            <a href="http://www.burncartel.com">Burn Cartel</a>.
          </p> */}
          {/* <iframe
            width="100%"
            height="300"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/293074963&color=%23444444&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true"
          /> */}
          {/* <span className="image main">
            <img src={pic03} alt="" />
          </span> */}
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p> */}
          {close}
        </article>

        <article
          id="contact"
          className={`${article === 'contact' ? 'active' : ''} ${
            articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <p>+91 9637844377
           <br></br>
            
          </p>
          {/* <p>
            → <a href="mailto:amargithub@gmail.com">Amar Nagargoje</a>
          </p> */}
          {/* <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form> */}
          <ul className="icons">
            <li>
              < a href = "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=amargithub@gmail.com"
              className = "icon fa-envelope" target='_blank' >
                <span className="label">Mail</span>
              </a>
            </li>
            <li>
              <a href = "https://github.com/Amarn7"
                className = "icon fa-github"
                target = '_blank' >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              < a href = "https://www.linkedin.com/in/amar-nagargoje-9485b116a/"
              className = "icon fa-linkedin"
              target = '_blank' >
                <span className="label">Linked In</span>
              </a>
            </li>
            <li>
              < a href = "https://www.instagram.com/_aamarrr_/"
              className = "icon fa-instagram"
              target = '_blank' >
                <span className="label">Instagram</span>
              </a>
            </li>
            
          </ul>
          {close}
        </article>
      </div>
    );
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired
};

export default Main;
