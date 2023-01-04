import { StaticImageData } from 'next/image';

import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import background from '../assets/background.jpg';
import importing from '../assets/import.png';
import trade from '../assets/trade.png';
import repair from '../assets/repair.png';
import maintenance from '../assets/maintenance.png';

interface Images {
  icon1: any;
  icon2: any;
  icon3: any;
  background: any;
  importing: any;
  trade: any;
  repair: any;
  maintenance: any;
}

export const Images: Images = {
  icon1,
  icon2,
  icon3,
  background,
  importing,
  trade,
  repair,
  maintenance,
};
