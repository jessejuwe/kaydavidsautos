import React from 'react';
import {
  InstagramFilled,
  TwitterCircleFilled,
  FacebookFilled,
  LinkedinFilled,
} from '@ant-design/icons';

const SocialMedia: React.FC = () => {
  return (
    <div className="app__social">
      <div>
        <a href="//twitter.com/kaydavidsautos" target="_blank" rel="noreferrer">
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
  );
};

export default SocialMedia;
