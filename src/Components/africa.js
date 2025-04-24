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
    { src: "/images/Travels/Africa/1.jpg", width: 2, height: 3 },
    { src: "/images/Travels/Africa/2.jpg", width: 3, height: 2 },
    { src: "/images/Travels/Africa/3.jpg", width: 2, height: 3 },
    { src: "/images/Travels/Africa/4.jpg", width: 3, height: 2 },
    { src: "/images/Travels/Africa/5.jpg", width: 3, height: 2 },
    { src: "/images/Travels/Africa/6.jpg", width: 2, height: 3 },
    { src: "/images/Travels/Africa/7.jpg", width: 2, height: 3 },
    { src: "/images/Travels/Africa/8.jpg", width: 2, height: 3 },
    { src: "/images/Travels/Africa/9.jpg", width: 3, height: 2 },
    { src: "/images/Travels/Africa/10.jpg", width: 2, height: 3 },
    { src: "/images/Travels/Africa/11.jpg", width: 2, height: 3 },
    { src: "/images/Travels/Africa/12.jpg", width: 2, height: 3 },
    { src: "/images/Travels/Africa/13.jpg", width: 2, height: 3 },
]
  

function Africa() {
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
                    <Link className={'mr-4 color'} to={'/africa'}>
                        <Translate className={'active'} content={'tabs.africa'} component={'span'} />
                    </Link>
                </li>
                <li className={'list-inline-item'}>
                    <Link className={'mr-4 color'} to={'/asia'}>
                        <Translate content={'tabs.asia'} component={'span'} />
                    </Link>
                </li>
                <li className={'list-inline-item'}>
                    <Link className={'color'} to={'/europe'}>
                        <Translate content={'tabs.europe'} component={'span'} />
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
export default Africa;