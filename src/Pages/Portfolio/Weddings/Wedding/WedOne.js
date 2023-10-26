import "../../css/WedOne.css";
import React, { useState, lazy, Suspense, useRef, useEffect, useCallback } from "react";
import data_1 from "../data/data_1";

const LazyImage = lazy(() => import("../../../../Hooks/LazyImage"));

export const WedOne = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(6);
  const [loadedImages, setLoadedImages] = useState([]);
  const galleryRef = useRef(null);

  const openImage = (onePic) => {
    setSelectedImage(onePic);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const handleIntersection = useCallback((entries) => {
    const lastEntry = entries[entries.length - 1];
    if (lastEntry.isIntersecting && endIndex < data_1.length) {
      setStartIndex(endIndex);
      setEndIndex(endIndex + 6);
    }
  }, [endIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });

    const currentGalleryRef = galleryRef.current;

    if (currentGalleryRef) {
      observer.observe(currentGalleryRef);
    }

    return () => {
      if (currentGalleryRef) {
        observer.unobserve(currentGalleryRef);
      }
    };
  }, [handleIntersection]);

  const loadImages = useCallback((start, end) => {
    const imagesToLoad = data_1.slice(start, end);
    setLoadedImages((prevLoadedImages) => [...prevLoadedImages, ...imagesToLoad]);
  }, []);

  useEffect(() => {
    loadImages(startIndex, endIndex);
  }, [startIndex, endIndex, loadImages]);

  return (
    <div className="gallery" ref={galleryRef}>
      <div className="wed_item">
        {loadedImages.map((onePic) => {
          const { id, img } = onePic;
          return (
            <Suspense key={id} fallback={<div>Loading...</div>}>
              <LazyImage src={img} alt={id} onClick={() => openImage(onePic)} />
            </Suspense>
          );
        })}
      </div>

      {selectedImage && (
        <div className="fullscreen-overlay" onClick={closeImage}>
          <img
            src={selectedImage.img}
            alt={selectedImage.img}
            id="fullscreen-image"
          />
          <span className="close-button">&times;</span>
        </div>
      )}
    </div>
  );
};
