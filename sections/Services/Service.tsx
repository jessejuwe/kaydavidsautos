import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {
  lightBg: Boolean;
  lightText: Boolean;
  headline: string;
  img: any;
  imgSrc: any;
  alt: string;
  imgStart: Boolean;
  services: string[];
};

const Service: React.FC<Props> = props => {
  useEffect(() => {
    const imgTargets = document.querySelectorAll('img[data-src]');

    // Lazy Loading Images
    const loadImg = (entries: any, observer: any) => {
      const [entry] = entries;

      // Guard Clause
      if (!entry.isIntersecting) return;

      // Replace src attribute with data-src attribute
      entry.target.src = entry.target.dataset.src;

      // Remove the blurry filter class
      entry.target.addEventListener('load', () =>
        entry.target.classList.remove('lazy-img')
      );

      observer.unobserve(entry.target);
    };

    const imgObserver = new IntersectionObserver(loadImg, {
      root: null,
      threshold: 0,
      rootMargin: '200px',
    });

    imgTargets.forEach(img => imgObserver.observe(img));

    return () => {};
  }, []);

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.85, ease: 'easeInOut' }}
      className={props.lightBg ? 'home__section' : 'home__section darkBg'}
    >
      <div className="containers">
        <div
          className={`row home__section-row ${
            props.imgStart ? 'flex-row' : 'flex-row-reverse'
          }`}
        >
          <div className="col">
            <div className="img-wrapper">
              <Image
                src={props.img}
                data-src={props.imgSrc}
                alt={props.alt}
                className="img lazy-img"
              />
            </div>
          </div>

          <div className="col">
            <div className="text-wrapper">
              <h3 className={props.lightText ? 'heading' : 'heading dark'}>
                {props.headline}
              </h3>
              <div>
                {props.services.map((item, index) => (
                  <p
                    key={index}
                    className={props.lightText ? 'subtitle' : 'subtitle dark'}
                  >
                    ✔ {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Service;
