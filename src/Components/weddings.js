import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import Translate from 'react-translate-component';
import en from '../Languages/en';
import fr from '../Languages/fr';
import counterpart from "counterpart";
import { Link } from 'react-router-dom';

counterpart.registerInterpolations('en', en);
counterpart.registerInterpolations('fr', fr);

const photos = [
  { src: "/images/Weddings/1.JPG", width: 2, height: 3 },
  { src: "/images/Weddings/2.jpg", width: 3, height: 2 },
  { src: "/images/Weddings/3.jpg", width: 3, height: 2 },
  { src: "/images/Weddings/4.jpg", width: 2, height: 3 },
  { src: "/images/Weddings/5.jpg", width: 3, height: 2 },
  { src: "/images/Weddings/6.jpg", width: 3, height: 2 },
  { src: "/images/Weddings/7.jpg", width: 3, height: 2 },
  { src: "/images/Weddings/8.jpg", width: 3, height: 2 },
  { src: "/images/Weddings/9.jpg", width: 3, height: 2 },
  { src: "/images/Weddings/10.jpg", width: 3, height: 2 },
  { src: "/images/Weddings/11.jpg", width: 2, height: 3 },
  { src: "/images/Weddings/12.jpg", width: 3, height: 2 },
  { src: "/images/Weddings/13.jpg", width: 3, height: 2 },
  { src: "/images/Weddings/14.jpg", width: 3, height: 2 },
  { src: "/images/Weddings/15.jpg", width: 3, height: 2 },
  { src: "/images/Weddings/16.jpg", width: 2, height: 3 },
  { src: "/images/Weddings/17.jpg", width: 2, height: 3 },
  { src: "/images/Weddings/18.jpg", width: 3, height: 2 },
  { src: "/images/Weddings/19.jpg", width: 3, height: 2 },
  { src: "/images/Weddings/20.jpg", width: 2, height: 3 },
  { src: "/images/Weddings/21.jpg", width: 2, height: 3 },
  { src: "/images/Weddings/22.jpg", width: 3, height: 2 },
  { src: "/images/Weddings/23.jpg", width: 2, height: 3 },
  { src: "/images/Weddings/24.jpg", width: 2, height: 3 },
  { src: "/images/Weddings/25.jpg", width: 2, height: 3 },
  { src: "/images/Weddings/26.jpg", width: 3, height: 2 },
  { src: "/images/Weddings/27.jpg", width: 3, height: 2 },
  { src: "/images/Weddings/28.jpg", width: 2, height: 3 },
  { src: "/images/Weddings/29.jpg", width: 2, height: 3 },
  { src: "/images/Weddings/30.jpg", width: 3, height: 2 },
  { src: "/images/Weddings/31.jpg", width: 3, height: 2 },
  { src: "/images/Weddings/32.jpg", width: 2, height: 3 },
  { src: "/images/Weddings/33.jpg", width: 3, height: 2 },
  { src: "/images/Weddings/34.jpg", width: 2, height: 3 },
  { src: "/images/Weddings/35.jpg", width: 3, height: 2 },
  { src: "/images/Weddings/36.jpg", width: 3, height: 2 },
  { src: "/images/Weddings/37.jpg", width: 3, height: 2 },
  { src: "/images/Weddings/38.jpg", width: 2, height: 3 },
  { src: "/images/Weddings/39.jpg", width: 2, height: 3 },
  { src: "/images/Weddings/40.jpg", width: 3, height: 2 },
];
  

function Weddings() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <div className={'text-center'}>
        <ul className={'list-inline'}>
          <li className={'list-inline-item'}>
            <Link className={'color'} to={'/weddings'}>
              <Translate className={'active'} content={'weddings'} component={'span'} />
            </Link>
          </li>
        </ul>
        <hr />
      </div>
      <div className={'mt-5'}>
        <Gallery photos={photos} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
                />
              </Modal>
            ) : null}
        </ModalGateway>
      </div>
    </div>
  );
}
export default Weddings;