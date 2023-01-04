import React from 'react';
import { motion } from 'framer-motion';

import AppWrap from '../../components/HOC/AppWrap';
import MotionWrap from '../../components/HOC/MotionWrap';
import { Mission, Values } from '../../helpers/data';

const About: React.FC = () => {
  return (
    <section className="section">
      <div className="section__title">
        <h2 className="section__description">About Us</h2>
        <h3 className="section__header">Brief History of KayDavidsAutos</h3>
      </div>

      <motion.article>
        KayDavids Automobile & Mechanicals Ltd (KAML) was incorporated in 2019
        with the Corporate Affairs Commission (CAC) as a licensed automobiles’
        business, based in Lagos, Nigeria. Prior to this time. It started out as
        an entrepreneurial adventure under the expression, KayDavids Autos,
        which was a business name registered with the same commission in 2017,
        with the sole purpose of importing and trading (buying & selling) cars
        in Nigeria. As a going concern, business needs began to evolve
        especially with our clients’ base, in identifying credible and reliable
        workshops & garages that could provide decent, consistent, well-meaning
        & professional automotive repairs & maintenance services for their cars,
        at not-so-ridiculous prices. We saw an opportunity in this, as we were
        consistently importing new cars into the country, and fleet of cars
        (both brand new & fairly used ones) were being added on a daily basis,
        to the garages of people – individuals & corporates. The need to start
        an auto garage became imminent & inevitable in the light of this growing
        market demand, and if we were going to cater to the enormous automotive
        needs of our clients, specifically. <br />
        <br /> Maintaining their cars to last, and serve them for longer years
        was equally as important to us as this gave our brand a good outlook,
        and was sure to guarantee repeat businesses and bring new customers in
        the foreseeable future. This was what led to the birth of the company,
        <span> KAYDAVIDS AUTOS & MECH LTD (KAML)</span>, to accommodate all
        necessary repairs & maintenance works that we needed to provide. Since
        inception, we have been handling all sorts of mechanical and general
        automobile-related concerns, which include, routine servicing, major
        repairs/replacement works on engines, transmissions systems, body works,
        refurbishing & tune-up of cars, etc. Today, we don’t just have a brand
        presence. We have become a fast-growing auto garage that service almost
        all makes and models, for individuals and corporates, render car
        dealership services, engage in genuine auto parts retailing, and this
        list is endless. While we understand that, doing business at a profit is
        a healthy goal to pursue. What has been more important to us in the past
        few years and till date, are the testimonials from our esteemed clients
        – home & abroad, about how our services have reshaped their end-to-end
        customer experience, as it applies to all of their automotive concerns.
      </motion.article>

      <h3 className="section__header">Our Mission</h3>
      <div className="section__missions">
        {Mission.map((item, index) => (
          <div key={index} className="missions">
            <p className="mission-number">{item.number}</p>
            <p className="mission-info">{item.info}</p>
          </div>
        ))}
      </div>

      <h3 className="section__header">Our Values</h3>
      <div className="section__values">
        {Values.map((item, index) => (
          <div key={index} className="values">
            <h2 className="mission-value">{item.value}</h2>
            <p className="mission-info">{item.info}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// export default About;
export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__bg');
