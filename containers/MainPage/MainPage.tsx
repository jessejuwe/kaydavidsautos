import React, { useEffect } from 'react';

import { Header, About, Services } from '../../exports/exports';

type Props = {};

const MainPage = (props: Props) => {
  // Revealing Elements on Scroll
  useEffect(() => {
    const allSections = document.querySelectorAll('.section');

    const revealSection = (entries: any, observer: any) => {
      const [entry] = entries;

      // Guard Clause
      if (!entry.isIntersecting) return;
      entry.target.classList.remove('section--hidden');
      observer.unobserve(entry.target);
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.15,
    });

    allSections.forEach(section => {
      sectionObserver.observe(section);
      section.classList.add('section--hidden');
    });

    return () => {};
  }, []);

  return (
    <div>
      <Header />
      <About />
      <Services />
    </div>
  );
};

export default MainPage;
