import React from "react";
import ImageGallery from "./ImageGallery.js";
import pers from "./Reklamni/reklamniImageList.js";

export const Reklamni = () => {
  return <ImageGallery data={pers} />;
};