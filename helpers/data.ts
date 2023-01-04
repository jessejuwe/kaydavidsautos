import { images } from '../constants';

interface Mission {
  info: string;
  number: string;
}

export const Mission: Mission[] = [
  {
    number: '●',
    info: 'To provide professional automotive solutions (maintenance services, cars & parts purchases, auto-related consultancy & advisory services) to individuals, households, & corporates who need, own & use automobiles, by ensuring their units are kept in good shape at all times, and are performing optimally.',
  },
  {
    number: '●',
    info: 'To earn our customers’ loyalty by providing car care services that meet global standards, assure premium quality, with the ultimate focus on meeting & striving to exceed said & unsaid expectations, at all times.',
  },
  {
    number: '●',
    info: 'To be a world-class one-stop automobile shop that will favorably compete with other global leading brands, in terms of quality delivery & pricing (Long-term Focus).',
  },
];

interface Values {
  value: string;
  info: string;
}

export const Values: Values[] = [
  {
    value: 'Integrity',
    info: 'Our word is our bond. We don’t just say, we do! We deliver to our promise(s). We strive to adhere consistently and uncompromisingly to strong moral & ethical principles that govern all of our human & business interactions.',
  },
  {
    value: 'Priority',
    info: 'Our clients’ best interests will always come first. You say, and we do!',
  },
  {
    value: 'Excellence',
    info: 'To be world-class, we strive to deliver value at the highest quality & to be the best at all times. What we do, we strive to do it very well!',
  },
  {
    value: 'Stewardship',
    info: 'We exist to honor your trust in us, daily! Resources as entrusted, are committed to the purposes for which they are intended.',
  },
  {
    value: 'Committed Team',
    info: 'Our Staff are at the heart of all that we do. A team of highly motivated, driven, cultured & energetic people who work tirelessly in delivering at high quality value at work everyday to our esteemed clients. We invest a lot in our people.',
  },
  {
    value: 'Innovation',
    info: 'We don’t just follow; we learn & strive to beat existing patterns by doing it better. We learn each day how it can be done faster, neater, cheaper & safer, as we strive to delight our esteemed clients. This is how we truly deliver the energy that the future needs. We engage in value-added trainings, focus on continuous research & embrace technology that helps us do things better.',
  },
];

interface Section {
  lightBg: Boolean;
  lightText: Boolean;
  headline: string;
  img: any;
  imgSrc: any;
  alt: string;
  imgStart: Boolean;
  services: string[];
}

export const sectionOne: Section = {
  lightBg: false,
  lightText: true,
  headline: 'Import & Trade',
  img: images.importing,
  imgSrc: images.importing,
  alt: 'Import',
  imgStart: false,
  services: [
    'Pre-Inspection Purchase',
    'Cars’ Purchases & Expert Auto Advice',
    'Car Dealership Service',
    'Retailing of Genuine Parts & Consumables',
  ],
};

export const sectionTwo: Section = {
  lightBg: false,
  lightText: true,
  headline: 'Repair',
  img: images.repair,
  imgSrc: images.repair,
  alt: 'Repair',
  imgStart: false,
  services: [
    'Scheduled & Preventive Repairs',
    'General Automotive Repairs',
    'Accidented/Salvage/Flooded Repairs',
    'Automotive Engines Repair and Replacement',
    'Transmissions Systems Repair and Replacement',
    'Automotive Exhaust Systems Repair and Replacement',
    'Powertrain Repair Service',
    'Brake Repair Service',
    'Drivetrain & Suspension Service',
    'Auto Repairs Estimates for Insurance Companies',
    'Fixing of Instrument Cluster-related Lights’ Issues',
  ],
};

export const sectionThree: Section = {
  lightBg: false,
  lightText: true,
  headline: 'Maintenance',
  img: images.maintenance,
  imgSrc: images.maintenance,
  alt: 'Maintenance',
  imgStart: false,
  services: [
    'Scheduled & Preventive Maintenance',
    'Bespoke Auto Care Service',
    'Air-Conditioner Service',
    'Auto Diagnosis – Onsite & Offsite',
    'Installation of Live Airbags & ECU Re-programming',
    'Cars’ Registration & Papers’ Renewals',
    'Full Bodyshop Service (Painting included)',
    'Facelift/Upgrade Works/Tune Up’s',
    'Inspection & Emissions Systems Check',
    'Wheel Balancing & Alignment',
    'Courtesy Inspections',
  ],
};
