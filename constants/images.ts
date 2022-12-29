import { StaticImageData } from 'next/image';

import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';

interface Images {
  icon1: any;
  icon2: any;
  icon3: any;
}

export const Images: Images = { icon1, icon2, icon3 };
