import React from "react";

const LazyImage = ({ src, alt, onClick }) => {
  return (
    <img
      src={src}
      alt={alt}
      onClick={onClick}
      loading="lazy"
    />
  );
};

export default LazyImage;
