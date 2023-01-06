import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import AppWrap from '../../components/HOC/AppWrap';
import MotionWrap from '../../components/HOC/MotionWrap';

const ContactUS: React.FC = () => {
  return (
    <section className="section">
      <div className="section__title">
        <h2 className="section__description">Talk To Us</h2>
        <h3 className="section__header">
          You can reach out to us here, We&apos;re always available.
        </h3>
      </div>

      <motion.div
        className="app__contact-cards"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.85, ease: 'easeInOut' }}
      >
        <div className="app__contact-card">
          <Image src={images.email} alt="email" />
          <a href="mailto:info@kaydavidsautos.com" className="">
            info@kaydavidsautos.com
          </a>
        </div>
        <div className="app__contact-card">
          <Image src={images.phone} alt="phone" />
          <a href="tel:+2348027978387" className="">
            +234 802 797 8387
          </a>
        </div>
      </motion.div>
    </section>
  );
};

// prettier-ignore
export default AppWrap(MotionWrap(ContactUS, 'app__contact'), 'contact-us', 'app__bg');
