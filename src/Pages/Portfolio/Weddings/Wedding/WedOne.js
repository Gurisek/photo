import "../../css/WedOne.css";
import React, { useState } from "react";
import data_1 from "../data/data_1";

export const WedOne = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (onePic) => {
    setSelectedImage(onePic);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      <div className="wed_item">
        {data_1.map((onePic) => {
          const { id, img } = onePic;
          return (
            <img
              key={id}
              src={img}
              alt={id}
              onClick={() => openImage(onePic)}
              loading="lazy"
            />
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
