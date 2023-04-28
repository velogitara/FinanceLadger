// import SimpleGallery from 'helpers/SimpleGallery/SimpleGallery';
import 'photoswipe/dist/photoswipe.css';

import { Gallery, Item } from 'react-photoswipe-gallery';

import { GridBox } from './CasesGallery.styled';

import cases1 from '../../images/cases/cases1.jpg';
import cases1_2x from '../../images/cases/cases1@2x.jpg';
import cases2 from '../../images/cases/cases2.jpg';
import cases2_2x from '../../images/cases/cases2@2x.jpg';
import cases3 from '../../images/cases/cases3.jpg';
import cases3_2x from '../../images/cases/cases3@2x.jpg';
import cases4 from '../../images/cases/cases4.jpg';
import cases4_2x from '../../images/cases/cases4@2x.jpg';
import cases5 from '../../images/cases/cases5.jpg';
import cases5_2x from '../../images/cases/cases5@2x.jpg';
import cases6 from '../../images/cases/cases6.jpg';
import cases6_2x from '../../images/cases/cases6@2x.jpg';
import cases7 from '../../images/cases/cases7.jpg';
import cases7_2x from '../../images/cases/cases7@2x.jpg';
import cases8 from '../../images/cases/cases8.jpg';
import cases8_2x from '../../images/cases/cases8@2x.jpg';
import cases1_wp from '../../images/cases/cases1.jpg';
import cases1_2x_wp from '../../images/cases/cases1@2x.jpg';
import cases2_wp from '../../images/cases/cases2.jpg';
import cases2_2x_wp from '../../images/cases/cases2@2x.jpg';
import cases3_wp from '../../images/cases/cases3.jpg';
import cases3_2x_wp from '../../images/cases/cases3@2x.jpg';
import cases4_wp from '../../images/cases/cases4.jpg';
import cases4_2x_wp from '../../images/cases/cases4@2x.jpg';
import cases5_wp from '../../images/cases/cases5.jpg';
import cases5_2x_wp from '../../images/cases/cases5@2x.jpg';
import cases6_wp from '../../images/cases/cases6.jpg';
import cases6_2x_wp from '../../images/cases/cases6@2x.jpg';
import cases7_wp from '../../images/cases/cases7.jpg';
import cases7_2x_wp from '../../images/cases/cases7@2x.jpg';
import cases8_wp from '../../images/cases/cases8.jpg';
import cases8_2x_wp from '../../images/cases/cases8@2x.jpg';

const CasesGallery = () => {
  return (
    <GridBox>
      <Gallery>
        <Item
          original={cases1}
          originalSrcset={`${cases1_2x} 1600w,`}
          thumbnail={cases1}
          width="800"
          height="600"
        >
          {({ ref, open }) => (
            <img ref={ref} onClick={open} src={cases1} alt="cases1" />
          )}
        </Item>
        <Item
          original="https://placekitten.com/1024/768?image=2"
          thumbnail="https://placekitten.com/80/60?image=2"
          width="1024"
          height="768"
        >
          {({ ref, open }) => (
            <img
              ref={ref}
              onClick={open}
              src="https://placekitten.com/80/60?image=2"
              alt=""
            />
          )}
        </Item>
      </Gallery>
      {/* <picture>
        <source
          srcSet={`${cases1_wp} 1x, ${cases1_2x_wp} 2x`}
          type="image/webp"
        />
        <source
          srcSet={`${cases1} 1x, ${cases1_2x}.jpg 2x`}
          type="image/jpeg"
        />
        <img src={cases1} alt="case1" />
      </picture>
      <picture>
        <source
          srcSet={`${cases2_wp} 1x, ${cases2_2x_wp} 2x`}
          type="image/webp"
        />
        <source
          srcSet={`${cases2} 1x, ${cases2_2x}.jpg 2x`}
          type="image/jpeg"
        />
        <img src={cases2} alt="case2" />
      </picture>
      <picture>
        <source
          srcSet={`${cases3_wp} 1x, ${cases3_2x_wp} 2x`}
          type="image/webp"
        />
        <source
          srcSet={`${cases3} 1x, ${cases3_2x}.jpg 2x`}
          type="image/jpeg"
        />
        <img src={cases3} alt="case3" />
      </picture>
      <picture>
        <source
          srcSet={`${cases4_wp} 1x, ${cases4_2x_wp} 2x`}
          type="image/webp"
        />
        <source
          srcSet={`${cases4} 1x, ${cases4_2x}.jpg 2x`}
          type="image/jpeg"
        />
        <img src={cases4} alt="case4" />
      </picture>
      <picture>
        <source
          srcSet={`${cases5_wp} 1x, ${cases5_2x_wp} 2x`}
          type="image/webp"
        />
        <source
          srcSet={`${cases5} 1x, ${cases5_2x}.jpg 2x`}
          type="image/jpeg"
        />
        <img src={cases5} alt="case5" />
      </picture>
      <picture>
        <source
          srcSet={`${cases6_wp} 1x, ${cases6_2x_wp} 2x`}
          type="image/webp"
        />
        <source
          srcSet={`${cases6} 1x, ${cases6_2x}.jpg 2x`}
          type="image/jpeg"
        />
        <img src={cases6} alt="case6" />
      </picture>
      <picture>
        <source
          srcSet={`${cases7_wp} 1x, ${cases7_2x_wp} 2x`}
          type="image/webp"
        />
        <source
          srcSet={`${cases7} 1x, ${cases7_2x}.jpg 2x`}
          type="image/jpeg"
        />
        <img src={cases7} alt="case7" />
      </picture>
      <picture>
        <source
          srcSet={`${cases8_wp} 1x, ${cases8_2x_wp} 2x`}
          type="image/webp"
        />
        <source
          srcSet={`${cases8} 1x, ${cases8_2x}.jpg 2x`}
          type="image/jpeg"
        />
        <img src={cases8} alt="case8" />
      </picture> */}
    </GridBox>
  );
};

export default CasesGallery;
