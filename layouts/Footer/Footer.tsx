import React from 'react';
import Image from 'next/image';
import {
  InstagramFilled,
  TwitterCircleFilled,
  FacebookFilled,
  LinkedinFilled,
} from '@ant-design/icons';

import { FOOTERS } from '../../helpers/helpers';
import { images } from '../../constants';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <ul className="footer__nav">
        {FOOTERS.map((item, index) => (
          <li key={`${item.title}-${index}`} className="footer__item">
            <a className="footer__link" href={item.link}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="footer__contact-us">
        <p>You can reach us here</p>
        <p>+234 802 797 8387 | info@kaydavidsautos.com</p>
        <p></p>
      </div>

      <div className="footer__base">
        <div className="full-logo app__flex">
          <Image src={images.icon2} alt="Logo" className="footer__logo" />
          <h1>KDA</h1>
        </div>
        <p className="footer__copyright">
          Copyright &copy; 2023 KayDavidsAuto. All rights reserved.
        </p>
        <div className="footer__socials">
          <div>
            <a
              href="//twitter.com/kaydavidsautos"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterCircleFilled />
            </a>
          </div>
          <div>
            <a
              href="//instagram.com/kaydavidsautos"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramFilled />
            </a>
          </div>
          <div>
            <a
              href="//facebook.com/kaydavidsautos"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookFilled />
            </a>
          </div>
          <div>
            <a
              href="//linkedin.com/in/kaydavidsautos"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinFilled />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
