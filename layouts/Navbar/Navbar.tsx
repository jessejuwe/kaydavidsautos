import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuOutlined, CloseCircleOutlined } from '@ant-design/icons';

import { images } from '../../constants';

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const [size, setSize] = useState(false);

  const toggleHandler = () => setToggle(!toggle);
  const closeHandler = () => setToggle(false);

  useEffect(() => {
    // Sticky Navigation: Intersection Observer API
    const nav = document.querySelector('.nav');
    const header = document.querySelector('.header');

    const currSize = window.innerWidth;

    currSize > 768 ? setSize(true) : setSize(false);

    const obsCallback = (entries: any) => {
      const [entry] = entries;

      !entry.isIntersecting
        ? nav?.classList.add('sticky')
        : nav?.classList.remove('sticky');
    };

    const navHeight = nav && nav.getBoundingClientRect().height;

    const obsOptions = {
      root: null,
      threshold: 0,
      rootMargin: `-${navHeight}px`,
    };

    const observer = new IntersectionObserver(obsCallback, obsOptions);
    observer.observe(header as Element);
  }, [size]);

  // Navbar opacity change
  const hoverHandler = function (this: any, e: any) {
    if (e.target.classList.contains('nav__link') && size) {
      const link = e.target;
      const siblings = link.closest('.nav').querySelectorAll('.nav__link');
      const logo = link.closest('.nav').querySelector('.nav__logo');

      siblings.forEach((el: any) => {
        if (el !== link) el.style.opacity = this;
      });

      logo.style.opacity = this;
    }
  };

  return (
    <>
      <div className="app__navbar">
        <nav
          className="nav"
          onMouseOver={hoverHandler.bind(0.5)}
          onMouseOut={hoverHandler.bind(1)}
        >
          <Image
            src={images.logo}
            alt="KayDavidsAutos Logo"
            className="nav__logo"
            id="logo"
          />

          <div className="nav__mobile">
            <MenuOutlined onClick={toggleHandler} />

            {toggle ? (
              <AnimatePresence>
                <motion.div
                  key="mobile"
                  initial={{ x: 300 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.85, ease: 'easeOut' }}
                  exit={{ x: 300 }}
                >
                  <CloseCircleOutlined onClick={toggleHandler} />
                  <ul className="nav__links" onClick={closeHandler}>
                    <li className="nav__item">
                      <a className="nav__link" href="#">
                        Home
                      </a>
                    </li>
                    <li className="nav__item">
                      <a className="nav__link" href="#about">
                        About
                      </a>
                    </li>
                    <li className="nav__item">
                      <a className="nav__link" href="#services">
                        Services
                      </a>
                    </li>
                    <li className="nav__item">
                      <a className="nav__link" href="#contact-us">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </motion.div>
              </AnimatePresence>
            ) : (
              ''
            )}
          </div>

          <ul className="nav__links">
            <li className="nav__item">
              <a className="nav__link" href="#">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#about">
                About
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#services">
                Services
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#contact-us">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
