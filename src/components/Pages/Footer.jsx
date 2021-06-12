import React from 'react';
import { ReactComponent as Instagram_Icon } from '../../img/SVG/icons/Instagram.svg';
import { ReactComponent as YouTube_Icon } from '../../img/SVG/icons/Youtube.svg';
import { ReactComponent as FaceBook_Icon } from '../../img/SVG/icons/Facebook.svg';
import { ReactComponent as Discord_Icon } from '../../img/SVG/icons/Discord.svg';
import { Link, useHistory } from 'react-router-dom';

import './Pages.css';

function Footer() {
  const history = useHistory();
  function goBackPage() {
    history.goBack();
  }
  const date = new Date().getFullYear();
  return (
    <footer>
      <div className="fSection" id="fT">
        <div className="left">
          <button onClick={goBackPage} className="backButton">
            &lt;Last Page
          </button>
        </div>
        <div className="middle">
          <Link to="/" style={{ color: 'white' }}>
            JMKit.com
          </Link>
        </div>
        <div className="right">
          <p className="infoText">Show Your Support</p>{' '}
          <p className="patreon">
            <a
              href="https://www.patreon.com/jmkit"
              target="_blank"
              rel="noopener noreferrer"
            >
              Patreon
            </a>
          </p>
        </div>
      </div>
      <div className="fSection" id="fM">
        <div className="left"></div>
        <div className="middle">
          <ul className="socials">
            <li>
              <a
                href="https://discord.gg/gZqpFHA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="footerIcon">
                  <Discord_Icon title="Discord" stroke-width="3" />
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/jmkit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="footerIcon">
                  <YouTube_Icon stroke-width="3" />
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/jmkit"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <div className="footerIcon">
                  <Instagram_Icon stroke-width="3" />
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/jmkit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="footerIcon">
                  <FaceBook_Icon stroke-width="3" />
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="right"></div>
      </div>
      <div className="fSection" id="fB">
        <div className="left"></div>
        <div className="middle">
          Ver 1.2
          <a href="mailto:info@jmkit.com">Contact Me</a>
        </div>
        <div className="right">&#169; JMKit.com {date}</div>
      </div>
    </footer>
  );
}

export default Footer;
