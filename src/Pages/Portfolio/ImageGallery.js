import React, {
  useState,
  lazy,
  Suspense,
  useRef,
  useEffect,
  useCallback,
} from "react";
import "./css/WedOne.css";

const LazyImage = lazy(() => import("../../Hooks/LazyImage"));

const ImageGallery = ({ data }) => {
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

  const handleIntersection = useCallback(
    (entries) => {
      const lastEntry = entries[entries.length - 1];
      if (lastEntry.isIntersecting && endIndex < data.length) {
        setStartIndex(endIndex);
        setEndIndex(endIndex + 2);
      }
    },
    [endIndex, data]
  );

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

  const loadImages = useCallback(
    (start, end) => {
      const imagesToLoad = data.slice(start, end);
      setLoadedImages((prevLoadedImages) => [
        ...prevLoadedImages,
        ...imagesToLoad,
      ]);
    },
    [data]
  );

  useEffect(() => {
    loadImages(startIndex, endIndex);
  }, [startIndex, endIndex, loadImages, data]);

  return (
    <div className="gallery" ref={galleryRef}>
      <div className="wed_item">
        {loadedImages.map((onePic) => {
          const { id, img } = onePic;
          return (
            <Suspense key={id} fallback={<div></div>}>
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

export default ImageGallery;
