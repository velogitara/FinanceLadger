import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import {
  GridBox,
  Img,
  Overlay,
  Thumb,
  GalleryItem,
} from './CasesGallery.styled';

import { gallery } from 'data/gallery';

import leftArrow from '../../images/gallery/prev.png';
import rightArrow from '../../images/gallery/next.png';

const CasesGallery = () => {
  const smallItemStyles = {
    cursor: 'pointer',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '100%',
  };
  const options = {
    arrowPrev: `${leftArrow}`,
    mainClass: 'pswp--custom-icon-colors',
    arrowNext: `${rightArrow}`,
    zoom: false,
    close: true,
    counter: false,
    bgOpacity: 0.8,
    padding: { top: 20, bottom: 40, left: 100, right: 100 },
    allowPanToNext: true,
    pinchToClose: false,
    loop: false,
    clickToCloseNonZoomable: true,
    closeTitle: 'Close the dialog',
    zoomTitle: 'Zoom the photo',
    arrowPrevTitle: 'Go to the previous photo',
    arrowNextTitle: 'Go to the next photo',

    errorMsg: 'The photo cannot be loaded',
    indexIndicatorSep: ' of ',
  };

  return (
    <Gallery id="my-gallery" options={options}>
      <GridBox>
        {gallery.map(({ id, img, img2 }) => {
          return (
            <Item
              key={id}
              original={img}
              originalSrcset={`${img2} 1600w,`}
              thumbnail={`${img}`}
              width="900"
              height="600"
            >
              {({ ref, open }) => (
                <GalleryItem onClick={open}>
                  <Thumb>
                    <Img
                      style={smallItemStyles}
                      ref={ref}
                      // onClick={open}
                      src={img}
                      alt={id}
                    />
                    <Overlay />
                  </Thumb>
                </GalleryItem>
              )}
            </Item>
          );
        })}
      </GridBox>
    </Gallery>
  );
};

export default CasesGallery;
