import "./css/Weddings.css";
//  routy k obrazkum pro linky v temp.txt
// import { Link } from "react-router-dom";
// import pic1 from "../../Images/Personal/1/DSC_4489.jpg";
import React from "react";
import ImageGallery from "./ImageGallery.js";
import portretyImageList from "./Personal/imageList/portretyImageList.js";

export default function Personal() {
  return (
    <div className="Weddings">
      <ImageGallery data={portretyImageList} />
    </div>
  );
}
