import "./css/Weddings.css";
import React from "react";
import ImageGallery from "./ImageGallery";
import svatbyImageList from "./Svatby/svatbyImageList";

export default function Weddings() {
  return (
    <div className="Weddings">
      <h1>Svatby</h1>
      <ImageGallery data={svatbyImageList} />
    </div>
  );
}
