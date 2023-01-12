import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDownOutlined } from '@ant-design/icons';

import { images } from '../../constants';

const Header: React.FC = () => {
  return (
    <>
      <div className="header">
        <div className="header__container">
          <motion.div
            className="header__info"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            exit={{ x: [0, -100], opacity: [1, 0] }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              delayChildren: 0.5,
            }}
          >
            <h1>KayDavids Autos</h1>
            <h3>Automobile Import, Trade, Repair & Maintenance</h3>
            <p>
              We exist to provide qualitative automotive services, at reasonable
              & affordable prices, by delivering sales and service experience
              that engender customers’ unparalleled loyalty.
            </p>
            <div className="learn-more app__flex">
              <a href="#about" className="btn--text">
                Learn more
              </a>
              <ArrowDownOutlined />
            </div>
          </motion.div>

          <motion.div
            className="header__image"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ x: [100, 0], opacity: [0, 1] }}
            exit={{ x: [0, -100], opacity: [1, 0] }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              delayChildren: 0.5,
            }}
          >
            <Image src={images.background} alt="background" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Header;
