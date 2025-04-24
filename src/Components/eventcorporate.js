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
    { src: "/images/Events/CoorporateEvents/1.jpg", width: 3, height: 2 },
    { src: "/images/Events/CoorporateEvents/2.jpg", width: 3, height: 2 },
    { src: "/images/Events/CoorporateEvents/3.jpg", width: 3, height: 2 },
    { src: "/images/Events/CoorporateEvents/4.jpg", width: 3, height: 2 },
    { src: "/images/Events/CoorporateEvents/5.jpg", width: 3, height: 2 },
    { src: "/images/Events/CoorporateEvents/6.jpg", width: 3, height: 2 },
    { src: "/images/Events/CoorporateEvents/7.jpg", width: 2, height: 3 },
    { src: "/images/Events/CoorporateEvents/8.jpg", width: 3, height: 2 },
    { src: "/images/Events/CoorporateEvents/9.jpg", width: 3, height: 2 },
    { src: "/images/Events/CoorporateEvents/10.jpg", width: 3, height: 2 }
];
  

function Eventcoporate() {
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
            <Link className={'mr-4 color'} to={'/eventcorporate'}>
              <Translate className={'active'} content={'tabs.corporatevents'} component={'span'} />
            </Link>
          </li>
          <li className={'list-inline-item'}>
            <Link className={'color'} to={'/social'}>
              <Translate content={'tabs.social'} component={'span'} />
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
export default Eventcoporate;