import React from 'react';

import AppWrap from '../../components/HOC/AppWrap';
import MotionWrap from '../../components/HOC/MotionWrap';

import Service from './Service';
import { sectionOne, sectionTwo, sectionThree } from '../../helpers/data';

const Services: React.FC = () => {
  return (
    <>
      <section className="section">
        <div className="section__title">
          <h2 className="section__description">Services</h2>
          <h3 className="section__header">What We Can Offer You</h3>
        </div>

        <Service {...sectionOne} />
        <Service {...sectionTwo} />
        <Service {...sectionThree} />
      </section>
    </>
  );
};

// export default Services;
// prettier-ignore
export default AppWrap(MotionWrap(Services, 'app__services'), 'services', 'app__bg');
