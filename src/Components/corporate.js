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
    { src: "/images/Portraits/Corporate/1.jpg", width: 2, height: 3 },
    { src: "/images/Portraits/Corporate/2.jpg", width: 2, height: 3 },
    { src: "/images/Portraits/Corporate/3.jpg", width: 2, height: 3 },
    { src: "/images/Portraits/Corporate/4.jpg", width: 2, height: 3 },
    { src: "/images/Portraits/Corporate/5.jpg", width: 2, height: 3 },
    { src: "/images/Portraits/Corporate/6.jpg", width: 2, height: 3 },
    { src: "/images/Portraits/Corporate/7.jpg", width: 2, height: 3 },
    { src: "/images/Portraits/Corporate/8.jpg", width: 2, height: 3 },
    { src: "/images/Portraits/Corporate/9.jpg", width: 2, height: 3 },
    { src: "/images/Portraits/Corporate/10.jpg", width: 3, height: 2 },
];
  

function Corporate() {
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
                        <Translate content={'tabs.casual'} component={'span'} />
                    </Link>
                </li>
                <li className={'list-inline-item'}>
                    <Link className={'color'} to={'/corporate'}>
                        <Translate className={'active'} content={'tabs.corporate'} component={'span'} />
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
export default Corporate;