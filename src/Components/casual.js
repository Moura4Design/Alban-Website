import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import en from '../Languages/en';
import fr from '../Languages/fr';
import counterpart from "counterpart";
import Translate from "react-translate-component";
import { Link } from 'react-router-dom';

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('fr', fr);

const photos = [
    { src: "/images/Portraits/Casual/1.jpg", width: 2, height: 3 },
    { src: "/images/Portraits/Casual/2.jpg", width: 3, height: 2 },
    { src: "/images/Portraits/Casual/3.jpg", width: 2, height: 3 },
    { src: "/images/Portraits/Casual/4.jpg", width: 2, height: 3 },
    { src: "/images/Portraits/Casual/5.jpg", width: 2, height: 3 },
    { src: "/images/Portraits/Casual/6.jpg", width: 2, height: 3 },
    { src: "/images/Portraits/Casual/7.jpg", width: 2, height: 3 },
    { src: "/images/Portraits/Casual/8.jpg", width: 3, height: 2 },
    { src: "/images/Portraits/Casual/9.jpg", width: 2, height: 3 },
    { src: "/images/Portraits/Casual/10.jpg", width: 3, height: 2 },
    { src: "/images/Portraits/Casual/11.jpg", width: 3, height: 2 },
    { src: "/images/Portraits/Casual/12.jpg", width: 2, height: 3 },
    { src: "/images/Portraits/Casual/13.jpg", width: 3, height: 2 },
    { src: "/images/Portraits/Casual/14.jpg", width: 3, height: 2 },
    { src: "/images/Portraits/Casual/15.jpg", width: 3, height: 2 },
];
  

function Casual() {
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
                    <Link className={'mr-4 color'} to={'/casual'}>
                        <Translate className={'active'} content={'tabs.casual'} component={'span'} />
                    </Link>
                </li>
                <li className={'list-inline-item'}>
                    <Link className={'color'} to={'/corporate'}>
                        <Translate content={'tabs.corporate'} component={'span'} />
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
export default Casual;